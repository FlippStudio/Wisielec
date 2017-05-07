var number = Math.floor(Math.random()*9);
var passwords = new Array(10);
passwords[0] = "Żadna praca nie hańbi";
passwords[1] = "Nie docenia się swojego stanu żamożności dopóki się go nie straci";
passwords[2] = "Życie samemu jest bez sensu";
passwords[3] = "Życie to kwestia wyborów mniejszego zła";
passwords[4] = "Matura to egzamin dojrzałości";
passwords[5] = "Niebieskie niebo to piękny widok";
passwords[6] = "Pokolenie Z to bardzo ciekawy przypadek";
passwords[7] = "Strach tnie głębiej niż miecze";
passwords[8] = "Czytać to bardziej żyć to żyć intensywniej";
passwords[9] = "Największy jest ból gdy rany zadają najbliżsi";
var password = passwords[number];
password = password.toUpperCase(); 
var password1 = "";
var leng = password.length;
var errors = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i=0;i<leng;i++)
    {
        if(password.charAt(i)==" ") password1 = password1 + " ";
        else
            password1 = password1 + "-";
    }
function display_password()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start; 

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start()
{
    var content_div = "";
    for(i=0;i<35;i++)
        {
            var element = "let" + i;
            content_div = content_div + '<div class="letter" onclick="check('+i+')"id="'+element+'">' + letters[i] + '</div>';
            if((i+1) % 7 == 0) content_div = content_div + '<div style="clear:both"></div>';
        }
    document.getElementById("alphabet").innerHTML = content_div;
    
    
    
    display_password();
}

String.prototype.ssign = function(place, sign)
{
    if(place>this.length - 1) return this.toString();
    else
        return this.substr(0, place) + sign + this.substr(place+1);
}

function check(nr)
{
    var guessed = false;
    
    for(i=0;i<leng;i++)
        {     
          if(password.charAt(i) == letters[nr]) 
              {
                  password1 = password1.ssign(i, letters[nr]);
                  guessed = true;
              }
        }
    
     display_password();
    
    if(guessed == true)
        {
            yes.play();
            var element = "let" + nr;
            document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "3px solid #00C000";
            document.getElementById(element).style.cursor = "default";
            
            display_password();
        }
    else
        {
            no.play();
            var element = "let" + nr;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "#C00000";
            document.getElementById(element).style.border = "3px solid #C0000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick",";");
            errors++;
            var display = "img/s"+ errors + ".jpg";
            document.getElementById("hangman").innerHTML = '<img src="'+display+'" alt="#" />';
        }
    
    if(password == password1)
        {
            document.getElementById("alphabet").innerHTML = " Udało ci sie odgadnać hasło: " +password+'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
        }

    if(errors>=9)
        {
            document.getElementById("alphabet").innerHTML = 'Przegrana! <br/>Niestety nie udało Ci się odgadnąc hasła<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
        }
    
}