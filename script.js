const calendarDays = document.getElementById('calendar-days');
const daysInMonth = 31;
const startDay = new Date(2025, 11, 1).getDay(); // Получаем день недели (0 = Вс, 1 = Пн)

const adjustedStartDay = startDay === 0 ? 6 : startDay - 1; // Делаем так, чтобы 1 = Пн, 6 = Сб, 0 = Вс

// Добавляем пустые клетки перед 1-м числом месяца
for (let i = 0; i < adjustedStartDay; i++) {
    let emptyCell = document.createElement('div');
    emptyCell.classList.add('day', 'empty');
    calendarDays.appendChild(emptyCell);
}

// Добавляем дни месяца
for (let day = 1; day <= daysInMonth; day++) {
    let dayCell = document.createElement('div');
    dayCell.classList.add('day');
    dayCell.textContent = day;

    if (day === 20) {
        dayCell.classList.add('special');
        let heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤';
        dayCell.appendChild(heart);
    }

    calendarDays.appendChild(dayCell);
}



document.addEventListener("DOMContentLoaded", function () {
    const nameContainer = document.querySelector(".invite-name");
    const letters = nameContainer.querySelectorAll("span");

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`; // Регулируем задержку появления букв
    });
});


document.querySelector(".wedding-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Останавливаем стандартную отправку формы

    // 🔹 ЗАМЕНИТЬ НА СВОИ ДАННЫЕ!
    const TOKEN = "7644603205:AAHP68FDVDVowQhLnkeCxdqOR0565Pggtns";
    const CHAT_ID = "390335723";
    const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    // Собираем данные из формы
    const formData = new FormData(this);
    let message = "<b>Новая заявка на свадьбу 🎉</b>\n\n";

    for (let [key, value] of formData.entries()) {
        message += `<b>${key}:</b> ${value}\n`;
    }

    // Отправляем запрос в Telegram
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        }),
    });

    if (response.ok) {
        alert("Форма успешно отправлена!");
        this.reset(); // Очистка формы
    } else {
        alert("Ошибка при отправке. Попробуйте еще раз.");
    }
});

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Событие началось!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Устанавливаем дату окончания
const targetDate = new Date("August 7, 2025 12:00:00").getTime();
startCountdown(targetDate);



document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hid");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});
