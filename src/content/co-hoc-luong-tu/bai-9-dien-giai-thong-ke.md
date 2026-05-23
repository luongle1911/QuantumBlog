---
title: "Bài 9: Diễn giải thống kê"
description: "Tìm hiểu bản chất của phép đo trong cơ học lượng tử, sự sụp đổ hàm sóng, vướng víu lượng tử và diễn giải thống kê Copenhagen."
pubDate: "May 22 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Cơ học lượng tử", "Diễn giải thống kê", "Phép đo", "Copenhagen", "Vướng víu lượng tử"]
---


## Mục lục

Nội dung của bài này bao gồm:

- [1. Phép đo](#1-phép-đo)
  - [1.1. Cơ học cổ điển](#11-cơ-học-cổ-điển)
  - [1.2. Cơ học lượng tử](#12-cơ-học-lượng-tử)
- [2. Diễn giải thống kê](#2-diễn-giải-thống-kê)
  - [2.1. Phát biểu](#21-phát-biểu)
  - [2.2. Kiểm tra](#22-kiểm-tra)
- [3. Tham khảo](#3-tham-khảo)

---

Ở các bài trước, chúng ta đã nghiên cứu rất nhiều về cách giải phương trình Schrödinger, nhưng đó chủ yếu là các biến đổi toán học. Ở bài này, tôi muốn nói rõ hơn về bản chất của một **phép đo (measurement)** đối với một **quan sát (observable)** trong thế giới vi mô.

## 1. Phép đo

### 1.1. Cơ học cổ điển

Vậy bản chất của một phép đo là gì? Để bạn đọc dễ hình dung, hãy quay trở lại vật lý cổ điển. Giả sử tôi là một người đang đi xe máy trên đường. Bạn là cảnh sát đang đứng bên đường và muốn biết về tốc độ của tôi (để biết tôi có đang vi phạm tốc độ hay không), vậy bạn sẽ phải làm gì?

Là một người thông minh, bạn ngay lập tức rút máy ảnh ra và chụp lại vị trí của tôi ở một thời điểm, và sau một khoảng thời gian (ví dụ là 2 giây) bạn tiếp tục chụp một bức ảnh nữa. Sau đó, bạn đo khoảng cách giữa hai điểm tương ứng trên bức ảnh rồi chia khoảng cách này cho 2, bạn sẽ có được vận tốc trung bình của tôi trong khoảng thời gian đó.

Ở đây, bạn đang thực hiện một phép đo đối với quan sát (vận tốc) - một tính chất hay khía cạnh của thực tại tôi đi xe máy. Nhưng việc tôi đi xe máy là một thực tại (**reality**) **tồn tại khách quan** và độc lập với việc bạn đo vận tốc của tôi. Có nghĩa rằng, dù bạn có đang đo vận tốc của tôi hay không thì tôi vẫn đang di chuyển với một vận tốc $v$ nào đó. Tương tự như việc bạn đo cân nặng của một người, dù bạn có thực hiện đo hay không thì cân nặng của anh ta khi đó cũng không hề thay đổi.

**Phép đo chính là việc xác định một khía cạnh của thực tại:** Theo cơ học Newton hoặc điện từ học cổ điển, thực tại là khách quan và độc lập với người quan sát. Phép đo chỉ đơn giản là "đọc" hoặc xác định một tính chất đã tồn tại sẵn (như vị trí, vận tốc, năng lượng của một vật). 

Ví dụ: Đo tốc độ của một quả bóng đang lăn – tốc độ đó là một phần của thực tại vật chất, và phép đo hoàn toàn không làm thay đổi nó.

### 1.2. Cơ học lượng tử

Tuy nhiên, thực tại và phép đo trong cơ học lượng tử lại mang một ý nghĩa khác hoàn toàn và không thể tách rời. Hãy lấy phép đo năng lượng của electron trong nguyên tử Hydro làm ví dụ. Như đã học trong chương trình hóa học phổ thông, ta biết rằng các electron trong nguyên tử chỉ tồn tại ở các quỹ đạo xác định rời rạc (tôi sẽ chỉ rõ tại sao lại như vậy trong bài hàm sóng trong không gian ba chiều). 

Mỗi khi nguyên tử nhận hoặc phát ra một bức xạ, nó sẽ thay đổi quỹ đạo lên hoặc xuống các mức năng lượng cho phép. Tập hợp các mức năng lượng cho phép này chính là các **giá trị riêng** của **toán tử năng lượng** đối với hàm sóng của electron. Vậy vấn đề của chúng ta hiện tại đó là: làm sao để đo năng lượng của nguyên tử này?

<div align="center">

![][image1]
*(Hình 1.1: Mô tả các mức năng lượng cho phép của electron trong nguyên tử Hydro)*

</div>

* **Thí nghiệm 1: Sự sụp đổ hàm sóng**

Để đo mức năng lượng của một nguyên tử, người ta thường sử dụng phương pháp gián tiếp là quan sát vạch hấp thụ hoặc vạch phát xạ. Cách làm thí nghiệm cụ thể như sau:

- Đặt một máy phát photon trước mẫu nguyên tử cần đo và một màn chắn để hứng ánh sáng phía sau máy phát.
- Chiếu ánh sáng màu khác nhau vào mẫu nguyên tử và quan sát dải màu của màn chắn.
- Vì nguyên tử chỉ hấp thụ các mức năng lượng rời rạc để nhảy lên quỹ đạo mới, nên chúng ta sẽ quan sát được các vạch hấp thụ.
- Giả dụ nếu chúng ta thấy ánh sáng đỏ đã bị hấp thụ, ta chỉ cần tính năng lượng của ánh sáng đỏ qua công thức $E_r = h f_r$, sau đó tìm các mức năng lượng cách nhau đúng bằng $E_r$ để suy ngược ra mức năng lượng ban đầu. (Ví dụ: Nếu $E_5 - E_3 = E_r$ thì ban đầu electron đang ở mức năng lượng $E_3$).

Tuy nhiên, để minh họa rõ nét nhất bản chất tức thời của một phép đo lượng tử, **hãy hình dung chúng ta sử dụng một máy dò ion hóa (ionization detector) để đo trực tiếp năng lượng của electron**. Khi thực hiện phép đo này, máy dò sẽ lập tức tương tác và bắt electron "sụp đổ" về một quỹ đạo xác định.

Vậy câu hỏi đặt ra là: Ta có thể kết luận chắc chắn ban đầu electron đã ở trạng thái $E_3$ (trước khi bị đo) hay không?

Bạn có thể nói rằng chúng ta hoàn toàn có thể kết luận như vậy nếu biết trạng thái ban đầu của hàm sóng. Giả sử tôi cho bạn trạng thái ban đầu của hàm sóng electron có dạng **chồng chập (superposition)**:

$$
| \Psi_e \rangle = \frac{1}{\sqrt{2}} | \Psi_1 \rangle + \frac{1}{\sqrt{2}} | \Psi_2 \rangle + 0 | \Psi_3 \rangle + \ldots \tag{1.1}
$$

Trong đó:
- $\Psi_e$ là hàm sóng tổng quát của electron.
- $\Psi_1, \Psi_2, \Psi_3, \ldots$ là các nghiệm riêng tương ứng với các mức năng lượng $E_1, E_2, E_3, \ldots$

Nếu thực hiện đo bằng máy dò với electron có trạng thái ban đầu như $(1.1)$, bạn sẽ thấy gì?

Ở trong các thí nghiệm thực tế, nếu ta lặp lại phép đo này với số lần đủ lớn trên các hệ chuẩn bị y hệt nhau, ta sẽ thu được xác suất tìm thấy electron ở trạng thái $E_1$ và $E_2$ là 50-50. Nhưng quan trọng là tại mỗi lần đo đơn lẻ, chúng ta chỉ nhận được duy nhất một kết quả: “electron ở mốc $E_1$” hoặc “electron ở mốc $E_2$”. Nói cách khác, chúng ta không thể chắc chắn electron thực sự ở mốc nào *trước khi* phép đo diễn ra.

Điều này mâu thuẫn với trực giác cổ điển. Trực giác bảo rằng: Nếu tôi đo và thấy nó ở $E_2$, nghĩa là ngay trước đó nó cũng đã ở $E_2$. Nhưng lượng tử lại bảo: Trước khi đo, nó ở cả $E_1$ và $E_2$ cùng một lúc. **Vậy chẳng phải phép đo đã can thiệp và ép buộc thực tại phải chọn một kết quả hay sao?**

Để làm rõ điều này, chúng ta tiếp tục nghiên cứu việc làm sao tạo ra được trạng thái chồng chập như $(1.1)$.

* **Thí nghiệm 2: Vướng víu lượng tử (Entanglement)**

Vẫn tiếp tục với electron của nguyên tử Hydro, giả sử sau một phép đo, electron đang nằm yên ở mức năng lượng cơ bản $E_1$. Làm sao để ép electron này rơi vào trạng thái chồng chập với $E_2$?

Câu trả lời là chiếu một photon có năng lượng đúng bằng $E_2 - E_1$ vào nó. Nhưng làm sao để biết electron đã hấp thụ photon đó hay chưa? 

Bạn buộc phải đặt một màn chắn phía sau để đo. Nếu thấy vạch sáng trên màn chắn $\rightarrow$ "electron chưa hấp thụ photon, vẫn ở $E_1$". Nếu màn chắn tối đen $\rightarrow$ "photon đã bị hấp thụ, electron ở $E_2$".

Nhưng nếu ta **cố tình không đặt màn chắn** (không thực hiện phép đo), thì hệ sẽ đi vào trạng thái chồng chập: electron vừa hấp thụ lại vừa không hấp thụ photon. Khi đó, hệ lượng tử gồm “electron và photon” sẽ đan xen vào nhau, tạo thành một trạng thái **vướng víu (entanglement)** không thể tách rời:

$$
|\Psi_s\rangle = \alpha |E_1\rangle_e \otimes |\gamma\rangle_{ph} + \beta |E_2\rangle_e \otimes |0\rangle_{ph} \tag{1.2}
$$

Trong đó:
- $|\Psi_s\rangle$ là hàm sóng trạng thái của toàn bộ hệ.
- $|\gamma\rangle_{ph}$ là hàm sóng của photon gốc mang mức năng lượng $E_p = E_2 - E_1$.
- $|0\rangle_{ph}$ là **trạng thái chân không (vacuum state - không tồn tại hạt photon nào)**, đại diện cho việc photon đã bị hấp thụ triệt để.
- $|E_1\rangle_e, |E_2\rangle_e$ là các trạng thái quỹ đạo của electron.
- $\alpha, \beta$ là các hệ số chuẩn hóa phụ thuộc vào điều kiện tương tác.

Điều kỳ diệu của hàm sóng $(1.2)$ là: Các hạt đã bị trói buộc với nhau. Nếu ta quyết định đo electron và thấy nó ở $E_1$, ta lập tức biết chắc chắn 100% photon vẫn đang bay lơ lửng ($|\gamma\rangle$). Phép đo lên một hạt đã lập tức khiến hàm sóng của hạt còn lại sụp đổ, dù chúng có cách xa nhau đến đâu (Einstein gọi hiện tượng này là *tác động ma quái từ xa - spooky action at a distance*). Thí nghiệm này chính là nền tảng để tạo ra các Qubit rối trong máy tính lượng tử hiện đại.

> **💡 Lưu ý:** Nếu bạn nghĩ vướng víu lượng tử vi phạm Thuyết tương đối (thông tin truyền nhanh hơn ánh sáng) thì bạn đã nhầm. Tác động ma quái này hoàn toàn ngẫu nhiên và không thể kiểm soát. Ta không thể chủ động ép electron về $E_1$ hay $E_2$ để "gửi tín hiệu" cho hạt kia. Vì không có khả năng mã hóa thông tin có chủ đích, vướng víu lượng tử hoàn toàn tuân thủ sự giới hạn tốc độ ánh sáng của Einstein. *(Đây cũng là cốt lõi của nghịch lý EPR).*

Cơ chế thực sự đằng sau sự sụp đổ này là gì? Khoa học đưa ra nhiều cách giải thích (diễn giải), phổ biến nhất là:

- **Diễn giải Copenhagen (Diễn giải thống kê):** Do Niels Bohr và Werner Heisenberg phát triển. Coi hàm sóng chỉ là công cụ toán học tính xác suất. Khi đo lường, hàm sóng lập tức "sụp đổ" (collapse) ngẫu nhiên về một trạng thái xác định.
- **Diễn giải Đa thế giới (Many-Worlds):** Do Hugh Everett đề xuất. Không có sự sụp đổ nào cả. Mọi kết quả đều xảy ra thực tế, nhưng vũ trụ bị "phân nhánh" thành vô số các nhánh song song. (Mèo Schrödinger vừa sống ở vũ trụ này, vừa chết ở vũ trụ kia).
- **Diễn giải Giải mạch lạc (Decoherence):** Quá trình chuyển tiếp từ lượng tử sang cổ điển xảy ra khi hệ lượng tử rò rỉ thông tin (tương tác) với môi trường khổng lồ bên ngoài, làm triệt tiêu trạng thái chồng chập mà không cần người quan sát.

Trong khuôn khổ các bài học này, chúng ta sẽ làm việc chủ yếu dựa trên Diễn giải thống kê.

---

## 2. Diễn giải thống kê

### 2.1. Phát biểu

Nếu ta đo lường một quan sát đại diện bởi toán tử $\hat{Q}$ trên một hạt đang tồn tại trong trạng thái $\Psi(x,t)$, thì ta chắc chắn giá trị đo được sẽ là một trong các giá trị riêng của phương trình giá trị riêng đối với toán tử $\hat{Q}$ đó. 

Nếu các nghiệm tạo thành phổ rời rạc, xác suất để đo được giá trị riêng $q_n$ tương ứng với nghiệm riêng $\Psi_n$ được tính bằng:

$$
P(q_n) = |c_n|^2 \tag{2.1}
$$

Trong đó: $c_n = \langle \Psi_n | \Psi \rangle$

Nếu các nghiệm tạo thành phổ liên tục $q(z)$ tương ứng với nghiệm $\Psi_z$, thì xác suất đo được kết quả nằm trong khoảng $dz$ là:

$$
P(dz) = |c(z)|^2 dz \tag{2.2}
$$

Với: $c(z) = \langle \Psi_z | \Psi \rangle$

Dưới mỗi phép đo, hàm sóng sẽ vĩnh viễn sụp đổ về một trong các giá trị riêng đó.

### 2.2. Kiểm tra

Bản thân tiên đề thống kê là không thể chứng minh, ta chỉ có thể kiểm tra xem nó có nhất quán với cấu trúc toán học (chuẩn hóa và kỳ vọng) hay không. Hãy xét trường hợp phổ rời rạc.

Viết lại hàm sóng tổng quát:

$$
\Psi(x, t) = \sum_{n} a_n \psi_n(x) T(t) \tag{2.3}
$$

Để gọn, ta gộp hệ số thời gian vào:

$$
\Psi(x, t) = \sum_{n} c_n(t) \psi_n(x) \tag{2.4}
$$

Trong đó $c_n(t) = a_n \cdot T(t)$. Theo công thức $(2.1)$, $c_n$ chính là tích vô hướng:

$$
c_n(t) = \langle \psi_n | \Psi \rangle = \int_{-\infty}^{\infty} \psi_n(x)^* \Psi(x,t) \, dx \tag{2.5}
$$

Để xác suất có ý nghĩa vật lý, tổng tất cả các xác suất phải bằng 1:

$$
\sum_{n} |c_n|^2 = 1 \tag{2.6}
$$

Tiến hành kiểm tra thông qua điều kiện chuẩn hóa của hàm sóng:

$$
1 = \langle \Psi | \Psi \rangle = \left\langle \left( \sum_{n'} c_{n'} \psi_{n'} \right) \middle| \left( \sum_{n} c_n \psi_n \right) \right\rangle = \sum_{n'} \sum_{n} c_{n'}^* c_n \langle \psi_{n'} | \psi_n \rangle \tag{2.7}
$$

*(Lưu ý quy tắc của Bra-Ket: Khi đưa hệ số $c_{n'}$ ra khỏi Bra $\langle \Psi |$, nó lập tức trở thành liên hợp phức $c_{n'}^*$).*

Như đã chứng minh ở bài Formalism, các nghiệm của phương trình riêng là **trực giao**:

$$
\langle \psi_{n'} | \psi_n \rangle = 0, \quad \forall n' \neq n \tag{2.8}
$$

Do đó, các số hạng chéo trong tổng $(2.7)$ sẽ triệt tiêu bằng 0. Ta áp dụng hệ số Kronecker delta $\delta_{n'n}$:

$$
1 = \sum_{n'} \sum_{n} c_{n'}^* c_n \delta_{n'n} = \sum_{n} c_n^* c_n = \sum_{n} |c_n|^2 \tag{2.9}
$$

Kết quả hoàn toàn trùng khớp với điều kiện $(2.6)$.

Tiếp tục kiểm tra tính nhất quán đối với giá trị trung bình (kỳ vọng) của đại lượng $\hat{Q}$:

$$
\langle Q \rangle = \sum_{n} q_n |c_n|^2 \tag{2.10}
$$

Tính trực tiếp từ Bra-Ket toán tử:

$$
\langle Q \rangle = \langle \Psi | \hat{Q} | \Psi \rangle = \left\langle \left( \sum_{n'} c_{n'} \psi_{n'} \right) \middle| \left( \hat{Q} \sum_{n} c_n \psi_n \right) \right\rangle \tag{2.11}
$$

Tác dụng toán tử $\hat{Q}$ lên vector riêng $\psi_n$ trả về giá trị riêng $q_n$:

$$
\hat{Q} \psi_n = q_n \psi_n \tag{2.12}
$$

Thay $(2.12)$ vào $(2.11)$ và đẩy các hệ số vô hướng ra ngoài (nhớ liên hợp phức cho $c_{n'}$), ta có:

$$
\langle Q \rangle = \sum_{n'} \sum_{n} c_{n'}^* c_n q_n \langle \psi_{n'} | \psi_n \rangle = \sum_{n'} \sum_{n} c_{n'}^* c_n q_n \delta_{n'n} = \sum_{n} q_n |c_n|^2 \tag{2.13}
$$

Qua các bước kiểm tra chặt chẽ, ta thấy Diễn giải thống kê hoàn toàn nhất quán và phù hợp với khung toán học của các quan sát lượng tử.

---

## 3. Tham khảo

1. Oxford Academic. *The Copenhagen Interpretation | The Oxford Handbook of the History of Quantum Interpretations*. [Link](https://academic.oup.com/edited-volume/43513/chapter-abstract/364216245?redirectedFrom=fulltext&login=false#no-access-message).
2. *Copenhagenish interpretations of quantum mechanics*. arXiv:2506.00112. [PDF](https://arxiv.org/pdf/2506.00112).

[image1]: <data:image/png;base64,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>