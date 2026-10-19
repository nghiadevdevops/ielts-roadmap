/* ===== Bài đọc có nguồn (phần 1): viết lại từ Wikipedia, giấy phép CC BY-SA 4.0 =====
   Mỗi bài ghi src {name,url,license}. Văn bản là bản viết lại/rút gọn theo số liệu trong bài gốc (dẫn xuất được phép theo CC BY-SA, có ghi nguồn). */
const WK = (title, slug) => ({ name: 'Wikipedia: ' + title, url: 'https://en.wikipedia.org/wiki/' + slug, license: 'CC BY-SA 4.0 — văn bản đã viết lại và rút gọn cho mục đích luyện đọc' });
window.READING.push(
{ id: 'rw1', title: 'Why Cities Are Hotter Than the Countryside', types: 'T/F/NG · Short answer · (nguồn Wikipedia)', words: 470, minutes: 15, src: WK('Urban heat island', 'Urban_heat_island'),
text: `
In the 1810s, the amateur meteorologist Luke Howard compared temperature records from central London with those from the surrounding countryside and found that the city was, on average, about 2.1 °C warmer at night. He had identified what is now called the urban heat island: the tendency of a built-up area to be warmer than the rural land around it. Two centuries later, the effect has been measured in almost every large city on Earth.

The main cause is not, as is often assumed, the heat produced by traffic, factories and air conditioners, although that contributes. It is the surface of the city itself. Dark roads, roofs and pavements absorb far more sunlight than fields or forests, and concrete and asphalt store that heat and release it slowly after dark. Tall buildings trap radiation between their walls and block the wind that would otherwise carry warm air away. Trees and water, which cool the air through evaporation, are scarce. In the United States, urban areas are typically between 1 and 7 °F warmer than their surroundings during the day, and the difference is usually largest at night, when calm air prevents the heat from escaping.

The consequences are not trivial. Heat islands make heatwaves longer and more intense and deny residents the cooler nights that allow the body to recover. In the United States, extreme heat kills more people than hurricanes, floods and tornadoes combined. Higher temperatures also speed up the chemical reactions that form ground-level ozone, worsening air quality. The cost of cooling buildings rises: in 2000, air conditioning in Los Angeles was estimated to cost around 100 million dollars a year, and the waste heat from those units raises night-time temperatures by as much as a further degree.

The burden is unevenly shared. A study of 108 American cities found that neighbourhoods which had been marked as undesirable for investment in the 1930s were, on average, 2.6 °C hotter than other districts, largely because they had fewer trees and more paved surfaces. In Bandung, Indonesia, researchers measured a 7 °C gap between the hottest and coolest neighbourhoods of the same city.

The remedies are well understood, if not always applied. Street trees can lower air temperature by several degrees and surface temperature by far more. Light-coloured or reflective roofs send sunlight back into the sky; a simulation of a 2018 London heatwave suggested that painting roofs white would have cut average outdoor temperatures by 1.2 °C, more than either extra tree cover or solar panels. Pale pavements reflect up to half as much again as asphalt. Green roofs insulate buildings and cool the air above them. None of these measures is expensive compared with the cost of the heat they prevent, and cities from Phoenix to Paris have begun to adopt them. The challenge, as with Howard's original observation, is less in understanding the problem than in acting on it.
`,
qs: [
  { t: 'tfng', q: 'Luke Howard was a professional scientist.', a: 'FALSE', why: '"amateur meteorologist".' },
  { t: 'tfng', q: 'Heat from traffic and machinery is the main cause of urban heat islands.', a: 'FALSE', why: 'Main cause is the surface of the city; waste heat "contributes".' },
  { t: 'tfng', q: 'The temperature gap between city and countryside is usually greatest at night.', a: 'TRUE', why: '"usually largest at night".' },
  { t: 'tfng', q: 'Air conditioning in Los Angeles cost more in 2020 than in 2000.', a: 'NOT GIVEN', why: 'Chỉ có số liệu năm 2000.' },
  { t: 'tfng', q: 'Neighbourhoods denied investment in the 1930s now have more trees than other areas.', a: 'FALSE', why: 'Ngược lại: fewer trees.' },
  { t: 'tfng', q: 'In the London simulation, white roofs were more effective than solar panels at reducing temperature.', a: 'TRUE', why: '"more than either extra tree cover or solar panels".' },
  { t: 'tfng', q: 'Paris has planted more trees than Phoenix.', a: 'NOT GIVEN', why: 'Hai thành phố chỉ được nêu là đã bắt đầu áp dụng biện pháp.' },
  { t: 'fill', q: 'In which decade did Howard make his observations? (NO MORE THAN TWO WORDS)', a: ['the 1810s', '1810s'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 1.' },
  { t: 'fill', q: 'What type of pollution forms faster at higher temperatures? (NO MORE THAN TWO WORDS)', a: ['ground-level ozone', 'ozone'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 3.' },
  { t: 'fill', q: 'How many American cities were included in the study of former investment zones? (A NUMBER)', a: ['108'], limit: 'A NUMBER', why: 'Đoạn 4.' },
  { t: 'fill', q: 'By how much would white roofs have lowered average temperatures in the London simulation? (NO MORE THAN TWO WORDS)', a: ['1.2 °c', '1.2 c', '1.2 degrees', '1.2'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 5.' }
]},

{ id: 'rw2', title: 'Remembering on Schedule: The Science of Spaced Repetition', types: 'Matching features · Sentence completion · (nguồn Wikipedia)', words: 480, minutes: 15, src: WK('Spaced repetition', 'Spaced_repetition'),
features: ['Hermann Ebbinghaus', 'C. A. Mace', 'Paul Pimsleur', 'Sebastian Leitner', 'Landauer and Bjork'],
text: `
Anyone who has crammed for an examination knows the result: the material is available on the morning of the test and gone a week later. The reason was first described in the 1880s by the German psychologist Hermann Ebbinghaus, who memorised lists of nonsense syllables and tested himself at intervals. He found that forgetting follows a predictable curve, steep at first and then flattening, and he proposed that reviewing material at well-chosen moments could slow the loss. This insight, that *when* you review matters as much as *how often*, is the basis of a technique now called spaced repetition.

The idea developed slowly. In his 1932 book on study methods, the British educationalist C. A. Mace recommended that revision sessions be spaced at gradually increasing intervals. In 1939, an American researcher tested the approach on more than 3,600 schoolchildren learning science facts, with positive results, but the work attracted little interest until the late 1960s, when cognitive psychologists returned to the question of how the timing of repetitions affects recall. Thomas Landauer and Robert Bjork, in experiments published in 1978, used the task of matching faces to names to show that expanding intervals between tests improved long-term memory.

Practical systems appeared in parallel. The language teacher Paul Pimsleur published a schedule of "graduated interval recall" in 1967, with repetitions beginning only seconds after first exposure and stretching, in principle, to years; it remains the basis of the audio courses that bear his name. In 1973, the German science journalist Sebastian Leitner proposed a system for paper flashcards that needed no calculation at all. Cards are kept in a series of numbered boxes. A card answered correctly moves to the next box, which is reviewed less often; a card answered wrongly returns to the first box. The method is still widely used because it is simple enough to run by hand.

Computers removed that constraint. From the 1980s, software could track thousands of cards individually and adjust each card's interval to hit a target, typically that about 90 per cent of items can be recalled at any given time. The algorithms developed for the SuperMemo program, and more recently the open-source scheduler adopted by the popular application Anki in 2023, estimate for each card how quickly a particular learner is likely to forget it.

The evidence that spacing works is strong and has been confirmed by meta-analyses across subjects from vocabulary to mathematics. What remains uncertain is *why* expanding intervals help. The usual explanation, that harder retrieval produces stronger memories, has surprisingly little direct support; some studies find that uniform spacing works just as well, and others that the ideal schedule varies from person to person. For the learner, however, the practical conclusion is the same as Ebbinghaus reached: review before you forget, but not long before, and let the gaps grow.
`,
qs: [
  { t: 'sel', list: 'features', q: 'Who first described the shape of the forgetting curve?', a: 0, why: 'Ebbinghaus, 1880s.' },
  { t: 'sel', list: 'features', q: 'Who designed a method that uses physical boxes?', a: 3, why: 'Leitner, 1973.' },
  { t: 'sel', list: 'features', q: 'Whose schedule starts with repetitions only seconds apart?', a: 2, why: 'Pimsleur, graduated interval recall.' },
  { t: 'sel', list: 'features', q: 'Who recommended increasing intervals in a book about how to study?', a: 1, why: 'Mace, 1932.' },
  { t: 'sel', list: 'features', q: 'Who used faces and names in their experiments?', a: 4, why: 'Landauer and Bjork, 1978.' },
  { t: 'fill', q: 'Ebbinghaus tested his own memory using lists of ___. (NO MORE THAN TWO WORDS)', a: ['nonsense syllables'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 1.' },
  { t: 'fill', q: 'The 1939 study involved more than ___ schoolchildren. (A NUMBER)', a: ['3,600', '3600'], limit: 'A NUMBER', why: 'Đoạn 2.' },
  { t: 'fill', q: 'In the Leitner system, a wrongly answered card goes back to the ___. (NO MORE THAN TWO WORDS)', a: ['first box'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Software typically aims for a recall rate of about ___ per cent. (A NUMBER)', a: ['90'], limit: 'A NUMBER', why: 'Đoạn 4.' },
  { t: 'fill', q: 'The common explanation that difficult ___ strengthens memory has little direct evidence. (ONE WORD)', a: ['retrieval'], limit: 'ONE WORD', why: 'Đoạn 5.' }
]},

{ id: 'rw3', title: 'The Patch That Is Not an Island', types: 'T/F/NG · Multiple choice · (nguồn Wikipedia)', words: 480, minutes: 15, src: WK('Great Pacific Garbage Patch', 'Great_Pacific_Garbage_Patch'),
text: `
In 1997, the sailor Charles Moore was returning from a yacht race across the Pacific when he steered through a region of ocean where, for days, he saw pieces of plastic floating past the boat. His account drew public attention to what the oceanographer Curtis Ebbesmeyer named the Eastern Garbage Patch, although scientists at the American ocean agency NOAA had predicted its existence in a paper nine years earlier. The region lies in the North Pacific roughly between 135° and 155° west and 35° and 42° north, where circulating currents draw in debris from the coasts of Asia and North America and hold it in the centre.

The name has caused as much confusion as concern. Many people imagine a floating island of rubbish that could be seen from space. It cannot. The great majority of the material consists of fragments smaller than a fingernail, suspended in the upper layers of the water and invisible from a ship's deck, let alone a satellite. For this reason the patch's size cannot be photographed; it must be estimated by towing fine nets through sample areas, and because the debris is unevenly distributed and there is no agreed concentration at which "ocean" becomes "patch", estimates vary widely. The most detailed survey, published in 2018 and combining net samples with aerial scans, put the area at about 1.6 million square kilometres and the mass of plastic at around 80,000 tonnes, but other analyses from the same period ranged from 45,000 to 129,000 tonnes.

The composition is revealing. By number, about 94 per cent of the estimated 1.8 trillion pieces are microplastics, yet these account for only around 8 per cent of the mass. The weight is in larger objects, and a striking share of those are fishing equipment: one 2018 analysis found that synthetic nets alone made up nearly half the patch's mass, and a 2022 study of items larger than five centimetres concluded that fishing and aquaculture gear, together with food packaging, represented about 90 per cent of the debris by weight.

The patch is also, unexpectedly, a habitat. A 2023 study found coastal species such as anemones and small crustaceans not merely surviving on the floating plastic but reproducing, thousands of kilometres from any shore. Some biologists worry that these hitchhikers could compete with open-ocean species; others point out that removing the plastic would destroy the communities now living on it.

Removal is nevertheless under way. The Dutch organisation The Ocean Cleanup deployed its first collection system in 2018 and, after several redesigns, reported by late 2024 that it had removed roughly half of one per cent of the accumulated material. The figure is self-reported, and critics note that it represents a tiny fraction of what arrives each year. The patch, in other words, is neither the solid island of popular imagination nor a problem that a fleet of boats can quickly solve. It is a thin, vast soup, and most of the plastic in it was once somebody's fishing net.
`,
qs: [
  { t: 'tfng', q: 'Charles Moore was the first person to predict the existence of the garbage patch.', a: 'FALSE', why: 'NOAA paper predicted it nine years earlier.' },
  { t: 'tfng', q: 'The patch can be seen in satellite images.', a: 'FALSE', why: '"It cannot."' },
  { t: 'tfng', q: 'Scientists agree on the concentration of plastic that defines the edge of the patch.', a: 'FALSE', why: '"there is no agreed concentration".' },
  { t: 'tfng', q: 'The 2018 survey used aircraft as well as nets.', a: 'TRUE', why: '"combining net samples with aerial scans".' },
  { t: 'tfng', q: 'Most of the plastic by weight comes from household rubbish.', a: 'FALSE', why: 'Fishing gear dominates by mass.' },
  { t: 'tfng', q: 'The Ocean Cleanup is funded by the Dutch government.', a: 'NOT GIVEN', why: 'Chỉ nói tổ chức Hà Lan; không nói nguồn tài trợ.' },
  { t: 'mc', q: 'Why is the size of the patch difficult to measure?', o: ['Ships are not allowed to enter it', 'The debris is mostly tiny, scattered and below the surface', 'It moves to a different ocean each year'], a: 1, why: 'Đoạn 2.' },
  { t: 'mc', q: 'Microplastics make up about 94% of the pieces but only about', o: ['8% of the mass', '50% of the mass', '90% of the mass'], a: 0, why: 'Đoạn 3.' },
  { t: 'mc', q: 'The 2023 study was surprising because it showed that coastal species', o: ['had disappeared from the patch', 'were breeding far from land on the plastic', 'were eating the plastic'], a: 1, why: 'Đoạn 4.' },
  { t: 'mc', q: 'The writer\'s overall view of The Ocean Cleanup\'s progress is that it is', o: ['a complete solution', 'real but very small relative to the problem', 'a fraud'], a: 1, why: '"a tiny fraction of what arrives each year".' },
  { t: 'mc', q: 'The final sentence suggests that the most effective way to shrink the patch would be to', o: ['build more collection boats', 'stop fishing gear entering the sea', 'ban food packaging'], a: 1, why: '"most of the plastic… was once somebody\'s fishing net".' }
]},

{ id: 'rw4', title: 'A Computer from the Ancient World', types: 'Summary completion (từ trong bài) · Multiple choice · (nguồn Wikipedia)', words: 470, minutes: 15, src: WK('Antikythera mechanism', 'Antikythera_mechanism'),
text: `
In 1900, a crew of sponge divers from the Greek island of Symi, sheltering from a storm, discovered the wreck of a Roman cargo ship at a depth of about 45 metres off the island of Antikythera. Over the following year they brought up statues, pottery, glass and coins. Among the finds was a lump of corroded bronze and wood that nobody thought worth examining. It sat in the National Archaeological Museum in Athens until May 1902, when an archaeologist named Valerios Stais noticed that the rock had a gear wheel embedded in it.

What Stais had seen was part of the most sophisticated mechanical device to survive from the ancient world. Built around the second century BC, some two thousand years before anything comparable appeared in Europe, the Antikythera mechanism was a geared calculator of the heavens. A hand crank, now lost, turned a train of interlocking bronze gears; pointers on the front showed the positions of the Sun and Moon in the zodiac and the phase of the Moon, while dials on the back tracked a 235-month lunar calendar and the cycle used to predict eclipses. A smaller dial counted the four-year cycle of the Greek athletic games. The Moon's irregular speed across the sky was reproduced by an ingenious arrangement of one gear mounted off-centre on another.

For decades many scholars doubted that the object could be genuine, judging it too advanced for its time. Serious study began in 1951, when the historian Derek de Solla Price took up the puzzle. In 1971 he and a Greek physicist made X-ray and gamma-ray images of the 82 surviving fragments, and Price published his reconstruction in 1974. The decisive advance came in 2005, when a team led by researchers at Cardiff University used high-resolution X-ray tomography to read inscriptions hidden inside the corroded metal, effectively recovering the user's manual. The scans suggest that the complete device had about 35 gears, of which 30 survive; the largest is roughly 13 centimetres across and originally carried 223 teeth, each cut by hand and therefore slightly uneven.

That unevenness matters. In 2025 one research group argued that the manufacturing errors were large enough that the mechanism could not have worked as intended, though they acknowledged that their scans of the damaged fragments might themselves be inaccurate. Earlier reconstructions had reached a gentler verdict: that the device embodied brilliant theory but, with hand-cut gears and considerable friction, probably did not perform very well in practice.

Its significance does not depend on whether it ran smoothly. The mechanism shows that Hellenistic engineers could translate astronomical theory into precise machinery, a skill that would not be matched in Europe until the astronomical clocks of the fourteenth century. It is also alone. No other device of its kind survives, and no ancient text describes one in detail, which is why one pair of researchers called it the sole witness to a lost history of brilliant engineering.
`,
qs: [
  { t: 'fill', q: 'Summary: The wreck was found by sponge divers from the island of (1) ___. (ONE WORD)', a: ['symi'], limit: 'ONE WORD', why: 'Đoạn 1.' },
  { t: 'fill', q: 'The lump of bronze was ignored until 1902, when Valerios Stais saw a (2) ___ in it. (NO MORE THAN TWO WORDS)', a: ['gear wheel', 'gear'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 1.' },
  { t: 'fill', q: 'The device was operated by a (3) ___ that no longer exists. (NO MORE THAN TWO WORDS)', a: ['hand crank', 'crank'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 2.' },
  { t: 'fill', q: 'A dial on the back followed a lunar calendar of (4) ___ months. (A NUMBER)', a: ['235'], limit: 'A NUMBER', why: 'Đoạn 2.' },
  { t: 'fill', q: 'In 1971 Price made X-ray images of the (5) ___ fragments. (A NUMBER)', a: ['82'], limit: 'A NUMBER', why: 'Đoạn 3.' },
  { t: 'fill', q: 'The 2005 scans revealed hidden (6) ___, like a user\'s manual. (ONE WORD)', a: ['inscriptions'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'The largest gear originally had (7) ___ teeth. (A NUMBER)', a: ['223'], limit: 'A NUMBER', why: 'Đoạn 3.' },
  { t: 'mc', q: 'Why did scholars initially doubt the mechanism was genuine?', o: ['It was found in a Roman ship', 'It seemed too advanced for its period', 'It was made of wood'], a: 1, why: 'Đoạn 3.' },
  { t: 'mc', q: 'What did the 2025 research group conclude?', o: ['The mechanism worked perfectly', 'Manufacturing errors may have stopped it working as intended', 'The device was a modern fake'], a: 1, why: 'Đoạn 4, with the caveat about scan accuracy.' },
  { t: 'mc', q: 'According to the writer, the mechanism is important mainly because it', o: ['was accurate', 'shows that theory could be turned into precise machinery in antiquity', 'was found with gold coins'], a: 1, why: 'Đoạn 5.' },
  { t: 'mc', q: 'Comparable devices appeared in Europe', o: ['in the 2nd century BC', 'in the 14th century', 'in 1902'], a: 1, why: 'Astronomical clocks of the 14th century.' }
]}
);
