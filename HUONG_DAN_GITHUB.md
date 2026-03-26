# Hướng dẫn quản lý mã nguồn với GitHub, Deploy GitHub Pages và Tích hợp Giscus

Tài liệu này hướng dẫn cách đưa source code lên GitHub, tải về máy tính khác, thiết lập GitHub Pages để deploy website tự động, và cách lấy cấu hình Giscus cho phần bình luận.

## 1. Upload Project lên GitHub (Push)

Nếu đây là lần đầu bạn đưa project này lên GitHub, hãy thực hiện các bước sau:

1. Tạo một repository mới trên GitHub (không khởi tạo kèm README, .gitignore, hay license).
2. Copy đường dẫn kho lưu trữ (ví dụ: `https://github.com/Tên_Của_Bạn/quantum-blog.git`).
3. Mở terminal tại thư mục gốc của project (thư mục chứa mã nguồn), và chạy lần lượt các lệnh:

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm tất cả các file vào luồng theo dõi
git add .

# Tạo commit đầu tiên
git commit -m "Khởi tạo project Quantum Blog"

# Đổi tên nhánh chính thành main
git branch -M main

# Liên kết với repository trên GitHub
git remote add origin https://github.com/Tên_Của_Bạn/quantum-blog.git

# Đẩy code lên GitHub
git push -u origin main
```

Từ các lần sau, mỗi khi có thay đổi (ví dụ: viết bài mới), bạn chỉ cần chạy 3 lệnh:
```bash
git add .
git commit -m "Cập nhật bài viết mới"
git push
```

## 2. Tải Project từ GitHub về (Clone)

Khi bạn muốn làm việc trên một máy tính khác hoặc mất code:

1. Mở terminal ở khu vực mà bạn mong muốn thiết lập project chứa folder source code.
2. Chạy lệnh clone:
```bash
git clone https://github.com/Tên_Của_Bạn/quantum-blog.git
```
3. Chuyển vào thư mục project:
```bash
cd quantum-blog
```
4. Cài đặt các NPM packages gốc (bắt buộc):
```bash
npm install
```
5. Chạy project:
```bash
npm run dev
```

## 3. Cấu hình Deploy lên GitHub Pages

Để Website có thể được Deploy tự động bằng GitHub Pages, project của bạn đã được tích hợp file cấu hình GitHub Actions tại `.github/workflows/deploy.yml`.

**Bước 1: Chỉnh sửa lại Site/Base trên `astro.config.mjs`**

Mở file `astro.config.mjs` ở thư mục gốc để thay đổi đường dẫn site.
```javascript
export default defineConfig({
  // Thay URL bằng link tên github của bạn
  site: 'https://<Tên_Của_Bạn>.github.io',
  
  // Thay tên bằng tên repository của bạn (nhớ có dấu / 2 đầu)
  base: '/quantum-blog/', 
  
  integrations: [mdx(), sitemap()],
  // ...
});
```

**Bước 2: Cấu hình GitHub Settings**

Quay lại kho lưu trữ trên GitHub.com:
1. Vào tab **Settings** trên thanh ngang.
2. Ở sidebar bên trái, chọn phần **Pages**.
3. Tại phần **Build and deployment** -> **Source**, bạn đổ menu trỏ xuống và chọn **GitHub Actions**.

Sau khi lưu cấu hình này trên GitHub, mỗi khi có dữ liệu mới nhận được ở nhánh `main`, GitHub Actions sẽ tự động biên dịch code Astro thành website tĩnh và upload lên địa chỉ `.github.io` của bạn.

## 4. Hướng dẫn cấu hình Giscus (hỗ trợ bình luận trong blog post)

Giscus (khung bình luận) đã được tích hợp cấu hình sẵn cho bạn ở mỗi bài đăng trong tệp `src/layouts/BlogPost.astro`. Tuy nhiên, vì đoạn code đang chạy mặc định nên form bình luận sẽ hiển thị sai. Bạn cần tự tạo mã nhúng của repo bạn.

**Các bước lấy mã Giscus ứng với repo của bạn:**
1. Hãy chắc chắn Project trên GitHub đã được đổi chế độ hoạt động sang **Public**.
2. Tới Marketplace của GitHub và tiến hành cấp quyền cài đặt app Giscus cho account/repository của bạn (truy cập: `https://github.com/apps/giscus`).
3. Quay trỏ lại repo trên Github của bạn -> Setting -> General, kéo xuống lạch chọn đánh dấu mục tính năng "**Discussions**". 
4. Truy cập trang web chính thức của Giscus: [https://giscus.app/vi](https://giscus.app/vi).
5. Kéo xuống mục **Cấu hình**:
   - Khai báo tên kho lưu trữ trên Github của bạn: ví dụ: `Tên_Của_Bạn/quantum-blog`.
   - Ở mục "Trang thảo luận được ánh xạ thành": Lựa chọn tốt nhất là `URL pathname`.
   - Danh mục thảo luận: Khuyên chọn `General` hoặc `Announcements`.
6. Kéo chuột xuống khung màu xanh lá (**Bật tính năng Giscus/Enable Giscus**), hộp code `<script>` đã tự động được điền thông số.

**Cập nhật mã trên Server nội bộ:**
Hãy copy một số ID bắt buộc (tô đậm đậm, dài chữ số) để chèn lên code Project của bạn.

Giờ hãy mở file `src/layouts/BlogPost.astro`. Tại vị trí dòng cuối của giao diện blog (`<script src="https://giscus.app/client.js"...`), hãy chỉnh sửa những thuộc tính này ứng với những gì bạn sao chép trên trang của Giscus:
- `data-repo="Tên_Của_Bạn/quantum-blog"`
- `data-repo-id="XXXXXXXXXX"`
- `data-category="General"` 
- `data-category-id="XXXXXXXXXX"`

Chỉ cần cập nhật, ghi lưu và commit đẩy code ngược trở lên Github nhánh main. Vậy là khung bình luận bằng tài khoản Giscus của website chính thức hoàn thiện!
