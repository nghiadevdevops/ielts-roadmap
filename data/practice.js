/* ===== Dữ liệu luyện tập: chính tả, đọc, viết, nói ===== */

/* ---------- Nghe · chính tả ---------- */
window.DICT = {
  names: ['Harrison', 'Thorne', 'Blackwood', 'Whitfield', 'Jameson', 'Pritchard', 'Greenway', 'Fairbanks', 'McKenzie', 'O\'Connell', 'Sheridan', 'Appleby', 'Kowalski', 'Nakamura', 'Fitzgerald', 'Underwood', 'Castellano', 'Brightman', 'Hollis', 'Vickery', 'Lindqvist', 'Marchetti', 'Pembroke', 'Rutherford', 'Delaney', 'Okafor', 'Steinberg', 'Wainwright', 'Beaumont', 'Quigley'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  streets: ['Station Road', 'Church Lane', 'Mill Street', 'Park Avenue', 'Victoria Road', 'Castle Street', 'Bridge Road', 'Orchard Close', 'Elm Grove', 'Market Square', 'Harbour View', 'Chestnut Drive', 'Queensway', 'Riverside Walk', 'Hillcrest Road', 'Birch Avenue', 'Abbey Lane', 'Meadow Court'],
  sentences: [
    'Could you tell me what time the library closes on Saturdays?',
    'The course fee includes all materials, but you will need to buy your own notebook.',
    'I was going to take the bus, but in the end I decided to walk.',
    'The museum is opposite the railway station, next to a small café.',
    'Students who hand in their essays late will lose ten per cent of the mark.',
    'We have been working on this project for about six months now.',
    'Unfortunately, the meeting has been moved to Thursday afternoon.',
    'There is a discount of twenty per cent for anyone who books before the end of March.',
    'If you have any questions, please contact the office between nine and five.',
    'The flat is on the third floor and has two bedrooms and a small balcony.',
    'Most of the participants said they would prefer an online session.',
    'The lecture on climate change has been cancelled because the speaker is ill.',
    'You should have received a confirmation email with your booking reference.',
    'Breakfast is served from seven until half past nine in the dining room.',
    'The population of the town has doubled over the last twenty years.',
    'I think the main problem is that people simply do not have enough time.',
    'The new bypass will reduce traffic in the town centre by about a third.',
    'He said he had already sent the report, but I could not find it anywhere.',
    'Would you mind sending me a copy of the agenda before the call?',
    'The first thing you need to do is register at the main reception desk.',
    'Although the hotel was expensive, the view from the room was worth it.',
    'Research suggests that children who read for pleasure do better at school.',
    'The deadline for applications is the fifteenth of November.',
    'It took us nearly two hours to find the cause of the problem.',
    'Please make sure that all electronic devices are switched off during the exam.'
  ]
};
window.DICT_TIPS = `
### Cách dùng
- **Số/tên/ngày/giờ/giá/địa chỉ/mã bưu điện**: luyện cho Listening Part 1. Nghe tối đa 2 lần, gõ, Enter. Mục tiêu: 20 câu liên tiếp đúng ≥ 18.
- **Cả câu**: chép chính tả luyện tai nghe nối âm, dạng yếu (P7, P9). Nghe 2–3 lần rồi gõ cả câu. Phần so sánh tô màu chỗ sai: thường là từ chức năng (*a, the, of, have*) hoặc âm cuối (-s, -ed).
- Chọn **tốc độ chậm** 1–2 tuần đầu, rồi "vừa", rồi "nhanh" từ Giai đoạn 3.
- Giọng máy không bằng người thật, nhưng đủ để luyện phản xạ số/đánh vần. Đề thật dùng Cambridge.
- Lỗi lặp lại (ví dụ luôn nhầm 13/30, hay thiếu -s) → ghi vào Sổ lỗi nhãn "Listening".
`;

/* ---------- Đọc ---------- */
window.READING_HOWTO = `
### Quy trình cho mỗi bài đọc ở đây
1. Bấm "Bắt đầu đếm", skim 1–2 phút, ghi ý mỗi đoạn (trong đầu hoặc nháp).
2. Làm câu hỏi theo thứ tự gợi ý: chi tiết trước, headings sau.
3. Nộp. Đọc **giải thích từng câu** kể cả câu đúng — vì có thể bạn đúng do đoán.
4. Với câu sai: tìm câu trong bài chứa đáp án, viết cặp paraphrase vào thẻ từ của bạn.

Bài ở đây ngắn hơn đề thật (300–450 từ so với 800) để luyện **quy trình**. Từ tuần 15 trở đi làm thêm passage thật trong Cambridge, mỗi tuần ≥ 2.
`;
window.READING = [
{ id: 'rd1', title: 'The Return of the Night Train', types: 'T/F/NG · Sentence completion', words: 380, minutes: 12,
text: `
**A** For most of the twentieth century, sleeper trains were a normal part of European travel. A passenger could board in Paris after dinner, sleep through the Alps and wake up in Venice. By the early 2000s, however, the network had almost disappeared. Low-cost airlines offered the same journeys in two hours for a fraction of the price, and railway companies, under pressure to cut costs, withdrew one night service after another. In 2016, Germany's national operator ended its entire sleeper programme.

**B** The revival began, unexpectedly, in Austria. The state railway ÖBB bought the German sleeper carriages that nobody else wanted and relaunched them under the name Nightjet. Executives expected modest demand. Instead, the trains were frequently full, and within three years the company had ordered a new fleet. Other operators took notice: by 2024, new overnight routes connected Brussels with Berlin, Stockholm with Hamburg, and Paris with Vienna.

**C** Several factors explain the change. The most frequently cited is climate concern: a sleeper journey produces roughly one tenth of the carbon emissions of the equivalent flight, and a growing number of travellers, particularly in northern Europe, say they now avoid flying when an alternative exists. A second factor is time. A night train leaves at ten in the evening and arrives at eight the next morning, so a traveller loses no working hours, whereas even a short flight consumes most of a day once airport transfers and security are included.

**D** Comfort has also improved. Older carriages offered little more than a narrow bunk in a shared compartment. The newest designs include private cabins with their own shower, mini-suites for single travellers, and seats that convert into flat beds. Prices remain higher than budget airlines for a basic ticket, but comparable once the cost of a hotel night is taken into account.

**E** Obstacles remain. Night trains cross several national rail systems, each with different signalling, electricity standards and ticketing. A single route may require negotiations with four infrastructure companies. Track access charges, which are calculated per kilometre, penalise long-distance services. And because a sleeper carriage carries fewer passengers than a daytime one, the economics are fragile: a train that is only two-thirds full may lose money. Whether the revival lasts will depend less on passenger enthusiasm, which seems secure, than on whether governments are prepared to adjust the rules of a system built for daytime travel.
`,
qs: [
  { t: 'tfng', q: 'In the early 2000s, flying between major European cities was usually cheaper than taking a sleeper train.', a: 'TRUE', why: 'Đoạn A: "for a fraction of the price" = rẻ hơn nhiều.' },
  { t: 'tfng', q: 'Germany stopped running sleeper trains because of a series of accidents.', a: 'NOT GIVEN', why: 'Đoạn A nói Đức dừng năm 2016 nhưng không nêu lý do tai nạn. Lý do chung là cắt chi phí, nhưng không nói riêng cho Đức → NG.' },
  { t: 'tfng', q: 'ÖBB predicted that its night trains would be very popular.', a: 'FALSE', why: 'Đoạn B: "Executives expected modest demand" — ngược lại.' },
  { t: 'tfng', q: 'Travellers in southern Europe are the most likely to avoid flying.', a: 'FALSE', why: 'Đoạn C: "particularly in northern Europe" → mâu thuẫn.' },
  { t: 'tfng', q: 'A sleeper ticket is cheaper than a budget flight for a basic fare.', a: 'FALSE', why: 'Đoạn D: "Prices remain higher than budget airlines for a basic ticket".' },
  { t: 'tfng', q: 'Most night trains in 2024 were running at a loss.', a: 'NOT GIVEN', why: 'Đoạn E nói tàu đầy 2/3 "may lose money" — khả năng, không phải thống kê về đa số.' },
  { t: 'fill', q: 'A sleeper journey emits about ___ of the carbon of a comparable flight. (NO MORE THAN TWO WORDS)', a: ['one tenth', 'a tenth'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn C: "roughly one tenth of the carbon emissions".' },
  { t: 'fill', q: 'The newest carriages include private cabins with a ___. (ONE WORD)', a: ['shower'], limit: 'ONE WORD', why: 'Đoạn D.' },
  { t: 'fill', q: 'Fees for using the track are based on distance, measured per ___. (ONE WORD)', a: ['kilometre', 'kilometer'], limit: 'ONE WORD', why: 'Đoạn E: "calculated per kilometre".' },
  { t: 'fill', q: 'According to the writer, the future of night trains depends mainly on the decisions of ___. (ONE WORD)', a: ['governments'], limit: 'ONE WORD', why: 'Đoạn E, câu cuối.' }
]},

{ id: 'rd2', title: 'Why We Forget Where We Put Things', types: 'Matching headings · Multiple choice', words: 410, minutes: 13,
headings: ['A common but misunderstood experience', 'The role of attention at the moment of action', 'How emotions affect memory', 'The brain treats routine actions differently', 'Practical ways to reduce everyday forgetting', 'Why older people forget more', 'The difference between forgetting and never knowing'],
text: `
**A** Almost everyone has searched the house for keys that turn out to be in their pocket, or walked into a room and forgotten why. These lapses are so common that they are usually dismissed as carelessness or, in older adults, as early signs of decline. Psychologists who study them, however, argue that most such episodes are neither. They are the predictable result of how memory is designed to work.

**B** The central finding is that memory depends on attention at the moment of encoding. When we put down our keys while talking on the phone, the brain never records the event in the first place. Later, when we try to recall where the keys are, we are not failing to retrieve a memory; there is simply no memory to retrieve. Experiments confirm this: participants asked to perform a simple task while distracted later recall the details of that task far less accurately than those who performed it with full attention, even though both groups completed it successfully.

**C** Routine makes the problem worse. Actions we perform every day, such as locking the door or taking a daily pill, are handled by a system that operates largely without conscious awareness. This is efficient, because it frees attention for other things, but it means that the brain does not create a distinct record of each repetition. When someone wonders whether they locked the door this morning, the uncertainty arises because this morning's locking was indistinguishable from yesterday's. The memory is not lost; it was never separately stored.

**D** Understanding the mechanism suggests remedies. The most effective is to introduce a brief moment of deliberate attention: saying aloud "keys on the kitchen table" as one puts them down, or looking at the locked door for a second longer than necessary. Fixed locations help for the same reason, since they remove the need for a memory at all. Smartphone reminders work not because they improve memory but because they bypass it. What does not help, researchers note, is worrying, which consumes the very attention that encoding requires.
`,
qs: [
  { t: 'head', q: 'Heading cho đoạn A', a: 0, why: 'Ý chính: trải nghiệm phổ biến nhưng bị hiểu sai (carelessness/decline). Heading vi/vii là chi tiết hoặc không có.' },
  { t: 'head', q: 'Heading cho đoạn B', a: 1, why: 'Ý chính: attention at the moment of encoding.' },
  { t: 'head', q: 'Heading cho đoạn C', a: 3, why: 'Ý chính: routine actions handled without conscious awareness.' },
  { t: 'head', q: 'Heading cho đoạn D', a: 4, why: 'Ý chính: remedies / practical ways.' },
  { t: 'mc', q: 'According to the writer, when we cannot find our keys after putting them down while distracted, this is because', o: ['the memory has been stored but cannot be accessed', 'no memory of the action was ever created', 'we are experiencing early memory decline'], a: 1, why: 'Đoạn B: "there is simply no memory to retrieve".' },
  { t: 'mc', q: 'The experiment described in paragraph B showed that distracted participants', o: ['failed to complete the task', 'completed the task but remembered it less well', 'remembered the task better than expected'], a: 1, why: '"even though both groups completed it successfully".' },
  { t: 'mc', q: 'Why is it hard to remember whether we locked the door this morning?', o: ['Because locking the door requires a lot of attention', 'Because each day\'s action is not stored as a separate memory', 'Because we are usually tired in the morning'], a: 1, why: 'Đoạn C: "indistinguishable from yesterday\'s… never separately stored".' },
  { t: 'mc', q: 'Smartphone reminders are effective because they', o: ['train the memory over time', 'avoid the need to use memory', 'reduce anxiety'], a: 1, why: 'Đoạn D: "bypass it".' }
]},

{ id: 'rd3', title: 'Open-Plan Offices: The Evidence', types: 'Y/N/NG · Summary completion (word list)', words: 430, minutes: 14,
text: `
The open-plan office was sold to companies on two promises: it would cost less, and it would make people talk to each other. The first promise has been kept. Removing walls allows an organisation to fit roughly twice as many desks into the same floor area, and in cities where rent is the largest expense after salaries, this alone explains why the design spread so quickly. The second promise is where the trouble begins.

In 2018, researchers at Harvard fitted employees of two large firms with sensors that recorded face-to-face conversation before and after their offices were converted to open plan. The result surprised even the researchers: in-person interaction fell by about seventy per cent, while email and instant messaging rose sharply. Far from encouraging conversation, visibility seemed to discourage it. Employees who could be seen and heard by dozens of colleagues chose to communicate in ways that were private. I find this result entirely believable, and anyone who has tried to make a sensitive phone call in a room of forty people will understand why.

Defenders of the design point out that the Harvard study measured only quantity, not quality, of interaction, and that some of the lost conversation may have been idle chat. This is fair. Yet other research is no kinder. Surveys consistently rank noise and lack of privacy as the two most common complaints of office workers, and studies of concentration find that a single interrupted task takes, on average, more than twenty minutes to resume properly. For jobs that require sustained thought, programming and writing among them, these costs are not trivial.

None of this means that walls should go back up everywhere. It means that the open plan was adopted for a reason its advocates preferred not to state, and justified by a benefit it does not reliably deliver. The honest case for open offices is that they are cheap. Organisations that accept this can then make sensible trade-offs: quiet rooms for focused work, booths for calls, and a culture in which wearing headphones is not read as hostility. What they should stop doing is pretending that the arrangement exists for the employees' benefit.
`,
wordlist: ['cheaper', 'rent', 'noise', 'privacy', 'decreased', 'increased', 'quality', 'quantity', 'headphones', 'interruptions', 'walls', 'honesty'],
qs: [
  { t: 'ynng', q: 'The writer believes the main reason open-plan offices became popular was financial.', a: 'YES', why: 'Đoạn 1 và 4: "this alone explains why the design spread"; "the honest case… is that they are cheap".' },
  { t: 'ynng', q: 'The writer was surprised by the results of the Harvard study.', a: 'NO', why: '"I find this result entirely believable" — tác giả không ngạc nhiên (các nhà nghiên cứu mới ngạc nhiên).' },
  { t: 'ynng', q: 'The writer thinks the criticism that the Harvard study ignored the quality of interaction is reasonable.', a: 'YES', why: '"This is fair."' },
  { t: 'ynng', q: 'The writer believes programmers are more productive in open-plan offices than writers.', a: 'NOT GIVEN', why: 'Cả hai được nêu là ví dụ công việc cần tập trung; không so sánh.' },
  { t: 'ynng', q: 'The writer recommends returning to offices with individual rooms for everyone.', a: 'NO', why: '"None of this means that walls should go back up everywhere."' },
  { t: 'fill', q: 'Summary: Open-plan offices spread mainly because they are (1) ___, since they allow far more desks per floor and (2) ___ is a major cost. The Harvard study found that face-to-face talk (3) ___ by around 70%. Điền (1):', a: ['cheaper'], limit: 'Chọn từ danh sách: cheaper, rent, noise, privacy, decreased, increased, quality, quantity, headphones, interruptions, walls, honesty', why: '"cost less" → cheaper.' },
  { t: 'fill', q: 'Điền (2):', a: ['rent'], limit: 'Từ danh sách', why: '"rent is the largest expense after salaries".' },
  { t: 'fill', q: 'Điền (3):', a: ['decreased'], limit: 'Từ danh sách', why: '"fell by about seventy per cent" → decreased.' },
  { t: 'fill', q: 'Summary (tiếp): Critics of the study say it measured only (4) ___. Workers most often complain about noise and lack of (5) ___, and research shows that (6) ___ are costly for jobs needing concentration. Điền (4):', a: ['quantity'], limit: 'Từ danh sách', why: '"measured only quantity, not quality".' },
  { t: 'fill', q: 'Điền (5):', a: ['privacy'], limit: 'Từ danh sách', why: '"noise and lack of privacy".' },
  { t: 'fill', q: 'Điền (6):', a: ['interruptions'], limit: 'Từ danh sách', why: '"a single interrupted task takes… more than twenty minutes to resume".' }
]}
];

/* ---------- Viết ---------- */
window.LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'therefore', 'as a result', 'consequently', 'for example', 'for instance', 'in contrast', 'on the other hand', 'nevertheless', 'although', 'whereas', 'while', 'firstly', 'secondly', 'finally', 'in conclusion', 'to sum up', 'overall', 'in particular', 'such as', 'this means that', 'for this reason', 'despite', 'in spite of', 'similarly', 'likewise', 'by contrast', 'admittedly', 'having said that', 'in other words', 'as a consequence', 'to conclude'];
window.W1_CHECK = `
- [ ] Mở bài **paraphrase** đề (không chép), đủ: loại biểu đồ, nội dung, nơi, thời gian, đơn vị.
- [ ] Có đoạn **Overall** nêu 2–3 đặc điểm nổi bật, **không số liệu chi tiết**, không ý kiến.
- [ ] Body chia theo **nhóm logic** (tăng/giảm, lớn/nhỏ), không theo thứ tự đề.
- [ ] Mỗi body có **3–4 số liệu cụ thể** với đơn vị đúng.
- [ ] Thì đúng với thời gian biểu đồ; bị động với process; so sánh (không xu hướng) với biểu đồ tĩnh.
- [ ] Giới từ xu hướng đúng: *rise to / by / from… to*.
- [ ] 150–190 từ. Không kết luận, không nguyên nhân.
- [ ] Soát 3 lượt (W14): mạo từ, -s, thì; từ lặp; câu dài.
`;
window.W2_CHECK = `
- [ ] Mở bài: paraphrase đề + **thesis trả lời đúng câu hỏi** (có mức độ nếu "to what extent").
- [ ] Đúng **dạng đề** (W7): opinion / discussion / adv-disadv / problem-solution / two-part — mọi phần của đề được trả lời.
- [ ] Mỗi thân **một ý**, theo PEEL: câu chủ đề → giải thích (why ×2) → ví dụ cụ thể → liên kết.
- [ ] Lập trường **nhất quán** từ mở đến kết; kết không thêm ý mới.
- [ ] Từ nối vừa đủ (4–8), có dùng **this/these/such + danh từ** để nối.
- [ ] Từ vựng chủ đề (≥5 từ từ T1–T12), không lặp từ > 3 lần, không *good/bad/thing/very* quá 2 lần.
- [ ] Có câu phức đúng (although/because/which/if…), xen câu đơn rõ; không câu > 30 từ.
- [ ] 250–290 từ, 4–5 đoạn. Soát 3 lượt (W14).
`;
const CH = (type, title, yLabel, categories, series) => ({ type, title, yLabel, categories, series });
window.TASK1 = [
  { kind: 'Line graph', prompt: 'The graph below shows the number of cars per 1,000 people in four countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: CH('line', 'Cars per 1,000 people, 2000–2020', 'Cars per 1,000 people', ['2000', '2005', '2010', '2015', '2020'], [{ name: 'Germany', values: [520, 545, 560, 570, 580] }, { name: 'Thailand', values: [90, 110, 150, 200, 230] }, { name: 'Vietnam', values: [8, 15, 25, 45, 70] }, { name: 'Japan', values: [560, 580, 590, 590, 585] }]),
    plan: `**Overview**: Germany & Japan cao và gần như ổn định; Thailand & Vietnam thấp nhưng tăng mạnh (Vietnam tăng nhanh nhất theo tỷ lệ, gần 9 lần). **Body 1**: hai nước cao — số liệu đầu/cuối, Japan hơi giảm sau 2015. **Body 2**: hai nước thấp — Thailand tăng từ 90 lên 230; Vietnam từ 8 lên 70. Dùng *rose steadily / remained stable / grew dramatically / although from a much lower base*.` },
  { kind: 'Bar chart', prompt: 'The chart below shows the percentage of household spending on four categories in three countries in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: CH('bar', 'Household spending by category, 2022 (%)', '% of household spending', ['Housing', 'Food', 'Transport', 'Leisure'], [{ name: 'UK', values: [30, 12, 14, 18] }, { name: 'Vietnam', values: [22, 35, 10, 7] }, { name: 'Japan', values: [25, 20, 11, 12] }]),
    plan: `**Overview**: Housing là khoản lớn nhất ở UK và Japan; ở Vietnam là Food (35%). Leisure thấp nhất ở Vietnam, cao nhất ở UK. **Body 1**: Housing & Food (so sánh 3 nước). **Body 2**: Transport & Leisure. Biểu đồ tĩnh → ngôn ngữ so sánh: *the largest share, almost three times as much as, whereas, respectively*.` },
  { kind: 'Pie charts', prompt: 'The pie charts below show the sources of electricity in one country in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: { type: 'pie', title: 'Sources of electricity, 2000 vs 2020', pies: [{ name: '2000', slices: [{ name: 'Coal', value: 55 }, { name: 'Gas', value: 20 }, { name: 'Hydro', value: 15 }, { name: 'Nuclear', value: 8 }, { name: 'Wind/Solar', value: 2 }] }, { name: '2020', slices: [{ name: 'Coal', value: 25 }, { name: 'Gas', value: 30 }, { name: 'Hydro', value: 15 }, { name: 'Nuclear', value: 10 }, { name: 'Wind/Solar', value: 20 }] }] },
    plan: `**Overview**: Coal giảm mạnh từ hơn một nửa xuống một phần tư; Wind/Solar tăng từ gần 0 lên một phần năm; Gas thành nguồn lớn nhất năm 2020; Hydro không đổi. **Body 1**: hai thay đổi lớn (coal ↓, renewables ↑). **Body 2**: gas, nuclear, hydro. Dùng *accounted for, made up, the share of… fell from… to…, remained unchanged at*.` },
  { kind: 'Table', prompt: 'The table below gives information about the number of international students at three universities and the percentage of all students they represented, in 2010 and 2020. Summarise the information by selecting and reporting the main features.',
    chart: { type: 'table', title: 'International students', columns: ['University', '2010: number', '2010: % of all students', '2020: number', '2020: % of all students'], rows: [['Northfield', '2,100', '8%', '6,800', '21%'], ['Westbridge', '4,500', '15%', '5,100', '16%'], ['Eastgate', '900', '4%', '3,600', '12%']] },
    plan: `**Overview**: cả ba tăng; Northfield tăng nhiều nhất về số và tỷ lệ; Westbridge gần như không đổi về tỷ lệ dù số cao nhất năm 2010. **Body 1**: Northfield & Eastgate (tăng gấp 3–4). **Body 2**: Westbridge (tăng nhẹ, vẫn cao). Chú ý phân biệt *number* và *proportion*.` },
  { kind: 'Process', prompt: 'The diagram below shows how instant coffee is produced. Summarise the information by selecting and reporting the main features. (Các bước: 1 harvesting ripe cherries → 2 drying in the sun → 3 removing outer skin → 4 roasting beans at 200°C → 5 grinding → 6 brewing with hot water → 7 freeze-drying the liquid → 8 packing granules into jars.)',
    note: 'Không có hình: dùng danh sách bước ở trên như sơ đồ. Viết bằng hiện tại đơn bị động + từ trình tự.',
    plan: `**Overview**: 8 bước, tuyến tính, từ thu hoạch đến đóng gói; gồm giai đoạn xử lý hạt (1–5) và giai đoạn thành cà phê hòa tan (6–8). **Body 1**: bước 1–5. **Body 2**: bước 6–8. *First… are harvested; the cherries are then dried…; once dry, …; after which…; finally…*` },
  { kind: 'Map', prompt: 'The two maps below show a seaside town in 1990 and today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. (1990: fishing harbour ở phía nam; làng nhỏ ở trung tâm với nhà thờ và trường; đất nông nghiệp ở phía bắc; một con đường đất chạy bắc–nam. Hiện nay: harbour thành marina cho du thuyền kèm nhà hàng; đất nông nghiệp phía bắc thành khu khách sạn và bãi đỗ xe; đường được trải nhựa và mở rộng, thêm vòng xuyến; nhà thờ và trường vẫn còn; thêm bãi biển nhân tạo phía đông.)',
    note: 'Không có hình: dùng mô tả bằng chữ như hai bản đồ. Dùng bị động quá khứ/hoàn thành + ngôn ngữ vị trí.',
    plan: `**Overview**: từ làng chài nông nghiệp thành khu du lịch; thay đổi lớn nhất ở phía bắc (nông nghiệp → khách sạn) và phía nam (harbour → marina); nhà thờ, trường giữ nguyên. **Body 1**: bắc & nam. **Body 2**: giao thông & bãi biển phía đông, cái giữ nguyên. *was converted into, was replaced by, has been widened, remains, to the north of*.` },
  { kind: 'Formal letter [GT]', gt: true, prompt: 'You recently bought a laptop online, but when it arrived it was damaged. Write a letter to the company. In your letter: describe the damage; explain what happened when you contacted customer service; say what you would like the company to do.',
    plan: `*Dear Sir/Madam,* → mục đích (*I am writing to complain about…*) → đoạn 1 mô tả hư hỏng (ngày mua, mã đơn, chi tiết) → đoạn 2 lần liên hệ (ngày, ai, kết quả) → đoạn 3 yêu cầu (*I would like a full refund / replacement within…*) → *I look forward to… Yours faithfully,*. Không viết tắt.` },
  { kind: 'Informal letter [GT]', gt: true, prompt: 'A friend from another country is coming to visit your city for the first time. Write a letter to your friend. In your letter: suggest what they should bring; describe two places you will take them; explain how you will meet them when they arrive.',
    plan: `*Hi Anna, / Dear Anna,* → mở thân mật (*I can't wait to see you!*) → đoạn 1 mang gì (thời tiết, đồ) → đoạn 2 hai nơi (lý do) → đoạn 3 đón thế nào (sân bay, giờ, số điện thoại) → *See you soon! Best wishes,*. Rút gọn OK.` }
];
window.TASK2 = [
  { kind: 'Opinion', prompt: 'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?', plan: `Lập trường: largely agree, với điều kiện. Thân 1: lợi ích (trách nhiệm, kỹ năng) + ví dụ VN. Thân 2: rủi ro box-ticking → cách tổ chức. Kết: nhắc lập trường + điều kiện. (Bài mẫu trong W8.)` },
  { kind: 'Opinion', prompt: 'In many countries, people are deciding to have children later in life. Do you think this is a positive or negative development for society?', plan: `Lập trường: mainly positive (ổn định tài chính, cha mẹ trưởng thành) nhưng có hệ quả dân số. Thân 1: lợi ích cho trẻ & cha mẹ. Thân 2: hệ quả xã hội (tỷ lệ sinh, dân số già) → cần chính sách hỗ trợ. Kết.` },
  { kind: 'Opinion', prompt: 'Some people think that all university students should study whatever they like. Others believe they should only be allowed to study subjects that will be useful in the future, such as science and technology. To what extent do you agree with the second view?', plan: `Lập trường: largely disagree. Thân 1: khó dự đoán "useful"; nhân văn tạo kỹ năng tư duy. Thân 2: thừa nhận thiếu hụt STEM → giải pháp là khuyến khích (học bổng) không phải cấm. Kết.` },
  { kind: 'Opinion', prompt: 'Many people believe that social media has made it easier for people to express their opinions but has also made public debate worse. To what extent do you agree or disagree?', plan: `Lập trường: agree với cả hai vế. Thân 1: dễ bày tỏ (ví dụ phong trào, người bình thường có tiếng nói). Thân 2: chất lượng tranh luận giảm (thuật toán, ẩn danh, outrage). Kết: cần thiết kế nền tảng khác.` },
  { kind: 'Discussion', prompt: 'Some people think that the best way to reduce crime is to give longer prison sentences. Others believe there are better alternative ways. Discuss both views and give your opinion.', plan: `(Bài mẫu trong W9.) Thân 1: lý do ủng hộ án dài (cách ly, răn đe, công lý). Thân 2: thay thế (nguyên nhân gốc, tái phạm, Norway). Ý kiến: cân bằng nghiêng về phòng ngừa.` },
  { kind: 'Discussion', prompt: 'Some people think children should start formal education at a very early age. Others believe they should not start school until they are at least seven. Discuss both views and give your opinion.', plan: `Thân 1: học sớm (nền tảng, cha mẹ đi làm). Thân 2: học muộn (phát triển qua chơi, Phần Lan). Ý kiến: 6 tuổi + mầm non dựa trên chơi.` },
  { kind: 'Discussion', prompt: 'Some people believe that it is the responsibility of individuals to protect the environment, while others think governments and large companies should take the lead. Discuss both views and give your opinion.', plan: `Thân 1: cá nhân (tiêu dùng, bầu cử, nhưng tác động nhỏ). Thân 2: chính phủ/công ty (luật, quy mô, 100 công ty = 70% phát thải). Ý kiến: chính phủ dẫn, cá nhân hỗ trợ.` },
  { kind: 'Advantages/disadvantages', prompt: 'Many companies now allow employees to work from home. Do the advantages of this development outweigh the disadvantages?', plan: `(Bài mẫu trong W10.) Thân 1: nhược (giao tiếp, cô lập). Thân 2: ưu (thời gian, tuyển dụng rộng, môi trường) + phản hồi nhược. Kết: ưu vượt trội.` },
  { kind: 'Advantages/disadvantages', prompt: 'More and more people are shopping online instead of in physical stores. What are the advantages and disadvantages of this trend?', plan: `Thân 1: ưu (tiện, giá, lựa chọn). Thân 2: nhược (cửa hàng địa phương đóng, rác bao bì, mua bốc đồng). Kết: có thể nghiêng hoặc cân bằng.` },
  { kind: 'Advantages/disadvantages', prompt: 'In some countries, young people are encouraged to take a gap year between finishing school and starting university. Do the advantages outweigh the disadvantages?', plan: `Lập trường: outweigh, với điều kiện có kế hoạch. Thân 1: nhược (mất đà, chi phí, lãng phí nếu không mục tiêu). Thân 2: ưu (trưởng thành, định hướng, kinh nghiệm) + điều kiện.` },
  { kind: 'Problem/solution', prompt: 'In many cities, the number of private cars is increasing rapidly. What problems does this cause, and what measures could be taken to solve them?', plan: `(Bài mẫu trong W11.) Vấn đề: tắc nghẽn, ô nhiễm. Giải pháp: phí vào trung tâm + đầu tư giao thông công cộng; thuế xe phát thải + trợ giá xe điện.` },
  { kind: 'Problem/solution', prompt: 'Many young people today spend a large amount of time on their phones. What are the causes of this, and what effects does it have on their lives?', plan: `Chú ý: causes + effects, KHÔNG cần giải pháp. Nguyên nhân: thiết kế gây nghiện, áp lực xã hội, giải trí rẻ. Hệ quả: giấc ngủ, tập trung, so sánh xã hội; cũng có hệ quả tích cực (kết nối, học).` },
  { kind: 'Problem/solution', prompt: 'Obesity rates among children are rising in many developed countries. What are the main causes of this problem, and what can be done to tackle it?', plan: `Nguyên nhân: đồ ăn chế biến rẻ, quảng cáo, ít vận động. Biện pháp: thuế đường/cấm quảng cáo cho trẻ (chính phủ), bữa ăn trường, giáo dục cha mẹ.` },
  { kind: 'Two-part', prompt: 'More and more people are choosing to live alone. Why is this? Is it a positive or negative development?', plan: `(Bài mẫu trong W12.) Lý do: kinh tế, thay đổi xã hội. Đánh giá: mainly positive, rủi ro cho người già → dịch vụ cộng đồng.` },
  { kind: 'Two-part', prompt: 'Many people today change careers several times during their working lives. Why is this happening? Do you think it is a good thing?', plan: `Lý do: công nghệ đổi ngành, ít ràng buộc, tìm ý nghĩa. Đánh giá: mostly good (kỹ năng đa dạng, hạnh phúc) nhưng chi phí đào tạo lại, bất ổn.` },
  { kind: 'Two-part', prompt: 'In many countries, traditional festivals and celebrations are becoming less important. Why might this be the case? What could be done to preserve them?', plan: `Lý do: đô thị hóa, lịch làm việc, thương mại hóa, giải trí toàn cầu. Biện pháp: giáo dục trong trường, ngày nghỉ, hỗ trợ cộng đồng địa phương, truyền thông.` }
];

/* ---------- Nói ---------- */
window.P1_TIPS = `
### Nhắc nhanh
- Công thức **A-R-E-(F)**: trả lời → lý do → ví dụ/chi tiết → cảm xúc/đối chiếu. 2–4 câu.
- Đổi thì theo câu hỏi. "Did you…" → quá khứ. "Would you…" → would.
- Không nghe rõ → *Sorry, could you repeat that?*
- Trả lời thật. "Not really, to be honest…" hoàn toàn ổn.
- Ghi âm cả lượt, nghe lại, đánh dấu câu nào thiếu R hoặc E.
`;
window.SPEAK_RUBRIC = `
| Tiêu chí | 5 | 6 | 7 |
|---|---|---|---|
| **Fluency & Coherence** | Dừng nhiều, lặp, tự sửa; khó theo | Nói được dài, đôi khi mất mạch; từ nối máy móc | Nói dài tự nhiên, dừng để nghĩ ý (không tìm từ), từ nối linh hoạt |
| **Lexical Resource** | Đủ cho chủ đề quen; paraphrase hạn chế | Đủ mọi chủ đề, có từ ít phổ biến nhưng đôi khi sai | Linh hoạt, idiom/collocation tự nhiên, paraphrase hiệu quả |
| **Grammar** | Câu đơn đúng, câu phức nhiều lỗi | Có câu phức; lỗi không gây hiểu lầm | Nhiều câu phức, đa số không lỗi |
| **Pronunciation** | Hiểu được nhưng cần cố gắng | Nhìn chung rõ, đặc điểm không đều | Rõ, dùng nhịp/ngữ điệu truyền nghĩa, ít lỗi |

Trước khi chọn điểm, ghi **một bằng chứng** cho mỗi tiêu chí (ví dụ: "dừng > 3 giây 4 lần", "sai thì quá khứ 3 lần", "thiếu âm cuối -s").
`;
window.SPEAK = {
  part1: {
    'Work & Study': ['What do you do?', 'Why did you choose this job?', 'What do you like most about your work?', 'What is the most difficult part of your job?', 'Do you prefer working alone or in a team?', 'Would you like to change your job in the future?', 'What skills are important in your job?', 'Do you often work overtime?'],
    'Home & Hometown': ['Do you live in a house or a flat?', 'Which room do you like most in your home?', 'What would you like to change about your home?', 'Where is your hometown?', 'What is your hometown famous for?', 'Has your hometown changed much since you were a child?', 'Is your hometown a good place for young people?', 'Do you plan to live there in the future?'],
    'Daily routine': ['Are you a morning person or a night person?', 'What do you usually do in the morning?', 'What is your favourite part of the day?', 'Do your weekdays and weekends differ a lot?', 'How do you usually get to work?', 'What do you do to relax after work?', 'Do you have a fixed routine?', 'Would you like to change anything about your daily routine?'],
    'Food': ['What kind of food do you like?', 'Do you cook at home?', 'How often do you eat out?', 'What is a popular dish in your country?', 'Did you like the same food when you were a child?', 'Do you think people in your country eat healthily?', 'Have you ever tried food from another country?', 'Is it important to eat with your family?'],
    'Hobbies & Free time': ['What do you like to do in your free time?', 'Have you had this hobby for a long time?', 'Do you prefer indoor or outdoor activities?', 'Did you have any hobbies as a child?', 'Is there a new hobby you would like to try?', 'Do you spend your free time with friends or alone?', 'How much free time do you have during the week?', 'Do you think people have less free time than in the past?'],
    'Travel': ['Do you like travelling?', 'Where did you go on your last trip?', 'Do you prefer travelling alone or with others?', 'What is your favourite way to travel?', 'Is there a country you would like to visit?', 'Do you prefer beach or city holidays?', 'How do you usually plan a trip?', 'Do people in your country travel a lot?'],
    'Weather': ['What is the weather like in your city?', 'Do you prefer hot or cold weather?', 'Does the weather affect your mood?', 'What do you do on rainy days?', 'Is there a season you dislike?', 'Has the weather changed in recent years?', 'Do you check the weather forecast?', 'What is your favourite season and why?'],
    'Technology': ['What gadgets do you use every day?', 'Could you live without your phone for a week?', 'Do you spend too much time on screens?', 'What was the last thing you bought online?', 'Do you prefer reading on paper or on a screen?', 'How has technology changed the way you work?', 'Do older people in your family use technology?', 'Is there any technology you find annoying?'],
    'Friends & Family': ['Do you have a large family?', 'Who are you closest to in your family?', 'Do you prefer spending time with family or friends?', 'How do you keep in touch with old friends?', 'What do you usually do with your friends?', 'Is it easy to make new friends as an adult?', 'Do you have a friend you have known since childhood?', 'What makes a good friend?'],
    'Books, Music & Films': ['What kind of books do you like?', 'How often do you read?', 'What kind of music do you listen to?', 'Do you listen to music while working?', 'What was the last film you watched?', 'Do you prefer watching films at home or in the cinema?', 'Did you read a lot as a child?', 'Has your taste in music changed over the years?'],
    'Chủ đề lạ': ['Do you like the colour of your bedroom walls?', 'Are you a patient person?', 'Do you often look at the sky?', 'Do you like noisy places?', 'Do you ever get bored?', 'Do you prefer to use maps or ask for directions?', 'Do you like wearing hats?', 'Do you often give gifts?']
  },
  cues: [
    { id: 'c1', title: 'Describe a person who has had a positive influence on you.', points: ['who this person is', 'how you know them', 'what they have done'], explain: 'why they have influenced you', p3: ['What qualities make someone a good role model?', 'Do you think celebrities have a positive or negative influence on young people?', 'How have the people that young people admire changed compared with the past?', 'Should parents or teachers be the main influence on a child?'], tips: 'Chọn người thật (sếp cũ, thầy cô, người thân). Một tính cách + bằng chứng cụ thể (S4). Phần explain: họ thay đổi cách bạn nghĩ/làm gì.' },
    { id: 'c2', title: 'Describe a time when you had to solve a difficult problem at work or study.', points: ['what the problem was', 'when and where it happened', 'what you did to solve it'], explain: 'how you felt after solving it', p3: ['What skills are needed to solve problems at work?', 'Do you think people today are better at solving problems than in the past?', 'Is it better to solve problems alone or in a team?', 'How can schools teach problem-solving?'], tips: 'Thì kể chuyện: nền tiếp diễn, sự kiện quá khứ đơn, quá khứ hoàn thành cho nguyên nhân trước đó. Kết bằng bài học.' },
    { id: 'c3', title: 'Describe a place you like to go to relax.', points: ['where it is', 'how often you go there', 'what you do there'], explain: 'why this place helps you relax', p3: ['Why do people need places to relax?', 'Is it easier to relax in the city or the countryside?', 'Do you think people are more stressed now than 50 years ago?', 'Should employers help their staff to relax?'], tips: 'Giác quan + không khí (S5): nhìn, nghe, ngửi. Thói quen hiện tại đơn; lần đầu đến quá khứ.' },
    { id: 'c4', title: 'Describe an object you own that is important to you.', points: ['what it is', 'how you got it', 'what you use it for'], explain: 'why it is important to you', p3: ['Why do people become attached to objects?', 'Do people today buy too many things they do not need?', 'Is it better to give experiences or objects as gifts?', 'How has shopping changed in your country?'], tips: 'Vật bình thường có câu chuyện tốt hơn vật đắt tiền. Phần explain dài nhất: kỷ niệm, người tặng, thay đổi gì.' },
    { id: 'c5', title: 'Describe a skill you learned that has been useful in your life.', points: ['what the skill is', 'when and how you learned it', 'how you use it now'], explain: 'why it has been useful', p3: ['What skills should children learn at school?', 'Is it easier to learn new skills when you are young?', 'How has the internet changed the way people learn skills?', 'Which is more important: practical skills or academic knowledge?'], tips: 'Có thể là kỹ năng nghề (debugging) hoặc đời sống (nấu ăn, lái xe). Quá khứ cho lúc học, hiện tại hoàn thành cho tác động đến nay.' },
    { id: 'c6', title: 'Describe a memorable event you attended.', points: ['what the event was', 'when and where it took place', 'who you went with'], explain: 'why it was memorable', p3: ['Why do people enjoy attending large events?', 'Are traditional festivals still important in your country?', 'Do you think events like concerts are too expensive?', 'How might live events change in the future?'], tips: 'Trình tự: started with… the highlight was… ended with. Một khoảnh khắc cụ thể đáng nhớ.' },
    { id: 'c7', title: 'Describe a time when you received good news.', points: ['what the news was', 'how you received it', 'who you shared it with'], explain: 'how you felt about it', p3: ['How do people usually share good news today?', 'Is it better to receive important news in person or by message?', 'Do you think the media focuses too much on bad news?', 'Why do some people prefer to keep good news private?'], tips: 'Cảm xúc đa dạng: relieved, thrilled, over the moon, it took a while to sink in.' },
    { id: 'c8', title: 'Describe a piece of technology you find useful.', points: ['what it is', 'how you use it', 'how often you use it'], explain: 'why you find it useful', p3: ['How has technology changed the way people work?', 'Do you think people rely too much on technology?', 'What technology do you think will be common in 20 years?', 'Should children be given smartphones at an early age?'], tips: 'Tránh liệt kê tính năng; nói nó giải quyết vấn đề gì của bạn. Part 3: hedging + trade-off.' },
    { id: 'c9', title: 'Describe a journey that did not go as planned.', points: ['where you were going', 'what went wrong', 'what you did'], explain: 'what you learned from the experience', p3: ['Why do people like to travel?', 'Is it better to plan a trip carefully or be spontaneous?', 'How has tourism affected your country?', 'Do you think people will travel more or less in the future?'], tips: 'Kể chuyện có đoạn "kịch tính" (quá khứ tiếp diễn bị xen vào). Kết bằng bài học, có thể dùng điều kiện loại 3: If I had checked…' },
    { id: 'c10', title: 'Describe a change you would like to make in your life.', points: ['what the change is', 'why you want to make it', 'how you would do it'], explain: 'how it would improve your life', p3: ['Why do people find it difficult to change habits?', 'Do you think people change more as they get older?', 'Is change always a good thing?', 'How can governments encourage people to live healthier lives?'], tips: 'Tương lai + điều kiện loại 2: If I managed to…, I would… Dùng be going to / plan to / hope to.' },
    { id: 'c11', title: 'Describe a book or film that made you think.', points: ['what it was about', 'when you read or watched it', 'why you chose it'], explain: 'what it made you think about', p3: ['Do people read less than they used to?', 'Are films based on books usually worse than the books?', 'Should schools make students read classic literature?', 'How do stories influence the way people see the world?'], tips: 'Tóm tắt nội dung 3 câu thôi; phần "made you think" là trọng tâm. Dùng which-clause: …, which made me realise…' },
    { id: 'c12', title: 'Describe a team you have been part of.', points: ['what the team was', 'what your role was', 'what the team achieved'], explain: 'how you felt about being in this team', p3: ['What makes a team work well together?', 'Is it better to work in a team or alone?', 'Do you think leaders are born or made?', 'How has teamwork changed with remote working?'], tips: 'Nói cụ thể vai trò và một tình huống khó của nhóm. Part 3: liên hệ kinh nghiệm làm việc thật của bạn nhưng dùng chủ ngữ khái quát.' }
  ]
};
