const E90_VI = (() => {
  const topics = [
    'Giới thiệu bản thân',
    'Giải thích công việc bạn làm',
    'Mô tả dự án hiện tại của bạn',
    'Giải thích một vấn đề và giải pháp',
    'Đưa ra ý kiến của bạn',
    'Yêu cầu làm rõ',
    'Cập nhật tình hình dự án',
    'Nói về điểm mạnh của bạn',
    'Nói về một điểm yếu',
    'Nói về một thành tựu',
    'Nói về một sai lầm',
    'Bày tỏ bất đồng một cách lịch sự',
    'Đặt câu hỏi tốt hơn',
    'Điều hành một cuộc họp ngắn',
    'Xử lý cuộc gọi với khách hàng',
    'Đề xuất một giải pháp',
    'Bảo vệ quan điểm của bạn',
    'Trả lời các câu hỏi bất ngờ',
    'Cập nhật tình hình trong 30 giây',
    'Xử lý các câu hỏi khó',
    'Kể về hành trình nghề nghiệp của bạn',
    'Giải thích sản phẩm của bạn một cách đơn giản',
    'Mô tả đội nhóm của bạn',
    'Nói về khách hàng của bạn',
    'Giải thích một khái niệm kỹ thuật',
    'Thảo luận về các ưu tiên',
    'Nói về thời hạn',
    'Đưa ra một đề xuất',
    'Tóm tắt một cuộc thảo luận',
    'Mở đầu và kết thúc một cuộc họp',
    'Lập chương trình họp',
    'Giải thích các yêu cầu',
    'Làm rõ phạm vi',
    'Thảo luận về những đánh đổi',
    'Ước tính khối lượng công việc',
    'Nói về các rủi ro',
    'Báo cáo một trở ngại lên cấp trên',
    'Đưa ra phản hồi mang tính xây dựng',
    'Tiếp nhận phản hồi',
    'Thương lượng thời hạn',
    'Thương lượng phạm vi',
    'Giải thích một sự chậm trễ',
    'Đưa ra quyết định',
    'So sánh hai phương án',
    'Trình bày dữ liệu một cách đơn giản',
    'Giải thích phản hồi của người dùng',
    'Thảo luận về chiến lược sản phẩm',
    'Thảo luận về AI trong công việc',
    'Thảo luận về tự động hóa',
    'Giải thích một quy trình làm việc',
    'Mô tả kiến trúc hệ thống',
    'Giải thích API một cách đơn giản',
    'Giải thích cơ sở dữ liệu một cách đơn giản',
    'Giải thích các dịch vụ đám mây',
    'Nói về bảo mật',
    'Nói về chất lượng',
    'Nói về kiểm thử',
    'Nói về các lỗi phần mềm',
    'Nói về một bản phát hành',
    'Hãy giới thiệu về bản thân bạn',
    'Tại sao bạn muốn vị trí này?',
    'Tại sao chúng tôi nên tuyển bạn?',
    'Điểm mạnh lớn nhất',
    'Điểm yếu lớn nhất',
    'Một dự án khó khăn',
    'Xung đột trong công việc',
    'Ví dụ về khả năng lãnh đạo',
    'Thất bại và bài học',
    'Mục tiêu nghề nghiệp',
    'Mức lương mong muốn',
    'Làm việc dưới áp lực',
    'Làm việc nhóm',
    'Giải quyết vấn đề',
    'Các câu hỏi dành cho người phỏng vấn',
    'Cuộc gọi tìm hiểu nhu cầu khách hàng',
    'Trình diễn sản phẩm',
    'Thảo luận kỹ thuật',
    'Lập kế hoạch sprint',
    'Họp đứng hằng ngày',
    'Họp nhìn lại',
    'Thảo luận lộ trình',
    'Thuyết trình với nhà đầu tư/về sản phẩm',
    'Khiếu nại của khách hàng',
    'Bên liên quan khó tính',
    'Hợp tác liên nhóm',
    'Làm việc từ xa',
    'Tranh luận chiến lược',
    'Bài thuyết trình 10 phút',
    'Phỏng vấn thử',
    'Cuộc họp cuối cùng bằng tiếng Anh trong 30 phút'
  ];

  const phases = {
    'Foundation Fluency': 'Nền tảng trôi chảy',
    'Professional Fluency': 'Giao tiếp chuyên nghiệp trôi chảy',
    'Interview Fluency': 'Phỏng vấn trôi chảy',
    'Immersion Fluency': 'Giao tiếp nhập vai trôi chảy'
  };

  const frameworkSteps = {
    'Point → Reason → Example → Point again': 'Ý chính → Lý do → Ví dụ → Nhắc lại ý chính',
    'Situation → Task → Action → Result': 'Tình huống → Nhiệm vụ → Hành động → Kết quả',
    'Context → Listen → Explain → Action → Recap': 'Bối cảnh → Lắng nghe → Giải thích → Hành động → Tóm tắt',
    'What it is → Why it matters → How it works → Example': 'Đó là gì → Tại sao quan trọng → Hoạt động thế nào → Ví dụ',
    'Done → Now → Blocker → Next': 'Đã xong → Hiện tại → Trở ngại → Tiếp theo',
    'Goal → Options → Trade-offs → Choice → Next step': 'Mục tiêu → Các phương án → Đánh đổi → Lựa chọn → Bước tiếp theo'
  };

  const phrases = {
    'The main reason is…': 'Lý do chính là…',
    'For example…': 'Ví dụ…',
    'If I understand correctly…': 'Nếu tôi hiểu đúng…',
    'Could you clarify…?': 'Bạn có thể làm rõ… được không?',
    'One option would be to…': 'Một phương án là…',
    'I’d recommend…': 'Tôi đề xuất…',
    'The main concern is…': 'Mối lo ngại chính là…',
    'What I mean is…': 'Ý tôi là…',
    'Let me put it another way…': 'Để tôi diễn đạt theo cách khác…',
    'Based on what we know right now…': 'Dựa trên những gì chúng ta biết hiện giờ…',
    'The next step is…': 'Bước tiếp theo là…',
    'To summarize…': 'Tóm lại…',
    'That’s a fair question.': 'Đó là một câu hỏi hợp lý.',
    'I see your point, but…': 'Tôi hiểu ý bạn, nhưng…',
    'I agree to some extent, however…': 'Tôi đồng ý ở một mức độ nào đó, tuy nhiên…',
    'What problem are we trying to solve?': 'Chúng ta đang cố gắng giải quyết vấn đề gì?',
    'How will we know if this is successful?': 'Làm sao chúng ta biết việc này thành công?',
    'We’ve run into an issue with…': 'Chúng ta đã gặp một vấn đề với…',
    'We’re still on track to…': 'Chúng ta vẫn đang đúng tiến độ để…',
    'I don’t have the exact answer yet, but…': 'Tôi chưa có câu trả lời chính xác, nhưng…',
    'Let me give you a quick update.': 'Để tôi cập nhật nhanh cho bạn.',
    'One thing I learned was…': 'Một điều tôi đã học được là…',
    'Looking back, I would…': 'Nhìn lại, tôi sẽ…',
    'What I’m trying to achieve is…': 'Điều tôi đang cố gắng đạt được là…',
    'The biggest challenge is…': 'Thách thức lớn nhất là…',
    'We have a couple of options.': 'Chúng ta có một vài phương án.',
    'The reason I prefer this option is…': 'Lý do tôi ưu tiên phương án này là…',
    'Before we decide…': 'Trước khi chúng ta quyết định…',
    'Let’s move on to…': 'Hãy chuyển sang…',
    'I’d like to start by…': 'Tôi muốn bắt đầu bằng việc…',
    'The main point is…': 'Ý chính là…',
    'From my perspective…': 'Theo quan điểm của tôi…'
  };

  const quiz = {
    'What should you focus on first when speaking?': 'Khi nói, trước tiên bạn nên tập trung vào điều gì?',
    'If you forget a word, what should you do?': 'Nếu quên một từ, bạn nên làm gì?',
    'What is the best way to improve fluency?': 'Cách tốt nhất để cải thiện độ trôi chảy là gì?',
    'How long should today’s main speaking answer be?': 'Phần trả lời nói chính hôm nay nên dài bao lâu?',
    'What should you do after speaking?': 'Bạn nên làm gì sau khi nói?',
    'Perfect grammar': 'Ngữ pháp hoàn hảo',
    'A clear main idea': 'Một ý chính rõ ràng',
    'Advanced vocabulary': 'Từ vựng nâng cao',
    'Speaking as fast as possible': 'Nói nhanh nhất có thể',
    'Stop': 'Dừng lại',
    'Switch to Vietnamese': 'Chuyển sang tiếng Việt',
    'Explain it another way': 'Diễn đạt theo cách khác',
    'Restart': 'Bắt đầu lại',
    'Speak regularly': 'Luyện nói thường xuyên',
    'Memorize dictionaries': 'Học thuộc từ điển',
    'Avoid mistakes': 'Tránh mắc lỗi',
    'Only read': 'Chỉ đọc',
    '10 seconds': '10 giây',
    '30 seconds': '30 giây',
    '2–3 minutes': '2–3 phút',
    '20 minutes': '20 phút',
    'Ignore it': 'Bỏ qua',
    'Review 2–3 important mistakes': 'Xem lại 2–3 lỗi quan trọng',
    'Correct every tiny mistake': 'Sửa mọi lỗi nhỏ',
    'Start over immediately': 'Bắt đầu lại ngay lập tức'
  };

  const lowerFirst = text => text.charAt(0).toLocaleLowerCase('vi') + text.slice(1);
  const pair = (en, vi) => ({en, vi});
  const topic = lesson => lesson.title.replace(/^(Interview|Immersion): /, '');
  const topicVi = lesson => topics[lesson.day - 1];

  function objective(lesson) {
    const viTopic = topicVi(lesson);
    if (lesson.day < 60) {
      return [pair(lesson.objective, `Nói rõ ràng về “${viTopic}” trong 2–3 phút bằng một cấu trúc đơn giản và từ vựng thực tế trong công việc.`)];
    }
    if (lesson.day < 75) {
      return [pair(lesson.objective, `Trả lời rõ ràng chủ đề phỏng vấn “${viTopic}” trong 2–3 phút mà không học thuộc lòng kịch bản.`)];
    }
    return [pair(lesson.objective, `Xử lý một tình huống “${viTopic}” thực tế bằng tiếng Anh với rất ít thời gian chuẩn bị.`)];
  }

  function listening(lesson) {
    const enTopic = topic(lesson).toLowerCase();
    const viTopic = lowerFirst(topicVi(lesson));
    return [
      pair(`Here is a short work situation about ${enTopic}.`, `Đây là một tình huống công việc ngắn về ${viTopic}.`),
      pair('The speaker starts by giving context, then explains the main point, and finally suggests a next step.', 'Người nói bắt đầu bằng việc đưa ra bối cảnh, sau đó giải thích ý chính và cuối cùng đề xuất bước tiếp theo.'),
      pair('The important thing is not to understand every word.', 'Điều quan trọng không phải là hiểu từng từ.'),
      pair('Listen for the problem, the reason, and the action.', 'Hãy chú ý lắng nghe vấn đề, lý do và hành động.'),
      pair('After listening, try to summarize the message in your own words.', 'Sau khi nghe, hãy thử tóm tắt thông điệp bằng lời của bạn.')
    ];
  }

  function shadowing(lesson) {
    const enTopic = topic(lesson).toLowerCase();
    const viTopic = lowerFirst(topicVi(lesson));
    return [
      pair(`Today I want to talk about ${enTopic}.`, `Hôm nay tôi muốn nói về ${viTopic}.`),
      pair('I’ll keep it simple and focus on the main idea.', 'Tôi sẽ trình bày đơn giản và tập trung vào ý chính.'),
      pair('First, I would explain the context so the listener understands why this matters.', 'Trước tiên, tôi sẽ giải thích bối cảnh để người nghe hiểu tại sao điều này quan trọng.'),
      pair('Then I would describe the key point, give one practical example, and explain the result or next step.', 'Sau đó, tôi sẽ trình bày điểm chính, đưa ra một ví dụ thực tế và giải thích kết quả hoặc bước tiếp theo.'),
      pair('For me, clear communication is more important than using difficult words.', 'Đối với tôi, giao tiếp rõ ràng quan trọng hơn việc sử dụng những từ khó.'),
      pair('If I’m not sure about something, I can say, “I don’t have the exact answer yet, but here’s what I know.”', 'Nếu chưa chắc về điều gì đó, tôi có thể nói: “Tôi chưa có câu trả lời chính xác, nhưng đây là những gì tôi biết.”'),
      pair('That helps me keep the conversation moving.', 'Điều đó giúp tôi duy trì cuộc trò chuyện.'),
      pair('At the end, I would summarize the main point and make the next action clear.', 'Cuối cùng, tôi sẽ tóm tắt ý chính và nói rõ hành động tiếp theo.')
    ];
  }

  function speaking(lesson) {
    const enTopic = topic(lesson);
    const viTopic = topicVi(lesson);
    if (lesson.day < 60) {
      return [
        pair(`Speak for 2–3 minutes about: “${enTopic}”.`, `Hãy nói trong 2–3 phút về chủ đề: “${viTopic}”.`),
        pair('Use one clear structure, one example, and finish with a conclusion or next step.', 'Sử dụng một cấu trúc rõ ràng, một ví dụ và kết thúc bằng kết luận hoặc bước tiếp theo.')
      ];
    }
    if (lesson.day < 75) {
      return [
        pair('Imagine you are in a real job interview.', 'Hãy tưởng tượng bạn đang tham gia một buổi phỏng vấn xin việc thực tế.'),
        pair(`Answer this topic: “${enTopic}”.`, `Trả lời chủ đề này: “${viTopic}”.`),
        pair('Speak for 2–3 minutes.', 'Hãy nói trong 2–3 phút.'),
        pair('Include one real example.', 'Đưa vào một ví dụ thực tế.')
      ];
    }
    return [
      pair(`Role-play this real work situation: ${enTopic}.`, `Hãy nhập vai tình huống công việc thực tế này: ${viTopic}.`),
      pair('Speak continuously for 3–5 minutes.', 'Hãy nói liên tục trong 3–5 phút.'),
      pair('Ask questions, respond, summarize, and agree on a next step.', 'Đặt câu hỏi, phản hồi, tóm tắt và thống nhất bước tiếp theo.')
    ];
  }

  function challenge(lesson) {
    return [
      pair('Give yourself 5 seconds to start.', 'Cho bản thân 5 giây để bắt đầu.'),
      pair('Speak without restarting.', 'Nói liên tục, không bắt đầu lại.'),
      pair(`Finish Day ${lesson.day} with a 60-second version of the same answer.`, `Kết thúc Ngày ${lesson.day} bằng phiên bản 60 giây của cùng câu trả lời.`)
    ];
  }

  function title(lesson) {
    return pair(`Day ${lesson.day} — ${lesson.title}`, `Ngày ${lesson.day} — ${topicVi(lesson)}`);
  }

  function framework(lesson) {
    return pair(`${lesson.framework.name}: ${lesson.framework.steps}`, `${lesson.framework.name}: ${frameworkSteps[lesson.framework.steps]}`);
  }

  return {topics, phases, frameworkSteps, phrases, quiz, topicVi, objective, listening, shadowing, speaking, challenge, title, framework};
})();
