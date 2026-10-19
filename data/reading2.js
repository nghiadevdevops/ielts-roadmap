/* ===== Bài đọc bổ sung (phần 1): rd4–rd8 =====
   Dạng câu hỏi mới: t:'sel' + list:'paras'|'features'|'endings'|'wordlist' (chọn từ danh sách của bài) */
window.READING.push(
{ id: 'rd4', title: 'Bees in the City', types: 'Matching information · Short answer', words: 420, minutes: 13,
paras: ['A', 'B', 'C', 'D', 'E', 'F'],
text: `
**A** Twenty years ago, a beehive on a city rooftop would have seemed eccentric. Today, hotels, office blocks and schools in London, Paris, Tokyo and Melbourne keep hives as a matter of routine, and urban beekeeping associations report waiting lists for their training courses. The trend began as a response to alarming reports of declining bee populations in the countryside, but it has developed its own momentum.

**B** Counter-intuitively, cities can be good places for bees. Farmland is increasingly dominated by a single crop, which flowers for only two or three weeks and is often treated with pesticides. A city, by contrast, offers parks, gardens, railway embankments and balcony flower boxes planted with hundreds of different species, so something is in bloom from early spring until late autumn. Studies in Paris found that urban hives produced, on average, more honey per year than those in the surrounding agricultural region.

**C** Honey from city hives also has a distinctive character. Because the bees visit so many different plants, the flavour changes from district to district and from month to month. One London beekeeper describes the honey from a hive near a park full of lime trees as tasting faintly of mint, while a hive three kilometres away, surrounded by gardens, produces something darker and richer. Restaurants have begun to advertise honey from their own roofs, in the same way that they promote vegetables from a named farm.

**D** Not everyone is enthusiastic. Some ecologists point out that honeybees are only one of several hundred bee species in a typical European country, and that many of the others, the solitary and bumble bees, are in far greater danger. When thousands of honeybees are introduced into a small area, they may compete with these wild species for the limited supply of pollen and nectar. A 2019 study in Paris concluded that in the most densely hived districts, wild bees were visiting significantly fewer flowers than elsewhere.

**E** There are also practical difficulties. A colony can contain fifty thousand insects, and when it swarms in early summer, a cloud of bees may settle on a bus stop or a neighbour's balcony. Most cities now require hives to be registered and keepers to complete a basic course, and some set a maximum number of hives per hectare. In Vienna, the city council publishes a map showing where new hives are and are not welcome.

**F** The most useful outcome of the movement may not be the honey at all. Beekeepers, almost without exception, become advocates for planting. They lobby councils to leave verges unmown, persuade schools to replace lawns with wildflower meadows and campaign against pesticide use in parks. These changes benefit every pollinating insect, not only the honeybee, and they would have been far harder to achieve without the thousands of city residents who now have a personal reason to care.
`,
qs: [
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a reason why urban honey varies in taste?', a: 2, why: 'Đoạn C: bees visit many different plants → flavour changes.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a comparison between the amount of honey produced in two locations?', a: 1, why: 'Đoạn B: Paris urban hives produced more honey than agricultural region.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: an example of how a city tells people where hives are allowed?', a: 4, why: 'Đoạn E: Vienna publishes a map.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: evidence that honeybees may harm other insects?', a: 3, why: 'Đoạn D: 2019 study, wild bees visiting fewer flowers.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: the original motivation for keeping bees in cities?', a: 0, why: 'Đoạn A: response to reports of declining bee populations.' },
  { t: 'sel', list: 'paras', q: 'Which paragraph contains: a claim that the main benefit of urban beekeeping is indirect?', a: 5, why: 'Đoạn F: "may not be the honey at all".' },
  { t: 'fill', q: 'What do farmers often apply to single-crop fields? (ONE WORD)', a: ['pesticides'], limit: 'ONE WORD', why: 'Đoạn B.' },
  { t: 'fill', q: 'What kind of tree gives some London honey a minty flavour? (ONE WORD)', a: ['lime'], limit: 'ONE WORD', why: 'Đoạn C: "lime trees".' },
  { t: 'fill', q: 'Approximately how many insects can one colony contain? (NO MORE THAN TWO WORDS)', a: ['fifty thousand', '50,000', '50000'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn E.' },
  { t: 'fill', q: 'What do beekeepers want schools to plant instead of grass? (NO MORE THAN TWO WORDS)', a: ['wildflower meadows', 'wildflowers'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn F: "replace lawns with wildflower meadows".' }
]},

{ id: 'rd5', title: 'Why Do We Yawn?', types: 'Matching features · T/F/NG', words: 440, minutes: 14,
features: ['Dr Helena Marsh', 'Professor Tomas Reyes', 'Dr Anika Bose'],
text: `
Yawning is one of the most familiar and least understood of human behaviours. Everyone does it, from unborn babies to the very old, and so do dogs, cats, birds and fish. Yet after more than a century of research, scientists still disagree about what, if anything, it is for.

The traditional explanation, still repeated in many textbooks, is that yawning increases the supply of oxygen to the brain when a person is tired or bored. Dr Helena Marsh, a physiologist at a Canadian university, set out in the 1990s to test this directly. She asked volunteers to breathe air with different levels of oxygen and carbon dioxide and counted how often they yawned. The results were clear: neither extra oxygen nor extra carbon dioxide had any effect on the frequency of yawning. "The oxygen theory is attractive because it is simple," Marsh wrote, "but there is no evidence for it, and quite a lot against."

A more recent idea comes from Professor Tomas Reyes, a neuroscientist who argues that yawning is a cooling mechanism. The brain, he points out, works best within a narrow temperature range, and a deep yawn draws a large volume of cooler air into the mouth and throat, close to the blood vessels that supply the brain. In support of this, his team found that people yawned far more often in mild weather than in either very hot or very cold conditions, and that holding a cold pack to the forehead almost eliminated yawning. Reyes accepts that this does not explain why yawning is contagious, but he regards the cooling function as its original purpose.

Dr Anika Bose, a psychologist, is more interested in that contagious quality. In her experiments, around half of adults yawned within five minutes of watching a video of someone else yawning, and the effect was strongest when the person on screen was a close friend or family member. Children under four, and adults with certain conditions affecting social understanding, were much less likely to catch a yawn. Bose therefore proposes that contagious yawning is a form of unconscious communication that helps a group to synchronise its behaviour, signalling that it is time to rest or to become alert together. She does not reject the cooling theory but considers it incomplete.

What the three researchers share is a conviction that yawning is not simply a sign of boredom. Marsh has shown what it does not do; Reyes has proposed a physical function; Bose a social one. It is possible that both are right, and that a behaviour which began as a way of regulating temperature later acquired a role in holding groups together. For a reflex that lasts about six seconds, it has proved remarkably difficult to pin down.
`,
qs: [
  { t: 'sel', list: 'features', q: 'Which researcher claims yawning helps regulate the temperature of the brain?', a: 1, why: 'Reyes: cooling mechanism.' },
  { t: 'sel', list: 'features', q: 'Which researcher found that the amount of oxygen breathed in made no difference to yawning?', a: 0, why: 'Marsh: oxygen/CO2 had no effect.' },
  { t: 'sel', list: 'features', q: 'Which researcher links yawning to relationships between people?', a: 2, why: 'Bose: contagious yawning strongest with friends/family.' },
  { t: 'sel', list: 'features', q: 'Which researcher admits their theory does not account for one feature of yawning?', a: 1, why: 'Reyes "accepts that this does not explain why yawning is contagious".' },
  { t: 'sel', list: 'features', q: 'Which researcher studied how age affects the response to seeing someone yawn?', a: 2, why: 'Bose: children under four less likely to catch a yawn.' },
  { t: 'tfng', q: 'Yawning has been observed in animals that live in water.', a: 'TRUE', why: 'Đoạn 1: "fish".' },
  { t: 'tfng', q: 'Marsh believes the oxygen theory is popular because it is easy to understand.', a: 'TRUE', why: '"attractive because it is simple".' },
  { t: 'tfng', q: 'People in very hot weather yawn more than people in mild weather.', a: 'FALSE', why: 'Ngược lại: yawned more in mild weather than in very hot or cold.' },
  { t: 'tfng', q: 'In Bose\'s experiments, most adults yawned after watching the video.', a: 'FALSE', why: '"around half" không phải most.' },
  { t: 'tfng', q: 'Bose\'s research was funded by a university.', a: 'NOT GIVEN', why: 'Không có thông tin về nguồn tài trợ.' },
  { t: 'tfng', q: 'The writer thinks the physical and social explanations may both be correct.', a: 'TRUE', why: 'Đoạn cuối: "It is possible that both are right".' }
]},

{ id: 'rd6', title: 'The Box That Changed the World', types: 'Summary completion (từ trong bài) · Multiple choice', words: 450, minutes: 14,
text: `
In April 1956, a converted oil tanker left the port of Newark, New Jersey, carrying fifty-eight metal boxes. Each box was thirty-three feet long and had been lifted straight from the back of a truck onto the ship by crane. Five days later, in Houston, the boxes were lifted off and placed on fifty-eight waiting trucks. Nobody in the crowd that watched the loading realised that they were witnessing the beginning of a revolution in world trade.

The man behind the voyage was Malcom McLean, a trucking company owner with no experience of shipping. His insight was not technical but economic. Until then, goods were shipped as "break-bulk" cargo: sacks, barrels, crates and bales of every size, each of which had to be carried into the hold by hand and packed by skilled dockworkers so that it would not shift at sea. Loading a medium-sized ship could take a week and employ hundreds of men, and the goods might be handled a dozen times between factory and customer. McLean calculated that in 1956, loading loose cargo cost around six dollars per ton. Loading his containers cost sixteen cents.

The idea was simple; making it work was not. Ships had to be redesigned with cells to hold the boxes, ports needed enormous cranes and acres of flat storage space, and, above all, everyone had to agree on the size of the box. For a decade, shipping lines and railways used incompatible containers, and a box that fitted one company's ship would not fit another's train. Only in the late 1960s did international negotiators settle on standard lengths of twenty and forty feet, with identical corner fittings so that any crane in the world could lift any container.

Once the standard existed, the effects were dramatic. Ports that had employed tens of thousands of dockworkers needed a few hundred crane operators. Old harbours in the centre of cities, such as London's docklands and Manhattan's piers, were too cramped for the new ships and closed within a few years, while new ports grew on cheap land far from city centres. Most importantly, the cost of moving goods fell so far that distance almost ceased to matter. A manufacturer could now assemble a product from parts made on three continents, and a shirt sewn in Asia could be sold in Europe for less than one made locally.

Economists still argue about how much of modern globalisation can be attributed to the container as opposed to lower tariffs and better communications. But the box's defenders point out that in 1956 international trade was dominated by raw materials, whereas today it is dominated by manufactured goods and components shipped between factories. That change, they say, would have been impossible while every sack still had to be lifted by hand.
`,
qs: [
  { t: 'fill', q: 'Summary: The first container voyage in 1956 carried 58 boxes, each 33 feet long, which were moved between truck and ship by (1) ___. (ONE WORD)', a: ['crane'], limit: 'ONE WORD', why: 'Đoạn 1.' },
  { t: 'fill', q: 'Before containers, goods travelled as "break-bulk" cargo and had to be packed by experienced (2) ___. (ONE WORD)', a: ['dockworkers'], limit: 'ONE WORD', why: 'Đoạn 2: "skilled dockworkers".' },
  { t: 'fill', q: 'McLean estimated that loading his containers cost (3) ___ per ton, compared with about six dollars for loose cargo. (NO MORE THAN TWO WORDS)', a: ['sixteen cents', '16 cents'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 2.' },
  { t: 'fill', q: 'For about ten years, different companies used containers that were (4) ___ with each other. (ONE WORD)', a: ['incompatible'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'The agreed standard included identical (5) ___ so any crane could lift any box. (NO MORE THAN TWO WORDS)', a: ['corner fittings'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 3.' },
  { t: 'mc', q: 'According to the writer, McLean\'s key contribution was', o: ['designing a new type of ship', 'understanding the cost of handling cargo', 'inventing the shipping crane'], a: 1, why: '"His insight was not technical but economic."' },
  { t: 'mc', q: 'Why did old city-centre ports close?', o: ['They were too small for container ships', 'Workers refused to use the new cranes', 'City governments wanted the land for housing'], a: 0, why: '"too cramped for the new ships".' },
  { t: 'mc', q: 'What point do supporters of the container\'s importance make about international trade?', o: ['It has grown mainly because of lower tariffs', 'It now consists largely of manufactured goods rather than raw materials', 'It is still dominated by raw materials'], a: 1, why: 'Đoạn cuối.' },
  { t: 'mc', q: 'What is the writer\'s attitude to the claim that the container caused globalisation?', o: ['Fully convinced', 'Dismissive', 'Balanced — presents the debate and the defenders\' argument'], a: 2, why: '"Economists still argue… But the box\'s defenders point out…"' }
]},

{ id: 'rd7', title: 'From Waste Paper to New Paper', types: 'Flow-chart completion · Sentence completion', words: 400, minutes: 12,
text: `
Paper is the most recycled material in many countries, with recovery rates above seventy per cent in parts of Europe and East Asia. The process by which a used newspaper becomes a new one is largely mechanical, but each stage removes a different kind of contamination, and the quality of the final product depends on how carefully the early stages are carried out.

Recycling begins at the point of collection. Household paper is gathered separately from other waste, since paper that has been in contact with food or liquids is difficult or impossible to recycle. At the recycling plant, the paper is sorted, by hand and by optical scanners, into grades: newspapers, office paper, cardboard and mixed paper are processed separately because they contain different fibres and different inks.

The sorted paper is then fed into a large vat called a pulper, where it is mixed with water and chemicals and agitated until it breaks down into a thick soup of individual fibres. Staples, plastic windows from envelopes, glue and other large contaminants are removed at this stage by screens, which allow the fibre mixture to pass through while trapping solid objects.

Next comes de-inking. The pulp is pumped into flotation tanks, where air is bubbled through it. Ink particles, which have been loosened by the chemicals in the pulper, attach themselves to the bubbles and rise to the surface as a grey foam, which is skimmed off. For high-quality white paper, the pulp may also be bleached at this stage, usually with hydrogen peroxide rather than the chlorine compounds used in the past.

The clean pulp is then refined: it is passed between rotating discs that beat and fray the fibres so that they bond more strongly to each other. Recycled fibres are shorter than new ones, because each cycle of pulping damages them, and refining partly compensates for this. In practice, a fibre can be recycled only five to seven times before it becomes too short to use, which is why most recycled paper contains a proportion of fresh wood pulp.

Finally, the refined pulp is sprayed onto a moving wire mesh, where most of the water drains away, and the resulting sheet is pressed between heavy rollers and dried over heated cylinders. The finished paper is wound onto reels weighing several tonnes, ready to be cut and printed. From collection bin to finished reel, the whole process typically takes less than two weeks.
`,
qs: [
  { t: 'fill', q: 'Flow-chart, stage 1: paper is collected separately and sorted into ___ by hand and by scanners. (ONE WORD)', a: ['grades'], limit: 'ONE WORD', why: 'Đoạn 2.' },
  { t: 'fill', q: 'Stage 2: paper is mixed with water and chemicals in a ___ and broken into fibres. (ONE WORD)', a: ['pulper'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Stage 2 (cont.): large contaminants are trapped by ___. (ONE WORD)', a: ['screens'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Stage 3: in flotation tanks, ink sticks to air ___ and rises to the surface. (ONE WORD)', a: ['bubbles'], limit: 'ONE WORD', why: 'Đoạn 4.' },
  { t: 'fill', q: 'Stage 3 (cont.): white paper may be bleached using hydrogen ___. (ONE WORD)', a: ['peroxide'], limit: 'ONE WORD', why: 'Đoạn 4.' },
  { t: 'fill', q: 'Stage 4: the pulp is refined between rotating ___ to strengthen fibre bonds. (ONE WORD)', a: ['discs'], limit: 'ONE WORD', why: 'Đoạn 5.' },
  { t: 'fill', q: 'Stage 5: pulp is sprayed onto a wire ___, pressed and dried. (ONE WORD)', a: ['mesh'], limit: 'ONE WORD', why: 'Đoạn 6.' },
  { t: 'fill', q: 'Paper that has touched food or ___ is hard to recycle. (ONE WORD)', a: ['liquids'], limit: 'ONE WORD', why: 'Đoạn 2.' },
  { t: 'fill', q: 'A fibre can usually be recycled a maximum of ___ times. (NO MORE THAN TWO WORDS)', a: ['seven', 'five to seven', '5 to 7', '7'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn 5: "five to seven times".' },
  { t: 'fill', q: 'The complete process normally takes under ___. (NO MORE THAN TWO WORDS)', a: ['two weeks', '2 weeks'], limit: 'NO MORE THAN TWO WORDS', why: 'Đoạn cuối.' }
]},

{ id: 'rd8', title: 'Three Cities, Three Bike Schemes', types: 'Table completion · T/F/NG', words: 430, minutes: 13,
text: `
Public bicycle-sharing schemes have spread to more than a thousand cities, but they do not all work in the same way, and their results differ sharply. A comparison of three well-documented systems shows how design choices shape outcomes.

The oldest of the three is in Lyon, France, launched in 2005. It uses fixed docking stations: a rider collects a bicycle from one station and must return it to another. The city installed around 350 stations, deliberately placing them no more than 300 metres apart in the centre so that a rider is never far from one. Annual membership costs about the price of two cinema tickets, and the first thirty minutes of every ride are free, which encourages short trips. The scheme is funded largely by an advertising company, which pays for the bicycles in exchange for the right to place posters on bus shelters across the city. Usage is high, at roughly five rides per bicycle per day, and surveys suggest that about one in ten rides replaces a car journey.

Hangzhou, China, took the docking-station model and multiplied it. When the scheme opened in 2008 it had 2,800 bicycles; a decade later it had more than 80,000 at over 3,000 stations, making it for several years the largest in the world. The first hour is free, and the system is integrated with the city's bus and metro cards, so that a commuter can pay for a bus, a train and a bicycle with the same card. It is owned and operated by the city government, which treats it as part of public transport rather than as a commercial service. Daily usage peaks at over 400,000 rides.

The third model abandons stations altogether. From 2016, private companies in several Chinese cities, and later in Europe and North America, released "dockless" bicycles that could be unlocked with a phone and left anywhere. The convenience was obvious, and so, within months, were the problems: bicycles piled on pavements, dumped in rivers and canals, and abandoned in such numbers that some cities created vast storage yards for confiscated machines. Several operators went bankrupt. Cities that have kept dockless schemes now limit the number of bicycles each company may deploy and fine operators whose bikes are left outside designated zones.

The lesson is not that one model is right. Lyon shows that a modest, well-placed network can be sustained for twenty years; Hangzhou that integration with public transport can produce enormous volumes; and the dockless experiment that convenience without regulation quickly becomes a public nuisance. What all three share is the finding that short, free rides are what people actually want.
`,
qs: [
  { t: 'fill', q: 'Table — Lyon · Launched: 2005 · Model: docking stations · Stations: about ___ (ONE WORD/NUMBER)', a: ['350'], limit: 'A NUMBER', why: 'Đoạn 2.' },
  { t: 'fill', q: 'Lyon · Free period: first ___ minutes', a: ['30', 'thirty'], limit: 'A NUMBER', why: 'Đoạn 2.' },
  { t: 'fill', q: 'Lyon · Funding mainly from: an ___ company (ONE WORD)', a: ['advertising'], limit: 'ONE WORD', why: 'Đoạn 2.' },
  { t: 'fill', q: 'Hangzhou · Launched: 2008 · Bicycles after ten years: over ___ (A NUMBER)', a: ['80,000', '80000'], limit: 'A NUMBER', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Hangzhou · Payment integrated with: bus and ___ cards (ONE WORD)', a: ['metro'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Hangzhou · Operated by: the city ___ (ONE WORD)', a: ['government'], limit: 'ONE WORD', why: 'Đoạn 3.' },
  { t: 'fill', q: 'Dockless · From: 2016 · Unlocked with: a ___ (ONE WORD)', a: ['phone'], limit: 'ONE WORD', why: 'Đoạn 4.' },
  { t: 'fill', q: 'Dockless · Current rules: limits on numbers and ___ for bikes left outside zones (ONE WORD)', a: ['fines'], limit: 'ONE WORD', why: 'Đoạn 4: "fine operators".' },
  { t: 'tfng', q: 'In Lyon, about ten per cent of bike-share trips replace trips by car.', a: 'TRUE', why: '"one in ten rides replaces a car journey".' },
  { t: 'tfng', q: 'Hangzhou\'s scheme is the largest in the world today.', a: 'NOT GIVEN', why: '"for several years the largest" — không nói hiện tại.' },
  { t: 'tfng', q: 'All dockless operators have gone out of business.', a: 'FALSE', why: '"Several operators went bankrupt"; cities "have kept dockless schemes".' },
  { t: 'tfng', q: 'The writer concludes that the docking-station model is the best.', a: 'FALSE', why: '"The lesson is not that one model is right."' }
]}
);
