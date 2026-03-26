# Hướng dẫn sử dụng và Đăng bài viết (Quantum Astro Blog)

Tài liệu này hướng dẫn bạn cách khởi chạy dự án, cấu trúc cơ bản và chi tiết cách tạo cũng như đăng tải bài viết mới lên trang Blog Khoa học Lượng tử.

## 1. Cài đặt và Khởi tạo dự án

Dự án này sử dụng Astro framework. Để bắt đầu, bạn cần cài đặt các dependency:

```bash
# Cài đặt thư viện
npm install

# Khởi chạy server phát triển (mặc định tại http://localhost:4321)
npm run dev
```

## 2. Cấu trúc Quản lý Bài viết

Dự án sử dụng tính năng **Content Collections** của Astro để quản lý bài viết. Các bài viết được lưu trữ và phân loại trong thư mục `src/content/`.
Hiện tại dự án có 2 phân mục (collections) chính:
- `src/content/co-hoc-luong-tu/`: Dành cho các bài viết về Cơ học lượng tử.
- `src/content/dien-toan-luong-tu/`: Dành cho các bài viết về Điện toán lượng tử.

## 3. Cách Đăng Bài Viết Mới

Để đăng một bài viết mới, bạn tạo một file Markdown (`.md`) hoặc MDX (`.mdx`) trong một trong hai thư mục chủ đề ở trên.

### Cấu trúc File Bài Viết (Frontmatter)
Mỗi file bài viết **bắt buộc** phải có đoạn cấu hình (Frontmatter) nằm ở đầu file được bao bọc bởi mã `---`.

Ví dụ về một file bài viết chuẩn:

```markdown
---
title: "Giới thiệu về Vướng víu Lượng tử"
description: "Tìm hiểu các khái niệm cơ bản về hiện tượng vướng víu trong cơ học lượng tử."
pubDate: 2026-03-26
updatedDate: 2026-03-27
heroImage: "/quantum-bg.jpg"
tags: ["cơ học lượng tử", "vướng víu", "cơ bản"]
---

Nội dung bài viết của bạn sẽ bắt đầu ở đây. Bạn có thể sử dụng cú pháp Markdown thông thường.
```

**Các trường Frontmatter (cấu hình):**
- `title` (bắt buộc): Tiêu đề bài viết.
- `description` (bắt buộc): Chú thích/Mô tả ngắn gọn.
- `pubDate` (bắt buộc): Ngày xuất bản (Định dạng: `YYYY-MM-DD`).
- `updatedDate` (tùy chọn): Ngày cập nhật cuối cùng của bài.
- `heroImage` (tùy chọn): Đường dẫn tới ảnh quảng bá của bài viết.
- `tags` (tùy chọn): Các thẻ liên quan đến bài định dạng dạng mảng.

### Hỗ trợ Công thức Toán học (LaTeX/KaTeX)
Dự án đã được bật sẵn tính năng `remark-math` và `rehype-katex`, giúp bạn có thể dễ dàng viết công thức Toán, Vật lý!

- **Công thức trong dòng (Inline):** Sử dụng ký tự `$` bao quanh.
  Ví dụ: Phương trình Schrodinger $i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi$
  
- **Công thức khối (Block):** Sử dụng các ký tự `$$` ở đầu và cuối một dòng.
  Ví dụ: Khi bạn muốn công thức căn giữa:
  $$
  |\psi\rangle = \alpha|0\rangle + \beta|1\rangle
  $$

## 4. Xây dựng và Tải lên (Deploy) Bài Viết

Dự án đã được cấu hình phục vụ với `base: '/quantum-blog/'` trong tệp `astro.config.mjs` nhằm thích ứng tự động với các đường dẫn con trên GitHub Pages.

**Cách triển khai (Deploy) bài viết mới:**
1. Mở terminal và gõ:
   ```bash
   npm run build
   ```
   Lệnh này sẽ trích xuất (build) ứng dụng web dưới dạng trang tĩnh bên trong thư mục `dist/`.

2. Nếu bạn thiết lập qua kho lưu trữ GitHub Pages: bạn chỉ cần commit thư mục mã nguồn và đẩy (push) lên nhánh chính (`master` hoặc `main`). Workflow của GitHub Action mà Astro thiết lập sẽ tự động tiếp nhận việc biên dịch lại file Markdown bạn mới thêm và đăng web của bạn lên mạng.

> CHÚ Ý: Đừng quên kiểm tra lỗi và đảm bảo bài viết hoạt động trơn tru qua `npm run dev` trước khi đưa lên web chính.
