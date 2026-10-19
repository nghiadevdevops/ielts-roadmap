/* ===== Lộ trình 48 tuần, lịch tuần, thi thử, bảng band ===== */
window.PRINCIPLES = `
1. **Nền trước, mẹo sau.** 12 tuần đầu không đụng đề IELTS (trừ bài kiểm tra đầu vào). Mẹo chỉ có tác dụng khi bạn hiểu được 70% nội dung.
2. **Input nhiều hơn output ở 3 tháng đầu.** Nghe và đọc chiếm 60% thời gian.
3. **Ôn ngắt quãng.** Mọi từ mới vào flashcard, ôn mỗi ngày 15–20 phút. Từ không ôn sau 7 ngày coi như chưa học.
4. **Shadowing mỗi ngày 10 phút.** Nghe một câu, nhại lại y hệt ngữ điệu, nối âm, trọng âm.
5. **Viết → sửa → viết lại.** Một bài được sửa và viết lại bằng năm bài viết mới.
6. **Ghi lỗi.** Lỗi lặp hai lần vào Sổ lỗi. Band 6 lên 7 phần lớn là bớt lỗi, không phải thêm từ khó.
7. **Dùng ngay vào việc thật.** Mỗi thứ Sáu làm một việc thật bằng tiếng Anh (xem mục Tiếng Anh thực tế).
`;

window.PHASE_OVERVIEW = `
| Giai đoạn | Tuần | Mục tiêu | Band dự kiến | Giờ/tuần |
|---|---|---|---|---|
| 1. Nền tảng | 1–12 | Ngữ pháp cốt lõi, phát âm, 1500 từ, nghe hiểu tốc độ chậm, viết đoạn | 4.5–5.0 | 10–12 |
| 2. Kỹ năng IELTS | 13–28 | Mọi dạng câu hỏi 4 kỹ năng, cấu trúc Writing/Speaking, ngữ pháp trung cấp, từ học thuật | 5.5–6.0 | 12–14 |
| 3. Luyện đề | 29–40 | Thi thử 2 tuần/lần, phân tích lỗi, sửa điểm yếu, tăng tốc | 6.0–6.5 | 13–15 |
| 4. Nước rút | 41–48 | Thi thử hằng tuần đúng điều kiện phòng thi, ổn định, thi thật | 6.5–7.0 | 13–15 |

**Tuần 0 (trước tuần 1):** làm bài kiểm tra đầu vào MT0 (Cambridge 10 Test 1 Listening + Reading, một bài Task 2 30 phút, ghi âm Part 2) rồi nhập điểm ở trang Thi thử. Kết quả Listening/Reading dưới 12/40 → bắt đầu tuần 1; 12–20 → bắt đầu tuần 5 (lướt G1–G4, P1–P4 trong một tuần); trên 20 → bắt đầu tuần 13 và dùng Giai đoạn 1 làm ôn tập hai tuần. Đặt tuần hiện tại ở trang Cài đặt.

**Điều kiện chuyển giai đoạn:** hết tuần 12: L ≥ 15, R ≥ 15, ≥ 1200 thẻ từ, viết 150 từ có mở–thân–kết, nói 90 giây liền. Hết tuần 28: L ≥ 26, R ≥ 25, W ~5.5, S ~5.5. Hết tuần 36: L ≥ 29, R ≥ 28, W ~6.0, S ~6.0. Tuần 44: L ≥ 30, R ≥ 30, W ~6.5, S ~6.5 → giữ ngày thi. Không đạt → kéo dài giai đoạn 4 tuần, không bỏ bài.
`;

const P1 = (w, g, p, v, listen, read, write, speak, extra) => Object.assign({ w, phase: 1, lessons: [g, p, v], listen, read, write, speak, focus: 'Nền tảng: ' + g + ' · ' + p + ' · ' + v }, extra || {});
window.ROADMAP = [
  P1(1, 'G1', 'P1', 'V1', '[VOA Let\'s Learn English L1](https://learningenglish.voanews.com/p/5644.html) bài 1–2 + [BBC 6 Minute English](https://www.bbc.co.uk/learningenglish/english/features/6-minute-english), quy trình 3 lượt', 'Graded reader stage 1–2, 5–8 trang', '10 câu/ngày về bản thân', 'Tự giới thiệu 30 giây, ghi âm'),
  P1(2, 'G2', 'P2', 'V2', 'VOA Let\'s Learn English bài 3–4 + 6 Minute English', 'Graded reader', '10 câu/ngày về công việc', 'Mô tả một ngày làm việc'),
  P1(3, 'G3', 'P3', 'V3', 'VOA Let\'s Learn English bài 5–6 + chép chính tả số/tên 5 phút (trang Nghe · chính tả)', 'Graded reader', '10 câu/ngày kể hôm qua', 'Kể lại hôm qua 60 giây'),
  P1(4, 'G4', 'P4', 'V4', '6 Minute English + chính tả', '[News in Levels](https://www.newsinlevels.com/level/level-2/) level 2', 'Đoạn 60–80 từ: nơi bạn sống (từ tuần này nộp qua [Write & Improve](https://writeandimprove.com/))', 'Part 1: Home', { milestone: 'Checkpoint nhẹ: 10 câu Listening Part 1 của một đề Cambridge' }),
  P1(5, 'G5', 'P5', 'V5', '[BC LearnEnglish Listening A2](https://learnenglish.britishcouncil.org/free-resources/listening/a2) 2 bài + chính tả', 'News in Levels', 'Đoạn 80 từ: kế hoạch tuần tới', 'Part 1: Food, Daily routine'),
  P1(6, 'G6', 'P6', 'V6', 'BC LearnEnglish Listening A2→B1; [ELLLO A2](https://elllo.org/levels/A2-English-Lessons/index.html) 10 phút', 'Graded reader stage 3', 'Đoạn 80 từ: lời khuyên cho người mới', 'Part 1: Travel', { milestone: 'Checkpoint tuần 6: Listening Part 1+2 của một đề (20 câu), mục tiêu ≥ 8/20' }),
  P1(7, 'G7', 'P7', 'V7', '[BC LearnEnglish Listening B1](https://learnenglish.britishcouncil.org/free-resources/listening/b1) ("A phone call from a customer", "At the chemist")', 'Graded reader', 'Email 80 từ hỏi thông tin', 'Hỏi–đáp đóng vai'),
  P1(8, 'G8', 'P8', 'V8', '[Randall\'s ESL Lab Intermediate](https://www.esl-lab.com/intermediate/) 1 quiz/ngày; [VOA Words and Their Stories](https://learningenglish.voanews.com/z/987) 1 idiom', '[News in Levels](https://www.newsinlevels.com/level/level-3/) level 3', 'Đoạn 100 từ: tả thời tiết quê bạn', 'Part 1: Weather, Hometown'),
  P1(9, 'G9', 'P9', 'V9', 'ESL Lab Intermediate; [VOA Health & Lifestyle](https://learningenglish.voanews.com/z/955) 1 bài 3 lượt', '[Breaking News English](https://breakingnewsenglish.com/) level 4–5', '2 đoạn 100 từ: so sánh 2 thứ', 'Part 1: Technology'),
  P1(10, 'G10', 'P10', 'V10', 'App → Nghe · audio thật (VOA) bài 1 (Wright brothers); [VOA Science & Technology](https://learningenglish.voanews.com/z/1579)', 'Breaking News English level 5–6', 'Bài 150 từ: định nghĩa & mô tả', 'Part 2 đầu tiên: Describe a hobby'),
  P1(11, 'G11', 'P11', 'V11', 'App → Nghe · audio thật bài 2 (Yellowstone); shadowing 1 phút MP3 VOA', 'Graded reader stage 4; app bài đọc "nguồn Wikipedia" 1 bài', 'Bài 150 từ: nếu… thì…', 'Part 2: Describe a person'),
  P1(12, 'G12', 'P12', 'V12', 'App → Nghe · audio thật bài 3 (Pearl S. Buck); TED-Ed phụ đề Anh', 'Graded reader; app bài đọc nguồn Wikipedia 1 bài', 'Bài 150 từ: ý kiến có lý do', 'Part 2: Describe a place', { mock: 'MT1', milestone: 'MT1: làm lại Cam 10 Test 1 L+R + Writing T2 + Speaking P2, so với tuần 0' }),

  { w: 13, phase: 2, lessons: ['L0', 'L1', 'R0', 'R1', 'W0', 'S0', 'S1', 'G13', 'T1'], focus: 'Tổng quan bài thi; Form completion; T/F/NG; tiêu chí Writing; Part 1', listen: 'Sau L1: bài mẫu [Note completion](https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test) trên ielts.org (có transcript); app Nghe · audio thật bài 4', read: 'Sau R1: bài mẫu T/F/NG trên ielts.org; app bài đọc rw1', write: 'Đọc [PDF bài mẫu Writing có band + nhận xét giám khảo](https://ielts.org/cdn/computer-delivered-sample-tests-academic-writing/ielts-academic-writing-example-responses-to-parts-1-and-2-with-band-scores-and-examiner-comments.pdf)' },
  { w: 14, phase: 2, lessons: ['L2', 'R2', 'W1', 'S2', 'G14', 'T2'], focus: 'Multiple choice; Y/N/NG; Task 1 cấu trúc & overview; Part 1 10 chủ đề', listen: 'Sau L2: 2 bài mẫu Multiple choice trên ielts.org; app Nghe · audio thật bài 5–6', read: 'Sau R2: app bài đọc rd3, rd9 (Y/N/NG); [IELTS Liz Reading](https://ieltsliz.com/ielts-reading-lessons-information-and-tips/)' },
  { w: 15, phase: 2, lessons: ['L3', 'R3', 'W2', 'S3', 'G15', 'T3'], focus: 'Matching; Matching headings; Line graph; Part 2 bố cục', listen: 'App Nghe · audio thật bài 7; [BC Listening B2](https://learnenglish.britishcouncil.org/free-resources/listening/b2)', read: 'Sau R3: app bài đọc rd2, rd10, rw5 (headings)' },
  { w: 16, phase: 2, lessons: ['L4', 'R4', 'W3', 'S4', 'G16', 'T4'], mock: 'MT2', focus: 'Map labelling; Matching information; Bar/table; Part 2 kể chuyện', listen: 'Sau L4: bài mẫu Plan/map/diagram labelling trên ielts.org; app Nghe · audio thật bài 8', read: 'Sau R4: app bài đọc rd4, rd11, rw6 (matching information)' },
  { w: 17, phase: 2, lessons: ['L5', 'R5', 'W4', 'S5', 'G17', 'T5'], focus: 'Sentence completion; Matching features; Pie & mixed; Part 2 nơi chốn/sự kiện', listen: 'Sau L5: bài mẫu Sentence completion ielts.org; app Nghe · audio thật bài 9', read: 'Sau R5: app bài đọc rd5, rw2, rd11 (matching features)' },
  { w: 18, phase: 2, lessons: ['L6', 'R6', 'W5', 'S6', 'G18', 'T6'], focus: 'Table/flow-chart; Sentence completion; Process; Part 3 cấu trúc ý kiến', listen: 'Sau L6: bài mẫu Table + Flow-chart completion ielts.org; app Nghe · audio thật bài 10', read: 'Sau R6: app bài đọc rd1, rd7, rw7; VOA Everyday Grammar "Common Sentence Patterns" phần 1–2' },
  { w: 19, phase: 2, lessons: ['L7', 'R7', 'W6', 'S7', 'G19', 'T7'], focus: 'Short answer & Part 3 nhiều người; Summary completion; Map; Part 3 so sánh/dự đoán', listen: 'Sau L7: bài mẫu Short answer ielts.org; [BC Listening C1](https://learnenglish.britishcouncil.org/free-resources/listening/c1) 1 bài', read: 'Sau R7: app bài đọc rd6, rd3, rw4, rw8 (summary); VOA Sentence Patterns phần 3–4' },
  { w: 20, phase: 2, lessons: ['L8', 'R8', 'W7', 'S8', 'G20', 'T8'], mock: 'MT3', focus: 'Part 4 lecture; MC & short answer; Task 2 nhận diện 5 dạng; phát âm trong Speaking', listen: 'Đề Listening đầy đủ 40 câu trên ielts.org (nếu chưa làm trong MT); VOA As It Is 1 bài/ngày', read: 'Sau R8: app bài đọc rd12, rw3; đề Reading đầy đủ ielts.org' },
  { w: 21, phase: 2, lessons: ['R9', 'W8', 'S9', 'T9'], listen: 'Luyện Part 1+2 trọn (2 đề Cambridge)', focus: 'Diagram labelling; Opinion essay; Speaking P1–2 ghép' },
  { w: 22, phase: 2, lessons: ['R10', 'W9', 'S10', 'T10'], listen: 'Luyện Part 3+4 trọn (2 đề)', focus: 'Quản lý thời gian Reading; Discuss both views; Part 3 nâng cao; ôn G13–G16' },
  { w: 23, phase: 2, lessons: ['W10', 'T11', 'A1'], listen: '2 đề Listening đầy đủ', read: '2 đề Reading đầy đủ', speak: 'Speaking đầy đủ 11–14 phút ghi âm, tự chấm', focus: 'Advantages/disadvantages; AWL 1–2' },
  { w: 24, phase: 2, lessons: ['W11', 'T12', 'A2'], mock: 'MT4', listen: '2 đề Listening', read: '2 đề Reading', speak: 'Speaking đầy đủ', focus: 'Problem/solution; AWL 3–4' },
  { w: 25, phase: 2, lessons: ['W12', 'A3'], listen: '2 đề Listening', read: '2 đề Reading', speak: 'Speaking đầy đủ', focus: 'Two-part question; AWL 5–6; ôn T1–T6' },
  { w: 26, phase: 2, lessons: ['W13'], listen: '2 đề Listening', read: '2 đề Reading', speak: 'Speaking đầy đủ', focus: 'Phát triển ý PEEL; sửa lỗi ngữ pháp từ sổ lỗi; ôn T7–T12' },
  { w: 27, phase: 2, lessons: ['W14'], listen: '2 đề Listening', read: '2 đề Reading', speak: 'Speaking đầy đủ', focus: 'Tự sửa bài theo 4 tiêu chí; collocation học thuật' },
  { w: 28, phase: 2, lessons: [], mock: 'MT5', listen: 'Ôn dạng bài sai nhiều nhất', read: 'Ôn dạng bài sai nhiều nhất', write: 'Viết lại 3 bài tệ nhất', speak: 'Speaking đầy đủ', focus: 'Ôn + MT5. Điều kiện sang Giai đoạn 3: L ≥ 26, R ≥ 25, W ~5.5, S ~5.5', milestone: 'Mốc tuần 28' },

  { w: 29, phase: 3, lessons: ['X1'], mock: 'MT6', write: '1 T2 + 1 T1 (viết lại bài trong MT)', speak: '2 buổi', focus: 'Chu trình 2 tuần bắt đầu: thi thử + phân tích 3 lượt' },
  { w: 30, phase: 3, lessons: ['G21'], write: '2 T2 + 2 T1', speak: '3 buổi (1 với người thật/AI)', focus: 'Luyện điểm yếu từ MT6; sửa lỗi mạo từ, hòa hợp S-V' },
  { w: 31, phase: 3, lessons: ['X2'], mock: 'MT7', write: '1 T2 + 1 T1', speak: '2 buổi', focus: 'Thi thử + phân tích' },
  { w: 32, phase: 3, lessons: ['G22'], write: '2 T2 + 2 T1', speak: '3 buổi', focus: 'Luyện điểm yếu; giới từ & collocation thường sai' },
  { w: 33, phase: 3, lessons: [], mock: 'MT8', write: '1 T2 + 1 T1', speak: '2 buổi', focus: 'Thi thử + phân tích' },
  { w: 34, phase: 3, lessons: ['G23'], write: '2 T2 + 2 T1', speak: '3 buổi', focus: 'Luyện điểm yếu; nhất quán thì, câu dài an toàn' },
  { w: 35, phase: 3, lessons: [], mock: 'MT9', write: '1 T2 + 1 T1', speak: '2 buổi', focus: 'Thi thử + phân tích' },
  { w: 36, phase: 3, lessons: ['G24'], write: '2 T2 + 2 T1', speak: '3 buổi', focus: 'Luyện điểm yếu; đảo ngữ, câu chẻ, hedging (cho 7+)', milestone: 'Mốc tuần 36: L ≥ 29, R ≥ 28, W ~6.0, S ~6.0' },
  { w: 37, phase: 3, lessons: [], mock: 'MT10', write: '1 T2 + 1 T1', speak: '2 buổi', focus: 'Thi thử + phân tích' },
  { w: 38, phase: 3, lessons: ['A4'], write: '2 T2 + 2 T1', speak: '3 buổi', focus: 'Luyện điểm yếu; AWL 7–10' },
  { w: 39, phase: 3, lessons: [], mock: 'MT11', write: '1 T2 + 1 T1', speak: '2 buổi', focus: 'Thi thử + phân tích' },
  { w: 40, phase: 3, lessons: ['X3'], write: '2 T2 + 2 T1', speak: '3 buổi', focus: 'Luyện điểm yếu; ĐĂNG KÝ THI (ngày thi tuần 48–50)', milestone: 'Đăng ký thi tuần này' },

  { w: 41, phase: 4, lessons: ['X4'], mock: 'MT12', focus: 'Thi thử điều kiện phòng thi: sáng, liền 2h45, không nghỉ' },
  { w: 42, phase: 4, lessons: [], mock: 'MT13', focus: 'Chỉ luyện 2 dạng bài sai nhiều nhất, không học gì mới' },
  { w: 43, phase: 4, lessons: [], mock: 'MT14', focus: 'Speaking với người thật ít nhất 2 buổi' },
  { w: 44, phase: 4, lessons: [], mock: 'MT15', focus: 'Quyết định giữ/lùi ngày thi', milestone: 'Mốc tuần 44: L ≥ 30, R ≥ 30, W ~6.5, S ~6.5' },
  { w: 45, phase: 4, lessons: [], mock: 'MT16', focus: 'Viết lại 5 bài Writing tốt nhất thành bài mẫu của riêng mình' },
  { w: 46, phase: 4, lessons: [], mock: 'MT17', focus: 'Đọc lại toàn bộ sổ lỗi, gạch lỗi đã hết' },
  { w: 47, phase: 4, lessons: [], focus: 'Không đề mới. Làm lại Listening Part 3–4 và Reading passage 3 các đề sai nhiều. Ngủ đủ, dậy theo giờ thi' },
  { w: 48, phase: 4, lessons: [], focus: 'THI THẬT. Checklist ngày thi trong bài X4', milestone: 'Thi thật' }
];

window.WEEKLY_TEMPLATE = {
  1: {
    1: ['Bài ngữ pháp tuần này (30 phút): đọc cốt lõi, chép ví dụ, tự đặt 3 ví dụ', 'Bài tập ngữ pháp trong Murphy (30 phút), chấm, ghi lỗi', 'Flashcard từ vựng (20 phút)', 'Nghe 3 lượt theo nguồn tuần (20 phút)'],
    2: ['Bài phát âm tuần này (30 phút), ghi âm cặp tối thiểu', 'Đọc graded reader / nguồn tuần (30 phút), tóm tắt 3 câu nói to', 'Flashcard (20 phút)', 'Shadowing 10 phút + chính tả 5 phút'],
    3: ['Chủ đề từ vựng tuần này: đọc danh sách, học flashcard chủ đề (30 phút)', 'Nghe 3 lượt + chép chính tả 3–5 câu (30 phút)', 'Flashcard (20 phút)', 'Nói: trả lời 3 câu Part 1, ghi âm, nghe lại (20 phút)'],
    4: ['Ôn ngữ pháp: làm quiz cuối bài + bài tập còn lại (30 phút)', 'Viết theo yêu cầu tuần (30 phút), đưa Write & Improve/AI sửa', 'Flashcard (20 phút)', 'Nghe 20 phút'],
    5: ['Nói: 5 câu Part 1 ghi âm, nghe lại, nói lại lần 2 (30 phút)', 'Đọc 30 phút', 'Flashcard (20 phút)', '**Việc thật** 20 phút (mục Tiếng Anh thực tế)'],
    6: ['Ôn cả tuần: đọc lại sổ lỗi, làm lại câu sai (60 phút)', 'Sửa bài viết + **viết lại không nhìn bản sửa** (45 phút)', 'Xem phim/podcast tiếng Anh không phụ đề Việt (45 phút)'],
    0: ['Nghỉ. Tối đa flashcard 15 phút + 30 phút tiếng Anh cho vui']
  },
  2: {
    1: ['Bài Listening tuần này (30 phút) + làm 1 part đúng dạng, chữa kỹ (20 phút)', 'Flashcard (20 phút)', 'Nghe nguồn khó (BBC News, podcast bản xứ) 3 lượt (20 phút)'],
    2: ['Bài Reading tuần này (30 phút) + 1 passage bấm giờ 20 phút, chữa', 'Flashcard (20 phút)', 'Shadowing 10 phút bằng audio Listening Cambridge'],
    3: ['Bài Writing tuần này (30 phút) + viết 1 bài theo bài học, bấm giờ (20–40 phút)', 'Flashcard (20 phút)'],
    4: ['Bài Speaking tuần này (30 phút) + ghi âm 15 phút, tự chấm', 'Ngữ pháp trung cấp tuần này (30 phút)', 'Flashcard (20 phút)'],
    5: ['Từ vựng IELTS chủ đề tuần (30 phút)', '1 Listening part + 1 Reading passage (40 phút)', '**Việc thật** 20 phút'],
    6: ['Thi thử theo lịch (tuần có MT) hoặc 2 part Listening + 2 passage Reading (60–90 phút)', 'Sửa bài Writing tuần + viết lại (45 phút)', 'Speaking trọn 11–14 phút ghi âm (20 phút)'],
    0: ['Nghỉ. Flashcard 15 phút']
  },
  3: {
    1: ['Tuần lẻ: thi thử Listening + Reading liền 1h40, nhập điểm. Tuần chẵn: luyện 2 dạng bài yếu nhất (60 phút)', 'Flashcard (15 phút)'],
    2: ['Writing Task 2 (40 phút) + Task 1 (20 phút) bấm giờ', 'Phân tích lỗi lượt 1 (nếu tuần thi thử) (30 phút)'],
    3: ['Phân tích lỗi lượt 2–3: làm lại câu sai, ghi sổ lỗi (45 phút)', 'Flashcard (15 phút)', 'Nghe/đọc tự do 20 phút'],
    4: ['Speaking buổi 1: trọn 14 phút ghi âm + tự chấm + nói lại Part 2 (40 phút)', 'Ngữ pháp sửa lỗi tuần này (30 phút)'],
    5: ['Viết lại 1 bài Writing theo nhận xét (30 phút)', 'Luyện dạng bài yếu (30 phút)', '**Việc thật** 20 phút'],
    6: ['Speaking buổi 2 với người thật/AI (30 phút)', 'Writing thêm 1 T2 + 1 T1 (tuần chẵn) hoặc đọc lại sổ lỗi (60 phút)', 'Flashcard ôn (15 phút)'],
    0: ['Nghỉ. Flashcard 15 phút']
  },
  4: {
    1: ['Thi thử trọn bộ L+R+W liền 2h45 vào buổi sáng, đúng giờ thi thật. Nhập điểm.', 'Chiều: nghỉ'],
    2: ['Phân tích lỗi 3 lượt bài thi thử (60 phút)', 'Flashcard ôn thẻ cũ (15 phút)'],
    3: ['Writing 2 task bấm giờ 60 phút, tự chấm + AI chấm', 'Nghe 20 phút tự do'],
    4: ['Speaking đầy đủ 14 phút ghi âm + tự chấm (40 phút)', 'Đọc lại sổ lỗi (20 phút)'],
    5: ['Luyện 2 dạng bài yếu nhất (60 phút)', '**Việc thật** 20 phút'],
    6: ['Speaking với người thật (30 phút)', 'Làm lại 1 Listening Part 3–4 + 1 Reading passage 3 đề cũ (60 phút)'],
    0: ['Nghỉ. Ngủ đúng giờ.']
  }
};

window.MOCKS = [
  { id: 'MT0', week: 0, test: 'Cambridge 10 Test 1', scope: 'L + R + Writing T2 (30 phút) + Speaking P2 ghi âm', note: 'Bài kiểm tra đầu vào. Không cần đạt điểm gì. Dùng để chọn tuần bắt đầu.' },
  { id: 'MT1', week: 12, test: 'Cambridge 10 Test 1 (làm lại)', scope: 'L + R + cùng đề W2 + cùng cue card S2', note: 'So với MT0. Điều kiện sang Giai đoạn 2: L ≥ 15, R ≥ 15.' },
  { id: 'MT2', week: 16, test: 'Cambridge 11 Test 1', scope: 'Đầy đủ 4 kỹ năng', note: 'Thi thử đầy đủ đầu tiên. Làm Writing cả 2 task trong 60 phút.' },
  { id: 'MT3', week: 20, test: 'Cambridge 12 Test 1', scope: 'Đầy đủ', note: 'Mốc tuần 20: L ≥ 20, R ≥ 20, W ~5.0, S ~5.0' },
  { id: 'MT4', week: 24, test: 'Cambridge 13 Test 1', scope: 'Đầy đủ', note: '' },
  { id: 'MT5', week: 28, test: 'Cambridge 14 Test 1', scope: 'Đầy đủ', note: 'Mốc tuần 28: L ≥ 26, R ≥ 25, W ~5.5, S ~5.5' },
  { id: 'MT6', week: 29, test: 'Cambridge 15 Test 1', scope: 'Đầy đủ', note: 'Bắt đầu chu trình 2 tuần' },
  { id: 'MT7', week: 31, test: 'Cambridge 15 Test 2', scope: 'Đầy đủ', note: '' },
  { id: 'MT8', week: 33, test: 'Cambridge 16 Test 1', scope: 'Đầy đủ', note: '' },
  { id: 'MT9', week: 35, test: 'Cambridge 16 Test 2', scope: 'Đầy đủ', note: '' },
  { id: 'MT10', week: 37, test: 'Cambridge 17 Test 1', scope: 'Đầy đủ', note: 'Mốc tuần 36 kiểm tra ở đây: L ≥ 29, R ≥ 28, W ~6.0, S ~6.0' },
  { id: 'MT11', week: 39, test: 'Cambridge 17 Test 2', scope: 'Đầy đủ', note: '' },
  { id: 'MT12', week: 41, test: 'Cambridge 18 Test 1', scope: 'Đầy đủ, điều kiện phòng thi', note: 'Sáng, liền 2h45, không nghỉ, chuyển đáp án ra giấy' },
  { id: 'MT13', week: 42, test: 'Cambridge 18 Test 2', scope: 'Đầy đủ, điều kiện phòng thi', note: '' },
  { id: 'MT14', week: 43, test: 'Cambridge 19 Test 1', scope: 'Đầy đủ, điều kiện phòng thi', note: '' },
  { id: 'MT15', week: 44, test: 'Cambridge 19 Test 2', scope: 'Đầy đủ, điều kiện phòng thi', note: 'Mốc tuần 44: L ≥ 30, R ≥ 30, W ~6.5, S ~6.5 → giữ ngày thi' },
  { id: 'MT16', week: 45, test: 'Cambridge 19 Test 3 (hoặc Cam 20 Test 1)', scope: 'Đầy đủ', note: '' },
  { id: 'MT17', week: 46, test: 'Cambridge 19 Test 4 (hoặc Cam 20 Test 2)', scope: 'Đầy đủ', note: 'Lần cuối. Tuần 47 không đề mới.' }
];

/* [số câu đúng tối thiểu, band], giảm dần */
window.BAND_TABLES = {
  listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5]],
  readingAC: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5]],
  readingGT: [[40, 9], [39, 8.5], [37, 8], [36, 7.5], [34, 7], [32, 6.5], [30, 6], [27, 5.5], [23, 5], [19, 4.5], [15, 4], [12, 3.5], [9, 3], [6, 2.5]]
};

window.BAND_NOTES = `
**Overall band** = trung bình cộng 4 kỹ năng, làm tròn đến 0.5 gần nhất: phần lẻ .25 → lên .5, phần lẻ .75 → lên 1.0. Ví dụ L 6.5, R 6.0, W 5.5, S 6.0 = 24/4 = 6.0. L 7.0, R 6.5, W 6.0, S 6.0 = 25.5/4 = 6.375 → 6.5.

**Writing**: Task 2 nặng gấp đôi Task 1. Bốn tiêu chí (Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) mỗi tiêu chí 25%.

**Speaking**: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation, mỗi tiêu chí 25%.

**Thi trên máy**: Listening có 2 phút kiểm tra thay vì 10 phút chuyển đáp án. Reading có highlight và ghi chú. Writing có đếm từ. Kết quả 3–5 ngày.

**One Skill Retake**: thi lại một kỹ năng trong vòng 60 ngày sau kỳ thi gốc (nếu trung tâm có). Hữu ích khi 3 kỹ năng đạt mà 1 kỹ năng hụt 0.5.
`;

window.MOCK_INTRO = `
### Quy tắc thi thử

- **Một đề, một lần.** Không tua audio, không tra từ, không dừng giờ. Thi thử sai điều kiện cho số liệu sai, và số liệu sai làm bạn luyện sai chỗ.
- **Đúng thứ tự thật**: Listening → Reading → Writing liền nhau (2h45). Speaking làm cùng ngày hoặc hôm sau, ghi âm trọn 11–14 phút.
- **Chuyển đáp án ra giấy** (thi giấy) hoặc gõ thẳng (thi máy) đúng như bạn sẽ thi. Chính tả sai = sai.
- **Không làm đề mới khi chưa phân tích xong đề cũ** (tab "Phân tích sau thi"). Phân tích mới là lúc học; làm đề chỉ là lúc đo.
- **Nguồn đề**: Cambridge IELTS 10–20 (đề thật đã thi). Mỗi cuốn 4 đề. Lịch trên dùng mỗi cuốn 1–2 đề; các đề còn lại dùng để luyện từng part/passage trong tuần.
- Writing và Speaking không tự chấm chính xác được. Dùng checklist tự chấm + AI chấm sơ bộ hằng tuần + người chấm thật (giáo viên, gia sư) ít nhất 2 tuần/lần từ Giai đoạn 3.
`;

window.MOCK_RULES = `
### Điều kiện làm bài giống thi thật

- Listening: nghe **một lần**, bằng tai nghe hoặc loa, không nhìn transcript. Đọc trước câu hỏi trong thời gian cho phép (khoảng 30–45 giây mỗi part).
- Reading: 60 phút cho 3 passage, **không có thời gian chuyển đáp án**. Ghi thẳng vào answer sheet.
- Writing: 60 phút cả 2 task. Task 1 tối đa 20 phút. Hết giờ dừng bút kể cả chưa xong.
- Speaking: ghi âm liền từ Part 1 đến Part 3, không dừng để nghĩ lại.
- Tắt điện thoại, đóng các tab khác. Chuẩn bị nước, bút chì, tẩy nếu thi giấy.
`;

window.MOCK_ANALYSIS = `
## Phân tích sau thi thử — quy trình 3 lượt (90 phút, làm trong 2 ngày sau khi thi)

Mục tiêu không phải "biết đáp án đúng" mà là **biết vì sao mình sai**, và chuyển cái đó thành việc luyện cụ thể cho tuần sau.

### Lượt 1 — Chấm & phân loại (20 phút, ngay sau khi thi)
1. Chấm Listening, Reading bằng đáp án. Nhập điểm vào tab "Nhập điểm".
2. Với **mỗi câu sai hoặc đoán đúng**, ghi vào 1 trong 5 nhóm:
   - **A. Không biết từ** (từ khóa trong câu hỏi hoặc trong bài).
   - **B. Biết từ nhưng không nhận ra paraphrase** (bài nói "reduce", câu hỏi viết "cut down").
   - **C. Nghe/đọc được nhưng hiểu sai ý** (bẫy phủ định, bẫy sửa lại "no, actually…", T/F/NG lẫn False với Not Given).
   - **D. Kỹ thuật**: hết giờ, sai chính tả, vượt giới hạn từ, điền sai ô, quên số nhiều.
   - **E. Mất tập trung** / bỏ lỡ đoạn audio / đọc nhầm dòng.
3. Đếm số câu theo nhóm. Nhóm nhiều nhất là việc luyện tuần sau.

### Lượt 2 — Làm lại không giới hạn giờ (40 phút, hôm sau)
1. Làm lại **tất cả câu sai** với transcript/bài đọc mở, không giới hạn thời gian. Nếu làm lại vẫn sai → vấn đề là ngôn ngữ (nhóm A/B/C), cần học. Nếu làm lại đúng → vấn đề là tốc độ/kỹ thuật (nhóm D/E), cần luyện quy trình.
2. Listening: nghe lại đoạn chứa đáp án 3 lần, chép chính tả câu đó, gạch chỗ nối âm/dạng yếu đã làm bạn nghe sót.
3. Reading: gạch câu trong bài chứa đáp án, viết cặp paraphrase (từ trong câu hỏi ↔ từ trong bài) vào flashcard. Mỗi đề cho ra 10–15 cặp paraphrase, đó là kho từ tốt nhất bạn có.
4. Mọi lỗi nhóm C, D vào **Sổ lỗi** với nhãn dạng bài (ví dụ "TFNG", "MC distractor", "giới hạn từ").

### Lượt 3 — Writing & Speaking (30 phút)
1. Writing: đọc lại bài sau 1 ngày, tự chấm theo checklist. Đánh dấu 5 lỗi ngữ pháp, 3 chỗ lặp từ, 1 chỗ lạc đề. Nhờ AI chấm bằng prompt có sẵn. **Viết lại** bài trong tuần chẵn (không nhìn bản cũ), so sánh.
2. Speaking: nghe lại bản ghi, đếm số lần dừng dài (> 3 giây), số lần "uhm", lỗi thì, âm cuối thiếu. Chọn 1 câu Part 3 trả lời tệ nhất, viết câu trả lời tốt hơn, nói lại 3 lần.
3. Ghi 3 việc cụ thể cho tuần sau vào ghi chú của thi thử (ví dụ: "luyện Map labelling 3 bài", "chép chính tả Part 3", "20 cặp paraphrase từ passage 2").

### Khi nào thấy kết quả?
Listening/Reading thường tăng 1–2 câu mỗi thi thử nếu phân tích đúng. Nếu **3 lần liên tiếp không tăng**, đổi cách: giảm số đề, tăng thời gian chữa, quay lại chép chính tả và đọc chậm có phân tích câu.
`;

window.ABOUT = `
Bộ lộ trình này do bạn và Claude soạn ngày 17/10/2026 cho mục tiêu IELTS 6.5–7.0 và dùng được tiếng Anh trong công việc. Toàn bộ chạy offline trong trình duyệt, không có máy chủ, dữ liệu nằm trong localStorage.

- Giả định: bắt đầu ~A2, 48 tuần, 10–14 giờ/tuần, thi Academic (General Training có ghi chú riêng).
- Bài học trong app là bản cô đọng. Bài tập mở rộng dựa vào sách Murphy (Essential/English Grammar in Use), English Vocabulary in Use, Cambridge IELTS 10–20 (xem mục Tài nguyên).
- Thứ app **không làm được**: chấm nội dung Writing/Speaking (chỉ phân tích hình thức + checklist), cung cấp audio Listening thật (dùng đọc máy để luyện số/tên/câu; đề thật dùng Cambridge). Ghi âm Speaking cần mở bằng Chrome/Edge và cho phép micro.
- Các file Markdown cùng thư mục (README, 01, 02) là bản tài liệu đọc được không cần trình duyệt.
`;
