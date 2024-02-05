
// Отримати рік від користувача через prompt
var userInput = prompt("Введіть кількість років:");

// Перевірка, чи введено число та чи не є від'ємним
if (!isNaN(userInput) && userInput >= 0) {
    // Приведення введеного значення до числа
    var years = parseInt(userInput);

    // Логіка для виведення правильного варіанту "рік", "роки", "років"
    if (years === 0) {
        console.log("0 років");
    } else if (years === 1) {
        console.log("1 рік");
    } else if (years > 1 && years < 5) {
        console.log(years + " роки");
    } else {
        console.log(years + " років");
    }
} else {
    console.log("Будь ласка, введіть коректне, не від'ємне число.");
}
