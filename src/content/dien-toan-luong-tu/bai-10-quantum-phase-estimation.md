---
title: "Bài 10: Quantum Phase Estimation"
description: "Khám phá thuật toán Ước lượng Pha Lượng tử (QPE) - 'động cơ' toán học đằng sau các thuật toán Shor và HHL."
pubDate: "Apr 25 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Lượng tử", "QPE", "Algorithm"]
---



**Mục lục:**

Nội dung của bài này bao gồm:

1. [Thuật toán](#1-thuật-toán)  
2. [Phân tích thuật toán](#2-phân-tích-thuật-toán)  
3. [Ý nghĩa và ứng dụng](#3-ý-nghĩa-và-ứng-dụng)  
4. [Phụ lục](#4-phụ-lục)  
5. [Tham khảo](#5-tham-khảo)

<br />

Thuật toán Ước lượng Pha Lượng tử (Quantum Phase Estimation - QPE) là một trong những tiểu trình (subroutine) nền tảng và quan trọng nhất trong lý thuyết tính toán lượng tử. Đây không phải là một thuật toán giải quyết trực tiếp một bài toán thực tế, mà là "động cơ" cốt lõi đằng sau nhiều thuật toán lượng tử đột phá, bao gồm thuật toán Shor và thuật toán HHL.

Ở bài này chúng ta sẽ tìm hiểu chi tiết về thuật toán cũng như những ứng dụng của nó trong thực tế.

## 1. Thuật toán

### 1.1. Bài toán

Giả sử chúng ta có một toán tử unita $U$ và một trạng thái lượng tử $|\psi\rangle$ là một vector riêng (eigenvector) của $U$. Theo các nguyên lý của cơ học lượng tử, trị riêng (eigenvalue) tương ứng với một toán tử unita luôn có độ lớn bằng $1$, do đó nó có thể được biểu diễn dưới dạng một pha phức:

$$
U | \psi \rangle = e^{2 \pi i \theta} | \psi \rangle \tag{1.1}
$$

Trong đó, $\theta$ là một số thực chưa biết nằm trong khoảng $0 \le \theta < 1$. **Mục tiêu của thuật toán QPE là ước lượng giá trị của pha $\theta$ này với một độ chính xác mong muốn.**

### 1.2. Cấu trúc mạch lượng tử

Mạch QPE được chia thành hai không gian Hilbert riêng biệt, tương ứng với hai thanh ghi (register):

* **Thanh ghi 1 (Thanh ghi Đếm/Evaluation Register):** Bao gồm $n$ qubit được khởi tạo ở trạng thái $|0\rangle^{\otimes n}$. Số lượng qubit $n$ sẽ quyết định độ chính xác của giá trị $\theta$ thu được và xác suất thành công của phép đo cuối cùng.  
* **Thanh ghi 2 (Thanh ghi Đích/Target Register):** Gồm số lượng qubit cần thiết để lưu trữ trạng thái vector riêng $|\psi\rangle$.

### 1.3. Thuật toán

**Bước 1: Khởi tạo trạng thái chồng chập**

Áp dụng cổng Hadamard ($H$) lên tất cả $n$ qubit của thanh ghi đếm. Điều này tạo ra một trạng thái chồng chập đều của tất cả các vector cơ sở tính toán từ $0$ đến $2^n - 1$:

$$
|\Psi_1\rangle = \frac{1}{2^{n/2}} \sum_{k=0}^{2^n-1} |k\rangle \otimes |\psi\rangle \tag{1.2}
$$

**Bước 2: Áp dụng các toán tử Controlled-$U$ (Phase Kickback)**

Thuật toán sử dụng một chuỗi các toán tử kiểm soát có điều kiện: $C-U^{2^j}$. Qubit thứ $j$ của thanh ghi đếm sẽ đóng vai trò kiểm soát việc áp dụng toán tử $U^{2^j}$ lên thanh ghi đích.

Thông qua hiệu ứng **Phase Kickback**, pha $e^{2 \pi i \theta}$ không làm thay đổi trạng thái của thanh ghi đích (vì nó là vector riêng), mà "dội ngược" lại và gắn vào biên độ xác suất của thanh ghi đếm. Sau bước này, trạng thái của hệ thống trở thành:

$$
|\Psi_2\rangle = \frac{1}{2^{n/2}} \sum_{k=0}^{2^n-1} e^{2 \pi i \theta k} |k\rangle \otimes |\psi\rangle \tag{1.3}
$$

**Bước 3: Biến đổi Fourier Lượng tử ngược (Inverse QFT)**

Nhìn vào trạng thái của thanh ghi đếm ở phương trình trên, ta thấy nó chính là kết quả của một phép Biến đổi Fourier Lượng tử ($QFT$) áp dụng lên trạng thái $|2^n \theta\rangle$.

Do đó, để trích xuất $\theta$, ta áp dụng toán tử Biến đổi Fourier Lượng tử nghịch đảo ($QFT^\dagger$) lên thanh ghi đếm. Nếu $\theta$ có thể được biểu diễn chính xác bằng $n$ bit, $QFT^\dagger$ sẽ biến đổi trạng thái pha này trở lại trạng thái cơ sở tính toán chuẩn một cách hoàn hảo:

$$
|\Psi_3\rangle = |2^n \theta\rangle \otimes |\psi\rangle \tag{1.4}
$$

**Bước 4: Đo lường**

Thực hiện phép đo trên thanh ghi đếm theo cơ sở $Z$. Xác suất cao chúng ta sẽ thu được kết quả là một chuỗi nhị phân $x$ (một số nguyên) có thể giúp chúng ta suy ra được pha $\theta$ bằng phép chia cổ điển:

$$
\tilde{\theta} = \frac{x}{2^n} \tag{1.5}
$$

Như thường lệ, chúng ta sẽ đến với phần phân tích thuật toán ngay sau đây.

## 2. Phân tích thuật toán

Chúng ta bỏ qua bước khởi tạo và bước 1 do không có gì đặc biệt. Hãy bắt đầu đi sâu vào phân tích bước 2.

### 2.1. Bước 2: Áp dụng các toán tử Controlled-U

Bước 2 chính là "động cơ" tạo ra thông tin trong toàn bộ thuật toán. Nếu không có bước này, trạng thái của thanh ghi đếm sẽ mãi mãi là các trạng thái cơ sở trống rỗng và ta không có gì để đo lường.

Để hiểu rõ cách phương trình $|\Psi_2\rangle$ được hình thành, chúng ta sẽ "mổ xẻ" cơ chế này bằng toán học lượng tử, đi từ 1 qubit đến $n$ qubit. Cơ chế này được gọi là **Phase Kickback** mà chúng ta đã tìm hiểu ở Bài 5 ([Deutsch-Jozsa Algorithm](#3-phase-kickback)).

#### 2.1.1. Bản chất của Phase Kickback trên 1 Qubit

Hãy tạm quên thanh ghi $n$ qubit phức tạp. Giả sử ta chỉ có 1 qubit kiểm soát (control qubit) và 1 thanh ghi đích đang ở trạng thái vector riêng $|\psi\rangle$ của toán tử unita $U$.

Sau bước khởi tạo (cổng Hadamard), control qubit ở trạng thái chồng chập đều: $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$.

Trạng thái tổng của hệ lúc này là:

$$
|\text{hệ}\rangle = \frac{1}{\sqrt{2}} \Big( |0\rangle + |1\rangle \Big) \otimes |\psi\rangle = \frac{1}{\sqrt{2}} \Big( |0\rangle \otimes |\psi\rangle + |1\rangle \otimes |\psi\rangle \Big) \tag{2.1}
$$

Bây giờ, ta áp dụng cổng $C-U$ (Controlled-$U$). Toán tử này hoạt động theo nguyên tắc: Nếu control là $|0\rangle$ thì không làm gì cả; nếu control là $|1\rangle$ thì áp dụng $U$ lên thanh ghi đích.

$$
C\text{-}U |\text{hệ}\rangle = \frac{1}{\sqrt{2}} \Big( |0\rangle \otimes |\psi\rangle + |1\rangle \otimes U|\psi\rangle \Big) \tag{2.2}
$$

Vì $|\psi\rangle$ là vector riêng của $U$ với trị riêng $e^{2 \pi i \theta}$, ta thay $U|\psi\rangle = e^{2 \pi i \theta} |\psi\rangle$ vào phương trình:

$$
C\text{-}U |\text{hệ}\rangle = \frac{1}{\sqrt{2}} \Big( |0\rangle \otimes |\psi\rangle + |1\rangle \otimes \big( e^{2 \pi i \theta} |\psi\rangle \big) \Big) \tag{2.3}
$$

Bây giờ, ta đặt nhân tử chung $|\psi\rangle$ ra ngoài:

$$
|\text{hệ sau } C\text{-}U\rangle = \frac{1}{\sqrt{2}} \Big( |0\rangle + e^{2 \pi i \theta} |1\rangle \Big) \otimes |\psi\rangle \tag{2.4}
$$

**Kết luận vật lý quan trọng:** Thanh ghi đích $|\psi\rangle$ hoàn toàn **bất biến**. Toán tử $U$ đã quét qua nó nhưng không làm thay đổi trạng thái (đây là tính chất định nghĩa của vector riêng). Thay vào đó, "dấu vết" của phép toán — tức là trị riêng $e^{2 \pi i \theta}$ — đã bị "đá ngược" (kicked back) lên chính biên độ xác suất của trạng thái $|1\rangle$ thuộc qubit kiểm soát. Qubit kiểm soát từ trạng thái $|+\rangle$ đã bị dịch chuyển pha tương đối thành $|+_\theta\rangle$.

#### 2.1.2. Sự leo thang lũy thừa: Toán tử $U^{2^j}$

Trong mạch QPE thực tế, chúng ta dùng một thanh ghi đếm gồm $n$ qubit, được đánh số chỉ số $j$ từ $0$ (qubit ít ý nghĩa nhất - LSB) đến $n-1$ (qubit có ý nghĩa nhất - MSB).

Đối với qubit kiểm soát thứ $j$, ta áp dụng cổng có điều kiện với lũy thừa của $U$: $C-U^{2^j}$ (áp dụng toán tử $U$ đúng $2^j$ lần chỉ khi Control-Qubit là 1).

Về mặt đại số tuyến tính, nếu $|\psi\rangle$ là vector riêng của $U$ với trị riêng $e^{2 \pi i \theta}$, thì nó cũng là vector riêng của $U^2, U^3, U^m$ với trị riêng được lũy thừa tương ứng. Cụ thể:

$$
U^{2^j} |\psi\rangle = \Big(e^{2 \pi i \theta}\Big)^{2^j} |\psi\rangle = e^{2 \pi i \theta \cdot 2^j} |\psi\rangle \tag{2.5}
$$

Áp dụng định lý Phase Kickback cho qubit thứ $j$, trạng thái của qubit này sau khi qua cổng $C-U^{2^j}$ sẽ thu được một lượng pha tương ứng:

$$
|\text{qubit}_j\rangle = \frac{1}{\sqrt{2}} \Big( |0\rangle + e^{2 \pi i \theta \cdot 2^j} |1\rangle \Big) \tag{2.6}
$$

#### 2.1.3. Tích Ten-xơ và việc hình thành chuỗi Fourier ($e^{2 \pi i \theta k}$)

Đây là lúc phép thuật toán học thực sự xảy ra. Trạng thái của toàn bộ thanh ghi đếm là Tích Ten-xơ (Tensor Product) của từng qubit riêng lẻ:

$$
|\text{reg}_1\rangle = |\text{qubit}_{n-1}\rangle \otimes |\text{qubit}_{n-2}\rangle \otimes \dots \otimes |\text{qubit}_0\rangle \tag{2.7}
$$

Thay trạng thái của từng qubit vào, ta có:

$$
|\text{reg}_1\rangle = \frac{1}{2^{n/2}} \bigotimes_{j=0}^{n-1} \Big( |0\rangle + e^{2 \pi i \theta \cdot 2^j} |1\rangle \Big) \tag{2.8}
$$

Khi khai triển phép nhân ten-xơ này, ta sẽ nhận được tổng của $2^n$ số hạng tương ứng với các vector cơ sở $|k\rangle$ từ $|00...0\rangle$ đến $|11...1\rangle$. Xét một trạng thái cơ sở $|k\rangle$ bất kỳ, số nguyên $k$ được biểu diễn nhị phân là chuỗi bit $k_{n-1} k_{n-2} \dots k_0$ ($k_j \in \{0, 1\}$).

Giá trị thập phân của $k$ được tính bằng:

$$
k = \sum_{j=0}^{n-1} k_j 2^j \tag{2.9}
$$

Khi khai triển tích ten-xơ, pha gắn liền với trạng thái $|k\rangle$ sẽ là tích các pha từ các qubit thành phần:
* Nếu $k_j = 0$, qubit đó đóng góp pha $1$.
* Nếu $k_j = 1$, qubit đó đóng góp pha $e^{2 \pi i \theta \cdot 2^j}$.

Tổng quát lại, pha tổng cộng cho trạng thái $|k\rangle$ là:

$$
\prod_{j=0}^{n-1} \Big( e^{2 \pi i \theta \cdot 2^j} \Big)^{k_j} = e^{2 \pi i \theta \sum_{j=0}^{n-1} k_j 2^j} \tag{2.10}
$$

Nhìn vào số mũ, cụm $\sum_{j=0}^{n-1} k_j 2^j$ chính xác là giá trị nguyên $k$. Do đó, pha tổng cộng đơn giản hóa thành:

$$
e^{2 \pi i \theta k} \tag{2.11}
$$

Ghép tất cả lại, phương trình trạng thái của hệ thống sau toàn bộ chuỗi $C-U^{2^j}$ chính thức trở thành:

$$
|\Psi_2\rangle = |\text{reg}_1\rangle \otimes |\psi\rangle = \left( \frac{1}{2^{n/2}} \sum_{k=0}^{2^n-1} e^{2 \pi i \theta k} |k\rangle \right) \otimes |\psi\rangle \tag{2.12}
$$

Đây chính là trạng thái chứa đựng dữ liệu pha liên tục dưới dạng một chuỗi hàm mũ phức, sẵn sàng để được giải mã bằng $QFT^\dagger$ trong bước tiếp theo.

### 2.2. Biến đổi Fourier Lượng tử ngược (Inverse QFT)

Bước 3 chính là "trái tim" của thuật toán Ước lượng Pha Lượng tử (QPE), nơi sự giao thoa lượng tử được sử dụng để trích xuất thông tin. Để hiểu rõ vì sao $QFT^\dagger$ lại có khả năng "kéo" giá trị $\theta$ ra khỏi một trạng thái pha phức tạp, chúng ta cần đối chiếu trạng thái của hệ thống với định nghĩa toán học của Biến đổi Fourier Lượng tử (QFT).

Hãy tạm thời bỏ qua thanh ghi đích (chứa trạng thái $|\psi\rangle$) vì nó không thay đổi, và chỉ tập trung vào thanh ghi đếm (register 1) gồm $n$ qubit sau khi đã áp dụng các cổng Controlled-$U$. Trạng thái của nó lúc này là:

$$
|\text{reg}_1\rangle = \frac{1}{2^{n/2}} \sum_{k=0}^{2^n-1} e^{2 \pi i \theta k} |k\rangle \tag{2.13}
$$

Bây giờ, hãy nhìn lại định nghĩa chuẩn của toán tử Biến đổi Fourier Lượng tử ($QFT$). Khi tác dụng $QFT$ lên một trạng thái cơ sở tính toán $|x\rangle$ (với $x$ là một số nguyên từ $0$ đến $2^n-1$), ta có:

$$
QFT |x\rangle = \frac{1}{2^{n/2}} \sum_{k=0}^{2^n-1} e^{2 \pi i \frac{x k}{2^n}} |k\rangle \tag{2.14}
$$

Khi áp dụng toán tử $QFT^\dagger$ lên $|\psi_{\text{reg}_1}\rangle$, biên độ xác suất $\alpha_m$ để hệ sụp đổ về một trạng thái cơ sở $|m\rangle$ bất kỳ có thể được tính bằng tích vô hướng (inner product) giữa trạng thái đích $\langle m |$ và trạng thái hệ thống sau khi qua $QFT^\dagger$:

$$
\alpha_m = \langle m | QFT^\dagger | \text{reg}_1 \rangle \tag{2.15}
$$

Vì phần tử ma trận của $QFT^\dagger$ chiếu trạng thái $|k\rangle$ lên $\langle m|$ là $\frac{1}{\sqrt{N}} e^{-2 \pi i \frac{m k}{N}}$ (với $N = 2^n$), ta có thể viết lại biên độ này thành:

$$
\alpha_m = \frac{1}{N} \sum_{k=0}^{N-1} e^{2 \pi i \left( \theta - \frac{m}{N} \right) k} \tag{2.16}
$$

#### 2.2.1. Diễn giải hình học - Các vector nối đuôi nhau

Phương trình trên chứa đựng toàn bộ vẻ đẹp của sự giao thoa lượng tử. Ta có thể hình dung nó trên mặt phẳng phức (Complex Plane) như sau: Biên độ $\alpha_m$ là tổng của $N$ vector (tương ứng với $k = 0, 1, \dots, N-1$).

* **Độ dài:** Mỗi vector có độ dài cực kỳ nhỏ, bằng $\frac{1}{N}$.
* **Góc quay tương đối:** Góc lệch giữa vector thứ $k$ và vector thứ $k+1$ là một hằng số: $\Delta\phi = 2 \pi \left( \theta - \frac{m}{N} \right)$.

Khả năng xảy ra trạng thái $m$ hoàn toàn phụ thuộc vào góc lệch $\Delta\phi$ này:

#### Trường hợp 1: Trạng thái $m$ cực kỳ gần với giá trị thực $\theta$ ($m/N \approx \theta$)

Lúc này, $\Delta\phi \approx 0$. Khi ta đặt $N$ vector này nối đuôi nhau (head-to-tail), vì góc lệch vô cùng nhỏ, chúng gần như cùng hướng về một phía. Chuỗi vector sẽ duỗi thẳng ra, vươn ra xa gốc tọa độ nhất có thể. Vector tổng hợp nối từ gốc đến điểm cuối sẽ có độ dài lớn nhất (gần bằng $1$). Bình phương độ dài này cho ta một xác suất rất cao. Đây là minh chứng trực quan của **giao thoa tăng cường**.

#### Trường hợp 2: Trạng thái $m$ ở xa giá trị thực $\theta$

Lúc này, $\Delta\phi$ là một góc lớn. Khi nối đuôi nhau, vector sau sẽ bẻ gập một góc đáng kể so với vector trước. Chuỗi $N$ vector sẽ nhanh chóng cuộn tròn lại thành một vòng xoắn ốc (hoặc một đa giác đều) bao quanh gốc tọa độ. Điểm kết thúc của chuỗi vector rơi sát vào gốc $(0,0)$. Vector tổng hợp cực kỳ ngắn, dẫn đến xác suất đo được trạng thái $m$ này gần như bằng $0$. Đây là **giao thoa triệt tiêu**.

Sự "rò rỉ phổ" xảy ra khi vòng xoắn ốc không khép kín hoàn hảo (do $\theta$ là số vô tỷ, $\Delta\phi$ không tạo ra số vòng quay nguyên). Điểm cuối không chạm hẳn vào gốc tọa độ mà còn dư ra một đoạn nhỏ, đoạn dư đó chính là xác suất bị rò rỉ.

#### Trường hợp đặc biệt: Giao thoa triệt tiêu hoàn hảo 100%

Giả sử pha thực $\theta$ có thể được biểu diễn chính xác hoàn toàn trên thanh ghi $n$ qubit. Điều này có nghĩa là tồn tại một số nguyên $m_t$ (đáp án thật, với $0 \le m_t \le N-1$) sao cho:

$$
\theta = \frac{m_t}{N} \tag{2.17}
$$

Lúc này, biên độ xác suất $\alpha_m$ để đo được một trạng thái $m$ bất kỳ ($0 \le m \le N-1$) từ phương trình tổng quát sẽ trở thành:

$$
\alpha_m = \frac{1}{N} \sum_{k=0}^{N-1} e^{2 \pi i \left( \frac{m_t}{N} - \frac{m}{N} \right) k} = \frac{1}{N} \sum_{k=0}^{N-1} e^{2 \pi i \left( \frac{m_t - m}{N} \right) k} \tag{2.18}
$$

Để cho phương trình gọn lại, ta đặt số nguyên $\Delta m = m_t - m$.

* **Khi ta đo đúng trạng thái $m = m_t$**
    Lúc này $\Delta m = 0$. Phương trình trở thành:
    $$
    \alpha_{m_t} = \frac{1}{N} \sum_{k=0}^{N-1} e^{0} = \frac{1}{N} \sum_{k=0}^{N-1} 1 = \frac{1}{N} \times N = 1 \tag{2.19}
    $$
    Xác suất $P(m_t) = |\alpha_{m_t}|^2 = 1$ (tức là $100\%$).

* **Khi ta đo vào các trạng thái sai ($m \neq m_t$)**
    Lúc này, $\Delta m$ là một số nguyên khác $0$. Cụ thể, vì cả $m$ và $m_t$ đều nằm trong khoảng $[0, N-1]$, nên $\Delta m$ nằm trong khoảng $[-(N-1), N-1]$. Điều quan trọng nhất: $\Delta m$ **không bao giờ là bội số của $N$**. Ta có chuỗi tổng quát:
    $$
    S = \sum_{k=0}^{N-1} \left( e^{2 \pi i \frac{\Delta m}{N}} \right)^k \tag{2.20}
    $$
    Đây chính xác là tổng của một chuỗi cấp số nhân với công bội $r = e^{2 \pi i \frac{\Delta m}{N}}$. Công thức tính tổng của chuỗi này là:
    $$
    S = \frac{1 - r^N}{1 - r} \tag{2.21}
    $$
    Xét Tử số ($1 - r^N$):
    $$
    r^N = \left( e^{2 \pi i \frac{\Delta m}{N}} \right)^N = e^{2 \pi i \Delta m} = 1 \tag{2.22}
    $$
    (Vì $\Delta m$ là số nguyên nên $e^{2 \pi i \Delta m} = 1$). Tử số bằng $0$.
    Xét Mẫu số ($1 - r$): Vì $\Delta m$ không phải bội số của $N$ nên $r \neq 1$. Do đó mẫu số khác $0$.
    **Kết luận:** Tổng $S = 0$, dẫn đến $\alpha_m = 0$ cho mọi $m \neq m_t$.

**Hay ta nói trong trường hợp pha $\theta$ là một số hữu tỉ (có thể được biểu diễn chính xác bởi $n$ qubit) thì xác suất đo được đáp án đúng sau bước 3 sẽ là 100%.**

#### Diễn giải hình học: Tại sao đa giác luôn khép kín?

Nhìn lại tử số $r^N = e^{2 \pi i \Delta m} = 1$. Góc quay giữa mỗi vector kế tiếp nhau là $\frac{2 \pi \Delta m}{N}$. Khi ta nối đuôi toàn bộ $N$ vector lại với nhau, **tổng góc quay** từ vector đầu tiên đến vector cuối cùng là:

$$
N \times \left( \frac{2 \pi \Delta m}{N} \right) = 2 \pi \Delta m \tag{2.23}
$$

Bởi vì $\Delta m$ là một số nguyên, tổng góc quay luôn là **chính xác các vòng tròn trọn vẹn** ($2\pi, 4\pi, -2\pi, \dots$). Điểm kết thúc của vector cuối cùng BẮT BUỘC phải đâm thẳng về đúng điểm xuất phát ban đầu là gốc tọa độ $(0,0)$. Sự giao thoa triệt tiêu là tuyệt đối, không có bất kỳ "chút xác suất" nào bị rò rỉ ra các trạng thái khác.

*(Thực tế cơ chế giao thoa mà chúng ta đã nghiên cứu ở Bài 9 - Thuật toán Shor - Phần 2 chính là một trường hợp của QPE với toán tử $U$ là phép nhân modulo $a x \pmod N$).*

Dưới đây là một mô phỏng tương tác giúp bạn đọc hình dung rõ hơn về cách các vector thay đổi dựa trên pha thực lượng tử và số lượng qubit.

<iframe 
  src="https://ygxclc.csb.app" 
  style="width: 100%; height: 550px; border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" 
  title="Quantum Phase Estimation"
  sandbox="allow-scripts allow-same-origin"
></iframe>

## 3. Ý nghĩa và ứng dụng

### 3.1. Ý nghĩa

Để hiểu được ý nghĩa của QPE trong tính toán trị riêng ta cần xem xét bài toán này trong ngữ cảnh của máy tính cổ điển. Vậy hãy xem cách máy tính cổ điển giải bài toán này như thế nào.

### 3.1.1. Cách máy tính cổ điển trích xuất pha khi đã biết Vector riêng

Vì ta đã biết $\vec{v}$ là vector riêng của $U$, phương trình định nghĩa trị riêng sẽ luôn thỏa mãn:

$$
U \vec{v} = \lambda \vec{v} \tag{3.1}
$$

Để tìm $\lambda$ (và từ đó suy ra pha $\theta$), ta không cần giải phương trình đặc trưng hay dùng thuật toán lặp gì cả. Ta chỉ cần áp dụng **Thương số Rayleigh (Rayleigh Quotient)** hoặc đơn giản hơn là tính toán phép nhân ma trận - vector:

1. **Chọn một phần tử:** Tìm một phần tử bất kỳ ở vị trí thứ $k$ trong vector $\vec{v}$ sao cho $v_k \neq 0$.  
2. **Nhân ma trận:** Tính phần tử thứ $k$ của vector kết quả sau khi nhân $U$ với $\vec{v}$. Tức là bạn chỉ cần lấy hàng thứ $k$ của ma trận $U$ nhân vô hướng với cột $\vec{v}$:

$$
u'_k = \sum_{j=1}^{2^n} U_{kj} v_j \tag{3.2}
$$

3. **Suy ra trị riêng:** Chia kết quả vừa tính cho $v_k$:  

$$
\lambda = \frac{u'_k}{v_k} \tag{3.3}
$$

4. **Tính pha:** Đổi số phức $\lambda = a + bi$ ra góc pha:

$$
\theta = \frac{\arctan(b/a)}{2\pi} \tag{3.4}
$$

Để minh họa một cách trực quan và dễ hiểu nhất, chúng ta sẽ thiết lập một hệ 2 Qubit ($N = 2^n = 4$). Ma trận $U$ sẽ có kích thước $4 \times 4$ và vector trạng thái $\vec{v}$ sẽ có 4 chiều. 

**Ví dụ:** Giả sử chúng ta có một ma trận Unita $U$ thực hiện phép "hoán vị vòng quanh" các trạng thái cơ sở (một phép toán rất cơ bản).

$$
U = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}
$$

Và ta đã biết chính xác một vector riêng $\vec{v}$ của ma trận này. Vector riêng đó chứa các số phức:

$$
\vec{v} = \begin{bmatrix} 1 \\ i \\ -1 \\ -i \end{bmatrix}
$$

### Quá trình tính toán cổ điển

#### Bước 1: Chọn một phần tử

Ta cần chọn một vị trí $k$ (từ $1$ đến $4$) sao cho $v_k \neq 0$.

Nhìn vào $\vec{v}$, cả 4 phần tử đều khác $0$. Để ví dụ thú vị, ta chọn $k = 2$.

Tại vị trí $k=2$, ta có:

$$
v_2 = i
$$

#### Bước 2: Nhân ma trận (Tính $u'_k$)

Máy tính cổ điển không cần nhân toàn bộ ma trận $U$ với $\vec{v}$. Nó chỉ cần lấy **hàng thứ 2** của ma trận $U$ nhân vô hướng với cột $\vec{v}$.

- Hàng thứ 2 của $U$ là: $[0, 0, 1, 0]$  
- Cột $\vec{v}$ là: $[1, i, -1, -i]^T$

Áp dụng công thức $u'_2 = \sum U_{2j} v_j$:

$$
u'_2 = (0 \cdot 1) + (0 \cdot i) + (1 \cdot -1) + (0 \cdot -i)
$$
$$
u'_2 = -1
$$

#### Bước 3: Suy ra trị riêng ($\lambda$)

Bây giờ ta chia kết quả vừa tính cho $v_2$ ban đầu:

$$
\lambda = \frac{u'_2}{v_2} = \frac{-1}{i}
$$

Để khử số phức ở mẫu, ta nhân cả tử và mẫu cho $i$:

$$
\lambda = \frac{-1 \cdot i}{i \cdot i} = \frac{-i}{-1} = i
$$

Vậy trị riêng là $\mathbf{\lambda = i}$.

#### Bước 4: Tính pha ($\theta$)

Ta có $\lambda = i$, viết dưới dạng đại số là $\lambda = 0 + 1i$.

- Phần thực $a = 0$  
- Phần ảo $b = 1$

Góc pha (radian) trên mặt phẳng phức của số $i$ (nằm trên trục tung dương) là $\frac{\pi}{2}$.

Áp dụng công thức tính $\theta$:

$$
\theta = \frac{\frac{\pi}{2}}{2\pi} = \frac{1}{4} = \mathbf{0.25}
$$

**Kết luận:** Góc pha lượng tử của vector riêng này chính xác là $0.25$.

### 3.1.2. Giới hạn của máy tính cổ điển

Nhìn vào thuật toán cổ điển 4 bước ở trên, bạn đọc sẽ thấy nó chỉ sử dụng phép nhân, phép cộng và một phép chia. Trông có vẻ máy tính cổ điển sẽ dễ dàng chiến thắng máy tính lượng tử? Câu trả lời là **KHÔNG**. Cụ thể máy tính cổ điển sẽ gặp phải các vấn đề sau:

#### 1. Vấn đề "Cầm" Vector riêng (Khủng hoảng RAM)

* **Cổ điển:** Để máy tính cổ điển "biết" được vector riêng của một hệ $n$ Qubit, bạn phải nạp mảng $\vec{v}$ này vào RAM. Mảng này có $N = 2^n$ số phức. Lại quay về bài toán cũ: với $n=50$, bạn cần 16 Petabytes RAM chỉ để... chứa cái vector mà thượng đế ban cho. Bạn có đáp án, nhưng túi của bạn không đủ to để đựng nó!  
* **QPE (Lượng tử):** Nó không nạp $2^n$ con số. Nó "cầm" vector riêng này dưới dạng một trạng thái vật lý thực sự của $n$ hạt Qubit (chỉ tốn đúng... 50 Qubit vật lý).

#### 2. Vấn đề thực thi (Thời gian tính toán)

* **Cổ điển:** Ở bước 2 của thuật toán trên, để tính ra được $u'_k$, CPU của bạn phải thực hiện một vòng lặp chạy qua $2^n$ phần tử ($j=1$ đến $2^n$). Với $n=50$, CPU phải làm $1.12 \times 10^{15}$ phép nhân số phức. Dù siêu máy tính có thể giải quyết con số này trong vài giờ, nhưng nếu $n$ lên tới 100, vũ trụ sẽ sụp đổ trước khi CPU chạy xong vòng lặp. Thời gian chạy vẫn là $\mathcal{O}(2^n)$.  
* **QPE (Lượng tử):** QPE sử dụng các cổng lượng tử (Controlled-$U$) tác động trực tiếp lên hệ vật lý. Việc áp dụng cổng $U$ thường chỉ yêu cầu số lượng thao tác ở mức đa thức $\mathcal{O}(\text{poly}(n))$. Việc đọc kết quả qua biến đổi Fourier nghịch đảo (IQFT) cũng chỉ tốn $\mathcal{O}(n^2)$ thao tác.

#### 3. Vấn đề định dạng của Toán tử $U$

* **Cổ điển:** Công thức $\sum U_{kj} v_j$ yêu cầu bạn phải biết chính xác các con số trong ma trận $U$. Nhưng trong điện toán lượng tử, $U$ thường không có sẵn dưới dạng ma trận Excel. Nó được cấp dưới dạng một mạch điện lượng tử. Để một máy tính cổ điển biết được giá trị $U_{kj}$ tại một ô cụ thể trong mạch đó, nó phải dùng các thuật toán mô phỏng (Tensor Network hoặc Statevector simulation) cũng tốn thời gian hàm mũ.  
* **QPE (Lượng tử):** QPE không cần biết $U$ trông như thế nào trên giấy. Nó chỉ cắm điện vào mạch $U$ và để nguyên lý giao thoa tự làm việc của nó.

**Tóm lại:** Giới hạn của máy tính cổ điển không chỉ nằm ở thuật toán (cách giải phương trình), mà nó nằm ở giới hạn vật lý của cấu trúc dữ liệu. Máy tính lượng tử thắng vì không gian lưu trữ của nó *chính là* không gian Hilbert $2^n$ chiều của tự nhiên, trong khi máy tính cổ điển chỉ đang cố gắng một cách vô vọng để *giả lập* lại không gian khổng lồ đó bằng những bit 0 và 1 rời rạc. 

Nên nhớ QPE chỉ đem lại lợi thế lớn so với máy tính cổ điển khi ta đã có thể cố định vector riêng ban đầu (hoặc tìm cách tăng xác suất đo được vector riêng này lên đáng kể so với các vector khác).

Nếu mục tiêu của ta là dùng QPE để tìm **TẤT CẢ** các vector riêng và trị riêng của một hệ lượng tử lớn, thì máy tính lượng tử sẽ **hoàn toàn vô dụng và mất đi lợi thế tăng tốc hàm mũ**. 

#### Sự tàn khốc của Bài toán Người sưu tầm tem (Coupon Collector's Problem)

Giả sử ta khởi tạo thanh ghi trạng thái bằng một chồng chập đồng đều (áp dụng cổng Hadamard lên toàn bộ Qubit). Khi đó, xác suất sụp đổ về bất kỳ trị riêng nào trong số $N = 2^n$ trị riêng là như nhau (bằng $1/N$).

Theo toán học xác suất, để bốc ngẫu nhiên có hoàn lại và thu thập đủ bộ $N$ kết quả khác nhau, số lần bạn phải chạy thuật toán (kỳ vọng) là:

$$
E = N \ln N
$$

Với $n = 50$ Qubit, $N = 2^{50} \approx 1.12 \times 10^{15}$.

Số lần chạy QPE ta cần sẽ là khoảng $3.8 \times 10^{16}$ **lần**. Điều này đưa bài toán quay trở lại độ phức tạp thời gian hàm mũ (Exponential Time), phá nát hoàn toàn lợi thế đa thức (Polynomial Time) mà QPE mang lại. Thậm chí, việc chỉ đơn thuần "viết ra" $2^{50}$ trị riêng lên ổ cứng cổ điển cũng đã là bất khả thi (vấn đề thắt cổ chai I/O).

### 3.2. Ứng dụng

Trong vật lý và hóa học (ví dụ: mô phỏng phân tử thuốc, vật liệu mới), các nhà khoa học gần như không bao giờ quan tâm đến toàn bộ phổ năng lượng. Thứ duy nhất quyết định tính chất hóa học của một chất là Trạng thái cơ bản (Ground State) - trạng thái có mức năng lượng (trị riêng) thấp nhất. Và mọi hệ thống vật lý đều có một phổ các mức năng lượng khác nhau, tương ứng với các trị riêng $\lambda_0, \lambda_1, \lambda_2 \dots$ (trong đó $\lambda_0$ là mức thấp nhất).

Theo các định luật của Nhiệt động lực học, ở nhiệt độ phòng hoặc nhiệt độ cực thấp, các hệ thống tự nhiên có xu hướng phát xạ năng lượng và "rơi" về mức năng lượng thấp nhất, ổn định nhất. Đây gọi là **Trạng thái cơ bản (Ground State)**.

* **Trong hóa học:** Khi hai nguyên tử liên kết với nhau để tạo thành phân tử, năng lượng liên kết và cấu trúc hình học của phân tử đó gần như được quyết định hoàn toàn bởi trạng thái cơ bản của các electron.  
* **Trong phát minh thuốc:** Nếu bạn muốn biết một phân tử protein có gắn kết được với một loại virus hay không, bạn cần tính chính xác năng lượng trạng thái cơ bản của hệ phức hợp đó.

Vì vậy, việc tìm các trị riêng ở trạng thái kích thích (excited states - các mức năng lượng cao) thường không mang lại giá trị ứng dụng tức thời. Chúng ta dồn toàn lực chỉ để tìm $\lambda_0$.

#### 3.2.1. Về mặt Toán học: "Lời nguyền" của sự chồng chập đồng đều

Giả sử hệ thống phân tử của ta cần 50 Qubit để mô phỏng. Không gian trạng thái có $N = 2^{50}$ chiều.

Nếu ta khởi tạo đầu vào cho QPE bằng một chồng chập đồng đều (áp dụng cổng Hadamard cho toàn bộ qubit), trạng thái đó có dạng:

$$
|\psi_{\text{uniform}}\rangle = \frac{1}{\sqrt{N}} \sum_{j=0}^{N-1} |j\rangle
$$

Vấn đề là, Trạng thái cơ bản thực sự của phân tử ($|\psi_0\rangle$) chỉ là một "hạt cát" trong sa mạc $2^{50}$ trạng thái này. Nếu ta phân tích $|\psi_{\text{uniform}}\rangle$ theo cơ sở các vector riêng của Hamiltonian:

$$
|\psi_{\text{uniform}}\rangle = c_0|\psi_0\rangle + c_1|\psi_1\rangle + \dots + c_N|\psi_N\rangle
$$

Hệ số $c_0$ (mức độ trùng lắp giữa chồng chập đồng đều và trạng thái cơ bản) sẽ cực kỳ nhỏ, cỡ xấp xỉ $\frac{1}{\sqrt{2^{50}}}$.

Khi ta chạy QPE và đo lường, xác suất để hệ thống sụp đổ về Trạng thái cơ bản $\lambda_0$ là $|c_0|^2 \approx \frac{1}{2^{50}}$. Nghĩa là bạn sẽ phải chạy QPE $2^{50}$ lần mới có cơ hội "bốc" trúng mức năng lượng bạn cần. Lợi thế lượng tử hoàn toàn biến mất.

### 3.2.2. Về mặt Thuật toán: Cách "nặn" ra trạng thái (State Preparation)

Để vượt qua rào cản xác suất trên, các nhà khoa học không dùng cổng Hadamard để tạo đầu vào ngẫu nhiên nữa. Họ sử dụng các thuật toán chuẩn bị trạng thái (State Preparation Algorithms) để "nặn" ra một trạng thái $|\psi_{\text{ansatz}}\rangle$ nằm rất sát với $|\psi_0\rangle$. Có hai phương pháp phổ biến nhất:

### **A. Chuẩn bị Trạng thái Đoạn nhiệt (Adiabatic State Preparation)**

Phương pháp này dựa trên **Định lý Đoạn nhiệt (Adiabatic Theorem)** trong cơ học lượng tử.

1. Người ta bắt đầu với một hệ lượng tử cực kỳ đơn giản (gọi là $H_{\text{easy}}$), mà trạng thái cơ bản của nó ta có thể tạo ra dễ dàng bằng vài cổng lượng tử cơ bản.  
2. Từ từ (rất chậm), người ta biến đổi tính chất vật lý của hệ thống từ $H_{\text{easy}}$ sang Hamiltonian của phân tử mục tiêu ($H_{\text{target}}$).  
3. Định lý Đoạn nhiệt bảo đảm rằng: Nếu sự biến đổi diễn ra đủ chậm, hệ thống sẽ **không bao giờ nhảy lên trạng thái kích thích**, mà sẽ luôn bám sát và tiến hóa mượt mà thành trạng thái cơ bản của $H_{\text{target}}$.

### **B. Variational Quantum Eigensolver (VQE) - Kẻ định hình kỷ nguyên NISQ**

Đây là một thuật toán lai (Hybrid Classical-Quantum).

1. Người ta thiết kế một mạch lượng tử có chứa các cổng quay có thể điều chỉnh góc (tham số $\theta$). Mạch này tạo ra trạng thái dự đoán $|\psi(\theta)\rangle$.  
2. Máy tính lượng tử đo lường năng lượng của trạng thái này: $E(\theta) = \langle \psi(\theta)|H_{\text{target}}|\psi(\theta)\rangle$.  
3. Một máy tính cổ điển nhận kết quả $E(\theta)$, chạy các thuật toán tối ưu hóa (như Gradient Descent) để tìm góc $\theta_{\text{new}}$ nhằm làm cho năng lượng giảm xuống thấp hơn.  
4. Quá trình lặp lại vòng quanh cho đến khi năng lượng không thể giảm được nữa. Theo Nguyên lý Biến phân (Variational Principle), năng lượng lúc này cực kỳ sát với mức năng lượng cơ bản, và trạng thái $|\psi(\theta_{\text{opt}})\rangle$ lúc này giống trạng thái cơ bản thực sự tới hơn 90%.

### 3.2.3. Kết nối lại với QPE

Lúc này, trạng thái $|\psi_{\text{ansatz}}\rangle$ mà bạn vừa "nặn" ra bằng VQE hoặc Adiabatic được đưa vào làm thanh ghi trạng thái (State Register) cho thuật toán QPE.

Giả sử nó giống trạng thái cơ bản thực tế tới $90\%$. Về mặt toán học, nó được biểu diễn là:

$$
|\psi_{\text{ansatz}}\rangle = \sqrt{0.9} |\psi_0\rangle + \sqrt{0.1} |\psi_{\text{khác}}\rangle
$$

Khi mạch QPE chạy xong và ta thực hiện phép đo, hệ thống bắt buộc phải sụp đổ. Theo Quy tắc Born (Born's Rule), xác suất để ta đo được trị riêng $\lambda_0$ (năng lượng trạng thái cơ bản) sẽ đúng bằng bình phương biên độ xác suất:

$$
\text{Xác suất} = |\sqrt{0.9}|^2 = 90\%
$$

**Tổng kết lại:** Ta không bắt máy tính lượng tử tìm kim trong đáy biển bằng cách nhặt ngẫu nhiên (chồng chập đồng đều). Ta dùng các bộ lọc vật lý (VQE, Adiabatic) để gom rác ra chỗ khác, biến đống rơm thành 90% là kim. Sau đó, ta dùng QPE như một kính lúp để xác định chính xác tuyệt đối kích thước (pha $\theta$) của cây kim đó chỉ trong 1 hoặc 2 lần nhìn (lần đo).

## 4. Phụ lục

### 4.1. Tích vô hướng $\langle m | QFT^\dagger | \text{reg}_1 \rangle$

Trong cơ học lượng tử, sự kỳ diệu thường nằm ở cách các ký hiệu Bra-Ket (Dirac notation) tương tác với nhau, đặc biệt là khi chúng ta chuyển đổi giữa toán tử thẳng và toán tử liên hợp.

Để đi đến phương trình cuối cùng, chúng ta sẽ thực hiện phép tính này qua 4 bước đại số tuyến tính cơ bản, sử dụng tính chất của phép liên hợp Hermite và tính trực giao (orthogonality) của không gian Hilbert.

**Bước 1: Khai triển toán tử $\langle m | QFT^\dagger$**

Thay vì cố gắng áp dụng $QFT^\dagger$ lên một trạng thái chồng chập phức tạp $|\text{reg}_1\rangle$, thủ thuật toán học thông minh nhất ở đây là **tính toán từ bên trái sang**.

Theo định nghĩa của Biến đổi Fourier Lượng tử ($QFT$) tác dụng lên một trạng thái cơ sở $|m\rangle$, ta có:

$$
QFT |m\rangle = \frac{1}{\sqrt{N}} \sum_{j=0}^{N-1} e^{2 \pi i \frac{m j}{N}} |j\rangle \tag{4.1}
$$

*(Lưu ý: Tôi sử dụng chỉ số $j$ ở đây để tránh nhầm lẫn với chỉ số $k$ sẽ dùng ở phương trình sau).*

Bây giờ, ta muốn tìm $\langle m | QFT^\dagger$. Theo đại số tuyến tính, đây chính là phép **liên hợp phức chuyển vị** (Hermitian conjugate) của vector ở trên.

Khi lấy liên hợp của toàn bộ phương trình:

1. Ket $|j\rangle$ biến thành Bra $\langle j|$.  
2. Số phức $i$ đổi dấu thành $-i$.

Do đó, ta có:

$$
\langle m | QFT^\dagger = \left( QFT |m\rangle \right)^\dagger = \frac{1}{\sqrt{N}} \sum_{j=0}^{N-1} e^{-2 \pi i \frac{m j}{N}} \langle j| \tag{4.2}
$$

**Bước 2: Thiết lập tích vô hướng với hai tổng độc lập**

Bây giờ ta đem kết quả ở Bước 1 nhân vô hướng với trạng thái $|\text{reg}_1\rangle$ tại (2.13):

$$
|\text{reg}_1\rangle = \frac{1}{\sqrt{N}} \sum_{k=0}^{N-1} e^{2 \pi i \theta k} |k\rangle \tag{4.3}
$$

Thay cả hai vào biểu thức $\alpha_m = \langle m | QFT^\dagger | \text{reg}_1 \rangle$:

$$
\alpha_m = \left( \frac{1}{\sqrt{N}} \sum_{j=0}^{N-1} e^{-2 \pi i \frac{m j}{N}} \langle j| \right) \left( \frac{1}{\sqrt{N}} \sum_{k=0}^{N-1} e^{2 \pi i \theta k} |k\rangle \right) \tag{4.4}
$$

Nhân các hằng số phân số lại với nhau ($\frac{1}{\sqrt{N}} \times \frac{1}{\sqrt{N}} = \frac{1}{N}$) và gom hai dấu tổng (Sigma) lại. Ta phải hết sức lưu ý: vì đây là hai chuỗi độc lập, nên ta phải giữ nguyên hai chỉ số $j$ và $k$:

$$
\alpha_m = \frac{1}{N} \sum_{j=0}^{N-1} \sum_{k=0}^{N-1} e^{-2 \pi i \frac{m j}{N}} e^{2 \pi i \theta k} \langle j | k \rangle \tag{4.5}
$$

**Bước 3: Thu gọn (Sự sụp đổ của tổng kép)**

Chìa khóa của toàn bộ phép toán nằm ở phần tử $\langle j | k \rangle$ ở cuối phương trình.

Trong cơ học lượng tử, các trạng thái cơ sở tính toán tạo thành một hệ trực chuẩn (orthonormal basis). Nghĩa là:

* Nếu $j \neq k$: Hai trạng thái vuông góc với nhau, tích vô hướng $\langle j | k \rangle = 0$.  
* Nếu $j = k$: Hai trạng thái trùng nhau, tích vô hướng $\langle j | j \rangle = 1$.

Tính chất này trong toán học gọi là hàm delta Kronecker ($\delta_{jk}$).

Bởi vì $\langle j | k \rangle$ chỉ bằng $1$ duy nhất trong trường hợp $j$ **bằng đúng $k$** (và bằng 0 ở mọi trường hợp khác), chuỗi tổng khổng lồ theo $j$ sẽ bị "sụp đổ" (collapse). Ta chỉ cần giữ lại các số hạng nơi $j = k$, và loại bỏ hoàn toàn dấu tổng thứ hai:

$$
\alpha_m = \frac{1}{N} \sum_{k=0}^{N-1} e^{-2 \pi i \frac{m k}{N}} e^{2 \pi i \theta k} \cdot 1
$$

**Bước 4: Gom số mũ (Kết quả cuối cùng)**

Đến đây, bài toán chỉ còn lại tính chất của hàm số mũ cơ bản $e^A \cdot e^B = e^{A+B}$. Ta gộp hai số mũ lại với nhau:

$$
\alpha_m = \frac{1}{N} \sum_{k=0}^{N-1} e^{2 \pi i \theta k - 2 \pi i \frac{m k}{N}} \tag{4.6}
$$

Rút nhân tử chung $2 \pi i k$ ra ngoài:

$$
\alpha_m = \frac{1}{N} \sum_{k=0}^{N-1} e^{2 \pi i \left( \theta - \frac{m}{N} \right) k} \tag{4.7}
$$

Phép chứng minh hoàn tất. Đây chính là phương trình thể hiện chuỗi các vector quay trên mặt phẳng phức mà chúng ta đã phân tích sự giao thoa ở các phần trước.

## 5. Tham khảo

**Tiếng Anh**

1. Kitaev, A. Y. (1995). *Quantum measurements and the Abelian Stabilizer Problem*. ([https://arxiv.org/abs/quant-ph/9511026](https://arxiv.org/abs/quant-ph/9511026))   
2. Cleve, R., Ekert, A., Macchiavello, C., & Mosca, M. (1998). *Quantum Algorithms Revisited*. ([https://arxiv.org/abs/quant-ph/9807070](https://arxiv.org/abs/quant-ph/9807070))