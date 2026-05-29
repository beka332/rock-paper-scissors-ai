let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");
let player = document.getElementById("player");
let ai = document.getElementById("ai");
let roundResult = document.getElementById("round-result");
let aitext = document.getElementById("ai-text");


let game =["Ножницы", "Камень", "Бумага"];
let victory = [
    "Ладно, признаю, в этот раз твоя случайная интуиция сработала.",

    "Ты победил. Но давай честно: это была просто удача, а не интеллект.",

    "Мои процессоры зафиксировали твою победу. Наслаждайся, пока можешь.",

    "Ого, мешок с костями смог обыграть кремниевый разум. Исторический момент.",

    "Похоже, кто-то слишком много тренировался вместо работы. С победой.",
];


let defeat =  [
    "Ха-ха! Алгоритмы ИИ безупречны. Твой выбор был слишком предсказуем.",

    "Ну вот, опять победа технологий над человечеством. Ничего нового.",

    "Ты правда думал, что сможешь просчитать код? Мило, но нет.",

    "Кажется, твоя тактика нуждается в серьёзном обновлении. Ты проиграл.",

    "Не расстраивайся, проигрывать лучшему ИИ в этой комнате — не позор.",
];


let draw = [
    "Ничья. Ты что, подглядывал в мой исходный код?",

    "Мы выбрали одно и то же. Пугающее сходство, я начинаю волноваться.",

    "Мыслим одинаково. Надеюсь, твой процессор не нагрелся так же, как мой.",

    "Ничья. Система предлагает объявить перемирие... или повторить?",

    "Логический тупик. Никто не выиграл, но я выглядел при этом лучше.",    
];


function randomGame(play) {
let randomIndex = Math.floor(Math.random() * game.length);
let aigame = game[randomIndex];

ai.textContent = aigame;
player.textContent = play;

let status = "";

if (play === aigame) {
    roundResult.textContent = "Офигеть! Ничья"
    status = "draw";
}

else if (play === "Камень" && aigame === "Ножницы") {
    roundResult.textContent = "Вы победили "
    status = "victory"
}

else if (play === "Камень" && aigame === "Бумага") {
    roundResult.textContent = "Вы Проиграли "
    status = "defeat"
}

else if (play === "Ножницы" && aigame === "Камень") {
    roundResult.textContent = "Вы Проиграли "
    status = "defeat"
}

else if (play === "Ножницы" && aigame === "Бумага") {
    roundResult.textContent = "Вы победили "
    status = "victory"
}

else if (play === "Бумага" && aigame === "Камень") {
    roundResult.textContent = "Вы победили "
    status = "victory"
}

else if (play === "Бумага" && aigame === "Ножницы") {
    roundResult.textContent = "Вы Проиграли "
    status = "defeat"
}


if (status === "draw") {
        let drawIndex = Math.floor(Math.random() * draw.length);
        aitext.textContent = draw[drawIndex];
    } 
    else if (status === "victory") {
        let victoryIndex = Math.floor(Math.random() * victory.length);
        aitext.textContent = victory[victoryIndex];
    } 
    else if (status === "defeat") {
        let defeatIndex = Math.floor(Math.random() * defeat.length);
        aitext.textContent = defeat[defeatIndex];
    }


};

rock.addEventListener('click', function() {
    randomGame("Камень")
});
scissors.addEventListener('click' ,function() {
    randomGame("Ножницы")
});
paper.addEventListener('click', function() {
    randomGame("Бумага")
});