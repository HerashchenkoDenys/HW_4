// Отримуємо від користувача кількість років 
var userInput = prompt("Введіть кількість років:");

// Перевіряємо, чи число не від'ємне
if (!isNaN(userInput) && userInput >= 0) {
    var years = parseInt(userInput); 

    // Визначаємо закінчення слова "рік", "роки" або "років" в залежності від числа
    var lastDigit = years % 10;
    var secondLastDigit = Math.floor(years / 10) % 10;
    var wordEnding;

    if (secondLastDigit !== 1 && lastDigit === 1) {
        wordEnding = "рік";
    } else if (secondLastDigit !== 1 && (lastDigit === 2 || lastDigit === 3 || lastDigit === 4)) {
        wordEnding = "роки";
    } else {
        wordEnding = "років";
    }

    // Виводимо результат
    console.log(years + " " + wordEnding);
} else {
    console.log("Будь ласка, введіть коректне, не від'ємне число.");
}
