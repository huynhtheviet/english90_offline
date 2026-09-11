# English 90 — Offline Fluency Program

Phiên bản hiện tại: **v9** — hoàn thiện roadmap luyện giao tiếp thực tế và theo dõi năng lực dựa trên bằng chứng.

## Cách dùng
1. Giải nén ZIP.
2. Mở `index.html`.
3. Chọn Day 1 → Day 90.
4. Tiến độ và ghi chú được lưu ngay trên thiết bị.

## Hoạt động hoàn toàn offline
- Toàn bộ 90 ngày, transcript, phrases, quiz, speaking prompts đều nằm trong website.
- Mỗi câu tiếng Anh có nút hiện/ẩn bản dịch tiếng Việt; toàn bộ bản dịch nằm sẵn trong `translations.js`.
- Trang Cài đặt cho phép chọn giọng tiếng Anh của thiết bị, chỉnh tốc độ, cao độ và tự động hiện bản dịch. Ứng dụng ưu tiên `Google US English — en-US` khi có sẵn, nếu không sẽ dùng giọng mặc định của thiết bị.
- Listening, shadowing và “video lesson” dùng giọng `SpeechSynthesis` có sẵn trên thiết bị.
- Chế độ shadowing đọc lần lượt từng câu và cho phép chỉnh khoảng nghỉ để nói lại.
- Ghi âm phần luyện nói theo từng ngày, nghe lại và lưu trực tiếp trên thiết bị bằng IndexedDB.
- Mỗi ngày có 8 useful phrases được chọn riêng theo đúng chủ đề; 3 Phrase cốt lõi được tự động đưa vào lịch ôn thích nghi và vẫn có thể đánh dấu thêm bằng biểu tượng sao.
- Mỗi useful phrase có ít nhất 3 ví dụ công việc thực tế, kèm nút nghe và bản dịch tiếng Việt có sẵn.
- Mỗi ngày có 8 lượt giao tiếp response-first: nghe câu hỏi, tự trả lời hoặc ghi âm trước, rồi mới mở Phrase gợi ý và câu mẫu; có nút thử lại từng lượt.
- Luồng “Bài học hôm nay” có chế độ Nhanh 8 phút và Đầy đủ 15–20 phút, chỉ hiện một nhiệm vụ tại mỗi bước.
- Ôn tập chủ động trộn 4 dạng Việt → Anh, nghe → gõ, điền chỗ trống và phản hồi tình huống; bắt buộc trả lời trước khi xem đáp án và tự điều chỉnh lịch theo 4 mức độ nhớ.
- Speaking Practice lưu riêng ba bản A/B/C theo vòng 2 phút → 90 giây → 60 giây, kèm rubric tự đánh giá và chọn bản tốt nhất.
- Mỗi ngày có một quiz riêng dựa trên chủ đề, framework và phrase của bài học đó.
- Không cần YouTube, API hay tài khoản bên ngoài.

## Tính năng v9

- 180 Phrase thực tế thuộc 14 nhóm chức năng; mỗi Phrase xuất hiện trong 4 ngày và có bản dịch cùng ví dụ offline.
- 90 Listening script riêng (khoảng 45–90 giây), đồng bộ scenario với Shadowing và Conversation.
- Listening Ladder bốn tầng: nghe không chữ, nghe theo đoạn ở ba tốc độ, transcript có highlight và bản dịch mở sau cùng; câu hỏi/đáp án luôn khóa cho đến khi người học trả lời.
- Hội thoại response-first có ba nhánh đồng ý, không đồng ý và cần thêm thông tin; kết thúc bằng quyết định, owner/deadline/follow-up và bản tóm tắt.
- Sổ lỗi tối đa ba lỗi mỗi bài nói, ghi âm nói lại, đánh dấu đã sửa và tự đưa câu cải thiện vào lịch ôn.
- Dashboard Năng lực theo Range, Accuracy, Fluency, Interaction và Coherence; đây là tự đánh giá, không phải chứng chỉ CEFR chính thức.
- Onboarding cá nhân hóa offline, Answer Bank chín nhóm, lịch sử chỉnh sửa và mission thực tế mỗi tuần.
- Pronunciation Lab có chunking, trọng âm, linking/reduction, tốc độ 0,75×/1×, loop và nghe xen kẽ mẫu–bản ghi.
- Mixed Review, soft streak, bộ lọc giọng, backup/restore JSON có kiểm tra schema và kiểm kê audio riêng.
- Migration tự động giữ Phrasebook cũ và ánh xạ bản ghi v8 sang slot A mà không xóa IndexedDB.

## Kiểm thử

Chạy bộ kiểm tra tĩnh và hợp đồng dữ liệu:

```bash
node tests/validate.mjs
```

Bộ kiểm tra xác minh cú pháp JavaScript, ID HTML, 90 ngày, 8 Phrase/ngày, 180 Phrase lặp lại bốn lần, bản dịch, scenario liên kết, bốn tầng Listening, migration v8 và asset cache offline.

## Nếu trình duyệt chặn một số tính năng khi mở file trực tiếp
Chạy local server:
`python3 -m http.server 8000`
sau đó mở `http://localhost:8000`

Khi chạy trên `localhost`, trang sẽ tự tải lại sau khi các file giao diện thay đổi.

## Lưu ý
Giọng đọc phụ thuộc vào English voice đã cài trên thiết bị. iPhone, Mac và Windows hiện đại thường có sẵn.
