var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
// var ans;
// function evaluate(z)
//     {
//         e = "Error!";
//         ans = eval('z');
//         if (ans != 'undefined') {
//             display.innerHTML = ans;
//         }
//         else display.innerHTML = e;
//     }

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        console.log(i);
        var value = this.getAttribute("data-value");
        if (value == 'AC') {
            display.innerHTML = null;
        }
        else if (value == '←') {
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
        }
        else if (value == '=') {
            var z = display.innerHTML;
            // evaluate('z');
            var ans = eval(z);
            display.innerHTML = ans;
        }
        else {
            display.innerHTML += value;
        }

    });
}