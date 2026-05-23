---
title: "Bài 8: Formalism - Phần 2"
description: "Tìm hiểu sâu về nền tảng toán học của cơ học lượng tử thông qua không gian Hilbert $L^2$, biểu diễn Dirac và các toán tử Hermitian."
pubDate: "May 21 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Cơ học lượng tử", "Formalism", "Không gian Hilbert", "Toán tử"]
---

## Mục lục

Nội dung của bài này bao gồm:

- [1. Không gian trạng thái $L^2$](#1-không-gian-trạng-thái-l2)
  - [1.1. Khái niệm và Quy ước biểu diễn](#11-khái-niệm-và-quy-ước-biểu-diễn)
  - [1.2. Định nghĩa không gian $L^2$](#12-định-nghĩa-không-gian-l2)
  - [1.3. Bản chất không gian Hilbert](#13-bản-chất-không-gian-hilbert)
  - [1.4. Ứng dụng của không gian $L^2$ trong Cơ học lượng tử](#14-ứng-dụng-của-không-gian-l2-trong-cơ-học-lượng-tử)
- [2. Quan sát (Observables)](#2-quan-sát-observables)
  - [2.1. Toán tử rời rạc](#21-toán-tử-rời-rạc)
  - [2.2. Toán tử vi phân và Phổ liên tục](#22-toán-tử-vi-phân-và-phổ-liên-tục)
- [3. Phương trình giá trị riêng](#3-phương-trình-giá-trị-riêng)
  - [3.1. Trạng thái xác định](#31-trạng-thái-xác-định)
  - [3.2. Phổ rời rạc](#32-phổ-rời-rạc)
  - [3.3. Phổ liên tục](#33-phổ-liên-tục)
- [4. Phụ lục](#4-phụ-lục)
  - [4.1. Toán tử động lượng](#41-toán-tử-động-lượng)
- [5. Tham khảo](#5-tham-khảo)

## 1. Không gian trạng thái $L^2$

### 1.1. Khái niệm và Quy ước biểu diễn

Trước khi vào nội dung chính của phần này, tôi muốn thống nhất lại cách biểu diễn vector. Với chương trình giáo dục phổ thông và đại học, hẳn chúng ta đã quen với việc biểu diễn vector thông qua các ký hiệu như $\vec{v}$ hay $\mathbf{v}$. Tuy nhiên, trong cơ học lượng tử, chúng ta thường biểu diễn các vector bằng ký hiệu $|\alpha\rangle$ (hay còn được gọi là “ket”):

$$
| \alpha \rangle \rightarrow \mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_N \end{pmatrix} \tag{1.1}
$$

Ở đây, tôi biểu diễn vector dưới dạng vector cột chỉ để thuận tiện cho tính toán ma trận và quy ước về tích trong sau này (vì tích trong thật ra cũng chỉ là quy ước). Bạn đọc có thể biểu diễn dưới dạng vector hàng nếu muốn, miễn là việc sử dụng các quy ước đồng nhất thì kết quả cuối cùng cũng sẽ không đổi.

Vậy vector hay không gian vector thì có liên quan gì đến cơ học lượng tử? Trong các bài trước, chúng ta đã biết rằng nghiệm tổng quát của phương trình Schrödinger cho một hệ lượng tử bất kỳ có thể được biểu diễn dưới dạng:

$$
\Psi = \sum_{n} c_{n} \Psi_{n} \tag{1.2}
$$

Nếu chúng ta coi mỗi một nghiệm riêng $\Psi_n$ là một **vector đơn vị** (vector cơ sở) thì công thức $(1.2)$ về hàm sóng tổng quát của hệ chính là một **vector** được biểu diễn dưới dạng **tổ hợp tuyến tính** (linear combination) của các vector cơ sở này.

Tuy nhiên, như chúng ta đã biết thì các nghiệm của $(1.2)$ là khác nhau đối với từng trường thế $V$ khác nhau (có thể là hữu hạn hoặc vô hạn), vì vậy chúng ta không thể sử dụng không gian vector thông thường để mô tả trạng thái của một hệ lượng tử mà cần mở rộng khái niệm không gian vector với số chiều có thể là vô hạn. Vì vậy, hãy cùng tìm hiểu một vài kiến thức toán học để giải quyết vấn đề này.

Chúng ta có một vài không gian vector vô hạn chiều phổ biến như:

* **Không gian $\mathbb{R}^{\infty}$:** Không gian $\mathbb{R}^{\infty}$ là không gian của tất cả các chuỗi số thực vô hạn $(x_1, x_2, x_3, \ldots)$, nhưng với một điều kiện quan trọng là chỉ có hữu hạn số hạng khác 0. Một vector trong không gian này có dạng $(x_1, x_2, x_3, \ldots, x_n, 0, 0, 0, \ldots)$, với $N$ là một số hữu hạn nào đó.
* **Không gian đa thức:** Mỗi vector trong không gian có dạng $P(x) = a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n$.
* **Không gian các hàm số liên tục:** Hãy xem xét tập hợp tất cả các hàm số liên tục trên một khoảng đóng $[a,b]$, khi đó mỗi vector trong không gian là một hàm số liên tục $f(x)$ với $x \in [a,b]$.

Ở đây, chúng ta thấy rằng các hàm sóng đơn sắc (nghiệm riêng) $\Psi_n$ đều là một hàm số điều hòa liên tục trên đoạn $[-\infty : \infty]$, vì vậy chúng ta có thể nghĩ đến việc sử dụng không gian các hàm số liên tục. Tuy nhiên, không gian vector này không thể hiện được nhiều ý nghĩa vật lý. Vì vậy, chúng ta cần sử dụng một không gian vector khác phù hợp hơn để mô tả trạng thái của một hệ lượng tử.

### 1.2. Định nghĩa không gian $L^2$

Tập hợp các hàm số $f(x)$ **đo được** trên một khoảng $[a, b]$, trong đó mỗi hàm số đều thỏa mãn:

$$
\int_{a}^{b} |f(x)|^2 \, dx < \infty \tag{1.3}
$$

được gọi là tập hợp các hàm số **khả tích bình phương ($L^2(a,b)$)**. Tập hợp này tạo thành một không gian vector (bạn đọc có thể kiểm tra lại rằng các phần tử trong tập hợp thỏa mãn tính chất cộng và nhân vô hướng của không gian vector).

Để định nghĩa các khái niệm “góc” hay “độ dài”, ta định nghĩa một tích trong cho hai vector $f(x), g(x)$ trong không gian vector này như sau:

$$
\langle f(x) \mid g(x) \rangle \equiv \int_{a}^{b} f(x)^* \cdot g(x) \, dx \tag{1.4}
$$

Trong công thức $(1.4)$, bạn đọc sẽ thấy các ký hiệu $\langle f(x) \mid$ (bra) và $f(x)^*$ (complex conjugate) khá xa lạ (thật ra chúng ta đã gặp **liên hợp phức** trong “Bài 1: Hàm sóng”), tôi sẽ giải thích nó ngay sau đây.

* **Bra và Định lý biểu diễn Riesz:**
  Một "bra", được viết là $\langle \alpha \mid$, đại diện cho một **phiếm hàm tuyến tính** (linear functional) trên không gian vector. Nếu bạn đọc còn nhớ thì ở đầu bài chúng ta đã làm quen với “ket” (công thức $(1.1)$). Theo Định lý biểu diễn Riesz (Riesz representation theorem) trong giải tích hàm, mọi vector ($|\alpha\rangle$ - hay “ket”) trong không gian Hilbert đều tồn tại duy nhất một “bra” tương ứng nằm trong không gian đối ngẫu (dual space). Bra $\langle \alpha \mid$ chính là một **liên hợp Hermitian** với $|\alpha\rangle$.

* **Liên hợp Hermitian:**
  Trong đại số tuyến tính và cơ học lượng tử, **liên hợp Hermitian** (còn được gọi là chuyển vị liên hợp hoặc toán tử liên hợp) là một phép toán rất quan trọng. Nó có thể được xem là sự tổng quát hóa của phép chuyển vị ma trận quen thuộc.

  **Định nghĩa:** Liên hợp Hermitian của một ma trận (toán tử) tuyến tính $A$ được ký hiệu là $A^{\dagger}$ (đôi khi là $A^*$). Phép toán này bao gồm hai bước:
  - **Chuyển vị:** Đảo vị trí các phần tử của ma trận, biến hàng thành cột và cột thành hàng.
  - **Liên hợp phức:** Lấy liên hợp phức của mỗi phần tử. Liên hợp phức của một số phức $a+bi$ là $a-bi$. Đối với số thực, liên hợp phức là chính nó.

  **Công thức:** Nếu $A$ là một ma trận với các phần tử $A_{ij}$, thì các phần tử của ma trận liên hợp Hermitian $A^{\dagger}$ là $(A^{\dagger})_{ij} = \overline{A_{ji}}$, trong đó $\overline{z}$ là liên hợp phức của $z$.

  **Ví dụ 1:** Cho ma trận:
  $$
  A = \begin{pmatrix} 1 & i \\ 2 + i & 3 \end{pmatrix}
  $$

  Để tìm liên hợp Hermitian của $A$, ta thực hiện hai bước:
  - Chuyển vị:
  $$
  A^T = \begin{pmatrix} 1 & 2 + i \\ i & 3 \end{pmatrix}
  $$
  - Liên hợp phức:
  $$
  \overline{A^T} = \begin{pmatrix} \overline{1} & \overline{2 + i} \\ \overline{i} & \overline{3} \end{pmatrix} = \begin{pmatrix} 1 & 2 - i \\ -i & 3 \end{pmatrix}
  $$

  Vậy liên hợp Hermitian của $A$ có dạng:
  $$
  A^\dagger = \begin{pmatrix} 1 & 2 - i \\ -i & 3 \end{pmatrix}
  $$

  Các ma trận (toán tử) có liên hợp Hermitian giống nhau hay $A^{\dagger} = A$ được gọi là **ma trận (toán tử) Hermitian.** Bạn đọc có thể chứng minh $(1.4)$ thỏa mãn các tiên đề của một tích trong (tích vô hướng).

### 1.3. Bản chất không gian Hilbert

**Định nghĩa:** Không gian Hilbert là một không gian vector **có thể có vô hạn chiều** và được **trang bị một tích trong**, trong đó mọi dãy Cauchy trong không gian đều **hội tụ** về một phần tử trong chính không gian đó (tính đầy đủ).

**Kết luận:** Không gian vector $L^2$ là một không gian Hilbert.

> **Chú ý:** *Trong không gian Hilbert vô hạn chiều, cần lưu ý sự khác biệt tinh tế giữa toán tử đối xứng (Hermitian) và toán tử tự liên hợp (Self-Adjoint). Một toán tử chỉ thực sự tự liên hợp khi miền xác định của nó trùng khít với miền xác định của toán tử liên hợp ($D(\hat{A}) = D(\hat{A}^\dagger)$). Trong Cơ học lượng tử, các quan sát bắt buộc phải được biểu diễn bởi toán tử tự liên hợp để đảm bảo phổ giá trị riêng hoàn toàn là số thực vững chắc.*

---

## 2. Ứng dụng của không gian $L^2$ trong Cơ học lượng tử

Quay trở lại với hàm sóng tổng quát:

$$
\Psi = \sum_{n} c_{n} \Psi_{n} \tag{1.5}
$$

Ở phần mở đầu, chúng ta đã đề xuất rằng hàm sóng (tổng quát) này có thể được biểu diễn dưới dạng một vector (có thể vô hạn chiều nếu như có vô hạn nghiệm riêng) dạng:

$$
|\Psi\rangle \rightarrow \mathbf{a} = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix} \tag{1.6}
$$

Như đã biết, các nghiệm tổng quát của hàm sóng mô tả xác suất tìm thấy hạt tại trong không gian, hay ta nói hàm sóng tổng quát $\Psi$ được chuẩn hóa. Khi đó, xác suất tìm thấy hạt của hàm sóng trên toàn bộ không gian có thể được biểu diễn dưới dạng tích trong $(1.4)$:

$$
\langle \Psi \mid \Psi \rangle = \int_{-\infty}^{\infty} |\Psi|^2 \, dx = \int_{-\infty}^{\infty} \Psi^* \cdot \Psi \, dx = 1 \tag{1.7}
$$

Do xác suất tìm thấy hạt trong một khoảng luôn bé hơn hoặc bằng 1, nên ta có thể lấy bất kỳ khoảng nào và tích phân trong công thức $(1.7)$ luôn hữu hạn (bé hơn $\infty$). Vì vậy, ta nói hàm sóng (tổng quát) tồn tại trong không gian $L^2$.

* **Ví dụ 2:** Như trong các bài sau chúng ta sẽ thấy rằng các electron tồn tại một momen góc nội tại được gọi là spin. Khác với **hàm sóng vị trí** mà chúng ta đã tìm hiểu ở các bài trước, **hàm sóng spin** thể hiện trạng thái về **momen góc nội tại** của hạt và nó chỉ nhận một trong hai giá trị $-1/2$ (tượng trưng cho trạng thái “down” - $|\downarrow\rangle$) và $1/2$ (tượng trưng cho trạng thái “up” - $|\uparrow\rangle$). Từ hai trạng thái (nghiệm riêng) này, ta có thể xây dựng một hàm sóng spin dạng:

$$
|\psi\rangle = \frac{1}{\sqrt{2}} |\uparrow\rangle + \frac{i}{\sqrt{2}} |\downarrow\rangle
$$

  Trong đó:
  - Vector riêng mô tả trạng thái “up” có dạng $|\uparrow\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
  - Vector riêng mô tả trạng thái “down” có dạng $|\downarrow\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

  Nếu chúng ta biểu diễn hàm sóng này dưới dạng vector thì nó sẽ có dạng:

$$
|\psi\rangle = \begin{pmatrix} c_{\uparrow} \\ c_{\downarrow} \end{pmatrix} = \begin{pmatrix} \dfrac{1}{\sqrt{2}} \\ \dfrac{i}{\sqrt{2}} \end{pmatrix}
$$

  Khi đó, liên hợp Hermitian của $|\psi\rangle$ là một “bra” có dạng:

$$
\langle \psi | = \begin{pmatrix} \dfrac{1}{\sqrt{2}}, & -\dfrac{i}{\sqrt{2}} \end{pmatrix}
$$

  Khi đó, tích trong của chúng sẽ là:

$$
\langle \psi \mid \psi \rangle = \begin{pmatrix} \dfrac{1}{\sqrt{2}}, & -\dfrac{i}{\sqrt{2}} \end{pmatrix} \begin{pmatrix} \dfrac{1}{\sqrt{2}} \\ \dfrac{i}{\sqrt{2}} \end{pmatrix} = 1
$$

Về mặt vật lý, giá trị này thể hiện rằng **tổng xác suất tìm thấy electron ở bất kỳ trạng thái nào có thể có (spin lên hoặc spin xuống) là 100%**. Đây chính là **điều kiện chuẩn hóa** của hàm sóng.

## 2. Quan sát (Observables)

Khi chúng ta khảo sát một hệ lượng tử, chúng ta sẽ muốn biết trạng thái (vị trí, động lượng, spin,...) của hệ hiện tại đang như thế nào. Nhưng như chúng ta đã biết thì hàm sóng tổng quát luôn thể hiện dưới dạng xác suất, vì vậy các đại lượng này cũng chỉ **xuất hiện theo xác suất**. Do đó, sẽ hợp lý hơn nếu chúng ta xem xét **trung bình** (kỳ vọng) của các quan sát. Trong cơ học lượng tử, các quan sát được biểu diễn bởi các toán tử (hay ma trận).

### 2.1. Toán tử rời rạc

**Định nghĩa:** Một toán tử được gọi là "rời rạc" nếu tập hợp các giá trị riêng của nó là đếm được/rời rạc (ví dụ: các mức năng lượng trong một hạt bị giam hãm trong hộp thế hay spin của hạt).

Các toán tử rời rạc có thể được biểu diễn trực tiếp dưới dạng ma trận. Để hiểu rõ hơn, chúng ta xét trường hợp của toán tử spin của electron.

**Ví dụ 3:** Chúng ta tiếp tục với hàm sóng spin ở phần trước. Như đã biết, electron xoay xung quanh hạt nhân nguyên tử nên chúng sẽ có momen động lượng quỹ đạo. Tuy nhiên, giống như Trái Đất vừa quay quanh Mặt Trời vừa tự quay quanh trục của nó (momen góc nội tại), electron cũng có tính chất tương tự và người ta gọi nó là spin.

Momen góc của một vật chuyển động trong không gian 3 chiều có thể được phân tích thành các thành phần $P_x, P_y, P_z$ khi ta thực hiện ánh xạ vector động lượng lên các trục tọa độ. Đối với spin của electron, các quan sát dọc theo các trục này có thể được biểu diễn dưới dạng ma trận (được gọi là ma trận Pauli) như sau:

- Toán tử spin theo trục x:

$$
S_x = \frac{\hbar}{2} \sigma_x = \frac{\hbar}{2} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$

- Toán tử spin theo trục y:

$$
S_y = \frac{\hbar}{2} \sigma_y = \frac{\hbar}{2} \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}
$$

- Toán tử spin theo trục z:

$$
S_z = \frac{\hbar}{2} \sigma_z = \frac{\hbar}{2} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

Khi đó, spin (momen góc) **trung bình** theo phương x cho một trạng thái $|\psi\rangle$ bất kỳ có thể được tính bằng phép nhân ma trận sau:

$$
\langle S_x \rangle = \langle \psi \mid S_x \psi \rangle \tag{2.1}
$$

Ví dụ, spin trung bình theo phương x của hàm sóng spin trong *Ví dụ 2* có thể được tính như sau:

$$
\langle S_x \rangle = \langle \psi | S_x \psi \rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1, & -i \end{pmatrix} \left( \frac{\hbar}{2} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \right) \left( \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ i \end{pmatrix} \right) = 0
$$

Hay ta nói spin trung bình theo phương x của trạng thái electron này là bằng 0.

*(Lưu ý: Bạn đọc có thể hiểu spin của electron giống "momen góc nội tại" để dễ hình dung, dù trên thực tế, electron là một hạt điểm không có kích thước vật lý để "tự xoay" giống như Trái Đất. Điều này tôi sẽ nói kỹ hơn ở bài hàm sóng trong không gian 3 chiều).*

Ví dụ trên là một trường hợp kinh điển nhất cho một toán tử rời rạc.

### 2.2. Toán tử vi phân và Phổ liên tục

Từ đầu bài đến giờ, tôi chỉ dùng các vector trạng thái hữu hạn chiều để bạn đọc dễ hình dung. Tuy nhiên, các bài toán về các hệ lượng tử đôi khi đòi hỏi không gian vô hạn chiều. Ta quay trở lại với hàm sóng vị trí mà chúng ta đã nghiên cứu rất nhiều tại các bài trước:

$$
\Psi(x,t) = \sum_{n} C_n \psi_n(x) e^{-i E_n t / \hbar} \tag{2.2}
$$

Như đã biết, bình phương module của hàm sóng tổng quát này chính là mật độ xác suất tìm thấy hạt tại một điểm trong không gian. Nếu ở đây chúng ta quan tâm đến trung bình vị trí của hạt, chúng ta sẽ cần một không gian vector đại diện cho sự liên tục của không gian thực, và cần một toán tử tương đương cho “quan sát” vị trí. Đây chính là nơi mà chúng ta cần dùng đến không gian Hilbert $L^2$.

Để tìm được vị trí trung bình của hạt, ta có thể tính thông qua công thức sau:

$$
\langle x \rangle = \int_{-\infty}^{\infty} x|\Psi(x)|^2 \, dx = \int_{-\infty}^{\infty} x \Psi(x)^* \Psi(x) \, dx \tag{2.3}
$$

Trong đó:
- $|\Psi(x)|^2 = \Psi(x)^* \Psi(x)$ là hàm mật độ xác suất mô tả xác suất tìm thấy hạt tại vị trí $x$. Vì xác suất toàn phần hội tụ (hữu hạn), ta nói hàm sóng $\Psi(x)$ tồn tại trong không gian $L^2$.
- $\Psi(x)^*$ là **liên hợp phức (complex conjugate)** của $\Psi(x)$.

Vị trí trung bình tính bởi $(2.3)$ sẽ là một đại lượng vô hướng. Nếu ta nhóm lại và coi $\Psi(x)$ như một vector trong không gian $L^2$ và $x$ như một toán tử, thì $(2.3)$ có thể được viết lại tương tự như phép nhân toán tử spin $(2.1)$:

$$
\langle x \rangle = \int_{-\infty}^{\infty} \Psi(x)^* (x) \Psi(x) \, dx = \int_{-\infty}^{\infty} \Psi(x)^* \hat{x} \Psi(x) \, dx = \langle \Psi(x) \mid \hat{x} \Psi(x) \rangle \tag{2.4}
$$

Trong đó $\hat{x} = x$ là **toán tử vị trí**.

Để trực quan hóa sự tương đương của toán tử này với ma trận, chúng ta thử làm một phép xấp xỉ: **rời rạc hóa** toàn bộ không gian. Giả sử ta chia trục tọa độ thành tập hợp các điểm rời rạc $X = \{x_1, x_2, \ldots, x_n\}$. Khi đó $\Psi(x)$ có thể được xấp xỉ dưới dạng một vector cột cực lớn:

$$
|\Psi(x) \rangle = \begin{pmatrix} \Psi(x_1) \\ \Psi(x_2) \\ \vdots \\ \Psi(x_n) \end{pmatrix} \tag{2.5}
$$

Và toán tử $\hat{x}$ sẽ hành xử tương tự một **ma trận đường chéo**:

$$
\hat{x} \approx \begin{pmatrix} x_1 & 0 & \cdots & 0 \\ 0 & x_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & x_n \end{pmatrix} \tag{2.6}
$$

*(Dễ thấy xấp xỉ ma trận đường chéo này có $\hat{x} = \hat{x}^{\dagger}$, thỏa mãn tính chất Hermitian).*

Khi đó, phép nhân ma trận giữa $(2.6)$ và $(2.5)$ sẽ là nhân từng thành phần:

$$
\hat{x} |\Psi(x) \rangle = \begin{pmatrix} x_1 & 0 & \cdots & 0 \\ 0 & x_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & x_n \end{pmatrix} \begin{pmatrix} \Psi(x_1) \\ \Psi(x_2) \\ \vdots \\ \Psi(x_n) \end{pmatrix} = \begin{pmatrix} x_1 \Psi(x_1) \\ x_2 \Psi(x_2) \\ \vdots \\ x_n \Psi(x_n) \end{pmatrix} \tag{2.7}
$$

Cuối cùng, kẹp Bra (liên hợp Hermitian của $(2.5)$) với $(2.7)$, ta được:

$$
\langle \Psi(x) | \hat{x} | \Psi(x) \rangle = \begin{pmatrix} \Psi(x_1)^*, & \Psi(x_2)^*, & \cdots, & \Psi(x_n)^* \end{pmatrix} \begin{pmatrix} x_1 \Psi(x_1) \\ x_2 \Psi(x_2) \\ \vdots \\ x_n \Psi(x_n) \end{pmatrix} = \sum_{i=1}^n x_i \Psi(x_i)^* \Psi(x_i) \tag{2.8}
$$

Tổng $(2.8)$ này chính là khái niệm tổng Riemann. Khi ta để khoảng cách giữa các điểm $x_i$ tiến dần về 0 (không gian trở nên liên tục), thì phép tổng biến thành phép tích phân (bản chất của tích phân chính là lấy tổng các vi phân):

$$
\lim_{\Delta x \to 0} \sum x_i |\Psi(x_i)|^2 \Delta x = \int_{-\infty}^{\infty} x \Psi(x)^* \Psi(x) \, dx = \langle x \rangle \tag{2.9}
$$

Sự chuyển tiếp từ tổng sang tích phân này là một ý tưởng cốt lõi trong **phân tích hàm (Functional Analysis)**, một nhánh cực kỳ quan trọng của toán học hiện đại. 

> **⚠️ Nhận diện hiểu lầm toán học (Rất quan trọng):**
> Cách biểu diễn $\hat{x}$ dưới dạng *ma trận đường chéo vô hạn chiều* ở trên mang tính sư phạm rất cao để giúp bạn đọc dễ hình dung cầu nối từ không gian rời rạc sang không gian liên tục. Tuy nhiên, **về mặt toán học khắt khe, điều này là không chính xác**. 
> Trong không gian $L^2$, vị trí có **phổ liên tục**. Toán tử vị trí $\hat{x}$ không phải là một ma trận, mà là một **toán tử nhân (multiplier operator)**. Nếu ta ép nó thành dạng phương trình ma trận, các "vector riêng" của nó sẽ mang hình hài của hàm Delta Dirac $\delta(x - x_0)$. Do $\int |\delta(x - x_0)|^2 \to \infty$, các trạng thái xác định hoàn toàn vị trí này **phân kỳ và hoàn toàn không thuộc không gian Hilbert $L^2$** (chúng thuộc về cấu trúc rộng hơn gọi là Rigged Hilbert Space).

**Kết luận: Các quan sát đại diện cho đại lượng vật lý hợp lệ luôn được đặc trưng bởi các toán tử Hermitian.**

Ngoài toán tử vị trí, ta còn có **toán tử động lượng** (bạn đọc có thể tham khảo phần chứng minh ở mục phụ lục) cũng là một toán tử Hermitian trong không gian liên tục. Khi đã biết rằng các đại lượng được biểu diễn bởi toán tử, ta hãy cùng xem xét các "vector đặc biệt" của những toán tử này.

## 3. Phương trình giá trị riêng

### 3.1. Trạng thái xác định

Ở bài trước, chúng ta đã biết rằng mỗi một ma trận sẽ làm biến đổi một vector trong không gian đó thành một vector khác. Tuy nhiên, trong không gian sẽ có một vài hướng mà khi ta áp dụng ma trận lên vector thì chỉ khiến chúng co dãn mà không làm thay đổi hướng, chúng ta gọi các vector này là các vector riêng. 

Tương tự trong cơ học lượng tử, trạng thái của một hệ nằm trong không gian vector $L^2$, còn các quan sát được biểu diễn bởi các toán tử. Sẽ có những trạng thái (vector) đặc biệt mà khi ta áp dụng các toán tử lên chúng, trạng thái đó không bị thay đổi về bản chất mà chỉ nhân thêm một hệ số vô hướng. Chúng ta gọi các trạng thái này là các “trạng thái xác định”.

Vậy tại sao chúng ta lại gọi chúng là **trạng thái xác định**?

Giả sử ta có một toán tử $\hat{Q}$ đại diện cho một quan sát nào đó, và một trạng thái đặc biệt $|\Psi\rangle$ thỏa mãn:

$$
\hat{Q} | \Psi \rangle = q | \Psi \rangle \tag{3.1}
$$

Khi đó, giá trị trung bình (kỳ vọng) của phép đo đại lượng $Q$ trên trạng thái này sẽ là:

$$
\langle Q \rangle = \langle \Psi | \hat{Q} | \Psi \rangle = \langle \Psi | q | \Psi \rangle = q \langle \Psi | \Psi \rangle = q \tag{3.2}
$$

Nghĩa là trung bình ta luôn đo được giá trị $q$. Hơn thế nữa, hãy tính **phương sai** (độ bất định) của các phép đo này:

$$
\sigma_Q^2 = \langle \Psi | (\hat{Q} - \langle Q \rangle)^2 | \Psi \rangle = \langle \Psi | (\hat{Q} - q)^2 | \Psi \rangle = 0 \tag{3.3}
$$

Phương sai bằng 0 đồng nghĩa với việc **không có sự phân bố xác suất nào cả**. Nếu hệ đang ở trạng thái $|\Psi\rangle$, mọi phép đo đại lượng $Q$ đều sẽ cho ra chính xác 100% kết quả là $q$. Vì vậy, chúng ta mới gọi đây là các “trạng thái xác định”.

Tuy nhiên, một toán tử có thể có nhiều trạng thái xác định khác nhau. Để tìm ra chúng, ta sử dụng định nghĩa sau:

* **Định nghĩa:**
Mỗi một **toán tử $\hat{Q}$** được đặc trưng bởi phương trình:

$$
\hat{Q} | \Psi \rangle = q | \Psi \rangle \tag{3.4}
$$

Trong đó:
- $\hat{Q}$ là toán tử quan sát.
- $|\Psi\rangle$ là trạng thái xác định, gọi là **vector riêng** (eigenvector) của $\hat{Q}$.
- $q$ là **giá trị riêng** (eigenvalue) tương ứng với trạng thái xác định $|\Psi\rangle$.

Toàn bộ công thức $(3.4)$ gọi là **phương trình giá trị riêng (eigenvalue equation)**.

Giải phương trình $(3.4)$ sẽ thu được các nghiệm riêng $\Psi$ và các giá trị riêng $q$ tương ứng. Đây chính là nội dung chính của các bài học trước khi ta đi tìm các nghiệm riêng của Phương trình Schrödinger đối với các trường thế $V$ cụ thể. Vậy thì **phương trình Schrödinger** thực chất cũng là một **phương trình giá trị riêng**. Toán tử của nó có dạng như thế nào?

Như chúng ta đã biết trong “Bài 2: Phương trình Schrödinger”, phương trình này được xây dựng dựa trên định luật bảo toàn năng lượng:

$$
E \Psi = -\frac{\hbar^{2}}{2m} \frac{\partial^{2}}{\partial x^{2}}\Psi + V \Psi \tag{3.5}
$$

Ta có thể viết lại $(3.5)$ bằng cách đặt nhân tử chung:

$$
E \Psi = \left(-\frac{\hbar^{2}}{2m} \frac{\partial^{2}}{\partial x^{2}} + V\right) \Psi \tag{3.6}
$$

Ta định nghĩa:

$$
\hat{H} = -\frac{\hbar^{2}}{2m} \frac{\partial^{2}}{\partial x^{2}} + V \tag{3.7}
$$

Nếu ta coi $\hat{H}$ là một **toán tử vi phân** thì $(3.6)$ có thể viết lại dưới dạng ngôn ngữ Dirac:

$$
\hat{H}| \Psi \rangle = E | \Psi \rangle \tag{3.8}
$$

Hay ta nói: Phương trình Schrödinger chính là phương trình giá trị riêng của **toán tử Hamiltonian $\hat{H}$** (toán tử năng lượng), với các **giá trị riêng $E$** là các mức năng lượng có thể đo được, tương ứng với **nghiệm riêng $|\Psi\rangle$**. Các bài toán về hộp thế vô hạn hay chất điểm chuyển động tự do chính là quá trình giải phương trình $(3.8)$ đối với các trường thế $V$ khác nhau.

*(Bạn đọc có thể tự kiểm tra lại toán tử Hamiltonian $(3.7)$ là một toán tử Hermitian).*

### 3.2. Phổ rời rạc

Tập hợp các nghiệm của phương trình Schrödinger tạo thành phổ (Spectrum). Với các trường thế $V$ khác nhau, ta sẽ thu được các nghiệm là rời rạc (Ví dụ: Infinite box) hoặc liên tục (Ví dụ: Hạt tự do). Đối với các nghiệm rời rạc của một toán tử Hermitian bất kỳ, chúng ta có các định lý cốt lõi sau:

* **Định lý 1: Các giá trị riêng là số thực.**

**Chứng minh:**
Giả sử ta có phương trình giá trị riêng:

$$
\hat{Q} | \Psi \rangle = q | \Psi \rangle \tag{3.9}
$$

Nhân vô hướng cả hai vế của $(3.9)$ với liên hợp Hermitian (Bra) $\langle \Psi |$, ta được:

$$
\langle \Psi | \hat{Q} \Psi \rangle = \langle \Psi | q \Psi \rangle \tag{3.10}
$$

Sử dụng tính chất của liên hợp Hermitian $\langle \Psi | \hat{Q} \Psi \rangle = \langle \hat{Q}^{\dagger} \Psi | \Psi \rangle$ đối với vế trái và kéo hằng số $q$ ra khỏi Bra-Ket ở vế phải (nhớ lấy liên hợp phức $q^*$):

$$
\langle \hat{Q}^{\dagger} \Psi | \Psi \rangle = \langle q^* \Psi | \Psi \rangle \tag{3.11}
$$

Mà vì $\hat{Q}$ là một toán tử Hermitian ($\hat{Q}^\dagger = \hat{Q}$), phương trình trở thành:

$$
\langle \Psi | \hat{Q} \Psi \rangle = \langle q^* \Psi | \Psi \rangle \tag{3.12}
$$

Từ $(3.10)$ và $(3.12)$, ta suy ra:

$$
q \langle \Psi | \Psi \rangle = q^* \langle \Psi | \Psi \rangle \tag{3.13}
$$

Vì hàm sóng không rỗng ($\langle \Psi | \Psi \rangle = 1$), phương trình $(3.13)$ chỉ đúng khi $q = q^*$. Mà chỉ có số thực mới có liên hợp phức bằng chính nó $\rightarrow$ Giá trị riêng $q$ luôn là số thực. **(QED)**

* **Định lý 2: Các nghiệm riêng tương ứng với các giá trị riêng khác nhau là trực giao.**

**Chứng minh:**
Giả sử ta có hai trạng thái riêng ứng với hai giá trị riêng phân biệt $q_1 \neq q_2$:

$$
\hat{Q} | \Psi_1 \rangle = q_1 | \Psi_1 \rangle \tag{3.14}
$$
$$
\hat{Q} | \Psi_2 \rangle = q_2 | \Psi_2 \rangle \tag{3.15}
$$

Nhân vô hướng hai vế của $(3.15)$ với Bra $\langle \Psi_1 |$:

$$
\langle \Psi_1 | \hat{Q} \Psi_2 \rangle = \langle \Psi_1 | q_2 \Psi_2 \rangle = q_2 \langle \Psi_1 | \Psi_2 \rangle \tag{3.16}
$$

Mặt khác, ta xét đại lượng $\langle \hat{Q}^{\dagger} \Psi_1 | \Psi_2 \rangle$. Vì $\hat{Q}$ là Hermitian và $q_1$ là số thực (theo Định lý 1, $q_1^* = q_1$):

$$
\langle \hat{Q}^{\dagger} \Psi_1 | \Psi_2 \rangle = \langle \hat{Q} \Psi_1 | \Psi_2 \rangle = \langle q_1 \Psi_1 | \Psi_2 \rangle = q_1 \langle \Psi_1 | \Psi_2 \rangle \tag{3.17}
$$

Theo định nghĩa của toán tử Hermitian, $\langle \Psi_1 | \hat{Q} \Psi_2 \rangle = \langle \hat{Q}^{\dagger} \Psi_1 | \Psi_2 \rangle$. Do đó, từ $(3.16)$ và $(3.17)$, ta có:

$$
q_2 \langle \Psi_1 | \Psi_2 \rangle = q_1 \langle \Psi_1 | \Psi_2 \rangle \implies (q_1 - q_2) \langle \Psi_1 | \Psi_2 \rangle = 0 \tag{3.18}
$$

Vì ta đã giả thiết $q_1 \neq q_2$, nên bắt buộc $\langle \Psi_1 | \Psi_2 \rangle = 0$. Hay nói cách khác, $|\Psi_1\rangle$ và $|\Psi_2\rangle$ là hai vector trực giao với nhau. **(QED)**

* **Tiên đề 3: Các nghiệm riêng của các quan sát là đầy đủ (Complete)**

Tiên đề 3 khẳng định rằng mọi nghiệm tổng quát (vector trạng thái bất kỳ trong không gian) đều có thể được phân tích và biểu diễn dưới dạng tổ hợp tuyến tính của các nghiệm riêng cơ sở này.

### 3.3. Phổ liên tục

Nếu các nghiệm riêng của một quan sát tạo thành dải liên tục (phổ liên tục), chúng ta về cơ bản vẫn sẽ có các **định lý 1, 2 và tiên đề 3** giống như trường hợp **phổ rời rạc**. 

Tuy nhiên, như đã nhắc đến ở phần 2.2, việc chứng minh các định lý này đối với trường hợp phổ liên tục là một chủ đề nâng cao của giải tích hàm, đòi hỏi các công cụ toán học vượt ra ngoài không gian Hilbert $L^2$ thông thường. Vì vậy, nếu có thời gian, tôi sẽ dành riêng một bài viết chuyên sâu cho chủ đề này.

**Nói chung, các nghiệm trong trường hợp phổ liên tục cũng sẽ luôn mang giá trị thực, trực giao (thông qua hàm Delta Dirac) và đầy đủ.**

> *(Bạn đọc có thể tham khảo Chương 3 của cuốn “Mathematical Methods in Quantum Mechanics - Gerald Teschl” để tìm hiểu các chứng minh chặt chẽ cho phổ liên tục).*

## 4. Phụ lục

### 4.1. Toán tử động lượng

Tương tự như toán tử vị trí chúng ta đã nghiên cứu ở phía trên, toán tử động lượng cũng là một toán tử vi phân. Và dĩ nhiên, vì nó đặc trưng cho một quan sát nên nó cũng phải là một toán tử Hermitian. 

Tuy nhiên ở đây, chúng ta cần định nghĩa động lượng trong một hệ lượng tử là gì trước. Do chất điểm không có vị trí xác định (trước một phép đo) trong không gian, chúng ta sẽ dựa vào **định lý Ehrenfest** - coi **sự biến thiên** của **vị trí trung bình** (vận tốc trung bình) theo thời gian để đặc trưng cho **vận tốc** của chất điểm:

$$
\langle v \rangle = \frac{d \langle x \rangle}{dt} = \frac{d}{dt} \int_{-\infty}^{+\infty} x |\Psi(x,t)|^2 \, dx \tag{4.1}
$$

Áp dụng dạng đặc biệt của quy tắc Leibniz đối với đạo hàm dưới dấu tích phân, ta đưa đạo hàm thời gian vào bên trong:

$$
\frac{d}{dt} \int_{-\infty}^{+\infty} |\Psi(x,t)|^2 \, dx = \int_{-\infty}^{+\infty} \frac{\partial}{\partial t} |\Psi(x,t)|^2 \, dx \tag{4.2}
$$

*(Bạn đọc có thể tham khảo thêm về [Quy tắc tích phân Leibniz trên Wikipedia](https://en.wikipedia.org/wiki/Leibniz_integral_rule)).*

Viết gọn lại hàm sóng thành dạng $\Psi$ và áp dụng quy tắc nhân đạo hàm:

$$
\frac{\partial}{\partial t} |\Psi|^2 = \frac{\partial}{\partial t} \left( \Psi^* \Psi \right) = \Psi^* \frac{\partial \Psi}{\partial t} + \frac{\partial \Psi^*}{\partial t} \Psi \tag{4.3}
$$

Nhắc lại phương trình Schrödinger:

$$
\frac{\partial \Psi}{\partial t} = \frac{i\hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar} V\Psi \tag{4.4}
$$

Lấy liên hợp phức (complex conjugate) cả hai vế của $(4.4)$, chú ý đổi dấu $i \rightarrow -i$:

$$
\frac{\partial \Psi^*}{\partial t} = -\frac{i\hbar}{2m} \frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar} V\Psi^* \tag{4.5}
$$

Thay $(4.4)$ và $(4.5)$ vào $(4.3)$, các số hạng chứa thế năng $V$ sẽ triệt tiêu lẫn nhau, ta được phương trình liên tục (thể hiện dòng xác suất):

$$
\frac{\partial}{\partial t} |\Psi|^{2} = \frac{i\hbar}{2m} \left( \Psi^{*} \frac{\partial^{2}\Psi}{\partial x^{2}} - \frac{\partial^{2}\Psi^{*}}{\partial x^{2}} \Psi \right) = \frac{\partial}{\partial x} \left[ \frac{i\hbar}{2m} \left( \Psi^{*} \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^{*}}{\partial x} \Psi \right) \right] \tag{4.6}
$$

Thay $(4.6)$ vào $(4.1)$, ta có:

$$
\frac{d\langle x \rangle}{dt} = \int_{-\infty}^{+\infty} x \frac{\partial}{\partial t} |\Psi|^{2} \, dx = \frac{i\hbar}{2m} \int_{-\infty}^{+\infty} x \frac{\partial}{\partial x} \left( \Psi^{*} \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^{*}}{\partial x} \Psi \right) dx \tag{4.7}
$$

Áp dụng quy tắc tích phân từng phần ($\int u \, dv = uv - \int v \, du$) cho $(4.7)$ với $u = x$ và $dv = \frac{\partial}{\partial x}(...)dx$, ta được:

$$
\frac{d\langle x \rangle}{dt} = \frac{i\hbar}{2m} \left( \left. x \left( \Psi^{*} \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^{*}}{\partial x} \Psi \right) \right|_{-\infty}^{+\infty} - \int_{-\infty}^{+\infty} \left( \Psi^{*} \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^{*}}{\partial x} \Psi \right) dx \right) \tag{4.8}
$$

Vì xác suất tìm thấy chất điểm ở vô cực bằng 0 (điều kiện biên $\Psi(\pm\infty) = 0$), nên phần thế cận ở hai đầu vô cực sẽ bằng 0. Khi đó $(4.8)$ viết gọn lại thành:

$$
\frac{d\langle x \rangle}{dt} = -\frac{i\hbar}{2m} \int_{-\infty}^{+\infty} \left( \Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x} \Psi \right) dx \tag{4.9}
$$

Tiếp tục áp dụng quy tắc tích phân từng phần một lần nữa cho vế $-\int \frac{\partial \Psi^*}{\partial x} \Psi \, dx$ và sử dụng lại điều kiện triệt tiêu ở vô cực, nó sẽ biến thành $+\int \Psi^* \frac{\partial \Psi}{\partial x} \, dx$. Phương trình $(4.9)$ trở thành:

$$
\frac{d\langle x \rangle}{dt} = -\frac{i\hbar}{m} \int_{-\infty}^{+\infty} \Psi^* \frac{\partial \Psi}{\partial x} \, dx \tag{4.10}
$$

Mà ta lại có động lượng cổ điển $p = mv$. Vậy **động lượng trung bình** của hệ có thể được biểu diễn qua công thức:

$$
\langle p \rangle = m \frac{d \langle x \rangle}{dt} = -i\hbar \int_{-\infty}^{+\infty} \left( \Psi^* \frac{\partial \Psi}{\partial x} \right) dx \tag{4.11}
$$

Để bạn đọc dễ hình dung vai trò của toán tử động lượng trong $(4.11)$, tôi sẽ nhóm lại theo biểu diễn Bra-Ket:

$$
\langle p \rangle = \int_{-\infty}^{+\infty} \Psi^* \left( -i\hbar \frac{\partial}{\partial x} \right) \Psi \, dx \tag{4.12}
$$

Hay:

$$
\langle p \rangle = \langle \Psi | \hat{p} | \Psi \rangle \tag{4.13}
$$

Trong đó:

- $\hat{p} = -i\hbar \frac{\partial}{\partial x}$ chính là **toán tử động lượng**.

Vậy là chúng ta đã tìm hiểu xong cơ sở toán học của các toán tử quan sát cốt lõi. Ở bài tiếp theo, chúng ta sẽ đi sâu vào **diễn giải thống kê** và ý nghĩa vật lý đằng sau những phép đo này.

---

## 5. Tham khảo

1. Teschl, G. (2014). *Mathematical Methods in Quantum Mechanics: With Applications to Schrödinger Operators*. American Mathematical Society. [Amazon Link](https://www.amazon.com/Mathematical-Methods-Quantum-Mechanics-Applications/dp/1470417049).
2. MIT OpenCourseWare. (2013). *Mathematical formalism of quantum mechanics* (18.700 Linear Algebra). [PDF Document](https://ocw.mit.edu/courses/18-700-linear-algebra-fall-2013/cc993d0c7953d1aa7d57997b1e43b7da_MIT18_700F13_qntm_mechnc.pdf).