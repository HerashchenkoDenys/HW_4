// Задані значення
var unit = 'км'; // Одиниця вимірювання: кілометри
var amount = 10; // Кількість

// Змінні для збереження результатів
var resultAmount;
var resultUnit;

// Використовуємо switch для визначення одиниці вимірювання та виконання конвертації
switch (unit) {
    case 'км':
        resultAmount = amount * 1000; // Кілометри в метри
        resultUnit = 'м';
        break;
    case 'год':
        resultAmount = amount * 60; // Години в хвилини
        resultUnit = 'хв';
        break;
    case 'кг':
        resultAmount = amount * 1000; // Кілограми в грами
        resultUnit = 'г';
        break;
    default:
        console.log('Невідома одиниця вимірювання');
}

// Вивід результату
console.log(amount + ' ' + unit + ' це ' + resultAmount + ' ' + resultUnit);
