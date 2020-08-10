const quiz = [
    {
        img: "sunny.png",
        question: "明日の天気は？",
        question2: "晴れです",
        question3: "「晴れです」の英訳は？",
        answer: ["It's Sunny", "I'm Sunny", "No thanks", "You tell me"],
        correct: "It's Sunny"
    },
    {
        img: "money.png",
        question: "お釣りはいりません",
        question2: "いえ、足りないんです",
        question3: "「お釣りはいりません」の英訳は？",
        answer: ["Goobye", "Keep your money", "I broke", "Pay me back"],
        correct: "Keep your money"
    },
    {
        img: "police.png",
        question: "今から強盗する予定さ",
        question2: "逮捕しときますね",
        question3: "「今から強盗する予定さ」の英訳は？",
        answer: ["I'm gonna plan on robbing now", "I'm gonna plan on fuck you now", "I'm gonna be the god now", "I'm gonna plan on sleep now"],
        correct: "I'm gonna plan on robbing now"
    },
    {
        img: "interview.png",
        question: "これまでの職歴は？",
        question2: "ニートです",
        question3: "「ニートです」の英訳は？",
        answer: ["you smell like sit", "You must be crazy", "I'm unemployed", "What do you do?"],
        correct: "I'm unemployed"
    }


];

let btn = document.getElementsByTagName("button");
const btnLength = btn.length;
let img = document.getElementById("mypic");
let qa = document.getElementById("qa");
let qa2 = document.getElementById("qa2");
let qa3 = document.getElementById("qa3");
let quizindex = 0;
const quizlength = quiz.length;
let score = 0;
let imgIndex = 0;

// 要素の書き換え
let setupQuiz = function () {
    qa.innerText = quiz[quizindex].question;
    qa.style.fontSize = "2rem";
    qa2.innerText = quiz[quizindex].question2;
    qa2.style.fontSize = "2rem";
    qa3.innerText = quiz[quizindex].question3;
    qa3.style.fontSize = "1.25rem";
    img.src = quiz[quizindex].img;
    // ボタンのテキスト
    let btnIndex = 0;
    while (btnIndex < btnLength) {
        btn[btnIndex].innerText = quiz[quizindex].answer[btnIndex];
        btnIndex++;
    }
};
setupQuiz();

// 条件分岐
let clickHandler = function (e) {
    if (quiz[quizindex].correct === e.target.innerText) {
        alert("正解！");
        score++;
    }
    else {
        alert("不正解！！");
    }

    quizindex++;
    if (quizindex < quizlength) {
        setupQuiz();
    }
    else {
        // 結果表示処理
        let comp = document.getElementById("result");
        comp.style.fontSize = "2rem";
        comp.innerHTML = "お疲れ様でした！正解数は４問中" + score + "問です";
        qa.style.display = "none";
        qa2.style.display = "none";
        qa3.style.display = "none";
        // ボタンを消す
        let ok = 0;
        while (ok < btnLength) {
            btn[ok].style.display = "none";
            ok++;
        };
    };
};
// クリックされた時
let handlerIndex = 0;
while (handlerIndex < btnLength) {
    btn[handlerIndex].addEventListener("click", function (e) {
        clickHandler(e);
    });
    handlerIndex++;
}

// audioインスタンス作成
let music = new Audio("music.mp3");
let music2 = new Audio("click.mp3");

function init() {
    music.preload = "auto";
    music.load();
    music.play();

    music.addEventListener("ended", function () {
        music.currentTime = 0;
        music.play();
    }, false);
};

function play() {
    music.loop = true;
    music.play();
}

function stop() {
    music.pause();
    music.currentTime = 0;
}
// ボタンの効果音
function push() {
    music2.play();
}
init();