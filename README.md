# Lộ trình luyện IELTS từ đầu — mục tiêu dùng được trong thực tế

> Dành cho người bắt đầu gần như từ số 0 (còn nhớ chút ngữ pháp phổ thông, chưa nói/viết được), muốn đạt **IELTS 6.5–7.0** và quan trọng hơn là **dùng được tiếng Anh trong công việc và đời sống**: viết email, họp, thuyết trình, đọc tài liệu, trò chuyện.

Band 6.5–7.0 được chọn làm mục tiêu vì đó là ngưỡng mà tiếng Anh bắt đầu "tự chạy" ngoài phòng thi: hiểu 85–90% một cuộc họp, đọc tài liệu kỹ thuật không cần dịch, viết email không phải tra từng câu. Band cao hơn là tốt nhưng từ 7.0 trở đi, cái cần luyện là *dùng nhiều*, không phải *luyện đề nhiều*.

---

## 1. Giả định của lộ trình

| Hạng mục | Giả định | Nếu bạn khác giả định |
|---|---|---|
| Trình độ hiện tại | ~A2 (tương đương band 3.0–3.5): hiểu câu đơn giản, vốn từ ~1000, nói ngập ngừng | Làm **bài kiểm tra đầu vào** (mục 4) để chọn tuần bắt đầu |
| Mục tiêu | Overall 6.5, không kỹ năng nào dưới 6.0 | Mục tiêu 7.0+: kéo dài Giai đoạn 3–4 thêm 8–12 tuần, Writing/Speaking cần người chấm thật |
| Thời gian | 48 tuần (~12 tháng), 10–14 giờ/tuần | Ít giờ hơn: **giãn số tuần**, giữ nguyên thứ tự, đừng bỏ bài |
| Loại bài thi | **Academic** (phổ biến nhất ở Việt Nam, nhiều tài liệu nhất) | General Training: khác ở Writing Task 1 (viết thư) và Reading (văn bản đời sống/công việc). Các bài có ghi chú `[GT]` riêng |
| Hình thức thi | Thi trên máy (kết quả 3–5 ngày, gõ Writing, nghe bằng tai nghe) | Thi giấy: luyện thêm chuyển đáp án Listening (10 phút) và viết tay 400 từ/giờ |

Phép tính thời gian: 48 tuần × ~12 giờ ≈ **580 giờ**. Tài liệu hướng dẫn của Cambridge ước tính mỗi bậc band ở mức thấp cần ~150–200 giờ học có hướng dẫn. Đi từ ~3.5 lên 6.5 là 3 bậc, nên 580 giờ là **đủ nếu học đều**, không đủ nếu học bù theo đợt.

---

## 2. Cấu trúc bộ tài liệu

**Mở `index.html` bằng Chrome hoặc Edge** — đó là toàn bộ lộ trình dưới dạng app học và luyện tại chỗ (không cần mạng, không cần cài gì). Mọi tiến độ lưu trong trình duyệt; xuất JSON sao lưu ở mục Cài đặt.

- Bản online (GitHub Pages, repo public): https://nghiadevdevops.github.io/ielts-roadmap/ — mở trên điện thoại rồi "Thêm vào màn hình chính". Micro và nhận dạng giọng nói cần HTTPS, nên bản online dùng được đầy đủ trên Chrome/Edge.
- Phục vụ qua HTTP để dùng trong Browser pane của Claude:

```bash
python -m http.server 8766 --directory "C:/Users/DCN/Documents/ielts-roadmap"
```

| Trong app | Nội dung |
|---|---|
| Bảng điều khiển | Tuần hiện tại, việc hôm nay, bài tuần này, thẻ từ đến hạn, chuỗi ngày học, biểu đồ band |
| Lộ trình 48 tuần / Tuần | Bảng 4 giai đoạn; mỗi tuần: bài học, lịch từng ngày có checkbox, thi thử, mốc |
| Tất cả bài học (114) | 24 bài ngữ pháp (G1–G24), 12 phát âm (P1–P12), 9 Listening, 11 Reading, 15 Writing, 11 Speaking, 4 hướng dẫn luyện đề, 29 bộ từ vựng — mỗi bài có quiz chấm ngay |
| Từ vựng | 731 thẻ theo câu, ôn kiểu Leitner 5 hộp, chế độ lật thẻ và gõ đáp án, có đọc máy |
| Nghe · chính tả | Máy đọc số điện thoại, tên đánh vần, ngày, giờ, giá, địa chỉ, mã bưu điện, cả câu — gõ và chấm |
| Nghe · Part 1–2 (đọc máy) | 6 kịch bản tự soạn kiểu Part 1 (điền form) và Part 2 (độc thoại, chỉ đường, thông báo), hai giọng, 30 giây đọc trước, nghe một lần, transcript sau khi nộp |
| Nghe · audio thật (VOA) | 10 bài audio người bản xứ từ VOA Learning English (public domain, 3–8 phút, có transcript + MP3 trên trang gốc) kèm 10–11 câu hỏi kiểu IELTS mỗi bài |
| Đọc · bài luyện | 20 bài đọc đủ 10 dạng câu hỏi: 12 bài tự soạn + 8 bài viết lại từ Wikipedia (CC BY-SA, có ghi nguồn), giải thích từng câu |
| Câu hay dùng (giao tiếp) | 152 câu nói thật trong 15 nhóm tình huống (chào hỏi, giới thiệu, hỏi lại, họp/standup, nhờ vả, điện thoại, ý kiến, lịch sự, nhà hàng, đi lại, sức khỏe, hẹn lịch, phản ứng, phòng thi, câu với linking verbs) có nghĩa, nghe máy đọc, luyện "nói lại" và "dịch nói" bằng nhận dạng giọng nói, đánh dấu thuộc; 3 bộ flashcard CS1–CS3. Kèm bài ngữ pháp **G25 Linking verbs** (tuần 2) |
| Nguồn luyện thêm (link) | ~40 link miễn phí đã kiểm tra (ielts.org đề mẫu theo dạng + đề đầy đủ, band descriptors, British Council, VOA, ELLLO, ESL Lab, Breaking News English, Write & Improve, AWL…) xếp theo kỹ năng và theo tuần |
| Ngữ pháp · drill trộn | Trộn ngẫu nhiên 386 câu từ mọi bài theo phạm vi (G1–12, G13–24, phát âm, chiến thuật), ghi nhớ câu sai, gợi ý bài cần ôn |
| Viết · bấm giờ | 16 đề Task 1 (biểu đồ vẽ thật, process, map) + 43 đề Task 2 đủ 5 dạng kèm dàn ý, đồng hồ, đếm từ, phân tích hình thức, checklist, bài mẫu, nút sao chép prompt chấm AI |
| Nói · Speaking Lab | 9 tab: **Hôm nay** (lịch luyện nói 20–25 phút sinh mỗi ngày, chuỗi ngày), Part 1 (11 chủ đề, máy đọc câu hỏi), Part 2+3 (40 cue card), **Thi thử** (giám khảo máy đọc đúng kịch bản 3 part 11–14 phút, ghi âm liền, transcript theo part), **Khung trả lời** A-R-E / O-R-E-X (viết → nghe → nói không nhìn → so khớp), **Phát âm** (9 bộ drill đọc theo mẫu + cặp tối thiểu, so khớp từng từ), **Cụm câu** (69 cụm có nghĩa + 3 bộ flashcard SP1–SP3), **Ý tưởng Part 3** (12 chủ đề × 6 câu, ý gợi ý + từ khóa, trả lời 45 giây), **Tiến bộ** (biểu đồ từ/phút, từ đệm, band). Mọi lần ghi âm đều chạy **nhận dạng giọng nói** (Chrome/Edge) → tốc độ, um/uh, từ lặp, đa dạng từ, từ nối, 35 lỗi mẫu người Việt, từ khóa đã dùng |
| Thi thử & điểm | Lịch 18 lần thi thử Cambridge, đồng hồ từng phần, nhập điểm → quy đổi band, lịch sử, quy trình phân tích 3 lượt |
| Sổ lỗi | Ghi lỗi → sửa → quy tắc, đếm lặp, đánh dấu đã hết |
| Cách làm đề / Tiếng Anh thực tế / Tài nguyên | Hướng dẫn từng phần thi, checklist trước khi nộp; email, họp, standup, code review, call với khách, duy trì sau thi; sách, web, app, người chấm |

Hai file Markdown cùng thư mục là bản đọc không cần trình duyệt: `01-lo-trinh-48-tuan.md` (bảng 48 tuần) và `02-giai-doan-1-nen-tang.md` (toàn bộ Giai đoạn 1). Nội dung Giai đoạn 2–4 chỉ có trong app.

---

## 3. Bảy nguyên tắc (đọc trước khi bắt đầu, đọc lại khi nản)

1. **Nền trước, mẹo sau.** 12 tuần đầu không đụng đề IELTS trừ bài kiểm tra đầu vào. Mẹo làm bài chỉ có tác dụng khi bạn đã hiểu được 70% nội dung. Học mẹo khi chưa có nền là lý do nhiều người kẹt ở 5.0 suốt hai năm.
2. **Input nhiều hơn output ở 3 tháng đầu.** Nghe và đọc chiếm 60% thời gian. Bạn không thể nói ra thứ chưa từng nghe đủ nhiều.
3. **Ôn ngắt quãng (spaced repetition).** Mọi từ mới vào Anki, ôn mỗi ngày 15–20 phút. Từ không ôn sau 7 ngày coi như chưa học.
4. **Shadowing mỗi ngày 10 phút.** Nghe một câu, nhại lại y hệt ngữ điệu, nối âm, trọng âm. Đây là bài tập duy nhất sửa được phát âm và nhịp nói cùng lúc.
5. **Viết → sửa → viết lại.** Một bài viết được sửa và viết lại có giá trị bằng năm bài viết mới. Dùng Write & Improve hoặc AI để sửa, nhưng *tự viết lại* bằng tay.
6. **Ghi lỗi.** Mọi lỗi lặp lại hai lần vào `templates/error-log.md`. Cuối tuần đọc lại. Band 6 → 7 phần lớn là *bớt lỗi*, không phải *thêm từ khó*.
7. **Dùng ngay vào việc thật.** Mỗi thứ Sáu làm một việc thật bằng tiếng Anh: viết email công việc, đọc một tài liệu kỹ thuật, nói chuyện 15 phút với người thật hoặc AI. Mục tiêu của bạn là dùng được, nên bài thi chỉ là trạm dừng.

---

## 4. Bài kiểm tra đầu vào (Tuần 0, ~3 giờ, chia 2 ngày)

Mục đích: biết mình đứng ở đâu để chọn tuần bắt đầu, và có số liệu để so sánh sau 3 tháng. **Không cần đạt điểm gì cả.** Điểm thấp là bình thường.

### Ngày 1: Listening + Reading (2 giờ)
- Dùng **Cambridge IELTS 10, Test 1** (hoặc đề mẫu miễn phí trên ielts.org). Nếu chưa có sách, tải đề mẫu "IELTS Academic Listening/Reading sample" từ ielts.org.
- Listening: 30 phút, nghe một lần, không tua. Ghi số câu đúng /40.
- Reading: 60 phút đúng, bấm giờ. Ghi số câu đúng /40.
- Trong lúc làm, đánh dấu câu nào **đoán**. Số câu đoán cũng là dữ liệu.

### Ngày 2: Writing + Speaking + từ vựng (1 giờ)
- Writing Task 2, 30 phút, đề: *"Some people think that working from home is better than working in an office. To what extent do you agree or disagree?"* Viết được bao nhiêu thì viết, đếm số từ.
- Speaking: bật ghi âm, nói 2 phút về đề *"Describe a project you worked on recently. You should say: what it was, who you worked with, what you did, and explain how you felt about it."* Chuẩn bị 1 phút trước khi nói.
- Từ vựng: làm test ước lượng vốn từ (ví dụ testyourvocab.com) → ghi con số.
- Ngữ pháp: làm bài "Test your English" miễn phí của Cambridge (25 câu) → ghi mức CEFR.

### Xếp điểm bắt đầu

| Kết quả | Bắt đầu từ | Ghi chú |
|---|---|---|
| Listening < 12 **hoặc** Reading < 12, từ vựng < 2500 | **Tuần 1** (đầy đủ Giai đoạn 1) | Đây là giả định mặc định của lộ trình |
| L và R đều 12–20, từ vựng 2500–4000, ngữ pháp B1 | **Tuần 5** (lướt G1–G4, P1–P4 trong 1 tuần rồi vào tuần 5) | Nền có nhưng chưa chắc |
| L và R đều > 20, từ vựng > 4000, ngữ pháp B1+ | **Tuần 13** (Giai đoạn 2), làm Giai đoạn 1 như ôn tập 2 tuần | Bạn đã ở ~5.0, lộ trình sẽ ngắn còn ~36 tuần |

Lưu kết quả vào `templates/mock-tracker.md` dòng "Tuần 0". Sau Giai đoạn 1 làm lại cùng đề này để thấy tiến bộ.

---

## 5. Lịch tuần mẫu (Giai đoạn 1, ~12 giờ/tuần)

| Ngày | Khối 1 (30') | Khối 2 (30') | Khối 3 (20') | Khối 4 (20') |
|---|---|---|---|---|
| Thứ 2 | Bài ngữ pháp tuần này | Bài tập ngữ pháp (Murphy) | Anki | Nghe (3 lượt) |
| Thứ 3 | Bài phát âm tuần này | Đọc graded reader | Anki | Shadowing |
| Thứ 4 | Chủ đề từ vựng tuần này | Nghe (3 lượt) + chép chính tả | Anki | Nói tự ghi âm 3 câu hỏi |
| Thứ 5 | Ôn ngữ pháp + bài tập còn lại | Viết (theo yêu cầu tuần) | Anki | Shadowing |
| Thứ 6 | Nói: trả lời 5 câu Part 1, ghi âm, nghe lại | Đọc graded reader | Anki | **Việc thật** (xem file 07) |
| Thứ 7 | Ôn cả tuần: đọc lại error log, làm lại bài sai (60') | Sửa bài viết + **viết lại** (45') | Xem phim/podcast không phụ đề Việt (45') | — |
| CN | Nghỉ. Tối đa Anki 15' và 30' tiếng Anh cho vui (nhạc, game, YouTube) | | | |

Giai đoạn 2 trở đi lịch đổi theo file `03` và `04` (thêm giờ, thêm đề). Nguyên tắc chung: **không ngày nào 0 phút**; ngày bận thì chỉ Anki 15 phút + shadowing 10 phút.

---

## 6. Theo dõi tiến độ

- **Hằng tuần**: cuối tuần điền `templates/weekly-plan.md` (đã làm / chưa làm / lỗi mới). Mất 10 phút.
- **Mỗi 4 tuần (Giai đoạn 1–2)** và **mỗi 2 tuần (Giai đoạn 3)**: thi thử theo lịch trong file `01`, ghi vào `templates/mock-tracker.md`.
- **Mốc kiểm tra bắt buộc**:

| Tuần | Kiểm tra | Mục tiêu tối thiểu | Nếu không đạt |
|---|---|---|---|
| 12 | Làm lại Cambridge 10 Test 1 (L+R) + Writing T2 + Speaking P2 | L ≥ 15/40, R ≥ 15/40, viết được 200 từ có đoạn, nói được 90 giây | Kéo dài Giai đoạn 1 thêm 4 tuần, tập trung nghe + từ vựng |
| 20 | Thi thử đầy đủ | L ≥ 20, R ≥ 20, Writing ~5.0, Speaking ~5.0 | Quay lại các dạng bài sai nhiều nhất 2 tuần |
| 28 | Thi thử đầy đủ | L ≥ 26, R ≥ 25, W ~5.5, S ~5.5 | Lùi Giai đoạn 3 thêm 4 tuần |
| 36 | Thi thử đầy đủ | L ≥ 29, R ≥ 28, W ~6.0, S ~6.0 | Lùi ngày thi thật |
| 44 | Thi thử đầy đủ, điều kiện phòng thi | L ≥ 30, R ≥ 30, W ~6.5, S ~6.5 | Thi thật vẫn được nếu overall dự kiến ≥ 6.0, cân nhắc One Skill Retake sau |

- **Đăng ký thi**: tuần 40–41, chọn ngày thi ở tuần 48–50. Lệ phí ở Việt Nam khoảng 4,5–5 triệu VND (kiểm tra lại trên trang IDP/British Council vì có thay đổi). Thi trên máy có lịch gần như hằng tuần.

---

## 7. Câu hỏi thường gặp

**Tôi có cần học trung tâm không?** Không bắt buộc. Thứ cần người thật là *chấm Writing và Speaking* ở Giai đoạn 3–4. Có thể thuê gia sư 1 buổi/tuần từ tuần 29, hoặc dùng AI chấm sơ bộ + người chấm thật mỗi 2 tuần.

**Tôi nên học giọng Anh hay Mỹ?** Giọng nào cũng được, chọn một và nhất quán. Listening IELTS có cả Anh, Úc, Mỹ, Canada nên phải *nghe* được tất cả. Tài liệu phát âm trong lộ trình mặc định theo IPA Anh-Anh (như từ điển Oxford/Cambridge), có ghi chú khác biệt với Mỹ khi cần.

**Bỏ một tuần thì sao?** Học tiếp từ chỗ dừng, không học bù dồn. Lộ trình là 48 tuần *học*, không phải 48 tuần *lịch*.

**Tôi muốn 7.5+ thì khác gì?** Giai đoạn 1–2 giống hệt. Từ Giai đoạn 3: Writing cần người chấm thật hằng tuần, đọc báo chí/sách tiếng Anh ≥ 30 phút/ngày, và lộ trình kéo dài 60–64 tuần.
