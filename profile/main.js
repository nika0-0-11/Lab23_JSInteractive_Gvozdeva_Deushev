const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const userInfo = document.getElementById("userInfo");

function validate() {
    if (!nameInput.value.trim()) {
        alert("Введите имя");
        nameInput.focus();
        return false;
    }

    if (!ageInput.value.trim()) {
        alert("Введите возраст");
        ageInput.focus();
        return false;
    }

    if (ageInput.value < 1 || ageInput.value > 100) {
        alert("Возраст от 1 до 100 лет");
        ageInput.focus();
        return false;
    }

    if (!cityInput.value.trim()) {
        alert("Введите город");
        cityInput.focus();
        return false;
    }

    if (!hobbyInput.value.trim()) {
        alert("Введите хобби");
        hobbyInput.focus();
        return false;
    }

    return true;
}

saveBtn.addEventListener("click", function() {
    if (validate()) {
        userInfo.textContent = 
        "Имя: " + nameInput.value.trim() + "\n" +
        "Возраст: " + ageInput.value.trim() + "\n" +
        "Город: " + cityInput.value.trim() + "\n" + 
        "Хобби: " + hobbyInput.value.trim();
        alert("Сохранено");
    }
});

clearBtn.addEventListener("click", function() {
    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    hobbyInput.value = "";
    userInfo.textContent = "Нет данных";
    alert("Очищено");
});