export const contentLabels = {
  evidence: 'Evidence',
  reconstruction: 'Possible reconstruction',
  spiritual: 'Spiritual perspective',
};

export const chapters = [
  {
    id: 'origins',
    number: '01',
    title: 'The First Humans',
    description: 'Enter an imagined African landscape. Meet early Homo sapiens and discover the clues behind the scene.',
  },
  {
    id: 'communication',
    number: '02',
    title: 'The First Communication',
    description: 'Try gestures, expressions, movement and illustrative sounds. Explore how a shared context can help a message make sense.',
  },
  {
    id: 'decisions',
    number: '03',
    title: 'Free Will & Decisions',
    description: 'Share, help, explore or work together. Consider how a choice can affect you and the people who depend on you.',
  },
  {
    id: 'learning',
    number: '04',
    title: 'Learning Through Experience',
    description: 'Match tools to tasks, think about food and shelter, and discover why learning together mattered.',
  },
];

export const evidenceSources = [
  {
    id: 'sapiens',
    label: 'Smithsonian · Homo sapiens',
    url: 'https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens',
  },
  {
    id: 'irhoud',
    label: 'Max Planck Institute · Jebel Irhoud',
    url: 'https://www.eva.mpg.de/de/press/news/2017/2017-06-07-the-first-of-our-kind/',
  },
  {
    id: 'omo',
    label: 'Nature · Omo I minimum age, 2022',
    url: 'https://www.nature.com/articles/s41586-021-04275-8',
  },
  {
    id: 'herto',
    label: 'UC Berkeley · Herto environment and dating',
    url: 'https://newsarchive.berkeley.edu/news/media/releases/2003/06/11_bones-background.shtml',
  },
  {
    id: 'social',
    label: 'Smithsonian · Social life',
    url: 'https://humanorigins.si.edu/human-characteristics/social-life',
  },
  {
    id: 'tools',
    label: 'Smithsonian · Tools & food',
    url: 'https://humanorigins.si.edu/human-characteristics/tools-food',
  },
  {
    id: 'communication',
    label: 'Scientific Reports · Experimental research on vocal communication',
    url: 'https://www.nature.com/articles/s41598-021-89445-4',
  },
];

export const originsHotspots = [
  {
    id: 'people',
    title: 'Meet the people',
    x: 78,
    y: 47,
    evidence: 'Our species evolved in Africa around 300,000 years ago. Fossils at Jebel Irhoud show a familiar facial shape alongside a longer, lower braincase. Researchers trace populations across generations; they cannot identify one first individual.',
    reconstruction: 'These two adults are imagined people. Their hair, expressions, personalities, coverings and exact appearance are artistic choices, rather than portraits of a known first couple.',
    sourceIds: ['sapiens', 'irhoud'],
  },
  {
    id: 'river',
    title: 'Follow the water',
    x: 28,
    y: 51,
    evidence: 'Water shaped the places people could live. At Herto in Ethiopia, evidence from about 160,000 years ago places people beside a shallow freshwater lake with hippos, crocodiles and catfish.',
    reconstruction: 'This riverside setting brings together possibilities from changing African landscapes. It is a composite scene, not a precise view of Jebel Irhoud, Omo Kibish or Herto at one moment.',
    sourceIds: ['herto'],
  },
  {
    id: 'camp',
    title: 'A place to gather',
    x: 42,
    y: 68,
    evidence: 'Archaeology offers clues to food sharing, care and places where people gathered. Burned flint, seeds and wood can identify ancient hearths. Social bonds helped people meet the challenges of their environments.',
    reconstruction: 'The arrangement of this camp, its shelter and the activities around it are imagined. We do not know the daily routine, spoken conversations or household relationships of these particular characters.',
    sourceIds: ['social'],
  },
  {
    id: 'stone',
    title: 'A small stone, a big clue',
    x: 56.5,
    y: 52,
    evidence: 'At Jebel Irhoud, Middle Stone Age tools were found with early Homo sapiens remains. Dating flint heated in ancient fires helped establish an age of about 315,000 years. Toolmaking was already ancient when our species appeared.',
    reconstruction: 'The tool in this scene illustrates a possible task. Its exact maker, the lesson being shared and the reason it was used here are parts of our story.',
    sourceIds: ['irhoud', 'tools'],
  },
];

export const spiritualPerspectives = {
  title: 'Spiritual Perspectives',
  intro: 'How do people seek wisdom and live responsibly? Explore selected teachings about guidance, knowledge and care, through the texts and communities that carry them across generations.',
  note: 'This optional selection is not exhaustive. Every tradition contains diverse interpretations and living communities. These perspectives are presented in their own terms, separately from archaeological evidence. The reconstructed characters do not depict Adam, prophets or other sacred figures.',
  entries: [
    {
      id: 'judaism',
      tradition: 'Judaism',
      title: 'Learning, worship & kindness',
      text: 'Pirkei Avot describes Torah being passed from Moses through generations of teachers. Another teaching brings together Torah, worship and acts of kindness as foundations of the world. Within this rabbinic perspective, guidance concerns how people learn and how they treat others. It invites reflection on the responsibility of receiving knowledge and passing it on. Jewish communities continue to study and interpret these teachings in different ways.',
      sources: [
        { label: 'Pirkei Avot 1:1–2 · Sefaria', url: 'https://www.sefaria.org/Pirkei_Avot.1?lang=bi' },
        { label: 'Chabad · Teachings on Pirkei Avot 1', url: 'https://www.chabad.org/library/article_cdo/aid/2835298/jewish/Chapter-One.htm' },
      ],
    },
    {
      id: 'christianity',
      tradition: 'Christianity',
      title: 'Love expressed through care',
      text: 'In Matthew 22, Jesus connects wholehearted love of God with love for one’s neighbour. The passage offers Christians a foundation for thinking about responsibility toward other people, with devotion and care held together. Visitors can reflect on how a teaching becomes an everyday choice within a family or wider community. This is one scriptural starting point within Christianity; churches and individual Christians differ in how they interpret and practise it.',
      sources: [
        { label: 'Matthew 22:37–40 · NRSVUE', url: 'https://www.biblegateway.com/passage/?search=Matthew%2022%3A37-40&version=NRSVUE' },
      ],
    },
    {
      id: 'islam',
      tradition: 'Islam',
      title: 'Knowledge & responsibility',
      text: 'The Qur’an describes God teaching Adam the names in 2:31. In 16:90, it calls for justice, good conduct and generosity toward relatives, while rejecting wrongdoing and aggression. Together these passages offer an Islamic perspective on knowledge as a gift and conduct as a responsibility. Readers can consider how learning might serve others. Muslim communities across generations study these teachings, with diverse traditions of interpretation and practice.',
      sources: [
        { label: 'Qur’an 2:31 · The Clear Quran', url: 'https://quran.com/al-baqarah/31' },
        { label: 'Qur’an 16:90 · The Clear Quran', url: 'https://quran.com/an-nahl/90' },
      ],
    },
    {
      id: 'hindu',
      tradition: 'Hindu traditions',
      title: 'Duty, practice & knowledge',
      text: 'In the Bhagavad Gita, Krishna’s guidance to Arjuna includes acting from duty without attachment to personal rewards. Another passage describes spiritual knowledge developing through sustained practice. These teachings offer one Hindu perspective on the relationship between action, learning and inner growth. They invite reflection on why we act, as well as what we do. Hindu traditions include many philosophies and devotional paths; this reading does not speak for them all.',
      sources: [
        { label: 'Bhagavad Gita 3:19 · Swami Mukundananda', url: 'https://www.holy-bhagavad-gita.org/chapter/3/verse/19/' },
        { label: 'Bhagavad Gita 4:38 · Swami Mukundananda', url: 'https://www.holy-bhagavad-gita.org/chapter/4/verse/38/' },
      ],
    },
    {
      id: 'buddhist',
      tradition: 'Buddhist traditions',
      title: 'Awareness & compassion',
      text: 'The Plum Village community presents the Five Mindfulness Trainings as a contemporary expression of Buddhist precepts. They connect awareness with protecting life, generosity, responsible conduct, careful speech and deep listening. Guidance here is explored through practice, attentive awareness and insight into suffering. This is one living Buddhist tradition, whose approach offers visitors a way to reflect on how attention can shape compassionate action in everyday relationships and in the wider community.',
      sources: [
        { label: 'Plum Village · The Five Mindfulness Trainings', url: 'https://plumvillage.org/mindfulness/the-5-mindfulness-trainings' },
      ],
    },
    {
      id: 'sikhism',
      tradition: 'Sikhism',
      title: 'Oneness & service',
      text: 'The Sikh Coalition describes Sikhi through oneness, divine presence and the equal dignity of every person. Seva, or service inspired by love, expresses spirituality through action for others. Truthful living, service to humanity and devotion to God are presented together as daily principles. This community account invites reflection on care that crosses social boundaries. Sikh communities continue to embody and interpret these teachings through worship, service and work for justice.',
      sources: [
        { label: 'Sikh Coalition · Beliefs', url: 'https://www.sikhcoalition.org/about-sikhs/beliefs/' },
        { label: 'Sikh Coalition · About Sikhs', url: 'https://www.sikhcoalition.org/about-sikhs/' },
      ],
    },
  ],
};
