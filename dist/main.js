(()=>{var e={115:e=>{e.exports={createGameboard:e=>{const r=document.querySelector("#gameboard"),t=document.createElement("div");r.append(t),t.classList.add("grid");for(let r=0;r<e.gameBoard.length;r++)for(let a=0;a<e.gameBoard[r].length;a++){const e=document.createElement("div");e.classList.add("cell"),t.append(e)}}}},776:e=>{e.exports={Ship:e=>{const r=[...Array(e).keys()].map((e=>0));return{length:e,hits:r,sunk:!1,hit:e=>{r[e]=1}}},isSunk:e=>{if(e.hits.every((e=>1===e)))return e.sunk=!0},Gameboard:()=>{let e=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];const r=[];return{gameBoard:e,placeShip:(t,a,n,o)=>{if(r.push(t),t.placementArray=[],o)for(let r=0;r<t.length;r++)e[a][n+r]=1,t.placementArray.push([a][n]);else for(let r=0;r<t.length;r++)e[a+r][n]=1,t.placementArray.push([a][n])},resetBoard:()=>{for(let r=0;r<e.length;r++)for(let t=0;t<e[r].length;t++)e[r][t]=0},receiveAttack:(t,a)=>{0===e[t][a]&&(e[t][a]=1,r.forEach((e=>{e.placementArray.forEach((r=>{r[0]===t&&r[1]===a&&e.hit(e.placementArray.indexOf(r))}))})))}}},Player:(e,r)=>{let t=r;return{name:e,isTurn:t,takeTurn:()=>{t=!t}}}}}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(115),r=t(776);const a=(0,r.Gameboard)(),n=(0,r.Gameboard)();(0,e.createGameboard)(a),(0,e.createGameboard)(n),(0,r.Player)("Your",!0),(0,r.Player)("Opponent's",!1)})()})();