/* eslint-disable */
export interface Member {
  id: number
  name: string
  handle: string
  party: 'R' | 'D' | 'I'
  chamber: 'senate' | 'house'
  state: string
  district?: string
  since?: number
  committees: string[]
}

export const senators: Member[] = [
  {id:1,name:"Angela Alsobrooks",state:"MD",party:"D",handle:"SenAlsobrooks",since:2025,committees:["Banking","Environment"],chamber:"senate"},
  {id:2,name:"Tammy Baldwin",state:"WI",party:"D",handle:"SenatorBaldwin",since:2013,committees:["Appropriations","Commerce"],chamber:"senate"},
  {id:3,name:"Jim Banks",state:"IN",party:"R",handle:"SenJimBanks",since:2025,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:4,name:"John Barrasso",state:"WY",party:"R",handle:"SenJohnBarrasso",since:2007,committees:["Energy","Finance"],chamber:"senate"},
  {id:5,name:"Michael Bennet",state:"CO",party:"D",handle:"SenatorBennet",since:2009,committees:["Agriculture","Finance"],chamber:"senate"},
  {id:6,name:"Marsha Blackburn",state:"TN",party:"R",handle:"MarshaBlackburn",since:2019,committees:["Commerce","Judiciary"],chamber:"senate"},
  {id:7,name:"Richard Blumenthal",state:"CT",party:"D",handle:"SenBlumenthal",since:2011,committees:["Armed Services","Judiciary"],chamber:"senate"},
  {id:8,name:"Lisa Blunt Rochester",state:"DE",party:"D",handle:"SenLBR",since:2025,committees:["Commerce","HELP"],chamber:"senate"},
  {id:9,name:"Cory Booker",state:"NJ",party:"D",handle:"SenBooker",since:2013,committees:["Foreign Relations","Judiciary"],chamber:"senate"},
  {id:10,name:"John Boozman",state:"AR",party:"R",handle:"JohnBoozman",since:2011,committees:["Agriculture","Appropriations"],chamber:"senate"},
  {id:11,name:"Katie Britt",state:"AL",party:"R",handle:"SenKatieBritt",since:2023,committees:["Appropriations","Banking"],chamber:"senate"},
  {id:12,name:"Ted Budd",state:"NC",party:"R",handle:"SenTedBudd",since:2023,committees:["Banking","Commerce"],chamber:"senate"},
  {id:13,name:"Maria Cantwell",state:"WA",party:"D",handle:"SenatorCantwell",since:2001,committees:["Commerce","Energy"],chamber:"senate"},
  {id:14,name:"Shelley Moore Capito",state:"WV",party:"R",handle:"SenCapito",since:2015,committees:["Appropriations","Environment"],chamber:"senate"},
  {id:15,name:"Bill Cassidy",state:"LA",party:"R",handle:"SenBillCassidy",since:2015,committees:["Finance","HELP"],chamber:"senate"},
  {id:16,name:"Susan Collins",state:"ME",party:"R",handle:"SenatorCollins",since:1997,committees:["Appropriations","HELP"],chamber:"senate"},
  {id:17,name:"Chris Coons",state:"DE",party:"D",handle:"ChrisCoons",since:2010,committees:["Appropriations","Foreign Relations"],chamber:"senate"},
  {id:18,name:"John Cornyn",state:"TX",party:"R",handle:"JohnCornyn",since:2002,committees:["Finance","Judiciary"],chamber:"senate"},
  {id:19,name:"Catherine Cortez Masto",state:"NV",party:"D",handle:"CortezMasto",since:2017,committees:["Banking","Finance"],chamber:"senate"},
  {id:20,name:"Tom Cotton",state:"AR",party:"R",handle:"SenTomCotton",since:2015,committees:["Armed Services","Intelligence"],chamber:"senate"},
  {id:21,name:"Kevin Cramer",state:"ND",party:"R",handle:"SenKevinCramer",since:2019,committees:["Armed Services","Banking"],chamber:"senate"},
  {id:22,name:"Mike Crapo",state:"ID",party:"R",handle:"MikeCrapo",since:1999,committees:["Finance","Judiciary"],chamber:"senate"},
  {id:23,name:"Ted Cruz",state:"TX",party:"R",handle:"SenTedCruz",since:2013,committees:["Commerce","Foreign Relations"],chamber:"senate"},
  {id:24,name:"John Curtis",state:"UT",party:"R",handle:"SenJohnCurtis",since:2025,committees:["Commerce","Foreign Relations"],chamber:"senate"},
  {id:25,name:"Steve Daines",state:"MT",party:"R",handle:"SteveDaines",since:2015,committees:["Appropriations","Energy"],chamber:"senate"},
  {id:26,name:"Tammy Duckworth",state:"IL",party:"D",handle:"SenDuckworth",since:2017,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:27,name:"Dick Durbin",state:"IL",party:"D",handle:"SenatorDurbin",since:1997,committees:["Appropriations","Judiciary"],chamber:"senate"},
  {id:28,name:"Joni Ernst",state:"IA",party:"R",handle:"SenJoniErnst",since:2015,committees:["Agriculture","Armed Services"],chamber:"senate"},
  {id:29,name:"John Fetterman",state:"PA",party:"D",handle:"SenFetterman",since:2023,committees:["Agriculture","Banking"],chamber:"senate"},
  {id:30,name:"Deb Fischer",state:"NE",party:"R",handle:"SenatorFischer",since:2013,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:31,name:"Ruben Gallego",state:"AZ",party:"D",handle:"RubenGallego",since:2025,committees:["Armed Services","Veterans"],chamber:"senate"},
  {id:32,name:"Kirsten Gillibrand",state:"NY",party:"D",handle:"SenGillibrand",since:2009,committees:["Armed Services","HELP"],chamber:"senate"},
  {id:33,name:"Lindsey Graham",state:"SC",party:"R",handle:"LindseyGrahamSC",since:2003,committees:["Appropriations","Judiciary"],chamber:"senate"},
  {id:34,name:"Chuck Grassley",state:"IA",party:"R",handle:"ChuckGrassley",since:1981,committees:["Finance","Judiciary"],chamber:"senate"},
  {id:35,name:"Bill Hagerty",state:"TN",party:"R",handle:"SenatorHagerty",since:2021,committees:["Banking","Foreign Relations"],chamber:"senate"},
  {id:36,name:"Maggie Hassan",state:"NH",party:"D",handle:"SenatorHassan",since:2017,committees:["Finance","HELP"],chamber:"senate"},
  {id:37,name:"Josh Hawley",state:"MO",party:"R",handle:"HawleyMO",since:2019,committees:["Armed Services","Judiciary"],chamber:"senate"},
  {id:38,name:"Martin Heinrich",state:"NM",party:"D",handle:"MartinHeinrich",since:2013,committees:["Energy","Intelligence"],chamber:"senate"},
  {id:39,name:"John Hickenlooper",state:"CO",party:"D",handle:"SenatorHick",since:2021,committees:["Commerce","Energy"],chamber:"senate"},
  {id:40,name:"Mazie Hirono",state:"HI",party:"D",handle:"maziehirono",since:2013,committees:["Armed Services","Judiciary"],chamber:"senate"},
  {id:41,name:"John Hoeven",state:"ND",party:"R",handle:"SenJohnHoeven",since:2011,committees:["Agriculture","Appropriations"],chamber:"senate"},
  {id:42,name:"Jon Husted",state:"OH",party:"R",handle:"SenJonHusted",since:2025,committees:["Commerce","Judiciary"],chamber:"senate"},
  {id:43,name:"Cindy Hyde-Smith",state:"MS",party:"R",handle:"SenHydeSmith",since:2018,committees:["Agriculture","Appropriations"],chamber:"senate"},
  {id:44,name:"Ron Johnson",state:"WI",party:"R",handle:"SenRonJohnson",since:2011,committees:["Commerce","Foreign Relations"],chamber:"senate"},
  {id:45,name:"Jim Justice",state:"WV",party:"R",handle:"SenJimJustice",since:2025,committees:["Banking","Commerce"],chamber:"senate"},
  {id:46,name:"Tim Kaine",state:"VA",party:"D",handle:"timkaine",since:2013,committees:["Armed Services","Foreign Relations"],chamber:"senate"},
  {id:47,name:"Mark Kelly",state:"AZ",party:"D",handle:"SenMarkKelly",since:2020,committees:["Armed Services","Environment"],chamber:"senate"},
  {id:48,name:"John Kennedy",state:"LA",party:"R",handle:"SenJohnKennedy",since:2017,committees:["Appropriations","Judiciary"],chamber:"senate"},
  {id:49,name:"Andy Kim",state:"NJ",party:"D",handle:"SenAndyKim",since:2025,committees:["Armed Services","Foreign Relations"],chamber:"senate"},
  {id:50,name:"Angus King",state:"ME",party:"I",handle:"SenAngusKing",since:2013,committees:["Armed Services","Intelligence"],chamber:"senate"},
  {id:51,name:"Amy Klobuchar",state:"MN",party:"D",handle:"amyklobuchar",since:2007,committees:["Commerce","Judiciary"],chamber:"senate"},
  {id:52,name:"James Lankford",state:"OK",party:"R",handle:"SenatorLankford",since:2015,committees:["Appropriations","Homeland Security"],chamber:"senate"},
  {id:53,name:"Mike Lee",state:"UT",party:"R",handle:"SenMikeLee",since:2011,committees:["Energy","Judiciary"],chamber:"senate"},
  {id:54,name:"Ben Ray Lujan",state:"NM",party:"D",handle:"SenatorLujan",since:2021,committees:["Commerce","Indian Affairs"],chamber:"senate"},
  {id:55,name:"Cynthia Lummis",state:"WY",party:"R",handle:"SenLummis",since:2021,committees:["Banking","Environment"],chamber:"senate"},
  {id:56,name:"Ed Markey",state:"MA",party:"D",handle:"SenMarkey",since:2013,committees:["Commerce","Foreign Relations"],chamber:"senate"},
  {id:57,name:"Roger Marshall",state:"KS",party:"R",handle:"SenRogerMarshall",since:2021,committees:["Agriculture","HELP"],chamber:"senate"},
  {id:58,name:"Mitch McConnell",state:"KY",party:"R",handle:"LeaderMcConnell",since:1985,committees:["Agriculture","Rules"],chamber:"senate"},
  {id:59,name:"Dave McCormick",state:"PA",party:"R",handle:"SenMcCormickPA",since:2025,committees:["Armed Services","Banking"],chamber:"senate"},
  {id:60,name:"Jeff Merkley",state:"OR",party:"D",handle:"SenJeffMerkley",since:2009,committees:["Appropriations","Environment"],chamber:"senate"},
  {id:61,name:"Ashley Moody",state:"FL",party:"R",handle:"SenAshleyMoody",since:2025,committees:["Commerce","Judiciary"],chamber:"senate"},
  {id:62,name:"Jerry Moran",state:"KS",party:"R",handle:"JerryMoran",since:2011,committees:["Appropriations","Veterans"],chamber:"senate"},
  {id:63,name:"Bernie Moreno",state:"OH",party:"R",handle:"SenBernieMoreno",since:2025,committees:["Banking","Commerce"],chamber:"senate"},
  {id:64,name:"Markwayne Mullin",state:"OK",party:"R",handle:"SenMullin",since:2023,committees:["Armed Services","HELP"],chamber:"senate"},
  {id:65,name:"Lisa Murkowski",state:"AK",party:"R",handle:"lisamurkowski",since:2002,committees:["Appropriations","Energy"],chamber:"senate"},
  {id:66,name:"Chris Murphy",state:"CT",party:"D",handle:"ChrisMurphyCT",since:2013,committees:["Foreign Relations","HELP"],chamber:"senate"},
  {id:67,name:"Patty Murray",state:"WA",party:"D",handle:"PattyMurray",since:1993,committees:["Appropriations","HELP"],chamber:"senate"},
  {id:68,name:"Jon Ossoff",state:"GA",party:"D",handle:"SenOssoff",since:2021,committees:["Banking","Judiciary"],chamber:"senate"},
  {id:69,name:"Alex Padilla",state:"CA",party:"D",handle:"AlexPadilla4CA",since:2021,committees:["Environment","Judiciary"],chamber:"senate"},
  {id:70,name:"Rand Paul",state:"KY",party:"R",handle:"RandPaul",since:2011,committees:["Foreign Relations","HELP"],chamber:"senate"},
  {id:71,name:"Gary Peters",state:"MI",party:"D",handle:"SenGaryPeters",since:2015,committees:["Commerce","Homeland Security"],chamber:"senate"},
  {id:72,name:"Jack Reed",state:"RI",party:"D",handle:"SenJackReed",since:1997,committees:["Appropriations","Armed Services"],chamber:"senate"},
  {id:73,name:"Pete Ricketts",state:"NE",party:"R",handle:"SenatorRicketts",since:2023,committees:["Commerce","Foreign Relations"],chamber:"senate"},
  {id:74,name:"James Risch",state:"ID",party:"R",handle:"SenatorRisch",since:2009,committees:["Foreign Relations","Intelligence"],chamber:"senate"},
  {id:75,name:"Jacky Rosen",state:"NV",party:"D",handle:"SenJackyRosen",since:2019,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:76,name:"Mike Rounds",state:"SD",party:"R",handle:"SenMikeRounds",since:2015,committees:["Armed Services","Banking"],chamber:"senate"},
  {id:77,name:"Bernie Sanders",state:"VT",party:"I",handle:"SenSanders",since:2007,committees:["Budget","HELP"],chamber:"senate"},
  {id:78,name:"Brian Schatz",state:"HI",party:"D",handle:"brianschatz",since:2012,committees:["Appropriations","Commerce"],chamber:"senate"},
  {id:79,name:"Adam Schiff",state:"CA",party:"D",handle:"SenAdamSchiff",since:2025,committees:["Intelligence","Judiciary"],chamber:"senate"},
  {id:80,name:"Eric Schmitt",state:"MO",party:"R",handle:"SenEricSchmitt",since:2023,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:81,name:"Chuck Schumer",state:"NY",party:"D",handle:"SenSchumer",since:1999,committees:["Finance","Rules"],chamber:"senate"},
  {id:82,name:"Rick Scott",state:"FL",party:"R",handle:"SenRickScott",since:2019,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:83,name:"Tim Scott",state:"SC",party:"R",handle:"SenatorTimScott",since:2013,committees:["Banking","Finance"],chamber:"senate"},
  {id:84,name:"Jeanne Shaheen",state:"NH",party:"D",handle:"SenatorShaheen",since:2009,committees:["Appropriations","Foreign Relations"],chamber:"senate"},
  {id:85,name:"Tim Sheehy",state:"MT",party:"R",handle:"SenTimSheehy",since:2025,committees:["Commerce","Veterans"],chamber:"senate"},
  {id:86,name:"Elissa Slotkin",state:"MI",party:"D",handle:"SenSlotkin",since:2025,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:87,name:"Tina Smith",state:"MN",party:"D",handle:"SenTinaSmith",since:2018,committees:["Agriculture","Banking"],chamber:"senate"},
  {id:88,name:"Dan Sullivan",state:"AK",party:"R",handle:"SenDanSullivan",since:2015,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:89,name:"John Thune",state:"SD",party:"R",handle:"SenJohnThune",since:2005,committees:["Commerce","Finance"],chamber:"senate"},
  {id:90,name:"Thom Tillis",state:"NC",party:"R",handle:"SenThomTillis",since:2015,committees:["Banking","Judiciary"],chamber:"senate"},
  {id:91,name:"Tommy Tuberville",state:"AL",party:"R",handle:"SenTuberville",since:2021,committees:["Agriculture","Armed Services"],chamber:"senate"},
  {id:92,name:"Chris Van Hollen",state:"MD",party:"D",handle:"ChrisVanHollen",since:2017,committees:["Appropriations","Foreign Relations"],chamber:"senate"},
  {id:93,name:"Mark Warner",state:"VA",party:"D",handle:"MarkWarner",since:2009,committees:["Banking","Intelligence"],chamber:"senate"},
  {id:94,name:"Raphael Warnock",state:"GA",party:"D",handle:"SenatorWarnock",since:2021,committees:["Agriculture","Banking"],chamber:"senate"},
  {id:95,name:"Elizabeth Warren",state:"MA",party:"D",handle:"SenWarren",since:2013,committees:["Banking","Finance"],chamber:"senate"},
  {id:96,name:"Peter Welch",state:"VT",party:"D",handle:"SenatorWelch",since:2023,committees:["Commerce","Judiciary"],chamber:"senate"},
  {id:97,name:"Sheldon Whitehouse",state:"RI",party:"D",handle:"SenWhitehouse",since:2007,committees:["Environment","Judiciary"],chamber:"senate"},
  {id:98,name:"Roger Wicker",state:"MS",party:"R",handle:"SenatorWicker",since:2007,committees:["Armed Services","Commerce"],chamber:"senate"},
  {id:99,name:"Ron Wyden",state:"OR",party:"D",handle:"RonWyden",since:1996,committees:["Finance","Intelligence"],chamber:"senate"},
  {id:100,name:"Todd Young",state:"IN",party:"R",handle:"SenToddYoung",since:2017,committees:["Commerce","Foreign Relations"],chamber:"senate"},
]

const hRaw = `201|AL-1|R|Barry Moore|RepBarryMoore|2021|Agriculture;Judiciary
202|AL-2|D|Shomari Figures|RepFigures|2025|Agriculture;Transportation
203|AL-3|R|Mike Rogers|RepMikeRogersAL|2003|Armed Services
204|AL-4|R|Robert Aderholt|Robert_Aderholt|1997|Appropriations
205|AL-5|R|Dale Strong|RepDaleStrong|2023|Appropriations;Homeland Security
206|AL-6|R|Gary Palmer|USRepGaryPalmer|2015|Oversight;Energy and Commerce
207|AL-7|D|Terri Sewell|RepTerriSewell|2011|House Administration;Ways and Means
208|AK-At Large|R|Nicholas Begich|RepBegich|2025|Natural Resources;Transportation
209|AZ-1|R|David Schweikert|RepSchweikert|2011|Ways and Means
210|AZ-2|R|Elijah Crane|RepElijahCrane|2023|Oversight;Homeland Security
211|AZ-3|D|Yassamin Ansari|RepAnsari|2025|Oversight;Natural Resources
212|AZ-4|D|Greg Stanton|RepGregStanton|2019|Foreign Affairs;Transportation
213|AZ-5|R|Andy Biggs|RepAndyBiggsAZ|2017|Judiciary;Oversight
214|AZ-6|R|Juan Ciscomani|RepCiscomani|2023|Appropriations;Veterans
215|AZ-7|D|Adelita Grijalva|RepGrijalva|2025|Education;Natural Resources
216|AZ-8|R|Abraham Hamadeh|RepHamadeh|2025|Armed Services;Veterans
217|AZ-9|R|Paul Gosar|RepGosar|2011|Natural Resources;Oversight
218|AR-1|R|Eric Crawford|RepRickCrawford|2011|Agriculture;Intelligence
219|AR-2|R|J. French Hill|RepFrenchHill|2015|Financial Services;Intelligence
220|AR-3|R|Steve Womack|RepSteveWomack|2011|Appropriations
221|AR-4|R|Bruce Westerman|RepWesterman|2015|Natural Resources;Transportation
222|CA-1|R|Doug LaMalfa|RepLaMalfa|2013|Agriculture;Transportation
223|CA-2|D|Jared Huffman|RepHuffman|2013|Natural Resources;Transportation
224|CA-3|R|Kevin Kiley|RepKevinKiley|2023|Education;Judiciary
225|CA-4|D|Mike Thompson|RepMikeThompson|1999|Ways and Means
226|CA-5|R|Tom McClintock|RepMcClintock|2009|Budget;Natural Resources
227|CA-6|D|Ami Bera|RepAmiBera|2013|Foreign Affairs;Intelligence
228|CA-7|D|Doris Matsui|DorisMatsui|2005|Energy and Commerce
229|CA-8|D|John Garamendi|RepGaramendi|2009|Armed Services;Transportation
230|CA-9|D|Josh Harder|RepJoshHarder|2019|Appropriations
231|CA-10|D|Mark DeSaulnier|RepDeSaulnier|2015|Education;Transportation
232|CA-11|D|Nancy Pelosi|NancyPelosi|1987|Former Speaker
233|CA-12|D|Lateefah Simon|RepLateefah|2025|Oversight;Small Business
234|CA-13|D|Adam Gray|RepAdamGray|2023|Agriculture;Natural Resources
235|CA-14|D|Eric Swalwell|RepSwalwell|2013|Homeland Security;Judiciary
236|CA-15|D|Kevin Mullin|RepKevinMullin|2023|Energy and Commerce
237|CA-16|D|Sam Liccardo|RepLiccardo|2025|Financial Services
238|CA-17|D|Ro Khanna|RoKhanna|2017|Armed Services;Oversight
239|CA-18|D|Zoe Lofgren|RepZoeLofgren|1995|Judiciary;Science
240|CA-19|D|Jimmy Panetta|RepJimmyPanetta|2017|Budget;Ways and Means
241|CA-20|R|Vince Fong|RepVinceFong|2024|Homeland Security;Transportation
242|CA-21|D|Jim Costa|RepJimCosta|2005|Agriculture;Foreign Affairs
243|CA-22|R|David Valadao|RepDavidValadao|2013|Appropriations
244|CA-23|R|Jay Obernolte|RepObernolte|2021|Budget;Energy and Commerce
245|CA-24|D|Salud Carbajal|RepCarbajal|2017|Agriculture;Armed Services
246|CA-25|D|Raul Ruiz|RepRaulRuizMD|2013|Energy and Commerce
247|CA-26|D|Julia Brownley|RepBrownley|2013|Natural Resources;Transportation
248|CA-27|D|George Whitesides|RepWhitesides|2025|Armed Services;Science
249|CA-28|D|Judy Chu|RepJudyChu|2009|Budget;Ways and Means
250|CA-29|D|Luz Rivas|RepLuzRivas|2025|Natural Resources;Science
251|CA-30|D|Laura Friedman|RepFriedman|2025|Transportation;Science
252|CA-31|D|Gilbert Cisneros|RepCisneros|2019|Armed Services;Small Business
253|CA-32|D|Brad Sherman|BradSherman|1997|Financial Services;Foreign Affairs
254|CA-33|D|Pete Aguilar|RepAguilar|2015|Appropriations
255|CA-34|D|Jimmy Gomez|RepJimmyGomez|2017|Intelligence;Ways and Means
256|CA-35|D|Norma Torres|NormaJTorres|2015|Appropriations;House Administration
257|CA-36|D|Ted Lieu|RepTedLieu|2015|Foreign Affairs;Judiciary
258|CA-37|D|Sydney Kamlager-Dove|RepKamlager|2023|Foreign Affairs;Judiciary
259|CA-38|D|Linda Sanchez|RepLindaSanchez|2003|Ways and Means
260|CA-39|D|Mark Takano|RepMarkTakano|2013|Education;Veterans
261|CA-40|R|Young Kim|RepYoungKim|2021|Financial Services;Foreign Affairs
262|CA-41|R|Ken Calvert|KenCalvert|1993|Appropriations
263|CA-42|D|Robert Garcia|RepRobertGarcia|2023|Oversight;Transportation
264|CA-43|D|Maxine Waters|MaxineWaters|1991|Financial Services
265|CA-44|D|Nanette Barragan|RepBarragan|2017|Energy and Commerce
266|CA-45|D|Derek Tran|RepDerekTran|2025|Armed Services;Small Business
267|CA-46|D|J. Luis Correa|RepLouCorrea|2017|Homeland Security;Judiciary
268|CA-47|D|Dave Min|RepDaveMin|2025|Oversight;Natural Resources
269|CA-48|R|Darrell Issa|RepDarrellIssa|2001|Foreign Affairs;Judiciary
270|CA-49|D|Mike Levin|RepMikeLevin|2019|Appropriations
271|CA-50|D|Scott Peters|RepScottPeters|2013|Budget;Energy and Commerce
272|CA-51|D|Sara Jacobs|RepSaraJacobs|2021|Armed Services;Foreign Affairs
273|CA-52|D|Juan Vargas|RepJuanVargas|2013|Financial Services
274|CO-1|D|Diana DeGette|RepDianaDeGette|1997|Energy and Commerce
275|CO-2|D|Joe Neguse|RepJoeNeguse|2019|Natural Resources;Judiciary
276|CO-3|R|Jeff Hurd|RepJeffHurd|2025|Natural Resources;Transportation
277|CO-4|R|Lauren Boebert|RepBoebert|2021|Oversight;Natural Resources
278|CO-5|R|Jeff Crank|RepJeffCrank|2025|Armed Services;Natural Resources
279|CO-6|D|Jason Crow|RepJasonCrow|2019|Armed Services;Intelligence
280|CO-7|D|Brittany Pettersen|RepPettersen|2023|Financial Services
281|CO-8|R|Gabe Evans|RepGabeEvans|2025|Homeland Security;Energy and Commerce
282|CT-1|D|John Larson|RepJohnLarson|1999|Ways and Means
283|CT-2|D|Joe Courtney|RepJoeCourtney|2007|Armed Services;Education
284|CT-3|D|Rosa DeLauro|RosaDeLauro|1991|Appropriations
285|CT-4|D|James Himes|jahimes|2009|Financial Services;Intelligence
286|CT-5|D|Jahana Hayes|RepJahanaHayes|2019|Agriculture;Education
287|DE-At Large|D|Sarah McBride|RepMcBride|2025|Foreign Affairs;Science
288|FL-1|R|Jimmy Patronis|RepPatronis|2025|Transportation;Small Business
289|FL-2|R|Neal Dunn|RepNealDunn|2017|Energy and Commerce
290|FL-3|R|Kat Cammack|RepKatCammack|2021|Agriculture;Energy and Commerce
291|FL-4|R|Aaron Bean|RepAaronBean|2023|Ways and Means
292|FL-5|R|John Rutherford|RepRutherford|2017|Appropriations
293|FL-6|R|Randy Fine|RepRandyFine|2025|Education;Foreign Affairs
294|FL-7|R|Cory Mills|RepCoryMills|2023|Armed Services;Foreign Affairs
295|FL-8|R|Mike Haridopolos|RepHaridopolos|2025|Financial Services;Science
296|FL-9|D|Darren Soto|RepDarrenSoto|2017|Energy and Commerce;Natural Resources
297|FL-10|D|Maxwell Frost|MaxwellFrostFL|2023|Oversight;Transportation
298|FL-11|R|Daniel Webster|RepWebster|2011|Natural Resources;Transportation
299|FL-12|R|Gus Bilirakis|RepBilirakis|2007|Energy and Commerce
300|FL-13|R|Anna Paulina Luna|RepLuna|2023|Foreign Affairs;Oversight
301|FL-14|D|Kathy Castor|USRepKCastor|2007|Energy and Commerce
302|FL-15|R|Laurel Lee|RepLaurelLee|2023|Energy and Commerce;Judiciary
303|FL-16|R|Vern Buchanan|VernBuchanan|2007|Ways and Means
304|FL-17|R|Greg Steube|RepGregSteube|2019|Intelligence;Ways and Means
305|FL-18|R|Scott Franklin|RepFranklin|2021|Appropriations;Science
306|FL-19|R|Byron Donalds|RepDonaldsPress|2021|Financial Services;Oversight
307|FL-20|D|Sheila Cherfilus-McCormick|RepCherfilus|2022|Foreign Affairs;Veterans
308|FL-21|R|Brian Mast|RepBrianMast|2017|Foreign Affairs;Transportation
309|FL-22|D|Lois Frankel|RepLoisFrankel|2013|Appropriations
310|FL-23|D|Jared Moskowitz|RepMoskowitz|2023|Foreign Affairs;Judiciary
311|FL-24|D|Frederica Wilson|RepWilson|2011|Education;Transportation
312|FL-25|D|Debbie Wasserman Schultz|RepDWStweets|2005|Appropriations
313|FL-26|R|Mario Diaz-Balart|MarioDB|2003|Appropriations
314|FL-27|R|Maria Salazar|RepMariaSalazar|2021|Financial Services;Foreign Affairs
315|FL-28|R|Carlos Gimenez|RepCarlosGimenez|2021|Armed Services;Homeland Security
316|GA-1|R|Earl Carter|RepBuddyCarter|2015|Budget;Energy and Commerce
317|GA-2|D|Sanford Bishop|SanfordBishop|1993|Appropriations
318|GA-3|R|Brian Jack|RepBrianJack|2025|Oversight;Rules;Small Business
319|GA-4|D|Hank Johnson|RepHankJohnson|2007|Judiciary;Transportation
320|GA-5|D|Nikema Williams|RepNikema|2021|Financial Services
321|GA-6|D|Lucy McBath|RepLucyMcBath|2019|Education;Judiciary
322|GA-7|R|Richard McCormick|RepMcCormick|2023|Armed Services;Foreign Affairs
323|GA-8|R|Austin Scott|AustinScottGA08|2011|Agriculture;Armed Services
324|GA-9|R|Andrew Clyde|RepAndyClyde|2021|Appropriations;Budget
325|GA-10|R|Mike Collins|RepMikeCollins|2023|Natural Resources;Transportation
326|GA-11|R|Barry Loudermilk|RepLoudermilk|2015|Financial Services;House Administration
327|GA-12|R|Rick Allen|RepRickAllen|2015|Education;Energy and Commerce
328|GA-13|D|David Scott|RepDavidScott|2003|Agriculture;Financial Services
329|HI-1|D|Ed Case|RepEdCase|2019|Appropriations
330|HI-2|D|Jill Tokuda|RepTokuda|2023|Agriculture;Armed Services
331|ID-1|R|Russ Fulcher|RepRussFulcher|2019|Energy and Commerce;Natural Resources
332|ID-2|R|Mike Simpson|CongMikeSimpson|1999|Appropriations
333|IL-1|D|Jonathan Jackson|RepJonathanJackson|2023|Agriculture;Foreign Affairs
334|IL-2|D|Robin Kelly|RepRobinKelly|2013|Energy and Commerce
335|IL-3|D|Delia Ramirez|RepDeliaRamirez|2023|Homeland Security;Veterans
336|IL-4|D|Jesus Garcia|RepChuyGarcia|2019|Judiciary;Transportation
337|IL-5|D|Mike Quigley|RepMikeQuigley|2009|Appropriations;Intelligence
338|IL-6|D|Sean Casten|RepSeanCasten|2019|Financial Services
339|IL-7|D|Danny Davis|RepDannyDavis|1997|Ways and Means
340|IL-8|D|Raja Krishnamoorthi|CongressmanRaja|2017|Oversight;Intelligence
341|IL-9|D|Jan Schakowsky|janschakowsky|1999|Energy and Commerce
342|IL-10|D|Bradley Schneider|RepSchneider|2013|Foreign Affairs;Ways and Means
343|IL-11|D|Bill Foster|RepBillFoster|2008|Financial Services;Science
344|IL-12|R|Mike Bost|RepBost|2015|Agriculture;Veterans
345|IL-13|D|Nikki Budzinski|RepBudzinski|2023|Agriculture;Veterans
346|IL-14|D|Lauren Underwood|RepUnderwood|2019|Appropriations
347|IL-15|R|Mary Miller|RepMaryMiller|2021|Agriculture;Education
348|IL-16|R|Darin LaHood|RepLaHood|2015|Intelligence;Ways and Means
349|IL-17|D|Eric Sorensen|RepEricSorensen|2023|Agriculture;Armed Services
350|IN-1|D|Frank Mrvan|RepMrvan|2021|Appropriations
351|IN-2|R|Rudy Yakym|RepRudyYakym|2022|Ways and Means
352|IN-3|R|Marlin Stutzman|RepStutzman|2025|Financial Services;Budget
353|IN-4|R|James Baird|RepJamesBaird|2019|Agriculture;Science
354|IN-5|R|Victoria Spartz|RepSpartz|2021|Judiciary
355|IN-6|R|Jefferson Shreve|RepShreve|2025|Foreign Affairs;Transportation
356|IN-7|D|Andre Carson|RepAndreCarson|2008|Intelligence;Transportation
357|IN-8|R|Mark Messmer|RepMessmer|2025|Agriculture;Armed Services
358|IN-9|R|Erin Houchin|RepHouchin|2023|Budget;Energy and Commerce
359|IA-1|R|Mariannette Miller-Meeks|RepMillerMeeks|2021|Energy and Commerce;Veterans
360|IA-2|R|Ashley Hinson|RepAshleyHinson|2021|Appropriations
361|IA-3|R|Zachary Nunn|RepZachNunn|2023|Agriculture;Financial Services
362|IA-4|R|Randy Feenstra|RepFeenstra|2021|Agriculture;Ways and Means
363|KS-1|R|Tracey Mann|RepTraceyMann|2021|Agriculture;Transportation
364|KS-2|R|Derek Schmidt|RepDerekSchmidt|2025|Armed Services;Judiciary
365|KS-3|D|Sharice Davids|RepShariceDavids|2019|Agriculture;Transportation
366|KS-4|R|Ron Estes|RepRonEstes|2017|Budget;Ways and Means
367|KY-1|R|James Comer|RepJamesComer|2017|Education;Oversight
368|KY-2|R|Brett Guthrie|RepGuthrie|2009|Energy and Commerce
369|KY-3|D|Morgan McGarvey|RepMcGarvey|2023|Budget;Veterans
370|KY-4|R|Thomas Massie|RepThomasMassie|2012|Judiciary;Transportation
371|KY-5|R|Harold Rogers|RepHalRogers|1981|Appropriations
372|KY-6|R|Andy Barr|RepAndyBarr|2013|Financial Services;Foreign Affairs
373|LA-1|R|Steve Scalise|SteveScalise|2008|Majority Leader
374|LA-2|D|Troy Carter|RepTroyCarter|2021|Homeland Security;Energy and Commerce
375|LA-3|R|Clay Higgins|RepClayHiggins|2017|Armed Services;Oversight
376|LA-4|R|Mike Johnson|RepMikeJohnson|2017|Speaker of the House
377|LA-5|R|Julia Letlow|RepJuliaLetlow|2021|Appropriations;Education
378|LA-6|D|Cleo Fields|RepCleoFields|2025|Financial Services
379|ME-1|D|Chellie Pingree|chelliepingree|2009|Agriculture;Appropriations
380|ME-2|D|Jared Golden|RepGolden|2019|Armed Services;Natural Resources
381|MD-1|R|Andy Harris|RepAndyHarrisMD|2011|Appropriations
382|MD-2|D|Johnny Olszewski|RepOlszewski|2025|Foreign Affairs;Small Business
383|MD-3|D|Sarah Elfreth|RepElfreth|2025|Armed Services;Natural Resources
384|MD-4|D|Glenn Ivey|RepGlennIvey|2023|Appropriations
385|MD-5|D|Steny Hoyer|LeaderHoyer|1981|Appropriations
386|MD-6|D|April McClain Delaney|RepMcClainDelaney|2025|Agriculture;Science
387|MD-7|D|Kweisi Mfume|RepMfume|2020|Foreign Affairs;Oversight
388|MD-8|D|Jamie Raskin|RepRaskin|2017|Judiciary
389|MA-1|D|Richard Neal|RepRichardNeal|1989|Ways and Means
390|MA-2|D|Jim McGovern|RepMcGovern|1997|Agriculture;Rules
391|MA-3|D|Lori Trahan|RepLoriTrahan|2019|Energy and Commerce
392|MA-4|D|Jake Auchincloss|RepAuchincloss|2021|Energy and Commerce
393|MA-5|D|Katherine Clark|RepKClark|2013|Minority Whip
394|MA-6|D|Seth Moulton|sethmoulton|2015|Armed Services;Transportation
395|MA-7|D|Ayanna Pressley|AyannaPressley|2019|Financial Services;Oversight
396|MA-8|D|Stephen Lynch|RepStephenLynch|2001|Financial Services;Oversight
397|MA-9|D|William Keating|USRepKeating|2011|Armed Services;Foreign Affairs
398|MI-1|R|Jack Bergman|RepJackBergman|2017|Armed Services;Budget
399|MI-2|R|John Moolenaar|RepMoolenaar|2015|Appropriations
400|MI-3|D|Hillary Scholten|RepScholten|2023|Transportation;Small Business
401|MI-4|R|Bill Huizenga|RepHuizenga|2011|Financial Services;Foreign Affairs
402|MI-5|R|Tim Walberg|RepWalberg|2011|Education;Natural Resources
403|MI-6|D|Debbie Dingell|RepDebDingell|2015|Energy and Commerce;Natural Resources
404|MI-7|R|Tom Barrett|RepTomBarrett|2025|Transportation;Veterans
405|MI-8|D|Kristen McDonald Rivet|RepMcDonaldRivet|2025|Agriculture;Transportation
406|MI-9|R|Lisa McClain|RepLisaMcClain|2021|Education;Financial Services
407|MI-10|R|John James|RepJohnJames|2023|Energy and Commerce
408|MI-11|D|Haley Stevens|RepHaleyStevens|2019|Education;Science
409|MI-12|D|Rashida Tlaib|RashidaTlaib|2019|Financial Services;Oversight
410|MI-13|D|Shri Thanedar|ShriThanedar|2023|Agriculture;Homeland Security
411|MN-1|R|Brad Finstad|RepFinstad|2022|Agriculture;Armed Services
412|MN-2|D|Angie Craig|AngieCraig|2019|Agriculture
413|MN-3|D|Kelly Morrison|RepKellyMorrison|2025|Small Business;Veterans
414|MN-4|D|Betty McCollum|BettyMcCollum04|2001|Appropriations
415|MN-5|D|Ilhan Omar|IlhanMN|2019|Budget;Education
416|MN-6|R|Tom Emmer|TomEmmer|2015|Financial Services
417|MN-7|R|Michelle Fischbach|RepFischbach|2021|Rules;Ways and Means
418|MN-8|R|Pete Stauber|RepPeteStauber|2019|Natural Resources;Transportation
419|MS-1|R|Trent Kelly|RepTrentKelly|2015|Agriculture;Armed Services
420|MS-2|D|Bennie Thompson|BennieGThompson|1993|Homeland Security
421|MS-3|R|Michael Guest|RepMichaelGuest|2019|Appropriations;Homeland Security
422|MS-4|R|Mike Ezell|RepMikeEzell|2023|Natural Resources;Transportation
423|MO-1|D|Wesley Bell|RepWesleyBell|2025|Armed Services;Oversight
424|MO-2|R|Ann Wagner|RepAnnWagner|2013|Financial Services;Intelligence
425|MO-3|R|Robert Onder|RepRobertOnder|2025|Education;Judiciary
426|MO-4|R|Mark Alford|RepMarkAlford|2023|Appropriations;Small Business
427|MO-5|D|Emanuel Cleaver|repcleaver|2005|Financial Services
428|MO-6|R|Sam Graves|RepSamGraves|2001|Armed Services;Transportation
429|MO-7|R|Eric Burlison|RepBurlison|2025|Oversight;Transportation
430|MO-8|R|Jason Smith|RepJasonSmith|2013|Ways and Means
431|MT-1|R|Ryan Zinke|RepRyanZinke|2023|Appropriations;Foreign Affairs
432|MT-2|R|Troy Downing|RepTroyDowning|2025|Financial Services;Small Business
433|NE-1|R|Mike Flood|RepMikeFlood|2022|Financial Services
434|NE-2|R|Don Bacon|RepDonBacon|2017|Agriculture;Armed Services
435|NE-3|R|Adrian Smith|RepAdrianSmith|2007|Ways and Means
436|NV-1|D|Dina Titus|reptitus|2013|Foreign Affairs;Transportation
437|NV-2|R|Mark Amodei|MarkAmodeiNV02|2011|Appropriations;Natural Resources
438|NV-3|D|Susie Lee|RepSusieLee|2019|Appropriations;Natural Resources
439|NV-4|D|Steven Horsford|RepHorsford|2019|Ways and Means
440|NH-1|D|Chris Pappas|RepChrisPappas|2019|Transportation;Veterans
441|NH-2|D|Maggie Goodlander|RepGoodlander|2025|Armed Services;Small Business
442|NJ-1|D|Donald Norcross|DonaldNorcross|2014|Armed Services;Education
443|NJ-2|R|Jefferson Van Drew|RepVanDrew|2019|Judiciary;Transportation
444|NJ-3|D|Herbert Conaway|RepConaway|2025|Armed Services;Veterans
445|NJ-4|R|Christopher Smith|RepChrisSmith|1981|Foreign Affairs
446|NJ-5|D|Josh Gottheimer|RepJoshG|2017|Financial Services;Intelligence
447|NJ-6|D|Frank Pallone|FrankPallone|1988|Energy and Commerce
448|NJ-7|R|Thomas Kean|RepTomKeanJr|2023|Foreign Affairs;Energy and Commerce
449|NJ-8|D|Robert Menendez|RepMenendezNJ|2023|Energy and Commerce
450|NJ-9|D|Nellie Pou|RepNelliePou|2025|Homeland Security;Transportation
451|NJ-10|D|LaMonica McIver|RepMcIver|2025|Homeland Security;Small Business
452|NJ-12|D|Bonnie Watson Coleman|RepBonnie|2015|Appropriations;Budget
453|NM-1|D|Melanie Stansbury|RepStansbury|2021|Oversight;Natural Resources
454|NM-2|D|Gabe Vasquez|RepGabeVasquez|2023|Agriculture;Armed Services
455|NM-3|D|Teresa Leger Fernandez|RepTeresaLF|2021|Natural Resources;Rules
456|NY-1|R|Nick LaLota|RepLaLota|2023|Appropriations;Small Business
457|NY-2|R|Andrew Garbarino|RepGarbarino|2021|Financial Services;Homeland Security
458|NY-3|D|Tom Suozzi|RepTomSuozzi|2017|Ways and Means
459|NY-4|D|Laura Gillen|RepGillen|2025|Transportation;Science
460|NY-5|D|Gregory Meeks|GregoryMeeks|1998|Financial Services;Foreign Affairs
461|NY-6|D|Grace Meng|RepGraceMeng|2013|Appropriations
462|NY-7|D|Nydia Velazquez|NydiaVelazquez|1993|Financial Services;Small Business
463|NY-8|D|Hakeem Jeffries|RepJeffries|2013|Minority Leader
464|NY-9|D|Yvette Clarke|RepYvetteClarke|2007|Energy and Commerce
465|NY-10|D|Daniel Goldman|RepDanGoldman|2023|Homeland Security;Judiciary
466|NY-11|R|Nicole Malliotakis|NMalliotakis|2021|Ways and Means
467|NY-12|D|Jerrold Nadler|RepJerryNadler|1992|Judiciary;Transportation
468|NY-13|D|Adriano Espaillat|RepEspaillat|2017|Appropriations
469|NY-14|D|Alexandria Ocasio-Cortez|AOC|2019|Energy and Commerce
470|NY-15|D|Ritchie Torres|RitchieTorres|2021|Financial Services
471|NY-16|D|George Latimer|RepGLatimer|2025|Foreign Affairs;Small Business
472|NY-17|R|Michael Lawler|RepMikeLawler|2023|Financial Services;Foreign Affairs
473|NY-18|D|Patrick Ryan|RepPatrickRyan|2022|Armed Services;Transportation
474|NY-19|D|Josh Riley|RepJoshRiley|2025|Agriculture;Science
475|NY-20|D|Paul Tonko|RepPaulTonko|2009|Budget;Energy and Commerce
476|NY-21|R|Elise Stefanik|EliseStefanik|2015|Armed Services;Education
477|NY-22|D|John Mannion|RepMannion|2025|Agriculture;Education
478|NY-23|R|Nicholas Langworthy|RepLangworthy|2023|Oversight;Energy and Commerce
479|NY-24|R|Claudia Tenney|RepTenney|2021|Intelligence;Ways and Means
480|NY-25|D|Joseph Morelle|RepJoeMorelle|2018|Appropriations;House Administration
481|NY-26|D|Timothy Kennedy|RepTimKennedy|2025|Homeland Security;Veterans
482|NC-1|D|Donald Davis|RepDonDavis|2023|Agriculture;Armed Services
483|NC-2|D|Deborah Ross|RepDeborahRoss|2021|Judiciary;Science
484|NC-3|R|Gregory Murphy|RepGregMurphy|2019|Veterans;Ways and Means
485|NC-4|D|Valerie Foushee|RepFoushee|2023|Transportation;Science
486|NC-5|R|Virginia Foxx|virginiafoxx|2005|Education;Oversight
487|NC-6|R|Addison McDowell|RepMcDowell|2025|Budget;Natural Resources
488|NC-7|R|David Rouzer|RepDavidRouzer|2015|Agriculture;Transportation
489|NC-8|R|Mark Harris|RepMarkHarrisNC|2025|Agriculture;Education
490|NC-9|R|Richard Hudson|RepRichHudson|2013|Energy and Commerce
491|NC-10|R|Pat Harrigan|RepHarrigan|2025|Armed Services;Science
492|NC-11|R|Chuck Edwards|RepChuckEdwards|2023|Appropriations;Budget
493|NC-12|D|Alma Adams|RepAdams|2014|Agriculture;Education
494|NC-13|R|Brad Knott|RepBradKnott|2025|Homeland Security;Judiciary
495|NC-14|R|Tim Moore|RepTimMooreNC|2025|Financial Services;Budget
496|ND-At Large|R|Julie Fedorchak|RepFedorchak|2025|Energy and Commerce
497|OH-1|D|Greg Landsman|RepLandsman|2023|Energy and Commerce
498|OH-2|R|David Taylor|RepDavidTaylor|2025|Agriculture;Transportation
499|OH-3|D|Joyce Beatty|RepBeatty|2013|Financial Services
500|OH-4|R|Jim Jordan|Jim_Jordan|2007|Judiciary;Oversight
501|OH-5|R|Robert Latta|boblatta|2007|Energy and Commerce
502|OH-6|R|Michael Rulli|RepRulli|2025|Education;Energy and Commerce
503|OH-7|R|Max Miller|RepMaxMiller|2023|Science;Ways and Means
504|OH-8|R|Warren Davidson|WarrenDavidson|2016|Financial Services;Foreign Affairs
505|OH-9|D|Marcy Kaptur|RepMarcyKaptur|1983|Appropriations;Budget
506|OH-10|R|Michael Turner|RepMikeTurner|2003|Armed Services;Oversight
507|OH-11|D|Shontel Brown|RepShontelBrown|2021|Agriculture;Oversight
508|OH-12|R|Troy Balderson|RepBalderson|2018|Energy and Commerce
509|OH-13|D|Emilia Sykes|RepEmiliaSykes|2023|Transportation;Science
510|OH-14|R|David Joyce|RepDaveJoyce|2013|Appropriations
511|OH-15|R|Mike Carey|RepMikeCarey|2021|Budget;Ways and Means
512|OK-1|R|Kevin Hern|RepKevinHern|2019|Ways and Means
513|OK-2|R|Josh Brecheen|RepBrecheen|2023|Budget;Homeland Security
514|OK-3|R|Frank Lucas|RepFrankLucas|1994|Agriculture;Financial Services
515|OK-4|R|Tom Cole|TomColeOK04|2003|Appropriations
516|OK-5|R|Stephanie Bice|RepStephBice|2021|Appropriations;House Administration
517|OR-1|D|Suzanne Bonamici|RepBonamici|2012|Education;Science
518|OR-2|R|Cliff Bentz|RepCliffBentz|2021|Energy and Commerce;Natural Resources
519|OR-3|D|Maxine Dexter|RepMaxineDexter|2025|Natural Resources;Veterans
520|OR-4|D|Val Hoyle|RepValHoyle|2023|Natural Resources;Transportation
521|OR-5|D|Janelle Bynum|RepBynum|2025|Financial Services
522|OR-6|D|Andrea Salinas|RepAndreaSalinas|2023|Agriculture;Science
523|PA-1|R|Brian Fitzpatrick|RepBrianFitz|2017|Intelligence;Ways and Means
524|PA-2|D|Brendan Boyle|RepBrendanBoyle|2015|Budget;Ways and Means
525|PA-3|D|Dwight Evans|RepDwightEvans|2016|Ways and Means
526|PA-4|D|Madeleine Dean|MadeleineDean|2019|Appropriations;Foreign Affairs
527|PA-5|D|Mary Gay Scanlon|RepMGScanlon|2018|Judiciary;Rules
528|PA-6|D|Chrissy Houlahan|RepHoulahan|2019|Armed Services;Intelligence
529|PA-7|R|Ryan Mackenzie|RepMackenzie|2025|Education;Foreign Affairs
530|PA-8|R|Rob Bresnahan|RepBresnahan|2025|Agriculture;Transportation
531|PA-9|R|Dan Meuser|RepMeuser|2019|Financial Services;Small Business
532|PA-10|R|Scott Perry|RepScottPerry|2013|Foreign Affairs;Oversight
533|PA-11|R|Lloyd Smucker|RepSmucker|2017|Budget;Ways and Means
534|PA-12|D|Summer Lee|RepSummerLee|2023|Education;Oversight
535|PA-13|R|John Joyce|RepJohnJoyce|2019|Energy and Commerce
536|PA-14|R|Guy Reschenthaler|GReschenthaler|2019|Appropriations
537|PA-15|R|Glenn Thompson|CongressmanGT|2009|Agriculture;Education
538|PA-16|R|Mike Kelly|MikeKellyPA|2011|Ways and Means
539|PA-17|D|Chris Deluzio|RepDeluzio|2023|Armed Services;Transportation
540|RI-1|D|Gabe Amo|RepGabeAmo|2023|Budget;Foreign Affairs
541|RI-2|D|Seth Magaziner|RepMagaziner|2023|Homeland Security;Natural Resources
542|SC-1|R|Nancy Mace|RepNancyMace|2021|Armed Services;Oversight
543|SC-2|R|Joe Wilson|RepJoeWilson|2001|Armed Services;Education
544|SC-3|R|Sheri Biggs|RepSheriBiggs|2025|Foreign Affairs;Homeland Security
545|SC-4|R|William Timmons|RepTimmons|2019|Financial Services;Oversight
546|SC-5|R|Ralph Norman|RepRalphNorman|2017|Financial Services;Budget
547|SC-6|D|James Clyburn|WhipClyburn|1993|Appropriations
548|SC-7|R|Russell Fry|RepRussellFry|2023|Energy and Commerce;Judiciary
549|SD-At Large|R|Dusty Johnson|RepDustyJohnson|2019|Agriculture;Transportation
550|TN-1|R|Diana Harshbarger|RepHarshbarger|2021|Energy and Commerce
551|TN-2|R|Tim Burchett|RepTimBurchett|2019|Foreign Affairs;Oversight
552|TN-3|R|Chuck Fleischmann|RepFleischmann|2011|Appropriations;Science
553|TN-4|R|Scott DesJarlais|DesJarlaisTN04|2011|Agriculture;Armed Services
554|TN-5|R|Andrew Ogles|RepAndrewOgles|2023|Financial Services;Homeland Security
555|TN-6|R|John Rose|RepJohnRose|2019|Agriculture;Financial Services
556|TN-7|R|Matt Van Epps|RepVanEpps|2025|Homeland Security;Science
557|TN-8|R|David Kustoff|RepDavidKustoff|2017|Ways and Means
558|TN-9|D|Steve Cohen|RepCohen|2007|Intelligence;Judiciary
559|TX-1|R|Nathaniel Moran|RepNatMoran|2023|Ethics;Ways and Means
560|TX-2|R|Dan Crenshaw|RepDanCrenshaw|2019|Energy and Commerce;Intelligence
561|TX-3|R|Keith Self|RepKeithSelf|2023|Foreign Affairs;Veterans
562|TX-4|R|Pat Fallon|RepPatFallon|2021|Armed Services;Oversight
563|TX-5|R|Lance Gooden|RepLanceGooden|2019|Armed Services;Judiciary
564|TX-6|R|Jake Ellzey|RepEllzey|2021|Appropriations;Small Business
565|TX-7|D|Lizzie Fletcher|RepFletcher|2019|Energy and Commerce
566|TX-8|R|Morgan Luttrell|RepLuttrell|2023|Armed Services;Homeland Security
567|TX-9|D|Al Green|RepAlGreen|2005|Financial Services;Homeland Security
568|TX-10|R|Michael McCaul|RepMcCaul|2005|Foreign Affairs;Homeland Security
569|TX-11|R|August Pfluger|RepPfluger|2021|Homeland Security;Energy and Commerce
570|TX-12|R|Craig Goldman|RepCraigGoldman|2025|Energy and Commerce
571|TX-13|R|Ronny Jackson|RepRonnyJackson|2021|Agriculture;Armed Services
572|TX-14|R|Randy Weber|TXRandy14|2013|Energy and Commerce;Science
573|TX-15|R|Monica De La Cruz|RepDeLaCruz|2023|Agriculture;Financial Services
574|TX-16|D|Veronica Escobar|RepEscobar|2019|Appropriations;Budget
575|TX-17|R|Pete Sessions|PeteSessions|1997|Financial Services;Oversight
576|TX-18|D|Christian Menefee|RepMenefee|2025|Science
577|TX-19|R|Jodey Arrington|RepArrington|2017|Budget;Ways and Means
578|TX-20|D|Joaquin Castro|JoaquinCastrotx|2013|Foreign Affairs;Intelligence
579|TX-21|R|Chip Roy|RepChipRoy|2019|Budget;Judiciary
580|TX-22|R|Troy Nehls|RepTroyNehls|2021|Judiciary;Transportation
581|TX-23|R|Tony Gonzales|RepTonyGonzales|2021|Appropriations;Homeland Security
582|TX-24|R|Beth Van Duyne|RepVanDuyne|2021|Small Business;Ways and Means
583|TX-25|R|Roger Williams|RepRWilliams|2013|Financial Services;Small Business
584|TX-26|R|Brandon Gill|RepBrandonGill|2025|Budget;Oversight
585|TX-27|R|Michael Cloud|RepMichaelCloud|2018|Appropriations;Oversight
586|TX-28|D|Henry Cuellar|RepCuellar|2005|Appropriations
587|TX-29|D|Sylvia Garcia|RepSylviaGarcia|2019|Financial Services
588|TX-30|D|Jasmine Crockett|RepCrockett|2023|Oversight;Judiciary
589|TX-31|R|John Carter|JudgeCarter|2003|Appropriations
590|TX-32|D|Julie Johnson|RepJulieJohnson|2025|Foreign Affairs;Homeland Security
591|TX-33|D|Marc Veasey|RepVeasey|2013|Energy and Commerce
592|TX-34|D|Vicente Gonzalez|RepGonzalez|2017|Financial Services
593|TX-35|D|Greg Casar|RepGregCasar|2023|Education;Oversight
594|TX-36|R|Brian Babin|RepBrianBabin|2015|Transportation;Science
595|TX-37|D|Lloyd Doggett|RepLloydDoggett|1995|Budget;Ways and Means
596|TX-38|R|Wesley Hunt|RepWesleyHunt|2023|Natural Resources;Judiciary
597|UT-1|R|Blake Moore|RepBlakeMoore|2021|Budget;Ways and Means
598|UT-2|R|Celeste Maloy|RepMaloy|2023|Appropriations;Natural Resources
599|UT-3|R|Mike Kennedy|RepMikeKennedy|2025|Natural Resources;Transportation
600|UT-4|R|Burgess Owens|RepBurgessOwens|2021|Education;Transportation
601|VT-At Large|D|Becca Balint|RepBeccaBalint|2023|Budget;Judiciary
602|VA-1|R|Rob Wittman|RobWittman|2007|Armed Services;Natural Resources
603|VA-2|R|Jennifer Kiggans|RepKiggans|2023|Armed Services;Veterans
604|VA-3|D|Bobby Scott|BobbyScott|1993|Budget;Education
605|VA-4|D|Jennifer McClellan|RepMcClellan|2023|Energy and Commerce
606|VA-5|R|John McGuire|RepMcGuire|2025|Armed Services;Oversight
607|VA-6|R|Ben Cline|RepBenCline|2019|Appropriations;Judiciary
608|VA-7|D|Eugene Vindman|RepVindman|2025|Agriculture;Armed Services
609|VA-8|D|Don Beyer|RepDonBeyer|2015|Ways and Means
610|VA-9|R|Morgan Griffith|RepMGriffith|2011|Energy and Commerce;Rules
611|VA-10|D|Suhas Subramanyam|RepSubramanyam|2025|Oversight;Science
612|VA-11|D|James Walkinshaw|RepWalkinshaw|2025|Oversight;Homeland Security
613|WA-1|D|Suzan DelBene|RepDelBene|2012|Ways and Means
614|WA-2|D|Rick Larsen|RepRickLarsen|2001|Transportation
615|WA-3|D|Marie Perez|RepMariePerez|2023|Appropriations
616|WA-4|R|Dan Newhouse|RepNewhouse|2015|Agriculture;Appropriations
617|WA-5|R|Michael Baumgartner|RepBaumgartner|2025|Education;Foreign Affairs
618|WA-6|D|Emily Randall|RepEmilyRandall|2025|Oversight;Natural Resources
619|WA-7|D|Pramila Jayapal|RepJayapal|2017|Budget;Foreign Affairs
620|WA-8|D|Kim Schrier|RepKimSchrier|2019|Energy and Commerce
621|WA-9|D|Adam Smith|RepAdamSmith|1997|Armed Services
622|WA-10|D|Marilyn Strickland|RepStrickland|2021|Armed Services;Transportation
623|WV-1|R|Carol Miller|RepCarolMiller|2019|Ways and Means
624|WV-2|R|Riley Moore|RepRileyMoore|2025|Appropriations
625|WI-1|R|Bryan Steil|RepBryanSteil|2019|Financial Services;House Administration
626|WI-2|D|Mark Pocan|RepMarkPocan|2013|Appropriations
627|WI-3|R|Derrick Van Orden|RepVanOrden|2023|Agriculture;Armed Services
628|WI-4|D|Gwen Moore|RepGwenMoore|2005|Ways and Means
629|WI-5|R|Scott Fitzgerald|RepFitzgerald|2021|Financial Services;Judiciary
630|WI-6|R|Glenn Grothman|RepGrothman|2015|Budget;Education
631|WI-7|R|Tom Tiffany|RepTomTiffany|2020|Natural Resources;Judiciary
632|WI-8|R|Tony Wied|RepTonyWied|2025|Agriculture;Transportation
633|WY-At Large|R|Harriet Hageman|RepHageman|2023|Natural Resources;Judiciary`

export const houseMembers: Member[] = hRaw.trim().split('\n').map(line => {
  const p = line.split('|')
  const state = p[1].split('-')[0]
  return {
    id: +p[0],
    district: p[1],
    state,
    party: p[2] as 'R' | 'D' | 'I',
    name: p[3],
    handle: p[4],
    since: +p[5],
    committees: p[6].split(';'),
    chamber: 'house' as const,
  }
})

export const allMembers: Member[] = [...senators, ...houseMembers]

export function findMember(id: number): Member | undefined {
  return allMembers.find(m => m.id === id)
}
