# Hướng dẫn viết Markdown cho dự án QuantumBlog

Dựa trên cấu hình hiện tại của dự án (sử dụng **Astro**, **remark-math**, **rehype-katex** và plugin `remark-unescape-math` tự định nghĩa), dưới đây là quy chuẩn viết Markdown để Github Pages có thể hiển thị ảnh và công thức toán học một cách đẹp mắt, không bị lỗi render.

---

## 1. Hướng dẫn viết cấu trúc chung (Frontmatter)

Mọi file Markdown bài viết (ví dụ: `bai-2-thuat-toan-shor.md` ở trong `src/content/.../`) đều **bắt buộc** phải có đoạn **Frontmatter** ở dòng trên cùng để Astro có thể lấy dữ liệu:
```markdown
---
title: "Bài 2: Thuật toán Shor" 
description: "Mô tả ngắn gọn về nội dung bài viết này."
pubDate: "Mar 28 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Lượng tử", "Shor"]
---

Nội dung bài viết bắt đầu từ đây...
```

---

## 2. Công thức Toán học (Math Equations)

Dự án hiện tại hỗ trợ render công thức bằng **KaTeX**. CSS của KaTeX đã được tích hợp sẵn trong cấu trúc layout `BaseHead.astro` nên các công thức sẽ hiển thị rất đẹp nếu Markdown được viết đúng chuẩn. 

> **⚠️ Lưu ý cực kỳ quan trọng:** Khi copy/xuất từ Google Docs hay Word về: **Tuyệt đối không sử dụng hai dấu gạch chéo ngược liên tiếp (`\\`) cho các hàm LaTeX thông thường**. Ví dụ: Viết `\lambda` thay vì `\\lambda`, `\frac` thay vì `\\frac`. Dấu `\\` thừa sẽ gây ra lỗi chữ đỏ "undefined" khi build trên Github Page.

### 2.1. Công thức trên cùng một dòng (Inline Math)

Sử dụng **một dấu USD (`$`)** bao quanh công thức.
Không nên chừa khoảng trống quá nhiều giữa ký tự `$` và nội dung bên trong.

**✅ Cú pháp đúng:**
```markdown
Theo phương trình Schrödinger, hàm sóng lượng tử được ký hiệu là $\Psi(x, t)$ và động lượng $p = mv$.
```

**❌ Cú pháp sai (sinh lỗi render hoặc undefined):**
```markdown
Hàm sóng của một hạt được ký hiệu là $\\Psi(x, t)$.
```

### 2.2. Công thức độc lập (Block Math)

Sử dụng **hai dấu USD (`$$`)** để tạo một khối công thức đứng riêng biệt trên một hoặc nhiều dòng để KaTeX có thể canh giữa trang và render lớn hơn. 

**✅ Cú pháp đúng:**
```markdown
Bên dưới là phương trình khối lượng tương đương năng lượng của Einstein:

$$
E = mc^2 \tag{1.1}
$$

Và công thức tính số sóng:

$$
k = \frac{2\pi}{\lambda}
$$
```

> **💡 Mẹo:** Hãy luôn đảm bảo có **dòng trống** trước và sau thẻ `$$` để trình biên dịch Markdown của Astro nhận diện chính xác đây là một phân đoạn (block) thay vì nhầm với nội dung text thông thường.

---

## 3. Hình ảnh (Images)

Trong cấu trúc thư mục hiện tại của dự án, các file Markdown được đặt trong thư mục `src/content/dien-toan-luong-tu/` hoặc `src/content/co-hoc-luong-tu/`, thế nhưng ảnh tĩnh lại thường nằm ở thư mục `src/assets/`. Do đó, bạn phải dùng **đường dẫn tương đối (relative path)** thì Astro mới tối ưu tự động và hiển thị được trên Github Pages.

### 3.1. Cú pháp cơ bản (Chèn ảnh vào bài)

Sử dụng khoảng 2 lần back directory `../../` để trỏ vào thư mục `assets`:

```markdown
![Mô tả ảnh cho người khiếm thị hoặc khi lỗi mạng](../../assets/blog-placeholder-about.jpg)
```

Nên tránh việc sử dụng Reference style (như `![][image1]`) vì chúng phụ thuộc vào link tham chiếu, dễ bị lỗi và cấu trúc rườm rà.

### 3.2. Căn giữa ảnh có Caption cực đẹp

Astro cho phép chèn mã HTML thuần vào bên trong Markdown. Để **căn giữa** ảnh và nguồn ảnh (caption), hãy bọc hình ảnh trong thẻ `<div align="center">`. 

> **🚨 Quy tắc bắt buộc:** Phải để **dòng trống** ngay phía dưới thẻ mở `<div ...>` và phía trên thẻ đóng `</div>` thì nội dung Markdown bên trong mới được biên dịch.

**Cú pháp chuẩn chỉnh để làm ảnh đẹp và canh giữa:**

```html
<div align="center">

![Mô tả minh họa thuật toán Shor](../../assets/shor-algorithm.jpg)  
*(Hình 2. Sơ đồ mạch lượng tử của Thuật toán Shor)*  
*(Nguồn: [Wikipedia](https://vi.wikipedia.org/...))*

</div>
```

**Một chút kinh nghiệm về xuống dòng trong Markdown:**
Ở đoạn cuối mỗi dòng ghi chú *(Hình 2...)* hay *(Nguồn...)*, bạn có thể **nhấn phím cách (space) 2 lần** rồi mới Enter xuống dòng. Điều này sẽ báo hiệu cho Markdown tạo một thẻ gãy dòng `<br/>` thay vì một đoạn văn `<p>` mới. Giúp chữ của caption khít vào nhau và nhìn khoa học hơn.

---

**Chúc bạn tiếp tục hoàn thiện Serie Quantum Physics thành công tốt đẹp! 🎉**
