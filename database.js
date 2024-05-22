const database = {
  attack: [
    {
      id: 1,
      title: 'heartbreak strike',
      description: 'Your attack deals more damage and inflicts weak.',
      god: 'Aphrodite',
    },
    {
      id: 2,
      title: 'Curse of Agony',
      description: 'Your attack inflights doom',
      god: 'ares',
    },
    {
      id: 3,
      title: 'Deadly strike',
      description:
        'Your attack is stronger, with a chance to deal critical damage',
      god: 'Artemis',
    },
  ],
  special: [
    {
      id: 1,
      title: 'heartbreak flourish',
      description: 'Your special deals more damage and inflicts weak',
      god: 'Aphrodite',
    },
    {
      id: 2,
      title: 'deadly flourish',
      description:
        'Your special is stronger, with a chance to deal critical damage',
      god: 'Artemis',
    },
  ],
  dash: [
    {
      id: 1,
      title: 'divine dash',
      description: 'your dash deals damage and can deflect',
      god: 'Athena',
    },
    {
      id: 2,
      title: 'tidal dash',
      description: 'your dash damages foes in an area and knocks them away',
      god: 'posiden',
    },
  ],
  cast: [
    {
      id: 1,
      title: 'flood flare',
      description: 'your cast damages foes around you and knocks them away',
      god: 'posiden',
    },
    {
      id: 2,
      title: 'crystal beam',
      description:
        'Your Cast drops a crystal that fires a beam straight ahead for a few seconds.',
      god: 'demeter',
    },
  ],
  call: [
    {
      id: 1,
      title: 'demeters aid',
      description:
        'Your Call creates a winter vortex for a few seconds that deals damage and inflicts Chill.',
      god: 'demeter',
    },
    {
      id: 2,
      title: "zeus' aid",
      description:
        'Your Call makes lightning strike nearby foes repeatedly for a few seconds.',
      god: 'zeus',
    },
  ],
};

module.exports = { database };
