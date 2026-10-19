/* ===== Câu hay dùng trong giao tiếp thật — 15 nhóm tình huống =====
   Mỗi câu: [tiếng Anh, nghĩa, từ khóa để điền khi ôn flashcard] */
window.SENTENCES_HOWTO = `
### Cách dùng mục Câu hay dùng
- Đây là câu **nói ra miệng** trong đời thật và công việc (khác kho Cụm câu Speaking là cho phòng thi). Mục tiêu: nghe quen → nói không nghĩ.
- Mỗi nhóm: bấm 🔊 nghe, bấm **Nói lại** (máy đọc rồi bạn nhắc, app so khớp) hoặc **Dịch nói** (thấy nghĩa tiếng Việt, bạn nói tiếng Anh). Câu nào nói được 2 lần ≥ 80% → tick **Thuộc**.
- Ôn dài hạn bằng flashcard: 3 bộ **CS1 Hằng ngày**, **CS2 Công việc**, **CS3 Du lịch & dịch vụ** trong mục Từ vựng.
- Dùng thật: mỗi tuần chọn 3 câu từ nhóm Họp/Standup và **cố ý dùng** trong một cuộc họp. Đó là lúc câu thành của bạn.
- Nhóm **Câu với linking verbs** đi kèm bài ngữ pháp [G25](#/lesson/G25).
`;
const SG = (id, title, items) => ({ id, title, items });
window.SENTENCES = [
SG('greet', 'Chào hỏi & small talk', [
  ['Hi, how\'s it going?', 'Chào, dạo này sao rồi?', 'going'],
  ['Long time no see! How have you been?', 'Lâu quá không gặp! Dạo này thế nào?', 'been'],
  ['How was your weekend?', 'Cuối tuần của bạn thế nào?', 'weekend'],
  ['Not bad, thanks. And you?', 'Cũng ổn, cảm ơn. Còn bạn?', 'thanks'],
  ['Pretty busy, to be honest.', 'Khá bận, thật đấy.', 'busy'],
  ['It\'s nice to finally meet you in person.', 'Rất vui cuối cùng cũng gặp trực tiếp.', 'person'],
  ['Did you have a good trip?', 'Chuyến đi ổn chứ?', 'trip'],
  ['The weather\'s been crazy lately, hasn\'t it?', 'Thời tiết dạo này điên thật nhỉ?', 'weather'],
  ['Anyway, I\'d better get going.', 'Thôi, tôi phải đi đây.', 'going'],
  ['It was great catching up. See you around!', 'Nói chuyện vui lắm. Hẹn gặp lại!', 'catching']
]),
SG('intro', 'Giới thiệu bản thân & công việc', [
  ['I\'m Nghia, I\'m a software tester at AGEST.', 'Tôi là Nghĩa, tester phần mềm ở AGEST.', 'tester'],
  ['I\'ve been working there for about three years.', 'Tôi làm ở đó khoảng ba năm rồi.', 'working'],
  ['I\'m responsible for the backend testing of our main product.', 'Tôi phụ trách kiểm thử backend cho sản phẩm chính.', 'responsible'],
  ['I mainly work with clients in Japan.', 'Tôi chủ yếu làm việc với khách hàng ở Nhật.', 'clients'],
  ['I\'m based in Da Nang, but the team is spread across three cities.', 'Tôi ở Đà Nẵng, nhưng team rải ở ba thành phố.', 'based'],
  ['Before this, I worked at a start-up for two years.', 'Trước đó tôi làm ở một start-up hai năm.', 'start-up'],
  ['In my free time I\'m into cycling and board games.', 'Rảnh thì tôi thích đạp xe và chơi cờ bàn.', 'into'],
  ['What about you? What do you do?', 'Còn bạn? Bạn làm gì?', 'do'],
  ['Sorry, I didn\'t catch your name.', 'Xin lỗi, tôi chưa nghe rõ tên bạn.', 'catch'],
  ['Nice to meet you. Here\'s my card.', 'Rất vui được gặp. Đây là danh thiếp của tôi.', 'card']
]),
SG('clarify', 'Hỏi lại, làm rõ, không hiểu', [
  ['Sorry, could you say that again?', 'Xin lỗi, bạn nói lại được không?', 'again'],
  ['Could you speak a little more slowly, please?', 'Bạn nói chậm lại một chút được không?', 'slowly'],
  ['I\'m not sure I follow. Do you mean…?', 'Tôi chưa theo kịp. Ý bạn là…?', 'follow'],
  ['Just to confirm, you\'d like us to finish by Friday, right?', 'Xác nhận lại, bạn muốn chúng tôi xong trước thứ Sáu, đúng không?', 'confirm'],
  ['What exactly do you mean by "done"?', 'Chính xác thì "xong" nghĩa là gì?', 'exactly'],
  ['Could you give me an example?', 'Bạn cho tôi một ví dụ được không?', 'example'],
  ['Let me make sure I\'ve got this right.', 'Để tôi chắc là mình hiểu đúng.', 'right'],
  ['Sorry, the connection is bad. You cut out for a second.', 'Xin lỗi, mạng kém. Bạn bị ngắt một chút.', 'connection'],
  ['How do you spell that?', 'Từ đó đánh vần thế nào?', 'spell'],
  ['I\'ll check and get back to you by tomorrow.', 'Tôi sẽ kiểm tra và trả lời bạn trước ngày mai.', 'back']
]),
SG('meeting', 'Trong họp & standup', [
  ['Yesterday I finished the login fix and wrote the tests for it.', 'Hôm qua tôi xong fix login và viết test cho nó.', 'finished'],
  ['Today I\'m going to start on the export bug.', 'Hôm nay tôi sẽ bắt đầu bug export.', 'start'],
  ['I\'m blocked on the staging credentials.', 'Tôi đang kẹt vì chưa có tài khoản staging.', 'blocked'],
  ['No blockers from my side.', 'Phía tôi không vướng gì.', 'blockers'],
  ['Can I add something here?', 'Tôi bổ sung một ý được không?', 'add'],
  ['From a testing perspective, the main risk is the migration.', 'Từ góc độ kiểm thử, rủi ro chính là migration.', 'perspective'],
  ['I see your point, but I\'m not sure that would work because…', 'Tôi hiểu ý bạn, nhưng tôi không chắc cách đó ổn vì…', 'point'],
  ['Could we take this offline? It\'s getting detailed.', 'Mình bàn riêng sau được không? Đang đi vào chi tiết quá.', 'offline'],
  ['So, to summarise: Ken will update the spec and I\'ll retest on Thursday.', 'Tóm lại: Ken cập nhật spec, tôi test lại thứ Năm.', 'summarise'],
  ['Let\'s confirm the action items by email.', 'Mình xác nhận việc cần làm qua email nhé.', 'action']
]),
SG('request', 'Nhờ vả, đề nghị, theo dõi việc', [
  ['Could you send me the latest version when you get a chance?', 'Khi nào tiện bạn gửi tôi bản mới nhất nhé?', 'chance'],
  ['Would you mind reviewing my pull request today?', 'Bạn review pull request của tôi hôm nay được không?', 'reviewing'],
  ['I\'d appreciate it if you could reply by Wednesday.', 'Tôi rất cảm kích nếu bạn trả lời trước thứ Tư.', 'appreciate'],
  ['Just following up on my message from Monday.', 'Tôi nhắc lại tin nhắn hôm thứ Hai.', 'following'],
  ['Have you had a chance to look at the report?', 'Bạn đã xem qua báo cáo chưa?', 'chance'],
  ['No rush, but it would help to have this by Friday.', 'Không vội, nhưng có trước thứ Sáu thì tốt.', 'rush'],
  ['Is there anything I can do to help?', 'Tôi giúp được gì không?', 'help'],
  ['Could you walk me through the steps?', 'Bạn hướng dẫn tôi từng bước được không?', 'through'],
  ['Let me know if anything is unclear.', 'Có gì chưa rõ cứ nói tôi.', 'unclear'],
  ['Thanks for the quick turnaround.', 'Cảm ơn đã xử lý nhanh.', 'turnaround']
]),
SG('phone', 'Điện thoại & call online', [
  ['Hi, this is Nghia from AGEST. Could I speak to Mr Tanaka, please?', 'Chào, tôi là Nghĩa ở AGEST. Cho tôi gặp anh Tanaka được không?', 'speak'],
  ['I\'m calling about the release schedule.', 'Tôi gọi về lịch phát hành.', 'calling'],
  ['Can you hear me okay?', 'Bạn nghe tôi rõ không?', 'hear'],
  ['You\'re on mute.', 'Bạn đang tắt mic.', 'mute'],
  ['Let me share my screen.', 'Để tôi chia sẻ màn hình.', 'share'],
  ['Sorry, I think we lost you for a moment.', 'Xin lỗi, hình như mất kết nối với bạn một lúc.', 'lost'],
  ['Could you put that in the chat?', 'Bạn gõ cái đó vào chat được không?', 'chat'],
  ['I\'ll send a summary right after the call.', 'Tôi sẽ gửi tóm tắt ngay sau cuộc gọi.', 'summary'],
  ['Shall we schedule a follow-up for next week?', 'Mình hẹn một buổi tiếp theo tuần sau nhé?', 'schedule'],
  ['Thanks everyone. Have a good one.', 'Cảm ơn mọi người. Chúc một ngày tốt.', 'everyone']
]),
SG('opinion', 'Đồng ý, không đồng ý, đề xuất', [
  ['I totally agree with you.', 'Tôi hoàn toàn đồng ý.', 'agree'],
  ['That makes sense.', 'Hợp lý đấy.', 'sense'],
  ['I\'m with Ken on this one.', 'Vụ này tôi theo Ken.', 'with'],
  ['I\'m not sure about that.', 'Tôi không chắc về điều đó.', 'sure'],
  ['I see it a bit differently.', 'Tôi nhìn hơi khác một chút.', 'differently'],
  ['Fair point, but have we considered the cost?', 'Ý hay, nhưng mình đã tính chi phí chưa?', 'considered'],
  ['How about we try option B first?', 'Hay là thử phương án B trước?', 'option'],
  ['I\'d suggest we delay the release by two days.', 'Tôi đề nghị lùi phát hành hai ngày.', 'suggest'],
  ['One option would be to split the ticket.', 'Một cách là tách ticket ra.', 'split'],
  ['Let\'s go with that.', 'Cứ làm theo cách đó đi.', 'go']
]),
SG('polite', 'Xin lỗi, cảm ơn, từ chối', [
  ['Sorry about that.', 'Xin lỗi về chuyện đó.', 'about'],
  ['My apologies for the delay.', 'Xin lỗi vì sự chậm trễ.', 'apologies'],
  ['That was my mistake. I\'ll fix it right away.', 'Lỗi của tôi. Tôi sửa ngay.', 'mistake'],
  ['Thanks a lot, I really appreciate it.', 'Cảm ơn nhiều, tôi rất trân trọng.', 'appreciate'],
  ['That\'s very kind of you.', 'Bạn tốt quá.', 'kind'],
  ['I\'m afraid I can\'t make it on Friday.', 'E là thứ Sáu tôi không đến được.', 'afraid'],
  ['I\'d love to, but I\'m swamped this week.', 'Tôi rất muốn, nhưng tuần này ngập việc.', 'swamped'],
  ['Could we do it another time?', 'Để lúc khác được không?', 'another'],
  ['Thanks for understanding.', 'Cảm ơn đã thông cảm.', 'understanding'],
  ['No worries at all.', 'Không sao cả.', 'worries']
]),
SG('restaurant', 'Nhà hàng, cà phê, mua sắm', [
  ['A table for two, please.', 'Cho bàn hai người.', 'table'],
  ['Could I see the menu, please?', 'Cho tôi xem thực đơn được không?', 'menu'],
  ['What do you recommend?', 'Bạn gợi ý món gì?', 'recommend'],
  ['I\'ll have the chicken, please.', 'Cho tôi món gà.', 'have'],
  ['Could we have the bill, please?', 'Cho chúng tôi tính tiền.', 'bill'],
  ['Is service included?', 'Đã gồm phí phục vụ chưa?', 'service'],
  ['Do you have this in a larger size?', 'Có cỡ lớn hơn không?', 'size'],
  ['Can I pay by card?', 'Trả thẻ được không?', 'card'],
  ['I\'m just looking, thanks.', 'Tôi chỉ xem thôi, cảm ơn.', 'looking'],
  ['Could I get a receipt?', 'Cho tôi hóa đơn được không?', 'receipt']
]),
SG('travel', 'Đi lại, sân bay, khách sạn', [
  ['Excuse me, how do I get to the station?', 'Xin lỗi, đến ga đi thế nào?', 'station'],
  ['Is this the right platform for the train to Osaka?', 'Đây đúng sân ga tàu đi Osaka không?', 'platform'],
  ['How much is a return ticket?', 'Vé khứ hồi bao nhiêu?', 'return'],
  ['I\'d like to check in. I have a reservation under Dinh.', 'Tôi muốn nhận phòng. Đặt phòng tên Dinh.', 'reservation'],
  ['What time is check-out?', 'Mấy giờ trả phòng?', 'check-out'],
  ['Could I have a late check-out?', 'Tôi trả phòng muộn được không?', 'late'],
  ['Where\'s the nearest ATM?', 'ATM gần nhất ở đâu?', 'nearest'],
  ['My luggage hasn\'t arrived.', 'Hành lý của tôi chưa đến.', 'luggage'],
  ['Could you call me a taxi, please?', 'Gọi giúp tôi taxi được không?', 'taxi'],
  ['Is breakfast included?', 'Có gồm bữa sáng không?', 'breakfast']
]),
SG('health', 'Sức khỏe & khẩn cấp', [
  ['I don\'t feel well.', 'Tôi thấy không khỏe.', 'well'],
  ['I have a headache and a sore throat.', 'Tôi đau đầu và đau họng.', 'throat'],
  ['I\'m allergic to seafood.', 'Tôi dị ứng hải sản.', 'allergic'],
  ['Is there a pharmacy nearby?', 'Gần đây có hiệu thuốc không?', 'pharmacy'],
  ['I\'d like to make an appointment with a doctor.', 'Tôi muốn hẹn khám bác sĩ.', 'appointment'],
  ['Call an ambulance, please!', 'Gọi cấp cứu giúp!', 'ambulance'],
  ['I\'ve lost my passport.', 'Tôi làm mất hộ chiếu.', 'passport'],
  ['Could you help me? It\'s urgent.', 'Giúp tôi với, gấp lắm.', 'urgent'],
  ['How often should I take this?', 'Thuốc này uống bao lâu một lần?', 'take'],
  ['I feel much better now, thanks.', 'Giờ tôi thấy đỡ nhiều rồi, cảm ơn.', 'better']
]),
SG('time', 'Thời gian & hẹn lịch', [
  ['Are you free on Thursday afternoon?', 'Chiều thứ Năm bạn rảnh không?', 'free'],
  ['Does 2 p.m. work for you?', '2 giờ chiều được không?', 'work'],
  ['Could we move the meeting to 3?', 'Dời họp sang 3 giờ được không?', 'move'],
  ['I\'m running about ten minutes late.', 'Tôi đến muộn khoảng mười phút.', 'late'],
  ['Let\'s aim to finish by five.', 'Cố gắng xong trước 5 giờ nhé.', 'aim'],
  ['The deadline is the end of next week.', 'Hạn chót là cuối tuần sau.', 'deadline'],
  ['It\'ll take about two days, give or take.', 'Mất khoảng hai ngày, xê dịch chút.', 'take'],
  ['Can we push it back a day?', 'Lùi một ngày được không?', 'push'],
  ['I\'ll be out of office tomorrow.', 'Mai tôi nghỉ.', 'office'],
  ['What time zone are you in?', 'Bạn ở múi giờ nào?', 'zone']
]),
SG('react', 'Phản ứng & cảm xúc', [
  ['That\'s great news!', 'Tin tuyệt vời!', 'news'],
  ['No way! Really?', 'Không thể nào! Thật à?', 'way'],
  ['What a shame.', 'Tiếc quá.', 'shame'],
  ['That must have been tough.', 'Chắc là khó khăn lắm.', 'tough'],
  ['I\'m so relieved.', 'Nhẹ cả người.', 'relieved'],
  ['Well done, that\'s impressive.', 'Làm tốt lắm, ấn tượng đấy.', 'impressive'],
  ['Oh no, that\'s annoying.', 'Ôi không, bực thật.', 'annoying'],
  ['Fingers crossed!', 'Cầu mong may mắn!', 'crossed'],
  ['I\'m really looking forward to it.', 'Tôi rất mong chờ.', 'forward'],
  ['It is what it is.', 'Chuyện là vậy, chấp nhận thôi.', 'is']
]),
SG('exam', 'Phòng thi IELTS (với nhân viên & giám khảo)', [
  ['Good morning. Here\'s my passport.', 'Chào buổi sáng. Đây là hộ chiếu của tôi.', 'passport'],
  ['Could you tell me where room 3 is?', 'Cho hỏi phòng 3 ở đâu?', 'room'],
  ['Sorry, I didn\'t catch the question.', 'Xin lỗi, tôi chưa nghe rõ câu hỏi.', 'catch'],
  ['Could you repeat that, please?', 'Nhắc lại giúp tôi được không?', 'repeat'],
  ['Do you mean in my hometown or where I live now?', 'Ý thầy/cô là quê tôi hay nơi tôi sống hiện tại?', 'mean'],
  ['Can I have a moment to think?', 'Cho tôi một chút để nghĩ được không?', 'moment'],
  ['Sorry, what I meant to say was…', 'Xin lỗi, ý tôi muốn nói là…', 'meant'],
  ['That\'s about it, I think.', 'Chắc là hết rồi, tôi nghĩ vậy.', 'about'],
  ['Thank you. It was nice talking to you.', 'Cảm ơn. Rất vui được nói chuyện.', 'talking'],
  ['Excuse me, my headphones aren\'t working.', 'Xin lỗi, tai nghe của tôi không hoạt động.', 'headphones']
]),
SG('linking', 'Câu với linking verbs (G25)', [
  ['That sounds great!', 'Nghe tuyệt đấy!', 'sounds'],
  ['It looks like it\'s going to rain.', 'Có vẻ trời sắp mưa.', 'looks'],
  ['You look tired. Are you okay?', 'Trông bạn mệt. Ổn không?', 'look'],
  ['This tastes amazing.', 'Món này ngon tuyệt.', 'tastes'],
  ['I feel much more confident now.', 'Giờ tôi thấy tự tin hơn nhiều.', 'feel'],
  ['It seems that the server is down again.', 'Có vẻ server lại sập rồi.', 'seems'],
  ['She became a team leader last year.', 'Cô ấy lên trưởng nhóm năm ngoái.', 'became'],
  ['It\'s getting late, let\'s wrap up.', 'Muộn rồi, kết thúc thôi.', 'getting'],
  ['Stay calm and keep going.', 'Bình tĩnh và tiếp tục.', 'calm'],
  ['Prices have remained stable this year.', 'Giá năm nay vẫn ổn định.', 'remained'],
  ['It turned out to be a simple config error.', 'Hóa ra chỉ là lỗi cấu hình đơn giản.', 'turned'],
  ['The plan proved more difficult than expected.', 'Kế hoạch hóa ra khó hơn dự kiến.', 'proved']
])
];

/* Flashcard: 3 bộ chọn từ các nhóm (kind 'sentence') */
(function(){ const pickG=(ids,n)=>{const out=[];ids.forEach(id=>{const g=SENTENCES.find(x=>x.id===id);if(!g)return;g.items.slice(0,n).forEach(it=>{const re=new RegExp('\\b'+it[2].replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&')+'\\b','i');const ex=re.test(it[0])?it[0].replace(re,m=>'['+m+']'):'['+it[0]+']';out.push({w:it[0],vi:it[1],ex,col:'',ipa:''});});});return out;};
  window.VOCAB.push(
    { id: 'CS1', kind: 'sentence', title: 'Câu hay dùng: hằng ngày (chào hỏi, hỏi lại, phản ứng, lịch sự)', goal: 'Nói được không nghĩ.', words: pickG(['greet','clarify','react','polite'], 6) },
    { id: 'CS2', kind: 'sentence', title: 'Câu hay dùng: công việc (họp, nhờ vả, điện thoại, ý kiến, lịch)', goal: 'Dùng trong họp tuần này.', words: pickG(['meeting','request','phone','opinion','time'], 5) },
    { id: 'CS3', kind: 'sentence', title: 'Câu hay dùng: du lịch & dịch vụ, sức khỏe, phòng thi, linking verbs', goal: 'Sẵn sàng khi ra nước ngoài và ngày thi.', words: pickG(['restaurant','travel','health','exam','linking'], 5) }
  );
})();
