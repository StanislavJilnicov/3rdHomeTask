/*------------------------------------*\
   #1st Option
\*------------------------------------*/

var yourAge, count10, count100;

yourAge = prompt('Сколько Вам лет?', '100');
count10 = yourAge % 10;
count100 = yourAge % 100;

if ((count100 > 10) && (count100 < 15)) {
   alert(`${yourAge} лет`);
} else if ((count10 > 1) && (count10 < 5)) {
   alert(`${yourAge} года`);
} else if (count10 == 1) {
   alert(`${yourAge} год`);
} else {
   alert(`${yourAge} лет`);
}

/*------------------------------------*\
   #2nd Option
\*------------------------------------*/

/*var yourAge, count10, count100, alertMessage;

yourAge = prompt('Сколько Вам лет?', '100');
count10 = yourAge % 10;
count100 = yourAge % 100;

alertMessage = (count100 > 10) && (count100 < 15) ? `${yourAge} лет` :
   (count10 > 1) && (count10 < 5) ? `${yourAge} года` :
   count10 == 1 ? `${yourAge} год` :
   `${yourAge} лет`;

alert(alertMessage);*/
