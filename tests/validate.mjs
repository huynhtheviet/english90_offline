import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

const root=new URL('../',import.meta.url);
const read=name=>fs.readFileSync(new URL(name,root),'utf8');
for(const file of ['translations.js','content-v9.js','features-v9.js','app.js','sw.js'])execFileSync(process.execPath,['--check',new URL(file,root).pathname]);

const html=read('index.html'),ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
assert.equal(ids.length,new Set(ids).size,'HTML contains duplicate IDs');

const sandbox={console};vm.createContext(sandbox);
vm.runInContext(read('translations.js')+'\nthis.E90=E90_VI;',sandbox);
vm.runInContext(read('content-v9.js')+'\nthis.V9=E90_V9;',sandbox);
const appPrefix=read('app.js').split('let current =')[0];
vm.runInContext(appPrefix+'\nthis.lessonData=lessons;',sandbox);
const lessons=sandbox.lessonData,bank=sandbox.V9.phraseBank;
assert.equal(lessons.length,90,'Expected 90 lessons');
assert.equal(bank.length,180,'Expected 180 practical phrases');
assert.deepEqual([...new Set(lessons.map(lesson=>lesson.phrases.length))],[8],'Each day must contain 8 phrases');
assert.equal(new Set(lessons.map(lesson=>lesson.v9.scenario.id)).size,90,'Each day needs its own scenario');
assert.equal(new Set(lessons.map(lesson=>lesson.listening)).size,90,'Each listening script must be unique');
assert.ok(lessons.every(lesson=>{const words=lesson.listening.trim().split(/\s+/).length;return words>=100&&words<=180;}),'Listening scripts should be roughly 45–90 seconds');

const appearances={};for(const lesson of lessons)for(const phrase of lesson.phrases)appearances[phrase]=(appearances[phrase]||0)+1;
assert.ok(bank.every(item=>appearances[item.en]>=4),'Every important phrase must appear on at least four days');
assert.ok(bank.every(item=>item.vi&&sandbox.E90.phrases[item.en]),'Every phrase needs a bundled Vietnamese translation');
assert.ok(bank.every(item=>lessons.some(lesson=>lesson.v9.listening.some(sentence=>sentence.en.includes(item.en)))),'Every phrase must appear in practical listening content');
assert.ok(lessons.every(lesson=>lesson.v9.shadowing.every(sentence=>lesson.v9.listening.includes(sentence))),'Listening and shadowing must use the same scenario');
assert.ok(lessons.every(lesson=>lesson.v9.conversation.context.en===lesson.v9.scenario.context.en),'Conversation must use the same scenario');
assert.ok(lessons.every(lesson=>Object.keys(lesson.v9.conversation.branches).length===3),'Every conversation needs three branches');
assert.ok(lessons.every(lesson=>lesson.v9.questions.length===4),'Every day needs main/detail/inference/dictation questions');

function assertPairs(value,path='v9'){
  if(!value||typeof value!=='object')return;
  if(Object.hasOwn(value,'en'))assert.equal(typeof value.vi,'string',`${path} is missing Vietnamese`);
  for(const [key,child] of Object.entries(value))assertPairs(child,`${path}.${key}`);
}
lessons.forEach((lesson,index)=>assertPairs(lesson.v9,`day${index+1}`));

const features=read('features-v9.js');
assert.match(features,/Không nhìn chữ/);assert.match(html,/features-v9\.js\?v=9/);
assert.match(features,/Trả lời trước để mở/,'Answers must start locked');
assert.match(features,/schemaVersion:9/,'Backup schema must be versioned');
assert.match(features,/e90-data-version/,'v8 migration marker missing');
assert.match(read('app.js'),/slot:'A'.*slot:'B'.*slot:'C'/s,'A/B/C recording plan missing');
const sw=read('sw.js');assert.match(sw,/english90-v9/);for(const asset of ['content-v9.js?v=9','features-v9.js?v=9','app.js?v=9'])assert.ok(sw.includes(asset),`Offline cache missing ${asset}`);

// Migration contract: normalize a legacy string phrase and preserve legacy recording as slot A metadata.
const store=new Map([
  ['e90-phrasebook',JSON.stringify({'Legacy phrase':'Bản dịch cũ'})],
  ['e90-recording-meta',JSON.stringify({2:{createdAt:123,duration:9,rubric:{clarity:3}}})]
]);
const migrationSandbox={
  localStorage:{getItem:key=>store.get(key)??null,setItem:(key,value)=>store.set(key,String(value)),removeItem:key=>store.delete(key),key:index=>[...store.keys()][index]??null,get length(){return store.size;}},
  sessionStorage:{getItem(){return null},setItem(){}},E90_VI:{phrases:{},phraseExamples:{}},window:{addEventListener(){}},document:{},console,setTimeout,clearTimeout,Blob,URL,alert(){},confirm(){return false}
};
vm.createContext(migrationSandbox);vm.runInContext(features,migrationSandbox);
assert.equal(JSON.parse(store.get('e90-phrasebook'))['Legacy phrase'].vi,'Bản dịch cũ');
assert.equal(JSON.parse(store.get('e90-recording-meta'))[2].slots.A.createdAt,123);
assert.equal(store.get('e90-data-version'),'9');

console.log('English 90 v9 validation passed: 90 days, 180 phrases, 4 listening levels, migration and offline cache.');
