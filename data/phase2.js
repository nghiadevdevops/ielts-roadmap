/* ===== Giai đoạn 2: Listening L0–L8, Reading R0–R10 (phần 1 của file) ===== */
window.LESSONS_P2 = [
{ id: 'L0', type: 'listening', title: 'Tổng quan bài thi Listening & quy trình chung', goal: 'Biết cấu trúc 4 part, luật giới hạn từ, và quy trình 5 bước áp dụng cho mọi dạng câu hỏi.', md: `
### Cấu trúc
| Part | Nội dung | Số câu | Độ khó |
|---|---|---|---|
| 1 | Hội thoại 2 người, đời sống (đặt phòng, đăng ký, hỏi thông tin) | 10 | Dễ — mục tiêu 9–10/10 |
| 2 | Độc thoại đời sống (giới thiệu địa điểm, hướng dẫn, thông báo) | 10 | Dễ–vừa |
| 3 | Hội thoại 2–4 người, học thuật (sinh viên + giảng viên bàn bài tập) | 10 | Khó — bẫy ý kiến |
| 4 | Bài giảng độc thoại, học thuật, không nghỉ giữa | 10 | Khó — paraphrase nặng |

- 30 phút nghe **một lần** + 10 phút chuyển đáp án (giấy) hoặc 2 phút kiểm tra (máy). Giọng Anh, Úc, Mỹ, Canada, New Zealand.
- Câu hỏi đi **theo thứ tự** audio. Trước mỗi part có 30–45 giây đọc câu hỏi.

### Luật giới hạn từ (đọc kỹ mỗi lần, mất điểm oan nhiều nhất ở đây)
- *NO MORE THAN TWO WORDS AND/OR A NUMBER*: tối đa 2 từ + 1 số. "a" và "the" cũng tính là từ. Số viết bằng chữ số (25, không phải twenty-five). "25 dollars" = 1 số + 1 từ.
- *ONE WORD ONLY*: viết 2 từ là sai dù đúng nghĩa.
- Từ nối bằng gạch (*well-known*) tính 1 từ.
- Chính tả sai = sai. Số nhiều thiếu -s = sai. Viết hoa hay thường đều được.

### Quy trình 5 bước cho mọi dạng
1. **Đọc trước**: dùng hết thời gian cho phép để đọc câu hỏi, gạch từ khóa, **đoán loại từ cần điền** (số? tên? danh từ số nhiều? động từ?).
2. **Nghe theo biển báo**: từ khóa trong câu hỏi sẽ được **paraphrase** trong audio; nghe ý, không nghe từ.
3. **Viết ngay**, viết tắt nếu cần, hoàn chỉnh lúc chuyển đáp án.
4. **Mất dấu → nhảy**: không nghe được câu 5 thì nhìn ngay câu 6; đừng đuổi theo câu đã mất.
5. **Không bỏ trống**: đoán theo loại từ đã dự đoán. Không trừ điểm câu sai.

### Luyện trong tuần này
Nghe 2 Part 1 trong Cambridge, không làm câu hỏi, chỉ **chép chính tả** mọi số/tên/ngày. Rồi làm Part 1 có câu hỏi.
`, quiz: [
  { t: 'mc', q: 'Giới hạn "NO MORE THAN TWO WORDS AND/OR A NUMBER". Đáp án nào hợp lệ?', o: ['the main library', '25 dollars', 'twenty five dollars'], a: 1, why: '"the main library" 3 từ; "twenty five dollars" 3 từ (số nên viết bằng chữ số).' },
  { t: 'mc', q: 'Bạn bỏ lỡ câu 5. Việc nên làm:', o: ['nghe tiếp để tìm câu 5', 'nhìn ngay câu 6', 'dừng lại nghĩ'], a: 1, why: 'Audio không quay lại; mất 1 câu còn hơn mất 3.' },
  { t: 'mc', q: 'Part nào thường có bẫy ý kiến thay đổi ("I thought X, but now Y")?', o: ['Part 1', 'Part 3', 'Part 4'], a: 1, why: 'Part 3 là hội thoại học thuật với nhiều quan điểm.' },
  { t: 'mc', q: 'Đáp án "bus" khi audio nói "buses":', o: ['đúng', 'sai', 'tùy giám khảo'], a: 1, why: 'Thiếu -s = sai.' }
]},

{ id: 'L1', type: 'listening', title: 'Form / note completion (Part 1)', goal: 'Đạt 9–10/10 Part 1: số điện thoại, tên đánh vần, ngày, giá, địa chỉ.', md: `
### Đặc điểm
Điền tên, số điện thoại, địa chỉ, ngày, giá, mã, sở thích. Câu trả lời thường **nghe nguyên văn**, không paraphrase nhiều. Đây là 10 câu "cho điểm" — mất ở đây là lỗi kỹ thuật, không phải trình độ.

### Các bước
1. Đọc form, với mỗi ô đoán **loại**: số? tên riêng (sẽ được đánh vần)? danh từ? ngày?
2. **Đánh vần**: nắm chắc bảng chữ cái; cặp hay nhầm A/E/I, G/J, B/V/P/D/T, M/N, S/F. *Double L* = LL.
3. **Số**: 13/30 (thirTEEN/THIRty), *oh/zero*, *double*, *point*; số điện thoại đọc theo nhóm; giá "forty-five fifty" = 45.50.
4. **Ngày**: *the 21st of May* → viết *21 May* hoặc *21st May* (2 từ hoặc 1 số + 1 từ).
5. **Bẫy sửa lại**: "It's 7:15… no, sorry, 7:30." → đáp án là thông tin **sau cùng**. Nghe hết câu rồi mới viết.
6. **Bẫy phân tán**: nhiều số được nhắc, chỉ một số đúng với ô cần điền (số phòng vs số điện thoại).

### Lỗi thường gặp
- Viết tên theo cách nghe thay vì theo đánh vần.
- Viết "£45" khi đề đã in sẵn "£ ___" → thừa ký hiệu (thường vẫn được chấp nhận, nhưng tránh).
- Viết hai từ khi đề in sẵn một từ của cụm (đề: *___ Street*, bạn viết *Park Street*).

### Luyện
Trang **Nghe · chính tả**: số điện thoại, tên, ngày, giờ, giá, địa chỉ, mã bưu điện — 5 phút/ngày suốt Giai đoạn 2. Sau đó 3 Part 1 từ Cambridge, mục tiêu 9/10.
`, quiz: [
  { t: 'mc', q: 'Audio: "My surname is Thorne, T-H-O-R-N-E." Bạn viết:', o: ['Thorn', 'Thorne', 'Torne'], a: 1, why: 'Luôn theo đánh vần, không theo cách nghe.' },
  { t: 'mc', q: 'Audio: "The fee is thirty… sorry, thirteen pounds." Đáp án:', o: ['30', '13', '33'], a: 1, why: 'Thông tin sửa lại sau cùng là đáp án.' },
  { t: 'mc', q: 'Đề in: "Address: ___ Road". Audio: "It\'s 14 Station Road". Bạn điền:', o: ['14 Station Road', '14 Station', 'Station'], a: 1, why: 'Không lặp lại từ đã in sẵn.' },
  { t: 'mc', q: '"Double oh seven" là:', o: ['007', '27', '0 0 7 (ba số riêng, không phải một số)'], a: 0, why: 'double = lặp 2 lần, oh = 0.' }
]},

{ id: 'L2', type: 'listening', title: 'Multiple choice (Part 2, 3)', goal: 'Nhận ra 4 kiểu bẫy distractor và chọn đúng khi cả 3 phương án đều được nhắc.', md: `
### Đặc điểm
Mọi phương án (A, B, C) **đều thường được nhắc đến** trong audio. Đáp án đúng gần như luôn được **paraphrase**; phương án sai được nói nguyên văn để dụ bạn.

### Các bước
1. Đọc **câu hỏi** trước, gạch từ khóa; sau đó lướt phương án, gạch điểm **khác nhau** giữa chúng.
2. Nghe đến đoạn nói về câu hỏi đó (câu hỏi theo thứ tự). Tập trung vào ý, không vào từ.
3. Loại trừ: nghe thấy phương án bị phủ nhận → gạch.
4. Dạng "chọn 2 trong 5" (pick two): thứ tự không quan trọng, mỗi câu 1 điểm.

### 4 kiểu bẫy
- **Phủ nhận sau khi nhắc**: "I was going to take the bus, but in the end I drove." → đáp án là *drove*.
- **Ý kiến đổi**: "At first I thought it was too long. Now I think it's fine." → đáp án là *fine*.
- **Người khác nói**: trong Part 3, A nói X, B nói Y; câu hỏi hỏi ý của A.
- **Đúng nhưng không trả lời câu hỏi**: thông tin có thật nhưng câu hỏi hỏi *lý do*, không hỏi *thời gian*.

### Paraphrase thường gặp
*cheap ↔ affordable / not expensive · free ↔ at no cost · difficult ↔ challenging / hard · people ↔ residents / the public · decrease ↔ fall / drop / go down · important ↔ crucial / key · a lot of ↔ numerous / plenty of.*

### Luyện
2 Part 2 + 2 Part 3 chỉ có multiple choice. Với mỗi câu sai: viết câu trong transcript chứa đáp án và gạch chỗ paraphrase.
`, quiz: [
  { t: 'mc', q: 'Audio: "I planned to study law, but I switched to history after the first year." Câu hỏi: What does she study? Đáp án:', o: ['law', 'history', 'cả hai'], a: 1, why: 'Phủ nhận sau khi nhắc → thông tin sau cùng.' },
  { t: 'mc', q: 'Đáp án đúng trong multiple choice thường:', o: ['được nói nguyên văn', 'được paraphrase', 'không được nhắc'], a: 1, why: 'Từ nguyên văn thường là bẫy.' },
  { t: 'mc', q: 'Nên gạch chân gì khi đọc trước các phương án?', o: ['từ giống nhau giữa các phương án', 'điểm khác nhau giữa các phương án', 'toàn bộ'], a: 1, why: 'Điểm khác nhau là điều bạn cần nghe để phân biệt.' },
  { t: 'mc', q: '"affordable" trong audio tương ứng phương án nào?', o: ['expensive', 'cheap', 'popular'], a: 1, why: 'Paraphrase: affordable = không đắt.' }
]},

{ id: 'L3', type: 'listening', title: 'Matching (Part 2, 3)', goal: 'Ghép danh sách câu hỏi với bộ phương án A–H khi phương án được paraphrase mạnh.', md: `
### Đặc điểm
Một danh sách câu hỏi (ví dụ 5 địa điểm hoặc 5 người) và một bộ phương án (A–H). Câu hỏi theo thứ tự audio; phương án thì không. Có thể có phương án thừa; đôi khi một phương án dùng 2 lần nếu đề nói rõ.

### Các bước
1. Đọc **phương án** kỹ trước (chúng sẽ bị paraphrase), nghĩ 1–2 từ đồng nghĩa cho mỗi phương án.
2. Nghe **tên câu hỏi** (địa điểm/người) được nhắc → đó là "mỏ neo" → nghe ý ngay sau đó.
3. Ghi chữ cái ngay. Phân vân giữa 2 → ghi cả hai, quyết định sau khi nghe hết (vì phương án đã dùng thường không dùng lại).
4. Nếu bỏ lỡ một mỏ neo, nghe mỏ neo kế tiếp.

### Bẫy
- Mỏ neo nhắc 2 lần: lần đầu giới thiệu, lần sau mới có thông tin.
- Phương án đúng mô tả **chức năng/cảm xúc**, audio kể **tình huống**: phương án "needs repair" ↔ audio "the roof is leaking".

### Luyện
3 bài matching trong Part 2/3. Sau mỗi bài, viết bảng 2 cột: phương án ↔ câu paraphrase trong transcript.
`, quiz: [
  { t: 'mc', q: 'Trong matching, cái gì đi theo thứ tự audio?', o: ['các phương án A–H', 'các câu hỏi', 'cả hai'], a: 1, why: 'Câu hỏi theo thứ tự, phương án lộn xộn.' },
  { t: 'mc', q: 'Nên đọc kỹ cái gì trước khi nghe?', o: ['các phương án (vì sẽ bị paraphrase)', 'tên câu hỏi', 'không cần đọc'], a: 0, why: 'Tên câu hỏi sẽ nghe nguyên văn; phương án mới bị paraphrase.' },
  { t: 'mc', q: 'Audio: "The sports centre… well, the pool has been closed for months because of the roof." Phương án phù hợp:', o: ['has new facilities', 'is partly unavailable', 'is free for members'], a: 1, why: 'closed for months = partly unavailable.' }
]},

{ id: 'L4', type: 'listening', title: 'Map / plan labelling (Part 2)', goal: 'Định vị trên bản đồ và theo kịp ngôn ngữ chỉ đường.', md: `
### Các bước
1. Trong 30 giây đọc trước: tìm **điểm xuất phát** ("you are here", lối vào, reception), **la bàn** (N ở trên trừ khi ghi khác), và **các mốc đã có tên** (chúng sẽ được dùng để chỉ đường).
2. Đọc danh sách tên cần điền, đọc thầm cách phát âm.
3. Nghe và **di bút theo đường đi**. Người nói đi theo thứ tự câu hỏi.
4. Nghe cụm vị trí, không nghe tên: tên thường nói trước, vị trí nói sau ("The café — that's the building directly opposite the entrance").

### Ngôn ngữ chỉ đường phải thuộc
*opposite / across from · next to / beside / adjacent to · between X and Y · in the corner · at the end of · on the left/right (của bạn khi đang đi) · turn left/right · go straight on / continue along · past / beyond · before you reach · behind / in front of · in the north-east corner · at the top/bottom of the map · just after / just before · on the far side of · in the middle of · to the north of · clockwise / anticlockwise · the first/second turning on the left.*

### Bẫy
- "Left/right" tính theo hướng người đi, không theo bản đồ.
- Mốc đã ghi tên được dùng làm tham chiếu, không phải đáp án.
- Hai mốc cạnh nhau: nghe "the one nearer the road".

### Luyện
3 bài map trong Cambridge. Trước khi nghe, tự mô tả bản đồ bằng tiếng Anh 1 phút (nói to) — luyện cả Speaking.
`, quiz: [
  { t: 'mc', q: '"The library is directly opposite the entrance" nghĩa là thư viện:', o: ['bên cạnh lối vào', 'đối diện lối vào', 'phía sau lối vào'], a: 1, why: 'opposite = đối diện.' },
  { t: 'mc', q: 'Việc đầu tiên trong 30 giây đọc trước bản đồ:', o: ['đọc hết các tên cần điền', 'tìm điểm xuất phát, la bàn và mốc đã có tên', 'đoán đáp án'], a: 1, why: 'Không định vị được thì mọi chỉ dẫn vô nghĩa.' },
  { t: 'mc', q: '"Take the second turning on the right, and it\'s just past the bank":', o: ['rẽ phải lần 2, đi qua ngân hàng một chút', 'rẽ phải ngay, trước ngân hàng', 'rẽ trái lần 2'], a: 0, why: 'past = đi qua.' }
]},

{ id: 'L5', type: 'listening', title: 'Sentence completion', goal: 'Điền từ đúng ngữ pháp, đúng giới hạn, đúng chính tả.', md: `
### Đặc điểm
Câu được viết lại (paraphrase) từ audio, chỗ trống là **từ nguyên văn** trong audio. Theo thứ tự.

### Các bước
1. Đọc câu, **đoán loại từ**: sau *a/an/the* → danh từ; sau *to* → động từ; sau *very* → tính từ; sau *in/at/on* → danh từ chỉ nơi/thời gian.
2. Gạch từ khóa trước và sau chỗ trống — audio sẽ paraphrase phần này.
3. Nghe thấy paraphrase phần trước chỗ trống → đáp án ở ngay sau.
4. Kiểm tra: câu điền xong **đúng ngữ pháp** và **có nghĩa** không? Số ít/số nhiều?

### Bẫy
- Đáp án là từ **nguyên văn** nhưng ngữ cảnh xung quanh đổi hoàn toàn.
- Hai danh từ gần nhau, chỉ một khớp ngữ pháp (*a ___* → không điền số nhiều).
- Giới hạn từ: thường ONE WORD hoặc TWO WORDS.

### Luyện
2 bài sentence completion Part 3/4. Với mỗi câu, viết cạnh chỗ trống loại từ bạn đoán rồi so với đáp án.
`, quiz: [
  { t: 'mc', q: '"Students must submit a ___ before the deadline." Loại từ cần điền:', o: ['động từ', 'danh từ số ít', 'tính từ'], a: 1, why: 'Sau "a" là danh từ số ít.' },
  { t: 'mc', q: 'Chỗ trống trong sentence completion điền:', o: ['từ bạn tự paraphrase', 'từ nguyên văn trong audio', 'từ trong câu hỏi'], a: 1, why: 'Phần xung quanh bị paraphrase; đáp án giữ nguyên.' },
  { t: 'mc', q: 'Đề: ONE WORD ONLY. Audio: "a weekly report". Câu: "Students write a ___ report." Bạn điền:', o: ['weekly report', 'weekly', 'a weekly'], a: 1, why: 'Một từ, và "report" đã in sẵn.' }
]},

{ id: 'L6', type: 'listening', title: 'Table / flow-chart completion', goal: 'Đọc bảng theo hàng, đọc lưu đồ theo thứ tự, điền đúng ô.', md: `
### Bảng (table)
- Đọc **tiêu đề cột và hàng** trước: chúng cho biết loại thông tin của mỗi ô (giá? thời gian? địa điểm?).
- Audio đi **theo hàng** (từng mục một), trong mỗi hàng đi theo cột trái → phải (thường).
- Tiêu đề hàng (tên mục) là mỏ neo — nghe tên mục → biết mình đang ở hàng nào.
- Ô trống không liên tiếp: đọc cả ô đã điền sẵn để bám theo.

### Lưu đồ (flow-chart)
- Mô tả quy trình/các bước. Nghe **từ chỉ trình tự**: *first, to begin with, next, then, after that, once …, at this point, the final stage, lastly.*
- Mũi tên = thứ tự audio. Mỗi ô thường là một danh từ hoặc động từ.
- Đoán loại từ như sentence completion.

### Bẫy
- Trong bảng, thông tin cho 2 ô cùng hàng nói liền nhau, dễ điền lệch ô.
- Lưu đồ: người nói quay lại nhắc bước trước ("as I said earlier") — không phải bước mới.

### Luyện
2 bài table + 2 bài flow-chart. Sau khi làm, kể lại quy trình bằng lời (1 phút) — luyện Speaking Part 2 kiểu "describe a process".
`, quiz: [
  { t: 'mc', q: 'Trong table completion, audio thường đi theo:', o: ['cột, từ trên xuống', 'hàng, từng mục một', 'ngẫu nhiên'], a: 1, why: 'Từng mục (hàng) một.' },
  { t: 'mc', q: 'Từ nào báo hiệu bước tiếp theo trong flow-chart?', o: ['as I said earlier', 'once that is done', 'for example'], a: 1, why: 'once … = sau khi xong bước trước.' },
  { t: 'mc', q: 'Nên đọc gì đầu tiên ở một bảng?', o: ['ô trống', 'tiêu đề cột và hàng', 'ghi chú cuối'], a: 1, why: 'Tiêu đề cho biết loại thông tin cần nghe.' }
]},

{ id: 'L7', type: 'listening', title: 'Short answer & Part 3 nhiều người nói', goal: 'Trả lời ngắn đúng giới hạn; theo dõi ai nói gì và ai đổi ý.', md: `
### Short answer
- Câu hỏi wh-; đáp án 1–3 từ nguyên văn. Đọc giới hạn từ.
- Đoán loại đáp án: *What* → danh từ; *Where* → nơi; *When* → thời gian; *How many* → số; *Why* → thường là cụm danh từ (lý do).
- Không viết câu đầy đủ, không thêm "because".

### Part 3: 2–4 người nói
- Trong 30 giây đọc trước, ghi tên người nói (thường in sẵn trong câu hỏi: *Mark thinks…, the tutor suggests…*).
- Nhận diện giọng: nam/nữ, trẻ/già; người thứ ba thường là giảng viên.
- Ngôn ngữ đồng ý/không đồng ý: *I'm with you on that · Absolutely · That's true, but… · I'm not sure about that · I see what you mean, however… · I'd go along with that · Not necessarily.*
- Ý kiến **thay đổi** trong hội thoại: "I used to think … but having read …, I now …" — đáp án là ý cuối.
- Câu hỏi "What do they agree about?" → cần cả hai cùng xác nhận.

### Luyện
3 Part 3 đầy đủ. Khi chữa: với mỗi câu sai, ghi **ai** nói câu chứa đáp án và bạn đã nghe nhầm thành ai.
`, quiz: [
  { t: 'mc', q: '"Why did the project fail?" (NO MORE THAN TWO WORDS). Audio: "mainly because of a lack of funding." Đáp án tốt nhất:', o: ['because of funding', 'lack of funding', 'funding'], a: 1, why: 'Không thêm because; "lack of funding" 3 từ → vượt. Chọn đáp án 2 từ "lack of funding"? Thực tế 3 từ; đáp án chấp nhận thường là "funding" hoặc "lack of funding" nếu giới hạn 3 từ. Với 2 từ: "funding".' },
  { t: 'mc', q: '"I\'m not sure about that" nghĩa là:', o: ['đồng ý', 'không đồng ý (lịch sự)', 'không hiểu'], a: 1, why: 'Cách không đồng ý mềm.' },
  { t: 'mc', q: 'Câu hỏi "What do Anna and Tom agree about?" Đáp án cần:', o: ['ý của Anna', 'ý cả hai cùng xác nhận', 'ý của tutor'], a: 1, why: 'agree = cả hai.' }
]},

{ id: 'L8', type: 'listening', title: 'Part 4 — bài giảng: paraphrase và distractor', goal: 'Theo kịp bài giảng 5 phút không nghỉ, điền note completion với paraphrase nặng.', md: `
### Đặc điểm
Độc thoại học thuật ~5 phút, **không nghỉ giữa**; 10 câu thường là note completion (một từ). Chủ đề lạ (khảo cổ, sinh học, kinh tế) nhưng **không cần kiến thức nền**. Từ khó nhất thường được in sẵn.

### Các bước
1. Dùng 45 giây đọc kỹ note, gạch từ khóa, đoán loại từ **mọi ô**. Note có cấu trúc (tiêu đề, gạch đầu dòng) — đó là bản đồ bài giảng.
2. Nghe **biển báo chuyển ý**: *Firstly · Let's move on to · Another factor · In terms of · Turning now to · Finally · To sum up*. Mỗi biển báo ≈ một mục trong note.
3. Đáp án đến đều đặn (mỗi 25–40 giây). Quá 45 giây không có đáp án → có thể đã lỡ, nhìn câu kế tiếp.
4. Viết từ nghe được dù không hiểu nghĩa; kiểm tra chính tả lúc chuyển.

### Paraphrase ở Part 4
Câu hỏi: *caused by* ↔ audio: *as a result of / due to / stems from*. *increase in* ↔ *growth / rise / expansion*. *problem* ↔ *issue / challenge / difficulty*. *important* ↔ *key / crucial / central*. *method* ↔ *technique / approach / way*. Danh từ trong câu hỏi ↔ động từ trong audio: *the construction of* ↔ *they built*.

### Distractor
Người nói đưa **ví dụ phụ** rồi quay về ý chính; hoặc nêu **ý người khác** rồi phản bác ("Some researchers claimed X; however, recent evidence shows Y"). Đáp án thường là Y.

### Luyện
3 Part 4. Sau mỗi bài, nghe lại với transcript, đánh dấu mọi biển báo chuyển ý. Dùng 1 đoạn Part 4 làm shadowing — khó nhưng hiệu quả nhất cho nhịp học thuật.
`, quiz: [
  { t: 'mc', q: 'Trong Part 4, "Turning now to the economic effects" báo hiệu:', o: ['ví dụ phụ', 'chuyển sang mục mới trong note', 'kết luận'], a: 1, why: 'Biển báo chuyển ý.' },
  { t: 'mc', q: 'Audio: "Early studies blamed climate, but the real cause was overgrazing." Note: "Main cause: ___". Đáp án:', o: ['climate', 'overgrazing', 'early studies'], a: 1, why: 'Ý phản bác sau cùng là đáp án.' },
  { t: 'mc', q: 'Bạn không hiểu nghĩa từ vừa nghe nhưng nghe rõ. Nên:', o: ['bỏ trống', 'viết theo âm, kiểm tra chính tả sau', 'đoán từ khác có nghĩa'], a: 1, why: 'Đáp án là từ nguyên văn; nghĩa không cần.' }
]},

/* ===================== READING ===================== */
{ id: 'R0', type: 'reading', title: 'Tổng quan Reading, skimming và scanning', goal: 'Biết format, phân bổ 60 phút, và hai kỹ thuật đọc nền tảng.', md: `
### Format
- 3 passage (Academic: học thuật, 700–900 từ mỗi bài, độ khó tăng dần), 40 câu, **60 phút không có thời gian chuyển đáp án**.
- [GT]: Section 1 (2–3 văn bản ngắn đời sống: quảng cáo, thông báo), Section 2 (văn bản công việc: hợp đồng, nội quy), Section 3 (1 bài dài). Cùng dạng câu hỏi.
- Dạng câu hỏi: T/F/NG, Y/N/NG, matching headings, matching information, matching features, sentence/summary/note/table completion, multiple choice, short answer, diagram labelling.

### Phân bổ thời gian
Passage 1: 17 phút · Passage 2: 20 phút · Passage 3: 23 phút. Ghi đáp án **thẳng vào answer sheet** trong lúc làm. Câu nào quá 90 giây → đánh dấu, đi tiếp, quay lại cuối.

### Skimming (đọc lướt lấy ý, 2–3 phút/passage)
Đọc tiêu đề, câu đầu mỗi đoạn, câu cuối đoạn đầu và đoạn cuối. Mục tiêu: biết bài về gì, mỗi đoạn nói gì (ghi 2–3 từ cạnh mỗi đoạn). **Không tra từ, không dừng ở từ lạ.**

### Scanning (quét tìm chi tiết)
Mắt chạy tìm **tên riêng, số, năm, chữ viết hoa, từ in nghiêng** hoặc từ khóa đặc biệt (từ ít có đồng nghĩa). Không đọc, chỉ tìm. Khi thấy → đọc kỹ 2 câu quanh đó.

### Quy trình chung cho một passage
1. Skim 2–3 phút, ghi ý mỗi đoạn.
2. Đọc câu hỏi theo nhóm (cùng dạng), gạch từ khóa, nghĩ paraphrase.
3. Scan tìm vị trí → đọc kỹ → trả lời.
4. Câu hỏi "ý chính" (headings) làm **sau** câu hỏi chi tiết, vì lúc đó bạn đã hiểu bài.
5. Không bỏ trống. Không dùng kiến thức ngoài bài.

### Luyện tuần này
2 passage 1 từ Cambridge, **chỉ skim 3 phút rồi viết tóm tắt từng đoạn**, chưa làm câu hỏi. Sau đó làm câu hỏi và so.
`, quiz: [
  { t: 'mc', q: 'Phân bổ hợp lý cho 3 passage:', o: ['20/20/20', '17/20/23', '25/20/15'], a: 1, why: 'Passage 3 khó nhất cần nhiều giờ hơn.' },
  { t: 'mc', q: 'Scanning dùng để:', o: ['hiểu ý chính', 'tìm nhanh tên, số, từ khóa', 'học từ mới'], a: 1, why: 'Quét tìm chi tiết.' },
  { t: 'mc', q: 'Khi skim gặp từ lạ, bạn nên:', o: ['dừng tra', 'đoán rồi đi tiếp', 'ghi vào sổ ngay'], a: 1, why: 'Skim là lấy ý toàn bài.' },
  { t: 'mc', q: 'Reading có bao nhiêu phút để chuyển đáp án sang answer sheet?', o: ['10', '5', '0'], a: 2, why: 'Phải ghi thẳng trong 60 phút.' }
]},

{ id: 'R1', type: 'reading', title: 'True / False / Not Given', goal: 'Phân biệt False với Not Given; nhận ra 5 kiểu bẫy.', md: `
### Định nghĩa
- **TRUE**: câu hỏi **cùng nghĩa** với bài (paraphrase).
- **FALSE**: câu hỏi **mâu thuẫn** với bài — bài nói điều ngược lại hoặc khác.
- **NOT GIVEN**: bài **không nói** đủ để kết luận đúng hay sai.

### Các bước
1. Gạch từ khóa trong câu hỏi: **tên, số, từ so sánh, từ chỉ lượng (all, some, only, most), từ phủ định**.
2. Scan tìm vị trí (câu hỏi theo thứ tự bài).
3. Đọc kỹ 1–2 câu. So **từng phần** của câu hỏi với bài: chủ thể? hành động? mức độ? thời gian?
4. Hỏi: bài có nói về **điều này** không? Không → NG. Có → cùng nghĩa (T) hay trái nghĩa (F)?

### 5 kiểu bẫy
- **Từ chỉ lượng**: bài "most students", câu hỏi "all students" → FALSE.
- **So sánh**: bài "A is as popular as B", câu hỏi "A is more popular than B" → FALSE.
- **Thêm chi tiết không có**: bài "the museum opened in 1990", câu hỏi "the museum opened in 1990 and attracts many tourists" → NG (phần sau không có).
- **Lý do/mục đích không nêu**: bài "He moved to London", câu hỏi "He moved to London to find work" → NG.
- **Kiến thức ngoài**: bạn biết điều đó đúng ngoài đời nhưng bài không nói → NG.

### Dấu hiệu
Nếu bạn phải **suy luận hai bước** để kết luận → thường là NG. Nếu bài dùng từ **phủ định hoặc trái nghĩa** rõ với câu hỏi → FALSE.

### Luyện
Làm 3 bộ T/F/NG. Với mỗi câu, viết cạnh: "T vì câu X trong bài nói …" / "F vì bài nói … trái với …" / "NG vì bài không nhắc đến …". Bước ghi lý do này là cái biến 5/8 thành 8/8.
`, quiz: [
  { t: 'mc', q: 'Bài: "The majority of participants completed the course." Câu hỏi: "All participants completed the course."', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 1, why: 'majority ≠ all → mâu thuẫn.' },
  { t: 'mc', q: 'Bài: "The bridge was built in 1932." Câu hỏi: "The bridge was built in 1932 by local engineers."', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 2, why: 'Không có thông tin về ai xây.' },
  { t: 'mc', q: 'Bài: "Sales fell sharply after the price rise." Câu hỏi: "The price increase led to a drop in sales."', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 0, why: 'Paraphrase cùng nghĩa.' },
  { t: 'mc', q: 'Bài: "Both methods are equally effective." Câu hỏi: "The first method is more effective than the second."', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 1, why: 'equally ≠ more → mâu thuẫn.' },
  { t: 'mc', q: 'Bài: "She left the company in 2019." Câu hỏi: "She left the company because of low pay."', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 2, why: 'Lý do không được nêu.' }
]},

{ id: 'R2', type: 'reading', title: 'Yes / No / Not Given', goal: 'Áp dụng logic T/F/NG cho ý kiến và lập luận của tác giả.', md: `
### Khác gì T/F/NG
T/F/NG hỏi về **thông tin sự thật** trong bài. Y/N/NG hỏi về **ý kiến / tuyên bố của tác giả** (hoặc người được trích). Logic giống hệt: Yes = tác giả nói vậy, No = tác giả nói ngược lại, NG = tác giả không bày tỏ.

### Ngôn ngữ ý kiến cần nhận ra
*argues, claims, believes, suggests, maintains, is convinced that, it is clear that, undoubtedly, there is little doubt, unfortunately, surprisingly, it would be a mistake to, in my view, I would argue.* Trạng từ đánh giá (*remarkably, regrettably*) là dấu hiệu quan điểm.

### Bẫy riêng
- Tác giả **trích dẫn** ý người khác rồi phản bác: "Critics argue X. However, this ignores…" → ý tác giả là *không X*.
- Câu hỏi về **mức độ chắc chắn**: bài "may contribute", câu hỏi "is the main cause" → NO hoặc NG tùy ngữ cảnh (thường NG nếu bài không xếp hạng nguyên nhân).
- Tác giả nêu sự thật nhưng không đánh giá → câu hỏi hỏi đánh giá → NG.

### Luyện
2 bộ Y/N/NG (thường ở passage 3). Khoanh mọi động từ ý kiến trong bài trước khi trả lời.
`, quiz: [
  { t: 'mc', q: 'Bài: "Critics claim the policy failed. In fact, the data show the opposite." Câu hỏi: "The writer believes the policy failed."', o: ['YES', 'NO', 'NOT GIVEN'], a: 1, why: 'Tác giả phản bác critics.' },
  { t: 'mc', q: 'Bài: "The project cost $2 million." Câu hỏi: "The writer thinks the project was too expensive."', o: ['YES', 'NO', 'NOT GIVEN'], a: 2, why: 'Chỉ nêu sự thật, không đánh giá.' },
  { t: 'mc', q: 'Từ nào là dấu hiệu quan điểm tác giả?', o: ['in 1998', 'regrettably', 'the committee'], a: 1, why: 'Trạng từ đánh giá.' }
]},

{ id: 'R3', type: 'reading', title: 'Matching headings', goal: 'Tìm ý chính mỗi đoạn, không bị dụ bởi chi tiết.', md: `
### Đặc điểm
Danh sách heading (i–x) nhiều hơn số đoạn. Heading đúng tóm **ý chính** cả đoạn; heading sai thường nhắc một **chi tiết** có trong đoạn (bẫy "từ trùng").

### Các bước
1. Đọc tất cả heading, gạch từ khóa, nghĩ paraphrase. Gạch bỏ heading đã dùng làm ví dụ.
2. Với mỗi đoạn: đọc **câu đầu + câu cuối** kỹ, phần giữa lướt. Tự tóm đoạn bằng 3–5 từ **trước khi** nhìn heading.
3. So tóm tắt của bạn với heading. Chọn heading bao phủ **cả đoạn**, không chỉ một câu.
4. Phân vân 2 heading → ghi cả hai, làm đoạn khác; heading đúng cho đoạn khác sẽ loại một cái.
5. Làm dạng này **sau** các câu hỏi chi tiết của passage (nếu có), vì bạn đã hiểu bài.

### Bẫy
- Heading có từ **y hệt** trong đoạn → nghi ngờ; heading đúng thường paraphrase.
- Đoạn mở đầu bằng ví dụ, ý chính nằm ở giữa/cuối ("Such cases show that…").
- Heading quá rộng (nói về cả bài) hoặc quá hẹp (một chi tiết).

### Câu hỏi tự kiểm
"Nếu đoạn này bị xóa, bài mất điều gì?" — câu trả lời chính là heading.

### Luyện
3 bộ headings. Với mỗi đoạn, viết tóm tắt 5 từ của bạn rồi so với heading đúng; ghi lại khi bạn chọn heading chi tiết thay vì ý chính.
`, quiz: [
  { t: 'mc', q: 'Heading đúng cho một đoạn thường:', o: ['chứa từ y hệt trong đoạn', 'tóm ý chính cả đoạn bằng paraphrase', 'nhắc đến ví dụ đầu đoạn'], a: 1, why: 'Từ y hệt là bẫy chi tiết.' },
  { t: 'mc', q: 'Nên đọc kỹ phần nào của đoạn trước?', o: ['câu đầu và câu cuối', 'câu giữa', 'toàn bộ từng từ'], a: 0, why: 'Ý chính thường ở câu đầu/cuối.' },
  { t: 'mc', q: 'Đoạn: "In 1990 a factory in Leeds closed. Two years later, three more followed. Across the region, manufacturing was collapsing." Heading phù hợp:', o: ['The history of a Leeds factory', 'Regional industrial decline', 'Events of 1990'], a: 1, why: 'Ý chính là sự suy giảm toàn vùng; factory là ví dụ.' }
]},

{ id: 'R4', type: 'reading', title: 'Matching information (which paragraph contains…)', goal: 'Tìm chi tiết cụ thể trong đoạn; biết dạng này KHÔNG theo thứ tự.', md: `
### Đặc điểm
"Which paragraph contains the following information?" — câu hỏi hỏi về **chi tiết** (một ví dụ, một lý do, một so sánh, một con số, một định nghĩa), **không theo thứ tự** bài. Một đoạn có thể chứa 2 đáp án; có đoạn không chứa đáp án nào.

### Các bước
1. Đọc câu hỏi, xác định **loại thông tin**: *a reason for… · an example of… · a comparison between… · a reference to… · a description of… · a definition of… · a prediction about…* Loại này quyết định bạn tìm gì (ví dụ → *for instance, such as*; so sánh → *than, compared with, unlike*; lý do → *because, due to, since*).
2. Dùng ghi chú ý chính mỗi đoạn (từ bước skim) để khoanh 2–3 đoạn khả nghi.
3. Scan đoạn khả nghi tìm paraphrase.
4. Làm dạng này **cuối cùng** trong passage: lúc đó bạn đã đọc kỹ nhiều đoạn qua các câu khác.

### Bẫy
- Câu hỏi nói "a reason", bạn tìm thấy chủ đề đó trong đoạn A nhưng *lý do* nằm ở đoạn C.
- Đáp án trong một **câu phụ** (mệnh đề quan hệ, dấu ngoặc) dễ bị lướt qua.

### Luyện
3 bộ matching information. Ghi thời gian: dạng này dễ "nuốt" 10 phút; đặt giới hạn 1,5 phút/câu, câu nào quá → đoán rồi đi.
`, quiz: [
  { t: 'mc', q: 'Matching information khác matching headings ở chỗ:', o: ['hỏi ý chính', 'hỏi chi tiết, không theo thứ tự', 'theo thứ tự bài'], a: 1, why: 'Chi tiết + lộn xộn.' },
  { t: 'mc', q: '"a comparison between two methods" — nên scan từ nào?', o: ['for example', 'than / unlike / compared with', 'because'], a: 1, why: 'Dấu hiệu so sánh.' },
  { t: 'mc', q: 'Nên làm dạng này khi nào trong passage?', o: ['đầu tiên', 'cuối cùng', 'tùy'], a: 1, why: 'Đã hiểu bài qua các câu khác.' }
]},

{ id: 'R5', type: 'reading', title: 'Matching features (tên người, lý thuyết, địa điểm)', goal: 'Ghép tuyên bố với tên; tận dụng chữ viết hoa để scan.', md: `
### Đặc điểm
Danh sách tên (A–F: nhà nghiên cứu, công ty, thành phố, thời kỳ) và các tuyên bố/đặc điểm. Tên có thể dùng nhiều lần (đề nói "You may use any letter more than once"). Không theo thứ tự.

### Các bước
1. Scan bài, **khoanh mọi tên** trong danh sách (chữ viết hoa dễ thấy). Một tên có thể xuất hiện ở 2–3 chỗ (cả dạng *he/she/his team/the researchers*).
2. Đọc kỹ câu quanh mỗi tên, ghi 3 từ tóm ý của người đó.
3. Đọc tuyên bố, tìm paraphrase trong ghi chú.
4. Tuyên bố còn lại khó → quay lại các vị trí tên, đọc rộng hơn (câu trước/sau).

### Bẫy
- Tên nhắc ở đoạn đầu (giới thiệu) nhưng ý kiến ở đoạn sau với đại từ *he/she*.
- Hai người **đồng ý** với nhau: tuyên bố có thể gán cho cả hai, chỉ một người nằm trong đáp án.
- Tuyên bố mô tả **phương pháp** chứ không phải **kết luận** của người đó.

### Luyện
2 bộ matching features. Luyện thêm: đọc một bài báo tiếng Anh về công nghệ, khoanh tất cả tên và tóm ý mỗi người — 5 phút, vừa luyện scan vừa đọc thật.
`, quiz: [
  { t: 'mc', q: 'Cách nhanh nhất tìm vị trí tên trong bài:', o: ['đọc từ đầu', 'scan chữ viết hoa', 'đọc câu đầu mỗi đoạn'], a: 1, why: 'Tên riêng viết hoa.' },
  { t: 'mc', q: 'Bài: "Dr Lee proposed the model in 2001. Her later work questioned its accuracy." Tuyên bố "doubted the reliability of the model" gán cho:', o: ['Dr Lee', 'không ai', 'người khác'], a: 0, why: '"Her later work" vẫn là Dr Lee; doubted = questioned.' },
  { t: 'mc', q: '"You may use any letter more than once" nghĩa là:', o: ['mỗi tên dùng 1 lần', 'một tên có thể là đáp án cho nhiều tuyên bố', 'phải dùng hết tên'], a: 1, why: 'Đọc kỹ chỉ dẫn này.' }
]},

{ id: 'R6', type: 'reading', title: 'Sentence completion (Reading)', goal: 'Điền từ nguyên văn đúng ngữ pháp và giới hạn.', md: `
### Đặc điểm
Giống Listening: câu paraphrase từ bài, chỗ trống là từ **nguyên văn** trong bài, theo thứ tự. Giới hạn từ ghi rõ.

### Các bước
1. Đọc câu, đoán loại từ cho chỗ trống (danh từ? tính từ? số?).
2. Gạch từ khóa, scan tìm vị trí (theo thứ tự → thu hẹp vùng tìm dựa vào câu trước/sau).
3. Đọc kỹ câu trong bài, chọn từ nguyên văn, **không đổi dạng** (bài "decisions" thì điền "decisions").
4. Đọc lại câu đã điền: đúng ngữ pháp, đúng nghĩa, trong giới hạn?

### Bẫy
- Từ cần điền nằm **trước** từ khóa trong bài (đảo trật tự).
- Hai danh từ cạnh nhau, bạn chép cả cụm quá giới hạn → chọn danh từ chính.
- Dạng "complete the sentences with the correct ending A–H": ghép nửa câu; kiểm tra **ngữ pháp** khớp và **ý** khớp bài (nhiều ending đúng ngữ pháp nhưng sai ý).

### Luyện
2 bộ sentence completion + 1 bộ sentence endings.
`, quiz: [
  { t: 'mc', q: 'Bài: "…which led to significant improvements in air quality." Câu: "The policy improved ___." (ONE WORD). Điền:', o: ['air quality', 'air', 'quality'], a: 2, why: 'Một từ; "quality" là danh từ chính, nhưng thực tế đề ONE WORD thường tránh cụm như vậy. Khi bị ép, chọn danh từ chính.' },
  { t: 'mc', q: 'Trong sentence completion, có được đổi "decisions" thành "decision" không?', o: ['được', 'không', 'tùy'], a: 1, why: 'Từ nguyên văn.' },
  { t: 'mc', q: 'Dạng "sentence endings A–H" cần kiểm tra:', o: ['chỉ ngữ pháp', 'chỉ ý', 'cả ngữ pháp và ý khớp bài'], a: 2, why: 'Nhiều ending khớp ngữ pháp nhưng sai ý.' }
]},

{ id: 'R7', type: 'reading', title: 'Summary / note / table completion', goal: 'Hoàn thành tóm tắt có hoặc không có danh sách từ.', md: `
### Hai biến thể
- **Không có danh sách từ**: điền từ **nguyên văn** từ bài (như sentence completion). Tóm tắt thường chỉ bao một phần bài (1–3 đoạn) → tìm phần đó trước.
- **Có danh sách từ (A–L)**: từ trong danh sách là **đồng nghĩa/dạng khác** của từ trong bài. Dùng **ngữ pháp** để loại (chỗ trống cần danh từ → bỏ các tính từ), rồi **nghĩa**.

### Các bước
1. Đọc tiêu đề tóm tắt → xác định phần bài tương ứng.
2. Đọc cả tóm tắt một lượt để hiểu ý.
3. Với mỗi chỗ trống: loại từ cần gì? Từ khóa quanh đó paraphrase câu nào trong bài?
4. Có danh sách: khoanh 2–3 ứng viên theo ngữ pháp, chọn theo nghĩa. Không có danh sách: chép đúng từ trong bài.
5. Đọc lại tóm tắt hoàn chỉnh — phải trôi chảy.

### Bẫy
- Danh sách có cặp **gần nghĩa** (*reduce/limit*, *result/cause*): quay lại bài xác định chính xác.
- Danh sách có từ **y hệt** trong bài nhưng sai vị trí.
- Note/table completion: đọc tiêu đề cột/hàng như Listening L6.

### Luyện
2 bộ mỗi biến thể. Với bản có danh sách, viết cạnh mỗi từ trong danh sách loại từ (n/v/adj) trước khi làm.
`, quiz: [
  { t: 'mc', q: 'Summary có danh sách từ: từ trong danh sách thường là:', o: ['từ y hệt trong bài', 'đồng nghĩa hoặc dạng khác của từ trong bài', 'không liên quan'], a: 1, why: 'Vì vậy cần paraphrase.' },
  { t: 'mc', q: 'Chỗ trống "…the ___ of the project was delayed". Loại từ:', o: ['tính từ', 'danh từ', 'trạng từ'], a: 1, why: 'Sau the, trước of.' },
  { t: 'mc', q: 'Việc đầu tiên với một summary:', o: ['điền ngay từ chỗ trống 1', 'đọc tiêu đề để xác định phần bài tương ứng', 'đọc danh sách từ'], a: 1, why: 'Thu hẹp vùng tìm.' }
]},

{ id: 'R8', type: 'reading', title: 'Multiple choice & short answer (Reading)', goal: 'Loại trừ distractor theo 3 kiểu; trả lời ngắn đúng giới hạn.', md: `
### Multiple choice
- Theo thứ tự bài. Đọc **câu hỏi** (stem) trước, scan vị trí, **đọc kỹ đoạn đó trước khi nhìn phương án** — rồi mới so. Nhìn phương án trước dễ bị dẫn.
- 3 kiểu distractor: (1) **đúng với bài nhưng không trả lời câu hỏi**; (2) **đúng một nửa** (nửa sau sai); (3) **ngược nghĩa** hoặc **quá tuyệt đối** (always, never, only).
- Câu hỏi về **ý toàn bài** ("What is the writer's main purpose?") làm cuối.

### Short answer
- Wh-question, đáp án 1–3 từ **nguyên văn**, theo thứ tự.
- Đoán loại đáp án từ wh-word. Không viết câu, không thêm từ ngoài bài.
- Giới hạn từ kiểm tra lại trước khi ghi.

### Luyện
2 bộ multiple choice (passage 2–3) + 1 bộ short answer. Với mỗi distractor bạn chọn nhầm, ghi nó thuộc kiểu nào trong 3 kiểu.
`, quiz: [
  { t: 'mc', q: 'Thứ tự tốt khi làm multiple choice Reading:', o: ['đọc phương án → tìm trong bài', 'đọc câu hỏi → đọc kỹ đoạn liên quan → so phương án', 'đọc bài hết rồi làm'], a: 1, why: 'Tránh bị phương án dẫn dắt.' },
  { t: 'mc', q: 'Phương án "The method is always more accurate" khả năng cao là:', o: ['đúng', 'distractor quá tuyệt đối', 'không xác định'], a: 1, why: '"always" hiếm khi đúng với bài học thuật.' },
  { t: 'mc', q: '"What material was used for the roof?" (NO MORE THAN TWO WORDS). Bài: "roofed with sheets of corrugated iron". Đáp án:', o: ['sheets of corrugated iron', 'corrugated iron', 'iron sheets'], a: 1, why: '2 từ nguyên văn, đúng câu hỏi.' }
]},

{ id: 'R9', type: 'reading', title: 'Diagram / flow-chart labelling', goal: 'Gắn nhãn sơ đồ bằng từ nguyên văn; theo đúng trình tự.', md: `
### Đặc điểm
Sơ đồ kỹ thuật (máy móc, quy trình, cấu trúc sinh học) với nhãn trống. Đáp án là **danh từ nguyên văn** trong bài, thường tập trung trong **1–2 đoạn mô tả** sơ đồ.

### Các bước
1. Nhìn sơ đồ: có nhãn sẵn nào? Chúng là từ khóa để scan tìm đoạn mô tả.
2. Xác định đoạn mô tả (thường có từ *consists of, is made up of, is attached to, flows into, the process begins*).
3. Đọc kỹ đoạn đó theo **trình tự không gian/thời gian** của sơ đồ (trên→dưới, trái→phải, hoặc theo mũi tên).
4. Điền từ nguyên văn, kiểm tra giới hạn.

### Bẫy
- Bài mô tả theo thứ tự khác với số câu hỏi → bám theo nhãn sẵn.
- Hai bộ phận có tên gần giống (*inner chamber / outer chamber*).

### Luyện
2 bài diagram. Sau khi làm, tự giải thích sơ đồ bằng lời 1 phút — luyện Writing Task 1 process.
`, quiz: [
  { t: 'mc', q: 'Đáp án diagram labelling thường là:', o: ['động từ', 'danh từ nguyên văn trong bài', 'từ bạn tự nghĩ'], a: 1, why: 'Nhãn = tên bộ phận/giai đoạn.' },
  { t: 'mc', q: 'Để tìm đoạn mô tả sơ đồ, nên scan:', o: ['các nhãn đã in sẵn trên sơ đồ', 'câu đầu bài', 'số năm'], a: 0, why: 'Nhãn sẵn xuất hiện trong đoạn mô tả.' }
]},

{ id: 'R10', type: 'reading', title: 'Quản lý thời gian 3 passage và chiến thuật tổng', goal: 'Hoàn thành 40 câu trong 60 phút với ít câu đoán nhất.', md: `
### Kế hoạch 60 phút
| Thời gian | Việc |
|---|---|
| 0–3 | Skim passage 1, ghi ý mỗi đoạn |
| 3–17 | Làm câu hỏi passage 1 (dạng chi tiết trước, headings/matching info sau) |
| 17–20 | Skim passage 2 |
| 20–37 | Làm passage 2 |
| 37–40 | Skim passage 3 |
| 40–58 | Làm passage 3 |
| 58–60 | Điền mọi ô trống (đoán), kiểm tra chính tả/số nhiều |

### Thứ tự dạng câu hỏi trong một passage
1. Dạng **theo thứ tự + chi tiết** (T/F/NG, sentence/summary completion, MC, short answer) → đi dọc bài một lượt.
2. Dạng **tên** (matching features) → scan.
3. Dạng **ý chính** (headings) và **lộn xộn** (matching information) → cuối, khi đã quen bài.

### Luật cắt lỗ
- Một câu quá **90 giây** → đánh dấu, đoán tạm, đi tiếp.
- Một passage quá giờ **3 phút** → dừng, sang passage sau; quay lại nếu còn giờ.
- Passage 3 khó nhưng điểm mỗi câu bằng nhau; đừng hy sinh 5 câu dễ passage 1 cho 2 câu khó passage 3.

### Nếu kẹt ở 25–28/40
Thường do (a) đọc chậm → tăng đọc mở rộng 30 phút/ngày (báo, bài khoa học phổ thông); (b) từ vựng học thuật → AWL A1–A4; (c) T/F/NG lẫn F/NG → làm lại R1 với ghi lý do. Đo lại sau 4 tuần.

### Luyện
Từ tuần này: **1 đề Reading đầy đủ bấm giờ mỗi tuần**, ghi số phút cho mỗi passage và số câu đoán.
`, quiz: [
  { t: 'mc', q: 'Dạng nào nên làm cuối trong một passage?', o: ['T/F/NG', 'matching headings / matching information', 'short answer'], a: 1, why: 'Cần hiểu bài; làm sau các câu chi tiết.' },
  { t: 'mc', q: 'Một câu đã mất 2 phút chưa ra. Nên:', o: ['tiếp tục đến khi ra', 'đoán, đánh dấu, đi tiếp', 'bỏ trống'], a: 1, why: 'Luật cắt lỗ 90 giây.' },
  { t: 'mc', q: '2 phút cuối nên dùng để:', o: ['đọc lại passage 3', 'điền mọi ô trống và kiểm tra chính tả', 'nghỉ'], a: 1, why: 'Không có thời gian chuyển đáp án riêng.' }
]}
];
