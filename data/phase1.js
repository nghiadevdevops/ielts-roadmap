/* ===== Giai đoạn 1: 12 bài ngữ pháp (G1–G12) + 12 bài phát âm (P1–P12) ===== */
window.LESSONS_P1 = [
{ id: 'G1', type: 'grammar', title: 'Cấu trúc câu, động từ to be, danh từ, mạo từ', goal: 'Nói và viết câu đơn 5–8 từ không thiếu động từ, không sai a/an/the cơ bản.', md: `
### Cốt lõi
- Câu tiếng Anh **luôn** có chủ ngữ + động từ. Tiếng Việt bỏ được ("Hôm nay nóng quá"), tiếng Anh không: *It is very hot today.* Chủ ngữ giả *it / there*: *There are three bugs in this module.*
- Hai khung câu cơ bản: **S + V + O** (*I write code.*) và **S + be + Adj / N / cụm giới từ** (*The server is slow. / She is a tester. / The file is on the shared drive.*)
- *to be*: am / is / are (hiện tại), was / were (quá khứ). Rút gọn khi nói: *I'm, he's, they're, isn't, aren't, wasn't.*
- Danh từ đếm được (*a bug / two bugs*) và **không đếm được**: *information, advice, furniture, equipment, research, news, software, feedback, work, homework, money, traffic, luggage, knowledge, progress.* Không đếm được thì **không có -s, không đi với a/an**: *some information*, *a piece of advice*, *two pieces of equipment*.
- *a/an* theo **âm** đầu, không theo chữ: *an hour, a university, an SBOM (đọc "es"), a URL (đọc "you"), an MBA.*
- *the* khi cả hai bên biết đang nói về cái nào: *the server* (của dự án mình), *the meeting at 3pm*. Không dùng *the* khi nói chung chung với danh từ số nhiều hoặc không đếm được: *I like music* (không phải *the music*), *Developers need sleep.*

### Lỗi người Việt hay mắc
- Bỏ *be*: ~~He very tall~~ → *He is very tall.* ~~I am agree~~ → *I agree* (agree là động từ).
- ~~I very like it~~ → *I like it very much / I really like it.*
- ~~an information, advices, equipments, feedbacks~~ → không có số nhiều.
- ~~the Vietnam, the life, the technology~~ (nói chung) → *Vietnam, life, technology.*

### Luyện tập
- Essential Grammar in Use (bìa đỏ): units 1–4 (be), 65–71 (danh từ, a/an, the).
- Viết 10 câu giới thiệu bản thân, công ty, đồng nghiệp. Đọc to.

### Thực tế
Viết và đọc to bài tự giới thiệu 30 giây: tên, nghề, công ty, nơi sống, một điều thích. Đây là thứ bạn nói ở mọi cuộc họp đầu tiên với khách.
`, quiz: [
  { t: 'fix', q: 'He very busy today.', a: ['He is very busy today.', "He's very busy today."], why: 'Câu cần động từ: be + adj.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ['I am agree with you.', 'I agree with you.', 'I very agree you.'], a: 1, why: 'agree là động từ thường, không đi với be.' },
  { t: 'mc', q: 'The client gave us some useful ___.', o: ['advices', 'advice', 'an advice'], a: 1, why: 'advice không đếm được.' },
  { t: 'fill', q: 'It took ___ hour to fix.', a: ['an'], why: 'hour bắt đầu bằng âm nguyên âm /aʊ/.' },
  { t: 'fill', q: 'She is studying at ___ university in Da Nang.', a: ['a'], why: 'university đọc /juː/ → âm phụ âm → a.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ['I like the music.', 'I like music.', 'I like a music.'], a: 1, why: 'Nói chung chung về âm nhạc → không mạo từ.' },
  { t: 'fix', q: 'There is many bugs in this module.', a: ['There are many bugs in this module.'], why: 'bugs số nhiều → there are.' },
  { t: 'mc', q: 'We need to buy new ___ for the office.', o: ['furnitures', 'furniture', 'a furniture'], a: 1, why: 'furniture không đếm được.' }
]},

{ id: 'G2', type: 'grammar', title: 'Hiện tại đơn và hiện tại tiếp diễn', goal: 'Mô tả việc thường làm và việc đang làm; chia đúng ngôi thứ ba.', md: `
### Cốt lõi
- **Hiện tại đơn**: thói quen, sự thật, lịch trình. Ngôi *he/she/it* thêm **-s/-es** (*works, fixes, goes, does, has*). Phủ định/câu hỏi dùng *do/does*: *She doesn't work on Fridays. Does he use Linux?*
- Trạng từ tần suất đứng **trước động từ thường, sau be**: *I usually start at 9. I am never late.* (always, usually, often, sometimes, rarely, never).
- **Hiện tại tiếp diễn**: *be + V-ing*, việc đang xảy ra lúc nói hoặc tạm thời quanh thời điểm nói: *I'm fixing a bug right now. We're working on version 2.3 this month.*
- Động từ trạng thái **không dùng -ing**: *know, like, love, want, need, believe, understand, mean, belong, seem, prefer, own, hate.* ~~I'm knowing~~ → *I know.*
- Dấu hiệu: hiện tại đơn — *every day, usually, on Mondays, twice a week*; tiếp diễn — *now, at the moment, currently, this week, these days, Look!*

### Lỗi người Việt hay mắc
- Quên -s: ~~He work at AGEST~~ → *He works at AGEST.*
- ~~I am agree / I am understand~~ → *I agree / I understand.*
- Dùng hiện tại đơn cho việc đang làm: ~~I do the report now~~ → *I'm doing the report now.*
- ~~Does she works?~~ → *Does she work?* (sau does là nguyên mẫu).

### Luyện tập
- EGU units 5–9, 23–25.
- Viết 10 câu về việc bạn làm hằng ngày và 5 câu về việc đang làm trong sprint này.

### Thực tế
Câu standup buổi sáng: *"I'm working on ticket 2628. I usually finish testing by noon."*
`, quiz: [
  { t: 'fill', q: 'He ___ (work) at a software company.', a: ['works'], why: 'Ngôi thứ ba số ít thêm -s.' },
  { t: 'mc', q: 'Right now I ___ a report for the client.', o: ['write', 'am writing', 'writes'], a: 1, why: 'right now → hiện tại tiếp diễn.' },
  { t: 'fix', q: 'Does she works from home?', a: ['Does she work from home?'], why: 'Sau does dùng nguyên mẫu.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ["I'm knowing the answer.", 'I know the answer.', 'I am know the answer.'], a: 1, why: 'know là động từ trạng thái, không dùng -ing.' },
  { t: 'mc', q: 'Vị trí trạng từ tần suất đúng:', o: ['I always am on time.', 'I am always on time.', 'Always I am on time.'], a: 1, why: 'Sau be.' },
  { t: 'fill', q: 'She ___ (not / like) meetings in the morning.', a: ["doesn't like", 'does not like'], why: 'Phủ định ngôi thứ ba: does not + nguyên mẫu.' },
  { t: 'fix', q: 'We are usually having lunch at 12.', a: ['We usually have lunch at 12.'], why: 'Thói quen → hiện tại đơn.' },
  { t: 'mc', q: 'The train ___ at 6:30 every morning.', o: ['is leaving', 'leaves', 'leave'], a: 1, why: 'Lịch trình cố định → hiện tại đơn.' }
]},

{ id: 'G3', type: 'grammar', title: 'Quá khứ đơn và quá khứ tiếp diễn', goal: 'Kể lại chuyện đã xảy ra; thuộc 50 động từ bất quy tắc thông dụng nhất.', md: `
### Cốt lõi
- **Quá khứ đơn**: *V-ed* hoặc bất quy tắc. Phủ định/câu hỏi: *did + V nguyên mẫu*: *I didn't see the error. Did you deploy it?*
- 50 động từ bất quy tắc phải thuộc tuần này: *be–was/were–been, have–had, do–did, go–went, get–got, make–made, say–said, see–saw, take–took, come–came, know–knew, think–thought, find–found, give–gave, tell–told, feel–felt, become–became, leave–left, put–put, bring–brought, begin–began, keep–kept, write–wrote, run–ran, read–read, send–sent, build–built, break–broke, buy–bought, catch–caught, choose–chose, cost–cost, cut–cut, drive–drove, eat–ate, fall–fell, forget–forgot, hold–held, lead–led, lose–lost, meet–met, pay–paid, sit–sat, speak–spoke, spend–spent, stand–stood, teach–taught, understand–understood, win–won, wake–woke.*
- **Quá khứ tiếp diễn**: *was/were + V-ing*, hành động đang diễn ra khi hành động khác xen vào: *I was testing the API when the server crashed.* *While I was reading the logs, I found the cause.*
- Dấu hiệu: *yesterday, last week, in 2024, two days ago, when I was a student.*

### Lỗi người Việt hay mắc
- Kể chuyện quá khứ bằng hiện tại: ~~Yesterday I go to the office and I meet him~~ → *went, met.*
- ~~I didn't went~~ → *I didn't go.* ~~Did you saw?~~ → *Did you see?*
- Đọc -ed thành âm tiết riêng: *worked* = /wɜːkt/ một âm tiết (xem P5).

### Luyện tập
- EGU units 10–14, bảng bất quy tắc cuối sách. Flashcard 50 động từ dạng 3 cột.
- Mỗi ngày viết 3 câu "Yesterday I …".

### Thực tế
Phần "Yesterday" của standup: *"Yesterday I fixed the login bug and wrote two unit tests. I didn't finish the review because the build was failing."*
`, quiz: [
  { t: 'fill', q: 'Yesterday I ___ (go) to the client office.', a: ['went'], why: 'go → went.' },
  { t: 'fix', q: 'I didn\'t went to the meeting.', a: ["I didn't go to the meeting.", 'I did not go to the meeting.'], why: 'Sau did/didn\'t là nguyên mẫu.' },
  { t: 'mc', q: 'I ___ the logs when the server crashed.', o: ['read', 'was reading', 'am reading'], a: 1, why: 'Hành động đang diễn ra thì bị xen vào → quá khứ tiếp diễn.' },
  { t: 'fill', q: 'She ___ (write) three tests last week.', a: ['wrote'], why: 'write → wrote.' },
  { t: 'mc', q: '___ you see the error message?', o: ['Did', 'Do', 'Were'], a: 0, why: 'Câu hỏi quá khứ: Did + S + V.' },
  { t: 'fill', q: 'We ___ (build) the first version in 2024.', a: ['built'], why: 'build → built.' },
  { t: 'fix', q: 'Last month the team find a serious bug.', a: ['Last month the team found a serious bug.'], why: 'last month → quá khứ.' },
  { t: 'fill', q: 'He ___ (teach) me how to use Docker.', a: ['taught'], why: 'teach → taught.' }
]},

{ id: 'G4', type: 'grammar', title: 'Hiện tại hoàn thành vs quá khứ đơn', goal: 'Phân biệt I have done và I did — lỗi số 1 của người Việt ở band 5–6.', md: `
### Cốt lõi
- **Hiện tại hoàn thành**: *have/has + V3*. Dùng khi (1) kết quả còn liên quan đến hiện tại và **không nói thời điểm**: *I've fixed the bug* (giờ nó ổn rồi); (2) kinh nghiệm đến nay: *I've never used Rust*; (3) việc bắt đầu trong quá khứ kéo đến hiện tại: *I've worked here for three years / since 2023.*
- Từ đi kèm: *already, yet, just, ever, never, so far, recently, for, since.*
- **Quá khứ đơn** khi **có thời điểm cụ thể đã kết thúc**: *yesterday, last week, in 2023, two hours ago, when I was at university.*
- So sánh: *I've seen that error* (lúc nào không quan trọng) và *I saw that error yesterday.*
- *for + khoảng thời gian* (for 3 years), *since + mốc* (since 2023, since Monday).
- Hiện tại hoàn thành tiếp diễn (giới thiệu): *I've been working on this for two days* — nhấn vào quá trình còn tiếp diễn.
- *been* vs *gone*: *He has gone to Hanoi* (chưa về), *He has been to Hanoi* (từng đi, đã về).

### Lỗi người Việt hay mắc
- ~~I have seen him yesterday~~ → *I saw him yesterday.*
- ~~I live here for 5 years~~ → *I have lived here for 5 years.*
- ~~I am working here since 2023~~ → *I have been working here since 2023.*
- ~~Did you ever go to Japan?~~ (hỏi kinh nghiệm) → *Have you ever been to Japan?*

### Luyện tập
- EGU units 15–21; GIU (bìa xanh) units 7–14.
- Viết 5 cặp câu: một câu hiện tại hoàn thành, một câu quá khứ đơn về cùng một việc.

### Thực tế
Cập nhật ticket: *"I've fixed the issue but I haven't deployed it yet. I deployed the previous fix on Monday."*
`, quiz: [
  { t: 'mc', q: 'I ___ him yesterday.', o: ['have seen', 'saw', 'have see'], a: 1, why: 'yesterday → quá khứ đơn.' },
  { t: 'fix', q: 'I live here for five years.', a: ['I have lived here for five years.', "I've lived here for five years."], why: 'Việc kéo dài đến hiện tại → hiện tại hoàn thành.' },
  { t: 'fill', q: 'She has worked at AGEST ___ 2023.', a: ['since'], why: 'since + mốc thời gian.' },
  { t: 'mc', q: '___ you ever been to Japan?', o: ['Did', 'Have', 'Were'], a: 1, why: 'Kinh nghiệm đến nay → Have you ever…' },
  { t: 'fill', q: "I've fixed the bug, but I haven't deployed it ___.", a: ['yet'], why: 'yet ở cuối câu phủ định/câu hỏi.' },
  { t: 'mc', q: 'He ___ to Hanoi; he will be back on Friday.', o: ['has been', 'has gone', 'went'], a: 1, why: 'Chưa về → has gone.' },
  { t: 'fix', q: 'I am working on this project since January.', a: ['I have been working on this project since January.', "I've been working on this project since January."], why: 'Kéo dài từ quá khứ → hiện tại hoàn thành (tiếp diễn).' },
  { t: 'mc', q: 'We ___ the first release in 2024.', o: ['have shipped', 'shipped', 'have been shipping'], a: 1, why: 'in 2024 → thời điểm đã kết thúc.' }
]},

{ id: 'G5', type: 'grammar', title: 'Tương lai: will, be going to, hiện tại tiếp diễn, hiện tại đơn', goal: 'Nói về kế hoạch, dự đoán, sắp xếp đúng sắc thái.', md: `
### Cốt lõi
- *will*: quyết định ngay lúc nói, lời hứa, dự đoán theo ý kiến: *I'll check it now. I think it will work.*
- *be going to*: kế hoạch đã định, dự đoán có dấu hiệu: *We're going to migrate the database next month. Look at the logs — it's going to crash.*
- **Hiện tại tiếp diễn** cho sắp xếp đã chốt (có giờ, có người): *I'm meeting the client at 10 tomorrow.*
- **Hiện tại đơn** cho lịch trình cố định: *The release is on Friday. The train leaves at 6.*
- Sau *when / if / before / after / as soon as / until* dùng **hiện tại đơn**, không will: *I'll call you when the build finishes.*
- *Shall we start?* (đề nghị, Anh-Anh).

### Lỗi người Việt hay mắc
- ~~When I will finish, I will send it~~ → *When I finish, I'll send it.*
- Dùng will cho mọi thứ: ~~Tomorrow I will have a meeting~~ (được, nhưng tự nhiên hơn: *I'm having a meeting tomorrow*).
- ~~I'm going to go~~ không sai nhưng *I'm going* gọn hơn.

### Luyện tập
- EGU units 26–28; GIU units 19–23.
- Viết kế hoạch tuần tới 8 câu dùng đủ 4 cách.

### Thực tế
Trả lời "What's the plan for this sprint?" trong 5 câu.
`, quiz: [
  { t: 'fix', q: 'When I will finish the report, I will send it to you.', a: ['When I finish the report, I will send it to you.', "When I finish the report, I'll send it to you."], why: 'Sau when dùng hiện tại đơn.' },
  { t: 'mc', q: '(Điện thoại reo) — ___ answer it.', o: ["I'll", "I'm going to", 'I am answering'], a: 0, why: 'Quyết định tức thì → will.' },
  { t: 'mc', q: 'We ___ the database next month. Everything is planned.', o: ['will migrate', 'are going to migrate', 'migrate'], a: 1, why: 'Kế hoạch đã định → be going to.' },
  { t: 'mc', q: 'The release ___ on Friday at 9am (lịch cố định).', o: ['will be', 'is', 'is going to'], a: 1, why: 'Lịch trình → hiện tại đơn.' },
  { t: 'fill', q: "I'll call you as soon as the build ___ (finish).", a: ['finishes'], why: 'Sau as soon as dùng hiện tại đơn, ngôi thứ ba -es.' },
  { t: 'mc', q: 'Look at those logs! The server ___.', o: ['will crash', 'is going to crash', 'crashes'], a: 1, why: 'Dự đoán có dấu hiệu → be going to.' },
  { t: 'mc', q: "I ___ the client at 10 tomorrow — it's in my calendar.", o: ['meet', 'am meeting', 'will meet'], a: 1, why: 'Sắp xếp đã chốt → hiện tại tiếp diễn.' }
]},

{ id: 'G6', type: 'grammar', title: 'Động từ khuyết thiếu (modal verbs)', goal: 'Xin phép, đề nghị, khuyên, nói về nghĩa vụ và khả năng.', md: `
### Cốt lõi
- Sau modal là **động từ nguyên mẫu không to**: *can go, should check, must finish.*
- *can / could / be able to*: khả năng, xin phép. *Could* lịch sự hơn: *Could you send me the file?* Quá khứ: *I couldn't log in yesterday. I was able to fix it after lunch* (thành công một lần cụ thể → was able to).
- *should / ought to*: lời khuyên: *You should update the dependency.*
- *must* (người nói thấy cần) / *have to* (quy định bên ngoài): *I must finish this today. I have to wear a badge at the office.* **Phủ định khác nghĩa hẳn**: *mustn't* = cấm, *don't have to* = không cần: *You mustn't share the password. You don't have to come on Saturday.*
- *may / might*: có thể (50%): *It might be a config issue.*
- *would like* (lịch sự hơn want): *I'd like to ask a question.*
- Modal + *have + V3* cho quá khứ (giới thiệu): *It must have been a network error. You should have tested it first.*

### Lỗi người Việt hay mắc
- ~~can to, must to, should to~~ → bỏ to.
- ~~I can't able to~~ → *I can't* hoặc *I'm not able to.*
- Nhầm *mustn't* với *don't have to*.
- ~~He can speaks~~ → *He can speak.*

### Luyện tập
- EGU units 29–34; GIU units 26–35.
- Viết 10 câu quy định công ty / lời khuyên cho người mới.

### Thực tế
5 câu xin phép và đề nghị trong họp: *Could I share my screen? Should we move this to the next sprint? We might need more time.*
`, quiz: [
  { t: 'fix', q: 'You must to restart the server.', a: ['You must restart the server.'], why: 'Modal + nguyên mẫu không to.' },
  { t: 'mc', q: 'You ___ share your password with anyone. (cấm)', o: ["don't have to", "mustn't", "shouldn't have"], a: 1, why: 'mustn\'t = cấm.' },
  { t: 'mc', q: "Tomorrow is a holiday, so you ___ come to the office.", o: ["mustn't", "don't have to", "can't"], a: 1, why: 'Không cần → don\'t have to.' },
  { t: 'fix', q: 'He can speaks Japanese.', a: ['He can speak Japanese.'], why: 'Sau can là nguyên mẫu.' },
  { t: 'mc', q: '___ you send me the file, please? (lịch sự)', o: ['Can', 'Could', 'Must'], a: 1, why: 'Could lịch sự hơn can.' },
  { t: 'mc', q: 'The build failed. It ___ a network error — I\'m not sure.', o: ['must be', 'might be', 'has to be'], a: 1, why: 'Không chắc → might.' },
  { t: 'fix', q: 'I can\'t able to open the file.', a: ["I can't open the file.", 'I am not able to open the file.', "I'm not able to open the file."], why: 'can và be able to không đi cùng nhau.' },
  { t: 'mc', q: 'You ___ tested it before deploying. (trách, việc đã qua)', o: ['should', 'should have', 'must'], a: 1, why: 'should have + V3 = lẽ ra nên.' }
]},

{ id: 'G7', type: 'grammar', title: 'Câu hỏi, câu hỏi gián tiếp, question tags', goal: 'Hỏi đúng trật tự từ; hỏi lịch sự trong công việc.', md: `
### Cốt lõi
- **Yes/No**: đảo be/modal hoặc thêm do/does/did: *Is it ready? Can you see it? Does it work? Did you restart it?*
- **Wh-**: *What / Where / When / Why / Who / Which / How / How long / How much / How often* + trợ động từ + S + V: *Where do you keep the logs? How long does the build take?*
- Khi *who/what* là **chủ ngữ** thì không cần do: *Who wrote this? What happened?*
- Giới từ cuối câu hỏi là bình thường: *What are you working on? Who did you talk to?*
- **Câu hỏi gián tiếp** (lịch sự, rất hay dùng ở công sở): *Could you tell me where the config file is? Do you know if he has finished?* — **không đảo** ở mệnh đề sau.
- **Question tags**: *It works, doesn't it? You haven't deployed yet, have you?*

### Lỗi người Việt hay mắc
- ~~Where you live?~~ → *Where do you live?*
- ~~What means this word?~~ → *What does this word mean?*
- ~~Could you tell me where is the file?~~ → *… where the file is.*
- ~~How to do this?~~ (câu hỏi) → *How do I do this?* (How to… chỉ dùng làm tiêu đề).

### Luyện tập
- EGU units 44–49; GIU units 49–52.
- Viết 15 câu hỏi bạn thường cần hỏi đồng nghiệp/khách.

### Thực tế
Bộ câu hỏi lại trong họp (học thuộc): *Sorry, could you repeat that? Do you mean we should…? Could you clarify what you mean by X? Just to confirm, the deadline is Friday, right?*
`, quiz: [
  { t: 'fix', q: 'Where you keep the logs?', a: ['Where do you keep the logs?'], why: 'Wh + do + S + V.' },
  { t: 'fix', q: 'What means this error?', a: ['What does this error mean?'], why: 'What + does + S + V nguyên mẫu.' },
  { t: 'mc', q: 'Could you tell me ___?', o: ['where is the file', 'where the file is', 'where does the file'], a: 1, why: 'Câu hỏi gián tiếp không đảo.' },
  { t: 'mc', q: '___ wrote this function?', o: ['Who did', 'Who', 'Who does'], a: 1, why: 'Who là chủ ngữ → không cần do.' },
  { t: 'fill', q: 'It works, ___ it?', a: ["doesn't"], why: 'Tag phủ định cho câu khẳng định hiện tại đơn ngôi 3.' },
  { t: 'fill', q: "You haven't deployed yet, ___ you?", a: ['have'], why: 'Tag khẳng định cho câu phủ định.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ['How to run this test?', 'How do I run this test?', 'How I run this test?'], a: 1, why: 'Câu hỏi cần trợ động từ.' },
  { t: 'mc', q: 'Do you know ___ the meeting has started?', o: ['if', 'does', 'is'], a: 0, why: 'Câu hỏi gián tiếp yes/no dùng if/whether.' }
]},

{ id: 'G8', type: 'grammar', title: 'Giới từ thời gian, nơi chốn và cụm cố định', goal: 'Đúng at/on/in và 40 cụm động từ/tính từ + giới từ hay dùng.', md: `
### Cốt lõi
- **Thời gian**: *at* (giờ; *at night, at the weekend*), *on* (ngày, thứ; *on Monday, on 5 May, on Monday morning*), *in* (tháng, năm, mùa, buổi; *in March, in 2026, in the morning*). **Không giới từ** trước *today, tomorrow, yesterday, last/next/this/every + thời gian*.
- *by* (trước hạn chót: *by Friday*), *until* (kéo dài đến), *for* (khoảng), *during* (trong lúc + danh từ), *while* (trong lúc + mệnh đề), *since* (từ mốc), *from … to*.
- **Nơi chốn**: *at* (điểm: *at the office, at home, at the meeting*), *in* (bên trong, thành phố, nước: *in the room, in Hanoi*), *on* (bề mặt, tầng, phương tiện công cộng: *on the desk, on the second floor, on the bus*). *in the car* nhưng *on the train*.
- **Cụm cố định phải thuộc**: *depend on, listen to, wait for, look for, look at, look after, apologise for, agree with (người) / agree on (việc), arrive at (nơi nhỏ) / in (thành phố), belong to, consist of, focus on, rely on, result in, deal with, talk to / about, think about / of, interested in, good at, bad at, afraid of, responsible for, similar to, different from, famous for, keen on, aware of, capable of, fed up with, worried about, pleased with, married to, in charge of, on time, in time, by mistake, on purpose, by hand, in advance, at least, at the moment.*
- Động từ **không** đi với giới từ (hay thừa): *discuss something, enter a room, answer a question, reach a place, call someone, contact someone, attend a meeting, lack something.*

### Lỗi người Việt hay mắc
- ~~in Monday, at March, in last week~~ → *on Monday, in March, last week.*
- ~~discuss about, contact with, enter into the room~~ → bỏ giới từ.
- ~~listen music, wait him, depend of~~ → *listen to music, wait for him, depend on.*
- ~~in the morning of Monday~~ → *on Monday morning.*

### Luyện tập
- EGU units 103–109; GIU units 121–136. Mỗi ngày 10 thẻ cụm giới từ.

### Thực tế
Hẹn lịch bằng email 5 câu: *Could we meet on Thursday at 2pm? I'll send the agenda by Wednesday. The call will last for about 30 minutes.*
`, quiz: [
  { t: 'fill', q: 'The meeting is ___ Monday ___ 2pm.', a: ['on, at', 'on at', 'on,at'], why: 'on + thứ, at + giờ. Gõ "on, at".' },
  { t: 'fix', q: 'We will discuss about the plan tomorrow.', a: ['We will discuss the plan tomorrow.'], why: 'discuss không đi với about.' },
  { t: 'fill', q: 'It depends ___ the budget.', a: ['on'], why: 'depend on.' },
  { t: 'mc', q: 'Please send the report ___ Friday (hạn chót).', o: ['until', 'by', 'in'], a: 1, why: 'by = trước hoặc đúng hạn.' },
  { t: 'fill', q: "I'm not very good ___ public speaking.", a: ['at'], why: 'good at.' },
  { t: 'fix', q: 'I was born in 5 May 1995.', a: ['I was born on 5 May 1995.'], why: 'Ngày cụ thể → on.' },
  { t: 'fill', q: 'She is responsible ___ the backend.', a: ['for'], why: 'responsible for.' },
  { t: 'mc', q: 'I met him ___ last week.', o: ['in', 'on', '(không giới từ)'], a: 2, why: 'last week không có giới từ.' },
  { t: 'fill', q: 'Our office is ___ the third floor.', a: ['on'], why: 'on + tầng.' }
]},

{ id: 'G9', type: 'grammar', title: 'So sánh hơn, nhất, bằng', goal: 'So sánh đúng dạng, đủ sắc thái (hơn một chút / hơn nhiều / bằng).', md: `
### Cốt lõi
- Ngắn (1 âm tiết, hoặc 2 âm tiết tận -y): *-er / -est*: *fast–faster–fastest, easy–easier–easiest, big–bigger.*
- Dài: *more / most*: *more efficient, the most expensive.*
- Bất quy tắc: *good–better–best, bad–worse–worst, far–further–furthest, little–less–least, much/many–more–most.*
- *than* sau so sánh hơn; *the* trước so sánh nhất.
- Mức độ: *much / far / a lot / significantly + so sánh hơn* (*much faster*), *a bit / slightly + so sánh hơn*, *by far the + nhất*.
- Bằng: *as … as*, *not as … as*, *the same as*, *similar to*, *different from*.
- *too + adj* (quá, tiêu cực), *adj + enough* (đủ), *not … enough*.
- *The more …, the more …*: *The more tests we write, the fewer bugs we ship.*
- *less* (không đếm được) / *fewer* (đếm được): *less time, fewer bugs.*

### Lỗi người Việt hay mắc
- ~~more better, more cheaper, more easier~~ → *better, cheaper, easier.*
- ~~the most fastest~~ → *the fastest.*
- ~~same with~~ → *the same as.* ~~different with~~ → *different from.*

### Luyện tập
- EGU units 87–91; GIU units 105–108.
- Viết 2 đoạn 80 từ: so sánh 2 công cụ bạn dùng; so sánh thành phố bạn sống với quê.

### Thực tế
Trình bày lựa chọn kỹ thuật: *Option A is faster but more expensive. Option B is not as fast, but it's much easier to maintain. Overall, B is the better choice.*
`, quiz: [
  { t: 'fix', q: 'This version is more faster than the old one.', a: ['This version is faster than the old one.'], why: 'Không dùng more với -er.' },
  { t: 'fill', q: 'Postgres is ___ (reliable) than the old database. (so sánh hơn)', a: ['more reliable'], why: 'reliable dài → more.' },
  { t: 'mc', q: 'This is ___ bug I have ever seen.', o: ['the worse', 'the worst', 'the most bad'], a: 1, why: 'bad → worst.' },
  { t: 'fill', q: 'Option B is not ___ fast ___ option A. (bằng)', a: ['as, as', 'as as', 'as,as'], why: 'not as … as. Gõ "as, as".' },
  { t: 'mc', q: 'We have ___ bugs than last sprint.', o: ['less', 'fewer', 'least'], a: 1, why: 'bugs đếm được → fewer.' },
  { t: 'fix', q: 'My job is the same with yours.', a: ['My job is the same as yours.'], why: 'the same as.' },
  { t: 'mc', q: 'The ___ we test, the ___ bugs we ship.', o: ['more / fewer', 'more / less', 'most / fewest'], a: 0, why: 'The more …, the fewer (bugs đếm được).' },
  { t: 'fill', q: 'The laptop is too slow; it is not fast ___ for this job.', a: ['enough'], why: 'adj + enough.' }
]},

{ id: 'G10', type: 'grammar', title: 'Mệnh đề quan hệ', goal: 'Nối hai ý thành một câu dài tự nhiên — nền của Writing band 6+.', md: `
### Cốt lõi
- *who* (người), *which* (vật), *that* (cả hai, chỉ ở mệnh đề xác định), *whose* (sở hữu), *where* (nơi), *when* (thời gian), *why* (lý do).
- **Mệnh đề xác định** (không phẩy): cần để biết đang nói cái nào: *The developer who wrote this module has left. The bug that we found yesterday is fixed.*
- **Mệnh đề không xác định** (có phẩy): thêm thông tin, bỏ đi câu vẫn rõ. **Không dùng that**: *Our team, which has five members, is based in Da Nang.*
- Bỏ đại từ quan hệ khi nó là **tân ngữ**: *The bug (that) we found yesterday.* Không bỏ khi là chủ ngữ.
- Giới từ: *the tool which I work with* hoặc trang trọng *the tool with which I work*.

### Lỗi người Việt hay mắc
- Lặp chủ ngữ: ~~The man who he works with me~~ → *The man who works with me.*
- ~~The bug which it happened~~ → *The bug which happened.*
- Dùng which cho người, who cho vật.
- Thiếu phẩy ở non-defining: *My manager who is Japanese* (ngụ ý có nhiều manager) khác *My manager, who is Japanese,* (chỉ một).

### Luyện tập
- GIU units 92–96.
- Viết 10 định nghĩa thuật ngữ nghề của bạn: *An SBOM is a document which lists all the components in a piece of software.*

### Thực tế
Giải thích cho người không chuyên 3 thuật ngữ trong công việc bằng mệnh đề quan hệ.
`, quiz: [
  { t: 'fix', q: 'The man who he works with me is from Japan.', a: ['The man who works with me is from Japan.'], why: 'Không lặp chủ ngữ sau who.' },
  { t: 'mc', q: 'The developer ___ wrote this module has left.', o: ['which', 'who', 'whose'], a: 1, why: 'Người → who.' },
  { t: 'mc', q: 'Our office, ___ is in Da Nang, has 50 people.', o: ['that', 'which', 'where'], a: 1, why: 'Non-defining không dùng that.' },
  { t: 'mc', q: 'Trong câu nào có thể bỏ đại từ quan hệ?', o: ['The bug that crashed the server was serious.', 'The bug that we found yesterday is fixed.', 'The man who called you is here.'], a: 1, why: 'that là tân ngữ (we found it) → bỏ được.' },
  { t: 'fill', q: 'This is the room ___ we hold our meetings.', a: ['where', 'in which'], why: 'Nơi chốn → where.' },
  { t: 'fill', q: 'The colleague ___ laptop broke is using mine.', a: ['whose'], why: 'Sở hữu → whose.' },
  { t: 'fix', q: 'An SBOM is a document who lists software components.', a: ['An SBOM is a document which lists software components.', 'An SBOM is a document that lists software components.'], why: 'Vật → which/that.' }
]},

{ id: 'G11', type: 'grammar', title: 'Câu điều kiện loại 0, 1, 2 và wish', goal: 'Nói về quy luật, rủi ro có thật, và tình huống giả định.', md: `
### Cốt lõi
- **Loại 0** (luôn đúng): *If + hiện tại, hiện tại*: *If the test fails, the pipeline stops.*
- **Loại 1** (có thể xảy ra): *If + hiện tại, will / can / should + V*: *If we don't fix this, the build will fail.* *Unless* = if not: *Unless we fix this, …*
- **Loại 2** (không có thật / khó xảy ra): *If + quá khứ, would / could + V*: *If I had more time, I would rewrite this module. If I were you, I'd ask the client.* (were cho mọi ngôi, trang trọng).
- *wish + quá khứ* (ước hiện tại khác đi): *I wish I had more RAM.* *wish + would* (phàn nàn): *I wish the client would reply faster.*
- Dấu phẩy khi if đứng đầu, không phẩy khi if ở giữa.

### Lỗi người Việt hay mắc
- ~~If I will have time~~ → *If I have time.* ~~If I would be you~~ → *If I were you.*
- ~~I wish I have~~ → *I wish I had.*
- Nhầm loại 1 và 2: *If it rains tomorrow, I'll stay home* (có thể) khác *If I won the lottery, I'd quit* (mơ).

### Luyện tập
- GIU units 38–41.
- Viết 10 câu rủi ro/kế hoạch dự phòng của dự án, 5 câu "nếu tôi là manager".

### Thực tế
Nêu rủi ro trong họp: *If we release on Friday, we won't have time to fix hotfixes before the weekend. I'd suggest Tuesday.*
`, quiz: [
  { t: 'fix', q: 'If I will have time, I will review your code.', a: ['If I have time, I will review your code.', "If I have time, I'll review your code."], why: 'Mệnh đề if không dùng will.' },
  { t: 'mc', q: 'If I ___ you, I would ask the client first.', o: ['am', 'were', 'would be'], a: 1, why: 'Loại 2: if + were.' },
  { t: 'fill', q: 'If we don\'t fix this bug, the build ___ (fail).', a: ['will fail'], why: 'Loại 1: will + V.' },
  { t: 'mc', q: 'I wish I ___ more RAM on this laptop.', o: ['have', 'had', 'would have'], a: 1, why: 'wish + quá khứ.' },
  { t: 'mc', q: 'If water reaches 100°C, it ___.', o: ['boils', 'will boil', 'would boil'], a: 0, why: 'Loại 0: sự thật.' },
  { t: 'fill', q: '___ we fix this today, the client will complain. (= if not)', a: ['unless'], why: 'unless = if not.' },
  { t: 'mc', q: 'If I ___ the lottery, I would travel the world.', o: ['win', 'won', 'will win'], a: 1, why: 'Loại 2: quá khứ.' }
]},

{ id: 'G12', type: 'grammar', title: 'Bị động, tường thuật cơ bản, từ nối', goal: 'Viết báo cáo/status trang trọng, kể lại lời người khác, nối ý đúng.', md: `
### Cốt lõi
- **Bị động**: *be + V3* theo đúng thì: *is fixed / was fixed / has been fixed / will be fixed / is being fixed.* Dùng khi người làm không quan trọng hoặc không biết: *The issue was reported on Monday and has been fixed.* Thêm *by* khi cần người làm.
- Nội động từ **không có bị động**: ~~was happened, was occurred, was arrived, was existed~~.
- **Tường thuật**: *said (that)* / *told + người (that)*: *He said he would send it. She told me the server was down.* Lùi thì một bậc khi động từ tường thuật ở quá khứ (*is → was, will → would, has done → had done, can → could*). Lệnh/yêu cầu: *asked me to check, told us not to deploy.* Câu hỏi: *He asked if/whether it was ready. She asked where the file was.*
- **Từ nối cơ bản** — mỗi từ đúng vị trí:
  - Nguyên nhân/kết quả: *because + mệnh đề; because of + danh từ; so; therefore (đầu câu, phẩy); as a result.*
  - Tương phản: *but; although / even though + mệnh đề; despite / in spite of + danh từ hoặc V-ing; however (đầu câu, phẩy).*
  - Thêm ý: *and; also; in addition; moreover; furthermore.*
  - Trình tự: *first, then, next, after that, finally.*

### Lỗi người Việt hay mắc
- ~~It was happened~~ → *It happened.* ~~The problem is occurred~~ → *The problem occurred.*
- ~~Although … but …~~ → chọn một.
- ~~Because of it rained~~ → *Because it rained / Because of the rain.*
- ~~He said me~~ → *He told me / He said to me.*
- ~~It works, however it is slow~~ → *It works. However, it is slow.*

### Luyện tập
- GIU units 42–45 (bị động), 47–50 (tường thuật), 113–115 (although/despite/however).
- Viết status report 150 từ cho một tính năng: đã làm gì, ai yêu cầu gì, kết quả, vấn đề còn lại.

### Thực tế
Email tóm tắt sau họp: *"It was agreed that… The client said they would… However, …"*
`, quiz: [
  { t: 'fix', q: 'The error was happened at 3pm.', a: ['The error happened at 3pm.'], why: 'happen là nội động từ, không có bị động.' },
  { t: 'fill', q: 'The bug ___ (fix) yesterday by the backend team. (bị động quá khứ)', a: ['was fixed'], why: 'was + V3.' },
  { t: 'fix', q: 'Although it was late, but we finished the work.', a: ['Although it was late, we finished the work.', 'It was late, but we finished the work.'], why: 'Không dùng although và but cùng lúc.' },
  { t: 'mc', q: 'He ___ me the server was down.', o: ['said', 'told', 'said to'], a: 1, why: 'told + người.' },
  { t: 'mc', q: 'The deadline was moved ___ the client\'s request.', o: ['because', 'because of', 'so'], a: 1, why: 'because of + danh từ.' },
  { t: 'fill', q: 'She said she ___ (will) send the report on Monday.', a: ['would'], why: 'Lùi thì will → would.' },
  { t: 'mc', q: 'Chọn câu đúng:', o: ['It works, however it is slow.', 'It works. However, it is slow.', 'It works however, it is slow.'], a: 1, why: 'However đầu câu, có phẩy.' },
  { t: 'fill', q: 'The new version ___ (release) next week. (bị động tương lai)', a: ['will be released'], why: 'will be + V3.' },
  { t: 'fix', q: 'Despite it was raining, we went out.', a: ['Although it was raining, we went out.', 'Despite the rain, we went out.'], why: 'despite + danh từ/V-ing; although + mệnh đề.' }
]},

/* ===================== PHÁT ÂM ===================== */
{ id: 'P1', type: 'pron', title: 'Nguyên âm đơn (12 âm) và schwa', goal: 'Phân biệt được các cặp /iː–ɪ/, /æ–e–ʌ/, /ɒ–ɔː/, /ʊ–uː/ và phát được schwa /ə/.', md: `
### 12 nguyên âm đơn
/iː/ s**ee** · /ɪ/ s**i**t · /e/ b**e**d · /æ/ c**a**t · /ʌ/ c**u**p · /ɑː/ c**a**r · /ɒ/ h**o**t · /ɔː/ f**ou**r · /ʊ/ p**u**t · /uː/ f**oo**d · /ɜː/ b**ir**d · /ə/ **a**bout

### Cặp khó nhất với người Việt
- /iː/ – /ɪ/: *sheep–ship, leave–live, feel–fill, seat–sit, beat–bit.* /ɪ/ ngắn, miệng thả lỏng hơn; không phải "i" tiếng Việt kéo dài.
- /æ/ – /e/ – /ʌ/: *bad–bed–bud, cat–cut, man–men, bag–beg–bug.* /æ/ há miệng rộng như "a" nhưng lưỡi phía trước.
- /ɒ/ – /ɔː/: *not–nought, cot–caught, shot–short.*
- /ʊ/ – /uː/: *full–fool, pull–pool, look–Luke.*

### Schwa /ə/
Âm **phổ biến nhất** tiếng Anh, có ở mọi âm tiết không trọng âm: *a-BOUT, com-PU-ter, de-VEL-op-er, SUP-port → sə-PORT.* Nói được schwa là bước đầu nói tự nhiên: các âm tiết không nhấn phải **ngắn và mờ**, không đọc rõ từng chữ như tiếng Việt.

### Cách luyện (60 phút/tuần)
1. Xem video từng âm trên BBC Learning English "The Sounds of English" (hoặc kênh tương đương), nhìn khẩu hình.
2. Đọc 10 cặp tối thiểu/ngày, **ghi âm**, nghe lại. Nghe thấy khác nhau là đã tiến bộ.
3. Tra IPA 10 từ flashcard hôm đó trong từ điển Cambridge/Oxford online, bấm nghe, nhại.
4. Shadowing 10 phút bằng audio bài nghe tuần này.

### Từ công việc tuần này
*team /iː/, ticket /ɪ/, test /e/, task /ɑː/ (Anh) hoặc /æ/ (Mỹ), bug /ʌ/, log /ɒ/, support /ə-ɔː/, push /ʊ/, tool /uː/, work /ɜː/.*
`, quiz: [
  { t: 'mc', q: 'Từ nào có âm /ɪ/ (ngắn)?', o: ['sheep', 'ship', 'seat'], a: 1, why: 'ship /ʃɪp/.' },
  { t: 'mc', q: 'Âm tiết nào của "computer" chứa schwa /ə/?', o: ['com', 'pu', 'cả com và ter'], a: 2, why: '/kəmˈpjuːtə/: hai âm tiết không nhấn đều là schwa.' },
  { t: 'mc', q: 'Từ nào có /æ/?', o: ['cut', 'cat', 'cart'], a: 1, why: 'cat /kæt/; cut /kʌt/; cart /kɑːt/.' },
  { t: 'mc', q: '"full" và "fool" khác nhau ở:', o: ['/ʊ/ ngắn và /uː/ dài', 'âm cuối', 'trọng âm'], a: 0, why: 'full /fʊl/, fool /fuːl/.' },
  { t: 'mc', q: 'Từ nào có /ɜː/?', o: ['work', 'walk', 'wake'], a: 0, why: 'work /wɜːk/; walk /wɔːk/; wake /weɪk/.' }
]},

{ id: 'P2', type: 'pron', title: 'Nguyên âm đôi (8 âm)', goal: 'Không "cắt cụt" nguyên âm đôi: go không thành gô, name không thành nêm.', md: `
### 8 nguyên âm đôi
/eɪ/ d**ay** · /aɪ/ m**y** · /ɔɪ/ b**oy** · /əʊ/ g**o** · /aʊ/ n**ow** · /ɪə/ h**ere** · /eə/ th**ere** · /ʊə/ t**our**

### Lỗi người Việt
Hay cắt nguyên âm đôi thành đơn: *go* → "gô", *name* → "nêm", *phone* → "phôn", *late* → "lết". Phải **trượt** từ âm đầu sang âm sau: /ɡəʊ/ bắt đầu bằng schwa rồi trượt sang /ʊ/. Nguyên âm đôi dài gần bằng nguyên âm dài.

### Cặp tối thiểu
*pen–pain, men–main, sell–sale, let–late; not–note, cot–coat, hop–hope; bet–bite, hat–height; boy–buy; here–hair.*

### Từ công việc
*data /ˈdeɪtə/, update /ʌpˈdeɪt/, migrate /ˈmaɪɡreɪt/, deploy /dɪˈplɔɪ/, phone, code /kəʊd/, mode, load, scope, host /həʊst/, hour /aʊə/, browser /ˈbraʊzə/, share /ʃeə/, clear /klɪə/.*

### Luyện
Mỗi ngày 10 cặp tối thiểu, ghi âm, so với từ điển. Shadowing nhấn vào các từ có nguyên âm đôi.
`, quiz: [
  { t: 'mc', q: '"code" có nguyên âm nào?', o: ['/ɒ/', '/əʊ/', '/ɔː/'], a: 1, why: 'code /kəʊd/ — trượt từ schwa sang /ʊ/.' },
  { t: 'mc', q: 'Cặp nào là cặp tối thiểu /e/–/eɪ/?', o: ['pen–pain', 'pen–pin', 'pain–pine'], a: 0, why: 'pen /pen/, pain /peɪn/.' },
  { t: 'mc', q: '"data" đọc là:', o: ['/ˈdɑːtə/', '/ˈdeɪtə/', '/ˈdætə/'], a: 1, why: 'Anh-Anh và Mỹ phổ biến /ˈdeɪtə/.' },
  { t: 'mc', q: '"hour" có nguyên âm nào?', o: ['/aʊə/', '/ɔː/', '/əʊ/'], a: 0, why: 'hour /aʊə/ (triphthong).' },
  { t: 'mc', q: 'Lỗi phổ biến của người Việt với "phone" là:', o: ['đọc thành "phôn", mất phần trượt', 'thiếu /f/', 'sai trọng âm'], a: 0, why: 'Phải trượt /əʊ/.' }
]},

{ id: 'P3', type: 'pron', title: 'Phụ âm khó: /θ/ /ð/ /ʃ/ /ʒ/ /tʃ/ /dʒ/', goal: 'Phát được 6 phụ âm không có trong tiếng Việt.', md: `
### Cách phát
- /θ/ (**th**ink, **th**ree, mon**th**, me**th**od): đầu lưỡi đặt giữa hai hàm răng, thổi hơi. Không phải "t" hay "s".
- /ð/ (**th**is, **th**ey, o**th**er, wi**th**): giống /θ/ nhưng rung thanh quản.
- /ʃ/ (**sh**e, ma**ch**ine, **s**ure, na**ti**on): tròn môi, hơi đẩy ra, không rung.
- /ʒ/ (mea**s**ure, u**s**ually, vi**s**ion, deci**s**ion): giống /ʃ/ nhưng rung.
- /tʃ/ (**ch**eck, wa**tch**, pi**ct**ure, que**st**ion): "t" + /ʃ/ bật hơi.
- /dʒ/ (**j**ob, **g**eneral, mana**g**e, **J**apan, e**d**ucation): "d" + /ʒ/.

### Người Việt hay nhầm
/tʃ/ nói thành "ch" tiếng Việt (không bật hơi), /dʒ/ nói thành "d/gi", /ʃ/ nói thành "s", /θ/ nói thành "th" tiếng Việt (là /tʰ/, sai hoàn toàn).

### Cặp tối thiểu
*think–sink, three–tree, thin–tin, path–pass; she–see, ship–sip, shock–sock; cheap–sheep, chip–ship, watch–wash, catch–cash; jam–yam, jet–yet, joke–yolk.*

### Từ công việc
*method, thread, third, through, authentication, the, this, that, with, other; cheap, check, change, feature, question, chart; job, project, change, manage, schedule, Japan, Japanese, version /ˈvɜːʒn/, usually, measure.*
`, quiz: [
  { t: 'mc', q: '"think" bắt đầu bằng âm:', o: ['/t/', '/θ/', '/s/'], a: 1, why: 'Đầu lưỡi giữa hai răng, không rung.' },
  { t: 'mc', q: 'Từ nào có /ʒ/?', o: ['version', 'ship', 'cheap'], a: 0, why: 'version /ˈvɜːʒn/.' },
  { t: 'mc', q: '"question" có âm nào ở giữa?', o: ['/ʃ/', '/tʃ/', '/s/'], a: 1, why: '/ˈkwestʃən/.' },
  { t: 'mc', q: 'Cặp nào phân biệt /tʃ/ và /ʃ/?', o: ['watch–wash', 'watch–what', 'wash–was'], a: 0, why: 'watch /wɒtʃ/, wash /wɒʃ/.' },
  { t: 'mc', q: '"this" và "think" khác nhau ở:', o: ['/ð/ rung và /θ/ không rung', 'nguyên âm', 'cả hai giống nhau'], a: 0, why: 'this /ðɪs/, think /θɪŋk/.' }
]},

{ id: 'P4', type: 'pron', title: 'Âm cuối (ending sounds) — lỗi số 1', goal: 'Mọi âm cuối /s z t d k p f v l n m/ đều nghe được.', md: `
### Vì sao quan trọng
Tiếng Việt có âm cuối nhưng **không bật hơi** ("cắt" → "cắ"). Tiếng Anh âm cuối phải **nghe được**, và âm cuối quyết định nghĩa: *like–life–light–lie, back–bag–bat–bad, cap–cab–cat–cad, his–hit–hid–him.* Mất âm cuối là lý do người bản xứ phải hỏi lại dù bạn "nói đúng từ".

### Bộ luyện cơ bản
*bus, buzz, but, bud, buck, bulb, buff, bun, bum, bull* — ghi âm, nghe lại, phải thấy 10 từ khác nhau.

### Ba âm cuối khó nhất
- **/l/ cuối** (*file, tool, mail, all, call, full, control, email, model*): người Việt hay thành "u" hoặc mất. Đầu lưỡi chạm nướu răng trên, giữ 1 nhịp.
- **/v/ cuối** (*have, give, live, five, remove, save, drive, serve*): hay thành /p/ hoặc mất. Môi dưới chạm răng trên, rung.
- **/z/ cuối** (*is, has, was, does, because, files, bugs*): hay thành /s/ hoặc mất; cần rung.

### Cách luyện
Hai tuần đầu **nhấn âm cuối hơi quá** một chút (như thêm nửa âm "ơ" rất nhẹ sau /t d k/… nhưng không thành âm tiết), sau đó giảm về tự nhiên. Đọc 20 từ/ngày có âm cuối, ghi âm.

### Từ công việc
*test, task, fixed, build, code, work, help, push, merge, file, tool, serve, save, size, close, change.*
`, quiz: [
  { t: 'mc', q: 'Cặp nào chỉ khác nhau ở âm cuối?', o: ['back–bag', 'back–book', 'bag–big'], a: 0, why: 'back /bæk/, bag /bæɡ/.' },
  { t: 'mc', q: 'Âm cuối của "have" là:', o: ['/f/', '/v/', 'không có'], a: 1, why: '/hæv/ — môi răng, rung.' },
  { t: 'mc', q: 'Người Việt hay đọc "file" thành:', o: ['"phai-u" (mất /l/)', '"phi-le"', 'đúng'], a: 0, why: '/l/ cuối phải chạm nướu.' },
  { t: 'mc', q: 'Âm cuối của "because" là:', o: ['/s/', '/z/', '/θ/'], a: 1, why: '/bɪˈkɒz/.' },
  { t: 'mc', q: 'Cách luyện âm cuối hiệu quả trong 2 tuần đầu:', o: ['bỏ hẳn âm cuối cho tự nhiên', 'nhấn hơi quá rồi giảm dần', 'thêm "ơ" thành âm tiết riêng'], a: 1, why: 'Nhấn quá → ghi âm → giảm về tự nhiên.' }
]},

{ id: 'P5', type: 'pron', title: 'Đuôi -s/-es và -ed: 3 cách đọc', goal: 'Đọc đúng mọi dạng số nhiều, ngôi 3 và quá khứ; không thêm âm tiết thừa.', md: `
### Đuôi -s / -es (theo âm **trước** nó)
- /ɪz/ sau /s z ʃ ʒ tʃ dʒ/ — **thêm 1 âm tiết**: *buses, fixes, watches, changes, pages, releases.*
- /s/ sau âm vô thanh /p t k f θ/: *stops, tests, books, laughs, months.*
- /z/ sau âm hữu thanh và nguyên âm: *bugs, runs, codes, goes, files, does /dʌz/.*

### Đuôi -ed
- /ɪd/ sau /t/ hoặc /d/ — **thêm 1 âm tiết**: *wanted, needed, tested, started, added, loaded.*
- /t/ sau âm vô thanh: *worked, fixed, stopped, watched, helped, pushed.*
- /d/ sau âm hữu thanh và nguyên âm: *played, changed, used, called, opened, merged.*

### Sai kinh điển
Đọc *fixed* thành "phích-xơ-đờ" (3 âm tiết). Đúng: /fɪkst/ **1 âm tiết**. *Worked* = /wɜːkt/. *Watched* = /wɒtʃt/. Chỉ *-ted/-ded* mới thêm âm tiết.

### Luyện
Viết 30 động từ bạn hay dùng, phân vào 3 cột -ed và 3 cột -s, đọc to, ghi âm.
`, quiz: [
  { t: 'mc', q: '"fixed" có mấy âm tiết?', o: ['1', '2', '3'], a: 0, why: '/fɪkst/.' },
  { t: 'mc', q: '"tested" đọc đuôi là:', o: ['/t/', '/d/', '/ɪd/'], a: 2, why: 'Sau /t/ → /ɪd/, thêm âm tiết.' },
  { t: 'mc', q: '"changes" đọc đuôi là:', o: ['/s/', '/z/', '/ɪz/'], a: 2, why: 'Sau /dʒ/ → /ɪz/.' },
  { t: 'mc', q: '"stops" đọc đuôi là:', o: ['/s/', '/z/', '/ɪz/'], a: 0, why: 'Sau /p/ vô thanh → /s/.' },
  { t: 'mc', q: '"played" đọc đuôi là:', o: ['/t/', '/d/', '/ɪd/'], a: 1, why: 'Sau nguyên âm → /d/.' },
  { t: 'mc', q: '"does" đọc là:', o: ['/dəʊz/', '/dʌz/', '/dɒs/'], a: 1, why: 'does /dʌz/.' }
]},

{ id: 'P6', type: 'pron', title: 'Trọng âm từ (word stress)', goal: 'Mỗi từ 2+ âm tiết có đúng một âm tiết nhấn; biết quy tắc đủ dùng.', md: `
### Vì sao
Sai trọng âm là lý do người bản xứ "không hiểu dù phát âm từng âm đúng". Âm tiết nhấn: **to, dài, cao** hơn; các âm còn lại giảm về schwa.

### Quy tắc đủ dùng
- Danh từ/tính từ 2 âm tiết: thường nhấn âm **1** (*TAble, PROject, DAta, SERver, MOdern*). Động từ 2 âm tiết: thường nhấn âm **2** (*deCIDE, reLEASE, upDATE, proVIDE, beGIN*). Cặp danh–động: *REcord/reCORD, PREsent/preSENT, INcrease/inCREASE, IMport/imPORT.*
- Hậu tố quyết định: *-tion/-sion* nhấn **ngay trước**: *inforMAtion, deCIsion, appliCAtion, conFIguration*. *-ic*: *eleCTROnic, speCIfic, ecoNOmic*. *-ity*: *seCUrity, availaBIlity, prioRIty*. *-ical*: *TEchnical, PRACtical*. *-ate* (3+ âm tiết): nhấn cách 2: *MIgrate, VAlidate, INtegrate, COMmunicate → comMUnicate.* *-ee/-eer/-ese*: nhấn hậu tố: *emploYEE, engiNEER, JapaNESE, VietnaMESE.*
- Từ ghép danh từ: nhấn phần **đầu**: *SOFTware, DAtabase, KEYboard, WEBsite, LAPtop.*

### Từ công việc hay sai trọng âm
*deVELoper, MANagement, COMment, DOcument (n) / docuMENT (v), aNALysis, paRAmeter, enVIronment, CATegory, eVENT, perCENT, hoTEL, caREER, COMpany, INterest, sucCESSful, colLEAGUE (Anh: COLleague), deFAULT, inTERface → INterface, proCESS (v) / PROcess (n), reQUEST, PURchase, exPLAIN, maCHINE.*

### Luyện
Tra IPA mọi từ mới, đánh dấu trọng âm (dấu ˈ trước âm tiết nhấn). 10 từ/ngày đọc to, **gõ bàn** theo nhịp (gõ mạnh ở âm nhấn).
`, quiz: [
  { t: 'mc', q: 'Trọng âm của "information":', o: ['in-FOR-ma-tion', 'in-for-MA-tion', 'IN-for-ma-tion'], a: 1, why: '-tion nhấn ngay trước.' },
  { t: 'mc', q: 'Trọng âm của "developer":', o: ['DE-ve-lo-per', 'de-VE-lo-per', 'de-ve-LO-per'], a: 1, why: '/dɪˈveləpə/.' },
  { t: 'mc', q: '"record" (danh từ) nhấn:', o: ['âm 1 (REcord)', 'âm 2 (reCORD)'], a: 0, why: 'Danh từ nhấn 1, động từ nhấn 2.' },
  { t: 'mc', q: 'Trọng âm của "security":', o: ['SE-cu-ri-ty', 'se-CU-ri-ty', 'se-cu-RI-ty'], a: 1, why: '-ity nhấn ngay trước.' },
  { t: 'mc', q: 'Trọng âm của "Japanese":', o: ['JA-pa-nese', 'ja-PA-nese', 'ja-pa-NESE'], a: 2, why: '-ese nhấn hậu tố.' },
  { t: 'mc', q: 'Trọng âm của "database":', o: ['DA-ta-base', 'da-TA-base', 'da-ta-BASE'], a: 0, why: 'Từ ghép danh từ nhấn phần đầu.' }
]},

{ id: 'P7', type: 'pron', title: 'Nối âm (linking)', goal: 'Nghe ra và nói được chuỗi từ nối liền; hết "biết từ mà nghe không ra".', md: `
### 4 kiểu nối
- **Phụ âm → nguyên âm**: *an_apple* → "a-napple", *check_it_out* → "che-ki-tout", *pick_it_up, turn_off, log_in, look_at_it, an_hour_ago.*
- **Nguyên âm → nguyên âm** thêm âm lướt: /j/ sau /iː eɪ aɪ ɔɪ/: *I_(j)am, the_(j)end, say_(j)it, three_(j)apples*; /w/ sau /uː əʊ aʊ/: *go_(w)on, do_(w)it, how_(w)are you, two_(w)hours.*
- **Phụ âm giống nhau** nhập một: *black_coffee, big_game, this_server, what_time, next_task* (chỉ nghe một âm dài hơn).
- **/r/ nối** (Anh-Anh): *far_away* → "fa-raway", *here_is, more_or_less, for_example, there_are.*

### Vì sao người Việt nghe không ra
Tiếng Việt tách từng tiếng. Khi nghe "che-ki-tout" bạn tìm từ "kitout" và không thấy. Phải học **nhận dạng cụm**, không phải từng từ.

### Luyện
Chọn 5 câu trong bài nghe tuần, gạch chỗ nối, đọc chậm rồi nhanh dần. Chép chính tả câu (trang Nghe · chính tả, mục "Cả câu") rồi so transcript: chỗ sai phần lớn là chỗ nối âm.
`, quiz: [
  { t: 'mc', q: '"check it out" nói nhanh nghe gần như:', o: ['check / it / out tách rời', '"che-ki-tout"', '"check-kit-out"'], a: 1, why: 'Phụ âm cuối nối sang nguyên âm sau.' },
  { t: 'mc', q: '"go on" có âm lướt nào ở giữa?', o: ['/j/', '/w/', 'không có'], a: 1, why: 'Sau /əʊ/ → /w/: go-won.' },
  { t: 'mc', q: '"I am" có âm lướt nào?', o: ['/j/', '/w/', '/r/'], a: 0, why: 'Sau /aɪ/ → /j/: I-yam.' },
  { t: 'mc', q: '"far away" trong giọng Anh-Anh:', o: ['/r/ cuối "far" được đọc và nối', '/r/ im hoàn toàn', 'thêm /w/'], a: 0, why: 'r-linking: fa-raway.' },
  { t: 'mc', q: '"what time" nghe thấy mấy âm /t/?', o: ['2 rõ ràng', '1 âm /t/ dài', '0'], a: 1, why: 'Phụ âm giống nhau nhập một.' }
]},

{ id: 'P8', type: 'pron', title: 'Trọng âm câu và nhịp điệu', goal: 'Nói theo nhịp stress-timed; hết giọng "đều đều, máy móc".', md: `
### Hai hệ nhịp
Tiếng Anh là **stress-timed**: thời gian giữa các từ nhấn gần bằng nhau, từ không nhấn bị nén. Tiếng Việt là **syllable-timed**: mỗi âm tiết dài bằng nhau. Nói tiếng Anh với nhịp tiếng Việt → người nghe mệt, và bạn nghe người bản xứ không ra vì họ nén từ chức năng.

### Từ nào nhấn
- **Từ nội dung** (nhấn): danh từ, động từ chính, tính từ, trạng từ, từ phủ định (*not, never*), wh-words.
- **Từ chức năng** (không nhấn): *a, the, to, of, and, is, are, can, will, have (trợ), he, she, it, them, at, for.*
- *I WANT to GO to the OFfice on MONday* — 5 nhịp, các từ khác lướt qua.

### Nhấn khác → nghĩa khác
*I didn't say HE stole it* (ai đó khác) / *I didn't say he STOLE it* (có thể anh ta mượn) / *I DIDN'T say he stole it* (phủ nhận). Trong Speaking, nhấn vào từ then chốt giúp giám khảo theo kịp ý.

### Luyện
Gạch từ nhấn trong 5 câu bài nghe, gõ bàn theo nhịp, đọc. Shadowing tuần này tập trung vào **nhịp**, không vào từng âm.
`, quiz: [
  { t: 'mc', q: 'Trong "I want to go to the office", từ nào KHÔNG nhấn?', o: ['want', 'office', 'to'], a: 2, why: 'to là từ chức năng.' },
  { t: 'mc', q: 'Tiếng Anh là ngôn ngữ:', o: ['syllable-timed', 'stress-timed', 'tone-timed'], a: 1, why: 'Khoảng cách giữa các âm nhấn đều nhau.' },
  { t: 'mc', q: 'Từ loại nào thường được nhấn trong câu?', o: ['mạo từ', 'giới từ', 'động từ chính'], a: 2, why: 'Từ nội dung được nhấn.' },
  { t: 'mc', q: '"I DIDN\'T say he stole it" nhấn vào didn\'t nghĩa là:', o: ['nhấn mạnh phủ nhận', 'ai khác nói', 'anh ta làm việc khác'], a: 0, why: 'Nhấn từ phủ định = phủ nhận.' }
]},

{ id: 'P9', type: 'pron', title: 'Dạng yếu (weak forms)', goal: 'Nhận ra 25 từ chức năng ở dạng yếu; phân biệt can/can\'t bằng nhịp.', md: `
### Mạnh và yếu
Từ chức năng có 2 cách đọc: **mạnh** (đứng một mình, nhấn) và **yếu** (bình thường, dùng schwa). Nghe không ra chủ yếu vì chỉ biết dạng mạnh.

- *can* /kən/: *I can do it* → "I k'n do it". *can't* /kɑːnt/ luôn mạnh → phân biệt can/can't bằng **nguyên âm và nhịp**, không phải âm /t/.
- *to* /tə/, *for* /fə/, *of* /əv/, *and* /ən, n/ (*fish 'n chips*), *a* /ə/, *the* /ðə/, *at* /ət/, *from* /frəm/, *as* /əz/, *than* /ðən/, *that* (liên từ) /ðət/, *was* /wəz/, *were* /wə/, *have* /əv/ (*should've*), *has* /əz/, *do* /də/, *you* /jə/, *your* /jə/, *him* /ɪm/, *her* /ə/, *them* /ðəm, əm/, *some* /səm/, *but* /bət/, *us* /əs/.
- *What do you want to do?* → "Wha-də-yə-wanna-do".
- *going to → gonna, want to → wanna, have to → hafta, got to → gotta* (nghe được là đủ; trong IELTS Speaking nên nói đầy đủ nhưng nhanh).

### Luyện
Chép chính tả 5 câu/ngày từ bài nghe (mục "Cả câu"), so transcript, khoanh từ chức năng bị nghe sót. Sau 2 tuần, lỗi sót từ chức năng giảm rõ.
`, quiz: [
  { t: 'mc', q: 'Phân biệt "I can do it" và "I can\'t do it" chủ yếu bằng:', o: ['âm /t/ cuối', 'nguyên âm (/ə/ vs /ɑː/) và nhịp', 'tốc độ'], a: 1, why: 'can yếu /kən/, can\'t mạnh /kɑːnt/.' },
  { t: 'mc', q: '"fish and chips" nói nhanh, "and" thành:', o: ['/ænd/', '/ən/ hoặc /n/', '/ɑːnd/'], a: 1, why: 'Dạng yếu.' },
  { t: 'mc', q: '"should\'ve" nghe gần như:', o: ['should-of', 'should-have (rõ)', 'should'], a: 0, why: 'have yếu /əv/.' },
  { t: 'mc', q: 'Trong "a cup of tea", "of" đọc là:', o: ['/ɒv/', '/əv/ hoặc /ə/', '/ɔːf/'], a: 1, why: 'cup-ə-tea.' },
  { t: 'mc', q: 'Trong IELTS Speaking nên:', o: ['nói "gonna/wanna" cho tự nhiên', 'nói đầy đủ going to / want to nhưng nhanh và yếu', 'nói chậm từng từ rõ'], a: 1, why: 'Đầy đủ nhưng dùng dạng yếu.' }
]},

{ id: 'P10', type: 'pron', title: 'Ngữ điệu (intonation)', goal: 'Lên/xuống giọng đúng chỗ; hết giọng một tông.', md: `
### Quy tắc
- **Xuống** (↘): câu kể, wh-question, câu lệnh, ý cuối cùng: *Where do you ↘work?*
- **Lên** (↗): yes/no question, chưa nói xong, liệt kê giữa chừng, kiểm tra lại: *Is it ↗ready?*
- **Liệt kê**: *We need ↗tests, ↗docs, and a ↘release note.*
- **Lên–xuống** (↗↘): lịch sự, ngạc nhiên, lưỡng lự: *↗Well, it ↘depends.*
- **Question tag**: xuống = khẳng định, chờ đồng ý (*It's ready, ↘isn't it?*); lên = thật sự hỏi (*It's ready, ↗isn't it?*).

### Lỗi thường gặp
Nói đều một tông = "robot". Lên giọng cuối mọi câu (uptalk) = thiếu tự tin. Trong Speaking Part 2, xuống giọng rõ ở cuối mỗi ý giúp giám khảo thấy bạn "có cấu trúc".

### Luyện
Đọc một đoạn hội thoại (bài nghe Part 1), vẽ mũi tên lên/xuống, nhại. Ghi âm Part 1 của bạn và nghe xem có lên/xuống không.
`, quiz: [
  { t: 'mc', q: '"Is it ready?" ngữ điệu cuối câu:', o: ['xuống', 'lên', 'ngang'], a: 1, why: 'Yes/no question lên giọng.' },
  { t: 'mc', q: '"Where do you work?" ngữ điệu cuối câu:', o: ['xuống', 'lên', 'ngang'], a: 0, why: 'Wh-question xuống.' },
  { t: 'mc', q: 'Trong liệt kê "tests, docs, and a release note", mục cuối:', o: ['lên', 'xuống', 'ngang'], a: 1, why: 'Mục cuối xuống báo hiệu kết thúc.' },
  { t: 'mc', q: 'Question tag xuống giọng nghĩa là:', o: ['thật sự hỏi', 'khẳng định, chờ đồng ý', 'ngạc nhiên'], a: 1, why: 'Xuống = chắc chắn.' }
]},

{ id: 'P11', type: 'pron', title: 'Cụm phụ âm (consonant clusters)', goal: 'Nói str-, -sts, -ths… không chèn "ơ", không bỏ âm.', md: `
### Vấn đề
Tiếng Việt không có 2–3 phụ âm liền nhau → người Việt hay chèn nguyên âm ("xì-trinh") hoặc bỏ bớt ("tes" thay vì "tests").

### Đầu từ
*str-* (*string, structure, stress, strategy*), *spr-* (*spring, spread*), *scr-* (*script, screen, scroll*), *spl-* (*split*), *thr-* (*three, thread, through*), *pl-/pr-/cl-/cr-/fl-/fr-/gl-/gr-* (*plan, problem, class, create, flow, from, global, group*).

### Cuối từ
*-sts* (*tests, costs, lists, requests*), *-sks* (*tasks, risks, asks*), *-ths* (*months, paths*), *-nts* (*clients, events, comments*), *-cts* (*projects, products, objects*), *-ld/-lt* (*build, built, world, field, result*), *-nd/-nt* (*find, send, want, front, account*), *-ps/-pt* (*stops, kept, script*), *-ngth* (*length, strength*).

### Kỹ thuật
Tách ngược từ cuối: *tests* → "sts" → "ests" → "tests". *Script*: "pt" → "ipt" → "ript" → "script". Không chèn "ơ" giữa các phụ âm.

### Luyện
20 từ công việc có cụm phụ âm, ghi âm, so với từ điển. Nói câu: *The first three tests passed, but the fourth script crashed.*
`, quiz: [
  { t: 'mc', q: '"tests" có mấy âm tiết?', o: ['1', '2', '3'], a: 0, why: '/tests/ — cụm -sts ở cuối, không thêm âm tiết.' },
  { t: 'mc', q: 'Lỗi của người Việt với "string":', o: ['chèn nguyên âm thành "xì-trinh"', 'sai trọng âm', 'thiếu /ŋ/'], a: 0, why: 'Cụm str- không có nguyên âm chen giữa.' },
  { t: 'mc', q: 'Kỹ thuật luyện cụm phụ âm cuối:', o: ['bỏ bớt một phụ âm', 'tách ngược từ cuối lên', 'đọc chậm từng chữ cái'], a: 1, why: 'sts → ests → tests.' },
  { t: 'mc', q: '"months" cuối từ có cụm:', o: ['/nθs/', '/ns/', '/nts/'], a: 0, why: '/mʌnθs/.' }
]},

{ id: 'P12', type: 'pron', title: 'Shadowing nâng cao và tự đối chiếu', goal: 'Có quy trình shadowing 5 bước dùng suốt lộ trình; tự chấm 4 tiêu chí.', md: `
### Quy trình 5 bước (đoạn 60–90 giây có transcript: TED, BBC, audio Listening Cambridge Part 1–2)
1. Nghe 2 lần không nhìn.
2. Đọc transcript, tra từ.
3. Nghe và **đọc theo cùng lúc** 3 lần (chưa cần hiểu hết, bám nhịp).
4. Nghe từng câu, dừng, nhại, **ghi âm**.
5. Nghe lại bản ghi của mình **song song** với bản gốc, ghi 3 điểm khác.

### Tự chấm 4 câu hỏi
- Có **âm cuối** không?
- Đúng **trọng âm từ** không?
- Có **nối âm** không?
- Có **lên xuống giọng** không?

### Lịch
3 đoạn khác nhau mỗi tuần, 10 phút/ngày. Từ Giai đoạn 2 dùng audio Listening IELTS làm nguồn: vừa luyện phát âm vừa quen giọng đề. Shadowing là bài tập duy nhất sửa được phát âm và nhịp cùng lúc; đừng bỏ.

### Dấu hiệu tiến bộ
Sau 8–10 tuần: nghe Part 1–2 thấy "chậm", tự nói có nhịp, người khác không hỏi lại "sorry?". Nếu chưa, kiểm tra xem có đang bỏ bước 5 không — bước nghe lại chính mình là bước mọi người hay trốn.
`, quiz: [
  { t: 'mc', q: 'Bước quan trọng nhất và hay bị bỏ trong shadowing:', o: ['đọc transcript', 'nghe lại bản ghi của mình song song bản gốc', 'tra từ'], a: 1, why: 'Không nghe lại thì không biết mình sai gì.' },
  { t: 'mc', q: 'Độ dài đoạn shadowing phù hợp:', o: ['10 giây', '60–90 giây', '10 phút'], a: 1, why: 'Đủ dài để có nhịp, đủ ngắn để lặp nhiều lần.' },
  { t: 'mc', q: 'Từ Giai đoạn 2, nguồn shadowing nên là:', o: ['phim hành động', 'audio Listening Cambridge Part 1–2', 'nhạc'], a: 1, why: 'Vừa luyện phát âm vừa quen giọng đề.' }
]}
];
