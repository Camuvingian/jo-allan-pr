export interface Project {
  id: number;
  name: string;
  image: string;
  type: 'production' | 'venue';
  category: 'West End' | 'Tour' | 'Venue' | 'Regional';
  description: string;
  venue?: string;
  dates?: string;
  tag?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: '@sohoplace',
    image: '/images/sohoplace.jpg',
    type: 'venue',
    category: 'Venue',
    description:
      'A state-of-the-art West End theatre that opened in 2022 on the corner of Charing Cross Road and Oxford Street. Founded by Nica Burns and Max Weitzenhoffer, it is a 602-seat theatre-in-the-round and the first new-build theatre on the West End in 50 years.',
    venue: 'Soho, London',
    dates: 'Opened October 2022',
  },
  {
    id: 2,
    name: 'Marie & Rosetta',
    image: '/images/marie-and-rosetta.jpg',
    type: 'production',
    category: 'West End',
    description:
      "The electrifying true story of Sister Rosetta Tharpe, the godmother of rock and roll, and her protégée Marie Knight. Set in a 1940s recording studio, this joyous musical play celebrates the ground-breaking music and complex partnership of two trailblazing Black women artists.",
    venue: '@sohoplace',
    dates: '28 Feb – 30 May 2026',
    tag: 'Now Showing',
  },
  {
    id: 3,
    name: 'The Boy Who Harnessed the Wind',
    image: '/images/boy-harnessed-wind.png',
    type: 'production',
    category: 'West End',
    description:
      "Based on the bestselling memoir by William Kamkwamba, this remarkable true story follows a young Malawian boy who saved his village from famine by building a windmill from scrap. Chiwetel Ejiofor returns as Creative Associate, with Lynette Linton directing.",
    venue: '@sohoplace',
    dates: '25 Apr – 18 Jul 2026',
    tag: 'Coming Soon',
  },
  {
    id: 4,
    name: 'The Weir',
    image: '/images/the-weir.png',
    type: 'production',
    category: 'West End',
    description:
      "Conor McPherson's masterful play set in a rural Irish pub where a group of locals try to impress a newcomer from Dublin with ghost stories, only for the evening to take an unexpectedly moving turn. Starring Brendan Gleeson in his West End debut.",
    venue: 'Harold Pinter Theatre',
    dates: '12 Sep – 6 Dec 2025',
  },
  {
    id: 5,
    name: 'Punch',
    image: '/images/punch.png',
    type: 'production',
    category: 'West End',
    description:
      "James Graham's acclaimed new play inspired by Jacob Dunne's memoir Right from Wrong — an unflinching true-life account of how a Nottingham teenager throws a single punch with fatal consequences. A powerful exploration of violence, consequence and redemption.",
    venue: 'Young Vic / Apollo Theatre',
    dates: 'Mar – Nov 2025',
  },
  {
    id: 6,
    name: 'Arcadia',
    image: '/images/arcadia.png',
    type: 'production',
    category: 'West End',
    description:
      "Tom Stoppard's dazzling play that moves between 1809 and the present day in a single English country house, interweaving themes of mathematics, landscape gardening, romanticism and the nature of truth. Directed by Carrie Cracknell at The Old Vic in-the-round.",
    venue: 'The Old Vic',
    dates: '24 Jan – 21 Mar 2026',
  },
  {
    id: 7,
    name: "One Flew Over the Cuckoo's Nest",
    image: '/images/cuckoos-nest.png',
    type: 'production',
    category: 'West End',
    description:
      "Based on Ken Kesey's iconic novel, starring Aaron Pierre and Giles Terera, with Michelle Gomez as Nurse Ratched. Directed by Clint Dyer at The Old Vic in-the-round for a raw, immediate experience.",
    venue: 'The Old Vic',
    dates: '1 Apr – 23 May 2026',
    tag: 'Coming Soon',
  },
  {
    id: 8,
    name: 'Mamma Mia!',
    image: '/images/mamma-mia.jpg',
    type: 'production',
    category: 'Tour',
    description:
      "The smash-hit musical tells the sunny, funny tale of a young woman's search for her birth father on a Greek island paradise, all set to the timeless songs of ABBA. The UK and International Tour brings this beloved feel-good show to audiences across the country and around the world.",
    venue: 'UK & International Tour',
    dates: 'Oct 2025 – Aug 2026',
    tag: 'On Tour',
  },
  {
    id: 9,
    name: "Everybody's Talking About Jamie",
    image: '/images/etaj.png',
    type: 'production',
    category: 'Tour',
    description:
      "The hit British musical inspired by the true story of Jamie Campbell, a teenager from Sheffield who overcame prejudice to become a drag queen. The 10th Anniversary Tour celebrates a decade of this uplifting show about acceptance, identity and the courage to be yourself.",
    venue: '10th Anniversary UK Tour',
    dates: 'Nov 2025 – 2027',
    tag: 'On Tour',
  },
  {
    id: 10,
    name: "Regent's Park Open Air Theatre",
    image: '/images/regents-park.png',
    type: 'venue',
    category: 'Venue',
    description:
      "One of London's most beloved and unique theatrical venues, set within the stunning surroundings of Regent's Park. Operating since 1932, it stages a critically acclaimed summer season each year featuring musicals, Shakespeare and new work, seating 1,256 audience members under the open sky.",
    venue: "Regent's Park, London",
    dates: 'Est. 1932 · Summer seasons',
  },
  {
    id: 11,
    name: 'Sherlock Holmes',
    image: '/images/sherlock-holmes.png',
    type: 'production',
    category: 'Regional',
    description:
      "A brand-new mystery by Joel Horwood, directed by Sean Holmes. Joshua James stars as Sherlock Holmes in a thrilling adventure that hurtles through the streets of London and down the River Thames to the heart of Regent's Park.",
    venue: "Regent's Park Open Air Theatre",
    dates: '2 May – 6 Jun 2026',
    tag: 'Coming Soon',
  },
  {
    id: 12,
    name: 'A Life in Four Seasons',
    image: '/images/four-seasons.png',
    type: 'production',
    category: 'Regional',
    description:
      "A contemporary dance work inspired by Vivaldi's The Four Seasons, created by Tinuke Craig and choreographed by Alexzandra Sarmiento. A piece about three friends negotiating love and loss in the city of London, set to an electric version of Vivaldi's masterpiece.",
    venue: "Regent's Park Open Air Theatre",
    dates: '11 – 14 Jun 2026',
  },
  {
    id: 13,
    name: "A Midsummer Night's Dream",
    image: '/images/midsummer-night.png',
    type: 'production',
    category: 'Regional',
    description:
      "Shakespeare's enchanting comedy weaves together the tangled love lives of four young Athenians, a troupe of amateur actors and the feuding fairy royalty of Oberon and Titania in a magical forest. Directed by Atri Banerjee.",
    venue: "Regent's Park Open Air Theatre",
    dates: '20 Jun – 18 Jul 2026',
  },
  {
    id: 14,
    name: 'Cats',
    image: '/images/cats.png',
    type: 'production',
    category: 'Tour',
    description:
      "Andrew Lloyd Webber's record-breaking musical based on T.S. Eliot's Old Possum's Book of Practical Cats follows a tribe of Jellicle cats on a magical night when one special cat is chosen to ascend to the Heaviside Layer. A brand-new production opening at Regent's Park before a major UK tour.",
    venue: "Regent's Park / UK Tour",
    dates: 'Jul – Dec 2026',
    tag: 'Coming Soon',
  },
  {
    id: 15,
    name: 'Anansi the Spider',
    image: '/images/anansi.png',
    type: 'production',
    category: 'Regional',
    description:
      'A vibrant family show based on the beloved West African and Caribbean folk tales of Anansi, the cunning trickster spider. Written by Justin Audibert, this joyful co-production with Birmingham Rep brings timeless tales to life through storytelling, music and puppetry.',
    venue: 'Unicorn Theatre / Birmingham Rep',
    dates: 'Oct 2025 – Jan 2026',
  },
  {
    id: 16,
    name: 'Kiln Theatre',
    image: '/images/kiln-theatre.png',
    type: 'venue',
    category: 'Venue',
    description:
      "Located in Kilburn, North West London, Kiln Theatre is one of the UK's most important and celebrated local theatres. Formerly the Tricycle Theatre, it reopened in 2018 after a major redevelopment and is renowned for staging bold, diverse and politically engaged work.",
    venue: 'Kilburn, London',
    dates: 'Reopened 2018',
  },
  {
    id: 17,
    name: 'Manic Street Creature',
    image: '/images/manic-street-creature.png',
    type: 'production',
    category: 'Regional',
    description:
      'Acclaimed gig-theatre by Olivier Award-winner Maimuna Memon. A bold piece of theatre that explores mental health, identity and the raw energy of living on the edge, fusing live music, physical theatre and unflinching storytelling.',
    venue: 'Kiln Theatre',
    dates: '5 – 28 Mar 2026',
  },
  {
    id: 18,
    name: 'Please Please Me',
    image: '/images/please-please-me.png',
    type: 'production',
    category: 'Regional',
    description:
      'The story of Beatles manager Brian Epstein brought to vivid life on stage at the Kiln Theatre. A fresh and compelling piece of new writing exploring the man behind the music.',
    venue: 'Kiln Theatre',
    dates: '16 Apr – 23 May 2026',
  },
  {
    id: 19,
    name: 'Driftwood',
    image: '/images/driftwood.png',
    type: 'production',
    category: 'Regional',
    description:
      'A new play by Martina Laird about the complex nature of family, brought to the Kiln by the Royal Shakespeare Company. A poignant exploration of displacement, belonging and the search for home.',
    venue: 'Kiln Theatre',
    dates: '3 Jun – 4 Jul 2026',
  },
  {
    id: 20,
    name: 'Rose Theatre',
    image: '/images/rose-theatre.png',
    type: 'venue',
    category: 'Venue',
    description:
      'One of the largest producing theatres in South West London, opened in 2008 in Kingston upon Thames. With a flexible main auditorium seating up to 899, it stages a vibrant programme of drama, musicals, comedy and family shows.',
    venue: 'Kingston upon Thames, London',
    dates: 'Opened 2008',
  },
  {
    id: 21,
    name: 'Our Town',
    image: '/images/our-town.png',
    type: 'production',
    category: 'Regional',
    description:
      "Thornton Wilder's Pulitzer Prize-winning classic reimagined in an intimate Welsh setting. Starring Michael Sheen and directed by Francesca Goodridge, part of Sheen's debut season as artistic director of the Welsh National Theatre.",
    venue: 'Rose Theatre, Kingston',
    dates: '26 Feb – 28 Mar 2026',
  },
  {
    id: 22,
    name: 'The Boy at the Back of the Class',
    image: '/images/boy-back-class.png',
    type: 'production',
    category: 'Tour',
    description:
      "Based on Onjali Q. Rauf's award-winning children's novel, this tells the story of a nine-year-old refugee boy who arrives at a new school and the classmates who hatch a daring plan to help him. A heartwarming celebration of friendship, kindness and courage.",
    venue: 'Rose Theatre / UK Tour',
    dates: 'Feb – May 2026',
    tag: 'On Tour',
  },
  {
    id: 23,
    name: 'The Artist',
    image: '/images/the-artist.png',
    type: 'production',
    category: 'Regional',
    description:
      'The Academy Award-winning film reinvented for the stage in a dazzling celebration of silent cinema. A McOnie Company production blending cutting-edge theatre-making with iconic music of the period, starring Broadway lead Robbie Fairchild.',
    venue: 'Theatre Royal Plymouth',
    dates: '11 – 25 May 2024',
  },
];

export const featuredProjects = projects.filter(
  (p) => p.tag === 'Now Showing' || p.tag === 'On Tour' || p.tag === 'Coming Soon'
);

export const homeCarouselProjects = projects.slice(0, 8);
