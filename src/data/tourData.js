// ── Day 0 · April 5, 2026 ──────────────────────────────────────────────────
const d0 = (folder, file) =>
  `/photos/April 5, 2026 - Arrival/${folder}/${file}`;

const airportPhotos = [
  "IMG_9180.JPG",
  "IMG_9205.JPG",
  "IMG_9211.JPG",
  "IMG_9217.JPG",
  "IMG_9224.JPG",
  "IMG_9233.JPG",
  "IMG_9249.JPG",
  "IMG_9265.JPG",
  "IMG_9273.JPG",
].map((f) => d0("AIRPORT ZAM & MNL", f));

const airportVideos = ["IMG_9253.MOV"].map((f) => d0("AIRPORT ZAM & MNL", f));

const rizalPhotos = [
  "IMG_1811.PNG",
  "IMG_1812.PNG",
  "IMG_9292.JPG",
  "IMG_9297.JPG",
  "IMG_9303.JPG",
  "IMG_9305.JPG",
  "IMG_9311.JPG",
  "IMG_9317.JPG",
  "IMG_9319.JPG",
  "IMG_9333.JPG",
  "IMG_9335.JPG",
  "IMG_9336.JPG",
  "IMG_9351.JPG",
  "IMG_9364.JPG",
  "IMG_9368.JPG",
  "IMG_9370.JPG",
].map((f) => d0("RIZAL PARK", f));

const intramurosPhotos = [
  "IMG_9424.JPG",
  "IMG_9431.JPG",
  "IMG_9433.JPG",
  "IMG_9466.JPG",
  "IMG_9468.JPG",
  "IMG_9473.JPG",
  "IMG_9474.JPG",
].map((f) => d0("INTRAMUROS & OTHER PICS", f));

const churchPhotos = [
  "IMG_9382.JPG",
  "IMG_9391.JPG",
  "IMG_9398.JPG",
  "IMG_9401.JPG",
  "IMG_9403.JPG",
  "IMG_9406.JPG",
  "IMG_9414.JPG",
].map((f) => d0("CHURCH", f));

const moaPhotos = [
  "IMG_9479.JPG",
  "IMG_9480.JPG",
  "IMG_9483.JPG",
  "IMG_9485.JPG",
  "IMG_9486.JPG",
  "IMG_9491.JPG",
].map((f) => d0("MALL OF ASIA", f));

// ── Day 1 · April 6, 2026 ──────────────────────────────────────────────────
const d1 = (folder, file) =>
  `/photos/April 6, 2026 - Monday/${folder}/${file}`;

const hytechPhotos = [
  "07cf0a012fb6b165fda96e4616befe8b.jpeg",
  "8820659b721dab999dd8fb30658d1aad.jpeg",
  "ac5c496c35d83165c3aa6d47e4429b4f.jpeg",
  "b1b210cc8abb5fcdc596b4175edb5a8c.jpeg",
  "IMG_9553.JPG","IMG_9559.JPG","IMG_9567.JPG","IMG_9570.JPG","IMG_9572.JPG",
  "IMG_9582.JPG","IMG_9598.JPG","IMG_9616.JPG","IMG_9620.JPG","IMG_9641.JPG",
  "IMG_9644.JPG","IMG_9655.JPG","IMG_9656.JPG","IMG_9663.JPG","IMG_9666.JPG",
  "IMG_9669.JPG","IMG_9679.JPG","IMG_9680.JPG","IMG_9683.JPG",
].map((f) => d1("HYTEC POWER INC", f));

const opentextPhotos = [
  "IMG_1813.PNG","IMG_1814.PNG","IMG_1815.PNG","IMG_1816.PNG",
  "IMG_9749.JPG","IMG_9757.JPG","IMG_9780.JPG","IMG_9784.JPG",
].map((f) => d1("OPENTEXT", f));


// ── Day 2 · April 7, 2026 ──────────────────────────────────────────────────
const d2 = (folder, file) =>
  `/photos/April 7, 2026 - Tuesday/${folder}/${file}`;

const mmdaPhotos = [
  "40ec1da04223f9c502d30b699bdffbbe.jpeg",
  "494772eda4cfe56b20aab011143f0435.jpeg",
  "9b52000be2c4c862656643020bd9cd53.jpeg",
  "f6566b5fcc273b77d91af249bf60fe45.jpeg",
  "IMG_9840.JPG","IMG_9848.JPG","IMG_9865.JPG","IMG_9877.JPG","IMG_9887.JPG",
  "IMG_9888.JPG","IMG_9894.JPG","IMG_9927.JPG","IMG_9928.JPG","IMG_9936.JPG",
  "IMG_9947.JPG","IMG_9952.JPG",
].map((f) => d2("MMDA COMMAND CENTER", f));

const mmdaVideos = ["IMG_9866.MOV"].map((f) => d2("MMDA COMMAND CENTER", f));

const telePhotos = [
  "130403531cd1bebec49aee88795c1f3e.jpeg",
  "27763f8cbbd6c19b23fca4e0ccd1ec93.jpeg",
  "288d81eb2edeab6ea9c73902a14a2c3a.jpeg",
  "57934c244dd6c7151fd1137ed71e018d(1).jpeg",
  "57934c244dd6c7151fd1137ed71e018d.jpeg",
  "838f2d4a214d3bbabe69b88e8ebcdd99.jpeg",
  "afef4f0eff989ff3b57c75aec788db0b.jpeg",
  "da46bb020616e5be23b884aaf1cde432.jpeg",
  "dd9636afffcb987c48c2065533b1d039.jpeg",
  "e042adadf3529e8fe5e743d3be482726.jpeg",
  "f0b0b7f503007fd000faff21d888e576.jpeg",
  "IMG_0018.JPG","IMG_0026.JPG","IMG_9979.JPG","IMG_9980.JPG","IMG_9984.JPG",
  "IMG_9985.JPG","IMG_9992.JPG","IMG_9994.JPG","IMG_9997.JPG",
].map((f) => d2("TELEPERFORMANCE PHILIPPINES INC", f));

// ── Day 3 · April 8, 2026 ──────────────────────────────────────────────────
const d3 = (folder, file) =>
  `/photos/April 8, 2026 - Wednesday/${folder}/${file}`;

const topPegPhotos = [
  "IMG_0075.JPG","IMG_0084.JPG","IMG_0087.JPG","IMG_0091.JPG","IMG_0101.JPG",
  "IMG_0102.JPG","IMG_0106.JPG","IMG_0109.JPG","IMG_0113.JPG","IMG_0117.JPG",
  "IMG_0135.JPG",
].map((f) => d3("TOPPEG", f));

const microSourcingPhotos = [
  "IMG_0150.JPG","IMG_0158.JPG","IMG_0162.JPG","IMG_0170.JPG","IMG_0172.JPG",
  "IMG_0181.JPG","IMG_0185.JPG","IMG_0188.JPG","IMG_0190.JPG","IMG_0191.JPG",
  "IMG_0197.JPG",
].map((f) => d3("MICROSOURCING", f));

// ── Day 4 · April 9, 2026 ──────────────────────────────────────────────────
const d4 = (folder, file) =>
  `/photos/April 9, 2026 - Thursday/${folder}/${file}`;

const peoplesParkPhotos = [
  "IMG_0263.JPG","IMG_0276(1).JPG","IMG_0276.JPG","IMG_0280.JPG",
  "IMG_0325.JPG","IMG_0328.JPG","IMG_0329.JPG","IMG_0344.JPG",
  "IMG_0345.JPG","IMG_0349.JPG","IMG_0351(1).JPG","IMG_0351.JPG",
  "IMG_0356.JPG","IMG_0376.JPG",
].map((f) => d4("PEOPLE’S PARK IN THE SKY", f));

const skyRanchPhotos = [
  "IMG_0427.JPG","IMG_0428.JPG","IMG_0438.JPG","IMG_0439.JPG","IMG_0440.JPG",
  "IMG_0442.JPG","IMG_0465.JPG","IMG_0469.JPG","IMG_0514.JPG","IMG_0516.JPG",
  "IMG_0547.JPG","IMG_0550.JPG","IMG_0558.JPG","IMG_9782.jpg","IMG_9783.jpg",
].map((f) => d4("TAGAYTAY-SKYRANCH", f));

// ── Day 5 · April 10, 2026 ─────────────────────────────────────────────────
const d5 = (folder, file) =>
  `/photos/April 10, 2026 - Friday/${folder}/${file}`;

const strawberryPhotos = [
  "77453f1908b6729610b64e88f3e3e4ca.jpeg","ed7b36feb9c32c05aca54513d5d5d558.jpeg",
  "IMG_0576.JPG","IMG_0586.JPG","IMG_0587.JPG","IMG_0641.JPG",
  "IMG_0643.JPG","IMG_0644.JPG","IMG_0651.JPG","IMG_0661.JPG",
].map((f) => d5("BAGUIO - STRAWBERRY FAM", f));

const bellChurchPhotos = [
  "IMG_0678.JPG","IMG_0681.JPG","IMG_0685.JPG","IMG_0694.JPG",
  "IMG_0697.JPG","IMG_0699.JPG","IMG_0721.JPG","IMG_0722.JPG",
].map((f) => d5("BAGUIO - BELL CHURCH", f));

const pmaPhotos = [
  "2b5b50ff1c0dd65b25d5ee05ae3a0711.jpeg",
  "93fb0182f3adc925637644b3732fa7be.jpeg",
  "957bbcbacdb1e9162c7d3dde152659ed.jpeg",
  "IMG_0751.JPG","IMG_0753.JPG","IMG_0758.JPG","IMG_0766.JPG","IMG_0770.JPG",
  "IMG_0774.JPG","IMG_0779.JPG","IMG_0782.JPG","IMG_0785.JPG","IMG_0790.JPG",
].map((f) => d5("PMA", f));

const mansionPhotos = [
  "IMG_0817.JPG","IMG_0818.JPG","IMG_0819.JPG","IMG_0821.JPG",
].map((f) => d5("THE MANSION", f));

const minesViewPhotos = [
  "IMG_0825.JPG","IMG_0828.JPG","IMG_0833.JPG","IMG_0848.JPG",
  "IMG_0858.JPG","IMG_0859.JPG","IMG_0883.JPG","IMG_0905.JPG",
].map((f) => d5("MINES VIEW PARK", f));

const freeTimePhotos = [
  "IMG_0924.JPG","IMG_0934.JPG","IMG_0942.JPG","IMG_0950.JPG",
  "IMG_0953.JPG","IMG_0958.JPG","IMG_0969.JPG","IMG_3666.JPG",
].map((f) => d5("FREE TIME - SM BAGUIO-GOODTASTE RESTAURANT-NIGHT MARKET", f));

// ── Day 6 · April 11, 2026 ─────────────────────────────────────────────────
const d6 = (folder, file) =>
  `/photos/April 11, 2026 - Saturday/${folder}/${file}`;

const burnhamPhotos = [
  "IMG_0979.JPG","IMG_0980.JPG","IMG_0985.JPG","IMG_1008.JPG","IMG_1009.JPG",
  "IMG_1010.JPG","IMG_1018.JPG","IMG_1021.JPG","IMG_1029.JPG","IMG_1035.JPG",
  "IMG_1036.JPG","IMG_1049.JPG","IMG_1050.JPG","IMG_1053.JPG","IMG_1057.JPG",
  "IMG_1060.JPG",
].map((f) => d6("FREE TIME - BURNHAM PARK", f));

const burnhamVideos = [
  "IMG_1020.MOV","IMG_1048.MOV",
].map((f) => d6("FREE TIME - BURNHAM PARK", f));

// ── Day 7 · April 12, 2026 ─────────────────────────────────────────────────
const departurePhotos = [
  "IMG_1126.JPG","IMG_1135.JPG","IMG_1137.JPG","IMG_1140.JPG","IMG_1149.JPG",
  "IMG_1150.JPG","IMG_1155.JPG","IMG_1161.JPG","IMG_1165.JPG","IMG_1173.JPG",
  "IMG_1176.JPG","IMG_1197.JPG","IMG_1217.JPG","IMG_1223.JPG","IMG_1225.JPG",
  "IMG_1227.JPG","IMG_1228.JPG","IMG_1229.JPG","IMG_1234.JPG","IMG_1245.JPG",
  "IMG_1249.JPG","IMG_1257.JPG","IMG_1273.JPG","IMG_1280.JPG","IMG_1282.JPG",
].map((f) => `/photos/April 12, 2026 - Sunday Departure from manila/${f}`);

export const tourDays = [
  {
    id: "day-0",
    slug: "day-0",
    label: "Day 0",
    date: "April 5, 2026",
    dayNum: "00",
    title: "Historical Manila",
    subtitle: "ZIA · NAIA · Rizal Park · Intramuros · Manila Cathedral · MOA",
    theme: "heritage",
    themeColor: "#1C1C1E",
    coverImg: "",
    vibe: "The Heritage Core — a full day that begins in the air over Mindanao and ends at the walls of a 16th-century colonial city.",
    intro:
      "Day 00 starts before any scheduled site: a morning flight from Zamboanga International Airport, touchdown at NAIA, then straight into the city. By afternoon the group is walking through Luneta, Fort Santiago, Manila Cathedral, and the bayside scale of SM Mall of Asia—all within a few kilometres of each other.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "zia-departure",
        title: "Departure — Zamboanga International Airport",
        location: "Zamboanga City, Mindanao",
        address: "Zamboanga International Airport, Zamboanga City",
        description:
          "Zamboanga International Airport (IATA: ZAM) is the primary air gateway of Zamboanga City—one of the oldest Spanish colonial settlements in the Philippines, founded in the 17th century. The airport handles domestic routes to Manila, Cebu, and Davao, with Cebu Pacific and Philippine Airlines serving the Zamboanga–Manila corridor. For most of the group, this departure marked the first time leaving Mindanao by air.",
        story:
          "Departure airports carry a different weight when you know you're leaving for a week. Zamboanga's terminal is compact—everything visible from a single concourse—which makes the contrast with NAIA especially sharp on arrival. The flight covers roughly 850 km in just under two hours. The city below, seen from the window on ascent, looks different when you know you'll be comparing it to Manila for the next seven days.",
        trivia: [
          "Zamboanga City is among the oldest Spanish colonial settlements in the Philippines, established in the 17th century—the same era as the walls of Intramuros visited later that same day.",
          "The Zamboanga–Manila air corridor is one of the busiest domestic routes in the Philippines, served by Cebu Pacific and Philippine Airlines.",
          "Zamboanga International Airport is the primary hub for Western Mindanao, linking the region to Luzon and the Visayas.",
        ],
        photos: [],
        videos: [],
      },
      {
        id: "naia-arrival",
        title: "Arrival — Ninoy Aquino International Airport",
        location: "Pasay City, Metro Manila",
        address: "NAIA Terminal, Pasay City, Metro Manila",
        description:
          "Ninoy Aquino International Airport (NAIA) is the Philippines' busiest airport and primary international gateway, handling over 45 million passengers annually across four terminals. NAIA Terminal 4—the domestic arrivals point for many provincial routes—is the oldest of the four: a compact structure that funnels passengers directly into the ground transport corridor. Stepping out of arrivals at NAIA is the first direct contact with Metro Manila's density and infrastructure scale.",
        story:
          "NAIA is chaotic by design—it was never built for the volume it now processes. The arrivals exit deposits you immediately into one of the most active ground transport zones in the metro: taxis, airport shuttles, GRAB pickup lanes, and the walkway to the terminal road all converging at once. For anyone arriving from a smaller city, the pace shift is instant. The drive from NAIA to Quezon City alone—where the group was based—takes anywhere from 45 minutes to over an hour, which is its own first lesson in Metro Manila traffic.",
        trivia: [
          "NAIA processes over 45 million passengers per year across its four terminals, making it the busiest airport in the Philippines.",
          "The airport is named after Senator Benigno 'Ninoy' Aquino Jr., assassinated on the tarmac upon returning to the Philippines in 1983.",
          "Despite its volume, NAIA consistently ranks among the most congested airports in Asia-Pacific—its infrastructure significantly pre-dates its current passenger load.",
        ],
        photos: airportPhotos,
        videos: airportVideos,
      },
      {
        id: "rizal-park",
        title: "Rizal Park (Luneta)",
        location: "Ermita, Manila",
        address: "Roxas Boulevard, Ermita, Manila",
        description:
          "Stretching 58 hectares along the Roxas Boulevard waterfront, Luneta is one of Southeast Asia's largest urban civic parks. Three distinct landmarks coexist within its grounds: the Rizal Monument—national hero's tomb and bronze statue—the separate execution site where Rizal fell in 1896, and a 1965 topographic scale model of the entire Philippine archipelago set flush into the earth.",
        story:
          "Most visitors head directly to the monument and walk past the execution site entirely—it's positioned on the opposite end, a few minutes' walk away, and is easy to miss without a map. The ground-level relief map is the most overlooked detail of all: a full-scale topographic representation of every island in the archipelago built into the ground. The park's spatial layout is deliberate, each element placed to reinforce its historical weight. Navigating it on foot is the only way to understand how the pieces relate.",
        trivia: [
          "Luneta covers 58 hectares, placing it among the largest urban green spaces in Asia.",
          "Rizal was executed on this ground on December 30, 1896—a date now observed nationally as Rizal Day.",
          "The 1965 relief map embedded in the park's surface replicates the full Philippine archipelago at scale.",
        ],
        photos: rizalPhotos,
        videos: [],
      },
      {
        id: "intramuros",
        title: "Intramuros & Fort Santiago",
        location: "The Walled City, Manila",
        address: "Intramuros, Manila",
        description:
          "Founded by Spanish colonisers in 1571, Intramuros is Manila's original settlement—the fortified city-within-a-city that served as the colonial capital for over three centuries. Its stone walls reach up to seven metres thick in critical sections, engineered specifically to withstand cannon fire. That physical 'firewall' is essentially the earliest version of a hardened perimeter. Fort Santiago, the most intact military installation inside the walls, served as garrison and detention facility through the Japanese occupation of World War II.",
        story:
          "Fort Santiago's dungeon level held Rizal the night before his execution. The path he walked from the cell to Luneta is still marked and walkable. The seven-metre walls weren't just defensive engineering—they were the original urban planning boundary for an entire colonial settlement. Walking the perimeter on foot gives you a sense of the scale that photographs can't.",
        trivia: [
          "Intramuros was established in 1571. The name comes from Latin—'within the walls.'",
          "The walls of Intramuros measure up to 7 metres thick in certain sections, built to resist cannon fire from colonial-era warships.",
          "Fort Santiago's dungeon held Rizal on the night before his execution. The path he walked to Luneta remains traceable today.",
        ],
        photos: intramurosPhotos,
        videos: [],
      },
      {
        id: "manila-cathedral",
        title: "Manila Cathedral",
        location: "Intramuros, Manila",
        address: "Cabildo St, Intramuros, Manila",
        description:
          "Standing at the centre of Intramuros, the Manila Cathedral has been destroyed and rebuilt eight separate times by earthquake, fire, and war—its current structure completed in 1958 on the original footprint. Inside: detailed ceiling mosaics, vaulted nave arches, and a pipe organ with over 4,500 pipes, ranking it among the largest in Asia. The cathedral holds daily mass and remains an active parish.",
        story:
          "Eight iterations on the same site, each time rebuilt using the Latin cross floor plan of the one before it. The organ's 4,500-pipe count is easy to register as a statistic and miss as a physical scale—standing beneath it, the instrument occupies the rear of the hall from floor to vault. The ceiling mosaic work is visible only at certain light levels and rewards time to look up.",
        trivia: [
          "The Manila Cathedral has been destroyed and rebuilt eight times—by earthquake, fire, and the destruction of World War II.",
          "Its formal title is the Minor Basilica and Metropolitan Cathedral of the Immaculate Conception.",
          "The cathedral's pipe organ contains over 4,500 pipes, making it one of the largest instruments of its kind in Asia.",
        ],
        photos: churchPhotos,
        videos: [],
      },
      {
        id: "sm-mall-of-asia",
        title: "SM Mall of Asia",
        location: "Pasay City, Metro Manila",
        address: "J.W. Diokno Blvd, Pasay, Metro Manila",
        description:
          "Built on reclaimed land along the Manila Bay shoreline in Pasay, SM Mall of Asia covers over 407,000 sqm of gross floor area. When it opened in 2006, it held the title of the world's largest mall. The complex includes the main mall structure, MOA Arena (15,000-seat capacity), an IMAX theatre, a skating rink, and a bayside promenade that runs along the full exterior facing Manila Bay.",
        story:
          "The bayside promenade is the most underrated part of the MOA complex—an open-air walkway facing the bay directly, with unobstructed sunset views, food stalls, and weekend fireworks. The mall interior divides into four major blocks; a directory is essential for first-time navigation. The Arena hosts concerts and sporting events independently of the retail complex.",
        trivia: [
          "SM Mall of Asia opened in 2006 and briefly held the title of the world's largest mall at over 407,000 sqm of gross floor area.",
          "The complex is built on reclaimed land along Manila Bay—the same waterfront renowned for its sunset views.",
          "MOA Arena holds 15,000 people and serves as one of Metro Manila's primary large-event venues.",
        ],
        photos: moaPhotos,
        videos: [],
      },
    ],
  },

  {
    id: "day-1",
    slug: "day-1",
    label: "Day 1",
    date: "April 6, 2026",
    dayNum: "01",
    title: "Corporate Sector",
    subtitle: "Hytech Power · OpenText BGC",
    theme: "corporate",
    themeColor: "#1A2C4E",
    coverImg: "",
    vibe: "Artistic Engineering — from simulation hardware built by interns, to enterprise software managing global information at scale.",
    intro:
      "Two facility visits covering opposite ends of the industry: Hytech Power with its hands-on simulation hardware and intern-built robotics, and OpenText's BGC office operating at the enterprise software and international operations level. The contrast was deliberate—both companies are building systems, just at very different scales.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "hytech-power",
        title: "Hytech Power Inc.",
        location: "Metro Manila",
        address: "Metro Manila, Philippines",
        description:
          "Hytech Power is a Philippine industrial training technology company specialising in simulation hardware. Their facility houses VR welding simulators with full haptic feedback that replicate the physical resistance of live welding without material cost or safety exposure, alongside anatomical training models, transistor and circuit display boards, and robotics units built entirely by their student intern programme—several of which have placed in national competitions.",
        story:
          "The VR welding setup is the most technically interesting element: pressure-sensitive haptic feedback that mimics the resistance of actual arc or MIG welding, letting students train their technique in a virtual environment. The robotics section demonstrates something rarer—hardware that student interns designed and built, placed in national competition. The company's intern-to-product pipeline is genuinely uncommon.",
        trivia: [
          "Hytech Power's VR welding simulator replicates arc and MIG welding with haptic feedback, removing material cost and safety overhead from technical training.",
          "Several robotics units on display were built by the company's student intern programme and have placed in national competitions.",
          "Simulation-based industrial training reduces both cost and accident risk compared to live-equipment instruction.",
        ],
        photos: hytechPhotos,
        videos: [],
      },
      {
        id: "opentext-bgc",
        title: "OpenText",
        location: "Bonifacio Global City, Taguig",
        address: "Bonifacio Global City, Taguig, Metro Manila",
        description:
          "OpenText is a global Enterprise Information Management company headquartered in Canada, with operations in nearly every major market worldwide. Their Bonifacio Global City office in Taguig handles international client accounts across multiple verticals. The visit was structured as a career orientation covering the company's operational hierarchy, available IT roles, and the specific hiring process from resume screening to technical assessment.",
        story:
          "The BGC district itself is worth registering: walkable, consistently zoned, and deliberately designed as a contrast to the organic density of surrounding Metro Manila. The orientation Q&A with the recruitment team was the most direct part of the visit—clear answers on what their technical assessments actually test, and what they screen for at the resume stage. That kind of unfiltered career briefing doesn't appear in any job description.",
        trivia: [
          "OpenText operates in over 100 countries, managing enterprise information systems for organisations across virtually every industry sector.",
          "The BGC district in Taguig is one of the few deliberately planned urban developments in Metro Manila, designed with walkability and mixed-use zoning from the ground up.",
          "Enterprise Information Management covers document control, digital forensics, cybersecurity, and content services—all under a single operational umbrella.",
        ],
        photos: opentextPhotos,
        videos: [],
      },
    ],
  },

  {
    id: "day-2",
    slug: "day-2",
    label: "Day 2",
    date: "April 7, 2026",
    dayNum: "02",
    title: "Government Systems & BPO Scale",
    subtitle: "MMDA · Teleperformance",
    theme: "government",
    themeColor: "#1F3A2A",
    coverImg: "",
    vibe: "The Backbone — two operations running around the clock, one managing city-wide infrastructure, one handling global customer volume.",
    intro:
      "Day 2 covered two 24-hour operations at opposite ends of the public-private spectrum: MMDA's metro-wide traffic and emergency command infrastructure running on an air-gapped fibre-optic network, and Teleperformance's massive global customer experience operation with AI already embedded into daily workflow.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "mmda",
        title: "MMDA Headquarters",
        location: "Makati City, Metro Manila",
        address: "Makati City, Metro Manila",
        description:
          "The Metropolitan Manila Development Authority coordinates traffic management, flood control, and emergency response across all 16 cities and municipalities of Metro Manila. Their command centre runs on a private underground fibre-optic loop isolated from commercial ISPs—a localized air-gapped network that keeps the live feed system operational independent of public internet status. A floor-to-ceiling video wall displays simultaneous live feeds from hundreds of traffic and CCTV cameras across the metro.",
        story:
          "The command centre is an active operations room, not a demonstration setup. The NCAP system identifies traffic violations from live camera footage using computer vision and licence plate recognition—no officer presence required at each location. The isolated fibre-optic network is the critical infrastructure detail: it means the system cannot be taken offline by a commercial ISP outage or public network disruption. That design decision mirrors how critical systems in other sectors handle uptime requirements.",
        trivia: [
          "MMDA's command centre operates on a private underground fibre-optic network isolated from commercial ISPs—ensuring uninterrupted feed performance regardless of public internet status.",
          "The NCAP violation detection system identifies traffic infractions automatically using computer vision and licence plate recognition, without requiring officer presence.",
          "MMDA coordinates emergency response and flood monitoring across all 16 cities of Metro Manila simultaneously.",
        ],
        photos: mmdaPhotos,
        videos: mmdaVideos,
      },
      {
        id: "teleperformance",
        title: "Teleperformance Philippines",
        location: "Metro Manila",
        address: "Metro Manila, Philippines",
        description:
          "Teleperformance is one of the world's largest customer experience management companies, operating in nearly 100 countries. Their Philippine operations manage international accounts across multiple service verticals, with AI-assisted tools already integrated into the standard agent workflow—automated ticketing, intelligent call routing, and real-time guidance systems running alongside human operators.",
        story:
          "The operations floor is organised by client account clusters rather than by function. Each cluster has dedicated team leads and quality assurance personnel. AI augmentation is embedded as standard procedure—not a pilot programme—handling routing, ticket creation, and live agent prompting in real time. The Philippine BPO sector generates over $26 billion in annual revenue; this visit made that number visible at floor level.",
        trivia: [
          "Teleperformance operates in nearly 100 countries, making it one of the largest customer experience management firms globally.",
          "The Philippines BPO industry employs over 1.3 million workers and generates more than $26 billion in annual revenue.",
          "AI tools are already running as standard infrastructure in BPO operations—handling routing, ticketing, and real-time agent guidance alongside human staff.",
        ],
        photos: telePhotos,
        videos: [],
      },
    ],
  },

  {
    id: "day-3",
    slug: "day-3",
    label: "Day 3",
    date: "April 8, 2026",
    dayNum: "03",
    title: "Production Pipelines",
    subtitle: "Top Peg Animation · MicroSourcing",
    theme: "creative",
    themeColor: "#3B1F4A",
    coverImg: "",
    vibe: "Creative Infrastructure — two production models: one building animation frame by frame for global screens, the other building dedicated remote teams for international operations.",
    intro:
      "Two contrasting production environments—Top Peg Animation Studio producing content for Disney, Nintendo, and Netflix's Trese from Quezon City, and MicroSourcing building dedicated offshore teams for international clients. Both are in the business of sustained output, just across entirely different pipelines.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "top-peg",
        title: "Top Peg Animation Studio",
        location: "Quezon City, Metro Manila",
        address: "Quezon City, Metro Manila",
        description:
          "Top Peg Animation and Creative Studio in Quezon City has production credits on internationally distributed properties—Disney, Nintendo, and Netflix's Trese. The studio operates the full animation pipeline internally: storyboarding, layout, key animation, in-betweening, cleanup, colouring, and final compositing—each stage handled by a specialist department with its own production schedule.",
        story:
          "Walking through the studio is essentially a sequential tour of how an animation project moves from concept to finished frames. Each department is at a different pipeline stage on different projects simultaneously—you can see the workflow at multiple points of completion at once. The Pen Display demo lets visitors draw directly on the pressure-sensitive surface, giving a brief hands-on feel for the hardware professional animators work on daily.",
        trivia: [
          "Top Peg holds production credits on content for Disney, Nintendo, and Netflix's Trese—all produced from their Quezon City studio.",
          "Professional animation production divides into distinct specialist stages: storyboarding, layout, key animation, in-betweening, cleanup, colour, and compositing.",
          "Wacom Pen Display hardware allows animators to draw directly on screen with pressure-sensitive input, replacing the traditional separated tablet-and-monitor setup.",
        ],
        photos: topPegPhotos,
        videos: [],
      },
      {
        id: "microsourcing",
        title: "MicroSourcing Philippines",
        location: "Pasay City, Metro Manila",
        address: "Pasay City, Metro Manila",
        description:
          "MicroSourcing builds dedicated offshore teams for international companies across IT, finance, marketing, and operations. Unlike a standard BPO model, each team works exclusively for one client—embedded in that client's operational structure rather than rotating across accounts. The visit included a briefing from department leaders on the model's mechanics, what competencies are in highest demand, and how Philippine IT graduates are positioned in the global talent market.",
        story:
          "The key distinction between BPO and dedicated staffing is the single-client relationship: the team works inside one company's operations, not as a shared resource. That changes the nature of the role considerably—embedded teams build institutional knowledge over time rather than rotating through scripts. The Philippines consistently ranks as a top offshore staffing destination due to English precision, technical education output, and time-zone coverage of both US and Australian business hours.",
        trivia: [
          "MicroSourcing is one of the Philippines' largest dedicated offshore staffing providers, serving clients across the US, Australia, and Europe.",
          "Dedicated offshore staffing differs from BPO: teams work exclusively for a single client, embedded in that client's operations rather than shared across accounts.",
          "The Philippines ranks among the top global offshore staffing destinations, supported by English proficiency, IT education volume, and favourable time-zone coverage.",
        ],
        photos: microSourcingPhotos,
        videos: [],
      },
    ],
  },

  {
    id: "day-4",
    slug: "day-4",
    label: "Day 4",
    date: "April 9, 2026",
    dayNum: "04",
    title: "Tagaytay City",
    subtitle: "People's Park in the Sky · Sky Ranch",
    theme: "nature",
    themeColor: "#1A3A2A",
    coverImg: "",
    vibe: "Nature's Interface — Taal Volcano viewed as a study in nested geological design. A lake within a lake within a caldera.",
    intro:
      "Araw ng Kagitingan cleared the corporate itinerary. The group moved to Tagaytay instead—700 metres above sea level, Taal Volcano directly in view, no schedule. Two sites on the ridge: People's Park in the Sky at the summit of Mount Sungay, then Sky Ranch for the aerial vantage point from the Sky Eye Ferris wheel.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "peoples-park",
        title: "People's Park in the Sky",
        location: "Tagaytay City, Cavite",
        address: "Mount Sungay, Tagaytay City, Cavite — 700m above sea level",
        description:
          "People's Park in the Sky sits at the summit of Mount Sungay, the highest point along the Tagaytay ridge at approximately 700 metres elevation. From here, the full Taal complex is visible simultaneously: the outer caldera lake, the volcanic island within it, and the active crater lake nested inside the island. A lake within a lake within a caldera—one of the most layered geological formations of its type, often drawn as an analogy for nested data structures in nature.",
        story:
          "What registers first at this altitude is scale. The outer lake is large enough that the island looks small from the ridge—until you understand that the island itself contains another complete lake. The summit wind keeps temperatures noticeably cooler than the Tagaytay main road, and the 360-degree view extends into the Cavite and Batangas lowlands on clear days.",
        trivia: [
          "Taal is a volcanic island sitting inside a lake, which itself sits inside a larger volcanic caldera—one of the most uniquely nested geological formations in the world.",
          "The Tagaytay ridge sits at approximately 700 metres above sea level, giving it a consistently cooler climate than Metro Manila throughout the year.",
          "Taal Volcano is among the most active in the Philippines with over 30 recorded eruptions in historical records.",
        ],
        photos: peoplesParkPhotos,
        videos: [],
      },
      {
        id: "sky-ranch",
        title: "Sky Ranch Tagaytay",
        location: "Tagaytay City, Cavite",
        address: "Tagaytay City, Cavite — along the ridge",
        description:
          "Sky Ranch is an amusement park positioned along the Tagaytay ridge with Taal Volcano as the permanent backdrop. The main draw is the Sky Eye Ferris wheel—at its apex, each gondola looks directly out over Taal Lake and the surrounding ridge, with each rotation taking approximately ten minutes.",
        story:
          "The Sky Eye's value is what you see at the top rather than the ride mechanics. Each rotation brings the volcano and lake into direct sightline overhead for a sustained window. The park handles large tour groups efficiently, which matters for itinerary logistics when you're moving a full group through a leisure stop.",
        trivia: [
          "The Sky Eye Ferris wheel at Sky Ranch is one of the tallest in the Philippines, providing an aerial sightline directly over Taal Lake.",
          "Sky Ranch sits on the Tagaytay ridge at an elevation that gives all outdoor attractions a naturally cooler ambient temperature year-round.",
          "Tagaytay is approximately 55 km south of Manila and is one of the most visited weekend destinations in Luzon.",
        ],
        photos: skyRanchPhotos,
        videos: [],
      },
    ],
  },

  {
    id: "day-5",
    slug: "day-5",
    label: "Day 5",
    date: "April 10, 2026",
    dayNum: "05",
    title: "Baguio City",
    subtitle:
      "La Trinidad · Bell Church · PMA · The Mansion · Mines View · Night Market",
    theme: "mountain",
    themeColor: "#1A2A3A",
    coverImg: "",
    vibe: "Smart City Architecture — urban planning at altitude. Six sites across a single day, from highland agriculture to military discipline to a night market with enforced pedestrian flow.",
    intro:
      "Overnight bus from Manila to Baguio arriving pre-dawn at 1,500 metres elevation. Six sites across a full day: La Trinidad Strawberry Farm, Bell Church, the Philippine Military Academy, The Mansion, Mines View Park, and the Harrison Road Night Market. Baguio is a UNESCO Creative City—proof that culture and urban structure can scale together.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "strawberry-farm",
        title: "La Trinidad Strawberry Farm",
        location: "La Trinidad, Benguet",
        address: "La Trinidad, Benguet — Strawberry Capital of the Philippines",
        description:
          "La Trinidad in Benguet is officially designated the Strawberry Capital of the Philippines. Its highland climate and valley floor elevation sustain commercial strawberry cultivation that supplies much of Luzon. The farms along the valley floor are active agricultural operations open to walk-through visits, with visible irrigation systems and cultivation rows across the full plots.",
        story:
          "Walking the cultivation rows is a different scale experience from seeing produce in a market. The volume and organisation of the rows make the agricultural supply chain tangible. Strawberry taho—a highland variation of the classic Filipino street snack, served cold with sago and syrup—is sold by vendors near the entrance and is only available in this region.",
        trivia: [
          "La Trinidad is officially recognised as the Strawberry Capital of the Philippines.",
          "Strawberry cultivation in Benguet relies on the province's cool highland climate—conditions that aren't replicable at lower elevations.",
          "Strawberry taho is a regional specialty unique to the Baguio-Benguet area and unavailable elsewhere in the Philippines.",
        ],
        photos: strawberryPhotos,
        videos: [],
      },
      {
        id: "bell-church",
        title: "Bell Church",
        location: "La Trinidad / Baguio Border",
        address: "Kilometer 3, La Trinidad, Benguet",
        description:
          "Bell Church is a Taoist-Buddhist temple complex established in 1960 by the Chinese community in the Baguio-La Trinidad area. The compound ascends the hillside across multiple tiered levels connected by staircases, with pagoda structures, dragon sculptures, hanging bell installations, and Chinese calligraphic inscriptions becoming more elaborate at higher tiers.",
        story:
          "Navigation is vertical—you enter at street level and climb. The dragon sculptures grow larger and more detailed toward the upper tiers. The bell installations near the top produce constant ambient resonance when wind moves through them. From the highest terrace, the view opens across the La Trinidad valley. The descent back through the sculpture sequence in reverse is a different visual experience from the climb.",
        trivia: [
          "Bell Church was established in 1960 by Chinese immigrants who settled in the Baguio-Benguet region.",
          "The temple follows a syncretic Taoist-Buddhist tradition common among Chinese diaspora communities throughout Southeast Asia.",
          "The hanging bells throughout the upper tiers are rung by worshippers as a form of prayer—the sound they produce is continuous when wind passes through.",
        ],
        photos: bellChurchPhotos,
        videos: [],
      },
      {
        id: "pma",
        title: "Philippine Military Academy (PMA)",
        location: "Fort del Pilar, Baguio City",
        address: "Fort del Pilar, Baguio City, Benguet",
        description:
          "The Philippine Military Academy at Fort del Pilar in Baguio City covers 373 hectares as a fully self-contained military installation—hospital, housing, fuel stations, training grounds, parade area, and Melchor Hall all within the perimeter. The Academy has produced every Chief of Staff of the Armed Forces of the Philippines since its establishment.",
        story:
          "Public access is limited to designated areas from the main gate. What registers immediately is scale—the installation perimeter is extensive, and the public-accessible grounds near Melchor Hall give only a partial impression of the full complex. The static WWII aircraft on display near the entrance is an unexpected detail. The disciplined layout of the visible grounds makes the 373-hectare figure feel real rather than abstract.",
        trivia: [
          "Fort del Pilar covers 373 hectares and functions as a fully self-contained military installation with its own hospital, housing, and infrastructure.",
          "The PMA has produced every Chief of Staff of the Armed Forces of the Philippines since the Academy's founding.",
          "WWII-era aircraft preserved on static display near the entrance form part of the Academy's historical collection.",
        ],
        photos: pmaPhotos,
        videos: [],
      },
      {
        id: "the-mansion",
        title: "The Mansion",
        location: "Leonard Wood Road, Baguio City",
        address: "Leonard Wood Road, Baguio City, Benguet",
        description:
          "The Mansion is the official summer residence of the President of the Philippines, built in 1908 during the American colonial period in Victorian architectural style. It is one of the very few structures in Baguio that survived World War II intact. Every Philippine president since Manuel Quezon has used the property as an official working retreat.",
        story:
          "Visitors access only the area immediately around the main gate—the ornate wrought-iron entrance and the formal garden immediately behind it. The adjacent Wright Park offers the public access to the Pool of Pines and a horse-riding circuit, providing a longer stay option beyond the gate viewpoint.",
        trivia: [
          "The Mansion was built in 1908 and served as the summer residence of American colonial governors before becoming the official presidential retreat.",
          "It is among the very few structures in Baguio that survived the destruction of World War II intact.",
          "Every Philippine president since Manuel Quezon has used The Mansion as an official working residence during summer sessions.",
        ],
        photos: mansionPhotos,
        videos: [],
      },
      {
        id: "mines-view",
        title: "Mines View Park",
        location: "Mines View, Baguio City",
        address: "Mines View, Baguio City, Benguet",
        description:
          "Mines View Park is a public lookout point in Baguio City positioned above the former gold and copper mining corridor of Itogon, Benguet. The observation deck provides an unobstructed sightline over the Cordillera mountain ranges and the mining valley below. At ground level, the park hosts souvenir stalls, food vendors, and traditional Igorot attire available for hire.",
        story:
          "The Itogon mines visible from the deck were among Southeast Asia's most productive gold and copper operations through the 20th century. From this elevation, the terrain the mines had to operate within becomes legible in a way no photograph captures. Traditional Igorot attire—complete with headdress and accessories—is available at rental stations for group photographs.",
        trivia: [
          "The Itogon mines visible from the observation deck were among the most productive gold and copper operations in Southeast Asia during the 20th century.",
          "The Igorot are the indigenous highland peoples of the Cordillera Administrative Region, with distinct cultural traditions from lowland Philippine communities.",
          "Mines View Park sits at an elevation that gives it consistently clear sightlines across the Benguet mountain ranges.",
        ],
        photos: minesViewPhotos,
        videos: [],
      },
      {
        id: "night-market",
        title: "Harrison Road Night Market",
        location: "Harrison Road, Baguio City",
        address: "Harrison Road, Baguio City, Benguet",
        description:
          "The Baguio Night Market operates along Harrison Road every evening, functioning as one of the Philippines' most well-known night markets—particularly recognised for its dense selection of second-hand and surplus clothing. The city manages foot traffic through a single-direction pedestrian flow system enforced by city staff and police along the full market length.",
        story:
          "The one-directional flow system prevents the standard congestion of a dense street market—you move continuously forward without squeezing past oncoming foot traffic. Stalls are dense and continuous along both sides of the road. The ukay-ukay section varies significantly between vendors in terms of quality, but branded near-new items appear regularly at substantially below retail price.",
        trivia: [
          "The Baguio Night Market is one of the Philippines' longest-running and most visited night markets.",
          "A one-way pedestrian flow system—implemented by the city government—manages the high foot traffic volume along Harrison Road.",
          "Ukay-ukay, the Philippine term for second-hand and surplus clothing, has grown into a distinct shopping culture with its own dedicated enthusiast community.",
        ],
        photos: [],
        videos: [],
      },
      {
        id: "free-time",
        title: "Free Time — SM Baguio, Goodtaste & Night Market",
        location: "Baguio City",
        address: "SM City Baguio · Goodtaste Restaurant · Harrison Road, Baguio City",
        description:
          "After a full day of scheduled visits, the group had unstructured evening time across three Baguio landmarks: SM City Baguio perched on top of a hill with panoramic city views, Goodtaste Restaurant—a Baguio institution known for its affordable Chinese-Filipino menu served in generous portions—and the Harrison Road Night Market for a final round of ukay-ukay and street food.",
        story:
          "SM Baguio is unusual among SM malls: built into the hillside, its rooftop level opens directly onto a city overlook. Goodtaste is the kind of place that doesn't need to advertise—it's been feeding Baguio residents and visitors the same reliable menu for decades, and the group found it at capacity on a Friday night. The Night Market caps the evening with the sensory density of a full working ukay-ukay strip.",
        trivia: [
          "SM City Baguio sits at one of the highest elevations of any SM mall in the Philippines, with an open rooftop that functions as a city observation deck.",
          "Goodtaste Restaurant has been a Baguio dining staple for decades, known for large servings at low prices—a combination that keeps the queues consistently long.",
          "The Baguio Night Market on Harrison Road runs every night of the year, rain or shine, making it one of the most consistent street commerce operations in the Philippines.",
        ],
        photos: freeTimePhotos,
        videos: [],
      },
    ],
  },

  {
    id: "day-6",
    slug: "day-6",
    label: "Day 6",
    date: "April 11, 2026",
    dayNum: "06",
    title: "Burnham Park",
    subtitle: "Free Time — Baguio City",
    theme: "mountain",
    themeColor: "#1A2A3A",
    coverImg: "",
    vibe: "Open Hours — the last full day in Baguio, unscheduled and unhurried, spent at one of the most iconic public parks in the Philippines.",
    intro:
      "No facilities, no briefings. Day 6 was free time in Baguio. The group spent the afternoon and early evening at Burnham Park—the city's historic urban green space designed by Daniel Burnham himself—rowing on the lake, walking the paths, and taking in the Cordillera air before the overnight transit back to Manila.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "burnham-park",
        title: "Burnham Park",
        location: "Baguio City",
        address: "Jose Abad Santos Drive, Baguio City, Benguet",
        description:
          "Burnham Park is the central public park of Baguio City, designed by Daniel Burnham—the American urban planner who also designed Baguio's city layout—and established in the early 1900s. The park spans over 30 hectares along a man-made lake used for rowboat rentals, surrounded by open lawns, cycling paths, a rose garden, and picnic areas. It sits at the heart of the city and functions as Baguio's primary civic commons.",
        story:
          "Burnham Park has a different quality than the day's scheduled stops—no admission, no itinerary, no fixed endpoint. The rowboats on the lake are the main draw: open wooden boats that move slowly across the still water, with the Cordillera treeline visible in every direction. The park fills with locals and visitors in the late afternoon. It's the kind of place that gives you a ground-level read on how the city actually uses its public space.",
        trivia: [
          "Burnham Park was designed by Daniel Burnham, the same American architect who planned the broader layout of Baguio City as a hill station in the early 1900s.",
          "The park's man-made lake is one of the few spots in the Philippines where rowboat rentals remain a standard public leisure activity.",
          "Baguio City was the first planned city in the Philippines, developed under American colonial administration as a highland retreat from the Manila heat.",
        ],
        photos: burnhamPhotos,
        videos: burnhamVideos,
      },
    ],
  },

  {
    id: "day-7",
    slug: "day-7",
    label: "Day 7",
    date: "April 12, 2026",
    dayNum: "07",
    title: "Going Home",
    subtitle: "Baguio → Quezon City → Zamboanga",
    theme: "closing",
    themeColor: "#2A1A1A",
    coverImg: "",
    vibe: "Synthesis — eight days integrating technical theory with cultural practice. The tour ends where it began: in transit, heading home to Zamboanga.",
    intro:
      "The final day. Checkout from Baguio, transit back to Prince Plaza Hotel in Quezon City, then an early morning departure from Manila back to Zamboanga. The same route in reverse—from the walled city back to the colonial outpost that started it all.",
    photos: [],
    videos: [],
    activities: [
      {
        id: "rest-morning",
        title: "Rest & Hotel Checkout",
        location: "Baguio City",
        address: "Baguio City, Benguet",
        description:
          "The final Baguio morning was unscheduled. After six packed days of consecutive movement through facilities and transit, the group used the remaining hours for rest before the noon checkout. No external visits were made.",
        story:
          "Sometimes the most useful thing at the end of a dense itinerary is the absence of one. The morning was spent inside—packing, reviewing the week, and closing out mentally before the checkout call and the long transit home.",
        trivia: [],
        photos: [],
        videos: [],
      },
      {
        id: "going-home",
        title: "Checkout & Return Transit",
        location: "Baguio → Quezon City → Zamboanga",
        address: "Prince Plaza Hotel, Quezon City",
        description:
          "The closing sequence: checkout from Baguio accommodations, transit back to Prince Plaza Hotel in Quezon City, then an early morning departure from Manila back to Zamboanga City. Total tour: eight days, three destinations—Manila, Tagaytay, Baguio—over a dozen sites visited.",
        story:
          "Prince Plaza Hotel in Quezon City served as both the opening and closing base for the tour, bookending the full circuit. The return flight from Manila to Zamboanga covers approximately 1.5 to 2 hours, closing a week that began and ended at the same airport. Zamboanga City—Karel's home—was founded as a Spanish colonial outpost in the 17th century, the same era as the walls of Intramuros that opened the tour on Day 0.",
        trivia: [
          "Zamboanga City is one of the oldest cities in the Philippines, established as a Spanish colonial settlement in the 17th century—contemporaneous with Intramuros.",
          "The DJM Educational Tour covered three major destinations across eight days: Manila, Tagaytay, and Baguio.",
          "Prince Plaza Hotel in Quezon City has served as a standard staging base for educational tours originating from Mindanao for many years.",
        ],
        photos: departurePhotos,
        videos: [],
      },
    ],
  },
];

export const getTourDay = (slug) => tourDays.find((d) => d.slug === slug);
