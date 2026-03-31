---
title: "Bài 3: Phương pháp tách biến"
description: "Tìm hiểu phương pháp tách biến để giải Phương trình Schrodinger và khám phá bản chất của Trạng thái dừng trong cơ học lượng tử."
pubDate: "Mar 30 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Lượng tử", "Schrodinger", "Phương pháp tách biến", "Cơ học lượng tử"]
---

# Bài 3: Phương pháp tách biến

## Mục lục

Nội dung của bài này bao gồm:

- [1. Trường thế](#1-trường-thế)
- [2. Tách biến](#2-tách-biến)
- [3. Nhận xét](#3-nhận-xét)
- [4. Tổng kết](#4-tổng-kết)
- [5. Tham khảo](#5-tham-khảo)

---

## 1. Trường thế

Trường thế (potential field) là một mô hình toán học biểu diễn phân bố không gian của thế năng tại mỗi điểm trong một không gian. Thế năng tại một điểm thường liên quan đến lực tác động lên một hạt tại điểm đó.

Ví dụ với trường thế có dạng như sau:

<div align="center">

![][image1]  

*(Hình 1.1: Thế năng theo tọa độ)*

</div>

Thế năng dương hay âm thật ra chỉ phụ thuộc vào cách chúng ta chọn mốc tham chiếu. Trong các bài toán vật lý, chúng ta thường quan tâm đến chênh lệch thế năng giữa các điểm hơn là giá trị tuyệt đối của thế năng. Giống như việc chúng ta chọn mốc thế năng tại lưng núi (thế năng tại điểm B = 0), khi lăn quả bóng ở lưng chừng 1 ngọn núi (điểm B), nếu chúng ta không giữ quả bóng lại nó sẽ lăn về phía chân núi (điểm A) và chuyển thế năng tại lưng núi thành động năng của quả bóng ở phía chân núi. Tương tự, nếu chúng ta muốn di chuyển quả bóng từ lưng núi (điểm B) đến đỉnh núi (điểm C), chúng ta sẽ cần truyền cho quả bóng năng lượng đủ lớn (bằng việc đá quả bóng thật mạnh), khi đó động năng của quả bóng (tại B) sẽ được chuyển thành thế năng (tại C).

> **Lưu ý:** Thế năng là một đại lượng tương đối, vì vậy thế năng âm hay dương chỉ thể hiện rằng chất điểm có xu hướng “kéo” hay “đẩy” khỏi mốc thế năng của nó. Thế năng âm hay dương không phản ánh trực tiếp lực tác động lên chất điểm; lực tác động (như trọng lực) thường sẽ phụ thuộc vào độ dốc của thế năng tại điểm đó (hay gradient của thế năng).

Trong các bài toán chúng ta gặp phía sau, chúng ta thường sẽ giả sử rằng thế năng $V(x,t)$ là một hàm số **độc lập với thời gian** $V(x,t) = V(x)$ (giống như việc chúng ta giả định rằng hình dạng của ngọn núi là không thay đổi theo thời gian). Vậy khi đó phương trình Schrodinger của chúng ta có dạng:

$$
i\hbar \frac{\partial \Psi(x, t)}{\partial t} = \left( -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x) \right) \Psi(x, t) \tag{1.1}
$$

Ở phần tiếp theo, chúng ta sẽ tìm hiểu về cách giải phương trình $(1.1)$ phía trên bằng phương pháp tách biến.

---

## 2. Tách biến

Phương pháp tách biến là một kỹ thuật toán học quan trọng được sử dụng để giải các phương trình vi phân, bao gồm cả phương trình vi phân thường (ODE) và phương trình vi phân riêng phần (PDE). Mục tiêu của phương pháp này là biến đổi một phương trình phức tạp thành các phương trình đơn giản hơn bằng cách tách riêng biến số, cho phép chúng ta giải quyết từng phần một cách độc lập.

Ý tưởng chính của phương pháp tách biến dựa trên giả định rằng nghiệm của phương trình có thể biểu diễn dưới dạng tích của các hàm, mỗi hàm chỉ phụ thuộc vào một biến duy nhất. Dưới đây là các bước chung khi giải phương trình vi phân với phương pháp tách biến:

- **Bước 1: Giả định.** Đối với phương trình hai biến, chúng ta giả định: $u(x,t) = X(x) \cdot T(t)$. Trong đó $X(x)$ chỉ phụ thuộc vào $x$ và $T(t)$ chỉ phụ thuộc vào $t$.
- **Bước 2: Thay vào phương trình gốc.** Thay biểu thức $u(x,t)$ vào phương trình vi phân ban đầu.
- **Bước 3: Tách riêng các biến.** Biến đổi phương trình để các thành phần phụ thuộc vào $x$ và $t$ nằm ở hai vế riêng biệt.
- **Bước 4: Đặt bằng hằng số phân ly.** Vì hai vế phụ thuộc vào các biến khác nhau, chúng phải bằng một hằng số chung.
- **Bước 5: Giải các phương trình thường.** Giải từng phương trình vi phân thường (ODE) thu được.
- **Bước 6: Kết hợp nghiệm.** Kết hợp các nghiệm riêng để xây dựng nghiệm tổng quát.

Áp dụng vào trường hợp của chúng ta, ta giả định rằng hàm sóng cần tìm $\Psi(x,t)$ của phương trình $(1.1)$ có thể viết dưới dạng:

$$
\Psi(x, t) = \psi(x) \cdot T(t) \tag{2.1}
$$

Từ đó ta thay $(2.1)$ vào phương trình vi phân ban đầu $(1.1)$ và biến đổi làm sao cho hai vế của phương trình chỉ phụ thuộc vào từng biến. Cụ thể ta có:

- Đạo hàm của $(2.1)$ theo thời gian có dạng:
$$
\frac{\partial \Psi(x, t)}{\partial t} = \psi(x) \cdot \frac{d T(t)}{d t} \tag{2.2}
$$

- Đạo hàm bậc 2 của $(2.1)$ theo không gian có dạng:
$$
\frac{\partial^2 \Psi(x, t)}{\partial x^2} = T(t) \cdot \frac{d^2 \psi(x)}{d x^2} \tag{2.3}
$$

Khi đó phương trình $(1.1)$ trở thành:

$$
i\hbar \left[ \psi(x) \cdot \frac{d T(t)}{d t} \right] = -\frac{\hbar^2}{2m} \left[ T(t) \cdot \frac{d^2 \psi(x)}{d x^2} \right] + V(x) \left[ \psi(x) \cdot T(t) \right] \tag{2.4}
$$

Chia cả hai vế của $(2.4)$ cho $\psi(x) \cdot T(t)$ ta được:

$$
i\hbar \frac{1}{T(t)} \frac{d T(t)}{d t} = -\frac{\hbar^2}{2m} \frac{1}{\psi(x)} \frac{d^2 \psi(x)}{d x^2} + V(x) \tag{2.5}
$$

Vì vế trái chỉ phụ thuộc vào thời gian $t$, và vế phải chỉ phụ thuộc vào không gian $x$, đẳng thức này chỉ có thể xảy ra nếu cả hai vế cùng bằng một hằng số chung (hằng số phân ly). 

Nếu ta nhìn vào vế trái và nhân chéo $T(t)$ lên, ta thấy có sự xuất hiện của thành phần $i\hbar \frac{d}{dt} T(t)$. Theo như chúng ta đã thiết lập ở bài học trước, $i\hbar \frac{\partial}{\partial t}$ chính là **Toán tử Năng lượng**. Do đó, hằng số phân ly này mang ý nghĩa vật lý chính là mức năng lượng $E$ của hệ. Ta tách $(2.5)$ thành hai phương trình riêng biệt:

### Phần phụ thuộc vào thời gian:

$$
i\hbar \frac{d T(t)}{d t} = E \cdot T(t) \tag{2.6}
$$

Ta dễ dàng giải phương trình vi phân trên bằng cách tách biến và tích phân để thu được nghiệm tổng quát có dạng:

$$
T(t) = C \cdot e^{- \frac{i E t}{\hbar}} \tag{2.7}
$$

Trong đó:
- $C$ là hằng số khi lấy tích phân.
- $E$ là năng lượng riêng.
- $\hbar$ là hằng số Planck rút gọn.
- $i$ là đơn vị ảo.

### Phần phụ thuộc vào không gian:

Từ vế phải của $(2.5)$, ta nhân cả hai vế với $\psi(x)$. Việc nhân ngược $\psi(x)$ lên là **bắt buộc về mặt toán học** để tránh lỗi chia cho số 0 tại các "nút sóng" (Nodes) - những điểm mà hàm sóng lượng tử triệt tiêu ($\psi(x) = 0$). Ta thu được:

$$
-\frac{\hbar^2}{2m} \frac{d^2 \psi(x)}{d x^2} + V(x)\psi(x) = E\psi(x) \tag{2.8}
$$

Phương trình $(2.8)$ chính là **Phương trình Schrodinger độc lập thời gian**. 

Tuy nhiên, hiện tại chúng ta chưa thể giải được phương trình $(2.8)$ do chưa biết dạng hàm cụ thể của trường thế $V(x)$. Chúng ta sẽ nghiên cứu các trường thế cụ thể cho các trường hợp phổ (spectrum) rời rạc và liên tục trong các bài học tiếp theo.

### Kết hợp nghiệm (Trạng thái dừng):

Hằng số $C$ ở phương trình $(2.7)$ có thể được gộp chung vào $\psi(x)$ trong quá trình chuẩn hóa hàm sóng. Do đó, một nghiệm riêng của phương trình Schrodinger ban đầu (tương ứng với một mức năng lượng $E_n$ xác định) có dạng:

$$
\Psi_n(x, t) = \psi_n(x) e^{- \frac{i E_n t}{\hbar}} \tag{2.9}
$$

<div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin: 20px 0;">
  <b>Khái niệm Trạng thái dừng (Stationary State):</b><br/>
  Nghiệm $(2.9)$ được gọi là một trạng thái dừng. Tại sao gọi là "dừng" khi hàm sóng vẫn có phần phức phụ thuộc thời gian $t$? Đó là bởi vì <b>mật độ xác suất</b> tìm thấy hạt (đại lượng duy nhất có ý nghĩa vật lý đo lường được) hoàn toàn không thay đổi theo thời gian:
  <br/><br/>
  <div style="text-align: center;">$|\Psi_n(x,t)|^2 = \Psi_n^* \Psi_n = \psi_n^*(x) e^{\frac{i E_n t}{\hbar}} \psi_n(x) e^{-\frac{i E_n t}{\hbar}} = |\psi_n(x)|^2$</div>
</div>

Và nhờ nguyên lý chồng chất, **nghiệm tổng quát** mô tả một trạng thái lượng tử tùy ý của hệ sẽ là tổ hợp tuyến tính của tất cả các trạng thái dừng này:

$$
\Psi(x,t) = \sum_n c_n \psi_n(x) e^{- \frac{i E_n t}{\hbar}} \tag{2.10}
$$

---

## 3. Nhận xét

Việc giải các phương trình vi phân bằng phương pháp tách biến không phải lúc nào cũng khả thi. Nếu một trong hai phương trình $X(x)$ hoặc $T(t)$ là **vô nghiệm** hoặc chỉ có **nghiệm tầm thường** (ví dụ, nghiệm bằng không), điều đó cho thấy rằng giả định ban đầu về khả năng tách biến **không khả thi** cho bài toán này.

Như trong lời giải của chúng ta, nếu trường thế $V$ **không** độc lập với thời gian ($V$ phụ thuộc cả vào $x$ và $t$) thì việc tách biến sẽ phá sản, vì khi đó phương trình không gian vẫn sẽ bị vướng biến $t$.

Các trường thế $V(x)$ khác nhau sẽ cho ra các lời giải tổng quát khác nhau, và như đã trình bày trong nguyên lý chồng chất trạng thái, nghiệm tổng quát $\Psi(x,t)$ là nghiệm tổng hợp của rất nhiều nghiệm con $\Psi_1, \Psi_2, \Psi_3,...$ hay còn gọi là “phổ” (Spectrum). Các mức năng lượng $E_n$ của phổ này có thể là rời rạc (lượng tử hóa) hoặc liên tục phụ thuộc hoàn toàn vào hình dạng của trường thế $V(x)$.

---

## 4. Tổng kết

Trong bài này, chúng ta đã tìm hiểu qua về cách giải Phương trình Schrodinger bằng phương pháp tách biến. Đây là một phương pháp cốt lõi được sử dụng rất nhiều trong cơ học lượng tử. 

Bạn đọc có thể thấy trong các bài sau, khi chúng ta nghiên cứu phổ của nguyên tử Hidro (trường thế $V$ của electron phụ thuộc vào khoảng cách từ nó đến hạt nhân và độc lập với thời gian) hay Spin của các hạt cơ bản (các Qubit được sử dụng trong máy tính lượng tử thường sử dụng trạng thái Spin "up" hay "down" để mô tả 0 hay 1 trong hệ nhị phân, tương tự trạng thái đóng mở của bóng bán dẫn), phương pháp tách biến vẫn sẽ là công cụ chủ lực.

Trong bài tiếp theo, ta sẽ tìm hiểu lời giải của phương trình độc lập thời gian $(2.8)$ cho một hạt chuyển động trong trường thế của hộp vô hạn 1 chiều (Infinite Square Well).

---

## 5. Tham khảo

**Tiếng Việt:**

1. [Một số dạng phương trình vi phân thường gặp | Bài Giảng Toán Cao Cấp](https://toancaocap.net/mot-so-dang-phuong-trinh-vi-phan-thuong-gap/)  
2. [Phương pháp giải phương trình tách biến | Hỏi Đáp](https://hoivdap.com/phuong-phap-giai-phuong-trinh-tach-bien)

**Tiếng Anh:**

1. [Separation of variables - Wikipedia](https://en.wikipedia.org/wiki/Separation_of_variables)  
2. [Short notes on separation of variables (PDF) - MIT](https://math.mit.edu/classes/18.306/Notes/Short%20notes%20on%20separation%20of%20variables.pdf)  
3. [NPTEL-LEC-20-Heat-Equation-3 (PDF)](https://davuniversity.org/images/files/study-material/NPTEL-LEC-20-Heat-Equation-3.pdf)

[image1]: <data:image/png;base64,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>
