/* ===== Speaking Lab: ý tưởng Part 3, kho cụm câu, drill phát âm, lỗi nói thường gặp, lịch luyện nói mỗi ngày ===== */

window.SPEAK_LAB_HOWTO = `
### Speaking Lab — cách dùng
- **Hôm nay**: lịch 20–25 phút sinh tự động mỗi ngày (khởi động phát âm → Part 1 → Part 2 → Part 3 → cụm câu → tự chấm). Làm xong tick từng bước; app đếm chuỗi ngày luyện nói riêng.
- **Thi thử Speaking**: giám khảo máy đọc câu hỏi đúng kịch bản 3 part, 11–14 phút, ghi âm liền, nhận dạng giọng nói ra transcript, phân tích tốc độ/từ đệm/lỗi, rồi bạn tự chấm 4 tiêu chí.
- **Nhận dạng giọng nói** dùng Web Speech API của Chrome/Edge: cần mạng, tiếng Anh giọng Việt được nhận khoảng 80–90% từ. Transcript sai một vài từ là bình thường — dùng nó để đếm **tốc độ, từ đệm, lặp từ, lỗi mẫu**; không dùng để chấm phát âm từng âm.
- Số liệu tham chiếu: người bản xứ nói 150–180 từ/phút; band 7 Speaking thường 120–150 từ/phút với ít dừng dài; band 5–6 thường 80–110. Từ đệm (um, uh, er) dưới 3/100 từ là ổn.
`;

/* ---------- Lỗi nói thường gặp của người Việt (regex trên transcript) ---------- */
window.SPEAK_ERRORS = [
  { re: /\bi am agree\b|\bi'm agree\b/i, fix: 'I agree', note: 'agree là động từ, không đi với be (G1)' },
  { re: /\bi (am|'m) (very )?(interesting|boring|exciting|tiring|confusing) (in|with|about)?\b/i, fix: 'I am interested / bored / excited / tired / confused', note: '-ed = cảm thấy, -ing = gây ra (V11)' },
  { re: /\bvery like\b|\bi very\b/i, fix: 'I really like / I like it very much', note: 'very không đứng trước động từ (G1)' },
  { re: /\bdiscuss about\b/i, fix: 'discuss something', note: 'discuss không có about (G8)' },
  { re: /\bdepend (of|in)\b/i, fix: 'depend on', note: 'depend on (G8)' },
  { re: /\bpeoples\b/i, fix: 'people', note: 'people đã là số nhiều' },
  { re: /\bevery people\b|\bevery peoples\b/i, fix: 'everyone / every person', note: 'every + số ít' },
  { re: /\bmore (better|easier|cheaper|bigger|faster|worse|higher|lower)\b/i, fix: 'better / easier (bỏ more)', note: 'không dùng more với -er (G9)' },
  { re: /\bin nowadays\b|\bin today\b/i, fix: 'nowadays / today', note: 'không có giới từ' },
  { re: /\bresearches\b/i, fix: 'research / studies', note: 'research không đếm được' },
  { re: /\badvices\b|\binformations\b|\bequipments\b|\bfurnitures\b|\bknowledges\b/i, fix: 'advice / information / equipment (không -s)', note: 'danh từ không đếm được (G1)' },
  { re: /\bmust to\b|\bcan to\b|\bshould to\b/i, fix: 'must / can / should + V', note: 'modal + nguyên mẫu không to (G6)' },
  { re: /\bdid(n't| not) (went|saw|took|made|had|got|came|knew|thought|said|gave)\b/i, fix: "didn't go / see / take…", note: 'sau did dùng nguyên mẫu (G3)' },
  { re: /\b(since|for) (i was|i am) (child|kid|young)\b/i, fix: 'since I was a child', note: 'thiếu mạo từ a' },
  { re: /\bi (have|has) (seen|met|visited|been|went|gone) [^.]{0,30}\b(yesterday|last (week|year|month)|ago)\b/i, fix: 'quá khứ đơn với yesterday / last / ago', note: 'hiện tại hoàn thành không đi với thời điểm đã kết thúc (G4)' },
  { re: /\bi live (here|in \w+) (for|since)\b/i, fix: 'I have lived here for…', note: 'việc kéo dài đến nay → hiện tại hoàn thành (G4)' },
  { re: /\balthough [^.]{3,60}, but\b/i, fix: 'bỏ although hoặc bỏ but', note: 'không dùng cả hai (G12)' },
  { re: /\bbecause of (it|they|we|i|he|she) (is|are|was|were|am|have|has|do|does)\b/i, fix: 'because + mệnh đề / because of + danh từ', note: 'G12' },
  { re: /\bthe (society|life|technology|nature|crime|education|pollution)\b(?! (of|in|that|which))/i, fix: 'society / life / technology (bỏ the khi khái quát)', note: 'mạo từ với danh từ trừu tượng (G17)' },
  { re: /\bgo to (the )?abroad\b|\bgo to home\b/i, fix: 'go abroad / go home', note: 'abroad, home là trạng từ' },
  { re: /\bi think (that )?it('s| is) (very )?good\b/i, fix: 'cụ thể hơn: beneficial / useful / enjoyable…', note: 'good quá chung — Lexical Resource' },
  { re: /\bmake (a )?(research|exercise|homework)\b/i, fix: 'do research / do exercise / do homework', note: 'collocation (G22)' },
  { re: /\bdo (a )?(mistake|decision|effort)\b/i, fix: 'make a mistake / decision / an effort', note: 'collocation (G22)' },
  { re: /\bsame (with|like)\b/i, fix: 'the same as', note: 'G9' },
  { re: /\bdifferent (with|than)\b/i, fix: 'different from', note: 'G9' },
  { re: /\bin the other hand\b|\bon the other side\b/i, fix: 'on the other hand', note: 'cụm cố định' },
  { re: /\baccording to me\b/i, fix: 'in my opinion / personally', note: 'according to + nguồn khác' },
  { re: /\bi am working (here|at \w+|in \w+) (since|for)\b/i, fix: "I've been working here since/for…", note: 'G4/G13' },
  { re: /\bhe (don't|have|do|go|work|like|want|live)\b|\bshe (don't|have|do|go|work|like|want|live)\b/i, fix: "he doesn't / has / does / goes / works…", note: 'ngôi thứ ba -s (G2)' },
  { re: /\bthere (is|was) (many|a lot of|lots of|several|some) \w+s\b/i, fix: 'there are / were', note: 'hòa hợp there is/are (G21)' },
  { re: /\bone of (the )?(most|biggest|main|best) \w+[^s ]\b(?= (is|was))/i, fix: 'one of the + số nhiều', note: 'G21' },
  { re: /\bthan me is\b|\bthan i\b/i, fix: 'than me / than I do', note: 'so sánh' },
  { re: /\bhow to (do|say|solve|fix|make) (this|that|it)\?/i, fix: 'How do I…? / How can we…?', note: 'câu hỏi cần trợ động từ (G7)' },
  { re: /\bexplain (me|you|him|her|them)\b/i, fix: 'explain to me', note: 'explain sth to sb' },
  { re: /\bborn in (19|20)\d\d\b(?<!was born in (19|20)\d\d)/i, fix: 'I was born in…', note: 'bị động: was born' }
];
window.FILLERS_HARD = ['um', 'uh', 'er', 'erm', 'hmm', 'mm', 'ah'];
window.FILLERS_SOFT = ['you know', 'i mean', 'like', 'basically', 'actually', 'literally', 'kind of', 'sort of', 'so yeah', 'yeah'];
window.SPEAK_LINKERS = ['because', 'so', 'but', 'although', 'however', 'for example', 'for instance', 'which', 'on the other hand', 'having said that', 'in my opinion', 'i think', 'i believe', 'personally', 'especially', 'whereas', 'while', 'compared to', 'compared with', 'in the past', 'nowadays', 'in the future', 'if', 'the main reason', 'another thing', 'what i mean is', 'to be honest', 'it depends'];

/* ---------- Kho cụm câu Speaking (có nghĩa, dùng cho TTS + flashcard) ---------- */
window.PHRASES = [
  { id: 'open', title: 'Mở đầu & câu giờ (3–5 giây)', items: [
    ['Well, let me think about that for a second.', 'Để tôi nghĩ một chút.'],
    ["That's an interesting question.", 'Câu hỏi hay đấy.'],
    ["I've never really thought about it, but I suppose…", 'Tôi chưa nghĩ về điều đó, nhưng tôi cho là…'],
    ['Off the top of my head, I\'d say…', 'Nghĩ nhanh thì tôi sẽ nói là…'],
    ["That's a tricky one, because…", 'Câu này khó, vì…'],
    ['There are a few ways to look at this.', 'Có vài cách nhìn vấn đề này.'],
    ['To be honest, …', 'Thành thật mà nói…'],
    ['Actually, …', 'Thật ra…']
  ]},
  { id: 'opinion', title: 'Nêu ý kiến & mức độ', items: [
    ['Personally, I think…', 'Cá nhân tôi nghĩ…'],
    ["I'd say that…", 'Tôi sẽ nói là…'],
    ['I firmly believe that…', 'Tôi tin chắc rằng…'],
    ["I'm not entirely convinced that…", 'Tôi không hoàn toàn tin rằng…'],
    ['To a large extent, yes.', 'Phần lớn là có.'],
    ['Not necessarily.', 'Không hẳn.'],
    ['It really depends on…', 'Còn tùy vào…'],
    ['Generally speaking, …', 'Nói chung…'],
    ['In most cases, …', 'Trong đa số trường hợp…'],
    ['I lean towards the view that…', 'Tôi nghiêng về quan điểm…']
  ]},
  { id: 'reason', title: 'Lý do & ví dụ', items: [
    ['The main reason is that…', 'Lý do chính là…'],
    ['This is largely because…', 'Phần lớn là vì…'],
    ['One thing to bear in mind is…', 'Một điều cần nhớ là…'],
    ['For instance, in Vietnam…', 'Chẳng hạn ở Việt Nam…'],
    ['A good example of this is…', 'Ví dụ rõ nhất là…'],
    ['Take my own company, for example.', 'Lấy công ty tôi làm ví dụ.'],
    ['In my experience, …', 'Theo kinh nghiệm của tôi…'],
    ['What I mean is…', 'Ý tôi là…'],
    ['In other words, …', 'Nói cách khác…']
  ]},
  { id: 'contrast', title: 'Phản đề & cân nhắc', items: [
    ['Having said that, …', 'Dù vậy…'],
    ['On the other hand, …', 'Mặt khác…'],
    ['Then again, …', 'Nhưng nghĩ lại thì…'],
    ['I can see both sides.', 'Tôi thấy được cả hai mặt.'],
    ["There's a trade-off between X and Y.", 'Có sự đánh đổi giữa X và Y.'],
    ["It's a double-edged sword.", 'Con dao hai lưỡi.'],
    ['The downside is that…', 'Mặt trái là…'],
    ['On balance, I\'d say…', 'Cân nhắc lại thì tôi cho là…'],
    ['That said, I still think…', 'Dù vậy tôi vẫn nghĩ…']
  ]},
  { id: 'compare', title: 'So sánh xưa – nay, dự đoán', items: [
    ['In the past, people used to…, whereas nowadays…', 'Ngày xưa người ta thường…, còn bây giờ…'],
    ["Compared with my parents' generation, …", 'So với thế hệ bố mẹ tôi…'],
    ['This has changed dramatically over the last decade.', 'Điều này đã thay đổi mạnh trong mười năm qua.'],
    ["If the current trend continues, I'd expect…", 'Nếu xu hướng này tiếp tục, tôi dự đoán…'],
    ["It's hard to say, but I imagine…", 'Khó nói, nhưng tôi hình dung…'],
    ["There's a good chance that…", 'Rất có thể…'],
    ['I doubt that will happen, because…', 'Tôi nghi ngờ điều đó xảy ra, vì…'],
    ['In twenty years, …', 'Hai mươi năm nữa…']
  ]},
  { id: 'story', title: 'Part 2: kể chuyện & bố cục', items: [
    ["I'd like to talk about…", 'Tôi muốn nói về…'],
    ['This happened a couple of years ago, when…', 'Chuyện này xảy ra vài năm trước, khi…'],
    ['At first, …, but then…', 'Lúc đầu…, nhưng rồi…'],
    ['What made it special was…', 'Điều làm nó đặc biệt là…'],
    ['I remember one time…', 'Tôi nhớ có lần…'],
    ['Looking back, I realise…', 'Nhìn lại, tôi nhận ra…'],
    ['The reason I chose this is…', 'Lý do tôi chọn cái này là…'],
    ["Another thing I'd add is…", 'Một điều nữa tôi muốn thêm là…'],
    ["So that's why… means so much to me.", 'Nên đó là lý do… có ý nghĩa với tôi.']
  ]},
  { id: 'clarify', title: 'Hỏi lại & tự sửa', items: [
    ['Sorry, could you repeat that, please?', 'Xin lỗi, anh/chị nhắc lại được không?'],
    ['Do you mean…?', 'Ý anh/chị là…?'],
    ['Could you rephrase the question?', 'Anh/chị nói lại câu hỏi theo cách khác được không?'],
    ['When you say X, do you mean…?', 'Khi nói X, ý là…?'],
    ['Sorry, what I meant to say was…', 'Xin lỗi, ý tôi muốn nói là…'],
    ['Let me put it another way.', 'Để tôi nói cách khác.']
  ]},
  { id: 'idiom', title: 'Idiom an toàn (dùng 1–2 lần/bài)', items: [
    ["It's not my cup of tea.", 'Không hợp gu tôi.'],
    ['Once in a blue moon.', 'Rất hiếm khi.'],
    ['I was over the moon.', 'Tôi vui sướng tột độ.'],
    ['At the end of the day, …', 'Suy cho cùng…'],
    ['It was a blessing in disguise.', 'Trong cái rủi có cái may.'],
    ["I'm a bit of a night owl.", 'Tôi là cú đêm.'],
    ['It cost an arm and a leg.', 'Đắt cắt cổ.'],
    ["We're on the same page.", 'Chúng tôi hiểu ý nhau.'],
    ['I had to think on my feet.', 'Tôi phải ứng biến nhanh.'],
    ['It took a while to sink in.', 'Mất một lúc tôi mới thấm.']
  ]}
];

/* Cụm câu thành bộ thẻ flashcard (hiện trong mục Từ vựng, kind 'phrase') */
(function(){ const PW=(w,vi,ex)=>({w,vi,ex,col:'',ipa:''});
  window.VOCAB.push(
    { id: 'SP1', kind: 'phrase', title: 'Cụm Speaking: mở đầu, ý kiến, lý do', goal: 'Nói ra được không nghĩ.', words: [
      PW('let me think about that for a second', 'để tôi nghĩ một chút', 'Well, [let me think about that for a second].'),
      PW("that's an interesting question", 'câu hỏi hay', "[That's an interesting question]. I suppose…"),
      PW('off the top of my head', 'nghĩ nhanh thì', "[Off the top of my head], I'd say three reasons."),
      PW("that's a tricky one", 'câu này khó', "[That's a tricky one], because it depends on the person."),
      PW('personally', 'cá nhân tôi', '[Personally], I prefer working in a team.'),
      PW('to a large extent', 'phần lớn', 'Yes, [to a large extent], I agree.'),
      PW('not necessarily', 'không hẳn', '[Not necessarily] — it depends on the job.'),
      PW('it really depends on', 'còn tùy vào', '[It really depends on] how much free time you have.'),
      PW('generally speaking', 'nói chung', '[Generally speaking], people in cities are busier.'),
      PW('the main reason is that', 'lý do chính là', '[The main reason is that] it saves time.'),
      PW('this is largely because', 'phần lớn là vì', '[This is largely because] housing is expensive.'),
      PW('for instance', 'chẳng hạn', 'Many people, [for instance] my parents, prefer markets.'),
      PW('in my experience', 'theo kinh nghiệm của tôi', '[In my experience], remote work needs good communication.'),
      PW('what I mean is', 'ý tôi là', "It's slow — [what I mean is], it takes ten seconds to load."),
      PW('in other words', 'nói cách khác', "It's stateless — [in other words], nothing is saved.")
    ]},
    { id: 'SP2', kind: 'phrase', title: 'Cụm Speaking: phản đề, so sánh, dự đoán', goal: 'Phát triển câu trả lời Part 3.', words: [
      PW('having said that', 'dù vậy', "[Having said that], I still think it's worth it."),
      PW('on the other hand', 'mặt khác', "It's cheap. [On the other hand], it's slow."),
      PW('then again', 'nhưng nghĩ lại thì', "[Then again], not everyone has that option."),
      PW('a trade-off between', 'sự đánh đổi giữa', "There's [a trade-off between] cost and quality."),
      PW('a double-edged sword', 'con dao hai lưỡi', 'Technology is [a double-edged sword].'),
      PW('the downside is that', 'mặt trái là', '[The downside is that] you feel isolated.'),
      PW('on balance', 'cân nhắc lại thì', "[On balance], I'd say the benefits outweigh the costs."),
      PW('whereas nowadays', 'còn bây giờ', 'People used to write letters, [whereas nowadays] they text.'),
      PW("compared with my parents' generation", 'so với thế hệ bố mẹ tôi', "[Compared with my parents' generation], we travel far more."),
      PW('if the current trend continues', 'nếu xu hướng này tiếp tục', "[If the current trend continues], most shopping will be online."),
      PW("there's a good chance that", 'rất có thể', "[There's a good chance that] cars will be electric by then."),
      PW('I doubt that', 'tôi nghi ngờ rằng', '[I doubt that] offices will disappear completely.'),
      PW('it comes down to', 'quy về là', 'In the end, [it comes down to] money.'),
      PW('the root of the problem is', 'gốc rễ vấn đề là', '[The root of the problem is] a lack of planning.'),
      PW('a matter of priorities', 'vấn đề ưu tiên', "It's [a matter of priorities] for the government.")
    ]},
    { id: 'SP3', kind: 'phrase', title: 'Cụm Speaking: kể chuyện Part 2 & idiom an toàn', goal: 'Nói liền 2 phút có cấu trúc, có màu sắc.', words: [
      PW("I'd like to talk about", 'tôi muốn nói về', "[I'd like to talk about] my first team leader."),
      PW('a couple of years ago', 'vài năm trước', 'This happened [a couple of years ago].'),
      PW('at first', 'lúc đầu', '[At first], I thought it was a network problem.'),
      PW('what made it special was', 'điều làm nó đặc biệt là', '[What made it special was] the people I met.'),
      PW('I remember one time', 'tôi nhớ có lần', '[I remember one time] we worked until midnight.'),
      PW('looking back', 'nhìn lại', '[Looking back], I was very lucky.'),
      PW("so that's why", 'nên đó là lý do', "[So that's why] this place means so much to me."),
      PW('over the moon', 'vui sướng tột độ', 'I was [over the moon] when the tests passed.'),
      PW('once in a blue moon', 'rất hiếm khi', 'I eat fast food [once in a blue moon].'),
      PW('not my cup of tea', 'không hợp gu tôi', 'Horror films are [not my cup of tea].'),
      PW('a blessing in disguise', 'trong cái rủi có cái may', 'Losing that job was [a blessing in disguise].'),
      PW('at the end of the day', 'suy cho cùng', '[At the end of the day], the client decides.'),
      PW('think on my feet', 'ứng biến nhanh', 'In the demo I had to [think on my feet].'),
      PW('took a while to sink in', 'mất một lúc mới thấm', 'The good news [took a while to sink in].'),
      PW('on the same page', 'hiểu ý nhau', 'After the meeting we were all [on the same page].')
    ]}
  );
})();

/* ---------- Ý tưởng Part 3 theo 12 chủ đề ---------- */
const Q3 = (q, ideas, kw) => ({ q, ideas, kw });
window.P3_IDEAS = [
  { topic: 'Education', qs: [
    Q3('Should university education be free for everyone?', ['Ủng hộ: công bằng cơ hội, xã hội hưởng lợi (bác sĩ, kỹ sư); Đức, Bắc Âu làm được.', 'Phản đối: ngân sách có hạn, người không học phải đóng thuế trả; sinh viên ít trân trọng.', 'Trung dung: miễn phí theo thu nhập, vay trả theo lương sau này.'], ['tuition fees', 'equal opportunity', 'taxpayers', 'means-tested support']),
    Q3('Is it better to learn from a teacher or online?', ['Giáo viên: phản hồi tức thì, động lực, kỹ năng thực hành.', 'Online: linh hoạt, rẻ, học lại được; hợp người đi làm.', 'Kết hợp: lý thuyết online, thực hành với người.'], ['face-to-face', 'self-discipline', 'flexibility', 'blended learning']),
    Q3('What skills should schools teach that they currently do not?', ['Quản lý tiền, kỹ năng số, tư duy phản biện, sức khỏe tinh thần.', 'Ví dụ: nhiều bạn tôi tốt nghiệp đại học mà không biết đọc hợp đồng lao động.', 'Lý do chưa dạy: chương trình nặng thi cử, giáo viên chưa được đào tạo.'], ['financial literacy', 'critical thinking', 'practical skills', 'exam-oriented']),
    Q3('Do exams measure a student\'s ability accurately?', ['Phần nào: đo kiến thức và chịu áp lực.', 'Hạn chế: học vẹt, không đo sáng tạo/hợp tác; một ngày tệ hỏng cả năm.', 'Thay thế: đánh giá quá trình, dự án, portfolio.'], ['rote learning', 'continuous assessment', 'under pressure', 'portfolio']),
    Q3('How has technology changed the way children learn?', ['Tích cực: thông tin tức thì, video minh họa, học theo tốc độ riêng.', 'Tiêu cực: mất tập trung, ít đọc sâu, khoảng cách số.', 'Vai trò giáo viên đổi từ nguồn kiến thức sang người hướng dẫn.'], ['screen time', 'at their own pace', 'digital divide', 'facilitator']),
    Q3('Should children start learning a foreign language at a very young age?', ['Ủng hộ: phát âm và ngữ pháp tự nhiên hơn; Việt Nam dạy tiếng Anh từ lớp 3.', 'Lo ngại: quá tải, thiếu giáo viên giỏi; cần qua chơi, không qua ngữ pháp.', 'Kinh nghiệm bản thân: học muộn nên khó phát âm.'], ['acquire naturally', 'through play', 'qualified teachers', 'overload'])
  ]},
  { topic: 'Environment', qs: [
    Q3('Whose responsibility is it to protect the environment: individuals or governments?', ['Chính phủ: luật, thuế, hạ tầng; 100 công ty = 70% phát thải nên cá nhân không đủ.', 'Cá nhân: thói quen tiêu dùng, bầu cử, áp lực lên công ty.', 'Kết luận: chính phủ dẫn dắt, cá nhân hỗ trợ.'], ['legislation', 'carbon footprint', 'consumer pressure', 'infrastructure']),
    Q3('Are people more environmentally aware than in the past?', ['Có: tái chế, túi vải, tin tức khí hậu, giới trẻ.', 'Nhưng hành vi không theo kịp nhận thức: vẫn mua nhiều, bay nhiều.', 'Khoảng cách nói–làm; cần giá cả phản ánh chi phí môi trường.'], ['awareness', 'say-do gap', 'single-use plastic', 'reflect the true cost']),
    Q3('What can cities do to reduce pollution?', ['Giao thông công cộng rẻ, làn xe đạp, khu đi bộ, phí vào trung tâm.', 'Cây xanh, kiểm soát khí thải xe, năng lượng sạch cho tòa nhà.', 'Ví dụ: Hà Nội/Đà Nẵng kẹt xe máy; cần metro.'], ['congestion charge', 'public transport', 'emissions', 'green spaces']),
    Q3('Should companies be punished for damaging the environment?', ['Có: phạt nặng mới thay đổi hành vi; phạt nhẹ thành "chi phí kinh doanh".', 'Nhưng cần kèm khuyến khích (thuế xanh, trợ cấp) và áp dụng công bằng.', 'Người tiêu dùng cũng chịu một phần giá tăng.'], ['heavy fines', 'incentives', 'cost of doing business', 'enforce']),
    Q3('Will climate change affect the way people live in the future?', ['Rất có thể: nóng hơn, lũ ven biển (ĐBSCL), di cư khí hậu.', 'Thay đổi: nhà ở, nông nghiệp, giờ làm việc, du lịch.', 'Hy vọng: công nghệ sạch rẻ hơn, nhưng hành động chậm.'], ['rising sea levels', 'climate migration', 'adapt', 'renewable energy']),
    Q3('Is it realistic to expect people to stop using cars?', ['Không hoàn toàn: nông thôn, gia đình, hàng hóa cần xe.', 'Thực tế hơn: giảm chuyến ngắn, xe điện, chia sẻ xe.', 'Thành phố cần cho người ta lựa chọn tốt hơn trước khi cấm.'], ['car-dependent', 'viable alternative', 'short journeys', 'phase out'])
  ]},
  { topic: 'Technology', qs: [
    Q3('Do people rely too much on technology?', ['Có: không nhớ số điện thoại, GPS, không chịu được chán.', 'Nhưng "phụ thuộc" vào công cụ hữu ích là bình thường (như điện).', 'Vấn đề là mất kỹ năng dự phòng và sự chú ý.'], ['over-reliance', 'attention span', 'basic skills', 'convenience']),
    Q3('How will artificial intelligence change jobs?', ['Tự động hóa việc lặp lại (nhập liệu, dịch cơ bản, một phần code).', 'Tạo việc mới: giám sát AI, dữ liệu; kỹ năng mềm quan trọng hơn.', 'Ví dụ ngành tôi: AI viết code nháp, người review và thiết kế.'], ['automation', 'reskilling', 'routine tasks', 'oversight']),
    Q3('Should children be given smartphones at an early age?', ['Lợi: an toàn, liên lạc, học tập.', 'Hại: nghiện, giấc ngủ, so sánh xã hội, nội dung không phù hợp.', 'Giải pháp: điện thoại cơ bản trước, smartphone từ 13–14 với giới hạn.'], ['screen addiction', 'parental controls', 'age-appropriate', 'peer pressure']),
    Q3('Is social media good or bad for society?', ['Tốt: kết nối, tiếng nói, kinh doanh nhỏ, phong trào xã hội.', 'Xấu: tin giả, buồng vang, sức khỏe tinh thần, thuật toán gây nghiện.', 'Vấn đề là mô hình kinh doanh dựa trên sự chú ý.'], ['misinformation', 'echo chamber', 'attention economy', 'regulate']),
    Q3('Will people still read printed books in the future?', ['Ít hơn nhưng không mất: cảm giác, quà tặng, không màn hình.', 'Sách giáo khoa, tài liệu chuyển số; tiểu thuyết giữ giấy lâu hơn.', 'Giống đĩa than quay lại: thị trường ngách.'], ['e-books', 'niche market', 'tangible', 'coexist']),
    Q3('What are the dangers of sharing personal information online?', ['Lừa đảo, đánh cắp danh tính, theo dõi vị trí.', 'Dữ liệu bán cho quảng cáo; ảnh hưởng việc làm sau này.', 'Nhiều người không đọc điều khoản; cần luật bảo vệ dữ liệu.'], ['identity theft', 'data breach', 'privacy settings', 'digital footprint'])
  ]},
  { topic: 'Health', qs: [
    Q3('Why are people less healthy today than in the past?', ['Ít vận động: công việc văn phòng, xe máy, màn hình.', 'Đồ ăn chế biến rẻ, nhiều đường; căng thẳng, thiếu ngủ.', 'Nhưng tuổi thọ tăng nhờ y tế — "kém khỏe" là về lối sống.'], ['sedentary', 'processed food', 'life expectancy', 'lifestyle diseases']),
    Q3('Should governments tax unhealthy food?', ['Ủng hộ: thuế đường ở Anh, Mexico giảm tiêu thụ; tiền dùng cho y tế.', 'Phản đối: ảnh hưởng người nghèo nhiều hơn; khó định nghĩa "không lành mạnh".', 'Kèm trợ giá rau quả thì công bằng hơn.'], ['sugar tax', 'regressive', 'subsidise', 'public health']),
    Q3('How can people be encouraged to exercise more?', ['Hạ tầng: công viên, vỉa hè, làn xe đạp an toàn.', 'Công ty: giờ linh hoạt, phòng gym, thử thách nhóm.', 'Cá nhân: bắt đầu nhỏ, bạn tập cùng; ví dụ bản thân.'], ['accessible facilities', 'incentives', 'build a habit', 'workplace wellness']),
    Q3('Is mental health taken as seriously as physical health?', ['Chưa, nhất là ở châu Á: kỳ thị, "yếu đuối".', 'Đang thay đổi ở giới trẻ, công ty có chương trình hỗ trợ.', 'Cần: bảo hiểm chi trả, giáo dục ở trường.'], ['stigma', 'burnout', 'counselling', 'awareness']),
    Q3('Should healthcare be free?', ['Có: quyền cơ bản; chi phí y tế là nguyên nhân nghèo đói.', 'Thách thức: chờ đợi dài, ngân sách; cần kết hợp công–tư.', 'Việt Nam: bảo hiểm y tế toàn dân nhưng chất lượng chênh lệch.'], ['universal healthcare', 'waiting times', 'insurance', 'two-tier system']),
    Q3('Do people work too much nowadays?', ['Có ở một số ngành (IT, tài chính): luôn kết nối, deadline.', 'Áp lực kinh tế, văn hóa "bận = thành công".', 'Giải pháp: quyền ngắt kết nối, 4 ngày/tuần thử nghiệm.'], ['always on', 'work-life balance', 'right to disconnect', 'presenteeism'])
  ]},
  { topic: 'Work & Career', qs: [
    Q3('Is salary the most important factor when choosing a job?', ['Quan trọng nhưng không nhất: học hỏi, đồng nghiệp, ý nghĩa, cân bằng.', 'Tùy giai đoạn: trẻ ưu tiên học, có gia đình ưu tiên ổn định.', 'Ví dụ bản thân/bạn bè bỏ việc lương cao vì môi trường.'], ['job satisfaction', 'career progression', 'stability', 'meaningful work']),
    Q3('Why do people change jobs more often than in the past?', ['Ít ràng buộc trung thành; công ty cũng sa thải dễ.', 'Đổi việc là cách tăng lương nhanh nhất; ngành công nghệ thay đổi.', 'Mặt trái: thiếu chuyên sâu, bất ổn.'], ['job hopping', 'loyalty', 'pay rise', 'instability']),
    Q3('What makes a good manager?', ['Giao tiếp rõ, tin tưởng, bảo vệ đội, phản hồi cụ thể.', 'Không cần giỏi kỹ thuật nhất; cần gỡ rào cản.', 'Ví dụ sếp cũ của tôi: bình tĩnh, kiên nhẫn.'], ['delegate', 'constructive feedback', 'trust', 'lead by example']),
    Q3('Will working from home become the norm?', ['Mô hình lai sẽ là chuẩn ở văn phòng; không áp dụng cho sản xuất/dịch vụ.', 'Lợi: tuyển rộng, tiết kiệm; hại: văn hóa, đào tạo người mới.', 'Công ty tôi: 2–3 ngày/tuần.'], ['hybrid', 'remote-first', 'company culture', 'onboarding']),
    Q3('Should young people take a gap year before university or work?', ['Lợi: trưởng thành, định hướng, kinh nghiệm.', 'Rủi ro: mất đà, tốn tiền, không kế hoạch thành phí.', 'Ở Việt Nam chưa phổ biến vì áp lực gia đình.'], ['gap year', 'maturity', 'lose momentum', 'structured plan']),
    Q3('Are soft skills more important than technical skills?', ['Cả hai; kỹ thuật để vào cửa, mềm để thăng tiến.', 'Trong IT: code tốt nhưng không giải thích được thì khó làm với khách.', 'Trường học ít dạy kỹ năng mềm.'], ['communication', 'teamwork', 'technical expertise', 'adaptability'])
  ]},
  { topic: 'Society & Crime', qs: [
    Q3('What is the best way to reduce crime?', ['Phòng ngừa: giáo dục, việc làm, giảm nghèo.', 'Răn đe: cảnh sát hiệu quả, camera; án dài cho bạo lực.', 'Cải tạo: giảm tái phạm (Na Uy).'], ['deterrent', 'rehabilitation', 'root causes', 'reoffending']),
    Q3('Should prisons punish or rehabilitate?', ['Cả hai nhưng mục tiêu cuối là an toàn xã hội → cải tạo hiệu quả hơn.', 'Trừng phạt thuần túy tạo tội phạm giỏi hơn.', 'Tùy loại tội.'], ['punishment', 'rehabilitate', 'reintegrate', 'violent offenders']),
    Q3('Are people less connected to their communities than before?', ['Ở thành phố: ít biết hàng xóm, chuyển nhà nhiều, mạng xã hội thay thế.', 'Nông thôn vẫn gắn kết.', 'Kết nối mới qua sở thích, online.'], ['sense of community', 'neighbours', 'urbanisation', 'online communities']),
    Q3('Does the media exaggerate crime?', ['Có: tin xấu bán được; cảm giác sợ hơn thực tế dù tội phạm giảm.', 'Hậu quả: chính sách cứng rắn quá mức, kỳ thị nhóm.', 'Cần số liệu thay vì tin giật gân.'], ['sensationalism', 'perception', 'statistics', 'fear of crime']),
    Q3('Should wealthy people pay more tax?', ['Có: công bằng, họ hưởng lợi từ hạ tầng; giảm bất bình đẳng.', 'Lo ngại: trốn thuế, chảy vốn; cần quốc tế phối hợp.', 'Thuế lũy tiến hợp lý hơn thuế tài sản.'], ['progressive tax', 'inequality', 'tax avoidance', 'redistribution']),
    Q3('How can governments help the elderly?', ['Lương hưu đủ sống, y tế, nhà ở phù hợp.', 'Chống cô đơn: trung tâm cộng đồng, việc làm bán thời gian.', 'Hỗ trợ gia đình chăm sóc.'], ['pension', 'ageing population', 'social isolation', 'carers'])
  ]},
  { topic: 'Media & Advertising', qs: [
    Q3('Does advertising influence what people buy?', ['Có, nhiều hơn người ta nghĩ: cảm xúc, thương hiệu, lặp lại.', 'Đặc biệt trẻ em; quảng cáo influencer khó nhận ra.', 'Người tiêu dùng có thể học cách nhận biết.'], ['brand loyalty', 'impulse buying', 'target audience', 'subconscious']),
    Q3('Should advertising aimed at children be banned?', ['Cấm đồ ăn không lành mạnh và trên nền tảng trẻ em.', 'Khó cấm toàn bộ: nội dung miễn phí sống bằng quảng cáo.', 'Dạy trẻ về quảng cáo cũng cần.'], ['vulnerable', 'junk food', 'regulation', 'media literacy']),
    Q3('Is it important to follow the news?', ['Có: công dân, quyết định, hiểu thế giới.', 'Nhưng tin 24/7 gây lo âu; chọn nguồn chất lượng, 15 phút/ngày.', 'Nhiều người trẻ chỉ đọc qua mạng xã hội.'], ['well-informed', 'news fatigue', 'reliable sources', 'headlines']),
    Q3('Do celebrities have too much influence on young people?', ['Có với ngoại hình, tiêu dùng; ít với giá trị sâu.', 'Người ảnh hưởng mới (YouTuber) gần gũi hơn, khó kiểm soát.', 'Gia đình và thầy cô vẫn quan trọng hơn về lâu dài.'], ['role model', 'influencer', 'unrealistic standards', 'impressionable']),
    Q3('How has the internet changed journalism?', ['Nhanh, miễn phí, ai cũng đưa tin; nhưng mô hình doanh thu sụp.', 'Tin giả lan nhanh; báo địa phương đóng cửa.', 'Giải pháp: thuê bao, báo công, kiểm chứng.'], ['fact-checking', 'paywall', 'citizen journalism', 'clickbait']),
    Q3('Should there be limits on freedom of speech online?', ['Có giới hạn: kích động bạo lực, lừa đảo, thông tin y tế sai.', 'Rủi ro: ai định nghĩa "có hại"; dễ thành kiểm duyệt.', 'Cơ quan độc lập, luật rõ ràng.'], ['hate speech', 'censorship', 'independent body', 'accountability'])
  ]},
  { topic: 'Globalisation & Culture', qs: [
    Q3('Is globalisation good for developing countries?', ['Lợi: việc làm, công nghệ, xuất khẩu (Việt Nam từ 1990).', 'Hại: phụ thuộc, bóc lột lao động, môi trường.', 'Tùy chính sách: giáo dục và luật lao động quyết định.'], ['foreign investment', 'exploitation', 'export-led growth', 'depend on']),
    Q3('Are traditional cultures disappearing?', ['Một phần: trang phục, nghề thủ công, ngôn ngữ thiểu số.', 'Nhưng văn hóa luôn thay đổi; lễ hội vẫn mạnh, đôi khi được thương mại hóa.', 'Toàn cầu hóa cũng giúp quảng bá (phở, áo dài).'], ['cultural identity', 'preserve', 'commercialised', 'homogenisation']),
    Q3('Why do people learn English?', ['Công việc, du học, internet (phần lớn nội dung tiếng Anh).', 'Ngôn ngữ chung khi làm với Nhật, Hàn, châu Âu.', 'Rủi ro: ngôn ngữ bản địa bị coi nhẹ.'], ['lingua franca', 'career opportunities', 'access to information', 'mother tongue']),
    Q3('Should tourists respect local customs?', ['Có: ăn mặc ở đền chùa, mặc cả, chụp ảnh người.', 'Du lịch đại trà làm nơi địa phương thành sân khấu.', 'Giáo dục trước chuyến đi; địa phương đặt quy tắc rõ.'], ['local customs', 'mass tourism', 'respectful', 'authentic']),
    Q3('Is it better to travel abroad or within your own country?', ['Nước ngoài: mở mang, ngôn ngữ, so sánh.', 'Trong nước: rẻ, ít carbon, hiểu quê hương (nhiều người Việt chưa đi Tây Bắc).', 'Tùy mục đích và ngân sách.'], ['broaden horizons', 'domestic tourism', 'carbon footprint', 'cultural exchange']),
    Q3('How do international companies affect local businesses?', ['Cạnh tranh giá, cửa hàng nhỏ đóng; nhưng tạo việc làm và chuẩn mới.', 'Địa phương sống bằng khác biệt: dịch vụ, sản phẩm đặc thù.', 'Chính sách bảo vệ hợp lý.'], ['multinational', 'compete', 'local economy', 'niche'])
  ]},
  { topic: 'Transport & Cities', qs: [
    Q3('What are the biggest problems in cities today?', ['Kẹt xe, ô nhiễm, giá nhà, quá tải hạ tầng.', 'Cô lập xã hội dù đông người.', 'Ví dụ Hà Nội/TP.HCM: xe máy, ngập.'], ['congestion', 'affordable housing', 'overcrowding', 'infrastructure']),
    Q3('Should governments invest more in public transport or roads?', ['Công cộng: thêm đường chỉ thêm xe (induced demand).', 'Nhưng nông thôn cần đường; cân bằng theo khu vực.', 'Metro Hà Nội muộn 10 năm — bài học quản lý.'], ['induced demand', 'metro', 'invest in', 'rural areas']),
    Q3('Is life better in the city or the countryside?', ['Thành phố: cơ hội, dịch vụ, đa dạng; nông thôn: không khí, cộng đồng, chi phí.', 'Tùy tuổi: trẻ thành phố, già về quê.', 'Làm từ xa làm ranh giới mờ.'], ['quality of life', 'cost of living', 'opportunities', 'pace of life']),
    Q3('How can cities be made more pedestrian-friendly?', ['Vỉa hè rộng không bị chiếm, cây bóng mát, qua đường an toàn.', 'Khu không xe, hạn chế đỗ xe trên vỉa hè (vấn đề lớn ở VN).', 'Đi bộ cần đích đến gần: quy hoạch hỗn hợp.'], ['pedestrianised', 'walkable', 'mixed-use', 'shade']),
    Q3('Will cars be replaced by other forms of transport?', ['Trong trung tâm: xe đạp điện, metro, chia sẻ xe.', 'Xe không mất nhưng đổi: điện, tự lái, ít sở hữu hơn.', 'Phụ thuộc hạ tầng và giá.'], ['car ownership', 'ride-sharing', 'electric vehicles', 'last-mile']),
    Q3('Why do people move from the countryside to cities?', ['Việc làm, giáo dục, y tế, giải trí.', 'Nông nghiệp thu nhập thấp; áp lực gia đình.', 'Hệ quả: nông thôn già hóa, thành phố quá tải.'], ['rural-urban migration', 'better prospects', 'brain drain', 'strain on services'])
  ]},
  { topic: 'Government & Economy', qs: [
    Q3('What should governments spend more money on?', ['Giáo dục và y tế: lợi ích dài hạn, công bằng.', 'Hạ tầng xanh; nghiên cứu.', 'Ít hơn: quân sự, dự án phô trương.'], ['priority', 'long-term return', 'public spending', 'allocate']),
    Q3('Is economic growth always a good thing?', ['Giúp giảm nghèo (VN sau Đổi mới).', 'Nhưng môi trường, bất bình đẳng, hạnh phúc không tăng theo GDP sau ngưỡng.', 'Cần đo chất lượng tăng trưởng.'], ['GDP', 'sustainable growth', 'inequality', 'well-being']),
    Q3('Should the government control prices of essential goods?', ['Trong khủng hoảng: có (điện, thuốc).', 'Dài hạn: méo thị trường, thiếu hàng; trợ cấp đúng người tốt hơn.', 'Ví dụ xăng ở VN.'], ['price controls', 'subsidies', 'shortages', 'market distortion']),
    Q3('Do people trust their governments less than before?', ['Nhiều nước: có — thông tin nhiều hơn, bê bối lộ nhanh.', 'Mạng xã hội khuếch đại; kỳ vọng cao hơn.', 'Minh bạch và kết quả xây lại niềm tin.'], ['transparency', 'accountability', 'corruption', 'public trust']),
    Q3('Should voting be compulsory?', ['Ủng hộ: đại diện đầy đủ, chính trị gia chú ý mọi nhóm (Úc).', 'Phản đối: quyền không bầu, phiếu bừa.', 'Thay thế: giáo dục công dân, bầu cử dễ tiếp cận.'], ['turnout', 'civic duty', 'representative', 'informed voters']),
    Q3('How important is it for a country to have a strong manufacturing sector?', ['Việc làm ổn định, xuất khẩu, tự chủ (bài học COVID).', 'Nhưng tự động hóa giảm việc; dịch vụ giá trị cao hơn.', 'VN đang đi lên chuỗi giá trị.'], ['manufacturing', 'supply chain', 'value chain', 'self-sufficient'])
  ]},
  { topic: 'Science & Research', qs: [
    Q3('Is space exploration a waste of money?', ['Phản đối: vệ tinh, GPS, dự báo thời tiết, vật liệu; truyền cảm hứng.', 'Ủng hộ: nhiều vấn đề trên Trái Đất cấp bách hơn.', 'Hợp tác quốc tế và tư nhân giảm chi phí.'], ['spin-off technologies', 'priorities', 'inspire', 'private companies']),
    Q3('Should scientific research be funded by governments or private companies?', ['Chính phủ: nghiên cứu cơ bản không lợi nhuận ngay.', 'Tư nhân: ứng dụng nhanh nhưng thiên về lợi nhuận (thuốc hiếm bị bỏ).', 'Cả hai.'], ['basic research', 'profit-driven', 'public funding', 'applied']),
    Q3('Do people trust science?', ['Phần lớn có (vaccine, điện thoại) nhưng niềm tin giảm với vài chủ đề.', 'Nguyên nhân: thông tin sai, khoa học đổi ý khi có dữ liệu mới bị hiểu là "không đáng tin".', 'Giáo dục cách khoa học hoạt động.'], ['scepticism', 'evidence', 'misinformation', 'scientific literacy']),
    Q3('Is it ethical to test products on animals?', ['Y học: còn cần nhưng giảm; mỹ phẩm: không chấp nhận được.', 'Thay thế: mô hình tế bào, máy tính.', 'Luật EU cấm mỹ phẩm thử trên động vật.'], ['animal testing', 'alternatives', 'ethical', 'ban']),
    Q3('What scientific discovery has changed people\'s lives most?', ['Kháng sinh/vaccine: tuổi thọ gấp đôi.', 'Điện và internet.', 'Chọn một, giải thích vì sao.'], ['breakthrough', 'life expectancy', 'transform', 'antibiotics']),
    Q3('Should children be encouraged to study science?', ['Có: tư duy, việc làm tương lai.', 'Nhưng không ép; nghệ thuật cũng cần.', 'Dạy qua thực hành thay vì công thức.'], ['hands-on', 'STEM', 'curiosity', 'well-rounded'])
  ]},
  { topic: 'Family & Relationships', qs: [
    Q3('How have families changed in recent decades?', ['Nhỏ hơn, kết hôn muộn, nhiều người sống một mình.', 'Vai trò giới thay đổi; ông bà ít sống cùng ở thành phố.', 'Công nghệ nối gia đình xa nhưng cắt bữa cơm chung.'], ['nuclear family', 'gender roles', 'marry later', 'extended family']),
    Q3('Should elderly parents live with their children?', ['Truyền thống Á Đông: có, tình cảm và tiết kiệm.', 'Thách thức: nhà chật, xung đột thế hệ, con cái đi làm xa.', 'Giải pháp: gần nhau nhưng riêng; dịch vụ chăm sóc.'], ['filial duty', 'care homes', 'generation gap', 'independence']),
    Q3('Is it better to have a large family or a small one?', ['Lớn: hỗ trợ, không cô đơn; nhỏ: tập trung nguồn lực cho con.', 'Chi phí sống quyết định; xu hướng toàn cầu nhỏ.', 'Trải nghiệm cá nhân.'], ['sibling', 'resources', 'birth rate', 'support network']),
    Q3('What role do grandparents play in families today?', ['Chăm cháu khi bố mẹ đi làm (rất phổ biến ở VN).', 'Truyền văn hóa, ngôn ngữ, câu chuyện.', 'Khoảng cách địa lý làm vai trò giảm.'], ['childcare', 'pass on traditions', 'bond', 'distance']),
    Q3('Do children today have too much freedom?', ['Về công nghệ: có; về đi lại ngoài trời: ít hơn xưa.', 'Cha mẹ bận → thiết bị trông con.', 'Tự do cần đi kèm trách nhiệm và ranh giới.'], ['boundaries', 'supervision', 'independence', 'overprotective']),
    Q3('Why do some people choose not to have children?', ['Chi phí, sự nghiệp, tự do, lo ngại khí hậu.', 'Ít áp lực xã hội hơn trước, nhất là thành phố.', 'Hệ quả: dân số già (Nhật, Hàn).'], ['child-free', 'cost of raising', 'falling birth rate', 'personal choice'])
  ]}
];

/* ---------- Drill phát âm: câu đọc theo mẫu + cặp tối thiểu ---------- */
window.PRON_DRILLS = [
  { id: 'd1', title: 'Âm cuối /s z t d k/', lesson: 'P4', sentences: ['The tests passed, but the build failed at the last step.', 'She likes cats, dogs and birds.', 'I asked him to check the logs twice.', 'He walked back and locked the gate.', 'It costs six pounds, not sixteen.'], pairs: [['back', 'bag'], ['bus', 'buzz'], ['cap', 'cab'], ['light', 'like'], ['hit', 'hid'], ['price', 'prize']] },
  { id: 'd2', title: 'Đuôi -s / -ed', lesson: 'P5', sentences: ['He fixed the bug, pushed the code and watched the pipeline.', 'She wanted to start, so she needed the keys.', 'The buses stopped and the passengers waited.', 'We changed the pages and tested the fixes.', 'They played, laughed and relaxed all weekend.'], pairs: [['fixed', 'fixes'], ['tested', 'test'], ['watched', 'watches'], ['played', 'plate'], ['stops', 'stopped'], ['needed', 'need']] },
  { id: 'd3', title: '/θ/ /ð/ /ʃ/ /tʃ/ /dʒ/', lesson: 'P3', sentences: ['I think the third method is the best.', 'They gathered together with their mother.', 'She should finish the short presentation.', 'Check the chart before you change the schedule.', 'The Japanese manager joined the project in June.'], pairs: [['think', 'sink'], ['three', 'tree'], ['ship', 'sip'], ['cheap', 'sheep'], ['watch', 'wash'], ['jam', 'yam']] },
  { id: 'd4', title: 'Nguyên âm /iː ɪ/ /æ e ʌ/', lesson: 'P1', sentences: ['Please sit in this seat and read the sheet.', 'The cat sat on the bed and cut the thread.', 'It is a bit late to eat the big meal.', 'Ten men ran to the bank.', 'Fill the field with green beans.'], pairs: [['sheep', 'ship'], ['leave', 'live'], ['bad', 'bed'], ['cat', 'cut'], ['man', 'men'], ['feel', 'fill']] },
  { id: 'd5', title: 'Nguyên âm đôi', lesson: 'P2', sentences: ['I hope the code goes live today.', 'Take the train to the main station at eight.', 'My phone is at home on the sofa.', 'How now, brown cow?', 'The boy enjoyed the noisy toy.'], pairs: [['pen', 'pain'], ['cot', 'coat'], ['bet', 'bite'], ['not', 'note'], ['sell', 'sale'], ['hat', 'height']] },
  { id: 'd6', title: 'Trọng âm từ', lesson: 'P6', sentences: ['The developer needs more information about the project.', 'We will record the record and present the present.', 'Security and availability are the priorities.', 'The Japanese engineer explained the technical parameters.', 'Photography is my hobby, and the photographer took a photograph.'], pairs: [['REcord', 'reCORD'], ['PREsent', 'preSENT'], ['INcrease', 'inCREASE'], ['IMport', 'imPORT'], ['OBject', 'obJECT'], ['CONtract', 'conTRACT']] },
  { id: 'd7', title: 'Nối âm & dạng yếu', lesson: 'P7', sentences: ['Check it out and pick it up.', 'I want to go to the office on Monday.', 'A cup of tea and a piece of cake.', 'What do you want to do at the weekend?', 'There is an apple on the table for you.'], pairs: [['can', "can't"], ['for', 'four'], ['to', 'two'], ['of', 'off'], ['an', 'and'], ['was', 'worse']] },
  { id: 'd8', title: 'Cụm phụ âm', lesson: 'P11', sentences: ['The first three tests passed, but the fourth script crashed.', 'Strong strings stretch and split.', 'The texts, the risks and the costs.', 'She asked twelve months for the project.', 'The world needs skilled builders.'], pairs: [['tests', 'test'], ['asks', 'ask'], ['string', 'sting'], ['script', 'skip'], ['months', 'month'], ['world', 'word']] },
  { id: 'd9', title: 'Ngữ điệu & chunking (câu Part 3)', lesson: 'S8', sentences: ['I think the main reason is that large companies offer more security, especially for people who are just starting out.', 'In the past, people shopped at markets, whereas nowadays most of that has moved online.', 'Having said that, I still believe face-to-face teaching matters.', 'We need tests, documentation, and a release note.', "It's ready, isn't it?"], pairs: [] }
];

/* ---------- Lịch luyện nói mỗi ngày (template, 20–25 phút) ---------- */
window.SPEAK_DAILY = [
  { k: 'warm', title: 'Khởi động phát âm (3 phút)', desc: 'Drill của ngày: nghe mẫu, đọc theo 3 lần, ghi âm 1 lần và so khớp.', go: 'pron' },
  { k: 'p1', title: 'Part 1 — 4 câu (5 phút)', desc: 'Chủ đề của ngày. Trả lời A-R-E 2–4 câu mỗi câu, ghi âm liền.', go: 'p1' },
  { k: 'p2', title: 'Part 2 — 1 cue card (4 phút)', desc: '1 phút ghi chú, 2 phút nói. Mục tiêu hôm nay: không dừng quá 3 giây.', go: 'p2' },
  { k: 'p3', title: 'Part 3 — 2 câu (4 phút)', desc: 'Dùng khung O-R-E-X. Mỗi câu 30–45 giây.', go: 'ideas' },
  { k: 'phr', title: 'Cụm câu của ngày (3 phút)', desc: '3 cụm: nghe, nói lại 3 lần, đặt 1 câu của mình với mỗi cụm.', go: 'phrases' },
  { k: 'review', title: 'Nghe lại & ghi 2 lỗi (3 phút)', desc: 'Nghe lại một bản ghi hôm nay, ghi 2 lỗi vào Sổ lỗi, nói lại câu đó đúng.', go: 'progress' }
];
