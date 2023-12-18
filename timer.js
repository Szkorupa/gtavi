// Funkcja do obliczania pozostałego czasu i aktualizacji na stronie
function updateTimer() {
    // Ustaw datę docelową
    var targetDate = new Date("2025-04-01T00:00:00");

    // Pobierz aktualny czas
    var now = new Date();

    // Oblicz różnicę czasu między teraźniejszością a datą docelową
    var timeDifference = targetDate - now;

    // Oblicz dni pozostałe do daty docelowej
    var daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Wyświetl liczbę dni w elemencie h3 o id "daysRemaining"
    document.getElementById("daysRemaining").innerHTML = daysRemaining + " DNI";

    // Zatrzymaj odliczanie, gdy osiągnięto datę docelową
    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        document.getElementById("daysRemaining").innerHTML = "Czas minął!";
    }
}

// Wywołaj funkcję od razu po wejściu na stronę
updateTimer();

// Aktualizuj timer co 1 sekundę
var timerInterval = setInterval(updateTimer, 1000); // Odświeżaj co 1000 milisekund (1 sekunda)