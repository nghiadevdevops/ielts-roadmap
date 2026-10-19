/* ===== Nghe thật: audio người bản xứ từ VOA Learning English (public domain) + câu hỏi kiểu IELTS do app soạn =====
   Mỗi bài: src {name,url,license}, audioNote, qs như Listening. Không có TTS; người học mở link, nghe một lần, trả lời trong app.
   Nguồn: "All text, audio and video material produced exclusively by the Voice of America is in the public domain" — learningenglish.voanews.com/p/6021.html.
   Lưu ý: nhiều bài là bản VOA viết lại từ AP/AFP; app chỉ dẫn link và soạn câu hỏi, không chép lại văn bản. */
window.LISTEN_REAL_HOWTO = `
### Nghe thật — cách dùng
- Mỗi bài là một audio **người bản xứ đọc** (VOA Learning English, tốc độ chậm hơn bản xứ ~30%, phát âm Mỹ rõ). Độ dài 3–8 phút, tương đương Part 2/Part 4 về thể loại (độc thoại có cấu trúc).
- Quy trình: bấm **Mở audio** (tab mới) → quay lại app, bấm **Bắt đầu** để có 45 giây đọc trước câu hỏi → phát audio ở tab VOA **một lần** → điền → Nộp. Transcript có sẵn trên trang VOA (cuộn xuống dưới player) để chữa.
- Sau khi nộp, đọc transcript trên VOA, gạch chỗ bạn nghe sót, chép chính tả 3 câu. Tải MP3 (link 128 kbps dưới player) để **shadowing** — đây là nguồn shadowing tốt nhất miễn phí vì tốc độ vừa và có text.
- Thứ tự gợi ý: tuần 8–12 làm 3 bài đầu (ngắn, lịch sử/địa lý); tuần 13–20 làm các bài còn lại; từ Giai đoạn 3 chuyển sang bài VOA "As It Is" hoặc BBC bất kỳ theo mục Nguồn luyện thêm.
- Chữ **[AP]/[AFP]** sau tên bài nghĩa là VOA viết lại từ hãng tin; audio và text vẫn do VOA sản xuất.
`;
const VR = (id, title, url, mins, level, intro, qs, note) => ({ id, title, mins, level, intro, qs, note: note || '', src: { name: 'VOA Learning English', url, license: 'Public domain (VOA). Audio + transcript tại trang gốc.' } });
window.LISTEN_REAL = [
VR('vr1', 'Wilbur and Orville Wright: The First Airplane', 'https://learningenglish.voanews.com/a/wilbur-and-orville-wright-the-first-airplane/7998765.html', 4.5, 'B1', 'Một bài lịch sử ngắn (4 phút 26). Dạng: note completion + multiple choice. NO MORE THAN TWO WORDS AND/OR A NUMBER.', [
  { t: 'fill', q: 'Wilbur was born in ___ (year).', a: ['1867'], limit: 'A NUMBER', why: 'Mở đầu bài.' },
  { t: 'fill', q: 'Orville was born in Dayton, in the state of ___.', a: ['ohio'], limit: 'ONE WORD', why: 'Dayton, Ohio.' },
  { t: 'mc', q: 'Where did the brothers test their gliders?', o: ['Dayton, Ohio', 'Kitty Hawk, North Carolina', 'Washington, D.C.'], a: 1, why: 'Kill Devil Hill near Kitty Hawk.' },
  { t: 'fill', q: 'By autumn 1903 the plane had wings about ___ metres across.', a: ['12'], limit: 'A NUMBER', why: 'About 12 metres.' },
  { t: 'fill', q: 'With the pilot, the plane weighed about ___ kilograms.', a: ['340'], limit: 'A NUMBER', why: '340 kg.' },
  { t: 'fill', q: 'Date of the first powered flight: ___ December 1903.', a: ['17', '17th'], limit: 'A NUMBER', why: 'December 17, 1903.' },
  { t: 'fill', q: 'The first flight covered ___ metres and lasted 12 seconds.', a: ['36'], limit: 'A NUMBER', why: '36 metres, 12 seconds.' },
  { t: 'mc', q: 'How many flights did they make that day in total?', o: ['one', 'three', 'four'], a: 2, why: 'First flight + three more = four.' },
  { t: 'fill', q: 'In 1908 Wilbur gave demonstration flights in ___ (country).', a: ['france'], limit: 'ONE WORD', why: 'France, at heights of 90 m.' },
  { t: 'mc', q: 'Wilbur died of', o: ['a flying accident', 'typhoid fever', 'old age'], a: 1, why: 'Typhoid fever, 1912.' },
  { t: 'fill', q: 'The original plane is now in the Air and Space Museum in ___.', a: ['washington', 'washington dc', 'washington, d.c.', 'washington d.c.'], limit: 'NO MORE THAN TWO WORDS', why: 'Washington, D.C.' }
]),
VR('vr2', 'Yellowstone: The World\'s First National Park', 'https://learningenglish.voanews.com/a/yellowstone-the-world-s-first-national-park/7974034.html', 4, 'B1', 'Mô tả địa lý (3 phút 59) — rất giống Part 2 giới thiệu địa điểm. Nhiều con số: luyện nghe số liệu.', [
  { t: 'fill', q: 'Yellowstone was established in ___ (year).', a: ['1872'], limit: 'A NUMBER', why: '1872.' },
  { t: 'fill', q: 'The park covers almost ___ square kilometres.', a: ['9,000', '9000'], limit: 'A NUMBER', why: 'Almost 9,000.' },
  { t: 'fill', q: 'Most of the park is in the state of ___.', a: ['wyoming'], limit: 'ONE WORD', why: 'Wyoming.' },
  { t: 'mc', q: 'What lies about 6 km under the park?', o: ['an underground river', 'a lake of hot liquid rock', 'an ancient forest'], a: 1, why: 'Supervolcano magma.' },
  { t: 'fill', q: 'The park has more than ___ geysers.', a: ['300'], limit: 'A NUMBER', why: 'More than anywhere else on Earth.' },
  { t: 'fill', q: 'Old Faithful erupts about every ___ minutes.', a: ['90'], limit: 'A NUMBER', why: '~90 minutes.' },
  { t: 'fill', q: 'Average elevation: about ___ metres.', a: ['2,400', '2400'], limit: 'A NUMBER', why: '2,400 m.' },
  { t: 'mc', q: 'January temperatures range from', o: ['-18 to -7 °C', '-8 to 7 °C', '0 to 10 °C'], a: 0, why: 'Rất lạnh.' },
  { t: 'fill', q: 'The Lower Falls drops ___ metres.', a: ['93'], limit: 'A NUMBER', why: '93 m. (Canyon sâu 365 m — distractor.)' },
  { t: 'fill', q: 'Large forest fires occurred in summer ___ (year).', a: ['1988'], limit: 'A NUMBER', why: '1988.' },
  { t: 'fill', q: 'Officials estimated about ___ bison in 2024.', a: ['4,500', '4500'], limit: 'A NUMBER', why: 'Largest wild bison group in the world.' }
]),
VR('vr3', 'Pearl S. Buck: The First American Woman to Win a Nobel Prize in Literature', 'https://learningenglish.voanews.com/a/pearl-s-buck-the-first-american-woman-to-win-a-nobel-prize-in-literature-/7980858.html', 4, 'B1', 'Tiểu sử (3 phút 54) — kiểu Part 2/4 kể theo trình tự thời gian. Luyện bắt năm và tên riêng.', [
  { t: 'mc', q: 'Her parents worked in China as', o: ['teachers', 'religious workers', 'farmers'], a: 1, why: 'Religious workers (missionaries).' },
  { t: 'mc', q: 'Who taught her American school subjects as a child?', o: ['her mother', 'a Chinese teacher', 'a school in Virginia'], a: 0, why: 'Mother at home; Chinese teacher taught other subjects.' },
  { t: 'fill', q: 'She returned to the United States in ___ (year) to study.', a: ['1910'], limit: 'A NUMBER', why: '1910.' },
  { t: 'fill', q: 'Her college was in Lynchburg, in the state of ___.', a: ['virginia'], limit: 'ONE WORD', why: 'Randolph-Macon Woman\'s College, Virginia.' },
  { t: 'mc', q: 'She studied', o: ['agriculture', 'philosophy', 'literature'], a: 1, why: 'Philosophy. Husband studied agriculture — distractor.' },
  { t: 'fill', q: 'Her husband\'s name was John Lossing ___.', a: ['buck'], limit: 'ONE WORD', why: 'Buck.' },
  { t: 'fill', q: 'The Good Earth was the top-selling US book in ___ (year).', a: ['1931'], limit: 'A NUMBER', why: '1931; Pulitzer 1932; Nobel 1938.' },
  { t: 'fill', q: 'She won the Pulitzer Prize in ___ (year).', a: ['1932'], limit: 'A NUMBER', why: '1932.' },
  { t: 'fill', q: 'She won the Nobel Prize in ___ (year).', a: ['1938'], limit: 'A NUMBER', why: '1938.' },
  { t: 'fill', q: 'Her farm, Green Hills Farm, was in eastern ___ (state).', a: ['pennsylvania'], limit: 'ONE WORD', why: 'Pennsylvania.' },
  { t: 'fill', q: 'She died in 1973 at the age of ___.', a: ['80'], limit: 'A NUMBER', why: '80.' }
]),
VR('vr4', 'A Short History of Spacecraft Landings on the Moon [AP]', 'https://learningenglish.voanews.com/a/a-short-history-of-spacecraft-landings-on-the-moon/8001341.html', 5.5, 'B1–B2', 'Trình tự thời gian theo nước (5 phút 32) — luyện table completion: nước / năm / kết quả.', [
  { t: 'fill', q: 'Table — First soft landing: Luna 9, Soviet Union, year ___', a: ['1966'], limit: 'A NUMBER', why: '1966.' },
  { t: 'mc', q: 'Luna 9 was also the first to', o: ['carry a rover', 'send photos from the surface', 'return samples'], a: 1, why: 'Photos from the lunar surface.' },
  { t: 'fill', q: 'US Surveyor 1 landed in May 1966; it was the first of ___ robotic missions before Apollo.', a: ['seven', '7'], limit: 'A NUMBER', why: 'Seven.' },
  { t: 'fill', q: 'Apollo put ___ astronauts on the moon over six missions.', a: ['12', 'twelve'], limit: 'A NUMBER', why: '12 astronauts, 6 missions.' },
  { t: 'fill', q: 'The last Apollo mission, Apollo 17, flew in ___ (year).', a: ['1972'], limit: 'A NUMBER', why: '1972.' },
  { t: 'mc', q: 'NASA\'s Artemis programme aims to return astronauts possibly by the end of', o: ['2026', '2030', '2032'], a: 0, why: '2026; China aims for 2030.' },
  { t: 'fill', q: 'China became the third country to land on the moon in ___ (year), with the Yutu rover.', a: ['2013'], limit: 'A NUMBER', why: '2013.' },
  { t: 'mc', q: 'In 2019, China\'s Yutu-2 landed', o: ['near the south pole', 'on the far side of the moon', 'in the Sea of Tranquility'], a: 1, why: 'Far side.' },
  { t: 'fill', q: 'In 2020 China brought back about ___ kilograms of lunar material.', a: ['1.7'], limit: 'A NUMBER', why: '1.7 kg.' },
  { t: 'mc', q: 'Russia\'s Luna 25 in 2023', o: ['landed successfully', 'probably crash-landed', 'was cancelled'], a: 1, why: 'Likely crash-landed.' },
  { t: 'mc', q: 'India\'s Chandrayaan-3 succeeded in 2023 after its first lander', o: ['ran out of fuel', 'crashed in 2019', 'landed upside down'], a: 1, why: 'Crashed in 2019; Japan\'s SLIM landed upside down (distractor).' }
]),
VR('vr5', 'Scientists Discover Stonehenge-like Circle in Denmark [AFP]', 'https://learningenglish.voanews.com/a/scientists-discover-stonehenge-like-circle-in-denmark/7990025.html', 3.3, 'B1', 'Tin khảo cổ ngắn (3 phút 16) — luyện nghe số đo và tên riêng.', [
  { t: 'fill', q: 'The wooden pieces were found in the town of ___.', a: ['aars'], limit: 'ONE WORD', why: 'Aars, north-west Denmark.' },
  { t: 'mc', q: 'How were they discovered?', o: ['by divers', 'during construction work', 'by satellite'], a: 1, why: 'Construction work.' },
  { t: 'fill', q: 'A total of ___ wooden pieces were found.', a: ['45'], limit: 'A NUMBER', why: '45.' },
  { t: 'fill', q: 'The circle is about ___ metres across.', a: ['30'], limit: 'A NUMBER', why: '30 m.' },
  { t: 'fill', q: 'Sidsel Wahlin works at the ___ museum.', a: ['vesthimmerlands'], limit: 'ONE WORD', why: 'Vesthimmerlands.' },
  { t: 'mc', q: 'Wahlin described the discovery as', o: ['disappointing', 'a once-in-a-lifetime find', 'a mystery'], a: 1, why: 'Quote.' },
  { t: 'fill', q: 'The British Museum says the first stones at Stonehenge arrived around ___ BC.', a: ['3000', '3,000'], limit: 'A NUMBER', why: '3000 BC.' },
  { t: 'mc', q: 'Similar wooden circles were earlier found on the island of', o: ['Bornholm', 'Zealand', 'Gotland'], a: 0, why: 'Bornholm.' },
  { t: 'mc', q: 'What else was found at the site?', o: ['a Roman coin hoard', 'a settlement with a leader\'s grave and a bronze sword', 'a Viking ship'], a: 1, why: 'Settlement, grave, bronze sword.' },
  { t: 'fill', q: 'Researchers are now looking for ritual ___ such as flint arrowheads.', a: ['deposits'], limit: 'ONE WORD', why: 'Ritual deposits.' }
]),
VR('vr6', 'Methods for Protecting Earth against an Asteroid Strike [AFP]', 'https://learningenglish.voanews.com/a/methods-for-protecting-earth-against-an-asteroid-strike/7989189.html', 5.3, 'B2', 'Bài khoa học có cấu trúc "các phương pháp" (5 phút 16) — giống Part 4: nghe biển báo chuyển ý, matching phương pháp ↔ hạn chế.', [
  { t: 'fill', q: 'The asteroid is called 2024 ___.', a: ['yr4', 'yr 4'], limit: 'NO MORE THAN TWO WORDS', why: '2024 YR4.' },
  { t: 'fill', q: 'Estimated width: ___ to 90 metres.', a: ['40'], limit: 'A NUMBER', why: '40–90 m.' },
  { t: 'fill', q: 'Possible impact date: 22 December ___ (year).', a: ['2032'], limit: 'A NUMBER', why: '2032.' },
  { t: 'fill', q: 'NASA put the chance of impact at ___ percent.', a: ['3.1'], limit: 'A NUMBER', why: '3.1%.' },
  { t: 'mc', q: 'Richard Moissl works for', o: ['NASA', 'the European Space Agency', 'a university'], a: 1, why: 'ESA planetary defence office.' },
  { t: 'fill', q: 'In 2022 the DART mission hit the asteroid ___ and changed its orbit.', a: ['dimorphos'], limit: 'ONE WORD', why: 'Dimorphos, 160 m wide.' },
  { t: 'mc', q: 'The risk of striking an asteroid with several spacecraft is that', o: ['it costs too much', 'fragments might still reach Earth', 'it takes 20 years'], a: 1, why: 'Breaking it into fragments.' },
  { t: 'mc', q: 'Which method uses a spacecraft\'s gravity without touching the asteroid?', o: ['gravity tractor', 'ion thruster', 'laser'], a: 0, why: 'Flying alongside and tugging.' },
  { t: 'mc', q: 'Painting one side of the asteroid white would', o: ['make it visible from Earth', 'change how much sunlight it reflects and slowly alter its path', 'cool it down'], a: 1, why: 'Reflected sunlight.' },
  { t: 'mc', q: 'A nuclear explosion is considered suitable only for asteroids', o: ['smaller than 50 m', 'about a kilometre wide', 'made of ice'], a: 1, why: 'Kilometre-wide, and risks fragments.' },
  { t: 'fill', q: 'Moissl said there are about ___ years to prepare.', a: ['seven and a half', '7.5', 'seven-and-a-half', '7 and a half'], limit: 'NO MORE THAN THREE WORDS', why: 'Seven-and-a-half years.' }
]),
VR('vr7', 'Monarch Butterfly Count Nears 30-Year Low [AP]', 'https://learningenglish.voanews.com/a/monarch-butterfly-count-nears-30-year-low/7966513.html', 6, 'B2', 'Bài môi trường nhiều số liệu (5 phút 54) — luyện phân biệt các con số gần nhau (2020/2023/2024).', [
  { t: 'mc', q: 'The Xerces Society is based in', o: ['California', 'Oregon', 'Mexico'], a: 1, why: 'Oregon-based.' },
  { t: 'fill', q: 'The survey began in ___ (year).', a: ['1997'], limit: 'A NUMBER', why: '1997 — also the peak year.' },
  { t: 'fill', q: 'The 1997 peak was ___ million monarchs.', a: ['1.2'], limit: 'A NUMBER', why: '1.2 million.' },
  { t: 'fill', q: 'The 2024 count was ___ monarchs.', a: ['9,119', '9119'], limit: 'A NUMBER', why: '9,119.' },
  { t: 'fill', q: 'The 2023 count was ___.', a: ['233,394', '233394'], limit: 'A NUMBER', why: '233,394 → drop of ~96%.' },
  { t: 'fill', q: 'The record low was 1,901 in ___ (year).', a: ['2020'], limit: 'A NUMBER', why: '2020.' },
  { t: 'mc', q: 'Where do western monarchs usually spend the winter?', o: ['along the California coast', 'in Mexico', 'in Oregon forests'], a: 0, why: 'California coast; eastern monarchs → Mexico.' },
  { t: 'mc', q: 'Biologist Emma Pelton suggested breeding was slowed by', o: ['heavy rain', 'heat above 37.7 °C', 'a lack of milkweed'], a: 1, why: 'Heat wave.' },
  { t: 'mc', q: 'In December 2024 the US Fish and Wildlife Service proposed', o: ['banning pesticides', 'listing monarchs as threatened', 'building new reserves'], a: 1, why: 'Threatened status.' },
  { t: 'fill', q: 'Earthjustice asked the EPA to require testing of ___ effects on bees, moths and butterflies.', a: ['pesticide', 'pesticides'], limit: 'ONE WORD', why: 'Pesticide effects.' },
  { t: 'fill', q: 'The population rebounded to 247,246 in ___ (year).', a: ['2021'], limit: 'A NUMBER', why: '2021, then 335,479 in 2022.' }
]),
VR('vr8', 'How Daylight Saving Time Affects Health [AP]', 'https://learningenglish.voanews.com/a/how-daylight-savings-time-affects-health/8001173.html', 7.2, 'B2', 'Bài sức khỏe (7 phút 11) — dài như Part 4, có lời khuyên dạng danh sách. Luyện note completion theo mục.', [
  { t: 'fill', q: 'US clocks spring forward on Sunday 9 March at ___ a.m.', a: ['2', '2:00', 'two'], limit: 'A TIME', why: '2 a.m.' },
  { t: 'fill', q: 'Clocks fall back on 2 ___ (month).', a: ['november'], limit: 'ONE WORD', why: 'November 2.' },
  { t: 'mc', q: 'Which US state keeps standard time all year?', o: ['Hawaii', 'Texas', 'Florida'], a: 0, why: 'Hawaii and most of Arizona.' },
  { t: 'mc', q: 'Studies found more heart attacks and strokes', o: ['right after the March change', 'in November', 'in summer'], a: 0, why: 'After spring forward.' },
  { t: 'mc', q: 'Deadly car crashes rise in the first days after the change, with highest risk', o: ['at night', 'in the morning', 'at midday'], a: 1, why: 'Morning, due to sleep loss.' },
  { t: 'fill', q: 'About one-third of American adults don\'t get the recommended ___ hours of sleep.', a: ['seven', '7'], limit: 'A NUMBER', why: 'Seven hours.' },
  { t: 'fill', q: 'The circadian rhythm is a roughly ___-hour internal clock.', a: ['24'], limit: 'A NUMBER', why: '24.' },
  { t: 'fill', q: 'Extra evening light delays the rise of ___, the hormone that causes tiredness.', a: ['melatonin'], limit: 'ONE WORD', why: 'Melatonin.' },
  { t: 'fill', q: 'Tip: move bedtime ___ to 20 minutes earlier over several nights.', a: ['15'], limit: 'A NUMBER', why: '15–20 minutes.' },
  { t: 'mc', q: 'When should you get sunshine to reset the body clock?', o: ['early morning', 'at noon', 'in the evening'], a: 0, why: 'Early morning in the first week.' },
  { t: 'mc', q: 'The American Medical Association prefers', o: ['permanent daylight saving time', 'permanent standard time', 'changing clocks twice a year'], a: 1, why: 'Standard time fits human biology.' }
]),
VR('vr9', 'Saying \'No\' at Work Can Be Good for Your Health [AP]', 'https://learningenglish.voanews.com/a/saying-no-at-work-can-be-good-for-your-health/7945653.html', 7.5, 'B2', 'Bài kiểu Part 3/4 nhiều người được trích dẫn (7 phút 29) — luyện matching người ↔ ý kiến/lời khuyên. Nội dung dùng được ngay trong công việc.', [
  { t: 'fill', q: 'Justin Stewart is ___ years old.', a: ['36'], limit: 'A NUMBER', why: '36.' },
  { t: 'mc', q: 'Early in his career, Stewart sometimes', o: ['slept in his car between jobs', 'worked from home', 'refused extra work'], a: 0, why: 'Slept in his car.' },
  { t: 'mc', q: 'He was hospitalised for', o: ['a broken arm', 'extreme exhaustion and an infection', 'a heart attack'], a: 1, why: 'Exhaustion + infection.' },
  { t: 'mc', q: 'Bobby Dutton schedules his most-delayed task every', o: ['Monday at 2 p.m.', 'Friday morning', 'Sunday evening'], a: 0, why: 'Monday 2 p.m.' },
  { t: 'mc', q: 'Cara Houser\'s advice is that workers', o: ['must always explain why they refuse', 'do not have to explain a refusal', 'should never refuse a manager'], a: 1, why: 'No explanation needed; suggest when you could help.' },
  { t: 'fill', q: 'Amber Krasinski founded a ___ company called IvyHill Strategies.', a: ['marketing'], limit: 'ONE WORD', why: 'Marketing.' },
  { t: 'mc', q: 'Instead of "no", Krasinski often says', o: ['"maybe"', '"not yet"', '"ask someone else"'], a: 1, why: '"Not yet".' },
  { t: 'mc', q: 'Israa Nasir is a', o: ['psychotherapist', 'manager', 'software engineer'], a: 0, why: 'Psychotherapist in New York.' },
  { t: 'mc', q: 'Nasir moved her Gmail app', o: ['off her phone completely', 'to a second screen on her phone', 'to her laptop only'], a: 1, why: 'Second page, to stop weekend checking.' },
  { t: 'fill', q: 'Experts suggest adding your working hours to your email ___.', a: ['signature'], limit: 'ONE WORD', why: 'Email signature.' }
]),
VR('vr10', 'Senegal Starts Introducing English in Preschools [AFP]', 'https://learningenglish.voanews.com/a/senegal-starts-introducing-english-in-preschools/7972239.html', 7.6, 'B2', 'Bài giáo dục có hai phía ủng hộ/phản đối (7 phút 37) — luyện Part 3: ai nói gì, đồng ý hay không. Chủ đề trùng Writing Task 2 (học ngoại ngữ sớm).', [
  { t: 'fill', q: 'English is being tested in more than ___ nursery and primary classes.', a: ['600'], limit: 'A NUMBER', why: 'Over 600.' },
  { t: 'mc', q: 'Besides English, preschoolers learn French, Arabic and', o: ['Spanish', 'Senegal\'s national languages', 'Portuguese'], a: 1, why: 'National languages.' },
  { t: 'mc', q: 'Before this programme, English was taught mainly in', o: ['primary schools', 'high schools and universities', 'nurseries'], a: 1, why: 'High schools, universities, some private nurseries.' },
  { t: 'fill', q: 'Aissatou Sarr Cisse says some students still struggle after up to ___ years of study.', a: ['seven', '7'], limit: 'A NUMBER', why: 'Seven years.' },
  { t: 'mc', q: 'English lessons take place on', o: ['Mondays and Wednesdays', 'Tuesdays and Thursdays', 'every day'], a: 1, why: 'Tuesdays and Thursdays.' },
  { t: 'fill', q: 'Nursery lessons last ___ minutes each.', a: ['25'], limit: 'A NUMBER', why: '25 min (primary: 30).' },
  { t: 'fill', q: 'Teacher Mamadou Kama has a class of about ___ students.', a: ['60'], limit: 'A NUMBER', why: 'About 60.' },
  { t: 'mc', q: 'What problem do teachers report?', o: ['students dislike English', 'most have not received teaching materials', 'classes are too small'], a: 1, why: 'No materials; computers only ordered.' },
  { t: 'mc', q: 'Ousmane Sene supports the project because English', o: ['is easier than French', 'is the most widely used international language', 'is Senegal\'s official language'], a: 1, why: 'Most widely used.' },
  { t: 'mc', q: 'Samba Dioulde Thiam opposes the plan mainly because', o: ['there are not enough teachers', 'English is too hard for children', 'parents object'], a: 0, why: 'Not enough teachers; could delay national languages.' }
])
];
