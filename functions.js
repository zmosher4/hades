const { database } = require('./database.js');
const attackGenorator = (data) => {
  const attacks = data.attack;
  let genoratedAttack = '';
  for (i = 0; i < attacks.length; i++) {
    let randomNum = Math.floor(Math.random() * attacks.length);
    genoratedAttack = attacks[randomNum];
  }
  return genoratedAttack;
};
const specialGenorator = (data) => {
  const specials = data.special;
  let genoratedSpecial = '';
  for (i = 0; i < specials.length; i++) {
    let randomNum = Math.floor(Math.random() * specials.length);
    genoratedSpecial = specials[randomNum];
  }
  return genoratedSpecial;
};
const dashGenorator = (data) => {
  const dashes = data.dash;
  let genoratedDash = '';
  for (i = 0; i < dashes.length; i++) {
    let randomNum = Math.floor(Math.random() * dashes.length);
    genoratedDash = dashes[randomNum];
  }
  return genoratedDash;
};
const castGenorator = (data) => {
  const casts = data.cast;
  let genoratedCast = '';
  for (i = 0; i < casts.length; i++) {
    let randomNum = Math.floor(Math.random() * casts.length);
    genoratedCast = casts[randomNum];
  }
  return genoratedCast;
};
const callGenorator = (data) => {
  const calls = data.call;
  let genoratedCall = '';
  for (i = 0; i < calls.length; i++) {
    let randomNum = Math.floor(Math.random() * calls.length);
    genoratedCall = calls[randomNum];
  }
  return genoratedCall;
};

const showAttack = (god, data) => {
  const allAtacks = data.attack;
  let output = '';
  for (i = 0; i < allAtacks.length; i++) {
    if (god === allAtacks[i].god) {
      output += `${allAtacks[i].title}: ${allAtacks[i].description}`;
    }
  }
  return output;
};
const showSpecial = (god, data) => {
  const allSpecials = data.special;
  let output = '';
  for (i = 0; i < allSpecials.length; i++) {
    if (god === allSpecials[i].god) {
      output = `${allSpecials[i].title}: ${allSpecials[i].description}`;
    }
  }
  return output;
};
const showDash = (god, data) => {
  const allDashes = data.dash;
  let output = '';
  for (i = 0; i < allDashes.length; i++) {
    if (god === allDashes[i].god) {
      output = `${allDashes[i].title}: ${allDashes[i].description}`;
    }
  }
  return output;
};
const showCast = (god, data) => {
  const allCasts = data.cast;
  let output = '';
  for (i = 0; i < allCasts.length; i++) {
    if (god === allCasts[i].god) {
      output = `${allCasts[i].title}: ${allCasts[i].description}`;
    }
  }
  return output;
};
const showCall = (god, data) => {
  const allCalls = data.call;
  let output = '';
  for (i = 0; i < allCalls.length; i++) {
    if (god === allCalls[i].god) {
      output = `${allCalls[i].title}: ${allCalls[i].description}`;
    }
  }
  return output;
};

module.exports = {
  attackGenorator,
  specialGenorator,
  castGenorator,
  dashGenorator,
  callGenorator,
  showAttack,
  showCall,
  showDash,
  showSpecial,
  showCast,
};
