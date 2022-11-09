function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" 
      alt="${player1}'s flag">
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" 
      alt=" ${player2}'s flag">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector('#cards').innerHTML = 
  createCard("24/11", "quinta", createGame
  ('switzerland', '10:00', 'cameroon') + createGame
  ('uruguay', '13:00', 'southKorea') + createGame
  ('portugal', '16:00', 'ghana') + createGame
  ('brazil', '19:00', 'serbia')) +
  createCard("28/11", "segunda", createGame
  ('cameroon', '10:00', 'serbia') + createGame
  ('southKorea', '13:00', 'ghana') + createGame
  ('brazil', '16:00', 'switzerland') + createGame
  ('portugal', '19:00', 'uruguay')) +
  createCard("02/12", "sexta", createGame
  ('southKorea', '15:00', 'portugal') + createGame
  ('ghana', '15:00', 'uruguay') + createGame
  ('serbia', '19:00', 'switzerland') + createGame
  ('cameroon', '19:00', 'brazil'))
