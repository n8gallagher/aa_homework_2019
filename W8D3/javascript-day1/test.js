function NBAPlayer(name, team, position){ //camel case denotes constructor function
  this.name = name
  this.team = team
  this.position = position
  this.dunk = function() {} // not DRY
}

const curry = new NBAPlayer() // constructor function

NBAPlayer.prototype.dunk = function() {} // more dry, will apply to every player created

curry.dunk 

curry __proto__ === NBAPlayer.prototype

// notes from node session below

// Last login: Tue Feb  4 15: 36: 24 on ttys002
// wnates - Air: ~nateg$ which node
//   / Users / nateg /.nvm / versions / node / v10.13.0 / bin / node
// nates - Air: ~nateg$ node
//   > function NBAPlayer(name, team, position) {
// ... this.name = name
// ... this.team = team;
// ... this.position = position;
// ...
//   }
// undefined
//   > let curry = new NBAPlayer("Steph", "gsw", "point")
// undefined
//   > curry
// NBAPlayer { name: 'Steph', team: 'gsw', position: 'point' }
// > curry.name
// 'Steph'
//   > curry.team
// 'gsw'
//   > NBAPlayer.prototype
// NBAPlayer { }
// > curry.__proto__
// NBAPlayer { }
// > NBAPlayer.prototype.dunk = function() {
// ...console.log(`${this.name} dunks!`);
// ...
// }
// [Function]
//   > curry.dunk
//   [Function]
//   > curry.dunk();
// Steph dunks!
// undefined
//   > curry.__proto__
// NBAPlayer { dunk: [Function] }
// > NBAPlayer.prototype
// NBAPlayer { dunk: [Function] }
// > curry.name = 'Curry'
// 'Curry'
//   > curry
// NBAPlayer { name: 'Curry', team: 'gsw', position: 'point' }
// > curry.dunk();
// Curry dunks!
// undefined
  > 
