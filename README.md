# English 90 — Offline Fluency Program

## Cách dùng
1. Giải nén ZIP.
2. Mở `index.html`.
3. Chọn Day 1 → Day 90.
4. Tiến độ và ghi chú được lưu ngay trên thiết bị.

## Hoạt động hoàn toàn offline
- Toàn bộ 90 ngày, transcript, phrases, quiz, speaking prompts đều nằm trong website.
- Mỗi câu tiếng Anh có nút hiện/ẩn bản dịch tiếng Việt; toàn bộ bản dịch nằm sẵn trong `translations.js`.
- Trang Cài đặt cho phép chọn giọng tiếng Anh của thiết bị, chỉnh tốc độ, cao độ và tự động hiện bản dịch.
- Listening, shadowing và “video lesson” dùng giọng `SpeechSynthesis` có sẵn trên thiết bị.
- Không cần YouTube, API hay tài khoản bên ngoài.

## Nếu trình duyệt chặn một số tính năng khi mở file trực tiếp
Chạy local server:
`python3 -m http.server 8000`
sau đó mở `http://localhost:8000`

Khi chạy trên `localhost`, trang sẽ tự tải lại sau khi các file giao diện thay đổi.

## Lưu ý
Giọng đọc phụ thuộc vào English voice đã cài trên thiết bị. iPhone, Mac và Windows hiện đại thường có sẵn.
