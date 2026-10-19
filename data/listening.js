/* ===== Nghe kiểu Part 1–2 bằng kịch bản tự soạn, đọc máy =====
   Mỗi bài: script [{sp:'A'|'B'|'N', text}] (A/B hai giọng khác nhau, N = người dẫn), qs như Reading (fill/mc). Giữ mỗi dòng ngắn để giọng máy không bị cắt. */
window.LISTEN_HOWTO = `
### Cách dùng
- Đây là **mô phỏng** Part 1–2 bằng giọng máy: dùng để luyện **quy trình** (đọc trước → đoán loại từ → nghe một lần → viết → kiểm tra giới hạn từ). Đề thật phải dùng audio Cambridge.
- Bấm **Bắt đầu**: có 30 giây đọc câu hỏi, rồi máy đọc kịch bản **một lần**. Điền trong lúc nghe.
- **Nghe lại** được, nhưng kết quả sẽ ghi "đã nghe lại" — hãy tự trọng để thấy trình độ thật.
- Sau khi nộp: xem transcript, gạch chỗ bẫy sửa lại ("no, sorry…") và paraphrase. Chép chính tả 3 câu khó nhất ở trang Nghe · chính tả.
- Giọng máy không nối âm tự nhiên bằng người; nếu bạn làm đúng 9–10/10 ở đây mà đề thật chỉ 6/10 thì vấn đề là nối âm/tốc độ → tăng shadowing (P7, P9).
`;
window.LISTEN = [
{ id: 'ls1', part: 1, title: 'Part 1 — Booking a language course', intro: 'A man phones a language school to enrol on a course. Complete the form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
  script: [
    { sp: 'A', text: 'Good morning, Riverside Language Centre, Sarah speaking. How can I help you?' },
    { sp: 'B', text: 'Oh, hello. I\'d like to enrol on one of your evening English courses, please.' },
    { sp: 'A', text: 'Certainly. Could I take your name first?' },
    { sp: 'B', text: 'Yes, it\'s Daniel Okafor. That\'s O, K, A, F, O, R.' },
    { sp: 'A', text: 'O, K, A, F, O, R. Thank you. And a contact number?' },
    { sp: 'B', text: 'My mobile is oh seven seven, double two, nine, four, one, six, three.' },
    { sp: 'A', text: 'Oh seven seven, double two, nine, four, one, six, three. Great. Which level are you interested in?' },
    { sp: 'B', text: 'Well, I did the intermediate course last year, so I think upper intermediate now.' },
    { sp: 'A', text: 'Upper intermediate. We have two options. There\'s a general course on Tuesday evenings, and a business English course on Thursdays.' },
    { sp: 'B', text: 'I\'ll go for the Thursday one. I need English mainly for work.' },
    { sp: 'A', text: 'Business English on Thursdays, then. That runs from half past six to half past eight.' },
    { sp: 'B', text: 'Half past six. Fine. And how much is it?' },
    { sp: 'A', text: 'The full course is twelve weeks and costs three hundred and sixty pounds. But if you pay before the first of September, it\'s three hundred and twenty.' },
    { sp: 'B', text: 'Three twenty if I pay early. I\'ll do that. Is the book included?' },
    { sp: 'A', text: 'No, the coursebook is separate, I\'m afraid. It\'s twenty-eight pounds, or you can borrow one from our library for a small deposit.' },
    { sp: 'B', text: 'I\'ll buy it. One more thing, where exactly are you? I know you\'re near the station.' },
    { sp: 'A', text: 'We\'re at fourteen Castle Street. Castle, C, A, S, T, L, E. The entrance is opposite the post office.' },
    { sp: 'B', text: 'Fourteen Castle Street, opposite the post office. Got it.' },
    { sp: 'A', text: 'And the first class is on the ninth of September. Please arrive fifteen minutes early for registration.' },
    { sp: 'B', text: 'The ninth. Thanks very much for your help.' }
  ],
  qs: [
    { t: 'fill', q: 'Name: Daniel ___', a: ['okafor'], limit: 'ONE WORD', why: 'Đánh vần O-K-A-F-O-R.' },
    { t: 'fill', q: 'Mobile: ___', a: ['0772294163'], limit: 'A NUMBER', why: 'oh seven seven double two nine four one six three.' },
    { t: 'fill', q: 'Level: ___ intermediate', a: ['upper'], limit: 'ONE WORD', why: '"upper intermediate now".' },
    { t: 'fill', q: 'Course chosen: ___ English', a: ['business'], limit: 'ONE WORD', why: 'Bẫy: general course cũng được nhắc.' },
    { t: 'fill', q: 'Day: ___', a: ['thursday', 'thursdays'], limit: 'ONE WORD', why: 'Tuesday là distractor.' },
    { t: 'fill', q: 'Start time: ___ pm', a: ['6:30', '6.30', 'half past six', '6:30 pm'], limit: 'A TIME', why: 'half past six.' },
    { t: 'fill', q: 'Cost if paid before 1 September: £ ___', a: ['320'], limit: 'A NUMBER', why: '360 là giá thường; 320 nếu trả sớm.' },
    { t: 'fill', q: 'Coursebook price: £ ___', a: ['28'], limit: 'A NUMBER', why: 'twenty-eight pounds.' },
    { t: 'fill', q: 'Address: 14 ___ Street', a: ['castle'], limit: 'ONE WORD', why: 'Đánh vần C-A-S-T-L-E.' },
    { t: 'fill', q: 'First class: ___ September', a: ['9', '9th', 'ninth'], limit: 'A NUMBER', why: 'the ninth of September.' }
  ]},

{ id: 'ls2', part: 1, title: 'Part 1 — Reporting a lost bag', intro: 'A woman phones a bus company about a bag she left on a bus. Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.',
  script: [
    { sp: 'B', text: 'City Buses lost property, Mark here. How can I help?' },
    { sp: 'A', text: 'Hi, I left a bag on one of your buses this morning and I\'m hoping someone\'s handed it in.' },
    { sp: 'B', text: 'Let\'s see. Which route was it?' },
    { sp: 'A', text: 'The number forty-two, going towards the hospital.' },
    { sp: 'B', text: 'The forty-two. And roughly what time?' },
    { sp: 'A', text: 'I got on at about ten past eight, and I got off at the library, so maybe twenty-five past.' },
    { sp: 'B', text: 'Okay, between eight ten and eight twenty-five. Can you describe the bag?' },
    { sp: 'A', text: 'It\'s a backpack. Dark green, with a small yellow label on the front.' },
    { sp: 'B', text: 'Dark green backpack, yellow label. What was inside?' },
    { sp: 'A', text: 'My laptop, which is the main thing, a water bottle, and a notebook. Oh, and my student card.' },
    { sp: 'B', text: 'Right. I\'ll need your name and a number.' },
    { sp: 'A', text: 'Priya Shah. S, H, A, H. And my number is oh four, one, double five, three, eight, two, nine, oh.' },
    { sp: 'B', text: 'Oh four one, double five, three eight two, nine oh. Thanks. Now, items handed in today won\'t reach us until this evening.' },
    { sp: 'A', text: 'So when should I call back?' },
    { sp: 'B', text: 'Don\'t call. We\'ll text you if it arrives. If you haven\'t heard by Friday, come in to the depot in person.' },
    { sp: 'A', text: 'And where\'s the depot?' },
    { sp: 'B', text: 'Harbour Road, behind the main bus station. We\'re open eight till six, but closed on Sundays.' },
    { sp: 'A', text: 'Harbour Road. Is there a fee to collect it?' },
    { sp: 'B', text: 'There\'s a handling charge of three pounds, and you\'ll need some ID, a passport or a driving licence.' },
    { sp: 'A', text: 'Three pounds and ID. Thank you so much.' }
  ],
  qs: [
    { t: 'fill', q: 'Bus route: number ___', a: ['42'], limit: 'A NUMBER', why: 'forty-two.' },
    { t: 'fill', q: 'Got off at: the ___', a: ['library'], limit: 'ONE WORD', why: 'Hospital là hướng đi, không phải nơi xuống.' },
    { t: 'fill', q: 'Bag: dark ___ backpack', a: ['green'], limit: 'ONE WORD', why: 'dark green.' },
    { t: 'fill', q: 'Label colour: ___', a: ['yellow'], limit: 'ONE WORD', why: 'small yellow label.' },
    { t: 'fill', q: 'Main item inside: ___', a: ['laptop', 'a laptop'], limit: 'ONE WORD', why: '"which is the main thing".' },
    { t: 'fill', q: 'Caller\'s surname: ___', a: ['shah'], limit: 'ONE WORD', why: 'S-H-A-H.' },
    { t: 'fill', q: 'Phone: ___', a: ['0415538290'], limit: 'A NUMBER', why: 'oh four one double five three eight two nine oh.' },
    { t: 'mc', q: 'What should the caller do if she hears nothing by Friday?', o: ['Phone the depot', 'Visit the depot', 'Send a text message'], a: 1, why: '"come in to the depot in person" — bẫy: "Don\'t call".' },
    { t: 'fill', q: 'Depot location: ___ Road', a: ['harbour'], limit: 'ONE WORD', why: 'Harbour Road.' },
    { t: 'fill', q: 'Collection charge: £ ___', a: ['3'], limit: 'A NUMBER', why: 'three pounds.' }
  ]},

{ id: 'ls3', part: 1, title: 'Part 1 — Joining a sports club', intro: 'A student asks about membership of a university sports club. Complete the table. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.',
  script: [
    { sp: 'A', text: 'Hi, I\'m interested in joining the sports centre. Could you tell me about membership?' },
    { sp: 'B', text: 'Of course. There are three types. Gold, Silver and Bronze.' },
    { sp: 'A', text: 'What\'s the difference?' },
    { sp: 'B', text: 'Gold gives you everything: gym, pool, all classes, and the climbing wall. That\'s forty-five pounds a month.' },
    { sp: 'A', text: 'Forty-five. And Silver?' },
    { sp: 'B', text: 'Silver is gym and pool only, no classes. Thirty pounds a month. Bronze is just the gym, and that\'s eighteen pounds.' },
    { sp: 'A', text: 'I mainly want to swim and maybe do yoga. So I\'d need Gold for the classes?' },
    { sp: 'B', text: 'Yes, classes are Gold only, I\'m afraid. Although, students get a discount of twenty per cent on all three.' },
    { sp: 'A', text: 'That helps. So Gold would be thirty-six for me. What are the opening hours?' },
    { sp: 'B', text: 'Weekdays we open at six in the morning and close at ten at night. At weekends it\'s eight till eight.' },
    { sp: 'A', text: 'Six till ten on weekdays. Is the pool open all those hours?' },
    { sp: 'B', text: 'Mostly, but it\'s closed for cleaning on Wednesday mornings until nine.' },
    { sp: 'A', text: 'Wednesday mornings. Okay. How do I join?' },
    { sp: 'B', text: 'You fill in a form online, then come in with your student card and a photo for your membership card.' },
    { sp: 'A', text: 'A photo. Do I need a medical certificate?' },
    { sp: 'B', text: 'Not a certificate, no, but you do have to complete a short health questionnaire.' },
    { sp: 'A', text: 'Fine. And can I cancel if I\'m too busy during exams?' },
    { sp: 'B', text: 'You can freeze your membership for up to two months a year, free of charge. Cancelling needs one month\'s notice.' },
    { sp: 'A', text: 'Two months\' freeze. That\'s really useful. Thanks.' }
  ],
  qs: [
    { t: 'fill', q: 'Gold membership includes gym, pool, classes and the ___', a: ['climbing wall'], limit: 'NO MORE THAN TWO WORDS', why: 'climbing wall.' },
    { t: 'fill', q: 'Gold: £ ___ per month (standard price)', a: ['45'], limit: 'A NUMBER', why: 'forty-five; 36 là giá sau giảm.' },
    { t: 'fill', q: 'Silver includes: gym and ___', a: ['pool'], limit: 'ONE WORD', why: 'gym and pool only.' },
    { t: 'fill', q: 'Bronze: £ ___ per month', a: ['18'], limit: 'A NUMBER', why: 'eighteen pounds.' },
    { t: 'fill', q: 'Student discount: ___ %', a: ['20'], limit: 'A NUMBER', why: 'twenty per cent.' },
    { t: 'fill', q: 'Weekday closing time: ___ pm', a: ['10', '10:00', 'ten'], limit: 'A TIME', why: 'close at ten at night.' },
    { t: 'fill', q: 'Pool closed for cleaning: ___ mornings', a: ['wednesday'], limit: 'ONE WORD', why: 'Wednesday mornings until nine.' },
    { t: 'fill', q: 'To join, bring student card and a ___', a: ['photo', 'a photo'], limit: 'ONE WORD', why: 'photo for membership card.' },
    { t: 'fill', q: 'Must complete a health ___', a: ['questionnaire'], limit: 'ONE WORD', why: 'Không phải certificate.' },
    { t: 'fill', q: 'Membership can be frozen for up to ___ a year', a: ['two months', '2 months'], limit: 'NO MORE THAN TWO WORDS', why: 'two months.' }
  ]},

{ id: 'ls4', part: 2, title: 'Part 2 — Welcome talk at a community garden', intro: 'A volunteer coordinator welcomes new members to a community garden. Answer the questions. Choose the correct letter or write NO MORE THAN TWO WORDS.',
  script: [
    { sp: 'N', text: 'Good morning everyone, and welcome to Greenfield Community Garden. My name\'s Tom and I coordinate the volunteers here.' },
    { sp: 'N', text: 'Let me start with a little history. The garden was created in two thousand and twelve, on land that used to be a car park for the old factory next door.' },
    { sp: 'N', text: 'When the factory closed, the council planned to build flats here. But local residents campaigned for a green space instead, and after two years they won.' },
    { sp: 'N', text: 'Today we have forty-eight individual plots, plus a shared orchard and the pond at the far end, which we dug in two thousand and eighteen.' },
    { sp: 'N', text: 'Now, as a new member you\'ll be given a plot. The waiting list used to be very long, up to three years, but we\'ve added more plots and it\'s now about six months.' },
    { sp: 'N', text: 'Your plot comes with a water tap nearby, but please note, we ask everyone to use watering cans rather than hoses, to save water.' },
    { sp: 'N', text: 'Tools are in the green shed behind the main gate. You\'ll get a code for the padlock by email. Please clean tools before you put them back.' },
    { sp: 'N', text: 'The most important rule is about chemicals. We are an organic garden, so no pesticides or artificial fertilisers at all. Compost is free from the bins near the shed.' },
    { sp: 'N', text: 'We also ask members to help with shared tasks for two hours a month. That could be mowing the paths, maintaining the orchard, or helping at our open days.' },
    { sp: 'N', text: 'Speaking of which, our next open day is on Saturday the twentieth of May, and we expect around three hundred visitors. We\'ll need people on the plant stall and the café.' },
    { sp: 'N', text: 'Finally, membership costs thirty pounds a year, which goes towards water, insurance and seeds. Payment is due in April.' },
    { sp: 'N', text: 'If you have any questions, I\'m here every Tuesday and Saturday morning. Otherwise, email the committee at the address on your welcome letter. Enjoy your plot!' }
  ],
  qs: [
    { t: 'mc', q: 'Before 2012, the site was', o: ['a factory', 'a car park', 'a block of flats'], a: 1, why: '"used to be a car park for the old factory" — factory ở bên cạnh.' },
    { t: 'mc', q: 'How long did residents campaign for the garden?', o: ['six months', 'two years', 'three years'], a: 1, why: '"after two years they won".' },
    { t: 'fill', q: 'Number of individual plots: ___', a: ['48'], limit: 'A NUMBER', why: 'forty-eight.' },
    { t: 'fill', q: 'The ___ was dug in 2018.', a: ['pond'], limit: 'ONE WORD', why: 'the pond at the far end.' },
    { t: 'mc', q: 'The current waiting time for a plot is about', o: ['six months', 'two years', 'three years'], a: 0, why: 'Bẫy: "used to be… three years".' },
    { t: 'fill', q: 'Members should water plants using ___ (not hoses).', a: ['watering cans', 'cans'], limit: 'NO MORE THAN TWO WORDS', why: 'watering cans.' },
    { t: 'fill', q: 'Tools are kept in the green ___.', a: ['shed'], limit: 'ONE WORD', why: 'green shed behind the main gate.' },
    { t: 'mc', q: 'Which of these is NOT allowed in the garden?', o: ['compost', 'pesticides', 'seeds'], a: 1, why: 'organic garden → no pesticides.' },
    { t: 'fill', q: 'Members must do shared tasks for ___ a month.', a: ['two hours', '2 hours'], limit: 'NO MORE THAN TWO WORDS', why: 'two hours a month.' },
    { t: 'fill', q: 'Annual membership fee: £ ___', a: ['30'], limit: 'A NUMBER', why: 'thirty pounds a year.' }
  ]},

{ id: 'ls5', part: 2, title: 'Part 2 — Guided tour of a museum (map-style directions)', intro: 'A guide explains the layout of a museum. Imagine the entrance hall is at the SOUTH. Answer the questions.',
  script: [
    { sp: 'N', text: 'Welcome to the City Museum. Before we start, let me explain the layout so you can find your way around later.' },
    { sp: 'N', text: 'We\'re standing in the entrance hall, at the south end of the building. Directly in front of you, in the centre, is the main gallery with the natural history collection.' },
    { sp: 'N', text: 'To your left, that\'s the west side, you\'ll find the café. It\'s open until half past four, and the coffee is better than you\'d expect.' },
    { sp: 'N', text: 'To your right, on the east side, is the gift shop, and just beyond it, in the north-east corner, are the toilets.' },
    { sp: 'N', text: 'If you walk straight through the main gallery, you reach the north wing. That\'s where the temporary exhibition is, this month it\'s photographs of the city in the nineteen fifties.' },
    { sp: 'N', text: 'The children\'s area used to be in the north wing too, but we moved it last year. It\'s now upstairs, directly above the café.' },
    { sp: 'N', text: 'Also upstairs, above the main gallery, is the lecture theatre. We have a talk there at two o\'clock today about the museum\'s founder.' },
    { sp: 'N', text: 'One thing to note: the lift is out of order at the moment, so the only way upstairs is the staircase next to the gift shop.' },
    { sp: 'N', text: 'Lockers for bags are here in the entrance hall, behind the information desk. They take a one pound coin, which you get back.' },
    { sp: 'N', text: 'Photography is allowed everywhere except in the temporary exhibition, where the photographs are on loan and the owners have asked us not to permit it.' },
    { sp: 'N', text: 'The museum closes at five, and the last entry is at quarter past four. Right, let\'s begin in the main gallery.' }
  ],
  qs: [
    { t: 'mc', q: 'The café is located', o: ['on the west side of the entrance hall', 'on the east side of the entrance hall', 'in the north wing'], a: 0, why: '"To your left, that\'s the west side".' },
    { t: 'mc', q: 'The toilets are', o: ['next to the café', 'in the north-east corner', 'upstairs'], a: 1, why: 'beyond the gift shop, north-east corner.' },
    { t: 'fill', q: 'The temporary exhibition shows photographs of the city in the ___.', a: ['1950s', 'nineteen fifties', '50s'], limit: 'NO MORE THAN TWO WORDS', why: 'nineteen fifties.' },
    { t: 'mc', q: 'The children\'s area is now', o: ['in the north wing', 'above the café', 'above the main gallery'], a: 1, why: 'Bẫy "used to be in the north wing"; now above the café.' },
    { t: 'fill', q: 'The talk in the lecture theatre starts at ___.', a: ['2', '2:00', "two o'clock", '2 pm'], limit: 'A TIME', why: 'two o\'clock.' },
    { t: 'mc', q: 'Visitors can go upstairs using', o: ['the lift', 'the stairs by the gift shop', 'the stairs by the café'], a: 1, why: 'lift out of order; staircase next to the gift shop.' },
    { t: 'fill', q: 'Lockers need a ___ coin.', a: ['one pound', '£1', '1 pound'], limit: 'NO MORE THAN TWO WORDS', why: 'one pound coin, returned.' },
    { t: 'mc', q: 'Where is photography NOT allowed?', o: ['the main gallery', 'the temporary exhibition', 'the café'], a: 1, why: 'photographs on loan.' },
    { t: 'fill', q: 'Last entry: ___', a: ['4:15', '4.15', 'quarter past four', '4:15 pm'], limit: 'A TIME', why: 'quarter past four; closes at five.' }
  ]},

{ id: 'ls6', part: 2, title: 'Part 2 — Radio announcement: changes to local bus services', intro: 'A local radio presenter announces changes to bus services. Answer the questions.',
  script: [
    { sp: 'N', text: 'And now some travel news for anyone who uses the buses in Westfield. From Monday the third of June there are several changes to local services.' },
    { sp: 'N', text: 'First, the number twelve, which currently runs every twenty minutes, will run every fifteen minutes during the day. In the evening it stays at every half hour.' },
    { sp: 'N', text: 'Second, the number seven will no longer go to the railway station. Instead it will end at the shopping centre. Passengers for the station should take the new number seven A.' },
    { sp: 'N', text: 'Third, there\'s a brand new service, the number thirty, linking the university with the hospital. It runs Monday to Friday only, from seven in the morning until seven in the evening.' },
    { sp: 'N', text: 'Fares are changing too. A single journey goes up from two pounds to two pounds twenty. However, the daily ticket stays at five pounds, so it\'s better value if you make three or more trips.' },
    { sp: 'N', text: 'Children under five continue to travel free, and the under-sixteen fare is now exactly half the adult price.' },
    { sp: 'N', text: 'The bus company has also launched a new app. You can buy tickets on it, and, more usefully, it shows where your bus actually is in real time.' },
    { sp: 'N', text: 'One warning: paper timetables at bus stops won\'t be updated until the end of June, so please check the website or the app before you travel.' },
    { sp: 'N', text: 'Finally, roadworks on Bridge Street start on the tenth of June and will last about six weeks. Buses will be diverted along River Road during that time.' },
    { sp: 'N', text: 'That\'s all the travel news. Now back to the music.' }
  ],
  qs: [
    { t: 'fill', q: 'Changes begin on ___ June.', a: ['3', '3rd', 'third'], limit: 'A NUMBER', why: 'Monday the third of June.' },
    { t: 'mc', q: 'During the day, the number 12 will run every', o: ['15 minutes', '20 minutes', '30 minutes'], a: 0, why: '"will run every fifteen minutes"; 20 là hiện tại, 30 là buổi tối.' },
    { t: 'mc', q: 'The number 7 will now end at', o: ['the railway station', 'the shopping centre', 'the hospital'], a: 1, why: 'no longer to the station.' },
    { t: 'fill', q: 'Passengers for the station should take the number ___.', a: ['7a', '7 a', 'seven a'], limit: 'NO MORE THAN TWO WORDS', why: 'seven A.' },
    { t: 'mc', q: 'The new number 30 runs', o: ['every day', 'Monday to Friday', 'at weekends only'], a: 1, why: 'Monday to Friday only.' },
    { t: 'fill', q: 'New single fare: £ ___', a: ['2.20', '2,20', '2.2'], limit: 'A NUMBER', why: 'two pounds twenty.' },
    { t: 'mc', q: 'A daily ticket is better value if you make', o: ['two trips', 'three or more trips', 'five trips'], a: 1, why: 'three or more.' },
    { t: 'mc', q: 'The presenter says the most useful feature of the app is', o: ['buying tickets', 'seeing the bus\'s real-time location', 'downloading timetables'], a: 1, why: '"more usefully, it shows where your bus actually is".' },
    { t: 'fill', q: 'Roadworks on Bridge Street will last about ___.', a: ['six weeks', '6 weeks'], limit: 'NO MORE THAN TWO WORDS', why: 'about six weeks.' },
    { t: 'fill', q: 'Buses will be diverted along ___ Road.', a: ['river'], limit: 'ONE WORD', why: 'River Road.' }
  ]}
];
