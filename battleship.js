let random = Math.floor(Math.random() * 5);

let location1 = random;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk != true) {
  guess = prompt(
    "Заряжаем пушки , готовься, огонь! (введите любое число от 0 до 6 включительно)"
  );

  if (guess < 0 || guess > 6) {
    alert("Введите корректное число (от 0 до 6 включительно)");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("Попал!");
      if (hits == 3) {
        isSunk = true;
        alert("Корабль потоплен! Поздравляю! Вы огромный молодец!!!");
      }
    } else {
      alert("Промах");
    }
  }
}

const result = `Ты стрелял ${guesses} раз чтобы выиграть! Попробуешь ещё? Тогда обнови страницу и погнали! Вот где стоял наш корабль : ${location1}-${location2}-${location3}`;

alert(result);
