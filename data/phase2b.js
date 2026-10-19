/* ===== Giai đoạn 2 (phần 2): Writing W0–W14 ===== */
window.LESSONS_P2.push(
{ id: 'W0', type: 'writing', title: 'Tổng quan Writing và 4 tiêu chí chấm', goal: 'Hiểu giám khảo chấm gì, band 5–6–7 khác nhau ở đâu, và 6 lỗi làm mất band dù viết hay.', md: `
### Hai task, 60 phút
| | Task 1 (Academic) | Task 1 [GT] | Task 2 |
|---|---|---|---|
| Yêu cầu | Mô tả biểu đồ/bảng/quy trình/bản đồ | Viết thư (trang trọng / nửa trang trọng / thân mật) | Bài luận ý kiến |
| Số từ | ≥ 150 | ≥ 150 | ≥ 250 |
| Thời gian | 20 phút | 20 phút | 40 phút |
| Trọng số | 1/3 | 1/3 | **2/3** |

### 4 tiêu chí (mỗi tiêu chí 25%)
| Tiêu chí | Band 5 | Band 6 | Band 7 |
|---|---|---|---|
| **Task Achievement / Response** (trả lời đúng và đủ đề) | Trả lời một phần; ý chung chung; T1 không có overview rõ | Trả lời đủ các phần nhưng ý phát triển chưa đều; có overview | Trả lời đầy đủ, lập trường rõ xuyên suốt, ý được phát triển và có ví dụ; T1 overview rõ, chọn đúng điểm chính |
| **Coherence & Cohesion** (mạch lạc, liên kết) | Chia đoạn chưa hợp lý; từ nối sai hoặc lặp | Chia đoạn hợp lý; từ nối đủ nhưng đôi khi máy móc | Chia đoạn logic, mỗi đoạn một ý trung tâm; từ nối tự nhiên, dùng cả tham chiếu (this, such) |
| **Lexical Resource** (từ vựng) | Vốn từ hạn chế, lỗi gây khó hiểu | Đủ từ cho đề, có cố gắng dùng từ ít phổ biến, lỗi không gây hiểu lầm | Từ vựng linh hoạt, collocation tự nhiên, ít lỗi chính tả/word form |
| **Grammatical Range & Accuracy** | Ít câu phức; lỗi nhiều | Có câu đơn và câu phức; lỗi vẫn có nhưng không cản trở | Nhiều cấu trúc, **đa số câu không lỗi**; lỗi nhỏ, hiếm |

Band 6 → 7 không phải "từ khó hơn", mà là: **đa số câu không lỗi** + **ý phát triển sâu** + **overview/lập trường rõ**.

### 6 lỗi mất band dù viết tốt
1. **Thiếu từ** (dưới 150/250): trừ TA/TR.
2. **Lạc đề / trả lời một phần**: đề hỏi 2 câu, trả lời 1; đề hỏi "to what extent", không nói mức độ.
3. **Template học thuộc** quá lộ ("In this day and age, it is a controversial issue…"): giám khảo được hướng dẫn không tính câu thuộc lòng.
4. **Task 1 không có overview** hoặc **có ý kiến cá nhân** → trần band 5 TA.
5. **Không chia đoạn** hoặc chia bừa.
6. **Chép lại đề** nguyên văn trong mở bài: không tính từ, không điểm.

### Lịch luyện Giai đoạn 2
Mỗi tuần 1 bài theo bài học W + 1 bài tự chọn. Quy trình: viết bấm giờ (trang Viết) → phân tích tự động → checklist → nhờ AI/giáo viên chấm → **viết lại** vào thứ 7.
`, quiz: [
  { t: 'mc', q: 'Task 2 chiếm bao nhiêu điểm Writing?', o: ['1/2', '2/3', '1/3'], a: 1, why: 'Gấp đôi Task 1.' },
  { t: 'mc', q: 'Lỗi nào khiến Task 1 bị trần band 5 ở Task Achievement?', o: ['dùng ít từ nối', 'không có overview', 'viết 160 từ'], a: 1, why: 'Overview là bắt buộc.' },
  { t: 'mc', q: 'Band 7 ở Grammar yêu cầu:', o: ['không có lỗi nào', 'đa số câu không lỗi', 'dùng nhiều câu rất dài'], a: 1, why: '"Frequent error-free sentences".' },
  { t: 'mc', q: 'Chép lại đề nguyên văn trong mở bài:', o: ['được tính từ', 'không được tính từ', 'được cộng điểm'], a: 1, why: 'Phải paraphrase.' }
]},

{ id: 'W1', type: 'writing', title: 'Task 1: cấu trúc 4 đoạn và câu overview', goal: 'Viết Task 1 theo khung Intro–Overview–Body 1–Body 2; chọn đúng 2–3 điểm chính cho overview.', md: `
### Khung 4 đoạn (150–190 từ, 20 phút)
1. **Introduction (1 câu)**: paraphrase đề — biểu đồ gì, về cái gì, ở đâu, khi nào, đơn vị. *The chart shows…* → *The bar chart compares / illustrates / gives information about…*
2. **Overview (2–3 câu)**: các đặc điểm **nổi bật nhất**, **không số liệu chi tiết**. Bắt đầu bằng *Overall, …* Giám khảo tìm đoạn này đầu tiên.
3. **Body 1**: nhóm dữ liệu thứ nhất với số liệu cụ thể.
4. **Body 2**: nhóm dữ liệu thứ hai, so sánh.

Không có kết luận, không có ý kiến, không giải thích nguyên nhân.

### Chọn gì cho overview
- Biểu đồ theo thời gian: **xu hướng chung** (tăng/giảm/dao động), **cao nhất/thấp nhất**, **thay đổi lớn nhất**, **ngoại lệ**.
- Biểu đồ tĩnh (so sánh): **lớn nhất/nhỏ nhất**, **khoảng cách đáng kể**, **điểm giống nhau**.
- Quy trình: **số bước, điểm đầu/cuối, tuyến tính hay tuần hoàn**.
- Bản đồ: **thay đổi lớn nhất** (ví dụ từ nông thôn thành khu dân cư), **cái gì giữ nguyên**.

### Nhóm dữ liệu cho body
Không mô tả từng đường/từng cột theo thứ tự đề. Nhóm theo **điểm chung**: các mục tăng vs các mục giảm; hai mục lớn vs ba mục nhỏ; đầu kỳ vs cuối kỳ. Mỗi body 3–4 số liệu là đủ.

### Mẫu overview tốt vs kém
- Kém: *Overall, there were many changes in the chart. The number of cars was 20 million in 2000.* (chung chung + số liệu chi tiết)
- Tốt: *Overall, car ownership rose steadily in all four countries over the period, with Germany remaining the highest throughout, while the sharpest increase occurred in Vietnam.*

### Luyện
Lấy 3 biểu đồ (trang Viết → Task 1), **chỉ viết intro + overview** cho mỗi cái (5 phút/cái). Tuần sau mới viết bài đủ.
`, quiz: [
  { t: 'mc', q: 'Đoạn overview nên:', o: ['nêu 2–3 điểm nổi bật, không số liệu chi tiết', 'liệt kê mọi số liệu', 'đưa ý kiến cá nhân'], a: 0, why: 'Tổng quan, không chi tiết.' },
  { t: 'mc', q: 'Task 1 có cần kết luận không?', o: ['có, 1 câu', 'không', 'tùy'], a: 1, why: 'Overview thay vai trò kết luận.' },
  { t: 'mc', q: 'Cách nhóm dữ liệu tốt cho body:', o: ['theo thứ tự đề liệt kê', 'theo điểm chung (tăng/giảm, lớn/nhỏ)', 'ngẫu nhiên'], a: 1, why: 'Nhóm theo logic.' },
  { t: 'mc', q: 'Câu nào là intro paraphrase tốt cho "The graph shows the number of visitors to a museum from 2010 to 2020"?', o: ['The graph shows the number of visitors to a museum from 2010 to 2020.', 'The line graph illustrates how many people visited a museum over a ten-year period between 2010 and 2020.', 'This graph is about a museum.'], a: 1, why: 'Paraphrase đủ thông tin.' }
]},

{ id: 'W2', type: 'writing', title: 'Task 1: Line graph và ngôn ngữ xu hướng', goal: 'Dùng đúng động từ/danh từ xu hướng, trạng từ mức độ, giới từ to/by/from…to.', md: `
### Động từ xu hướng
- Tăng: *rise, increase, grow, climb, go up; soar, surge, rocket (mạnh)*.
- Giảm: *fall, decrease, decline, drop, go down; plummet, plunge, slump (mạnh)*.
- Ổn định: *remain stable/steady/constant, level off, plateau, stay at*.
- Dao động: *fluctuate*. Đỉnh/đáy: *peak at, reach a peak/high of; hit a low of, bottom out at*.
- Phục hồi: *recover, rebound*.

### Danh từ xu hướng (để đổi cấu trúc)
*a rise/increase/growth in … · a fall/decrease/decline/drop in … · a peak of … · fluctuations in …* → *There was a sharp rise in sales.*

### Mức độ
- Mạnh: *sharply, dramatically, significantly, considerably, substantially, rapidly* (adj: *sharp, dramatic…*).
- Vừa: *steadily, gradually, moderately*.
- Nhẹ: *slightly, marginally, modestly*.

### Giới từ — hay sai nhất
- *rise **to** 50%* (mức đạt tới) · *rise **by** 10%* (lượng tăng) · *rise **from** 40% **to** 50%* · *a rise **of** 10% **in** sales* · *at 20%* (đứng ở mức) · *between 2010 and 2020* · *over/during the period* · *in 2015*.

### Thì
Năm trong quá khứ → quá khứ đơn. Có năm tương lai (dự báo) → *is expected/projected to rise, will reach*. Không có năm → hiện tại đơn.

### Mẫu body (line graph 3 nước, 2000–2020)
*In 2000, car ownership in Germany stood at 40 million, far above the other two countries. It then rose steadily to reach 48 million in 2020. Vietnam, by contrast, started from just 2 million but experienced the most dramatic growth, climbing to 15 million by the end of the period. Thailand's figure fluctuated between 8 and 10 million before levelling off at around 9 million after 2015.*

### Luyện
Viết đủ 1 bài line graph (trang Viết), đếm xem bạn dùng được bao nhiêu động từ khác nhau — mục tiêu ≥ 6, không lặp.
`, quiz: [
  { t: 'fill', q: 'Sales rose ___ 20% ___ 30% between 2010 and 2015. (từ … đến)', a: ['from, to', 'from to', 'from,to'], why: 'rise from X to Y. Gõ "from, to".' },
  { t: 'mc', q: '"The figure increased ___ 5%" — tăng thêm 5 điểm:', o: ['to', 'by', 'at'], a: 1, why: 'by = lượng tăng.' },
  { t: 'mc', q: 'Từ nào diễn tả tăng mạnh nhất?', o: ['rose steadily', 'soared', 'edged up'], a: 1, why: 'soar = tăng vọt.' },
  { t: 'fill', q: 'Unemployment ___ (đạt đỉnh) at 12% in 2009.', a: ['peaked'], why: 'peak at.' },
  { t: 'mc', q: 'Biểu đồ có năm 2030 (dự báo). Thì phù hợp:', o: ['quá khứ đơn', 'is expected to / will', 'hiện tại tiếp diễn'], a: 1, why: 'Dự báo.' },
  { t: 'mc', q: '"There was a ___ decline" — giảm nhẹ:', o: ['slight', 'dramatic', 'steady'], a: 0, why: 'slight = nhẹ.' }
]},

{ id: 'W3', type: 'writing', title: 'Task 1: Bar chart, table và ngôn ngữ so sánh', goal: 'So sánh số liệu tĩnh bằng nhiều cấu trúc; chọn số liệu đại diện trong bảng nhiều ô.', md: `
### Biểu đồ tĩnh vs động
- **Tĩnh** (một thời điểm): ngôn ngữ **so sánh**, không có "tăng/giảm".
- **Động** (nhiều thời điểm): kết hợp xu hướng (W2) và so sánh.

### Cấu trúc so sánh
- *X is higher/lower than Y · X is the highest/lowest · X is twice/three times as high as Y · X is double/triple Y · X accounts for twice the figure for Y*.
- *compared with/to Y · in comparison with · whereas / while · by contrast · similarly · likewise*.
- *respectively*: *Japan and Korea spent 3% and 2.5% respectively.*
- *far / considerably / slightly / marginally + higher*.
- *the same as · similar to · roughly equal · a (significant) gap between*.

### Bảng (table)
Nhiều ô → không mô tả hết. Chọn: **cao nhất, thấp nhất, chênh lệch lớn nhất, mẫu lặp lại** (ví dụ "cột A luôn cao nhất ở mọi hàng"). Overview từ mẫu đó. Mỗi body 4–5 số liệu.

### Số và đơn vị
*20 million people · 25% of respondents · $3.2 billion · 15 per 1,000 · approximately/roughly/around/just over/just under/nearly/almost*. Không viết "20 millions".

### Mẫu body (bar chart chi tiêu 5 nước)
*Germany had by far the highest spending on research, at 3.1% of GDP, followed by Japan at 2.9%. The United States and France recorded similar figures, roughly 2.7% and 2.2% respectively. Spain, in contrast, spent considerably less than the others, with just 1.2%, less than half the German figure.*

### Luyện
1 bài bar chart + 1 bài table. Kiểm tra: không có "increase/decrease" trong bài tĩnh; có ít nhất 4 cấu trúc so sánh khác nhau.
`, quiz: [
  { t: 'mc', q: 'Biểu đồ tĩnh (một năm) KHÔNG nên dùng:', o: ['higher than', 'rose sharply', 'twice as many'], a: 1, why: 'Không có thời gian → không có xu hướng.' },
  { t: 'fill', q: 'Japan and Korea spent 3% and 2.5% ___. (theo thứ tự tương ứng)', a: ['respectively'], why: 'respectively đứng cuối.' },
  { t: 'mc', q: '"X is twice as high as Y" tương đương:', o: ['X is half of Y', 'X is double Y', 'X is similar to Y'], a: 1, why: 'Gấp đôi.' },
  { t: 'mc', q: 'Với bảng 30 ô, bạn nên:', o: ['mô tả mọi ô', 'chọn cao nhất/thấp nhất/mẫu lặp lại', 'chỉ mô tả hàng đầu'], a: 1, why: 'Chọn lọc là một phần của Task Achievement.' },
  { t: 'mc', q: 'Cách viết đúng:', o: ['20 millions people', '20 million people', '20 million of people'], a: 1, why: 'million không -s khi có số đứng trước.' }
]},

{ id: 'W4', type: 'writing', title: 'Task 1: Pie chart và biểu đồ kết hợp', goal: 'Dùng ngôn ngữ tỷ lệ; tổ chức bài khi có 2 biểu đồ khác loại.', md: `
### Ngôn ngữ tỷ lệ
- Động từ: *account for, make up, constitute, represent, comprise*: *Rent accounts for 35% of spending.*
- Phân số: *a quarter (25%), a third (33%), two-fifths (40%), half, three-quarters (75%), the vast majority (>80%), a small minority (<10%)*.
- Xấp xỉ: *just over a third · roughly a quarter · nearly half · approximately one in five*.
- *the largest/smallest proportion/share/percentage of … · the remaining 10% · the rest*.

### Hai pie chart (hai năm hoặc hai nhóm)
So sánh **cùng một mục** giữa hai pie: *The share of rent rose from 30% to 35%, whereas spending on food fell from 25% to 18%.* Overview: mục lớn nhất ở cả hai, thay đổi lớn nhất.

### Biểu đồ kết hợp (ví dụ: bar + line, pie + table)
- Intro: nêu cả hai: *The bar chart shows…, while the table gives details of…*
- Overview: 1 câu cho mỗi biểu đồ (hoặc 1 câu chung nếu có liên hệ rõ).
- Body 1: biểu đồ 1. Body 2: biểu đồ 2. **Chỉ liên hệ hai biểu đồ nếu đề/dữ liệu cho thấy rõ** (ví dụ pie về nguồn thu và bar về tổng thu).
- Thời gian 20 phút không đổi → mỗi body ngắn gọn, 3 số liệu.

### Mẫu body (pie chi tiêu hộ gia đình)
*Housing was the largest single expense, accounting for just over a third of the household budget (35%). Food and transport made up a further 20% and 15% respectively, meaning these three categories together represented 70% of all spending. The remaining 30% was divided fairly evenly between entertainment, clothing and other items, none of which exceeded 12%.*

### Luyện
1 bài pie (2 pie) + 1 bài kết hợp. Kiểm tra giới hạn 190 từ — bài kết hợp hay bị dài.
`, quiz: [
  { t: 'mc', q: '"Rent ___ 35% of spending" — chiếm:', o: ['accounts for', 'rises to', 'compares'], a: 0, why: 'account for = chiếm.' },
  { t: 'mc', q: '40% là:', o: ['a quarter', 'two-fifths', 'a third'], a: 1, why: '2/5.' },
  { t: 'mc', q: 'Với biểu đồ kết hợp, bạn nên liên hệ hai biểu đồ:', o: ['luôn luôn', 'chỉ khi dữ liệu cho thấy rõ', 'không bao giờ'], a: 1, why: 'Liên hệ gượng ép = suy diễn.' },
  { t: 'fill', q: 'Housing was the largest expense, ___ just over a third of the budget. (chiếm — dùng V-ing của make up)', a: ['making up'], why: 'making up / accounting for.' }
]},

{ id: 'W5', type: 'writing', title: 'Task 1: Process (quy trình) — [GT] thư trang trọng', goal: 'Mô tả quy trình bằng bị động + từ chỉ trình tự; [GT] viết thư trang trọng đúng bố cục.', md: `
### Process (Academic)
- **Không có số liệu** → không có xu hướng. Overview = **số bước, điểm bắt đầu/kết thúc, tuyến tính hay tuần hoàn (cycle), tự nhiên hay nhân tạo**.
- Thì: **hiện tại đơn**, đa số **bị động** (quy trình nhân tạo: *the beans are roasted*); quy trình tự nhiên dùng chủ động (*water evaporates*).
- Trình tự: *First / To begin with · Next / Then / After that · Once X has been …, · At the following stage · Subsequently · Meanwhile · Finally / In the last stage*.
- Mỗi bước 1 câu; gộp 2 bước nhỏ bằng *before/after + V-ing* hoặc *, after which*: *The mixture is heated to 90°C, after which it is poured into moulds.*
- Dùng tên bộ phận/vật liệu trong hình; thêm động từ phù hợp (*is collected, is transported, is filtered, is stored, is packaged, is delivered*).

### Mẫu (quy trình sản xuất 6 bước, trích)
*Overall, the process consists of six main stages, beginning with the harvesting of raw cocoa and ending with the packaging of chocolate bars. It is a linear, man-made process.*
*First, ripe cocoa pods are harvested and the beans are removed. These beans are then fermented for several days before being dried in the sun. Once dry, they are transported to a factory, where they are roasted at high temperature…*

### [GT] Thư trang trọng (formal letter)
- Mở: *Dear Sir/Madam,* (không biết tên) → kết *Yours faithfully,*. *Dear Mr Smith,* → *Yours sincerely,*.
- Đoạn 1: mục đích: *I am writing to complain about / to enquire about / to apply for / to request…*
- Đoạn 2–4: **mỗi gạch đầu dòng trong đề = một đoạn**, đủ chi tiết (tên, ngày, số).
- Kết: hành động mong đợi: *I would appreciate it if you could… / I look forward to hearing from you.*
- Không viết tắt (I'm → I am), không ngôn ngữ nói, câu đầy đủ, lịch sự (*would, could, I would be grateful*).

### Luyện
1 bài process (Academic) hoặc 1 thư trang trọng (GT) trong 20 phút.
`, quiz: [
  { t: 'mc', q: 'Overview của bài process nên nói về:', o: ['số liệu cao nhất', 'số bước, điểm đầu/cuối, tuyến tính hay tuần hoàn', 'ý kiến về quy trình'], a: 1, why: 'Không có số liệu.' },
  { t: 'mc', q: 'Thì và thể phù hợp cho quy trình nhân tạo:', o: ['quá khứ đơn chủ động', 'hiện tại đơn bị động', 'tương lai'], a: 1, why: '"The beans are roasted."' },
  { t: 'mc', q: '[GT] "Dear Sir/Madam" kết bằng:', o: ['Yours sincerely', 'Yours faithfully', 'Best wishes'], a: 1, why: 'Không biết tên → faithfully.' },
  { t: 'fill', q: 'The mixture is heated, ___ which it is poured into moulds. (sau đó)', a: ['after'], why: '…, after which …' }
]},

{ id: 'W6', type: 'writing', title: 'Task 1: Map — [GT] thư thân mật / nửa trang trọng', goal: 'Mô tả thay đổi giữa hai bản đồ bằng bị động quá khứ/hoàn thành và ngôn ngữ vị trí.', md: `
### Map (Academic)
- Thường 2 bản đồ cùng nơi ở 2 thời điểm (quá khứ–hiện tại hoặc hiện tại–tương lai). Overview = **thay đổi lớn nhất về tính chất** (nông thôn → đô thị, nhà ở → thương mại, thêm hạ tầng giao thông) + **cái gì giữ nguyên**.
- Động từ thay đổi (bị động): *was demolished / knocked down · was replaced by / with · was converted into · was extended / expanded / enlarged · was built / constructed / added · was relocated / moved to · was cut down (trees) · was widened (roads) · remained unchanged / was retained*.
- Thì: hai bản đồ quá khứ → quá khứ đơn; quá khứ–hiện tại → hiện tại hoàn thành (*has been replaced*); hiện tại–tương lai → *will be / is planned to be / is going to be built*.
- Vị trí: *to the north/south of · in the north-east corner · along the coast · opposite · adjacent to · on the site of the former … · in the centre · on the outskirts · across the river from*.
- Tổ chức body: theo **khu vực** (bắc/nam, trong/ngoài) hoặc theo **loại thay đổi** (xóa bỏ / xây mới / giữ nguyên).

### Mẫu body (trích)
*The most significant change took place in the north of the town, where the farmland that had surrounded the village in 1990 was replaced by a large housing estate and a supermarket. The road running east–west was widened and extended to connect with a new bypass. In the centre, the church and the primary school were retained, although the school was enlarged with an additional building on its eastern side.*

### [GT] Thư thân mật / nửa trang trọng
- Thân mật (bạn bè): *Dear Minh, / Hi Minh,* … *Hope you're well!* … rút gọn OK (*I'm, can't*), từ nối hội thoại (*Anyway, By the way*) … kết *Best wishes, / Take care, / Love,*.
- Nửa trang trọng (hàng xóm, sếp quen): *Dear Mr Tan,* … lịch sự nhưng không cứng … *Kind regards,*.
- Vẫn phải trả lời **đủ 3 gạch đầu dòng**, mỗi ý một đoạn; ≥150 từ.

### Luyện
1 bài map hoặc 1 thư thân mật, 20 phút. Với map: trước khi viết, liệt kê 6 thay đổi theo bảng 2 cột (trước / sau).
`, quiz: [
  { t: 'mc', q: 'Bản đồ 1990 và 2020: thì phù hợp để mô tả thay đổi:', o: ['hiện tại đơn', 'quá khứ đơn hoặc hiện tại hoàn thành', 'tương lai'], a: 1, why: 'Thay đổi đã xảy ra.' },
  { t: 'fill', q: 'The old factory ___ (bị phá bỏ) and replaced by a park. (bị động quá khứ của demolish)', a: ['was demolished'], why: 'was demolished.' },
  { t: 'mc', q: 'Overview cho map nên nêu:', o: ['từng tòa nhà mới', 'thay đổi lớn nhất về tính chất và cái gì giữ nguyên', 'ý kiến về quy hoạch'], a: 1, why: 'Tổng quan.' },
  { t: 'mc', q: '[GT] Thư cho bạn thân nên kết bằng:', o: ['Yours faithfully', 'Best wishes', 'Yours sincerely'], a: 1, why: 'Thân mật.' }
]},

{ id: 'W7', type: 'writing', title: 'Task 2: nhận diện 5 dạng đề và kế hoạch 5 phút', goal: 'Đọc đề là biết dạng, biết cần trả lời gì, và có dàn ý trong 5 phút.', md: `
### 5 dạng đề
| Dạng | Dấu hiệu trong đề | Phải có |
|---|---|---|
| **Opinion** | *To what extent do you agree or disagree? / Do you agree or disagree? / What is your opinion?* | Lập trường rõ từ mở bài, giữ xuyên suốt; nếu "to what extent" → nói mức độ (completely / largely / partly) |
| **Discussion** | *Discuss both views and give your own opinion.* | Trình bày **cả hai** quan điểm công bằng + ý kiến của bạn (mở + kết, hoặc đoạn riêng) |
| **Advantages / Disadvantages** | *What are the advantages and disadvantages? / Do the advantages outweigh the disadvantages?* | Có "outweigh" → **phải chọn bên**; không có → cân bằng |
| **Problem / Solution** | *What problems does this cause? What solutions can you suggest? / causes … effects … measures* | Vấn đề cụ thể + giải pháp **gắn với** vấn đề đó; ai làm (government/individuals/companies) |
| **Two-part (direct questions)** | Hai câu hỏi liên tiếp: *Why is this? Is it a positive or negative development?* | Trả lời **cả hai**, mỗi câu một đoạn |

### Cấu trúc chung 4 đoạn (250–290 từ, 40 phút)
1. **Mở (40–50 từ)**: paraphrase đề (1 câu) + thesis trả lời câu hỏi (1 câu). Không hỏi tu từ, không "nowadays".
2. **Thân 1 (80–100 từ)**: câu chủ đề → giải thích → ví dụ → liên kết về đề.
3. **Thân 2 (80–100 từ)**: ý thứ hai (hoặc quan điểm còn lại / mặt còn lại).
4. **Kết (30–40 từ)**: nhắc lại lập trường bằng từ khác. Không thêm ý mới.

### Kế hoạch 5 phút (viết ra giấy nháp)
1. Gạch **chủ đề** và **câu hỏi** trong đề. Xác định dạng.
2. Viết lập trường một dòng.
3. Hai ý chính (mỗi thân một ý). Hỏi "tại sao?" hai lần cho mỗi ý để có phần giải thích.
4. Một ví dụ cụ thể cho mỗi ý (nơi, ai, cái gì — có thể "In Vietnam, …", "In my company, …").
5. Từ vựng chủ đề: 5–6 từ từ T1–T12.

### Luyện
Lấy 10 đề (trang Viết → Task 2), **chỉ làm bước kế hoạch 5 phút** cho mỗi đề, chưa viết. Tuần sau bắt đầu viết đủ.
`, quiz: [
  { t: 'mc', q: '"Some people think children should start school at 7. Others believe 4 is better. Discuss both views and give your opinion." Dạng:', o: ['Opinion', 'Discussion', 'Problem/solution'], a: 1, why: 'Discuss both views.' },
  { t: 'mc', q: '"Do the advantages of online learning outweigh the disadvantages?" Bạn phải:', o: ['liệt kê cân bằng, không chọn bên', 'chọn bên nào nặng hơn và bảo vệ', 'chỉ nêu ưu điểm'], a: 1, why: 'outweigh = so sánh → phải kết luận.' },
  { t: 'mc', q: '"To what extent do you agree?" cần:', o: ['chỉ agree hoặc disagree', 'nói rõ mức độ đồng ý', 'thảo luận hai bên không kết luận'], a: 1, why: 'Mức độ.' },
  { t: 'mc', q: 'Mở bài Task 2 tốt gồm:', o: ['câu hỏi tu từ + nowadays', 'paraphrase đề + thesis', 'chỉ paraphrase đề'], a: 1, why: 'Thesis bắt buộc.' },
  { t: 'mc', q: '"Why do many people move to cities? Is this a positive or negative development?" Dạng:', o: ['Two-part', 'Opinion', 'Advantages/disadvantages'], a: 0, why: 'Hai câu hỏi trực tiếp.' }
]},

{ id: 'W8', type: 'writing', title: 'Task 2: Opinion essay (agree / disagree)', goal: 'Viết bài ý kiến có lập trường rõ, hai ý phát triển sâu, kết luận nhất quán.', md: `
### Hai cách
- **Một chiều** (dễ giữ nhất quán): hoàn toàn đồng ý/không đồng ý; 2 thân = 2 lý do.
- **Cân bằng** ("partly agree"): thân 1 = mặt bạn đồng ý; thân 2 = mặt bạn không đồng ý; kết nói rõ nghiêng về đâu. Khó hơn, chỉ chọn khi thật sự thấy cả hai.

### Ngôn ngữ lập trường
*I firmly believe that… · I completely/largely/partly agree that… · In my view, … · While I accept that…, I would argue that… · This essay will argue that…* (tránh "I think" lặp lại).

### Bài mẫu (272 từ) — đề: *Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?*

*It is sometimes argued that secondary school students should be required to do voluntary work in their communities as part of their education. I largely agree with this view, because such programmes develop skills that classrooms cannot teach, although schools must be careful about how the work is organised.*

*The main benefit of compulsory community service is that it exposes young people to real responsibility. Teenagers who spend a few hours a week helping at a care home or cleaning a local park learn to manage time, cooperate with strangers and see the consequences of their effort. In Vietnam, for example, students who join school volunteer clubs are often noticeably more confident and mature than those who only study. These are exactly the qualities that employers and universities say young people lack.*

*However, making the work compulsory carries a risk. If schools simply force students to complete a fixed number of hours, the activity can become a box-ticking exercise that teaches resentment rather than responsibility. To avoid this, schools should offer a range of placements and let students choose, and the hours should be modest enough not to interfere with study. When this is done well, the fact that participation is required ensures that every student, not only the already motivated ones, gains the experience.*

*In conclusion, I believe community service should be part of every high school programme, provided it is well designed. The benefits in maturity and practical skills clearly justify making it a requirement.*

### Phân tích bài mẫu
Mở: paraphrase + thesis có mức độ ("largely agree") + báo trước điều kiện. Thân 1: PEEL đủ (point → explain → example Vietnam → link "exactly the qualities…"). Thân 2: thừa nhận rủi ro rồi giải quyết → vẫn giữ lập trường. Kết: nhắc lập trường + điều kiện. Từ nối vừa đủ, không nhồi.

### Luyện
Viết 1 bài opinion 40 phút. Sau khi phân tích, so với bài mẫu về **cấu trúc** (không so từ vựng).
`, quiz: [
  { t: 'mc', q: 'Trong bài opinion, lập trường phải xuất hiện ở:', o: ['chỉ kết luận', 'mở bài và kết luận, nhất quán xuyên suốt', 'chỉ mở bài'], a: 1, why: 'Rõ từ đầu, giữ đến cuối.' },
  { t: 'mc', q: 'Chọn "partly agree" khi:', o: ['không biết viết gì', 'thật sự thấy cả hai mặt và có thể kết luận nghiêng về đâu', 'đề quá dài'], a: 1, why: 'Cân bằng khó giữ nhất quán.' },
  { t: 'mc', q: 'Câu nào là thesis tốt?', o: ['This is a controversial topic.', 'I largely agree that community service should be compulsory, provided it is well designed.', 'There are many opinions about this.'], a: 1, why: 'Trả lời câu hỏi + mức độ.' },
  { t: 'mc', q: 'Kết luận Task 2 không nên:', o: ['nhắc lại lập trường', 'thêm ý mới', 'dùng từ khác với mở bài'], a: 1, why: 'Ý mới làm bài mất cân đối.' }
]},

{ id: 'W9', type: 'writing', title: 'Task 2: Discuss both views and give your opinion', goal: 'Trình bày hai quan điểm công bằng, phát triển đủ, và nêu ý kiến riêng không mâu thuẫn.', md: `
### Cấu trúc
- Mở: paraphrase cả hai quan điểm + ý kiến của bạn (1 câu).
- Thân 1: quan điểm A — tại sao người ta nghĩ vậy (giải thích + ví dụ), **kể cả khi bạn không đồng ý**. Dùng *Those who support… argue that… / Proponents of… / On the one hand…*
- Thân 2: quan điểm B — tương tự. *On the other hand… / Others believe… / Advocates of…*
- Ý kiến riêng: trong mở + kết (gọn), hoặc câu cuối thân 2, hoặc đoạn thứ 3 ngắn. Phải **khớp** với lập luận đã trình bày.
- Kết: tóm hai bên + ý kiến.

### Lỗi thường gặp
- Chỉ liệt kê "some people think X, other people think Y" mà không giải thích **tại sao** → TR band 5.
- Ý kiến riêng mâu thuẫn với thân bài (bênh A mạnh rồi kết luận B).
- Quên nêu ý kiến riêng khi đề yêu cầu.
- Viết "In my opinion" ở mở rồi không nói gì thêm.

### Bài mẫu (268 từ) — đề: *Some people think that the best way to reduce crime is to give longer prison sentences. Others believe there are better alternative ways. Discuss both views and give your opinion.*

*Crime reduction is a priority for every society, but there is disagreement about whether harsher prison terms or alternative approaches work better. While long sentences have a role for serious offences, I believe that alternatives are more effective for the majority of crimes.*

*Supporters of longer sentences argue that prison works in two ways. First, it removes dangerous individuals from society, so they cannot reoffend while they are locked up. Second, the threat of many years in jail is believed to deter others from committing similar crimes. For violent offenders in particular, the public understandably expects a punishment that reflects the harm done, and a long sentence delivers this sense of justice.*

*However, those who favour alternatives point out that most crime is non-violent and often linked to poverty, addiction or lack of education. Locking such offenders away for years is expensive and tends to make them more, not less, likely to reoffend, because they leave prison with no skills and a criminal record. Programmes such as community service, drug treatment and job training address the causes of crime directly. In Norway, for instance, a focus on rehabilitation has produced one of the lowest reoffending rates in the world.*

*In my opinion, both approaches are needed, but the balance should favour prevention and rehabilitation. Long sentences should be reserved for the small number of offenders who pose a real danger, while resources are directed towards stopping people from offending in the first place.*

### Luyện
1 bài discussion 40 phút. Kiểm tra: mỗi quan điểm có ít nhất một lý do + một ví dụ; ý kiến riêng không mâu thuẫn.
`, quiz: [
  { t: 'mc', q: 'Trong discussion essay, quan điểm bạn KHÔNG đồng ý cần:', o: ['bỏ qua', 'trình bày công bằng với lý do và ví dụ', 'chê ngay'], a: 1, why: '"Discuss both views".' },
  { t: 'mc', q: 'Ý kiến riêng nên:', o: ['chỉ ở kết luận', 'xuất hiện ở mở và kết, khớp với thân bài', 'không cần'], a: 1, why: 'Đề yêu cầu "give your opinion".' },
  { t: 'mc', q: 'Cụm nào giới thiệu quan điểm thứ hai?', o: ['Firstly', 'On the other hand, others believe', 'In conclusion'], a: 1, why: 'Chuyển sang bên kia.' }
]},

{ id: 'W10', type: 'writing', title: 'Task 2: Advantages / disadvantages (có và không có outweigh)', goal: 'Phân biệt hai biến thể và viết đúng yêu cầu của mỗi biến thể.', md: `
### Hai biến thể
- **"What are the advantages and disadvantages?"**: trình bày cả hai, không bắt buộc kết luận bên nào nặng hơn (nhưng có thể).
- **"Do the advantages outweigh the disadvantages?"**: đây là câu hỏi **ý kiến** → phải trả lời có/không từ mở bài và giữ nhất quán. Thân 1: bên nhẹ hơn (ngắn gọn, thừa nhận); thân 2: bên nặng hơn (dài hơn, mạnh hơn). Hoặc hai thân cân nhau rồi kết luận.

### Từ vựng
- Ưu: *advantage, benefit, merit, upside, plus, strength* · *One major benefit is that… · This brings significant advantages in terms of…*
- Nhược: *disadvantage, drawback, downside, weakness, risk, cost* · *The main drawback is… · A further disadvantage is…*
- Cân: *outweigh, offset, compensate for, on balance, overall, far greater than*.

### Bài mẫu (263 từ) — đề: *Many companies now allow employees to work from home. Do the advantages of this development outweigh the disadvantages?*

*Remote working has become common in many industries. Although it creates some real difficulties for teams and individuals, I believe its advantages clearly outweigh its disadvantages.*

*The drawbacks of working from home mainly concern communication and well-being. Colleagues who rarely meet in person may find it harder to build trust, and quick informal exchanges that solve problems in an office become slow email threads. Some employees also struggle to separate work from home life and end up working longer hours or feeling isolated. In my own company, new staff who joined during a fully remote period took noticeably longer to feel part of the team.*

*Nevertheless, the benefits are larger and affect more people. Most obviously, employees save hours of commuting every week, which they can spend on family, rest or exercise, and this generally improves both health and productivity. Companies benefit too: they can recruit from a much wider area, reduce office costs and retain staff who would otherwise leave for family reasons. The environmental gain from fewer car journeys is also significant. Importantly, the communication problems described above can be managed with regular video calls and occasional in-person meetings, whereas the time and cost of commuting cannot be reduced in any other way.*

*In conclusion, while remote working requires companies to make a deliberate effort to keep teams connected, the savings in time, money and stress for both employers and employees mean that its advantages are far greater than its disadvantages.*

### Luyện
1 bài "outweigh" 40 phút. Kiểm tra: mở bài có trả lời câu hỏi chưa? Thân bên bạn chọn có mạnh hơn và có phản hồi lại bên kia không?
`, quiz: [
  { t: 'mc', q: '"Do the advantages outweigh the disadvantages?" là dạng câu hỏi:', o: ['mô tả', 'ý kiến — phải trả lời có/không', 'kể chuyện'], a: 1, why: 'Cần lập trường.' },
  { t: 'mc', q: 'Từ nào nghĩa là nhược điểm?', o: ['merit', 'drawback', 'upside'], a: 1, why: 'drawback = downside.' },
  { t: 'mc', q: 'Trong bài outweigh, thân về bên bạn cho là nặng hơn nên:', o: ['ngắn hơn', 'dài hơn và có phản hồi lại bên kia', 'bằng nhau tuyệt đối'], a: 1, why: 'Thể hiện vì sao nặng hơn.' }
]},

{ id: 'W11', type: 'writing', title: 'Task 2: Problem / solution (causes / effects / measures)', goal: 'Nêu vấn đề cụ thể, giải pháp gắn với vấn đề, nói rõ ai làm.', md: `
### Biến thể
- *What problems does this cause? What solutions…?* → thân 1 vấn đề, thân 2 giải pháp.
- *What are the causes? What measures…?* → thân 1 nguyên nhân, thân 2 biện pháp.
- *What are the causes and effects?* → không cần giải pháp.
Đọc kỹ: nhầm "causes" với "problems" là lỗi lạc đề phổ biến.

### Nguyên tắc
- **Cụ thể**: không "it causes many problems" mà "it leads to traffic congestion and air pollution in city centres".
- **Giải pháp gắn với vấn đề**: vấn đề A → giải pháp cho A. Dùng *To address this, … / One way to tackle this problem is… / This could be solved by…*
- **Ai làm**: *governments (legislation, funding, taxes), local authorities, companies, schools, individuals/parents*.
- 2 vấn đề + 2 giải pháp là đủ; mỗi cái có giải thích và ví dụ.

### Từ vựng
*cause, lead to, result in, give rise to, contribute to, stem from, be attributed to · tackle, address, combat, alleviate, mitigate, curb, prevent, deter · impose, introduce, enforce, invest in, subsidise, raise awareness*.

### Bài mẫu (258 từ) — đề: *In many cities, the number of private cars is increasing rapidly. What problems does this cause, and what measures could be taken to solve them?*

*The rapid growth in car ownership is transforming cities around the world. This essay will discuss two serious problems it creates and suggest measures that governments and city authorities could take to address them.*

*The first and most visible problem is congestion. When roads built decades ago have to carry several times more vehicles, journey times rise sharply, and people spend hours each week sitting in traffic. In Ho Chi Minh City, for example, a ten-kilometre trip can take over an hour at peak times. The second problem is pollution: exhaust fumes from millions of engines are the main source of poor air quality in urban areas, and this is directly linked to respiratory diseases, particularly among children and the elderly.*

*Both problems can be reduced if city authorities make driving less attractive and the alternatives more attractive. To tackle congestion, cities could introduce charges for driving into the centre, as London has done, and use the revenue to expand bus and metro networks so that commuters have a realistic alternative. To cut pollution, governments could tax high-emission vehicles more heavily while subsidising electric cars and building safe cycle lanes. These measures work best together: a congestion charge without good public transport simply punishes people who have no other option.*

*In conclusion, the rise in private car use leads to congestion and dangerous air pollution, but a combination of charges, cleaner vehicles and investment in public transport could significantly reduce both problems.*

### Luyện
1 bài problem/solution 40 phút. Kiểm tra: mỗi giải pháp có nói rõ ai làm và giải quyết vấn đề nào không?
`, quiz: [
  { t: 'mc', q: 'Đề hỏi "causes and solutions", bạn viết về "problems" thay vì causes. Hậu quả:', o: ['không sao', 'lạc đề một phần → mất Task Response', 'được cộng điểm'], a: 1, why: 'Trả lời đúng câu hỏi.' },
  { t: 'mc', q: 'Giải pháp tốt trong Task 2 cần:', o: ['chung chung để an toàn', 'gắn với vấn đề cụ thể và nói rõ ai thực hiện', 'càng nhiều càng tốt'], a: 1, why: '2 giải pháp sâu > 5 giải pháp nông.' },
  { t: 'mc', q: 'Từ nào nghĩa là "giảm bớt" một vấn đề?', o: ['give rise to', 'alleviate', 'stem from'], a: 1, why: 'alleviate = mitigate.' }
]},

{ id: 'W12', type: 'writing', title: 'Task 2: Two-part questions', goal: 'Trả lời đủ hai câu hỏi, mỗi câu một đoạn, không bỏ sót.', md: `
### Đặc điểm
Đề nêu tình huống rồi hỏi **hai câu trực tiếp**: *Why is this happening? Is it a positive or negative development?* / *What are the reasons? How can this be improved?* / *Do you think this is a good idea? What other options are there?*

### Cấu trúc
- Mở: paraphrase tình huống + **trả lời ngắn cả hai câu** (1–2 câu).
- Thân 1: câu hỏi 1 (2 lý do có giải thích/ví dụ).
- Thân 2: câu hỏi 2 (lập trường + lý do, hoặc 2 phương án).
- Kết: tóm cả hai.

### Lỗi
- Chỉ trả lời câu 1 kỹ, câu 2 một dòng → TR thấp.
- Câu "positive or negative" trả lời "both" mà không nghiêng về đâu → thiếu lập trường. Có thể "largely positive" rồi thừa nhận một mặt tiêu cực.

### Bài mẫu (255 từ) — đề: *More and more people are choosing to live alone. Why is this? Is it a positive or negative development?*

*In many countries, the number of single-person households is rising steadily. This essay will outline two main reasons for this trend and argue that, on balance, it is a positive development, although it brings some social risks.*

*There are two principal reasons why people increasingly live alone. The first is economic: rising incomes mean that young professionals can afford their own flat rather than sharing with family or flatmates, and in cities like Hanoi this has become a sign of independence. The second is social change. People marry later, divorce is more accepted, and longer life expectancy means many older people outlive their partners. Together, these factors mean that at almost every stage of adult life, living alone is now a realistic and often preferred option.*

*I believe this development is mainly positive, because it reflects greater freedom and financial security. Adults who live alone can organise their time, space and money as they wish, and research consistently shows that people who choose solitude are not less happy than those in shared households. However, the trend does have a downside: elderly people living alone are more vulnerable to loneliness and to accidents going unnoticed. Societies therefore need to invest in community services and regular contact for older residents, so that independence does not turn into isolation.*

*In conclusion, people live alone mainly because they can afford to and because family patterns have changed. Although it creates challenges for the elderly, the trend is largely a sign of progress.*

### Luyện
1 bài two-part 40 phút. Đánh dấu trong bài: câu hỏi 1 được trả lời ở đâu, câu hỏi 2 ở đâu — mỗi câu phải có ít nhất 80 từ.
`, quiz: [
  { t: 'mc', q: 'Two-part question: mở bài nên:', o: ['chỉ paraphrase', 'paraphrase + trả lời ngắn cả hai câu', 'trả lời câu 1 thôi'], a: 1, why: 'Báo trước cả hai.' },
  { t: 'mc', q: '"Is it a positive or negative development?" Trả lời "both" không nghiêng về đâu:', o: ['đủ', 'thiếu lập trường rõ', 'lý tưởng'], a: 1, why: 'Cần "largely positive/negative".' },
  { t: 'mc', q: 'Mỗi câu hỏi trong two-part nên có ít nhất:', o: ['1 câu', 'khoảng 80 từ (một đoạn)', '150 từ'], a: 1, why: 'Cân đối hai đoạn thân.' }
]},

{ id: 'W13', type: 'writing', title: 'Phát triển ý: PEEL, ví dụ cụ thể, phản đề', goal: 'Biến một ý thành đoạn 90 từ sâu; nghĩ ra ý nhanh bằng 6 góc nhìn.', md: `
### PEEL — khung một đoạn thân
- **P**oint: câu chủ đề nêu ý chính (1 câu, chứa từ khóa của đề).
- **E**xplain: tại sao / như thế nào — hỏi "why?" hai lần: *Remote work saves time → because no commute → which means more rest and family time → which improves productivity.*
- **E**xample: cụ thể, có thể kiểm chứng kiểu "In Vietnam / In my company / A 2020 survey in the UK found…". Không bịa số liệu chính xác giả; "many surveys suggest" là đủ.
- **L**ink: kéo về đề/lập trường: *This is why…, Therefore…, This shows that…*

### Trước và sau
- Trước (nông, 35 từ): *Working from home is good. People save time. They are happier. Also companies save money. So it has many benefits.*
- Sau (PEEL, 92 từ): *The greatest benefit of working from home is the time it returns to employees. Without a daily commute, a typical office worker gains between five and ten hours a week, which can be spent on sleep, exercise or family. In my own team, people who switched to remote work reported feeling less tired by Friday and made fewer errors in their code. Because rested employees are more productive, this benefit is shared by the company as well, which is why many firms have kept remote working after the pandemic.*

### 6 góc nhìn để nghĩ ý nhanh (chọn 2 phù hợp đề)
**Tiền/kinh tế** · **Sức khỏe** · **Môi trường** · **Xã hội/quan hệ** · **Giáo dục/kỹ năng** · **Thời gian/tiện lợi**. Thêm trục **ai bị ảnh hưởng** (cá nhân, gia đình, công ty, chính phủ, thế hệ sau) và **ngắn hạn/dài hạn**.

### Phản đề (concession) — dấu hiệu band 7
Thừa nhận ý ngược rồi đáp lại: *Admittedly, … However, … · While it is true that…, this does not mean… · Critics might argue that…, but…* Một phản đề ngắn trong thân hoặc đoạn riêng làm lập luận thuyết phục hơn, miễn là bạn **đáp lại** nó.

### Luyện
Lấy 5 câu chủ đề bất kỳ, viết mỗi câu thành đoạn PEEL 80–100 từ (không cần viết cả bài). Đây là bài tập hiệu quả nhất cho Task Response.
`, quiz: [
  { t: 'mc', q: 'PEEL viết tắt của:', o: ['Point, Explain, Example, Link', 'Plan, Edit, Expand, List', 'Problem, Effect, Evidence, Logic'], a: 0, why: 'Khung một đoạn thân.' },
  { t: 'mc', q: 'Ví dụ tốt trong Task 2:', o: ['"In 2019, exactly 73.4% of Vietnamese workers…" (số chính xác bịa)', '"In my company, people who switched to remote work made fewer errors."', '"For example, it is good."'], a: 1, why: 'Cụ thể, hợp lý, không bịa số.' },
  { t: 'mc', q: 'Phản đề (concession) chỉ có giá trị khi:', o: ['chỉ nêu ra', 'bạn đáp lại nó và giữ lập trường', 'nó dài hơn ý chính'], a: 1, why: 'Thừa nhận rồi phản hồi.' },
  { t: 'mc', q: 'Cách phát triển phần Explain:', o: ['hỏi "why?" hai lần', 'thêm từ nối', 'lặp lại câu chủ đề'], a: 0, why: 'Chuỗi nguyên nhân – hệ quả.' }
]},

{ id: 'W14', type: 'writing', title: 'Tự sửa bài trong 5 phút và kỹ thuật paraphrase', goal: 'Bắt được 80% lỗi của chính mình; paraphrase bằng 4 kỹ thuật thay vì chỉ đổi từ đồng nghĩa.', md: `
### 5 phút soát bài — đọc 3 lượt nhanh, mỗi lượt một việc
1. **Lượt ngữ pháp** (2 phút): mạo từ trước danh từ đếm được số ít (*a problem, the government*); **-s ngôi ba** và **-s số nhiều**; thì nhất quán trong đoạn; *there is/are*; giới từ cụm quen (depend on).
2. **Lượt từ** (1,5 phút): từ lặp ≥3 lần → thay; word form (*economy/economic/economical*; *benefit (v/n)/beneficial*); từ "to" thừa sau modal.
3. **Lượt mạch** (1,5 phút): mỗi đoạn có câu chủ đề? Có từ nối sai vị trí (*however* giữa câu không có dấu chấm phẩy)? Câu quá dài (>35 từ) → cắt đôi. Kết luận có khớp mở bài?

### 10 lỗi người Việt soát được ngay
~~Government should~~ → *The government should / Governments should* · ~~peoples~~ → *people* · ~~a lot of problem~~ → *problems* · ~~in nowadays~~ → *nowadays / today* · ~~although… but~~ · ~~make people to do~~ → *make people do* · ~~discuss about~~ · ~~more and more + adj~~ (được) nhưng ~~more and more popular than~~ (sai) · ~~researches~~ → *research / studies* · ~~every people~~ → *everyone / every person*.

### Paraphrase — 4 kỹ thuật (dùng kết hợp, không chỉ đổi từ)
1. **Đồng nghĩa**: *important → crucial; children → young people; cities → urban areas* (chỉ đổi khi chắc nghĩa và collocation).
2. **Đổi word form**: *Pollution increased → There was an increase in pollution.* / *People rely on cars → People's reliance on cars…*
3. **Chủ động ↔ bị động**: *Governments should ban smoking → Smoking should be banned.*
4. **Đổi trật tự mệnh đề**: *Because fees are high, many students borrow → Many students borrow because fees are high.*

Ví dụ đề: *Some people think that universities should provide students with the skills they need for employment.* → *It is argued that the main role of higher education is to equip young people with the practical abilities that employers require.* (đồng nghĩa + đổi word form + đổi cấu trúc).

### Luyện
Lấy 3 bài cũ, soát theo 3 lượt, đếm lỗi tìm được. Viết lại 3 mở bài bằng 4 kỹ thuật.
`, quiz: [
  { t: 'fix', q: 'Government should invest more in education.', a: ['The government should invest more in education.', 'Governments should invest more in education.'], why: 'Danh từ đếm được số ít cần mạo từ, hoặc dùng số nhiều.' },
  { t: 'fix', q: 'There are a lot of problem in big cities.', a: ['There are a lot of problems in big cities.'], why: 'Số nhiều.' },
  { t: 'mc', q: 'Paraphrase "Governments should ban smoking in public places" bằng bị động:', o: ['Smoking in public places should be banned.', 'Governments ban smoking.', 'Smoking is bad in public.'], a: 0, why: 'Chủ động → bị động.' },
  { t: 'fix', q: 'Many researches show that exercise helps.', a: ['Much research shows that exercise helps.', 'Many studies show that exercise helps.'], why: 'research không đếm được.' },
  { t: 'mc', q: 'Lượt soát nào nên làm đầu tiên?', o: ['từ vựng', 'ngữ pháp (mạo từ, -s, thì)', 'mạch lạc'], a: 1, why: 'Lỗi ngữ pháp nhỏ nhiều nhất và dễ bắt nhất.' }
]}
);
