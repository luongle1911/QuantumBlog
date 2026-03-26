---
title: "Bài 2: Thuật toán phân tích thừa số nguyên tố Shor"
description: "Thuật toán đe dọa các hệ thống mã hóa hiện đại."
pubDate: "Mar 28 2026"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["Giải thuật", "Mật mã học", "Bảo mật"]
---

## Thuật toán Shor

Được nhà toán học Peter Shor đề xuất vào năm 1994, thuật toán học này nhắm tới việc phân tích một số nguyên khổng lồ thành các thừa số nguyên tố. 

Máy tính cổ điển tính toán thuật toán này bằng thuật toán rây, đòi hỏi thời gian tính toán tăng theo cấp số mũ. Do tính chất này, nó được dùng làm bản lề cho hệ thống bảo mật RSA (Mã hóa public-key).

### Tại sao lại nguy hiểm?

Sử dụng máy tính lượng tử, **Shor's Algorithm có thể giải quyết bài toán này trong thời gian đa thức**. Nghĩa là một phép tính mất hàng triệu năm của siêu máy tính mạnh nhất hiện nay có thể bị giải quyết trong vòng vài giờ bằng máy tính lượng tử!

```python
# Giả mã (Pseudocode) ý tưởng
def shors_algorithm(N):
    a = pick_random_number_less_than(N)
    if gcd(a, N) != 1:
        return gcd(a, N)
    
    # Bước lượng tử cốt lõi
    r = quantum_period_finding(a, N)
    
    if r % 2 != 0:
        return retry()
        
    p = gcd(a**(r/2) - 1, N)
    q = gcd(a**(r/2) + 1, N)
    return p, q
```
Thuật toán này đã mở ra kỷ年纪 "Bảo mật hậu lượng tử" (Post-Quantum Cryptography).
