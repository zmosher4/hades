const { database } = require('./database.js');
// const attackGenorator = (data) => {
//   const attacks = data.attack;
//   let genoratedAttack = '';
//   for (i = 0; i < attacks.length; i++) {
//     let randomNum = Math.floor(Math.random() * attacks.length);
//     genoratedAttack = attacks[randomNum];
//   }
//   return genoratedAttack;
// };
// const specialGenorator = (data) => {
//   const specials = data.special;
//   let genoratedSpecial = '';
//   for (i = 0; i < specials.length; i++) {
//     let randomNum = Math.floor(Math.random() * specials.length);
//     genoratedSpecial = specials[randomNum];
//   }
//   return genoratedSpecial;
// };
// const dashGenorator = (data) => {
//   const dashes = data.dash;
//   let genoratedDash = '';
//   for (i = 0; i < dashes.length; i++) {
//     let randomNum = Math.floor(Math.random() * dashes.length);
//     genoratedDash = dashes[randomNum];
//   }
//   return genoratedDash;
// };
// const castGenorator = (data) => {
//   const casts = data.cast;
//   let genoratedCast = '';
//   for (i = 0; i < casts.length; i++) {
//     let randomNum = Math.floor(Math.random() * casts.length);
//     genoratedCast = casts[randomNum];
//   }
//   return genoratedCast;
// };
// const callGenorator = (data) => {
//   const calls = data.call;
//   let genoratedCall = '';
//   for (i = 0; i < calls.length; i++) {
//     let randomNum = Math.floor(Math.random() * calls.length);
//     genoratedCall = calls[randomNum];
//   }
//   return genoratedCall;
// };

const chooseGod = (god) => {};

module.exports = {
  attackGenorator,
  specialGenorator,
  dashGenorator,
  castGenorator,
  callGenorator,
};
