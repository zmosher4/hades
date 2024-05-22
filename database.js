const database = {
  attack: [
    {
      id: 0,
      title: 'Heartbreak Strike',
      description: 'Your attack deals more damage and inflicts weak.',
      god: 'Aphrodite',
    },
    {
      id: 1,
      title: 'Curse of Agony',
      description: 'Your attack inflicts doom.',
      god: 'Ares',
    },
    {
      id: 2,
      title: 'Deadly Strike',
      description:
        'Your attack is stronger, with a chance to deal critical damage.',
      god: 'Artemis',
    },
    {
      id: 3,
      title: 'Divine Strike',
      description: 'Your attack is stronger and can deflect.',
      god: 'Athena',
    },
    {
      id: 4,
      title: 'Frost Strike',
      description: 'Your attack is stronger and inflects chill.',
      god: 'Demeter',
    },
    {
      id: 5,
      title: 'Drunken Strike',
      description: 'Your attack inflicts hangover.',
      god: 'Dionysus',
    },
    {
      id: 6,
      title: 'Tempest Strike',
      description: 'Your attack deals more damage and knocks foes away.',
      god: 'Poseidon',
    },
    {
      id: 7,
      title: 'Lightning Strike',
      description: 'Your attack emits chain-lightning when you damage a foe.',
      god: 'Zeus',
    },
  ],
  special: [
    {
      id: 0,
      title: 'Heartbreak Flourish',
      description: 'Your special deals more damage and inflicts weak',
      god: 'Aphrodite',
    },
    {
      id: 1,
      title: 'Deadly Flourish',
      description:
        'Your special is stronger, with a chance to deal critical damage',
      god: 'Artemis',
    },
    {
      id: 2,
      title: 'Curse of Pain',
      description: 'Your Special inflicts Doom.',
      god: 'Ares',
    },
    {
      id: 3,
      title: 'Divine Flourish',
      description: 'Your Special is stronger, and can Deflect.',
      god: 'Athena',
    },
    {
      id: 4,
      title: 'Frost Flourish',
      description: 'Your Special is stronger and inflicts Chill.',
      god: 'Demeter',
    },
    {
      id: 5,
      title: 'Drunken Flourish',
      description: 'Your Special inflicts Hangover.',
      god: 'Dionysus',
    },
    {
      id: 6,
      title: 'Tempest Flourish',
      description: 'Your Special deals more damage and knocks foes away.',
      god: 'Poseidon',
    },
    {
      id: 7,
      title: 'Thunder Flourish',
      description:
        'Your Special causes a lightning bolt to strike nearby foes.',
      god: 'Zeus',
    },
  ],
  dash: [
    {
      id: 0,
      title: 'Divine Dash',
      description: 'your dash deals damage and can deflect',
      god: 'Athena',
    },
    {
      id: 1,
      title: 'Tidal Dash',
      description: 'your dash damages foes in an area and knocks them away',
      god: 'Poseidon',
    },
    {
      id: 2,
      title: 'Passion Dash',
      description:
        'Your Dash inflicts damage where you end up, inflicting Weak.',
      god: 'Aphrodite',
    },
    {
      id: 3,
      title: 'Blade Dash',
      description: 'Your Dash creates a Blade Rift where you started.',
      god: 'Ares',
    },
    {
      id: 4,
      title: 'Hunter Dash',
      description: 'Your Dash-Strike deals more damage.',
      god: 'Artemis',
    },
    {
      id: 5,
      title: 'Mistral Dash',
      description: 'Your Dash shoots a gust ahead that inflicts Chill.',
      god: 'Demeter',
    },
    {
      id: 6,
      title: 'Drunken Dash',
      description: 'Your Dash inflicts foes near you with Hangover.',
      god: 'Dionysus',
    },
    {
      id: 7,
      title: 'Thunder Dash',
      description: 'Your Dash causes a lightning bolt to strike nearby foes.',
      god: 'Zeus',
    },
  ],
  cast: [
    {
      id: 0,
      title: 'Flood Flare',
      description: 'your cast damages foes around you and knocks them away',
      god: 'Poseidon',
    },
    {
      id: 1,
      title: 'Crystal Beam',
      description:
        'Your Cast drops a crystal that fires a beam straight ahead for a few seconds.',
      god: 'Demeter',
    },
    {
      id: 2,
      title: 'Crush Shot',
      description: 'Your Cast is a wide, short-range blast that inflicts Weak.',
      god: 'Athena',
    },
    {
      id: 3,
      title: 'Slicing Shot',
      description: 'Your Cast sends a Blade Rift hurling ahead.',
      god: 'Ares',
    },
    {
      id: 4,
      title: 'True Shot',
      description:
        'Your Cast seeks foes, with a 10% chance to deal Critical damage.',
      god: 'Artemis',
    },
    {
      id: 5,
      title: 'Phalanx Shot',
      description: 'Your Cast damages foes in a small area, and can Deflect.',
      god: 'Athena',
    },
    {
      id: 6,
      title: 'Trippy Shot',
      description: 'Your Cast lobs a projectile that bursts into Festive Fog.',
      god: 'Dionysus',
    },
    {
      id: 7,
      title: 'Electric Shot',
      description:
        'Your Cast is a burst of chain-lightning that bounces between foes.',
      god: 'Zeus',
    },
  ],
  call: [
    {
      id: 0,
      title: "Demeters' Aid",
      description:
        'Your Call creates a winter vortex for a few seconds that deals damage and inflicts Chill.',
      god: 'Demeter',
    },
    {
      id: 1,
      title: "Zeus' Aid",
      description:
        'Your Call makes lightning strike nearby foes repeatedly for a few seconds.',
      god: 'Zeus',
    },
    {
      id: 2,
      title: "Aphrodite's Aid",
      description:
        'Your Call fires a seeking projectile that inflicts Charm. full Gauge Bonus: 2500 damage.',
      god: 'Aphrodite',
    },
    {
      id: 3,
      title: "Ares' Aid",
      description:
        'Your Call turns you into an Impervious Blade Rift for 1.2 Sec.',
      god: 'Ares',
    },
    {
      id: 4,
      title: "Artemis' Aid",
      description: 'Your Call fires a seeking arrow with +35% Critical chance.',
      god: 'Artemis',
    },
    {
      id: 5,
      title: "Athena's Aid",
      description:
        'Your Call briefly makes you Invulnerable and Deflect all attacks.',
      god: 'Athena',
    },
    {
      id: 6,
      title: "Dionysus' Aid",
      description:
        'Your Call inflicts Hangover to foes all around you for 1.5 Sec.',
      god: 'Dionysus',
    },
    {
      id: 7,
      title: "Poseidon's Aid",
      description:
        'Your Call makes you surge into foes while Impervious for 1.2 Sec.',
      god: 'Poseidon',
    },
  ],
};
module.exports = { database };
