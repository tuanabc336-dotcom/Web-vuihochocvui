# Bé Vui Học — bản dựng lại (clone tham khảo)

Bản dựng lại giao diện và trải nghiệm của **vuihochocvui.com** (ứng dụng học miễn phí
cho bé 3–6 tuổi), kèm theo ba trò chơi nhỏ chạy được thật trên trình duyệt.

## Chạy thử

Cách 1 — nhấp đôi `run.bat` (cần Python), rồi mở http://127.0.0.1:8123

Cách 2 — mở thẳng `index.html` bằng Chrome/Edge (một số trình duyệt chặn
`localStorage` với `file://`, khi đó số sao sẽ không được lưu).

## Có gì trong này

| Đường dẫn | Nội dung |
| --- | --- |
| `index.html` | Màn hình chào: poster 941×1672, mặt trời, 4 bạn nhân vật, logo, khẩu hiệu, 3 chủ đề, nút Bắt đầu |
| `tieng-viet.html` | Giới thiệu học Tiếng Việt + mẹo học cùng con |
| `toan.html` | Giới thiệu học Toán, tư duy |
| `tro-choi-cho-be.html` | Giới thiệu khu trò chơi |
| `about.html` | Giới thiệu, quyền riêng tư, khu vực chia sẻ |
| `assets/css` | `base.css` (dùng chung), `home.css` (poster), `games.css` (khu vui chơi) |
| `assets/js` | `lang.js` (5 ngôn ngữ), `games.js` (3 trò chơi), `site.js` (nút, hộp thoại, chia sẻ) |
| `assets/img` | Hình ảnh lấy từ trang gốc để giữ đúng phong cách |

## Ba trò chơi đã chạy được

1. **Học chữ** — nhận biết chữ cái, có nút nghe (Web Speech API) đọc chữ và từ.
2. **Học số** — đếm hình rồi chọn số đúng (1–10).
3. **Trò chơi trí nhớ** — lật 12 thẻ, tìm 6 cặp hình.

Mỗi câu đúng nhận 1 sao, hoàn thành lượt chơi nhận thêm 2 sao. Số sao lưu trong
`localStorage` của thiết bị. Âm thanh dùng Web Audio API nên không cần tệp âm thanh.

## Điều hướng nhanh

- `index.html#bat-dau` — mở khu vui chơi
- `index.html#hoc-chu` — vào thẳng trò Học chữ
- `index.html#hoc-so` — vào thẳng trò Học số
- `index.html#tri-nho` — vào thẳng trò trí nhớ

## Ghi chú

- Đây là bản dựng phục vụ học tập/trình diễn, không phải bản chính thức của
  vuihochocvui.com và không liên kết với chủ sở hữu trang gốc.
- Hình ảnh minh hoạ được tải từ trang gốc; nếu dùng cho mục đích thương mại, hãy
  thay bằng tài sản bạn có quyền sử dụng.
- Font Baloo 2 (SIL Open Font License) lưu cục bộ trong `assets/fonts`.
