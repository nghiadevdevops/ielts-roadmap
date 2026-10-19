/* ===== Bài đọc có nguồn (phần 2): Wikipedia CC BY-SA 4.0, văn bản viết lại ===== */
const WK2 = (title, slug) => ({ name: 'Wikipedia: ' + title, url: 'https://en.wikipedia.org/wiki/' + slug, license: 'CC BY-SA 4.0 — văn bản đã viết lại và rút gọn cho mục đích luyện đọc' });
window.READING.push(
{ id: 'rw5', title: 'Forests That Stand in the Sea', types: 'Matching headings · Note completion · (nguồn Wikipedia)', words: 480, minutes: 15, src: WK2('Mangrove', 'Mangrove'),
headings: ['Where mangroves are found', 'Economic value to fishing communities', 'How mangroves survive in salt water', 'Protection against storms and erosion', 'A disproportionate role in storing carbon', 'Continuing losses and the limits of replanting', 'The history of mangrove research', 'Threats from rising sea levels'],
text: `
**A** Mangroves are trees and shrubs that grow where few other plants can: on muddy, salty shorelines flooded twice a day by the tide. They are found along tropical and subtropical coasts between roughly 30° north and 30° south, with the greatest extent within a few degrees of the equator. South-east Asia, and the Indonesian archipelago in particular, holds the richest variety of species. A 2025 estimate puts the world's mangrove area at about 15.9 million hectares; Indonesia alone accounts for 3.4 million, and five countries, Indonesia, Brazil, Australia, Nigeria and Mexico, together contain almost half of the total.

**B** Living in seawater requires unusual adaptations, and different mangrove families have evolved them independently. Some species send up aerial roots, which rise from the mud like breathing tubes to take in oxygen that the waterlogged soil cannot supply; in a few species these reach more than three metres. Others stand on arching stilt roots that lift the trunk above the water. Salt is dealt with in two ways: the roots of some species act as filters, excluding 90 to 95 per cent of the salt in the water they absorb, while others let salt into the leaves and then shed the leaves. Many mangroves are also viviparous. Their seeds germinate while still attached to the parent tree, and the resulting seedlings, which float, can survive for up to a year at sea before lodging in mud and taking root.

**C** These tangled roots do more than anchor the trees. They dissipate the energy of waves, slow the movement of tidal water so that sediment settles, and in doing so reduce coastal erosion and the damage caused by storm surges and tsunamis. Studies after tropical storms have measured the economic protection that intact mangroves provide to the communities behind them. The same roots create a sheltered nursery for young fish, crabs and shrimp; some sharks give birth in mangrove creeks, and one survey recorded 174 species of large marine animals using mangrove habitat.

**D** Mangroves also punch far above their weight as a carbon store. They occupy only about half a per cent of the world's coastal area, yet they account for between 10 and 15 per cent of the carbon buried in coastal sediments, a form of storage now known as blue carbon. In 2012 the world's mangroves were estimated to hold 4.19 billion tonnes of carbon, roughly two per cent of which had been lost in the previous twelve years as forests were cleared.

**E** That clearance continues. Between 1999 and 2019 the global area of mangrove fell by an estimated 3,700 square kilometres, an annual loss of around 0.16 per cent, although in some countries the rate is more than four times higher. Removing mangroves also disturbs the sediments beneath them, releasing trace metals into the water. Restoration projects have multiplied, but their record is mixed: planting the wrong species in the wrong place, or without the support of local people, frequently fails. The most successful schemes begin not with seedlings but with restoring the natural flow of water, after which the forest often returns by itself.
`,
qs: [
  { t: 'head', q: 'Heading cho đoạn A', a: 0, why: 'Phân bố và diện tích.' },
  { t: 'head', q: 'Heading cho đoạn B', a: 2, why: 'Thích nghi với nước mặn.' },
  { t: 'head', q: 'Heading cho đoạn C', a: 3, why: 'Bảo vệ bờ biển (và nursery — nhưng ý chính là bảo vệ/vai trò của rễ).' },
  { t: 'head', q: 'Heading cho đoạn D', a: 4, why: 'Carbon lưu trữ không tương xứng với diện tích.' },
  { t: 'head', q: 'Heading cho đoạn E', a: 5, why: 'Mất rừng tiếp diễn và giới hạn của trồng lại.' },
  { t: 'fill', q: 'Notes — Global area (2025 estimate): about ___ million hectares', a: ['15.9'], limit: 'A NUMBER', why: 'Đoạn A.' },
  { t: 'fill', q: 'Country with largest area: ___', a: ['indonesia'], limit: 'ONE WORD', why: 'Đoạn A.' },
  { t: 'fill', q: 'Aerial roots can exceed ___ metres in some species', a: ['three', '3'], limit: 'A NUMBER', why: 'Đoạn B.' },
  { t: 'fill', q: 'Floating seedlings can survive at sea for up to ___', a: ['a year', 'one year', '1 year'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn B.' },
  { t: 'fill', q: 'Number of large marine animal species recorded using mangroves: ___', a: ['174'], limit: 'A NUMBER', why: 'Đoạn C.' },
  { t: 'fill', q: 'Carbon stored in 2012: ___ billion tonnes', a: ['4.19'], limit: 'A NUMBER', why: 'Đoạn D.' },
  { t: 'fill', q: 'Successful restoration starts by restoring the natural flow of ___', a: ['water'], limit: 'ONE WORD', why: 'Đoạn E.' }
]},

{ id: 'rw6', title: 'Four Days a Week', types: 'Y/N/NG · Matching information · (nguồn Wikipedia)', words: 500, minutes: 16, src: WK2('Four-day workweek', 'Four-day_workweek'),
paras: ['A', 'B', 'C', 'D', 'E'],
text: `
**A** In 1930 the economist John Maynard Keynes predicted that, within a few generations, technology would make a fifteen-hour working week possible. Technology arrived; the fifteen-hour week did not. The United States came close to legislating a thirty-hour week in 1933, but the bill collapsed as policy turned towards creating jobs rather than shortening them. For most of the following century the five-day, forty-hour week remained the standard against which everything else was measured.

**B** Interest revived after the pandemic of 2020, when burnout and the demand for flexibility became impossible for employers to ignore. The model most advocates now favour is described as 100-80-100: workers receive 100 per cent of their pay for 80 per cent of their previous hours, in exchange for maintaining 100 per cent of their output. It should be distinguished from the compressed week, in which forty hours are squeezed into four ten-hour days, and from arrangements in which a fifth day is simply unpaid. I think the distinction matters more than it usually gets credit for: compressing hours changes little except the length of each day, whereas cutting them forces an organisation to ask what the fifth day was actually for.

**C** The largest trials have been encouraging. In Iceland, between 2015 and 2019, around 2,500 public-sector workers moved to a thirty-five-hour week on full pay; well-being improved, stress fell, and productivity stayed level or rose in most workplaces. By the end of the trial some 86 per cent of the country's workforce had negotiated shorter hours. In the United Kingdom, 61 companies with almost 3,000 employees adopted the 100-80-100 model from June to December 2022. Revenue over the period was, on average, more than a third higher than a year earlier, staff turnover fell sharply, and 56 of the 61 firms chose to continue. When Microsoft's Japanese subsidiary closed its offices on Fridays for a month in 2019, shortening meetings to thirty minutes at the same time, it reported electricity costs down 23 per cent and sales per employee up 40 per cent.

**D** Such figures should be read with some care. The companies that volunteer for trials are, almost by definition, those that expect to benefit, and most are office-based organisations with plenty of unproductive time to remove. Researchers who have followed more than two hundred participating firms report consistent gains in retention and in every measure of well-being they track, but they also note that the productivity results have not been tested in sectors where there is little slack to cut. A nurse or a bus driver cannot do five days' work in four by holding shorter meetings.

**E** The evidence from outside the office is indeed less rosy. Studies of American school districts that moved to a four-day week found slightly lower reading and mathematics scores. A pilot in the Spanish city of Valencia recorded increased tobacco and alcohol consumption alongside the welcome rise in leisure time, and a fall in retail sales. In my view these findings do not refute the idea so much as define its limits: the four-day week is a powerful tool for a particular kind of work, and a poor fit for the rest. The honest position is to adopt it where the fifth day was wasted, and to stop pretending it can be adopted everywhere.
`,
qs: [
  { t: 'ynng', q: 'The writer believes the difference between a compressed week and a shortened week is underestimated.', a: 'YES', why: '"matters more than it usually gets credit for".' },
  { t: 'ynng', q: 'The writer thinks the Icelandic trial was poorly designed.', a: 'NOT GIVEN', why: 'Không có đánh giá về thiết kế thử nghiệm Iceland.' },
  { t: 'ynng', q: 'The writer suggests that companies joining trials are not typical of all employers.', a: 'YES', why: '"almost by definition, those that expect to benefit".' },
  { t: 'ynng', q: 'The writer believes the four-day week should be introduced in all sectors.', a: 'NO', why: '"stop pretending it can be adopted everywhere".' },
  { t: 'ynng', q: 'The writer thinks the Valencia findings prove the four-day week is a bad idea.', a: 'NO', why: '"do not refute the idea so much as define its limits".' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a definition of the model preferred by supporters?', a: 1, why: 'Đoạn B: 100-80-100.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: evidence of negative effects on children\'s education?', a: 4, why: 'Đoạn E.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a prediction that did not come true?', a: 0, why: 'Đoạn A: Keynes.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a reason why trial results may be unrepresentative?', a: 3, why: 'Đoạn D.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a company that reduced energy costs?', a: 2, why: 'Đoạn C: Microsoft Japan, −23%.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a proposed law that failed?', a: 0, why: 'Đoạn A: 1933 bill.' }
]},

{ id: 'rw7', title: 'The Cost of a Short Night', types: 'Sentence completion · Multiple choice · (nguồn Wikipedia)', words: 480, minutes: 15, src: WK2('Sleep deprivation', 'Sleep_deprivation'),
text: `
Roughly one adult in three does not get enough sleep. The figure is striking because the recommendation is not demanding: for adults between 18 and 64, health authorities advise seven to nine hours a night, and the US National Sleep Foundation treats seven as the minimum. School-aged children need nine to eleven. Yet college students, in one widely cited survey, averaged under six, and the deficit, unlike a missed meal, does not disappear overnight. Lost sleep accumulates, so that a week of six-hour nights leaves the body in a state researchers compare to having stayed awake for two nights in a row.

The causes are familiar. Shift work disrupts the body's internal clock; about one shift worker in ten has a diagnosable sleep disorder as a result. Screens are a newer culprit: the blue light they emit suppresses melatonin, the hormone that signals night, and delays the onset of sleep. One study found that households with broadband internet slept about 25 minutes less than those without, and another, in Saudi Arabia, that people who used a smartphone for more than an hour at bedtime were more than seven times as likely to report poor sleep. Caffeine, alcohol, pain and anxiety all play their part.

The most immediate effect is on attention. In laboratory tests, lapses of attention increase steadily as sleep decreases, and many of them are "microsleeps", moments of unconsciousness lasting a few seconds of which the person is unaware. This has consequences on the road. Drivers who had been awake for 17 to 19 hours performed worse than drivers with a blood-alcohol level of 0.05 per cent, the legal limit in much of Europe and Australia; at 21 hours awake, performance matched 0.08 per cent, the limit in the United States and Britain. Driver fatigue is involved in about one in five serious road injuries. Memory suffers too, because the processes by which the brain consolidates new information take place largely during sleep.

The longer-term costs are physical. Sleep loss raises levels of ghrelin, the hormone that produces hunger, and lowers leptin, the hormone that signals fullness, which helps explain why short sleepers eat more and gain weight. In a study of nearly half a million British adults, those sleeping less than six hours had a 20 per cent higher risk of heart attack over seven years. The immune system weakens: people who sleep less than six hours catch colds more often and produce fewer antibodies after vaccination. Experimental restriction of sleep impairs the body's handling of glucose within days.

What helps? The honest answer from sleep medicine is unglamorous: sleep more. Where that is prevented by insomnia, a structured form of behavioural therapy is the recommended first treatment, well ahead of medication. The familiar advice about dark rooms, fixed bedtimes and no late coffee is reasonable but, on its own, has proved less effective than its popularity suggests. Caffeine can restore alertness for a night or two but loses its power when relied on daily. Perhaps the most useful finding is the simplest: people who are chronically short of sleep consistently rate themselves as less impaired than their test results show. The tired brain is a poor judge of its own tiredness.
`,
qs: [
  { t: 'fill', q: 'For adults aged 18–64, the recommended amount of sleep is ___ hours. (NO MORE THAN THREE WORDS)', a: ['seven to nine', '7 to 9', '7–9', 'seven to nine hours'], limit: 'NO MORE THAN THREE WORDS', why: 'Đoạn 1.' },
  { t: 'fill', q: 'About one in ten shift workers has a diagnosable ___. (NO MORE THAN TWO WORDS)', a: ['sleep disorder'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 2.' },
  { t: 'fill', q: 'Blue light suppresses ___, the hormone that signals night. (ONE WORD)', a: ['melatonin'], limit: 'ONE WORD', why: 'Đoạn 2.' },
  { t: 'fill', q: 'Brief, unnoticed moments of unconsciousness are called ___. (ONE WORD)', a: ['microsleeps'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'After 21 hours awake, driving performance matched a blood-alcohol level of ___ per cent. (A NUMBER)', a: ['0.08'], limit: 'A NUMBER', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Sleep loss lowers ___, the hormone that signals fullness. (ONE WORD)', a: ['leptin'], limit: 'ONE WORD', why: 'Đoạn 4.' },
  { t: 'mc', q: 'Why does a week of short nights have such a strong effect?', o: ['Because the body cannot sleep more than eight hours', 'Because lost sleep builds up over time', 'Because weekends are too short'], a: 1, why: '"Lost sleep accumulates".' },
  { t: 'mc', q: 'The British study of nearly half a million adults found that sleeping under six hours was linked to', o: ['a 20% higher risk of heart attack', 'a 7-fold risk of poor sleep', 'lower antibody levels'], a: 0, why: 'Đoạn 4.' },
  { t: 'mc', q: 'According to the passage, the standard advice about dark rooms and fixed bedtimes is', o: ['the most effective treatment', 'reasonable but less effective on its own than people think', 'harmful'], a: 1, why: 'Đoạn 5.' },
  { t: 'mc', q: 'What does the writer consider the most useful finding?', o: ['Caffeine works for a night or two', 'Sleep-deprived people underestimate their own impairment', 'Behavioural therapy beats medication'], a: 1, why: '"Perhaps the most useful finding is the simplest".' }
]},

{ id: 'rw8', title: 'The Machine That Made Readers', types: 'Summary completion (word list) · T/F/NG · (nguồn Wikipedia)', words: 490, minutes: 15, src: WK2('Printing press', 'Printing_press'),
wordlist: ['clay', 'metal', 'wine', 'paper', 'alphabet', 'characters', 'faster', 'slower', 'Latin', 'vernacular', 'cities', 'monasteries'],
text: `
Johannes Gutenberg did not invent printing. Movable type had been used in China since the eleventh century, when Bi Sheng made individual characters from baked clay, and the oldest surviving book printed with metal type, the Jikji, was produced in Korea in 1377, more than sixty years before Gutenberg's press. What the Mainz goldsmith did, around 1440, was combine four existing technologies into a system: the screw press, which Romans had used for a thousand years to crush grapes and olives; movable type, which he cast from an alloy of lead, tin and antimony; the bound book; and paper, by then produced mechanically in European mills. He also developed an oil-based ink that adhered to metal where water-based inks did not.

One reason the system flourished in Europe rather than Asia was the script. A Chinese printer needed thousands of distinct characters, and a full set of type was a major investment; Gutenberg's type case held around 290 pieces. With a small alphabet, a page could be set, printed and broken up for reuse in hours. By 1480 presses were operating in 110 European towns, and by 1500 in about 270. The books printed in that first half-century, known as incunabula, ran to some 28,000 editions and perhaps 20 million copies; by 1600 the total had reached an estimated 150 to 200 million. A workshop around that date could produce 1,500 to 3,600 impressions in a day, far beyond what a scribe or a woodblock printer could manage.

The effects were not immediate, but they were profound. Cheaper books fed a slow rise in literacy over the following two centuries, and the historian Elizabeth Eisenstein described a shift from a hearing public, which received texts read aloud, to a reading public. Reading became silent and private. Books acquired page numbers, tables of contents and indexes, devices that assume a reader who navigates rather than listens. Scholars could for the first time compare identical copies of a text, and identical diagrams, in different cities; the scientific communities of the sixteenth and seventeenth centuries were built on that possibility.

Religion felt the change most sharply. Martin Luther became the most published author in Europe within three years of 1517; some 300,000 copies of his writings circulated between 1518 and 1520. Economists have since tried to measure the connection. One study found that cities with a press before 1500 were about 52 per cent more likely to have adopted Protestantism by 1530; another that such cities grew roughly 60 per cent faster over the sixteenth century than comparable towns without one. Historians now treat the press as one cause among several, but not a minor one.

Finally, print changed the languages people read. Latin, the common tongue of educated Europe, gave way in the bookshops to French, German, English and Italian, and printers, seeking the widest market, settled on standard spellings and forms. Two French historians went so far as to argue that printing did more than any other single factor to create the modern national languages. Governments noticed. Within a century they were using the press for propaganda and licensing it to control dissent, with limited success: a printed sheet is easy to carry across a border.
`,
qs: [
  { t: 'sel', list: 'wordlist', q: 'Summary: The earliest movable type, made in China, used (1) ___ characters.', a: 0, why: 'baked clay.' },
  { t: 'sel', list: 'wordlist', q: 'The Korean Jikji of 1377 was printed with (2) ___ type.', a: 1, why: 'metal.' },
  { t: 'sel', list: 'wordlist', q: 'Gutenberg adapted a press that Romans had used to make (3) ___.', a: 2, why: 'crush grapes → wine (and olives → oil).' },
  { t: 'sel', list: 'wordlist', q: 'European printing spread partly because the Latin (4) ___ needed far fewer pieces of type than Chinese script.', a: 4, why: 'alphabet.' },
  { t: 'sel', list: 'wordlist', q: 'Over time, books in (5) ___ gave way to books in national languages.', a: 8, why: 'Latin → vernacular.' },
  { t: 'sel', list: 'wordlist', q: 'Studies suggest that (6) ___ with early presses grew faster and were more likely to become Protestant.', a: 10, why: 'cities.' },
  { t: 'tfng', q: 'Gutenberg invented the oil-based ink used with metal type.', a: 'TRUE', why: '"He also developed an oil-based ink".' },
  { t: 'tfng', q: 'By 1500, printing had reached about 270 European towns.', a: 'TRUE', why: 'Đoạn 2.' },
  { t: 'tfng', q: 'Literacy rose rapidly within a decade of Gutenberg\'s press.', a: 'FALSE', why: '"slow rise… over the following two centuries".' },
  { t: 'tfng', q: 'Luther wrote more books than any other author in history.', a: 'NOT GIVEN', why: 'Chỉ nói "most published author in Europe" trong thời kỳ đó.' },
  { t: 'tfng', q: 'Historians agree that the printing press was the sole cause of the Reformation.', a: 'FALSE', why: '"one cause among several".' },
  { t: 'tfng', q: 'Government attempts to control printing were largely successful.', a: 'FALSE', why: '"with limited success".' }
]}
);
