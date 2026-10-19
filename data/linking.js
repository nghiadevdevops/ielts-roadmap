/* ===== G25: Linking verbs (động từ nối) — thêm vào Giai đoạn 1, tuần 2 ===== */
window.LESSONS_P1.push({ id: 'G25', type: 'grammar', title: 'Linking verbs (động từ nối): be, seem, become, look, feel, sound…', goal: 'Dùng đúng tính từ (không phải trạng từ) sau động từ nối; phân biệt look / look like; dùng become / get / turn / stay cho thay đổi và duy trì.', md: `
### Linking verb là gì
Động từ **nối chủ ngữ với phần mô tả nó**, không chỉ hành động. Sau linking verb là **tính từ** hoặc **danh từ** mô tả chủ ngữ, không phải trạng từ.
- *She **is** tired. · The soup **tastes** good. · He **became** a manager. · It **seems** difficult.*
- So sánh với động từ hành động: *She **drives** carefully* (carefully mô tả cách lái → trạng từ) nhưng *She **looks** careful* (careful mô tả cô ấy → tính từ).

### Bốn nhóm phải thuộc
| Nhóm | Động từ | Ví dụ |
|---|---|---|
| Trạng thái | **be, seem, appear** | *It seems easy. The plan appears reasonable.* |
| Giác quan | **look, sound, feel, taste, smell** | *You look tired. That sounds great. I feel awful. It tastes salty. It smells fresh.* |
| Thay đổi | **become, get, turn, grow, go, fall, come** | *He became famous. It's getting dark. The leaves turned yellow. We grew tired. The milk went bad. She fell asleep. My dream came true.* |
| Duy trì | **stay, remain, keep** | *Stay calm. Prices remained stable. Keep quiet.* |
| Kết quả | **prove, turn out, end up** | *The method proved effective. It turned out fine. We ended up exhausted.* |

### Quy tắc dùng
1. **+ tính từ**, không trạng từ: *I feel **bad*** (không ~~badly~~), *It sounds **good***, *She looks **happy*** (không ~~happily~~), *The food tastes **good*** (không ~~well~~ — *well* là trạng từ, trừ nghĩa "khỏe": *I feel well*).
2. **look / sound / feel / seem + like + danh từ hoặc mệnh đề**: *It looks like rain. That sounds like a good idea. It feels like Monday. It seems like everyone agrees.* Không ~~It looks like beautiful~~ → *It looks beautiful.*
3. **seem / appear + to V**: *He seems to know the answer. The server appears to be down.* Hoặc *It seems (that) …*
4. **become + danh từ/tính từ** (trang trọng, thay đổi hoàn toàn); **get + tính từ** (hội thoại, thay đổi dần): *become a doctor, become popular · get tired, get ready, get married, get used to.* Không ~~become to be~~.
5. **turn + màu / tuổi**: *turn red, turn 30*. **go + xấu đi**: *go wrong, go bad, go grey, go blind, go bankrupt*. **grow + từ từ**: *grow old, grow dark, grow tired*. **fall**: *fall asleep, fall ill, fall silent*.
6. **stay / remain / keep + tính từ**: *stay healthy, remain unchanged, keep calm*. (*keep + V-ing* là nghĩa khác: tiếp tục.)
7. **-ed vs -ing sau linking verb**: *I feel bored* (tôi chán) ≠ *It sounds boring* (nó nhàm chán).

### Trong IELTS
- **Speaking** cảm xúc Part 2: *I felt relieved / proud / embarrassed. It turned out to be the best decision. I ended up staying for three years.*
- **Writing Task 1**: *The figure remained stable at 20%. Germany became the largest producer. The gap grew wider.*
- **Writing Task 2** hedging: *It seems that… · This appears to be… · Such measures have proved effective in…*

### Lỗi người Việt hay mắc
- ~~It looks like beautiful~~ → *It looks beautiful.* ~~It sounds like great~~ → *It sounds great.*
- ~~The food tastes well / delicious-ly~~ → *tastes good / delicious.*
- ~~She seems happily~~ → *She seems happy.*
- ~~I am feeling boring~~ → *I'm feeling bored.*
- ~~He became to be a manager~~ → *He became a manager.*
- ~~It is becoming cold~~ (được, nhưng tự nhiên: *It's getting cold.*)
- ~~Keep silence~~ → *Keep quiet / Stay silent.*

### Luyện tập
- GIU (bìa xanh) unit về adjectives vs adverbs (~unit 99–100) và *get* (unit ~127).
- Viết 10 câu về hôm nay của bạn dùng 10 linking verb khác nhau; đọc to.
- Trong Speaking Lab → Câu hay dùng → nhóm "Câu với linking verbs": nghe và nói lại 10 câu.
`, quiz: [
  { t: 'mc', q: 'The soup tastes ___.', o: ['well', 'good', 'goodly'], a: 1, why: 'Linking verb + tính từ.' },
  { t: 'fix', q: 'It looks like beautiful.', a: ['It looks beautiful.'], why: 'look + adj; look like + danh từ.' },
  { t: 'mc', q: 'That ___ a good idea.', o: ['sounds', 'sounds like', 'sounds as'], a: 1, why: 'sound like + danh từ.' },
  { t: 'fix', q: 'She seems happily today.', a: ['She seems happy today.'], why: 'seem + tính từ.' },
  { t: 'mc', q: "I'm ___ because the lecture was ___.", o: ['boring / bored', 'bored / boring', 'bored / bored'], a: 1, why: '-ed cảm thấy, -ing gây ra.' },
  { t: 'fill', q: 'He ___ (become) a team leader last year.', a: ['became'], why: 'become + danh từ.' },
  { t: 'mc', q: "It's ___ dark; let's go home.", o: ['getting', 'becoming to', 'turning to'], a: 0, why: 'get + adj cho thay đổi dần.' },
  { t: 'mc', q: 'The milk has ___ bad.', o: ['gone', 'become', 'fallen'], a: 0, why: 'go + xấu đi.' },
  { t: 'fill', q: 'Prices ___ (remain) stable throughout 2020. (Task 1)', a: ['remained'], why: 'remain + adj.' },
  { t: 'fix', q: 'He became to be famous after the film.', a: ['He became famous after the film.'], why: 'become + adj, không có to be.' },
  { t: 'mc', q: 'The server ___ to be down.', o: ['appears', 'appears like', 'is appearing'], a: 0, why: 'appear + to V.' },
  { t: 'fix', q: 'Keep silence during the exam.', a: ['Keep quiet during the exam.', 'Stay silent during the exam.'], why: 'keep + adj.' }
]});
/* gắn vào tuần 2 (sau G2) để tính tiến độ */
(function(){ const w=(window.ROADMAP||[]).find(x=>x.w===2); if(w&&!w.lessons.includes('G25')){ w.lessons.splice(1,0,'G25'); w.focus+=' · G25 linking verbs'; } })();
