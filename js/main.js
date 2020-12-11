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


var choice = ["A", "B", "C", "D"];
var brTacnih = 0;
var url = window.location.href;
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
    document.getElementById('counterTxt').textContent = `Correct answers: ${brTacnih}/10`;
}
if (url.indexOf("minecraft.html") != -1) {
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
    ans9[1].value = '1';
    function fn4() {
        testing(ans9, 'pTag4', 'dugme4');
    }
    var ans10 = document.forma1.e4;
    ans10[3].value = '1';
    function fnLeft4() {
        testing(ans10, 'pTagLeft4', 'dugmeLeft4');
    }
}


if (url.indexOf("league.html") != -1) {
    var answersLol1 = [
        ["Unstoppable force", "Last breath", "Spirit rush", "Final hour"],
        ["Broken wings", "Ki burst", "Tumble", "Runic blade"],
        ["Guinsoo's rageblade", "Moonstone renewer", "Staff of flowing water", "Riftmaker"],
        ["Perseverance", "Judgment", "Demacian Justice", "Courage"],
        ["Sterak's gage", "Rage knife", "Cosmic drive", "Hexdrinker"]
    ];
    var answersLol2 = [
        ["Valor", "Essence theft", "Harrier", "Curtain call"],
        ["Force of nature", "Zhonya's hourglass", "Warmog's armor", "Edge of night"],
        ["Final spark", "Pyromania", "Incinerate", "Molten shield"],
        ["Rift scuttler", "Gromp", "Murk wolf", "Blue sentinel"],
        ["Second wind", "Overheal", "Cut down", "Last stand"]
    ];
    var yLol1 = ["Which of the following names in the name of Yasuo's ultimate ability?",
        "What is the name of Riven's passive ability?",
        "Which of these items doesnt give any ability power?",
        "What is the name of Garen's second (w) ability?",
        "Which of the following items is a on-hit effect item?"
    ];
    var yLol2 = ["What is the name of Quinn's passive ability?",
        "Which of these items is a magic resistance item?",
        "What is the name of Annie's passive ability?",
        "Which of the following monster has most hp at the lowest level?",
        "Which of these runes is not a precision path rune?"
    ];

    for (var k = 0; k < 5; k++) {

        document.getElementById("lol1").innerHTML += `<label>${yLol1[k]}</label><br>`;
        document.getElementById("lol2").innerHTML += `<label>${yLol2[k]}</label><br>`;
        for (var i = 0; i < 4; i++) {
            document.getElementById("lol1").innerHTML += `<input type='radio' class='btn-check' value='0' name='lol1${k}' id='a${k.toString() + i.toString()}'/>`;
            document.getElementById("lol2").innerHTML += `<input type='radio' class='btn-check' value='0' name='lol2${k}' id='o${k.toString() + i.toString()}'/>`;
            document.getElementById("lol1").innerHTML += `<label class='btn btn-outline-danger m-1' for='a${k.toString() + i.toString()}'>${choice[i]}</label>`;
            document.getElementById("lol2").innerHTML += `<label class='btn btn-outline-danger m-1' for='o${k.toString() + i.toString()}'>${choice[i]}</label>`;
            document.getElementById("lol1").innerHTML += `<label>${answersLol1[k][i]}</label><br>`;
            document.getElementById("lol2").innerHTML += `<label>${answersLol2[k][i]}</label><br>`;
        }
        document.getElementById("lol1").innerHTML += `<button type='button' class='btn btn-secondary' id='dugmeLol1${k}' onclick='fnLol1${k}()'>Submit</button><br>`;
        document.getElementById("lol2").innerHTML += `<button type='button' class='btn btn-secondary' id='dugmeLol2${k}' onclick='fnLol2${k}()'>Submit</button><br>`;
        document.getElementById("lol1").innerHTML += `<p id='pTagLol1${k}'></p>`;
        document.getElementById("lol2").innerHTML += `<p id='pTagLol2${k}'></p>`;
    }

    var ansLol1 = document.forma1.lol10;
    ansLol1[1].value = '1';
    function fnLol10() {
        testing(ansLol1, 'pTagLol10', 'dugmeLol10');
    }
    var ansLol2 = document.forma1.lol20;
    ansLol2[2].value = '1';
    function fnLol20() {
        testing(ansLol2, 'pTagLol20', 'dugmeLol20');
    }
    var ansLol3 = document.forma1.lol11;
    ansLol3[3].value = '1';
    function fnLol11() {
        testing(ansLol3, 'pTagLol11', 'dugmeLol11');
    }
    var ansLol4 = document.forma1.lol21;
    ansLol4[0].value = '1';
    function fnLol21() {
        testing(ansLol4, 'pTagLol21', 'dugmeLol21');
    }
    var ansLol5 = document.forma1.lol12;
    ansLol5[0].value = '1';
    function fnLol12() {
        testing(ansLol5, 'pTagLol12', 'dugmeLol12');
    }
    var ansLol6 = document.forma1.lol22;
    ansLol6[1].value = '1';
    function fnLol22() {
        testing(ansLol6, 'pTagLol22', 'dugmeLol22');
    }
    var ansLol7 = document.forma1.lol13;
    ansLol7[3].value = '1';
    function fnLol13() {
        testing(ansLol7, 'pTagLol13', 'dugmeLol13');
    }
    var ansLol8 = document.forma1.lol23;
    ansLol8[3].value = '1';
    function fnLol23() {
        testing(ansLol8, 'pTagLol23', 'dugmeLol23');
    }
    var ansLol9 = document.forma1.lol14;
    ansLol9[1].value = '1';
    function fnLol14() {
        testing(ansLol9, 'pTagLol14', 'dugmeLol14');
    }
    var ansLol10 = document.forma1.lol24;
    ansLol10[0].value = '1';
    function fnLol24() {
        testing(ansLol10, 'pTagLol24', 'dugmeLol24');
    }
}

if (url.indexOf("genshin.html") != -1) {
    var answersLol1 = [
        ["Thousand winds temple", "Stormterror's Lair", "Whispering woods", "Stormbearer point"],
        ["Outrider", "Librarian", "Cavalry Captain", "Acting Grand Master"],
        ["Melt", "Electro-charge", "Overload", "Superconduct"],
        ["Retribution", "Oceanborne", "Tidecaller", "Stormbreaker"],
        ["Midnight Phantasmagoria", "Nightrider", "Stellar Predator", "Wings of Nightmare"]
    ];
    var answersLol2 = [
        ["Searing Onslaught", "Blessing of Phoenix", "Dawn", "Searing Ember"],
        ["Ripple of Fate", "Reflection of Doom", "Waterborne Destiny", "Stellaris Phantasm"],
        ["Debate club", "Cool steel", "Old Merc's Pal", "Quartz"],
        ["Twin Nephrite", "Serpent Spine", "Lion's Roar", "Deathmatch"],
        ["Wuwang hill", "Wolvendom", "Springvale", "Windrise"]
    ];
    var yLol1 = ["What are the ruins to the northwest of Mondstadt called?",
        "What is Jean's official title?",
        "Which of the following reactions is not an electro reaction?",
        "What is the name of Beidou's elemental burst?",
        "What is the name of Fischl's elemental skill?"
    ];
    var yLol2 = ["What is the name of Diluc's elemental burst?",
        "What is the name of Mona's normal attack?",
        "Which of the following is not a claymore weapon?",
        "Which of the following is a polearm weapon?",
        "Which of these places is in Liyue?"
    ];

    for (var k = 0; k < 5; k++) {

        document.getElementById("lol1").innerHTML += `<label>${yLol1[k]}</label><br>`;
        document.getElementById("lol2").innerHTML += `<label>${yLol2[k]}</label><br>`;
        for (var i = 0; i < 4; i++) {
            document.getElementById("lol1").innerHTML += `<input type='radio' class='btn-check' value='0' name='lol1${k}' id='a${k.toString() + i.toString()}'/>`;
            document.getElementById("lol2").innerHTML += `<input type='radio' class='btn-check' value='0' name='lol2${k}' id='o${k.toString() + i.toString()}'/>`;
            document.getElementById("lol1").innerHTML += `<label class='btn btn-outline-danger m-1' for='a${k.toString() + i.toString()}'>${choice[i]}</label>`;
            document.getElementById("lol2").innerHTML += `<label class='btn btn-outline-danger m-1' for='o${k.toString() + i.toString()}'>${choice[i]}</label>`;
            document.getElementById("lol1").innerHTML += `<label>${answersLol1[k][i]}</label><br>`;
            document.getElementById("lol2").innerHTML += `<label>${answersLol2[k][i]}</label><br>`;
        }
        document.getElementById("lol1").innerHTML += `<button type='button' class='btn btn-secondary' id='dugmeLol1${k}' onclick='fnLol1${k}()'>Submit</button><br>`;
        document.getElementById("lol2").innerHTML += `<button type='button' class='btn btn-secondary' id='dugmeLol2${k}' onclick='fnLol2${k}()'>Submit</button><br>`;
        document.getElementById("lol1").innerHTML += `<p id='pTagLol1${k}'></p>`;
        document.getElementById("lol2").innerHTML += `<p id='pTagLol2${k}'></p>`;
    }

    var ansLol1 = document.forma1.lol10;
    ansLol1[1].value = '1';
    function fnLol10() {
        testing(ansLol1, 'pTagLol10', 'dugmeLol10');
    }
    var ansLol2 = document.forma1.lol20;
    ansLol2[2].value = '1';
    function fnLol20() {
        testing(ansLol2, 'pTagLol20', 'dugmeLol20');
    }
    var ansLol3 = document.forma1.lol11;
    ansLol3[3].value = '1';
    function fnLol11() {
        testing(ansLol3, 'pTagLol11', 'dugmeLol11');
    }
    var ansLol4 = document.forma1.lol21;
    ansLol4[0].value = '1';
    function fnLol21() {
        testing(ansLol4, 'pTagLol21', 'dugmeLol21');
    }
    var ansLol5 = document.forma1.lol12;
    ansLol5[0].value = '1';
    function fnLol12() {
        testing(ansLol5, 'pTagLol12', 'dugmeLol12');
    }
    var ansLol6 = document.forma1.lol22;
    ansLol6[1].value = '1';
    function fnLol22() {
        testing(ansLol6, 'pTagLol22', 'dugmeLol22');
    }
    var ansLol7 = document.forma1.lol13;
    ansLol7[3].value = '1';
    function fnLol13() {
        testing(ansLol7, 'pTagLol13', 'dugmeLol13');
    }
    var ansLol8 = document.forma1.lol23;
    ansLol8[3].value = '1';
    function fnLol23() {
        testing(ansLol8, 'pTagLol23', 'dugmeLol23');
    }
    var ansLol9 = document.forma1.lol14;
    ansLol9[1].value = '1';
    function fnLol14() {
        testing(ansLol9, 'pTagLol14', 'dugmeLol14');
    }
    var ansLol10 = document.forma1.lol24;
    ansLol10[0].value = '1';
    function fnLol24() {
        testing(ansLol10, 'pTagLol24', 'dugmeLol24');
    }
}

if (url.indexOf("contact.html") != -1) {
    var ddlList = `<label for="quizInput">Choose your favorite quiz</label>`;
    ddlList += `<select class="form-control" id="quizInput">`;
    var arrayQuiz = ["...", "Minecraft", "League of Legends", "Genshin Impact"];
    for (i = 0; i < 4; i++) {
        ddlList += `<option>${arrayQuiz[i]}</option>`;
    }
    ddlList += "</select>";
    ddlList +=`<small id="quizNotif" class="form-text text-muted">Please choose your favorite quiz.</small>`;
    document.getElementById('dynamicDdl').innerHTML = ddlList;
    var list = document.getElementById('quizInput');
    var reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,20}$/;
    var reEmail = /^[\wšđčćž]{1,50}@[\wšđčćž]{1,50}\.[\wšđčćž]{2,50}$/;
    document.getElementById('subBtn').onclick = function (e) {
        e.preventDefault();
        if (list.options.selectedIndex == 0) {
            document.getElementById('quizNotif').style.display = "block";
        }
        else{
            document.getElementById('quizNotif').style.display = "none";
        }
        if (document.getElementById('nameInput').value.match(reName) == null){
            document.getElementById('nameNotif').style.display = "block";
        }
        else{
            document.getElementById('nameNotif').style.display = "none";
        }
        if (document.getElementById('surnameInput').value.match(reName) == null){
            document.getElementById('surnameNotif').style.display = "block";
        }
        else{
            document.getElementById('surnameNotif').style.display = "none";
        }
        if (document.getElementById('emailInput').value.match(reEmail) == null){
            document.getElementById('emailNotif').style.display = "block";
        }
        else{
            document.getElementById('emailNotif').style.display = "none";
        }
        if (document.getElementById('textInput').value == "") {
            document.getElementById('txtNotif').style.display = "block";
        }
        else{
            document.getElementById('txtNotif').style.display = "none";
        }
    }

   
}






