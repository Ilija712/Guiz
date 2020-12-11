console.log("test");
var resolution = $(window).width();
if (resolution > 767) {

    $(document).ready(function () {
        $('#dropD').css({
            display: "none",
            left: "auto"
        });
        $('.dropD').hover(function () {
            $(this)
                .find('#dropD')
                .stop(true, true)
                .slideDown('fast');
        }, function () {
            $(this)
                .find('#dropD')
                .stop(true, true)
                .fadeOut('fast');
        });
    });
}
if (resolution < 768) {
    $(document).ready(function () {
        $('#dropD').css('position', 'relative');
    });
}
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: true,
        navContainer: '.owl-nav',
        dotsContainer: '.owl-dots',
        navText: ['<img src="img/left.gif"/>',
            '<img src="img/right.gif"/>']

    })
});

var answers = [
    ["C", "C++", "Java", "Python"],
    ["Elon Musk", "Mark Zuckerberg", "Jens Bergensten", "Markus Persson"],
    ["Golden axe", "Diamond hoe", "Stone pickaxe", "None of the above"],
    ["III", "V", "I", "IV"], 
    ["Desert temple", "Forest hut", "Ocean monument", "Nether fortress"]
];
var answersLeft = [
    ["8", "10", "6", "12"],
    ["8", "6", "12", "4"],
    ["Wither Skeleton skull", "Bones", "Nether star", "Stone sword"],
    ["The End", "The Overworld", "The Nether", "None of the above"], 
    ["Spider eye", "Glistering melon", "Golden carrot", "Sugar"]
];
var y = ["In what coding language was original Minecraft created?",
    "Who was the original creator of Minecraft?",
    "Which of these tools can be used to harvest Lapis Lazuli ore?",
    "What is the highest level of Sharpness that can be obtained in vanilla minecraft?", 
    "Which of these is not a structure that can be found in minecraft?"
];
var yLeft = ["How many pieces of obsidian are needed to make a nether portal?",
    "How many iron ingots does it take to craft an iron chestplate?",
    "What does a Wither drop upon being killed?",
    "In what dimension is the Ender Dragon located at?", 
    "What ingredient is used to brew a potion of swiftness?"
];
var choice = ["A", "B", "C", "D"];

for (var k = 0; k < 5; k++) {

    document.getElementById("gg").innerHTML += `<label>${y[k]}</label><br>`;
    document.getElementById("ez").innerHTML += `<label>${yLeft[k]}</label><br>`;
    for (var i = 0; i < 4; i++) {
        document.getElementById("gg").innerHTML += `<input type='radio' class='btn-check' value='0' name='g${k}' id='a${k.toString() + i.toString()}'/>`;
        document.getElementById("ez").innerHTML += `<input type='radio' class='btn-check' value='0' name='e${k}' id='o${k.toString() + i.toString()}'/>`;
        document.getElementById("gg").innerHTML += `<label class='btn btn-outline-danger m-1' for='a${k.toString() + i.toString()}'>${choice[i]}</label>`;
        document.getElementById("ez").innerHTML += `<label class='btn btn-outline-danger m-1' for='o${k.toString() + i.toString()}'>${choice[i]}</label>`;
        document.getElementById("gg").innerHTML += `<label>${answers[k][i]}</label><br>`;
        document.getElementById("ez").innerHTML += `<label>${answersLeft[k][i]}</label><br>`;
    }
    document.getElementById("gg").innerHTML += `<button type='button' class='btn btn-secondary' id='dugme${k}' onclick='fn${k}()'>Submit</button><br>`;
    document.getElementById("ez").innerHTML += `<button type='button' class='btn btn-secondary' id='dugmeLeft${k}' onclick='fnLeft${k}()'>Submit</button><br>`;
    document.getElementById("gg").innerHTML += `<p id='pTag${k}'></p>`;
    document.getElementById("ez").innerHTML += `<p id='pTagLeft${k}'></p>`;
}

function testing(testingX, testingPTag, testingBtn) {
    if (testingX[0].checked == false && testingX[1].checked == false && testingX[2].checked == false && testingX[3].checked == false) {
        document.getElementById(testingPTag).textContent = "Please choose an answer!";
    }
    for (i = 0; i < 4; i++) {
        console.log(testingX[i].checked);

        if (testingX[i].checked) {
            document.getElementById(testingBtn).disabled = true;
        }
        if (testingX[i].checked && testingX[i].value == 1) {
            document.getElementById(testingPTag).textContent = "Your answer is correct!";
            brTacnih++;
        }
        if (testingX[i].checked && testingX[i].value == 0) {
            document.getElementById(testingPTag).textContent = "Your answer is wrong.";
        }
    }
    console.log(brTacnih);
}

var brTacnih = 0;
var ans1 = document.forma1.g0;
ans1[2].value = '1';
function fn0() {
    testing(ans1, 'pTag0', 'dugme0');
}
var ans2 = document.forma1.e0;
ans2[1].value = '1';
function fnLeft0() {
    testing(ans2, 'pTagLeft0', 'dugmeLeft0');
}
var ans3 = document.forma1.g1;
ans3[3].value = '1';
function fn1() {
    testing(ans3, 'pTag1', 'dugme1');
}
var ans4 = document.forma1.e1;
ans4[0].value = '1';
function fnLeft1() {
    testing(ans4, 'pTagLeft1', 'dugmeLeft1');
}
var ans5 = document.forma1.g2;
ans5[2].value = '1';
function fn2() {
    testing(ans5, 'pTag2', 'dugme2');
}
var ans6 = document.forma1.e2;
ans6[2].value = '1';
function fnLeft2() {
    testing(ans6, 'pTagLeft2', 'dugmeLeft2');
}
var ans7 = document.forma1.g3;
ans7[1].value = '1';
function fn3() {
    testing(ans7, 'pTag3', 'dugme3');
}
var ans8 = document.forma1.e3;
ans8[0].value = '1';
function fnLeft3() {
    testing(ans8, 'pTagLeft3', 'dugmeLeft3');
}
var ans9 = document.forma1.g4;
ans9[1].value='1';
function fn4(){
    testing(ans9, 'pTag4', 'dugme4');
}
var ans10 = document.forma1.e4;
ans10[3].value='1';
function fnLeft4(){
    testing(ans10, 'pTagLeft4', 'dugmeLeft4');
}



