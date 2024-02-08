// значення
var unit = "км"; // Одиниця вимірювання: кілометри
var amount = 10; // Кількість

// змінні 
var resultAmount;
var resultUnit;

// визначення одиниці вимірювання та виконання конвертації
switch (unit) {
  case "км":
    resultAmount = amount * 1000; // Кілометри в метри
    resultUnit = "м";
    break;
  case "год":
    resultAmount = amount * 60; // Години в хвилини
    resultUnit = "хв";
    break;
  case "кг":
    resultAmount = amount * 1000; // Кілограми в грами
    resultUnit = "г";
    break;
  default:
    console.log("Не відома одиниця виміру");
}

// Вивід результату
console.log(`${amount} ${unit} це ${resultAmount} ${resultUnit}`);
