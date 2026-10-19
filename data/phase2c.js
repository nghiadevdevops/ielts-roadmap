/* ===== Giai đoạn 2 (phần 3): Speaking S0–S10 + ngữ pháp trung cấp G13–G20 ===== */
window.LESSONS_P2.push(
{ id: 'S0', type: 'speaking', title: 'Tổng quan Speaking và 4 tiêu chí', goal: 'Biết 3 part, giám khảo chấm gì, và 5 hiểu lầm làm mất điểm.', md: `
### Cấu trúc (11–14 phút, ghi âm, 1 giám khảo)
| Part | Thời gian | Nội dung | Độ dài trả lời |
|---|---|---|---|
| 1 | 4–5 phút | 3 chủ đề quen (work/study, home, + 1–2 chủ đề đời sống), ~10 câu | 2–4 câu mỗi câu hỏi |
| 2 | 3–4 phút | Cue card: 1 phút chuẩn bị (có giấy bút), nói 1–2 phút, 1 câu hỏi rounding-off | Nói liền 1,5–2 phút |
| 3 | 4–5 phút | Thảo luận trừu tượng liên quan Part 2, 4–6 câu | 30–45 giây mỗi câu |

### 4 tiêu chí (mỗi tiêu chí 25%)
| | Band 5 | Band 6 | Band 7 |
|---|---|---|---|
| **Fluency & Coherence** | Dừng nhiều, lặp, tự sửa; từ nối lạm dụng | Nói được dài, đôi khi mất mạch; từ nối có nhưng máy móc | Nói dài không mất mạch, dừng chủ yếu để tìm ý (không phải tìm từ), từ nối tự nhiên |
| **Lexical Resource** | Đủ nói chủ đề quen, paraphrase hạn chế | Đủ cho mọi chủ đề, có từ ít phổ biến nhưng đôi khi sai, paraphrase được | Linh hoạt, idiom/collocation tự nhiên, paraphrase hiệu quả |
| **Grammatical Range & Accuracy** | Câu đơn đúng, câu phức nhiều lỗi | Có câu phức, lỗi còn nhưng ít gây hiểu lầm | Nhiều câu phức, đa số câu không lỗi |
| **Pronunciation** | Hiểu được nhưng cần cố gắng; lỗi âm đều | Nhìn chung rõ, có trọng âm/ngữ điệu nhưng không đều | Rõ ràng, nhịp/trọng âm/ngữ điệu dùng để truyền nghĩa, ít lỗi |

### 5 hiểu lầm
1. *"Phải dùng từ khó"* → giám khảo chấm **tự nhiên và chính xác**; từ khó dùng sai bị trừ.
2. *"Học thuộc bài mẫu"* → giám khảo phát hiện và đổi câu hỏi; câu thuộc lòng không được tính.
3. *"Trả lời càng dài càng tốt"* → Part 1 dài quá bị ngắt; Part 3 lan man mất mạch.
4. *"Giọng Anh/Mỹ mới cao điểm"* → chấm **độ rõ** và **đặc điểm** (trọng âm, nối âm, ngữ điệu), không chấm giọng vùng.
5. *"Dừng là mất điểm"* → dừng để **nghĩ ý** là bình thường (dùng *Well, let me think…*); dừng để **tìm từ** mới là vấn đề.

### Quy tắc vàng
Nói **ý kiến thật** của bạn bằng tiếng Anh **đơn giản và đúng** nhanh hơn, tự nhiên hơn, cao điểm hơn ý kiến bịa bằng tiếng Anh phức tạp.

### Luyện tuần này
Ghi âm Part 1 (trang Nói), nghe lại, chấm 4 tiêu chí 4–8. Ghi điểm tự chấm làm mốc.
`, quiz: [
  { t: 'mc', q: 'Tiêu chí nào KHÔNG có trong Speaking?', o: ['Fluency & Coherence', 'Task Achievement', 'Pronunciation'], a: 1, why: 'Task Achievement là của Writing.' },
  { t: 'mc', q: 'Dừng để nghĩ ý với "Well, let me think…":', o: ['bị trừ nặng', 'bình thường, chấp nhận được', 'cấm'], a: 1, why: 'Dừng tìm từ mới là vấn đề.' },
  { t: 'mc', q: 'Part 2 bạn có bao nhiêu phút chuẩn bị?', o: ['0', '1', '3'], a: 1, why: '1 phút, có giấy bút.' },
  { t: 'mc', q: 'Giọng Việt Nam rõ ràng, đúng trọng âm và ngữ điệu:', o: ['bị trừ vì không phải giọng bản xứ', 'không bị trừ — chấm độ rõ và đặc điểm', 'tối đa band 6'], a: 1, why: 'Không chấm giọng vùng.' }
]},

{ id: 'S1', type: 'speaking', title: 'Part 1: kỹ thuật mở rộng câu trả lời', goal: 'Mọi câu Part 1 trả lời 2–4 câu tự nhiên theo công thức Trả lời → Lý do → Chi tiết/Ví dụ → (Cảm xúc/Đối chiếu).', md: `
### Công thức A-R-E-(F)
- **A**nswer: trả lời thẳng câu hỏi (1 câu).
- **R**eason: *because / since / as / the main reason is…*
- **E**xample/detail: *for example / for instance / like / especially / usually…*
- **F**eeling / contrast (tùy): *which I really enjoy / although… / so…*

### Ví dụ
- *Do you like your job?* → *Yes, mostly. (A) I'm a software tester, and I like it because every day there's a new problem to solve. (R) Last week, for instance, I spent two days finding a bug that only happened on Fridays. (E) It was frustrating but really satisfying when I found it. (F)*
- *How do you usually get to work?* → *By motorbike, like most people in Da Nang. (A) It's only a fifteen-minute ride, so it's quicker than the bus. (R) The only problem is the rain in October, when I sometimes get completely soaked. (E)*
- *Did you like your hometown as a child?* (quá khứ) → *I did, yes. (A) It was a small town, so I could cycle everywhere with my friends. (R) We used to spend whole afternoons by the river. (E) Looking back, I think I was very lucky. (F)*

### Nguyên tắc
- Trả lời câu hỏi được hỏi; **đổi thì** theo câu hỏi (*Did you…* → quá khứ; *Will you…* → tương lai).
- Không trả lời 1 từ (*Yes.*), không độc thoại 1 phút.
- Không hỏi lại giám khảo trừ khi không nghe rõ: *Sorry, could you repeat that?* (được phép, không mất điểm).
- Câu "Do you like X?" không bắt buộc "yes": *Not really, to be honest…* rồi lý do, hoàn toàn ổn.

### Cụm mở đầu tự nhiên (thay cho im lặng)
*Well, … · Actually, … · To be honest, … · I'd say… · It depends, but… · That's an interesting question. · I've never really thought about it, but…* (không lạm dụng, mỗi cụm ≤ 2 lần).

### Luyện
Trang Nói → Part 1: 8 câu, ghi âm, nghe lại. Đếm câu nào thiếu R hoặc E. Mục tiêu: 8/8 có đủ A-R-E.
`, quiz: [
  { t: 'mc', q: '"Do you like cooking?" Câu trả lời tốt nhất:', o: ['Yes.', 'Yes, I do, because it helps me relax after work. I usually cook simple Vietnamese dishes, especially at weekends.', 'Cooking is a very important skill in modern life and people should learn it.'], a: 1, why: 'A-R-E, tự nhiên, đúng câu hỏi.' },
  { t: 'mc', q: '"Did you enjoy school?" nên trả lời bằng thì:', o: ['hiện tại', 'quá khứ', 'tương lai'], a: 1, why: 'Theo thì câu hỏi.' },
  { t: 'mc', q: 'Không nghe rõ câu hỏi, bạn nên:', o: ['đoán và trả lời', 'hỏi "Sorry, could you repeat that?"', 'im lặng'], a: 1, why: 'Được phép, không mất điểm.' },
  { t: 'mc', q: 'Độ dài phù hợp cho một câu Part 1:', o: ['1 từ', '2–4 câu', '1 phút'], a: 1, why: 'Ngắn gọn có mở rộng.' }
]},

{ id: 'S2', type: 'speaking', title: 'Part 1: 12 chủ đề thường gặp và từ vựng', goal: 'Có ý và từ cho mọi chủ đề Part 1 phổ biến; tránh thuộc lòng.', md: `
### Nguyên tắc chuẩn bị
Với mỗi chủ đề, chuẩn bị **ý thật** (không phải câu thuộc) + 5–6 từ/cụm. Trả lời thật về đời bạn luôn nhanh hơn bịa.

### 12 chủ đề
1. **Work / Study**: *What do you do? Why did you choose it? What's the hardest part? Would you change it?* — từ: *responsible for, deadline, rewarding, challenging, colleagues, work from home, a steep learning curve*.
2. **Home / Accommodation**: *House or flat? Favourite room? Change anything?* — *spacious, cosy, on the third floor, within walking distance, rent, neighbourhood*.
3. **Hometown**: *Where from? Famous for? Changed much? Good place for young people?* — *coastal city, well-known for, has developed rapidly, infrastructure, laid-back*.
4. **Daily routine**: *Morning person? Best part of day? Weekends differ?* — *get up early, commute, wind down, hectic, routine, catch up with*.
5. **Hobbies / Free time**: *What do you do? Since when? With whom?* — *take up, be into, keen on, relaxing, a way to switch off*.
6. **Food**: *Favourite food? Cook? Eat out? Food in your culture?* — *home-cooked, street food, cuisine, spicy, a balanced diet, eat out*.
7. **Weather / Seasons**: *Weather like? Prefer hot or cold? Affect mood?* — *humid, rainy season, mild, typhoon, I can't stand the heat*.
8. **Travel / Holidays**: *Like travelling? Last trip? Prefer beach or city?* — *destination, sightseeing, off the beaten track, package holiday, get away from*.
9. **Technology / Phone / Internet**: *Gadgets you use? Live without phone? Too much screen time?* — *rely on, addictive, keep in touch, check notifications, a double-edged sword*.
10. **Friends / Family**: *Big family? Close to? Old friends?* — *close-knit, get on well with, have a lot in common, keep in touch, look up to*.
11. **Reading / Music / Films**: *What kind? How often? Changed since childhood?* — *genre, I'm into, thriller, documentary, catchy, a huge fan of*.
12. **Chủ đề lạ** (colours, noise, patience, sky, maps, boredom, flowers, shoes): giám khảo thích chủ đề lạ để tránh thuộc lòng. Công thức vẫn là A-R-E; nói **thật** kể cả "I've never really thought about it, but…"

### Luyện
Mỗi ngày 1 chủ đề: 5 câu, ghi âm 3 phút. Hết 12 ngày quay vòng với câu hỏi khác.
`, quiz: [
  { t: 'mc', q: 'Giám khảo hỏi về "colours" — chủ đề lạ. Nên:', o: ['nói "I don\'t know"', 'dùng A-R-E với ý thật, kể cả "I\'ve never thought about it, but…"', 'xin đổi chủ đề'], a: 1, why: 'Công thức không đổi.' },
  { t: 'mc', q: 'Chuẩn bị Part 1 hiệu quả là:', o: ['thuộc 50 câu trả lời mẫu', 'chuẩn bị ý thật + 5–6 từ cho mỗi chủ đề', 'không chuẩn bị'], a: 1, why: 'Ý thật nói nhanh hơn, không bị phát hiện thuộc lòng.' },
  { t: 'mc', q: 'Từ nào hợp để nói về hometown?', o: ['well-known for', 'take up', 'eat out'], a: 0, why: '"My hometown is well-known for its beaches."' }
]},

{ id: 'S3', type: 'speaking', title: 'Part 2: dùng 1 phút chuẩn bị và bố cục 2 phút', goal: 'Ghi 5 từ khóa trong 1 phút, nói liền 1,5–2 phút theo bố cục, không cạn ý.', md: `
### 1 phút chuẩn bị (có giấy bút)
- Đọc cả cue card (tiêu đề + 3–4 gạch đầu dòng + "and explain…").
- Ghi **5–6 từ khóa**, mỗi gạch đầu dòng 1–2 từ. **Không viết câu**.
- Chọn **một** đối tượng cụ thể ngay (một người, một nơi, một lần) — không phân vân quá 10 giây; đối tượng thật, có chi tiết, luôn tốt hơn đối tượng "ấn tượng".
- Ghi 1 chi tiết giác quan/cảm xúc để kết.

### Bố cục 2 phút
1. **Mở (10 giây)**: *I'd like to talk about… / The person I'm going to describe is…*
2. **Gạch đầu dòng 1–3 (mỗi cái 20–30 giây)**: theo thứ tự cue card, mỗi ý thêm **chi tiết + ví dụ nhỏ**.
3. **"And explain…" (30–40 giây)**: đây là phần dài nhất và quan trọng nhất — lý do + cảm xúc + tác động.
4. **Kết (5 giây)**: *So that's why… / That's the … I wanted to talk about.*

### Khi sắp cạn ý (còn giờ)
Mở rộng theo trục: **quá khứ–hiện tại–tương lai** (*In the past… Nowadays… In the future I hope…*), **so sánh** (*Compared with…*), **người khác nghĩ gì** (*My friends say…*), **một kỷ niệm cụ thể** (*I remember one time…*).

### Khi bị ngắt lúc 2 phút
Bình thường — nghĩa là bạn nói đủ. Dừng, cười, trả lời câu rounding-off ngắn (1 câu).

### Lỗi
- Viết câu trong 1 phút → không kịp, đọc như robot.
- Trả lời từng gạch đầu dòng 1 câu rồi hết sau 45 giây.
- Bỏ phần "explain" — phần ăn điểm Fluency & Coherence nhất.
- Đổi đối tượng giữa chừng.

### Luyện
Trang Nói → Part 2: bấm giờ 1 phút ghi chú, 2 phút nói, ghi âm. Mục tiêu tuần này: nói **đủ 1 phút 45 giây** 3 lần liên tiếp, chưa cần hay.
`, quiz: [
  { t: 'mc', q: 'Trong 1 phút chuẩn bị nên viết:', o: ['3 câu hoàn chỉnh', '5–6 từ khóa', 'không viết gì'], a: 1, why: 'Từ khóa để liếc, không đọc.' },
  { t: 'mc', q: 'Phần nào của cue card nên nói lâu nhất?', o: ['gạch đầu dòng 1', '"and explain…"', 'mở bài'], a: 1, why: 'Lý do + cảm xúc = độ sâu.' },
  { t: 'mc', q: 'Bị giám khảo ngắt ở 2 phút nghĩa là:', o: ['bạn nói quá dài, bị trừ', 'bình thường, đã nói đủ', 'phải nói lại'], a: 1, why: 'Giám khảo luôn ngắt ở 2 phút.' },
  { t: 'mc', q: 'Còn 40 giây mà hết ý, cách tốt:', o: ['im lặng chờ', 'mở rộng theo quá khứ–hiện tại–tương lai hoặc kể một kỷ niệm', 'nói "that\'s all"'], a: 1, why: 'Trục mở rộng.' }
]},

{ id: 'S4', type: 'speaking', title: 'Part 2: kể chuyện, tả người và vật', goal: 'Dùng thì kể chuyện (past simple / continuous / perfect) và từ vựng mô tả cho 3 dạng cue card phổ biến nhất.', md: `
### Kể chuyện (Describe a time when… / an event / an experience)
- **Thì**: nền = quá khứ tiếp diễn (*I was working late when…*); sự kiện = quá khứ đơn (*the server crashed*); trước đó = quá khứ hoàn thành (*because someone had changed the config*). Cảm xúc sau: *I felt relieved / proud / embarrassed*.
- Mốc thời gian: *A couple of years ago · It was during my second year at university · One evening last winter · At first… then… in the end… · Looking back…*
- Khung: bối cảnh (khi nào, ở đâu, ai) → vấn đề/sự kiện → hành động → kết quả → cảm xúc & bài học.

### Tả người (Describe a person who…)
- Quan hệ + bối cảnh gặp: *She's my former team leader; I first met her when I joined the company in 2022.*
- Ngoại hình 1 câu (không quá nhiều): *in her forties, always smiling, dresses very simply*.
- **Tính cách + bằng chứng**: không chỉ nói *she's patient* mà *she's incredibly patient — for example, she explained the same thing to me three times without ever sounding annoyed.* (V11 có từ).
- Ảnh hưởng: *She taught me… / Thanks to her, I… / I look up to her because…*

### Tả vật (Describe an object / a gift / something you own)
- Nó là gì, có từ đâu/khi nào, trông thế nào (1–2 câu), dùng làm gì, **tại sao quan trọng** (kỷ niệm, người tặng, thay đổi gì trong đời bạn).
- Từ: *sentimental value · it reminds me of · I use it every single day · it's a bit worn out now but… · I'd be lost without it*.

### Mẫu Part 2 (tả người, ~1 phút 50 giây, rút gọn)
*I'd like to talk about my first team leader, Ms Lan, who I worked with for about two years. I met her on my first day at the company — I was really nervous, and she was the one who showed me around. She's in her late thirties, quite small, and always has this calm expression. What makes her special is her patience. In my first month I broke the test environment twice, and instead of getting angry she sat with me and explained how to avoid it, step by step. She also has a way of giving feedback that makes you want to improve rather than hide. I admire her because she changed how I see leadership: before, I thought a good leader had to be strict, but she showed me that being calm and clear works much better. Even now, when I review someone's code, I try to do it the way she would.*

### Luyện
3 cue card khác dạng (chuyện / người / vật), ghi âm. Nghe lại, đếm lỗi thì quá khứ.
`, quiz: [
  { t: 'mc', q: '"I ___ late when the server ___." (bối cảnh + sự kiện)', o: ['worked / was crashing', 'was working / crashed', 'had worked / crashed'], a: 1, why: 'Nền tiếp diễn, sự kiện đơn.' },
  { t: 'mc', q: 'Tả tính cách người tốt nhất là:', o: ['liệt kê 6 tính từ', 'một tính từ + bằng chứng cụ thể', 'chỉ nói ngoại hình'], a: 1, why: 'Bằng chứng tạo độ sâu.' },
  { t: 'fill', q: 'It was broken because someone ___ (change) the config the night before. (quá khứ hoàn thành)', a: ['had changed'], why: 'Trước một sự kiện quá khứ khác.' },
  { t: 'mc', q: 'Phần nào quan trọng nhất khi tả một vật?', o: ['màu sắc', 'tại sao nó quan trọng với bạn', 'giá tiền'], a: 1, why: 'Phần "explain".' }
]},

{ id: 'S5', type: 'speaking', title: 'Part 2: tả nơi chốn, sự kiện, trải nghiệm học được', goal: 'Mô tả nơi bằng giác quan và không khí; kể trải nghiệm có bài học.', md: `
### Nơi chốn (a place you like / visited / want to visit)
- Vị trí + lần đầu đến: *It's a small café near the river, about ten minutes from my flat; I first went there…*
- **Giác quan**: nhìn (*wooden tables, big windows, plants everywhere*), nghe (*quiet jazz, the sound of rain*), ngửi/nếm (*fresh coffee*), **không khí** (*laid-back, cosy, lively, peaceful*).
- Làm gì ở đó, với ai, bao lâu một lần.
- Tại sao thích: *It's the only place where I can… / It reminds me of…*
- Nơi muốn đến (tương lai): *I've always wanted to… / I'd love to… because… / I imagine it would be…*

### Sự kiện (a festival / celebration / a party)
- Khi nào, ở đâu, ai tổ chức, bao nhiêu người.
- Chuỗi hoạt động với từ trình tự: *It started with… then… the highlight was… it ended with…*
- Không khí + khoảnh khắc đáng nhớ nhất.

### Trải nghiệm học được (a time you learned something / a mistake / a challenge)
- Tình huống → khó khăn → bạn làm gì → kết quả → **bài học** (*What I learned from this is… / It taught me that… / Since then I always…*).
- Giám khảo thích phần phản tỉnh: *Looking back, I realise…*

### Từ vựng không khí
*bustling, lively, vibrant · peaceful, tranquil, laid-back · cosy, welcoming · crowded, packed · breathtaking (cảnh) · picturesque · run-down (xuống cấp) · touristy*.

### Mẫu (nơi chốn, trích 40 giây)
*The place I want to describe is a tiny bookshop-café in the old quarter of my city. From the outside you'd walk straight past it, but inside it's all wooden shelves, warm yellow light and the smell of coffee and old paper. It's never crowded, and the owner plays quiet jazz in the background, so the atmosphere is really calm. I usually go there on Sunday mornings with a book, order one coffee and stay for two hours…*

### Luyện
2 cue card (nơi chốn + trải nghiệm). Trong bản ghi, đánh dấu có ≥3 từ giác quan/không khí không.
`, quiz: [
  { t: 'mc', q: 'Tả nơi chốn sinh động nhất nhờ:', o: ['địa chỉ chính xác', 'chi tiết giác quan và không khí', 'lịch sử nơi đó'], a: 1, why: 'Nhìn, nghe, ngửi, cảm giác.' },
  { t: 'mc', q: '"tranquil" nghĩa là:', o: ['đông đúc', 'yên bình', 'xuống cấp'], a: 1, why: 'tranquil = peaceful.' },
  { t: 'mc', q: 'Cue card về "a mistake you made" nên kết bằng:', o: ['xin lỗi', 'bài học rút ra', 'đổ lỗi'], a: 1, why: 'Phần phản tỉnh.' }
]},

{ id: 'S6', type: 'speaking', title: 'Part 3: cấu trúc câu trả lời ý kiến (30–45 giây)', goal: 'Trả lời câu hỏi trừu tượng theo khung Ý kiến → Lý do → Ví dụ → Mở rộng, dùng ngôn ngữ khái quát.', md: `
### Khác Part 1 thế nào
Part 3 hỏi về **xã hội, xu hướng, người nói chung** — không hỏi về bạn. *Why do people…? Do you think… will change? Should governments…?* Trả lời bằng **chủ ngữ khái quát**: *people, most young people, society, employers, governments, in many countries…* — không "I" liên tục.

### Khung O-R-E-X (30–45 giây)
- **O**pinion: trả lời thẳng: *I think there are two main reasons. / Yes, to a large extent. / Not necessarily.*
- **R**eason: *The main reason is… / This is largely because…*
- **E**xample: *For instance, in Vietnam… / A good example is…*
- e**X**tend: phản đề, điều kiện, hệ quả: *Having said that… / It also depends on… / As a result…*

### Ngôn ngữ khái quát và rào đón (hedging)
*Generally speaking · In most cases · It tends to be… · People are more likely to… · It largely depends on… · To some extent · There's a tendency for… · I'd say the majority of…* — thay cho "all people / always / everyone".

### Mẫu
*Q: Why do you think many young people prefer to work for large companies?*
*A: I'd say the main reason is security. (O) Large companies usually offer stable salaries, clear career paths and benefits like insurance, which matter a lot to someone just starting out. (R) In Vietnam, for example, most of my university friends applied to big tech firms first, mainly because their parents saw those jobs as safe. (E) Having said that, I think this is slowly changing — start-ups now attract people who want more responsibility early on, so it really depends on what someone values. (X)*

### Lỗi
- Trả lời như Part 1 (về bản thân, 1 câu).
- Lặp lại câu hỏi dài dòng trước khi trả lời.
- Nói quá 1 phút, mất mạch → giám khảo ngắt.
- Không có ví dụ → nghe như lý thuyết suông.

### Luyện
Trang Nói → Part 2 + 3: trả lời 4 câu Part 3, ghi âm, kiểm tra 4 phần O-R-E-X.
`, quiz: [
  { t: 'mc', q: 'Part 3 nên dùng chủ ngữ:', o: ['"I" liên tục', 'khái quát: people, society, governments', 'giám khảo'], a: 1, why: 'Câu hỏi về xã hội.' },
  { t: 'mc', q: 'Cụm nào là hedging?', o: ['Everyone always…', 'Generally speaking, people tend to…', 'It is 100% true that…'], a: 1, why: 'Rào đón, tránh tuyệt đối.' },
  { t: 'mc', q: 'Độ dài phù hợp cho một câu Part 3:', o: ['1 câu', '30–45 giây', '2 phút'], a: 1, why: '4 phần O-R-E-X.' },
  { t: 'mc', q: '"Having said that, …" dùng để:', o: ['thêm ví dụ', 'đưa phản đề/mặt khác', 'kết luận'], a: 1, why: 'Nối sang ý trái chiều.' }
]},

{ id: 'S7', type: 'speaking', title: 'Part 3: so sánh, dự đoán, giả định, đánh giá', goal: 'Có cấu trúc sẵn cho 4 kiểu câu hỏi Part 3 hay gặp nhất.', md: `
### 1. So sánh quá khứ – hiện tại (*How has X changed? Is X different from the past?*)
*In the past, … whereas nowadays … · People used to…, but now they tend to… · Compared with my parents' generation, … · One big difference is… · This has changed dramatically/gradually because…*
Thì: *used to / would + V* cho quá khứ; hiện tại đơn/hoàn thành cho nay.

### 2. Dự đoán (*What will X be like in the future? Will people still…?*)
*I think it's likely that… · It will probably… · I can imagine a situation where… · In twenty years, I expect… · It's hard to say, but if the current trend continues, … · There's a good chance that… · I doubt that…*
Luôn kèm lý do: *because of… / given that…*

### 3. Giả định (*What would happen if…? Should governments…?*)
*If governments invested more in…, there would be… · If that happened, people would… · Unless…, … · It would be better if… · Ideally, … but in reality…*
Dùng điều kiện loại 2 (G11) và nên nhớ *would* không dùng trong mệnh đề if.

### 4. Đánh giá / cân nhắc (*Is X a good thing? What are the advantages of…?*)
*The main advantage is… However, the downside is… · On balance, I'd say… · It's a double-edged sword because… · For some people… while for others… · It depends on how it's done.*

### Mẫu (so sánh)
*Q: How has the way people shop changed?*
*A: It's changed completely. Twenty years ago, people in Vietnam did almost all their shopping at local markets, where they knew the sellers and could bargain. Nowadays, especially in cities, a lot of that has moved online — my mother orders vegetables on an app, which would have been unimaginable when I was a child. I think the biggest change isn't just convenience but trust: people now trust reviews from strangers more than the shopkeeper they've known for years.*

### Luyện
8 câu Part 3 (2 mỗi kiểu), ghi âm. Với kiểu giả định, kiểm tra không có "if … would".
`, quiz: [
  { t: 'mc', q: '"People ___ shop at local markets, but now they shop online." (quá khứ thói quen)', o: ['use to', 'used to', 'are used to'], a: 1, why: 'used to + V.' },
  { t: 'mc', q: 'Câu dự đoán tốt:', o: ['In the future everything will be online.', 'If the current trend continues, I think most routine shopping will probably be online within ten years, mainly because delivery is getting cheaper.', 'I don\'t know the future.'], a: 1, why: 'Rào đón + lý do.' },
  { t: 'fix', q: 'If governments would invest more in public transport, fewer people would drive.', a: ['If governments invested more in public transport, fewer people would drive.'], why: 'Không dùng would trong mệnh đề if.' },
  { t: 'mc', q: '"On balance, I\'d say…" dùng khi:', o: ['bắt đầu trả lời', 'kết luận sau khi cân nhắc hai mặt', 'đưa ví dụ'], a: 1, why: 'Đánh giá tổng.' }
]},

{ id: 'S8', type: 'speaking', title: 'Phát âm trong Speaking: chunking, trọng âm câu, ngữ điệu', goal: 'Dùng nhịp để truyền nghĩa — tiêu chí Pronunciation band 7.', md: `
### Giám khảo chấm gì ở Pronunciation
Không chấm giọng vùng. Chấm: (1) **độ rõ** — có hiểu không cần cố gắng không; (2) **đặc điểm**: trọng âm từ, trọng âm câu, nối âm, ngữ điệu, **chunking** (ngắt cụm); (3) **dùng được đặc điểm đó để truyền nghĩa** (nhấn từ quan trọng, lên giọng khi liệt kê…).

### Chunking — ngắt theo cụm ý
Không ngắt từng từ, không nói liền 30 từ. Ngắt sau **cụm danh từ / cụm giới từ / mệnh đề**:
*I think | the main reason | is that large companies | offer more security, | especially | for people | who are just starting out.*
Mỗi cụm có **một từ nhấn** (thường từ cuối cụm hoặc từ nội dung chính). Dừng ở cuối cụm là "dừng hợp pháp" — không bị tính là ngập ngừng.

### Trọng âm câu để truyền nghĩa
*I don't think it's a BAD idea* (nhấn bad: không tệ, nhưng…) khác *I DON'T think it's a bad idea* (phản đối ý cho rằng nó tệ). Trong Part 3, nhấn **từ tương phản**: *In the PAST… whereas NOW…*

### Ngữ điệu
- Liệt kê lý do: lên ở các mục giữa, xuống ở mục cuối.
- Phản đề: *Having said THAT, ↘…*
- Kết thúc ý rõ ràng bằng xuống giọng → giám khảo biết bạn xong ý, không chen ngang.

### Tự kiểm 4 câu (từ P12) sau mỗi bản ghi
Âm cuối? Trọng âm từ? Nối âm? Lên xuống giọng? Thêm câu 5: **có ngắt theo cụm không?**

### Luyện
Lấy 1 câu trả lời Part 3 của bạn (từ bản ghi), viết ra, gạch chéo chỗ ngắt cụm, gạch chân từ nhấn, nói lại 3 lần, ghi âm, so sánh với bản đầu.
`, quiz: [
  { t: 'mc', q: 'Dừng ở cuối một cụm ý (chunk):', o: ['bị tính là ngập ngừng', 'là dừng tự nhiên, không bị trừ', 'cấm'], a: 1, why: 'Chunking là đặc điểm tốt.' },
  { t: 'mc', q: 'Trong "In the past… whereas now…", nên nhấn:', o: ['the, whereas', 'past, now', 'in'], a: 1, why: 'Từ tương phản.' },
  { t: 'mc', q: 'Pronunciation band 7 đòi hỏi:', o: ['giọng Anh chuẩn', 'dùng trọng âm/ngữ điệu để truyền nghĩa, ít lỗi, dễ hiểu', 'không có giọng Việt'], a: 1, why: 'Đặc điểm + độ rõ.' }
]},

{ id: 'S9', type: 'speaking', title: 'Phiên đầy đủ Part 1 + 2 + 3: quy trình và tự chấm', goal: 'Làm trọn một phiên 11–14 phút như thi thật và tự chấm có hệ thống.', md: `
### Quy trình một phiên (mỗi thứ 7 từ tuần này)
1. Trang Nói → Part 1: chọn 2 chủ đề, 4 câu mỗi chủ đề, máy đọc câu hỏi, bật ghi âm **liên tục**.
2. Part 2: cue card ngẫu nhiên, 1 phút chuẩn bị, 2 phút nói (không dừng ghi âm).
3. Part 3: 4–5 câu đi kèm cue card.
4. Dừng ghi âm. **Nghỉ 10 phút** rồi mới nghe lại (nghe ngay dễ chủ quan).

### Tự chấm (20 phút)
Nghe lại, với mỗi tiêu chí ghi **1 bằng chứng cụ thể** rồi mới cho điểm:
- **Fluency**: đếm số lần dừng > 3 giây và số "uhm/err"; có lặp từ/tự sửa nhiều không; Part 2 nói được bao lâu.
- **Lexical**: ghi 3 từ/cụm tốt bạn đã dùng và 3 chỗ dùng từ chung chung (*good, bad, thing, very*) có thể thay.
- **Grammar**: ghi 5 lỗi đầu tiên nghe thấy (thì, mạo từ, số nhiều, giới từ); đếm câu phức dùng được.
- **Pronunciation**: 5 câu hỏi của S8.
Cho điểm 4–8 mỗi tiêu chí, lưu phiên. Ghi lỗi lặp vào Sổ lỗi.

### Chuyển 1 câu trả lời tệ nhất thành tốt
Chọn câu Part 3 yếu nhất, **viết** câu trả lời tốt hơn theo O-R-E-X (60–80 từ), đọc to 3 lần, rồi **nói lại không nhìn**. Đây là bước biến tự chấm thành tiến bộ.

### Với người thật / AI
Từ Giai đoạn 3, 1 buổi/tuần với người (gia sư, bạn, câu lạc bộ) hoặc AI giọng nói. Yêu cầu họ: không sửa khi bạn đang nói; ghi 3 lỗi; hỏi follow-up bất ngờ.
`, quiz: [
  { t: 'mc', q: 'Sau khi ghi âm phiên đầy đủ, nên:', o: ['nghe lại ngay', 'nghỉ 10 phút rồi nghe lại', 'không nghe lại'], a: 1, why: 'Tránh chủ quan.' },
  { t: 'mc', q: 'Khi tự chấm, trước khi cho điểm một tiêu chí cần:', o: ['cảm giác chung', 'ghi 1 bằng chứng cụ thể', 'so với bạn bè'], a: 1, why: 'Bằng chứng → điểm đáng tin.' },
  { t: 'mc', q: 'Bước biến tự chấm thành tiến bộ:', o: ['ghi điểm rồi thôi', 'viết lại câu yếu nhất theo O-R-E-X và nói lại không nhìn', 'nghe lại 5 lần'], a: 1, why: 'Sửa chủ động.' }
]},

{ id: 'S10', type: 'speaking', title: 'Part 3 nâng cao: câu khó, câu giờ, không đồng ý với câu hỏi', goal: 'Không bao giờ im lặng trước câu hỏi khó; biết cách phản biện tiền đề câu hỏi.', md: `
### Khi không có ý ngay (câu giờ hợp pháp, 3–5 giây)
*That's a tricky question. · I've never really thought about that, but I suppose… · Let me think about that for a second. · Well, there are a few ways to look at this. · Off the top of my head, I'd say…*
Dùng **một** cụm, rồi trả lời. Không xếp 3 cụm liên tiếp.

### Khi không hiểu câu hỏi
*Sorry, do you mean [paraphrase của bạn]? · Could you rephrase that, please? · When you say X, do you mean…?* — hỏi lại một lần là bình thường; hỏi lại mọi câu thì có vấn đề về Listening.

### Không đồng ý với tiền đề câu hỏi (dấu hiệu band 7+)
*Q: Why are young people lazier than before?*
*A: I'm not sure they are, actually. I think what's changed is the kind of work they do — a lot of it is on screens, so it looks less like effort. If anything, young people today juggle more things at once…*
Cấu trúc: *I'm not sure that's true / I'd question whether… / It depends what you mean by… / I think it's more that…*

### Hai chiều trong một câu trả lời
*There are arguments on both sides. On the one hand, … On the other, … Personally, I lean towards… because…* — dùng cho câu "Is X good or bad?"

### Từ vựng trừu tượng hay cần
*a trend / a shift towards · a trade-off between X and Y · short-term gains vs long-term costs · it comes down to… · the root of the problem is… · a vicious/virtuous circle · unintended consequences · a generational difference · it's a matter of priorities*.

### Mẫu
*Q: Should governments control what people post online?*
*A: That's a tricky one, because it's a trade-off between safety and freedom. (câu giờ + khung) On the one hand, some control is clearly needed — content that incites violence or spreads dangerous medical misinformation causes real harm. On the other hand, once a government decides what counts as "harmful", it's very easy for that to slide into silencing criticism. Personally, I lean towards clear laws that apply to specific types of content, enforced by independent bodies rather than politicians, because that limits the harm without giving any one group too much power.*

### Luyện
Trang Nói → Part 3 với 5 cue card khác nhau; cố ý chọn câu hỏi bạn ghét nhất. Ghi âm, kiểm tra: có im lặng > 4 giây không.
`, quiz: [
  { t: 'mc', q: 'Trước câu hỏi khó, nên:', o: ['im lặng đến khi có ý', 'dùng 1 cụm câu giờ rồi trả lời', 'nói "I don\'t know"'], a: 1, why: 'Câu giờ hợp pháp 3–5 giây.' },
  { t: 'mc', q: 'Không đồng ý với tiền đề câu hỏi ("Why are young people lazier?"):', o: ['bị trừ vì không trả lời', 'được, nếu giải thích lý do — dấu hiệu tư duy cao', 'cấm'], a: 1, why: 'Phản biện có lý do.' },
  { t: 'mc', q: '"a trade-off between safety and freedom" nghĩa là:', o: ['cả hai đều đạt', 'được cái này mất cái kia', 'không liên quan'], a: 1, why: 'Đánh đổi.' }
]},

/* ===================== NGỮ PHÁP TRUNG CẤP ===================== */
{ id: 'G13', type: 'grammar', title: 'Hoàn thành tiếp diễn và quá khứ hoàn thành', goal: 'Dùng đúng have been doing / had done / had been doing trong kể chuyện Part 2 và Task 2.', md: `
### Hiện tại hoàn thành tiếp diễn: have/has been + V-ing
- Hành động bắt đầu trong quá khứ, **còn tiếp diễn** hoặc **vừa dừng, còn dấu vết**: *I've been learning English for a year. You look tired — have you been working late?*
- Nhấn **quá trình/độ dài**; hiện tại hoàn thành đơn nhấn **kết quả/số lượng**: *I've been reading this book* (đang đọc dở) vs *I've read three books this month* (xong, đếm được).
- Không dùng với động từ trạng thái: ~~I've been knowing~~ → *I've known him for years.*

### Quá khứ hoàn thành: had + V3
- Hành động xảy ra **trước** một mốc quá khứ khác: *When I arrived, the meeting had already started.* *She told me she had fixed the bug.*
- Dấu hiệu: *by the time, before, after, already, when (mệnh đề kia ở quá khứ đơn)*.
- Không cần khi thứ tự rõ qua *after/before*: *After I finished, I went home* (được) — nhưng *had finished* nhấn mạnh hơn.

### Quá khứ hoàn thành tiếp diễn: had been + V-ing
- Quá trình kéo dài **trước** mốc quá khứ: *We had been testing for six hours when we finally found the cause.*

### Dùng trong Part 2
*By the time I joined the company, the project had been running for two years and the team had already tried three different solutions. I'd been working there for about a month when…* — ba câu này đưa Grammar lên band 7 nếu không lỗi.

### Lỗi
- ~~I have been work~~ → *working*. ~~I had went~~ → *had gone*.
- Lạm dụng quá khứ hoàn thành cho mọi câu quá khứ: chỉ dùng khi có **hai mốc** và cần nhấn cái nào trước.
`, quiz: [
  { t: 'fill', q: 'I ___ (learn) English for a year now, and I still find listening hard. (hiện tại hoàn thành tiếp diễn)', a: ['have been learning', "'ve been learning"], why: 'Quá trình còn tiếp diễn.' },
  { t: 'mc', q: 'When I arrived at the office, the meeting ___.', o: ['already started', 'had already started', 'has already started'], a: 1, why: 'Trước mốc quá khứ "arrived".' },
  { t: 'fill', q: 'We ___ (test) for six hours when we finally found the bug. (quá khứ hoàn thành tiếp diễn)', a: ['had been testing', "'d been testing"], why: 'Quá trình kéo dài trước mốc "found".' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ["I've been knowing him for years.", "I've known him for years.", 'I know him for years.'], a: 1, why: 'know là động từ trạng thái.' },
  { t: 'mc', q: '"I\'ve read three books this month" nhấn vào:', o: ['quá trình', 'kết quả/số lượng', 'tương lai'], a: 1, why: 'Hoàn thành đơn = kết quả.' }
]},

{ id: 'G14', type: 'grammar', title: 'Bị động nâng cao: modal, nguyên mẫu, it is said that', goal: 'Dùng bị động linh hoạt trong văn trang trọng (Task 1 process, Task 2) và báo cáo công việc.', md: `
### Bị động với modal
*should be banned · must be completed · can be reduced · could have been avoided · will be introduced · needs to be fixed · ought to be considered*. Rất hay dùng trong Task 2 giải pháp: *Advertising aimed at children should be restricted.*

### Bị động nguyên mẫu / V-ing
*to be done*: *The report needs to be submitted by Friday. · Nobody wants to be told what to do.*
*being done*: *I don't like being interrupted. · The risk of being hacked is rising.*
*having been done*: *Having been warned twice, he was dismissed.*

### "It is said that…" / "X is thought to…" (báo cáo ý kiến chung, học thuật)
*It is widely believed that… · It is estimated that 20% of… · It has been suggested that… · Smoking is known to cause cancer. · The city is said to be the oldest in the region. · He is thought to have left the country.* (nguyên mẫu hoàn thành cho việc đã xảy ra). Cấu trúc này thay cho "people say" trong Task 2 và tăng tính khách quan.

### Causative: have / get something done
*I had my laptop repaired. · We got the logo redesigned. · You should have your eyes tested.* — ai đó làm cho bạn.

### Khi dùng bị động (và khi không)
Dùng khi: người làm không quan trọng/không biết (*The data were collected in 2020*), muốn nhấn vào đối tượng (*The bridge was built in 1932*), văn trang trọng/quy trình. **Không** lạm dụng trong Speaking — hội thoại ưu tiên chủ động.

### Lỗi
- ~~It is said that he is left~~ → *he has left / he is said to have left.*
- ~~should be ban~~ → *banned.* ~~can reduce~~ (khi cần bị động) → *can be reduced.*
- Nội động từ vẫn không có bị động: ~~was happened, was disappeared~~.
`, quiz: [
  { t: 'fill', q: 'Advertising aimed at children should ___ (ban).', a: ['be banned'], why: 'modal + be + V3.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ['It is estimated that 20% of food is wasted.', 'It is estimated that 20% of food wastes.', 'It estimates that 20% of food is wasted.'], a: 0, why: 'It is estimated that + bị động.' },
  { t: 'fill', q: 'I had my laptop ___ (repair) last week. (causative)', a: ['repaired'], why: 'have + object + V3.' },
  { t: 'mc', q: '"He is thought ___ the country last year."', o: ['to leave', 'to have left', 'leaving'], a: 1, why: 'Việc đã xảy ra → to have + V3.' },
  { t: 'fix', q: 'Nobody likes to be interrupt during a presentation.', a: ['Nobody likes to be interrupted during a presentation.', 'Nobody likes being interrupted during a presentation.'], why: 'to be + V3.' }
]},

{ id: 'G15', type: 'grammar', title: 'Câu điều kiện loại 3 và hỗn hợp', goal: 'Nói về hối tiếc quá khứ và hệ quả hiện tại — Part 2 kể chuyện, Task 2 lập luận.', md: `
### Loại 3 (giả định ngược với quá khứ)
*If + had + V3, would/could/might + have + V3*: *If we had tested more carefully, the bug would not have reached production.* *If I had known, I would have called you.*
Dùng cho: hối tiếc, bài học, phân tích "giá mà".

### Hỗn hợp (mixed)
- Quá khứ → hiện tại: *If I had studied English at school, I would be fluent now.* (if loại 3, mệnh đề chính loại 2).
- Hiện tại → quá khứ: *If I were more organised, I wouldn't have missed the deadline.*

### Biến thể trang trọng
*Had we tested more carefully, …* (đảo ngữ thay if) · *Had it not been for her help, I would have failed.* · *Otherwise*: *We fixed it on Friday; otherwise the client would have noticed.*

### *wish / if only* cho quá khứ
*I wish I had started earlier. · If only we had backed up the data.*

### Trong Speaking Part 2
*Looking back, if I had asked for help sooner, I would have saved a week. If only I had known how simple the fix was!* — hai câu này thể hiện range cao và rất tự nhiên trong "a mistake you made".

### Trong Task 2
*If governments had invested in public transport decades ago, cities would not be as congested as they are today.* (mixed) — dùng để lập luận phản thực.

### Lỗi
- ~~If I would have known~~ → *If I had known.*
- ~~If I had more time last week, I would finish~~ → *If I had had more time, I would have finished.*
- Quên *have* trong mệnh đề chính: ~~would finished~~ → *would have finished.*
`, quiz: [
  { t: 'fill', q: 'If we ___ (test) more carefully, the bug would not have reached production.', a: ['had tested'], why: 'Loại 3: if + had + V3.' },
  { t: 'fix', q: 'If I would have known, I would have called you.', a: ['If I had known, I would have called you.', "If I'd known, I would have called you."], why: 'Mệnh đề if không dùng would.' },
  { t: 'mc', q: '"If I had studied English at school, I ___ fluent now." (hỗn hợp)', o: ['would have been', 'would be', 'will be'], a: 1, why: 'Hệ quả ở hiện tại → would be.' },
  { t: 'fill', q: 'I wish I ___ (start) earlier. (hối tiếc quá khứ)', a: ['had started'], why: 'wish + quá khứ hoàn thành.' },
  { t: 'mc', q: 'Đảo ngữ của "If we had tested more carefully":', o: ['Had we tested more carefully', 'Would we have tested', 'Did we test'], a: 0, why: 'Had + S + V3.' }
]},

{ id: 'G16', type: 'grammar', title: 'Rút gọn mệnh đề quan hệ và mệnh đề phân từ', goal: 'Viết câu gọn, học thuật hơn bằng V-ing / V3 thay cho who/which; tránh dangling participle.', md: `
### Rút gọn mệnh đề quan hệ
- Chủ động → **V-ing**: *People who live in cities* → *People living in cities*. *The road which connects the two towns* → *The road connecting the two towns.*
- Bị động → **V3**: *The report which was written by the team* → *The report written by the team*. *Goods that are produced locally* → *Goods produced locally.*
- *to V* sau *the first/last/only/next* và số thứ tự: *She was the first person to notice the error.*
- Chỉ rút gọn khi đại từ quan hệ là **chủ ngữ** của mệnh đề. *The bug that we found* → không rút gọn kiểu này (có thể bỏ *that*).

### Mệnh đề phân từ (participle clauses) — trang trọng, Task 2 / Task 1
- Cùng lúc / nguyên nhân: *Having no car, many residents rely on buses.* *Working from home, employees save time.*
- Trước đó: *Having finished the tests, the team deployed the release.* (= After they had finished…)
- Kết quả: *Prices rose sharply, forcing many families to cut spending.* (= which forced…)
- Bị động: *Built in 1932, the bridge is still in use.*

### Dangling participle — lỗi cần tránh
Chủ ngữ của phân từ phải là chủ ngữ câu chính. ~~Walking to work, the rain started~~ (mưa không đi bộ) → *Walking to work, I got caught in the rain.*

### *which* chỉ cả mệnh đề (Speaking/Writing)
*The company allowed remote work, which made a huge difference to my life.* — *which* = cả việc cho làm từ xa.

### Lỗi
- ~~People living in cities they face~~ → bỏ *they*.
- ~~The report writing by the team~~ → *written* (bị động).
- Phân từ không có mệnh đề chính: ~~Having finished the tests.~~ (câu cụt).
`, quiz: [
  { t: 'fill', q: 'People ___ (live) in cities often have long commutes. (rút gọn chủ động)', a: ['living'], why: 'who live → living.' },
  { t: 'fill', q: 'The report ___ (write) by the team was 50 pages long. (rút gọn bị động)', a: ['written'], why: 'which was written → written.' },
  { t: 'mc', q: 'Câu nào có lỗi dangling participle?', o: ['Walking to work, I got caught in the rain.', 'Walking to work, the rain started.', 'Having finished, we left.'], a: 1, why: 'Mưa không đi bộ.' },
  { t: 'mc', q: '"Prices rose sharply, ___ many families to cut spending."', o: ['forced', 'forcing', 'which forcing'], a: 1, why: 'Phân từ chỉ kết quả.' },
  { t: 'mc', q: 'She was the first person ___ the error.', o: ['noticing', 'to notice', 'who noticing'], a: 1, why: 'the first + to V.' }
]},

{ id: 'G17', type: 'grammar', title: 'Mạo từ nâng cao cho Task 2', goal: 'Hết lỗi mạo từ với danh từ trừu tượng, khái quát, và các danh từ Task 2 hay dùng.', md: `
### Khái quát (nói chung)
- **Số nhiều không mạo từ**: *Computers have changed education.* *Governments should act.*
- **Không đếm được không mạo từ**: *Education is a right. Pollution is rising. Technology helps.*
- **the + số ít** (trang trọng, cả loài/phát minh): *The computer has changed education. The smartphone…* — ít dùng, dễ sai; ưu tiên số nhiều.
- **a/an + số ít** (bất kỳ cái nào): *A child needs attention.*

### Cụ thể (người đọc biết cái nào)
*the government* (của nước đang nói), *the environment* (luôn the), *the internet*, *the media*, *the economy*, *the elderly / the rich / the poor / the unemployed* (nhóm người, luôn the + adj), *the majority of*, *the same*, *the first/best…*.

### Danh từ Task 2 — bảng tra nhanh
| Không mạo từ (khái quát) | Luôn/thường có the | a/an |
|---|---|---|
| society, education, health, crime, technology, information, research, advertising, nature, life, work, traffic, pollution, unemployment, globalisation, culture (nói chung) | the environment, the internet, the media, the government, the economy, the elderly, the public, the world, the countryside, the past/future | a problem, a solution, an issue, an advantage, a role, an impact, a lack of, a number of, a rise in, an increase in |

- *society* không the: *Society benefits* (không ~~the society~~). *culture* khái quát không the; *the culture of Japan* cụ thể có the.
- *school / university / hospital / prison / church / work / home*: không mạo từ khi nói về **chức năng** (*go to school, be at work, be in hospital*); có the khi nói về **tòa nhà/cụ thể** (*the school near my house*).

### Lỗi người Việt
~~the society, the life, the technology, the nature, the crime~~ (khi khái quát) → bỏ the · ~~environment~~ → *the environment* · ~~government should~~ → *the government / governments* · ~~a research, an information, an advice~~ → bỏ a · ~~elderly people the~~ → *the elderly / elderly people*.

### Luyện
Lấy 1 bài Task 2 cũ, khoanh mọi danh từ, kiểm tra mạo từ theo bảng. Thường tìm được 5–8 lỗi.
`, quiz: [
  { t: 'fix', q: 'The society benefits when the education is free.', a: ['Society benefits when education is free.'], why: 'Khái quát, không đếm được → không the.' },
  { t: 'fill', q: 'Cars are a major cause of damage to ___ environment. (mạo từ)', a: ['the'], why: 'the environment luôn có the.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ['Government should invest in public transport.', 'Governments should invest in public transport.', 'A government should invests.'], a: 1, why: 'Số nhiều khái quát (hoặc the government).' },
  { t: 'mc', q: '"___ elderly need more support."', o: ['The', '(không)', 'An'], a: 0, why: 'the + adj = nhóm người.' },
  { t: 'mc', q: 'My brother is ___ hospital after an accident. (đang nằm viện — chức năng)', o: ['in the', 'in', 'at a'], a: 1, why: 'in hospital = nằm viện.' },
  { t: 'fix', q: 'There is a lack of research on this topic, and the information is often unreliable.', a: ['There is a lack of research on this topic, and information is often unreliable.'], why: 'information khái quát → không the. (Câu gốc chỉ sai ở "the information".)' }
]},

{ id: 'G18', type: 'grammar', title: 'Danh hóa và cụm danh từ cho văn học thuật', goal: 'Biến câu "ai làm gì" thành cụm danh từ gọn, trang trọng — đặc trưng Writing band 7.', md: `
### Danh hóa là gì
Biến động từ/tính từ thành danh từ để câu gọn và khách quan:
- *The government invested in roads. This improved trade.* → *Government investment in roads improved trade.*
- *People rely on cars, which causes pollution.* → *Reliance on cars causes pollution.*
- *Cities are growing fast, and this creates problems.* → *Rapid urban growth creates problems.*

### Hậu tố tạo danh từ
*-tion/-sion*: *reduce → reduction, decide → decision, pollute → pollution* · *-ment*: *develop → development, invest → investment* · *-ness*: *aware → awareness* · *-ity*: *able → ability, secure → security* · *-ance/-ence*: *rely → reliance, depend → dependence* · *-al*: *arrive → arrival, propose → proposal* · *-th*: *grow → growth* · V-ing: *smoking, spending, recycling*.

### Cụm danh từ mở rộng
*noun + noun*: *government spending, air pollution, traffic congestion, climate change, screen time, job security*.
*adj + noun + prepositional phrase*: *a significant increase in the number of private cars · the growing reliance of young people on social media · a lack of affordable housing in major cities.*

### Dùng trong Task 1
*The number of visitors rose.* → *There was a rise in visitor numbers.* / *Visitor numbers saw a sharp rise.* — đổi cấu trúc để không lặp.

### Dùng trong Task 2
Câu chủ đề: *The main cause of urban congestion is the rapid growth in private car ownership.* (3 cụm danh từ) thay vì *More people buy cars so cities are congested.*

### Đừng quá đà
Câu toàn danh từ khó đọc: ~~The implementation of the reduction of emissions…~~ → *Reducing emissions requires…* Band 7 là **kết hợp**: cụm danh từ ở câu chủ đề, động từ rõ ở câu giải thích/ví dụ.

### Luyện
Viết lại 10 câu đơn giản thành câu có cụm danh từ (5 câu Task 1, 5 câu Task 2).
`, quiz: [
  { t: 'fill', q: 'reduce → ___ (danh từ)', a: ['reduction'], why: '-tion.' },
  { t: 'fill', q: 'People rely on cars. → ___ on cars causes pollution. (danh từ của rely)', a: ['reliance'], why: '-ance.' },
  { t: 'mc', q: 'Danh hóa của "The government invested in roads, and this improved trade":', o: ['Government investment in roads improved trade.', 'The government is investing roads improve trade.', 'Roads invested government trade.'], a: 0, why: 'invest → investment.' },
  { t: 'mc', q: 'Câu nào quá đà?', o: ['Reducing emissions requires international cooperation.', 'The implementation of the reduction of the emission of gases requires the cooperation of nations.', 'Emissions must be reduced.'], a: 1, why: 'Quá nhiều danh từ, khó đọc.' },
  { t: 'fill', q: 'grow → ___ (danh từ)', a: ['growth'], why: '-th.' }
]},

{ id: 'G19', type: 'grammar', title: 'Câu phức và mệnh đề trạng ngữ', goal: 'Dùng 12 liên từ phụ thuộc đúng nghĩa, đúng dấu câu; cân bằng câu đơn–phức.', md: `
### 12 liên từ phụ thuộc phải dùng được
| Chức năng | Liên từ | Ví dụ |
|---|---|---|
| Nhượng bộ | *although, even though, though, while, whereas* | *Although remote work saves time, it can isolate employees.* |
| Nguyên nhân | *because, since, as* | *Since fees are rising, fewer students enrol.* |
| Mục đích | *so that, in order to (+V), in order that* | *Cities build cycle lanes so that people can commute safely.* |
| Kết quả | *so … that, such … that* | *The test was so long that many students ran out of time.* |
| Điều kiện | *if, unless, provided that, as long as, even if* | *Remote work succeeds provided that teams meet regularly.* |
| Thời gian | *when, while, until, once, as soon as, before, after* | *Once the data have been collected, they are analysed.* |
| Nhượng bộ mạnh | *no matter how/what, whatever, however + adj* | *No matter how good the technology is, teachers remain essential.* |

### Dấu câu
- Mệnh đề phụ **đứng trước**: dấu phẩy. *Although it is expensive, it works.*
- Mệnh đề phụ **đứng sau**: không phẩy. *It works although it is expensive.*
- *however / therefore / moreover* **không phải liên từ**: cần dấu chấm hoặc chấm phẩy trước: *It is expensive. However, it works.* ~~It is expensive, however it works~~ (comma splice).

### *while / whereas* (so sánh) — rất hợp Task 1
*Germany spent 3%, whereas Spain spent only 1%.*

### Cân bằng
Band 7: "uses a variety of complex structures" + "frequent error-free sentences". Nghĩa là **xen kẽ**: 1 câu phức (15–25 từ) → 1 câu đơn rõ (8–12 từ). Đoạn toàn câu 35 từ là đoạn nhiều lỗi.

### Lỗi
- ~~Although …, but …~~ · ~~Because …~~ đứng một mình (câu cụt) · ~~Despite + mệnh đề~~ → *despite + danh từ/V-ing* · ~~so that + to V~~.
`, quiz: [
  { t: 'fix', q: 'It is expensive, however it works well.', a: ['It is expensive. However, it works well.', 'It is expensive; however, it works well.'], why: 'however không nối hai mệnh đề bằng dấu phẩy.' },
  { t: 'mc', q: '"Remote work succeeds ___ teams meet regularly." (với điều kiện)', o: ['unless', 'provided that', 'whereas'], a: 1, why: 'provided that = với điều kiện.' },
  { t: 'mc', q: 'Chọn câu đúng dấu câu:', o: ['Although it is expensive it works.', 'Although it is expensive, it works.', 'It works, although, it is expensive.'], a: 1, why: 'Mệnh đề phụ đứng trước → phẩy.' },
  { t: 'fix', q: 'Despite the system is old, it is reliable.', a: ['Although the system is old, it is reliable.', 'Despite being old, the system is reliable.', 'Despite its age, the system is reliable.'], why: 'despite + danh từ/V-ing; although + mệnh đề.' },
  { t: 'mc', q: '"The test was ___ long ___ many students ran out of time."', o: ['so / that', 'such / that', 'too / to'], a: 0, why: 'so + adj + that.' }
]},

{ id: 'G20', type: 'grammar', title: 'Liên kết (cohesion): từ nối, tham chiếu, thay thế', goal: 'Dùng từ nối đúng chức năng, vừa đủ; dùng this/these/such để nối ý thay vì chỉ dùng từ nối.', md: `
### 3 công cụ liên kết (band 7 dùng cả 3, không chỉ cái đầu)
1. **Từ nối theo chức năng** (dùng vừa đủ, 1 từ nối cho mỗi 2–3 câu):
   - Thêm: *In addition, Furthermore, Moreover, Also, What is more*
   - Tương phản: *However, Nevertheless, On the other hand, In contrast, Conversely, Despite this*
   - Nguyên nhân–kết quả: *Therefore, As a result, Consequently, This means that, For this reason*
   - Ví dụ: *For example, For instance, such as, in particular, A case in point is*
   - Trình tự/cấu trúc: *First(ly), Second(ly), Finally, To begin with*
   - Kết luận: *In conclusion, To sum up, Overall*
2. **Tham chiếu**: *this / these / that / such + danh từ tóm tắt*: *Cities are building more roads. **This approach** rarely reduces congestion.* / *…addiction and isolation. **These problems** affect teenagers most.* / *…**Such measures** are expensive.* — đây là dấu hiệu rõ nhất của Coherence band 7.
3. **Thay thế / lược**: *one/ones, do so, the former/the latter, the same*: *Some prefer trains; others prefer buses. **The former** are faster, **the latter** cheaper.*

### Danh từ tóm tắt hay dùng với this/these/such
*approach, measure, trend, problem, issue, development, change, policy, view, argument, factor, phenomenon, solution, situation*.

### Lạm dụng từ nối
Đoạn có *Firstly… Secondly… Moreover… Furthermore… In addition… Therefore…* liên tiếp bị chấm là "mechanical" (band 6). Thay bớt bằng tham chiếu và câu chủ đề rõ.

### Liên kết cấp đoạn
- Câu chủ đề nhắc **từ khóa của đề** hoặc **ý đoạn trước**: *A second reason for this trend is…*
- Câu cuối đoạn kéo về luận điểm, không mở ý mới.

### Trong Speaking
Từ nối hội thoại: *Well · Actually · Having said that · The thing is · On top of that · Mind you · Anyway · So basically* — tự nhiên hơn *Furthermore*.

### Luyện
Lấy 1 bài Task 2 cũ: gạch mọi từ nối; nếu > 10, thay 3 cái bằng *this/these/such + danh từ*. Viết lại.
`, quiz: [
  { t: 'mc', q: '"Cities are building more roads. ___ rarely reduces congestion."', o: ['This approach', 'Moreover', 'Firstly'], a: 0, why: 'Tham chiếu this + danh từ tóm tắt.' },
  { t: 'mc', q: 'Đoạn dùng Firstly, Secondly, Moreover, Furthermore, In addition, Therefore liên tiếp bị đánh giá:', o: ['band 7 vì nhiều từ nối', 'máy móc (mechanical), ~band 6', 'band 8'], a: 1, why: 'Lạm dụng từ nối.' },
  { t: 'mc', q: '"Some prefer trains; others prefer buses. ___ are faster."', o: ['The former', 'The latter', 'These'], a: 0, why: 'the former = cái nêu trước (trains).' },
  { t: 'mc', q: 'Từ nối nào hợp với Speaking hơn Writing?', o: ['Furthermore', 'Having said that', 'Consequently'], a: 1, why: 'Hội thoại.' },
  { t: 'mc', q: 'Từ nối chỉ nguyên nhân–kết quả:', o: ['Nevertheless', 'Consequently', 'For instance'], a: 1, why: 'Consequently = As a result.' }
]}
);
