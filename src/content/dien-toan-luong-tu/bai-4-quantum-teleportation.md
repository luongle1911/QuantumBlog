---
title: "Bài 4: Quantum Teleportation"
description: "Khám phá giao thức viễn tải lượng tử, cách dịch chuyển trạng thái Qubit và các vấn đề bảo mật liên quan."
pubDate: "Mar 29 2026"
heroImage: "../../assets/bai-4-quantum-teleportation.png"
tags: ["Lượng tử", "Quantum Teleportation", "Bảo mật lượng tử", "QKD"]
---

# Bài 4: Quantum Teleportation

## Mục lục

Nội dung của bài này bao gồm:

- [1. Giao thức](#1-giao-thức)
  - [1.1. Bài toán](#11-bài-toán)
  - [1.2. Ý nghĩa](#12-ý-nghĩa)
- [2. Bổ sung kiến thức](#2-bổ-sung-kiến-thức)
- [3. Vấn đề bảo mật](#3-vấn-đề-bảo-mật)
- [4. Tham khảo](#4-tham-khảo)

---

## 1. Giao thức

**Dịch chuyển lượng tử** (Quantum Teleportation) không phải việc dịch chuyển vật chất như trong các bộ phim viễn tưởng như Star Trek mà dịch chuyển ở đây nghĩa là chúng ta sẽ chuyển thông tin trạng thái lượng tử của một Qubit sang một Qubit khác. Chúng ta cùng xem xét bài toán sau đây:

### 1.1. Bài toán

Alice và Bob cùng làm việc cho một công ty về điện toán lượng tử nhưng thuộc hai chi nhánh khác nhau. Ngày hôm nay Alice thực hiện một nghiên cứu nào đó và kết quả của nghiên cứu được mã hóa trong biên độ xác suất $\alpha, \beta$ của một Qubit, giả sử trạng thái đó có dạng:

$$
|\psi \rangle = \alpha |0 \rangle + \beta |1 \rangle = \begin{pmatrix} \alpha \\ \beta \end{pmatrix} \tag{1.1}
$$

Alice cần chuyển thông tin này cho Bob, tuy nhiên cô không muốn gửi trực tiếp Qubit của mình cho Bob vì cô sợ rằng trên đường vận chuyển sẽ có người “nhìn trộm” Qubit của mình. Trong lúc đang suy nghĩ cách giải quyết vấn đề này cô chợt nhớ ra rằng trong cuộc họp trực tiếp với Bob lần trước hai người đã tạo ra một cặp Qubit rối và chia mỗi người giữ một Qubit làm kỷ niệm, giả sử cặp Qubit rối ở trạng thái Bell $|\Phi^+ \rangle$:

$$
|\Phi^+ \rangle = \frac{1}{\sqrt{2}} (|00 \rangle + |11 \rangle) = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \end{pmatrix} \tag{1.2}
$$

Và Alice liền nghĩ ra một phương pháp vô cùng thông minh để gửi thông tin Qubit của mình đến Bob, cách làm của cô như sau.

* **Bước 1: Khởi tạo**

<br />

Gọi Qubit thứ nhất giữ thông tin $(1.1)$ là $C$, Qubit thứ 2 là Qubit rối mà Alice giữ là $A$ và Qubit thứ 3 rối còn lại do Bob giữ là $B$. Trạng thái ban đầu của hệ 3 Qubit này có thể được biểu diễn dưới dạng tích tensor:

$$
|\Psi_0 \rangle = |\psi \rangle \otimes |\Phi^+ \rangle = \begin{pmatrix} \alpha \\ \beta \end{pmatrix} \otimes \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} \alpha \\ 0 \\ 0 \\ \alpha \\ \beta \\ 0 \\ 0 \\ \beta \end{pmatrix} \tag{1.3}
$$ 

Hay có thể viết trực quan hơn là:

$$
\lvert \Psi_0 \rangle = \frac{1}{\sqrt{2}} \left[ \alpha \lvert 000 \rangle + \alpha \lvert 011 \rangle + \beta \lvert 100 \rangle + \beta \lvert 111 \rangle \right] \tag{1.4}
$$

* **Bước 2: Alice áp dụng CNOT**

<br />

Alice áp dụng cổng CNOT lên 2 Qubit mà cô đang giữ với $C$ là Control Qubit và $A$ là Target Qubit. 

Nếu nhìn từ góc nhìn của toàn hệ thì Qubit B của Bob không bị tác động gì nên ta coi toán tử áp dụng lên nó là ma trận đơn vị $I$. Toán tử tổng hợp của của hệ 3 Qubit khi đó sẽ có dạng:

$$
U_1 = CNOT_{1,2} \otimes I_3 = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix} \otimes \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \tag{1.5}
$$

Hay:

$$
U_1 = \begin{pmatrix} 1 \cdot I & 0 \cdot I & 0 \cdot I & 0 \cdot I \\ 0 \cdot I & 1 \cdot I & 0 \cdot I & 0 \cdot I \\ 0 \cdot I & 0 \cdot I & 0 \cdot I & 1 \cdot I \\ 0 \cdot I & 0 \cdot I & 1 \cdot I & 0 \cdot I \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \end{pmatrix} \tag{1.6}
$$

Việc Alice áp dụng CNOT lên 2 Qubit của cô tương đương với việc ta áp dụng toán tử $U_1$ lên hệ 3 Qubit và trạng thái $|\Psi_1 \rangle$ của hệ sau đó sẽ là:

$$
|\Psi_{1}\rangle = \begin{pmatrix} 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \end{pmatrix} \times \frac{1}{\sqrt{2}} \begin{pmatrix} \alpha \\ 0 \\ 0 \\ \alpha \\ \beta \\ 0 \\ 0 \\ \beta \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} \alpha \\ 0 \\ 0 \\ \alpha \\ 0 \\ \beta \\ \beta \\ 0 \end{pmatrix} \tag{1.7}
$$

Hoặc:

$$
\lvert \Psi_1 \rangle = \frac{1}{\sqrt{2}} \left[ \alpha \lvert 000 \rangle + \alpha \lvert 011 \rangle + \beta \lvert 110 \rangle + \beta \lvert 101 \rangle \right] \tag{1.8}
$$

* **Bước 3: Alice áp dụng Hadamard**

<br />

Alice tiếp tục áp dụng Hadamard lên Qubit $C$ của cô.

Nhìn từ toàn hệ thống nó tương đương với việc áp dụng $I$ lên 2 Qubit còn lại, vậy toán tử tổng hợp lần này sẽ là:

$$
U_2 = H \otimes I \otimes I \tag{1.9}
$$

Hay:

$$
U_2 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 & -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & -1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & -1 \end{pmatrix} \tag{1.10}
$$

Vậy trạng thái của hệ 3 Qubit sau khi Alice áp dụng Hadamard lên $C$ sẽ là:

$$
|\Psi_{2}\rangle = \frac{1}{2} \begin{pmatrix} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 & -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & -1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & -1 \end{pmatrix} \times \begin{pmatrix} \alpha \\ 0 \\ 0 \\ \alpha \\ 0 \\ \beta \\ \beta \\ 0 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} \alpha \\ \beta \\ \beta \\ \alpha \\ \alpha \\ -\beta \\ -\beta \\ \alpha \end{pmatrix} \tag{1.11}
$$

Hoặc ta viết:

$$
|\Psi_2\rangle = \frac{1}{2} [ \alpha|000\rangle + \alpha|100\rangle + \alpha|011\rangle + \alpha|111\rangle + \beta|010\rangle - \beta|110\rangle + \beta|001\rangle - \beta|101\rangle ] \tag{1.12}
$$

* **Bước 4: Alice đo lường và Bob sửa lỗi**

<br />

Đây là bước thú vị nhất, nếu ta nhóm các trạng thái cơ sở $|00 \rangle, |01 \rangle, |10 \rangle, |11 \rangle$ của cặp Qubit do Alice đang giữ thì $(1.12)$ sẽ có dạng:

$$
|\Psi_2\rangle = \frac{1}{2} \left[ |00\rangle(\alpha|0\rangle + \beta|1\rangle) + |01\rangle(\alpha|1\rangle + \beta|0\rangle) + |10\rangle(\alpha|0\rangle - \beta|1\rangle) + |11\rangle(\alpha|1\rangle - \beta|0\rangle) \right] \tag{1.13}
$$

Vậy tại sao chúng ta lại cần làm như vậy? Hãy cùng nhìn vào thành phần đầu tiên của $(1.13)$:

$$
|00 \rangle ( \alpha |0 \rangle + \beta |1 \rangle )
$$

Thành phần này có ý nghĩa là *“Nếu Alice thực hiện phép đo lên 2 Qubit của cô ấy và thấy rằng 2 Qubit đang trong trạng thái $|Q_{C,A} \rangle= |00 \rangle$ thì Qubit B của Bob sẽ đang trong trạng thái $| Q_B \rangle = (\alpha |0\rangle + \beta | 1 \rangle)$”*, Hay ta nói rằng việc Alice đo lường 2 Qubit của cô đã khiến trạng thái của $Q_C$ “nhảy” sang Qubit của Bob. Đây chính xác là điều Alice muốn.

Cô ấy sau đó chỉ cần gửi thư hoặc gọi điện thoại cho Bob và nói rằng *“Tôi đã thực hiện nghiên cứu xong và kết quả nghiên cứu đã được gửi đến bạn qua Qubit vướng víu của bạn”.* Bạn đọc có thể thắc mắc rằng nếu nhìn vào biên độ xác suất của từng thành phần trong $(1.13)$ ta sẽ thấy rằng xác suất xảy ra của các trường hợp 2 Qubit của Alice trong các trạng thái $|00 \rangle, |01 \rangle, |10 \rangle, |11 \rangle$ là như nhau (đều bằng $(1/2)^2 = 1/4$). Vậy nếu Alice đo được các giá trị $|01 \rangle, |10 \rangle, |11 \rangle$ thì sao? Hãy xem xét 3 trường hợp còn lại:

- Nếu Alice đo được $|01 \rangle$ thì có nghĩa Qubit của Bob đang ở trạng thái $|Q_B \rangle = \alpha |1 \rangle + \beta |0 \rangle$, nếu Bob áp dụng cổng Pauli-X lên $Q_B$ thì Qubit của anh ta sẽ trong trạng thái $(1.1)$.

Hay nói cách khác là *“Nếu Alice đo và thấy 2 Qubit của cô đang ở trạng thái $|01 \rangle$ vậy cô chỉ cần gọi điện cho Bob và nói rằng hãy áp dụng X lên Qubit của anh đi và anh sẽ nhận được lời nhắn của tôi”.*

Tương tự cho hai trường hợp còn lại:

- Alice đo được $|10 \rangle$ cô nhắn Bob áp dụng Pauli-Z lên Qubit của anh ta để nhận lời nhắn.  
- Alice đo được $|11 \rangle$ cô nhắn Bob áp dụng Pauli-X sau đó áp dụng tiếp Pauli-Z lên Qubit của anh ta.

<br />

Đây cũng chính là lý do mà ta gọi bước này là đo lường và sửa lỗi và nó có thể viết ngắn gọn trong bảng sau:

| **Alice đo được** | **Trạng thái Qubit của Bob** | **Bob sửa lỗi** | **Trạng thái cuối cùng của Bob** |
| :---: | :---: | :---: | :---: |
| **00** | $\alpha \vert 0 \rangle + \beta \vert 1 \rangle$ | Identity ($I$) | $\alpha \vert 0 \rangle + \beta \vert 1 \rangle$ |
| **01** | $\alpha \vert 1 \rangle + \beta \vert 0 \rangle$ | Pauli-$X$ (Bit Flip) | $\alpha \vert 0 \rangle + \beta \vert 1 \rangle$ |
| **10** | $\alpha \vert 0 \rangle - \beta \vert 1 \rangle$ | Pauli-$Z$ (Phase Flip) | $\alpha \vert 0 \rangle + \beta \vert 1 \rangle$ |
| **11** | $\alpha \vert 1 \rangle - \beta \vert 0 \rangle$ | $X$ và $Z$ | $\alpha \vert 0 \rangle + \beta \vert 1 \rangle$ |

Bob sau khi nhận thông tin từ Alice có thể đo lường hoặc tiếp tục sử dụng Qubit này cho công việc khác của anh ta.

### 1.2. Ý nghĩa

Tại sao **Giao thức** (Protocol) phía trên lại quan trọng? Hãy xem xét nó dưới góc nhìn bảo mật, ban đầu Alice thực hiện CNOT và Hadamard đều trên hệ 2 Qubit của cô và Bob chỉ thực hiện sửa lỗi trên Qubit của anh ta.

Vậy nếu có một người nào đó nghe lén cuộc gọi của Alice và Bob thì anh ta sẽ chỉ có thông tin về kết quả phép đo của Alice và cổng sửa lỗi mà Bob sẽ áp dụng. Thông tin của $\alpha, \beta$ không hề được truyền qua kênh này mà nó được nhảy từ Alice qua Bob thông qua phép đo của Alice trên 2 Qubit của cô.

Đây cũng chính là lý do mà ta gọi Giao thức trên là Dịch chuyển lượng tử.

Các công nghệ lượng tử ngày nay như **Phân phối khóa lượng tử** (Quantum Key Distribution - QKD) áp dụng cho **Mạng lượng tử** (Quantum Internet) cũng được dựa trên ý tưởng của Dịch chuyển lượng tử để bảo mật thông tin.

Tuy nhiên, giao thức nào cũng tồn tại lỗ hổng bảo mật và dịch chuyển lượng tử cũng không phải ngoại lệ. Nhưng trước khi đi vào các phương thức xâm nhập và kiểm tra chúng ta sẽ cần tìm hiểu thêm một vài kiến thức cơ sở sau.

## 2. Bổ sung kiến thức

### 2.1. Phép đo trong cơ sở


Chúng ta hẳn đã quen với việc phép đo trên một Qubit sẽ trả về kết quả 0 hoặc 1 tương ứng với các trạng thái cơ sở $|0\rangle, |1\rangle$ (hay còn gọi là **Hệ Z** vì nó đo trên trục Z của cầu Bloch), nhưng thật ra đối với một Qubit tồn tại vô số cơ sở trực giao khác, ví dụ nổi tiếng nhất là Cơ sở Hadamard (**Hệ X**) và Cơ sở Pha (**Hệ Y**), đây là hai cơ sở được sử dụng nhiều nhất sau Hệ Z.

* **Cơ sở Hadamard (Hệ X)**

<br />

Giống như tên gọi của mình cơ sở Hadamard thực hiện phép đo vector trạng thái dọc theo trục X của cầu Bloch. Hệ cơ sở này đại diện cho sự chồng chập (superposition) giữa $|0\rangle$ và $|1\rangle$. Hai vector cơ sở của hệ chính là $\{|+\rangle, |-\rangle\}$. Trong đó:

$$
|+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}}, \quad |-\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}} \tag{2.1}
$$

Nhưng chẳng phải phép đo luôn trả về 0 hoặc 1 thôi hay sao, vậy làm thế nào để ta có thể đo được vector trạng thái bất kỳ trong cơ sở này? 

<div align="center">

![][image1]

*(Hình 2.1. Trạng thái $|+ \rangle$)*

</div>

Hãy tưởng tượng trục Z (hay cơ sở tính toán của chúng ta) là một *“cây thước”* được dán chặt trong không gian, chúng ta không thể xoay hay lật thước mà chỉ có thể nhìn thẳng vào nó. 

Trong khi đó vector trạng thái thì linh hoạt hơn nó có thể xoay về bất kỳ hướng nào trong không gian (nếu áp dụng các toán tử phù hợp).

Vậy nếu không thể xoay cây thước thì chúng ta xoay vector trạng thái trước khi đo. Ví dụ ta có vector trạng thái ban đầu của Qubit là $|+\rangle$. Nếu ta thực hiện phép đo ngay lập tức nghĩa là chúng ta đang thực hiện đo trên cơ sở tính toán (Hệ Z) và kết quả sẽ là 50% là 0 và 50% là 1.

Bây giờ trước khi đo, ta áp dụng Hadamard một lần nữa lên $|+\rangle$ (xoay vector hướng lên) sau đó mới thực hiện đo, lần này kết quả sẽ 100% là 0. Vậy vector trạng thái trước khi đo trùng với một trong hai vector cơ sở của hệ X.

Hay nói *“ta có thể chuyển từ cơ sở Z sang cơ sở X bằng cách sử dụng cổng Hadamard ($H$).”*

* **Cơ sở Pha (Hệ Y)**

<br />

Tương tự như với cơ sở X, cơ sở Y thực hiện đo trên trục Y. Hệ cơ sở này liên quan đến các số phức, biểu diễn sự quay quanh trục Y trên quả cầu Bloch.

**Ký hiệu cơ sở:** $\{|i\rangle, |-i\rangle\}$ (đôi khi ký hiệu là $|R\rangle, |L\rangle$ cho quay phải/trái). 

<br />

Trong đó:

$$
|i\rangle = \frac{|0\rangle + i|1\rangle}{\sqrt{2}}, \quad |-i\rangle = \frac{|0\rangle - i|1\rangle}{\sqrt{2}} \tag{2.2}
$$

Và để thực hiện phép chuyển cơ sở từ Z sang X ta cần thực hiện hai phép toán liên tiếp đó là áp dụng **Cổng Hadamard ($H$)** và **Cổng Pha ($S$).**

Dùng cổng $H$ để đưa $|0\rangle$ thành $|+\rangle$ (đưa vector ra xích đạo, nằm trên trục $X$).  

<br />

Dùng cổng $S$ để quay vector đó một góc $90^\circ$ quanh trục $Z$ để nó nằm trùng với trục $Y$.

<br />

*Lưu ý: Nếu ta muốn thực hiện phép đo trên cơ sở $Y$, ta phải làm ngược lại: Áp dụng $S^\dagger$ (cổng $S$ nghịch đảo) rồi đến $H$ (chuyển từ Y sang Z), sau đó mới tiến hành đo.*

### 2.2. Ma trận mật độ

Trong các hệ thống lượng tử, ta đều muốn có được thông tin nhiều nhất về hệ mà ta đang làm việc. Tuy nhiên trong thực tế thông tin mà chúng ta biết về hệ thường không đầy đủ (có thể do bản chất của hệ hoặc can thiệp từ bên ngoài).

Ví dụ khi ta nhìn vào một máy phát electron thì ta chỉ biết rằng electron phát ra từ máy sẽ chỉ có một trong hai kết quả về động lượng góc nội tại (Spin) là $|\uparrow \rangle$ (lên) hoặc $|\downarrow \rangle$ (xuống).

Vấn đề ở đây là đây là kết quả ngẫu nhiên của Spin lên và xuống không phải do trạng thái của electron trước khi đo đang chồng chập mà là do ta thiếu thông tin về trạng thái của các hạt. Các hạt đã ở trạng thái lên hoặc xuống trước khi chúng ta “nhìn” vào chúng, chỉ là ta không biết hạt nào ở trạng thái nào (không có giao thoa).

Đây cũng là lý do mà trong cơ học lượng tử chúng ta phân biệt rõ ràng hai hệ thống là **Trạng thái thuần khiết** (Pure State) khi ta biết tất cả thông tin về hệ và **Trạng thái hỗn hợp** (Mixed State). 

Vector trạng thái (hay tích tensor) có thể giúp chúng ta định nghĩa đầy đủ về trạng thái thuần khiết nhưng không thể giúp ta định nghĩa các hệ hỗn hợp. Bạn không thể định nghĩa trạng thái của eletron trong thí nghiệm trên bằng một vector trạng thái khả dĩ (chúng là xác suất cổ điển). Vậy ta cần một công cụ mạnh hơn và đó cũng chính là lý do mà Ma trận mật độ (Density Matrix) ra đời.

#### 2.2.1. Trạng thái thuần khiết (Pure State)

Chúng ta đã quen với việc biểu diễn trạng thái của một hệ lượng tử thông qua vector và tích tensor. Song song với đó ta có một công cụ tương đương để mô tả trạng thái của hệ đó chính là Ma trận mật độ. Và đối với Trạng thái thuần khiết hay trạng thái mà ta biết tối đa thông tin về một hệ thì ma trận mật độ được định nghĩa sau:

<div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin: 20px 0;">
  <b>Định nghĩa:</b> Nếu một hệ lượng tử được mô tả bằng một vectơ trạng thái (vectơ Ket) $|\psi\rangle$ trong không gian Hilbert thì ma trận mật độ được tính bằng tích ngoài của vectơ trạng thái với chính nó, hay:
</div>

$$
\rho = |\psi\rangle\langle\psi| \tag{2.3}
$$

Trong đó: $\langle \psi |$ là vector hàng (Bra) tương tứng của $|\psi \rangle$ (xem thêm tại [quantum-lecture-forum](https://quantum-lecture-forum.lovable.app/lesson/9))

**Ví dụ:** Ta xét 2 Qubit đang trong trạng thái $|\Phi^+\rangle$.

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \end{pmatrix}
$$

Đây là một trạng thái thuần khiết vì ta vẫn có thể biểu diễn nó thông qua một vector trạng thái, và theo định nghĩa thì ma trận mật độ của nó sẽ được tính bằng tích ngoài: $\rho = |\Phi^+\rangle \langle\Phi^+|$.

Vectơ hàng (Bra) tương ứng là:

$$
\langle\Phi^+| = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 0 & 0 & 1 \end{pmatrix}
$$

Thực hiện phép nhân ma trận:

$$
\rho = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \end{pmatrix} \times \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 0 & 0 & 1 \end{pmatrix}
$$

Kết quả thu được là một ma trận $4 \times 4$:

$$
\rho = \frac{1}{2} \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}
$$

Hoặc có thể viết:

$$
\rho = \frac{1}{2}(|00\rangle\langle 00| + |00\rangle\langle 11| + |11\rangle\langle 00| + |11\rangle\langle 11|)
$$

Đây chính là ma trận mật độ của hai Qubit trên, vậy ý nghĩa của từng thành phần trên ma trận này là gì? 

- **Các phần tử trên đường chéo chính ($\rho_{11}, \rho_{44} = 1/2$):** Cho biết xác suất khi đo hệ thống sẽ thu được trạng thái $|00\rangle$ là $50\%$ và $|11\rangle$ là $50\%$.  
- **Các phần tử ngoài đường chéo ($\rho_{14}, \rho_{41} = 1/2$):** Đây gọi là các số hạng **giao thoa (coherences)**. Chúng biểu thị mức độ tương quan về pha (phase).

<br />

Vậy tại sao chúng ta lại gọi các phần tử ngoài đường chéo chính là các phần tử thể hiện độ tương quan về pha? 

Giả sử chúng ta có một hệ lượng tử ở trạng thái chồng chất của hai trạng thái cơ sở $|1\rangle$ và $|2\rangle$:

$$
|\psi\rangle = c_1|1\rangle + c_2|2\rangle
$$

Trong đó các hệ số phức $c_n$ có thể được viết dưới dạng biên độ và pha: $c_n = a_n e^{i\phi_n}$.

Ma trận mật độ $\rho$ được định nghĩa là $\rho = |\psi\rangle\langle\psi|$. Khi viết dưới dạng ma trận trong cơ sở $\{|1\rangle, |2\rangle\}$, ta có:

$$
\rho = \begin{pmatrix} |c_1|^2 & c_1c_2^* \\ c_2c_1^* & |c_2|^2 \end{pmatrix} = \begin{pmatrix} a_1^2 & a_1a_2e^{i(\phi_1 - \phi_2)} \\ a_1a_2e^{-i(\phi_1 - \phi_2)} & a_2^2 \end{pmatrix}
$$

Hãy chú ý vào số hạng $e^{i(\phi_1 - \phi_2)}$. Đây chính là **hiệu pha (relative phase)** giữa hai trạng thái. Đây cũng là lý do ta gọi chúng là các phần tử thể hiện tương quan về pha.

#### 2.2.2. Trạng thái hỗn hợp (Mixed State)

Trong các bài toán thực tế chúng ta thường không có đầy đủ thông tin về hệ (ví dụ Bob không thể biết Alice đã làm gì với Qubit của cô ấy) hoặc ta luôn phải tính đến việc hệ lượng tử có đang bị nhiễu bởi môi trường xung quanh hay không. Và ma trận mật độ là một cách rất hữu ích để mô tả các trạng thái này.

Giả sử Alice và Bob đang chia sẻ cặp Qubit rối ($|\Phi^+ \rangle$ chẳng hạn), ở góc nhìn của Bob anh ta không thể tìm được vector trạng thái nào để mô tả trạng thái Qubit của mình vì nó đang rối với Qubit của Alice, tuy nhiên anh ta vẫn có thể thực hiện các biến đổi (áp dụng cổng lượng tử) hoặc thực hiện phép đo trên Qubit của anh ta.

Nếu Bob vẫn muốn mô tả trạng thái của Qubit của riêng anh ta thì anh ta chỉ có thể nói rằng Qubit của tôi có 50% khả năng ở trạng thái $|0 \rangle$ và $|1 \rangle$ (phụ thuộc việc trạng thái Qubit của Alice là gì).

<div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin: 20px 0;">
  <b>Định nghĩa:</b> Nếu một hệ có xác suất $p_i$ nằm trong trạng thái thuần khiết $|\psi_i\rangle$, thì ma trận mật độ của hệ được là:
</div>

$$
\rho = \sum_{i} p_i |\psi_i\rangle \langle \psi_i| \tag{2.4}
$$

Trong đó:

- $0 \le p_i \le 1$ là xác suất cổ điển.  
- $\sum p_i = 1$.  
- $|\psi_i\rangle$ là các vectơ trạng thái (trong ví dụ trên chính là các vector cơ sở $|0 \rangle, |1 \rangle$).

Như ở ví dụ phía trên thì ma trận mật độ đối với Qubit của Bob là:

$$
\rho_B = \frac{1}{2} (|0\rangle\langle 0| + |1\rangle\langle 1|) = \frac{1}{2} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$

Đây là trạng thái hỗn hợp tối đa (maximally mixed state).

#### 2.2.3. Truy vết từng phần (Partial Trace)

Trong lý thuyết xác suất của thế giới cổ điển, phép **Partial Trace (hay phép Trace Out)** chính là việc tìm **phân phối xác suất biên (Marginal Probability Distribution)**.

Giả sử ta có một phân phối xác suất đồng thời của hai biến ngẫu nhiên $X$ (chiều cao) và $Y$ (cân nặng), được ký hiệu là $P(X, Y)$. Ma trận này chứa toàn bộ thông tin về cả hai biến và mối tương quan giữa chúng.

Nếu bạn chỉ muốn tìm phân phối xác suất của $X$ (tức là $P(X)$) và muốn "bỏ qua" sự tồn tại của $Y$, bạn không thể chỉ đơn giản là cắt bỏ một cột hay một hàng của $Y$. Bạn phải cộng tất cả các xác suất của $Y$ tương ứng với mỗi giá trị của $X$:

$$
P(X) = \sum_{y} P(X, y) \tag{2.5}
$$

Phép "trace out" chính là **phiên bản đại số tuyến tính** của phép tính tổng này. Khi bạn trace out hệ $B$ từ một hệ tổng hợp $AB$, bạn đang "tính tổng" qua tất cả các trạng thái có thể có của $B$ để lấy ra thông tin thống kê còn sót lại của riêng $A$. Đó là lý do tại sao ma trận kết quả thường biểu diễn sự mất mát thông tin (trở thành trạng thái hỗn hợp, giống như việc ta mất đi thông tin về sự tương quan giữa chiều cao và cân nặng khi chỉ còn nhìn vào chiều cao).

Trong thế giới của vật lý lượng tử, các hệ lượng tử không bao giờ bị cô lập hoàn toàn mà luôn tương tác với môi trường xung quanh (nhiễu nhiệt, nhiễu điện từ hoặc chính nó là một hệ thống con của một hệ lượng tử lớn hơn). Sự tương tác này tạo ra **sự vướng víu lượng tử giữa hệ thống và môi trường**, dẫn đến việc thông tin bị rò rỉ ra ngoài.

<div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin: 20px 0;">
  <b>Định nghĩa toán học:</b><br/>
  Giả sử $\mathcal{H}_A$ và $\mathcal{H}_B$ là các không gian Hilbert hữu hạn chiều mô tả hai hệ lượng tử con độc lập $A$ và $B$. Hệ tổng hợp được mô tả bởi không gian tích tensor của hai hệ này:
  <br/><br/>
  <div style="text-align: center;">$\mathcal{H}_{AB} = \mathcal{H}_A \otimes \mathcal{H}_B \tag{2.6}$</div>
  <br/>
  Cho $\rho_{AB}$ là một toán tử tuyến tính (chẳng hạn như ma trận mật độ) tác dụng lên không gian $\mathcal{H}_{AB}$. Phép truy vết từng phần qua hệ $B$, ký hiệu là $\text{Tr}_B$, là một ánh xạ tuyến tính lấy các toán tử trên $\mathcal{H}_{AB}$ và trả về các toán tử trên $\mathcal{H}_A$.
</div>

Nó được định nghĩa chính thức thông qua tác dụng lên một tích tensor của các toán tử $O_A \otimes O_B$ (trong đó $O_A$ tác dụng lên $\mathcal{H}_A$ và $O_B$ tác dụng lên $\mathcal{H}_B$):

$$
\text{Tr}_B(O_A \otimes O_B) = O_A \text{Tr}(O_B) \tag{2.7}
$$

Bởi vì bất kỳ toán tử nào trên không gian $\mathcal{H}_{AB}$ cũng có thể được biểu diễn dưới dạng tổ hợp tuyến tính của các toán tử tích này, định nghĩa này được mở rộng tuyến tính cho toàn bộ các toán tử trên không gian tổng hợp.

Để tính toán cụ thể ma trận mật độ rút gọn $\rho_A$ từ $\rho_{AB}$, ta chọn một cơ sở trực chuẩn $|b_j\rangle$ cho không gian Hilbert $\mathcal{H}_B$. Phép truy vết từng phần sau đó được đánh giá bằng cách lấy tổng kẹp giữa cơ sở này:

$$
\rho_A = \text{Tr}_B(\rho_{AB}) = \sum_j (I_A \otimes \langle b_j|) \rho_{AB} (I_A \otimes |b_j\rangle) \tag{2.8}
$$

Trong phương trình trên, $I_A$ là ma trận đơn vị (identity matrix) tác dụng lên không gian Hilbert $\mathcal{H}_A$.

Ta hãy cùng tìm hiểu phép truy vết với ví dụ sau để hiểu rõ hơn cách hoạt động của nó.

**Ví dụ:** Ta sẽ thực hiện thực phép vết riêng phần (trace out) trên **Trạng thái GHZ** (Greenberger–Horne–Zeilinger).

Trạng thái GHZ là một trong những trạng thái vướng víu tối đa nổi tiếng nhất của hệ 3 phân tử, được biểu diễn như sau:

$$
|\text{GHZ}\rangle = \frac{1}{\sqrt{2}} (|000\rangle + |111\rangle)
$$

Giả sử chúng ta có 3 Qubit ký hiệu là $A$, $B$, và $C$. Ma trận mật độ của toàn bộ hệ thống này (một trạng thái thuần nhất) là $\rho_{ABC} = |\text{GHZ}\rangle\langle\text{GHZ}|$:

$$
\rho_{ABC} = \frac{1}{2} \left( |0_A 0_B 0_C\rangle\langle0_A 0_B 0_C| + |0_A 0_B 0_C\rangle\langle1_A 1_B 1_C| + |1_A 1_B 1_C\rangle\langle0_A 0_B 0_C| + |1_A 1_B 1_C\rangle\langle1_A 1_B 1_C| \right)
$$

Hệ thống ban đầu của chúng ta là 3 Qubit $A, B, C$ ở trạng thái GHZ. Hệ cơ sở đầy đủ gồm 8 trạng thái. Ma trận $\rho_{ABC}$ được biểu diễn với các nhãn ket (cột) và bra (hàng) như sau:

$$
\begin{array}{c|cccccccc} 
\rho_{ABC} & |000\rangle & |001\rangle & |010\rangle & |011\rangle & |100\rangle & |101\rangle & |110\rangle & |111\rangle \\
\hline 
\langle000| & \mathbf{0.5} & 0 & 0 & 0 & 0 & 0 & 0 & 0.5 \\
\langle001| & 0 & \mathbf{0} & 0 & 0 & 0 & 0 & 0 & 0 \\
\langle010| & 0 & 0 & \mathbf{0} & 0 & 0 & 0 & 0 & 0 \\
\langle011| & 0 & 0 & 0 & \mathbf{0} & 0 & 0 & 0 & 0 \\
\langle100| & 0 & 0 & 0 & 0 & \mathbf{0} & 0 & 0 & 0 \\
\langle101| & 0 & 0 & 0 & 0 & 0 & \mathbf{0} & 0 & 0 \\
\langle110| & 0 & 0 & 0 & 0 & 0 & 0 & \mathbf{0} & 0 \\
\langle111| & 0.5 & 0 & 0 & 0 & 0 & 0 & 0 & \mathbf{0.5} 
\end{array}
$$

*Nhìn vào ma trận này, ta thấy rõ: Giá trị $0.5$ ở góc trên bên trái là xác suất hệ ở $|000\rangle$, $0.5$ ở góc dưới bên phải là xác suất ở $|111\rangle$. Hai giá trị $0.5$ nằm ở góc trên-phải và dưới-trái biểu diễn sự tương quan (vướng víu) giữa $|000\rangle$ và $|111\rangle$.*

Bài toán của chúng ta là trace out (lấy vết riêng phần) sao cho chỉ còn lại **đúng 1 Qubit** (ví dụ giữ lại Qubit $A$, và loại bỏ cả Qubit $B$ và $C$).

#### 1. Quy tắc chia khối để Trace Out 2 Qubit ($B$ và $C$)

Vì chúng ta muốn bỏ đi cả Qubit $B$ và $C$, không gian bị loại bỏ có $2^2 = 4$ chiều (gồm các trạng thái $|00\rangle, |01\rangle, |10\rangle, |11\rangle$ của hệ $BC$).

Không gian giữ lại là Qubit $A$ có $2^1 = 2$ chiều (gồm $|0\rangle$ và $|1\rangle$).

**Bí quyết hình học:** Chúng ta sẽ chia ma trận $8 \times 8$ này thành một lưới $2 \times 2$, trong đó **mỗi khối con là một ma trận $4 \times 4$**.

- Khối trên cùng bên trái đại diện cho trạng thái $|0_A\rangle\langle0_A|$.  
- Khối dưới cùng bên phải đại diện cho trạng thái $|1_A\rangle\langle1_A|$.  
- Hai khối còn lại đại diện cho sự giao thoa $|0_A\rangle\langle1_A|$ và $|1_A\rangle\langle0_A|$.

<br />

Để tìm ma trận của riêng Qubit $A$, ta chỉ cần **tính vết (tổng đường chéo chính) của từng khối $4 \times 4$ này**.

#### 2. Thực hiện tính toán trên các khối $4 \times 4$

**Khối góc trên-trái (Đại diện cho $|0_A\rangle\langle0_A|$):**

Đây là giao của 4 hàng đầu và 4 cột đầu. Đây là khối mà Qubit đầu tiên có trạng thái là $|0 \rangle$. Khi ta truy vết trên khối này thì ý nghĩa của nó là *“Tôi muốn biết xác suất đo được Qubit A đang ở trạng thái $|0 \rangle$ là bao nhiêu mặc kệ 2 Qubit B, C đang ở trạng thái gì”*

$$
\text{Khối}_{0,0} = \begin{pmatrix} \mathbf{0.5} & 0 & 0 & 0 \\ 0 & \mathbf{0} & 0 & 0 \\ 0 & 0 & \mathbf{0} & 0 \\ 0 & 0 & 0 & \mathbf{0} \end{pmatrix}
$$

Các phần tử trên đường chéo chính của khối này chính là xác suất đo được Qubit A đang trong trạng thái $|0 \rangle$ khi trạng thái của 2 Qubit B,C thay đổi, vì vậy vết của A trên khối này là:

Tính vết (tổng đường chéo): $0.5 + 0 + 0 + 0 = \mathbf{0.5}$

**Khối góc dưới-phải (Đại diện cho $|1_A\rangle\langle1_A|$):**

Đây là giao của 4 hàng cuối và 4 cột cuối.

$$
\text{Khối}_{1,1} = \begin{pmatrix} \mathbf{0} & 0 & 0 & 0 \\ 0 & \mathbf{0} & 0 & 0 \\ 0 & 0 & \mathbf{0} & 0 \\ 0 & 0 & 0 & \mathbf{0.5} \end{pmatrix}
$$

Tính vết: $0 + 0 + 0 + 0.5 = \mathbf{0.5}$

**Khối góc trên-phải (Đại diện cho $|0_A\rangle\langle1_A|$):**

Giao của 4 hàng đầu và 4 cột cuối. Lưu ý, giá trị $0.5$ của ma trận gốc nằm ở góc phải cùng, tức là toạ độ (hàng 1, cột 4) của khối này.

$$
\text{Khối}_{0,1} = \begin{pmatrix} \mathbf{0} & 0 & 0 & 0.5 \\ 0 & \mathbf{0} & 0 & 0 \\ 0 & 0 & \mathbf{0} & 0 \\ 0 & 0 & 0 & \mathbf{0} \end{pmatrix}
$$

Tính vết (chỉ xét đường chéo chính của khối): $0 + 0 + 0 + 0 = \mathbf{0}$. 

*(Đây là chi tiết đắt giá nhất! Sự kết hợp lượng tử $0.5$ rơi vào vị trí phi chéo của khối con, do đó nó hoàn toàn bị xóa sổ khi thực hiện phép cộng trên đường chéo chính)*

Sự giao thoa biến mất!

**Khối góc dưới-trái (Đại diện cho $|1_A\rangle\langle0_A|$):**

Tương tự, giá trị $0.5$ nằm chệch khỏi đường chéo chính. Tính vết bằng $\mathbf{0}$.

#### 3. Kết quả cuối cùng: Ma trận mật độ Qubit A

Lắp ráp 4 con số vết vừa tính được vào một ma trận $2 \times 2$, ta có trạng thái hiện tại của riêng Qubit $A$:

$$
\begin{array}{c|cc} 
\rho_{A} & |0\rangle & |1\rangle \\
\hline 
\langle0| & 0.5 & 0 \\
\langle1| & 0 & 0.5 
\end{array}
$$

Hoặc viết gọn lại:

$$
\rho_A = \begin{pmatrix} 0.5 & 0 \\ 0 & 0.5 \end{pmatrix} = \frac{1}{2}I
$$

Mặc dù xuất phát từ một hệ 3 Qubit liên kết chặt chẽ hoàn hảo, nhưng khi ta mất đi thông tin của 2 Qubit kia, Qubit $A$ còn lại trong tay bạn đã bị giáng cấp thành một trạng thái "mù mờ" nhất có thể trong: Trạng thái hỗn hợp tối đa (maximally mixed state). Nó hoàn toàn không mang một chút thông tin lượng tử hữu ích nào, y hệt như việc ta tung một đồng xu cổ điển sấp ngửa 50/50.
## 3. Vấn đề bảo mật

Cùng nhắc lại kiến thức phần 1, giao thức Viễn tải Lượng tử (Quantum Teleportation) phụ thuộc vào hai kênh liên lạc riêng biệt để truyền một trạng thái lượng tử chưa biết:

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

từ Alice đến Bob: một **kênh lượng tử** (để phân phối cặp hạt vướng víu EPR) và một **kênh cổ điển** (để truyền 2 bit kết quả đo đạc).

Do đặc thù này, các bề mặt tấn công nhắm vào giao thức thường được chia thành ba nhóm chính, dựa trên cơ sở vật lý và toán học của hệ thống. Dưới đây là các phương thức tấn công tiêu biểu:

### 3.1. Tấn công vào kênh lượng tử (Phân phối vướng víu)

Như ta đã biết, giao thức viễn tải lượng tử về bản chất không có sự truyền thông tin qua kênh cổ điển, tuy nhiên nó chỉ thực sự an toàn khi hai Qubit ban đầu được đảm bảo an toàn. Tuy nhiên trong thực tế ta luôn cần vận chuyển Qubit đến Alice và Bob trước khi thực hiện giao thức viễn tải. Nếu hai Qubit ban đầu bị tác động trong giai đoạn này nó có thể dẫn đến nhiều hậu quả nghiêm trọng. Trước tiên hãy xem xét kiểu tấn công xen giữa.

#### 3.1.1. Tấn công xen giữa (Man-in-the-Middle - MITM)

Trong thực tế, Alice và Bob hiếm khi trực tiếp gặp nhau để tạo cặp Qubit rối của mình mà sẽ nhờ một bên thứ 3 thực hiện chuyển 2 Qubit rối này. Vậy ta hãy giả sử kênh này không an toàn và bị can thiệp, ví dụ Eve là một hacker trà trộn vào làm nhân viên vận chuyển Qubit rối giữa Alice và Bob.

Thay vì gửi cho Alice và Bob cặp Qubit rối, cô ta tự tạo 2 cặp Qubit rối khác nhau. Với cặp Qubit rối đầu tiên Eve gửi một hạt cho Alice và ở cặp thứ hai cô ta cũng gửi một hạt cho Bob. Khi đó, Alice thực chất đang chia sẻ trạng thái vướng víu với Eve, và Eve chia sẻ một trạng thái vướng víu khác với Bob. Khi Alice thực hiện phép đo Bell và gửi kết quả qua kênh cổ điển, Eve có thể chặn kết quả này, khôi phục trạng thái $|\psi\rangle$ của Alice trên thiết bị của mình, sau đó sao chép (nếu có thể giả lập) hoặc gửi một trạng thái giả mạo khác đến Bob bằng cách lặp lại quy trình viễn tải một lần nữa.  

Cách tấn công này tuy đơn giản nhưng nó yêu cầu khả năng kiểm soát rất cao trong hệ thống nếu kẻ tấn công muốn tránh bị phát hiện. Cụ thể:

Để một cuộc tấn công xen giữa (MITM) thực sự thành công trong việc **đánh cắp thông tin** (chứ không chỉ là phá hoại), Eve bắt buộc phải kiểm soát hoặc ít nhất là nghe lén thành công **cả hai kênh**.

Trước tiên ta sẽ giả định các cặp Qubit rối luôn ở trạng thái:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
$$

**A. Trạng thái của Eve khi thiếu Kênh Cổ điển**

Khi Alice thực hiện phép đo Bell trên qubit mang trạng thái $|\psi\rangle$ và qubit vướng víu (mà thực chất đang vướng víu với Eve, chứ không phải Bob), trạng thái lượng tử của qubit nằm trong tay Eve sẽ sụp đổ về một trong 4 trạng thái có thể, phụ thuộc vào kết quả đo của Alice.

Nếu Eve không nghe lén được 2 bit trên kênh cổ điển, cô ta không biết phép đo của Alice đã cho ra kết quả nào. Do đó, dưới góc nhìn của Eve, trạng thái qubit của cô ta là một ma trận mật độ (có thể được tính ra từ phép trace out đã học phía trên) biểu diễn một trạng thái hỗn hợp hoàn toàn (completely mixed state):

$$
\rho_E = \frac{1}{4} \left( I|\psi\rangle\langle\psi|I + \sigma_x|\psi\rangle\langle\psi|\sigma_x + \sigma_y|\psi\rangle\langle\psi|\sigma_y + \sigma_z|\psi\rangle\langle\psi|\sigma_z \right) = \frac{I}{2}
$$

Trong đó, $I$ là ma trận đơn vị. Trạng thái $\frac{I}{2}$ mang ý nghĩa vật lý là nhiễu trắng hoàn toàn. Nó không chứa **bất kỳ** thông tin nào về các tham số $\alpha$ và $\beta$ của trạng thái gốc $|\psi\rangle$. Nói cách khác, sự ngẫu nhiên từ phép đo của Alice đã "mã hóa lượng tử" trạng thái đó, và 2 bit cổ điển chính là "chìa khóa" giải mã.

**B. Kịch bản khi Eve chỉ can thiệp Kênh Lượng tử**

Nếu Eve chỉ đánh tráo các cặp qubit rối (can thiệp kênh lượng tử) mà không can thiệp được kênh cổ điển:

- **Với Eve:** Cô ta cầm ổ khóa nhưng không có chìa. Trạng thái lượng tử cô ta giữ chỉ là $\frac{I}{2}$. Eve không thu được thông tin gì.  
- **Với Bob:** Khi nhận được cuộc gọi từ Alice, Bob áp dụng các cổng Pauli lên qubit mà anh ta đang giữ (qubit này đang vướng rối với Eve, không liên quan gì đến trạng thái của Alice). Kết quả Bob nhận được sẽ chỉ là nhiễu rác. 

<br />

- **Hậu quả:** Giao thức bị phá vỡ, thông tin bị tiêu hủy. Đây thuần túy là một dạng **Tấn công Từ chối Dịch vụ (DoS)** hoặc phá hoại (Sabotage), chứ không phải là nghe lén hay đánh cắp thông tin.

<br />

**C. Yêu cầu bắt buộc để đánh cắp và giả mạo**

Để Eve có thể khôi phục lại $|\psi\rangle$, cô ta phải nghe được thông báo của Alice để biết chính xác cần áp dụng cổng Pauli nào lên qubit của mình. Sau khi đã tái tạo được $|\psi\rangle$, nếu muốn Bob không phát hiện ra sự bất thường, Eve sẽ phải tiếp tục đóng vai Alice: tạo một cặp qubit rối mới với Bob, thực hiện phép đo Bell trên $|\psi\rangle$ và gửi 2 bit cổ điển giả mạo cho Bob.

> **Giải pháp:** Chính vì lý do này, trong các ứng dụng thực tế và mạng lượng tử, người ta thiết kế giao thức sao cho **Kênh cổ điển luôn được xác thực (Authenticated Classical Channel)** bằng các thuật toán mã hóa quy ước (ví dụ: chia sẻ trước một khóa bí mật để tạo mã băm MAC). Khi kênh cổ điển được xác thực, Eve có thể nghe lén, nhưng không thể thay đổi tin nhắn của Alice gửi cho Bob, khiến việc giả mạo trạng thái gửi cho Bob trở nên bất khả thi.

#### 3.1.2. Tấn công tiêm nhiễu và vướng víu dò xét (Probe Entanglement)

Trong kiểu tấn công này Eve không cướp hoàn toàn qubit mà cho một qubit "dò xét" (probe qubit) của cô ta tương tác cục bộ với qubit đang được bay trên đường truyền đến Bob. Quá trình này tạo ra một trạng thái vướng víu hệ ba (tripartite entanglement). Quá trình tấn công có thể được mô tả như sau:

Để phân tích chi tiết, chúng ta sẽ mô hình hóa giao thức viễn tải lượng tử (Quantum Teleportation) với 4 hệ qubit:

- Qubit **C**: Qubit mang trạng thái Alice muốn gửi.  
- Qubit **A**: Một nửa cặp Bell do Alice giữ.  
- Qubit **B**: Một nửa cặp Bell đang bay đến Bob.  
- Qubit **E**: Qubit dò xét của Eve.

Trạng thái cần viễn tải của Alice là:

$$
|\psi\rangle_C = \alpha|0\rangle_C + \beta|1\rangle_C
$$

Cặp Bell ban đầu giữa Alice và Bob là:

$$
|\Phi^+\rangle_{AB} = \frac{1}{\sqrt{2}}(|00\rangle_{AB} + |11\rangle_{AB})
$$

Eve có một Qubit thăm dò (probe) E, được cô ta chuẩn bị sẵn ở trạng thái cơ bản:

$$
|\text{init}\rangle_E = |0\rangle_E
$$

Khi Qubit B bay ngang qua trạm của Eve, cô ta cho nó tương tác với Qubit E thông qua một thiết bị quang học hoặc cổng logic lượng tử, đại diện bằng toán tử Unitary $U$. Eve thiết kế $U$ sao cho nó tuân theo quy tắc sau:

- $U|0\rangle_B |0\rangle_E = |0\rangle_B |e_0\rangle_E$  
- $U|1\rangle_B |0\rangle_E = |1\rangle_B |e_1\rangle_E$

<br />

*(Trong đó $|e_0\rangle$ và $|e_1\rangle$ là các trạng thái của Eve, không nhất thiết phải trực giao. Mức độ trực giao của chúng quyết định mức độ can thiệp của Eve)*

Bạn đọc có thể để ý rằng trạng thái của Qubit B ở vế trái và vế phải **không hề thay đổi** ( $|0\rangle_B$ vẫn là $|0\rangle_B$, $|1\rangle_B$ vẫn là $|1\rangle_B$ ). Nếu $U$ làm lật bit của Bob (ví dụ biến $|0\rangle$ thành $|1\rangle$), Bob sẽ nhận được một Qubit sai lệch hoàn toàn, tỷ lệ lỗi (QBER) sẽ tăng vọt và Alice/Bob sẽ ngay lập tức hủy giao thức.

Thay vào đó, Qubit B đóng vai trò là "Qubit điều khiển" (Control), còn Qubit E của Eve là "Qubit mục tiêu" (Target). Qubit E sẽ xoay (rotate) đến trạng thái $|e_0\rangle$ hay $|e_1\rangle$ tùy thuộc vào việc B mang giá trị $|0\rangle$ hay $|1\rangle$.

**1. Phân tích trước phép đo Bell của Alice**

Lúc này, trạng thái của 3 qubit **A, B, E** (bỏ qua qubit C chưa tương tác) là một trạng thái thuần khiết (Pure State) vướng víu hệ ba:

$$
|\Psi_{ABE}\rangle = \frac{1}{\sqrt{2}}(|0\rangle_A |0\rangle_B |e_0\rangle_E + |1\rangle_A |1\rangle_B |e_1\rangle_E)
$$

Ma trận mật độ tổng quát của cả 3 qubit là:

$$
\rho_{ABE} = |\Psi_{ABE}\rangle \langle \Psi_{ABE}|
$$

Bây giờ, ta tiến hành "trace out" để xem góc nhìn (mixed state) của từng người ở giai đoạn tín hiệu đang bay:

* **Góc nhìn của Bob (Trace out A và E):**

Bob chỉ cầm qubit B. Để biết Bob thấy gì, ta lấy vết hệ A và E:

$$
\rho_B = \text{Tr}_{A,E}(\rho_{ABE}) = \frac{1}{2}(|0\rangle_B \langle 0|_B + |1\rangle_B \langle 1|_B)
$$

**Nhận xét:** Bob nhìn thấy một trạng thái hỗn hợp hoàn toàn (maximally mixed state), hoàn toàn giống hệt như trường hợp không có sự tấn công của Eve. Ở giai đoạn này, Bob không có cách nào phát hiện ra đường truyền đang bị nghe lén.

* **Góc nhìn của Eve (Trace out A và B):**

$$
\rho_E = \text{Tr}_{A,B}(\rho_{ABE}) = \frac{1}{2}(|e_0\rangle_E \langle e_0|_E + |e_1\rangle_E \langle e_1|_E)
$$

**Nhận xét:** Eve cũng chỉ thấy một trạng thái hỗn hợp của chính các probe qubit của mình. Eve chưa thu được thông tin gì về trạng thái $|\psi\rangle_C$ vì Alice chưa thực hiện phép đo.

**2. Phân tích sau phép đo Bell của Alice**

Alice và Bob không hề biết về việc kênh lượng tử của mình đã bị can thiệp nên Alice tiếp tục thực hiện giao thức (Bạn đọc có thể tự thực hiện các phép biến đổi trạng thái qua từng bước bằng tích tensor để xem vector trạng thái của 4 Qubit biến đổi ra sao, tuy nhiên hiện tại bài viết đã khá dài nên tôi lược bỏ phần này).

Alice thực hiện phép đo trên hệ qubit **C** và **A**. Để ví dụ, giả sử Alice đo được kết quả tương ứng với trạng thái Bell $|\Phi^+\rangle_{CA}$.

Lúc này, toàn bộ hệ thống của Bob và Eve sẽ "sụp đổ" về một trạng thái thuần khiết mới (Pure state của hệ B và E):

$$
|\Psi_{BE}\rangle = \alpha|0\rangle_B |e_0\rangle_E + \beta|1\rangle_B |e_1\rangle_E
$$

Ma trận mật độ của trạng thái trên có dạng:

$$
|\Psi_{BE}\rangle\langle\Psi_{BE}| = |\alpha|^2 |0\rangle\langle 0|_B \otimes |e_0\rangle\langle e_0|_E + |\beta|^2 |1\rangle\langle 1|_B \otimes |e_1\rangle\langle e_1|_E + \alpha\beta^* |0\rangle\langle 1|_B \otimes |e_0\rangle\langle e_1|_E + \alpha^*\beta |1\rangle\langle 0|_B \otimes |e_1\rangle\langle e_0|_E
$$

* **Góc nhìn của Bob sau phép đo (Trace out E):**

Bob nhận được kết quả đo của Alice qua kênh cổ điển và áp dụng cổng Unitary để khôi phục trạng thái. Tuy nhiên, hệ B của anh ta đã vướng víu với E, nên ma trận mật độ của Bob bây giờ là:

$$
\rho'_B = \text{Tr}_E(|\Psi_{BE}\rangle \langle \Psi_{BE}|)
$$

$$
\rho'_B = |\alpha|^2 |0\rangle\langle 0| + |\beta|^2 |1\rangle\langle 1| + \underbrace{\alpha \beta^* \langle e_1|e_0\rangle |0\rangle\langle 1|}_{\text{off-diagonal}} + \underbrace{\alpha^* \beta \langle e_0|e_1\rangle |1\rangle\langle 0|}_{\text{off-diagonal}}
$$

**Nhận xét:** Đây chính là sự **mất kết hợp (Decoherence)**. Các thành phần ngoài đường chéo (off-diagonal terms) của Bob – nơi chứa đựng sự chồng chập lượng tử – đã bị nhân với hệ số $\langle e_1|e_0\rangle$.

Ở phía trên ta đã biết rằng Eve cố tình thiết kế toán tử $U$ để tạo ra các trạng thái $|e_0\rangle$ và $|e_1\rangle$ và tích vô hướng của chúng chính là:

$$
\langle e_0|e_1\rangle = \cos\theta
$$

Đây là tham số quan trọng nhất, quyết định sự thành bại của đòn tấn công của Eve. Trong cơ học lượng tử, tích vô hướng đo lường "độ giống nhau" (hoặc khả năng phân biệt) giữa hai trạng thái. Có 3 trường hợp xảy ra với tham số $\theta$ (góc xoay của Qubit E):

- **Nếu $\theta = 0$ (Tức là $\cos\theta = 1$):** Lúc này $|e_0\rangle = |e_1\rangle$. Dù B là 0 hay 1 thì Qubit của Eve vẫn nhận cùng một trạng thái. Eve không thu được bất kỳ thông tin nào, đòn tấn công vô tác dụng. Vướng víu giữa A và B được bảo toàn 100%.  
- **Nếu $\theta = \frac{\pi}{2}$ (Tức là $\cos\theta = 0$):** Lúc này $|e_0\rangle$ và $|e_1\rangle$ trực giao hoàn toàn (ví dụ một cái là $|0\rangle$, một cái là $|1\rangle$). Đây là phép đo mạnh nhất. Khi Eve đo Qubit E, cô ta biết chắc chắn 100% Qubit B là 0 hay 1. Tuy nhiên, theo định lý lượng tử, nếu biết chắc chắn trạng thái của một hạt trong hệ vướng víu, trạng thái vướng víu sẽ bị phá hủy hoàn toàn. Alice và Bob sẽ phát hiện ra ngay.  
- **Tấn công thực tế ($0 < \cos\theta < 1$):** Eve chọn một góc $\theta$ vừa phải. $|e_0\rangle$ và $|e_1\rangle$ có một chút khác biệt, nhưng không trực giao hoàn toàn. Eve chỉ thu được "một phần thông tin" (partial information) nhưng bù lại, hệ thống của Alice và Bob chỉ bị nhiễu nhẹ (partial decoherence), giúp Eve ẩn mình dưới vỏ bọc của "nhiễu môi trường tự nhiên".

* **Góc nhìn của Eve sau phép đo (Trace out B):**

Ta thực hiện phép trace out $\rho_{BE}$ để xem góc nhìn của Eve:

$$
\rho'_E = \text{Tr}_B(|\Psi_{BE}\rangle \langle \Psi_{BE}|)
$$

$$
\rho'_E = |\alpha|^2 |e_0\rangle\langle e_0| + |\beta|^2 |e_1\rangle\langle e_1|
$$

**Nhận xét:** Ma trận mật độ của Eve bây giờ trực tiếp chứa các xác suất $|\alpha|^2$ và $|\beta|^2$ từ qubit ban đầu của Alice. Chỉ bằng cách thực hiện phép đo cục bộ trên qubit E của mình, Eve đã đánh cắp được một phần thông tin về trạng thái lượng tử mà Alice gửi cho Bob.

Nên nhớ rằng ở đây Eve đã có thông tin về $\alpha$ và $\beta$ tuy nhiên để thực biết được chúng là bao nhiêu cô ta phải thực hiện phép đo lên Qubit của mình.

- Trong trường hợp cô ta thiết kế hai trạng thái $|e_0 \rangle, |e_1 \rangle$ quá giống nhau (để tránh bị phát hiện), lúc này kết quả đo của Eve trên Qubit gần như không mang lại thông tin gì vì:

$$
|e_0\rangle \approx |e_1\rangle
$$

Kéo theo đó:

$$
\langle e_1|e_0\rangle \approx 1
$$

Lúc này ma trận của Eve trở thành:

$$
\rho'_E \approx (|\alpha|^2 + |\beta|^2) |e_0\rangle\langle e_0| = 1 \cdot |e_0\rangle\langle e_0|
$$

Ma trận này độc lập hoàn toàn với thông tin của Alice! Eve đo kiểu gì cũng chỉ ra kết quả vô nghĩa. Cô ta không có thông tin gì.

- Trong trường hợp Eve dò xét cực mạnh (Lấy cắp tối đa) Eve tương tác sao cho $|e_0\rangle$ và $|e_1\rangle$ hoàn toàn vuông góc (trực giao) với nhau. Kéo theo đó:

$$
\langle e_1|e_0\rangle = 0
$$

Vì hai trạng thái này trực giao, Eve có thể thiết kế một phép đo hoàn hảo để phân biệt chúng. Cô ta sẽ biết chính xác xác suất $|\alpha|^2$ và $|\beta|^2$ mà không gặp sai số nào.

### 3.2. Tấn công vào kênh cổ điển (Tính toàn vẹn của dữ liệu)

Nếu không thể can thiệp vào cả hai kênh của giao thức như MITM, kẻ tấn công vẫn có thể gây tổn hại nghiêm trọng đến hệ thống nếu có thể can thiệp vào một trong hai kênh. Ví dụ trong phần này ta sẽ xem một ví dụ về việc kẻ tấn công có thể can thiệp vào kênh cổ điển của giao thức.

Trong giao thức, sau khi Alice đo đạc, cô thu được 2 bit cổ điển (tương ứng với 4 kết quả có thể của phép đo Bell) và gửi cho Bob. Bob dùng 2 bit này để quyết định xem sẽ áp dụng cổng Pauli nào ($I$, $\sigma_x$, $\sigma_y$, hoặc $\sigma_z$) lên qubit của mình.

Tuy nhiên, nếu Eve có thể can thiệp vào kênh cổ điển (thay vì truyền đúng kết quả đo của Alice cho Bob, cô ta gửi một kết quả khác) cô ta có thể thay đổi trạng thái Qubit của Bob.

* **Chỉnh sửa dữ liệu (Data Manipulation / DoS):**

Định lý Không sao chép (No-cloning theorem) đảm bảo rằng Eve không thể trích xuất thông tin về $\alpha$ hoặc $\beta$ chỉ từ việc nghe lén 2 bit cổ điển này. Tuy nhiên, nếu kênh cổ điển không được xác thực, Eve có thể thực hiện tấn công lật bit (bit-flip). Ví dụ, nếu Alice gửi `00` (yêu cầu Bob áp dụng cổng $I$), nhưng Eve đổi thành `01`, Bob sẽ áp dụng cổng $\sigma_x$. Trạng thái Bob nhận được sẽ là $\sigma_x|\psi\rangle = \alpha|1\rangle + \beta|0\rangle$, hoàn toàn sai lệch so với ban đầu. Đây là một dạng tấn công từ chối dịch vụ (Denial of Service) và phá hoại tính toàn vẹn của thông tin lượng tử.

### 3.3. Tấn công Kênh kề (Side-Channel) lên Phần cứng

Lý thuyết lượng tử là hoàn hảo, nhưng các thiết bị vật lý thì không. Các phương pháp mã hóa hậu lượng tử (Post-Quantum Cryptography) hiện nay đang phải đối phó rất nhiều với các điểm yếu từ phần cứng quang học. Cụ thể kẻ tấn công có thể thực hiện một vài phương pháp tấn công trực tiếp lên phần cứng lượng tử như:

* **Tấn công làm mù đầu thu (Detector Blinding Attack):** Eve chiếu một xung laser liên tục hoặc chớp nháy với cường độ mạnh vào các đầu dò photon đơn lẻ (Single-Photon Avalanche Diodes - SPADs) của Bob. Điều này buộc các đầu dò thoát khỏi chế độ lượng tử nhạy cảm (Geiger mode) và chuyển sang chế độ tuyến tính cổ điển. Khi đó, Eve có thể toàn quyền kiểm soát kết quả đo đạc của Bob bằng cách gửi các xung ánh sáng cổ điển được tinh chỉnh theo ý muốn.  
* **Tấn công Ngựa thành Troy (Trojan-horse Attack):** Eve gửi các xung ánh sáng mạnh vào trong các thiết bị điều khiển (modulators) hoặc bộ phân tách chùm tia (beam splitters) của Alice/Bob. Bằng cách phân tích các photon phản xạ ngược trở lại (back-reflection), Eve có thể "đọc" được cấu hình của các thiết bị này, từ đó suy ra các cơ sở đo đạc hoặc các cổng biến đổi mà Alice và Bob đang thiết lập mà không hề phá vỡ trạng thái lượng tử đang xử lý bên trong.

> Việc bảo vệ viễn tải lượng tử thường đòi hỏi phải kết hợp các cơ chế xác thực lượng tử (Quantum Authentication) và đảm bảo tính bảo mật của các thiết bị đo lường (Device-Independent Quantum Cryptography).

---

## 4. Tham khảo

**Tiếng Anh**

- **Bennett, C. H., et al. (1993).** *"Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels."* Physical Review Letters, 70(13), 1895. ([Link](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.70.1895)): Đây là bài báo quan trọng nhất, nơi giao thức viễn tải lượng tử lần đầu tiên được đề xuất về mặt lý thuyết.  
- **Bouwmeester, D., et al. (1997).** *"Experimental quantum teleportation."* Nature, 390(6660), 575-579. ([Link](https://www.nature.com/articles/37539)): Bài báo này ghi lại lần đầu tiên viễn tải lượng tử được thực hiện thành công trên thực tế bằng photon.  
- **Gisin, N., et al. (2002).** *"Quantum cryptography."* Reviews of Modern Physics, 74(1), 145. ([Link](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.74.145)): Bài viết này phân tích sâu về các kịch bản nghe lén (eavesdropping) và cách sự can thiệp làm thay đổi ma trận mật độ, dẫn đến việc phát hiện ra kẻ tấn công.

[image1]: <data:image/png;base64,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>