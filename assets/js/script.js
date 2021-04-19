//  Written questions
var question1 = ["How do you write 'Hello World' in an alert box?",
"How do you create a function in JavaScript?",
"Where is the correct place to insert a JavaScript?",
"Inside which HTML element do we put the JavaScript?",
"The external JavaScript file must contain the 'script' tag.",
"How to write an IF statement in JavaScript?",
"How does a WHILE loop start?",
"How can you add a comment in a JavaScript?",
"What is the correct way to write a JavaScript array?",
"Which event occurs when the user clicks on an HTML element?"
];

//  Written answers
var options1 = ['<button class=buttons1 onclick=q1i()>alertBox("Hello World");</button><br /><br /><button class=buttons1 onclick=q1c()>alert("Hello World"); </button>'];
var options2 = ['<button class=buttons1 onclick=q2c()>function myFunction()  </button><br /><br /><button class=buttons1 onclick=q2i()>function = myFunction()</button>'];
var options3 = ['<button class=buttons1 onclick=q3c()>Both the "head" section and the "body" section are correct  </button><br /><br /><button class=buttons1 onclick=q3i()>The "footer" section</button>'];
var options4 = ['<button class=buttons1 onclick=q4i()>"js" element</button><br /><br /><button class=buttons1 onclick=q4c()>"script" element</button>'];
var options5 = ['<button class=buttons1 onclick=q5c()>False</button><br /><br /><button class=buttons1 onclick=q5i()>True</button>'];
var options6 = ['<button class=buttons1 onclick=q6i()>if i = 5  </button><br /><br /><button class=buttons1 onclick=q6c()>if (i == 5)  </button>'];
var options7 = ['<button class=buttons1 onclick=q7c()>for (i = 0; i <= 5; i++)  </button><br /><br /><button class=buttons1 onclick=q7i()>for (i <= 5; i++)</button>'];
var options8 = ['<button class=buttons1 onclick=q8c()>//This is a comment  </button><br /><br /><button class=buttons1 onclick=q8i()>!--This is a comment--</button>'];
var options9 = ['<button class=buttons1 onclick=q9c()>var colors = ["red", "green", "blue"]  </button><br /><br /><button class=buttons1 onclick=q9i()>var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")</button>'];
var options10 = ['<button class=buttons1 onclick=q10i()>onchange</button><br /><br /><button class=buttons1 onclick=q10c()>onclick  </button>'];

//  Declare each variable
var a = 0;
a++;
var b = 0;
b++;
var c;

//  if statement for q and a
function begin1() {
c = 100;
disappear1.innerHTML = "";
message1.innerHTML = question1[0];
message2.innerHTML = options1;
number1.innerHTML = a++;
}

function q1c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q1i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q2c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q2i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q3c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q3i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q4c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q4i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q5c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q5i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q6c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q6i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q7c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q7i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q8c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q8i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q9c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q9i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q10c() {
message3.innerHTML = "Correct.";
message2.innerHTML = "";
score1.innerHTML = b++;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function q10i() {
message3.innerHTML = "Incorrect.";
message2.innerHTML = "";
time1.innerHTML = c-= 10;
message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function next1() {
if (a == "2") {
    message1.innerHTML = question1[1];
    message2.innerHTML = options2;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "3") {
    message1.innerHTML = question1[2];
    message2.innerHTML = options3;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "4") {
    message1.innerHTML = question1[3];
    message2.innerHTML = options4;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "5") {
    message1.innerHTML = question1[4];
    message2.innerHTML = options5;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "6") {
    message1.innerHTML = question1[5];
    message2.innerHTML = options6;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "7") {
    message1.innerHTML = question1[6];
    message2.innerHTML = options7;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "8") {
    message1.innerHTML = question1[7];
    message2.innerHTML = options8;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "9") {
    message1.innerHTML = question1[8];
    message2.innerHTML = options9;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
}

else if (a == "10") {
    message1.innerHTML = question1[9];
    message2.innerHTML = options10;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
} else {
    window.clearInterval(update);
    c = "-";
    message1.innerHTML = "End of Quiz";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "<button class=buttons2 onclick=restart1()>Restart</button>";
}
}

//  Timer for countdown and for time restart
function timer1() {
  c = c - 1;
  if (c < 100) {
    time1.innerHTML = c;
  }

  if (c < 1) {
    window.clearInterval(update);
    message1.innerHTML = "Time's up";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "<button class=buttons2 onclick=restart1()>Restart</button>";
  }
}

update = setInterval("timer1()", 1000);

function restart1() {
location.reload();
}