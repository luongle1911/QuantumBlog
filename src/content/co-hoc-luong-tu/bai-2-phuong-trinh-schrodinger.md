---
title: "Bài 2: Phương trình Schrodinger"
description: "Khám phá cách xây dựng Phương trình Schrodinger từ các tiên đề cơ bản và bản chất xác suất của cơ học lượng tử."
pubDate: "Mar 29 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Lượng tử", "Schrodinger", "Cơ học lượng tử", "Toán tử"]
---

# Bài 2: Phương trình Schrodinger

## Mục lục

Nội dung của bài này bao gồm:

- [1. Phương trình Newton](#1-phương-trình-newton)
- [2. Phương trình Schrodinger](#2-phương-trình-schrodinger)
  - [2.1. Các giả thiết](#21-các-giả-thiết)
  - [2.2. Xây dựng phương trình](#22-xây-dựng-phương-trình)
  - [2.3. Nhận xét](#23-nhận-xét)
- [3. Tổng kết](#3-tổng-kết)
- [4. Phụ lục](#4-phụ-lục)
- [5. Tham khảo](#5-tham-khảo)

---

Khi quan sát một hiện tượng nào đó trong thực tế, chúng ta thi thoảng sẽ phát hiện ra các quy luật trong các hiện tượng này. Ví dụ việc ném một quả bóng lên không trung, ta sẽ nhận ra quỹ đạo của quả bóng có dạng tương tự một hình parabol; hay trong ngành công nghiệp bán dẫn, ta có thể thấy rằng số lượng transistor trên mỗi inch vuông trên một mạch tích hợp sẽ tăng gấp đôi khoảng mỗi hai năm. Các quy luật trên chỉ được rút ra từ các quan sát, đo đạc thực nghiệm và không thể chứng minh, thường được gọi là các định luật. 

Hầu hết mọi lý thuyết vật lý đều được xây dựng trên một (hoặc một vài định luật) nào đó nhằm giải thích các quan sát đó. Chúng ta có thể nêu ra một số định luật nổi tiếng như Định luật vạn vật hấp dẫn, 3 Định luật của Newton về chuyển động, Định luật bảo toàn năng lượng,... Nhưng chúng ta nên nhớ rằng các định luật đều được phát biểu dựa trên thực nghiệm, vì vậy các định luật khoa học không phải là tuyệt đối, chúng có thể được kiểm nghiệm và phản biện qua thời gian.

## 1. Phương trình Newton

Trước khi chúng ta bắt tay vào việc xây dựng Phương trình Schrodinger, tôi muốn lược qua về “Phương trình Newton” (có thể coi là bản nguyên thủy tương tự với “Phương trình Schrodinger” trong cơ học lượng tử), được đặt tên theo tên của Nhà vật lý học người Anh Isaac Newton (1642 - 1726).

Khi nói về trạng thái của một hệ vật lý, chúng ta sẽ muốn biết về sự thay đổi của các đại lượng của hệ trong không-thời gian (không gian và thời gian). Giả sử trong cơ học cổ điển, khi quan sát một chất điểm chuyển động trong không gian, chúng ta sẽ muốn biết vị trí của chất điểm sẽ thay đổi như thế nào trong không-thời gian. Vậy hãy bắt đầu từ “Định luật 2 Newton”, chúng ta có mối liên hệ giữa gia tốc ($a$), khối lượng ($m$) và lực tác dụng ($F$) như sau:

$$
F = m \cdot a \tag{1.1}
$$

Vậy khi biết lực tác dụng (có thể là một hàm số thay đổi theo không-thời gian $F(x,t)$) lên một chất điểm và khối lượng ($m$) của nó, ta hoàn toàn có thể tính được gia tốc ($a$) của vật. Mà như chúng ta đã biết, vận tốc là sự thay đổi vị trí theo thời gian (đạo hàm của vị trí), gia tốc là sự thay đổi của vận tốc theo thời gian (đạo hàm của vận tốc). Vậy gia tốc chính là đạo hàm bậc 2 của vị trí theo thời gian, khi đó phương trình $(1.1)$ trở thành:

$$
F(x,t) = m \frac{d^2x}{dt^2} \tag{1.2}
$$

Từ phương trình $(1.2)$, ta hoàn toàn có thể tính được vị trí của một vật tại thời điểm bất kỳ (bằng cách giải phương trình vi phân trên) nếu đã biết dạng hàm của $F(x,t)$. 

Phương trình $(1.2)$ nói trên có thể coi là trái tim của cơ học cổ điển khi nó đã được ứng dụng trong hầu hết các lĩnh vực của đời sống trong thiết kế và phân tích các hệ thống kỹ thuật, như xe cộ, máy móc đến dự đoán chuyển động của các hành tinh. Tuy nhiên, cơ học cổ điển mang tính **Tất định (Deterministic)**: nếu giải được phương trình này, ta biết chính xác quỹ đạo, vị trí và vận tốc của hạt tại mọi thời điểm. Nhưng khi bước vào thế giới vi mô, mọi thứ sẽ chuyển sang tính **Xác suất (Probabilistic)**, và đó là lúc Phương trình Schrodinger xuất hiện.

## 2. Phương trình Schrodinger

Nếu “Phương trình Newton” được xây dựng dựa trên “Định luật 2 Newton” thì trong cơ học lượng tử, “Phương trình Schrodinger” cũng được xây dựng dựa trên một định luật cốt lõi khác đó là “Định luật bảo toàn năng lượng”.

### 2.1. Các giả thiết

**1. Định luật bảo toàn năng lượng**

Định luật này phát biểu rằng: Năng lượng không thể tự nhiên được tạo ra hoặc bị mất đi, mà chỉ có thể chuyển đổi từ dạng này sang dạng khác. Tổng năng lượng trong một hệ cô lập luôn không đổi. Điều này có nghĩa là trong một hệ kín, năng lượng có thể chuyển từ dạng này sang dạng khác (ví dụ, từ năng lượng hóa học sang năng lượng nhiệt), nhưng tổng năng lượng của hệ vẫn không thay đổi.

Các dạng năng lượng thường gặp:
1. **Động năng ($T$):** Năng lượng có được do chuyển động.
2. **Thế năng ($V$):** Năng lượng có được liên quan đến vị trí của vật thể trong một trường thế.
3. **Nhiệt năng ($Q$):** Năng lượng liên quan đến chuyển động của các phân tử.

Tuy có rất nhiều dạng năng lượng khác như năng lượng hóa học hay năng lượng hạt nhân, tuy nhiên chúng đều có thể quy về 2 dạng năng lượng cơ bản là động năng ($T$) và thế năng ($V$). Ví dụ như ta có thể coi nhiệt năng chính là động năng của các phân tử chuyển động, hay năng lượng hạt nhân là thế năng lưu trữ trong các liên kết giữa các nucleon trong hạt nhân. Từ đây ta có công thức về năng lượng toàn phần của một hệ ($E$):

$$
E = T + V \tag{2.1}
$$

**2. Giả thiết về lượng tử ánh sáng**

Như trong bài đầu tiên về “Hàm sóng” tôi đã giới thiệu giả thiết về lượng tử ánh sáng. Giả thiết này khẳng định rằng năng lượng của một photon ($E$) tỷ lệ với tần số ($f$) của sóng điện từ tương ứng:

$$
E = hf = \hbar \omega \tag{2.2}
$$

Trong đó $h$ và $\hbar$ lần lượt là hằng số Planck và hằng số Planck rút gọn với $\hbar = \frac{h}{2\pi}$.

**3. Giả thiết về sóng vật chất**

Giả thuyết de Broglie năm 1924, phát biểu rằng bất kì một hạt nào cũng có thể liên quan đến một sóng, được biểu diễn một cách toán học bởi hàm sóng $\Psi$, và xung lượng ($p$) của hạt được liên hệ với bước sóng ($\lambda$) của sóng liên kết bởi hệ thức:

$$
p = \frac{h}{\lambda} = \frac{h}{2\pi} \cdot \frac{2\pi}{\lambda} = \hbar k \tag{2.3}
$$

### 2.2. Xây dựng phương trình

*Lưu ý: Bắt đầu từ bài này, tôi sẽ sử dụng ký hiệu $\Psi(x,t)$ cho hàm sóng phụ thuộc vào không gian và thời gian để phân biệt với hàm sóng độc lập với thời gian $\psi(x)$ sẽ được sử dụng trong các bài sau.*

Từ các giả thiết trên, Schrodinger (Nhà vật lý học người Áo) vào năm 1925 đã có một cách nhìn rất sâu sắc thông qua việc khảo sát một hạt tự do.

**Bước 1: Khảo sát hạt tự do ($V = 0$)**

Đầu tiên, hãy xem xét trường hợp đơn giản nhất: một **hạt tự do** (không chịu tác dụng của bất kỳ lực nào, hay thế năng $V = 0$) chuyển động dọc theo trục Ox. Trạng thái của hạt tự do này được mô tả hoàn hảo bởi một sóng phẳng đơn sắc có dạng:

$$
\Psi (x, t) = A e^{i(kx - \omega t)} \tag{2.4}
$$

**Bước 2: Khám phá ra "Toán tử Năng lượng"**

Từ giả thiết của Planck-Einstein ($E = \hbar \omega$), ta thử lấy đạo hàm riêng của hàm sóng (2.4) theo thời gian $t$:

$$
\frac{\partial}{\partial t} \Psi = -i \omega \Psi \tag{2.5}
$$

Nhân cả 2 vế của (2.5) với $i\hbar$, ta có:

$$
i\hbar \frac{\partial}{\partial t}\Psi = -i^2\hbar \omega \Psi = \hbar \omega \Psi \tag{2.6}
$$

Mà $\hbar \omega = E$ theo $(2.2)$, nên ta được:

$$
E\Psi = i\hbar \frac{\partial}{\partial t}\Psi \tag{2.7}
$$

Nhìn vào (2.7), ta rút ra một quy luật sâu sắc: Trong cơ học lượng tử, phép nhân hàm sóng với Năng lượng $E$ tương đương với việc thực hiện phép toán đạo hàm $i\hbar \frac{\partial}{\partial t}$ lên hàm sóng đó. Ta gọi đại lượng này là **Toán tử Năng lượng** ($\hat{E}$).

**Bước 3: Khám phá ra "Toán tử Xung lượng"**

Tương tự, từ giả thiết De Broglie ($p = \hbar k$), ta lấy đạo hàm riêng cấp 2 của hàm sóng tự do (2.4) theo tọa độ $x$:

$$
\frac{\partial^{2}}{\partial x^{2}} \Psi = i^{2}k^{2} \Psi = -k^{2} \Psi \tag{2.8}
$$

Nhân cả 2 vế với $-\hbar^2$, ta được:

$$
-\hbar^2\frac{\partial^{2}}{\partial x^{2}} \Psi = (k\hbar)^{2} \Psi \tag{2.9}
$$

Vì $p = \hbar k$, phương trình (2.9) trở thành:

$$
p^{2} \Psi = -\hbar^{2} \frac{\partial^{2}}{\partial x^{2}} \Psi \tag{2.10}
$$

Từ đây ta cũng thấy, bình phương xung lượng $p^2$ nhân với hàm sóng tương đương với việc áp dụng toán tử $-\hbar^{2} \frac{\partial^{2}}{\partial x^{2}}$ lên hàm sóng.

**Bước 4: Tổng quát hóa (Bước nhảy vĩ đại của Schrodinger)**

Đến đây, Schrodinger đã thực hiện một bước nhảy vọt về tư duy (một tiên đề): Ông cho rằng các toán tử năng lượng và xung lượng tìm được từ hạt tự do **vẫn luôn đúng cho mọi hàm sóng tổng quát $\Psi(x,t)$ bất kỳ**, kể cả khi hạt nằm trong một trường thế $V(x)$ phức tạp.

Ta xét phương trình bảo toàn năng lượng cổ điển của một hạt khối lượng $m$ trong trường thế $V(x)$ (với động năng $T = \frac{p^2}{2m}$):

$$
E = \frac{p^{2}}{2m} + V \tag{2.11a}
$$

Nhân cả hai vế của phương trình năng lượng này cho hàm sóng tổng quát $\Psi(x,t)$, ta có:

$$
E\Psi = \frac{p^{2}}{2m}\Psi + V\Psi \tag{2.11b}
$$

Cuối cùng, thay Toán tử năng lượng từ (2.7) và Toán tử bình phương xung lượng từ (2.10) vào (2.11b), ta thu được Phương trình Schrodinger tổng quát cho một hạt khối lượng $m$ trong trường thế $V$:

$$
i\hbar \frac{\partial}{\partial t} \Psi = -\frac{\hbar^{2}}{2m} \frac{\partial^{2}}{\partial x^{2}}\Psi + V \Psi \tag{2.12}
$$

### 2.3. Nhận xét

1. Từ khi bắt đầu khóa học đến giờ chúng ta chỉ xem xét hàm sóng trong một chiều Ox. Vậy để tổng quát hóa $(2.12)$ cho một hạt khối lượng $m$ chuyển động trong không gian 3 chiều Oxyz, ta có thể sử dụng toán tử Laplace:

$$
\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} \tag{2.13}
$$

Khi đó phương trình $(2.12)$ trở thành:

$$
i\hbar \frac{\partial}{\partial t} \Psi = -\frac{\hbar^{2}}{2m} \nabla^{2} \Psi + V \Psi \tag{2.14}
$$

Để tìm chính xác trạng thái của một hạt (hay hệ hạt) chúng ta cần phải thực hiện giải phương trình vi phân riêng phần $(2.14)$ (bạn đọc có thể tham khảo thêm về “Phương trình vi phân riêng phần” tại phụ lục). Tuy nhiên để dễ tiếp cận các kiến thức của các bài học sau, tôi vẫn sẽ sử dụng phương trình $(2.12)$ để mô tả trạng thái của một hạt (hệ hạt) trên 1 chiều.

2. Ta có thể nhận thấy rằng nếu $\Psi_1$ và $\Psi_2$ là 2 nghiệm của Phương trình Schrodinger thì một tổ hợp tuyến tính bất kỳ của chúng cũng là nghiệm của Phương trình Schrodinger (bạn đọc có thể tham khảo thêm tại Phụ lục 4.2). Vậy ta thấy rằng nghiệm tổng quát của phương trình Schrodinger sẽ có dạng:

$$
\Psi = \sum_{n} c_{n} \Psi_{n} \tag{2.15}
$$

*(Trong đó các $c_n$ có thể là số phức).*

3. Phương trình $(2.15)$ cũng chính là biểu diễn toán học của **“Nguyên lý chồng chất trạng thái”** (superposition principle - bạn đọc có thể tham khảo chứng minh tại Phụ lục 4.2).

## 3. Tổng kết

Trong bài học vừa rồi, ta đã lược qua cách xây dựng Phương trình Schrodinger. Ở các bài tiếp theo, chúng ta sẽ cùng tìm hiểu một vài cách giải phương trình Schrodinger trong các trường thế đặc biệt trước khi đi sâu vào mô hình toán học cho cơ học lượng tử.

---

## 4. Phụ lục

### 4.1. Đạo hàm riêng

Đạo hàm riêng là một khái niệm trong toán học được sử dụng để mô tả tốc độ thay đổi của một hàm số nhiều biến theo một trong các biến đó, trong khi giữ các biến khác không đổi. Đạo hàm riêng rất quan trọng trong các lĩnh vực như giải tích nhiều biến, phương trình vi phân, vật lý, và nhiều lĩnh vực khoa học khác.

Giả sử $f(x,y)$ là một hàm số phụ thuộc vào 2 biến $x$ và $y$, khi đó đạo hàm riêng của $f$ theo $x$, ký hiệu $\frac{\partial f}{\partial x}$, là giới hạn (nếu có) sau:

$$
\frac{\partial f}{\partial x} = \lim_{\Delta x \to 0} \frac{f(x + \Delta x, y) - f(x, y)}{\Delta x} \tag{4.1}
$$

Các tính chất của đạo hàm riêng:

**1. Tính tuyến tính:** $$
\frac{\partial}{\partial x} \left[ a f(x, y) + b g(x, y) \right] = a \frac{\partial f}{\partial x} + b \frac{\partial g}{\partial x} \tag{4.2}
$$

**2. Quy tắc nhân:**

$$
\frac{\partial}{\partial x} \left[ f(x, y) \cdot g(x, y) \right] = f(x, y) \frac{\partial g}{\partial x} + g(x, y) \frac{\partial f}{\partial x} \tag{4.3}
$$

**3. Quy tắc chuỗi:** Nếu $z = f(u(x, y), v(x, y))$ thì ta có:  
     
$$
\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \frac{\partial v}{\partial x} \tag{4.4}
$$

**Ví dụ:** Cho hàm số $f(x, y) = x^2 y + 3 x y^2$, khi đó đạo hàm riêng của $f$ theo $x$ và $y$ lần lượt là:

$$
\frac{\partial f}{\partial x} = 2xy + 3y^2
$$

Và:

$$
\frac{\partial f}{\partial y} = x^2 + 6xy
$$

### 4.2. Nguyên lý chồng chất trạng thái

Để chứng minh rằng nếu $\Psi_1$ và $\Psi_2$ là nghiệm của phương trình Schrodinger, thì tổ hợp tuyến tính của chúng cũng là nghiệm của phương trình đó, chúng ta bắt đầu từ phương trình Schrodinger tổng quát cho một hạt khối lượng $m$ trong không gian 3 chiều:

$$
i \hbar \frac{\partial}{\partial t} \Psi = -\frac{\hbar^2}{2m} \nabla^2 \Psi + V \Psi \tag{4.5}
$$

Vì $\Psi_1$ và $\Psi_2$ là nghiệm của $(4.5)$ nên chúng thỏa mãn:

$$
i \hbar \frac{\partial}{\partial t} \Psi_1 = -\frac{\hbar^2}{2m} \nabla^2 \Psi_1 + V \Psi_1 \tag{4.6}
$$

Và:

$$
i \hbar \frac{\partial}{\partial t} \Psi_2 = -\frac{\hbar^2}{2m} \nabla^2 \Psi_2 + V \Psi_2 \tag{4.7}
$$

Ta xét tổ hợp tuyến tính sau:

$$
\Psi_3 = a\Psi_1 + b\Psi_2 \tag{4.8}
$$

*(Trong đó: $a$ và $b$ là các hằng số).*

Thay lại vào phương trình gốc:

$$
i \hbar \frac{\partial}{\partial t} \Psi_3 = i \hbar \frac{\partial}{\partial t} \left( a \Psi_1 + b \Psi_2 \right) \tag{4.9}
$$

Sử dụng tính chất tuyến tính của đạo hàm tại Phụ lục 4.1, ta có:

$$
i \hbar \frac{\partial}{\partial t} \Psi_3 = a \left( i \hbar \frac{\partial}{\partial t} \Psi_1 \right) + b \left( i \hbar \frac{\partial}{\partial t} \Psi_2 \right) \tag{4.10}
$$

Thay $(4.6)$ và $(4.7)$ vào $(4.10)$ ta được:

$$
i \hbar \frac{\partial}{\partial t} \Psi_3 = a \left( -\frac{\hbar^2}{2m} \nabla^2 \Psi_1 + V \Psi_1 \right) + b \left( -\frac{\hbar^2}{2m} \nabla^2 \Psi_2 + V \Psi_2 \right) \tag{4.11}
$$

Sử dụng quy tắc phân phối, ta gộp lại được:

$$
i \hbar \frac{\partial}{\partial t} \Psi_3 = -\frac{\hbar^2}{2m} \left( a \nabla^2 \Psi_1 + b \nabla^2 \Psi_2 \right) + V \left( a \Psi_1 + b \Psi_2 \right) \tag{4.12}
$$

Mà ta thấy rằng $a \nabla^2 \Psi_1 + b \nabla^2 \Psi_2 = \nabla^2 (a \Psi_1 + b\Psi_2) = \nabla^2 \Psi_3$, vậy phương trình $(4.12)$ trở thành:

$$
i \hbar \frac{\partial}{\partial t} \Psi_3 = -\frac{\hbar^2}{2m} \nabla^2 \Psi_3 + V \Psi_3 \tag{QED}
$$

Chúng ta vừa chứng minh được rằng **vì phương trình Schrodinger là một phương trình vi phân tuyến tính**, nên tổ hợp tuyến tính của 2 nghiệm cũng là một nghiệm. Bằng phương pháp quy nạp, ta dễ dàng rút ra nghiệm tổng quát của Phương trình Schrodinger có dạng:

$$
\Psi = \sum_{n} c_{n} \Psi_{n}
$$

### 4.3. Phương trình vi phân riêng phần

Đơn giản mà nói, **phương trình vi phân riêng phần** là những phương trình liên quan đến **một hàm số chưa biết** của **nhiều biến độc lập** và **các đạo hàm riêng** của nó. Chúng giúp chúng ta mô tả **cách một đại lượng thay đổi** theo nhiều hướng khác nhau—không chỉ theo thời gian, mà còn theo không gian và các biến số khác.

Khác với các phương trình đại số thông thường đi tìm một con số, phương trình vi phân đi tìm một hàm số.

- Ví dụ đại số: $2x + 3 = 7$. Giải phương trình này cho ta giá trị $x=2$.
- Phương trình vi phân sẽ đi tìm hàm số (hàm ẩn) mà **đạo hàm** của nó thỏa mãn một phương trình nào đó.  
  Ví dụ: cho phương trình vi phân cấp 1 có dạng $\frac{dy}{dx} = 3y$. Tìm hàm số $y(x)$. Lời giải cho phương trình vi phân trên sẽ có dạng: $y = Ce^{3x}$.

Vậy cùng quay trở lại với phương trình Schrodinger tổng quát cho chất điểm chuyển động trong không gian 3 chiều $(2.14)$:

$$
i\hbar \frac{\partial}{\partial t} \Psi = -\frac{\hbar^{2}}{2m} \nabla^{2} \Psi + V \Psi \tag{4.13}
$$

Chúng ta có thể thấy rằng phương trình $(4.13)$ là một phương trình vi phân riêng phần với hàm số cần tìm chính là hàm sóng $\Psi$. Phương trình trên mô tả mối liên hệ giữa đạo hàm riêng của hàm sóng theo thời gian (vế trái) và đạo hàm riêng cấp 2 theo không gian (vế phải). Việc của chúng ta chính là giải phương trình $(4.13)$ trên với một trường thế $V$ cho trước.

---

## 5. Tham khảo

**Tiếng Việt:**

1. Lê Công Hảo, *Bài giảng Vật lý đại cương và vật lý hiện đại - Chương 3: Phương trình Schrödinger*. ([Link tài liệu](https://tailieuvn.net/bai-giang-vat-ly-dai-cuong-va-vat-ly-hien-dai-chuong-3-phuong-trinh-schrdinger-le-cong-hao-5789/))  
2. Khoa Khoa học Ứng dụng - ĐH Sư phạm Kỹ thuật TP.HCM, *Phương trình Schrodinger - VẬT LÝ KỸ THUẬT*. ([Link tài liệu](https://ipt.hcmute.edu.vn/bai-giang-vat-ly-ky-thuat/co-hoc-luong-tu-vat-ly-nguyen-tu/phuong-trinh-schrodinger/))

**Tiếng Anh:**

1. *Schrödinger equation* - Wikipedia. ([Link](https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation))  
2. *Schrodinger equation | Explanation & Facts* - Britannica. ([Link](https://www.britannica.com/science/Schrodinger-equation))  
3. *Schrodinger's Equation: Explained & How To Use It* - Sciencing. ([Link](https://www.sciencing.com/schrodingers-equation-explained-how-to-use-it-13722578/))

