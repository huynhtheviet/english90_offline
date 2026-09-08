# English 90 — Offline Fluency Program

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

## Nếu trình duyệt chặn một số tính năng khi mở file trực tiếp
Chạy local server:
`python3 -m http.server 8000`
sau đó mở `http://localhost:8000`

Khi chạy trên `localhost`, trang sẽ tự tải lại sau khi các file giao diện thay đổi.

## Lưu ý
Giọng đọc phụ thuộc vào English voice đã cài trên thiết bị. iPhone, Mac và Windows hiện đại thường có sẵn.
