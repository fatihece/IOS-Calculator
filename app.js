let numberButton = document.querySelectorAll(".number")
let screen = document.querySelector(".result")
let operatorButton = document.querySelectorAll(".operator")
let selectedOperator = "" // seçileck operatörü burada tutuyoruz.
// İşlem yapabilmek için numaraları da bir yerde tutmamız gerek.
// Bunu da iki parça olarak düşünelim. opertorden önceki ve sonraki şeklinde
let leftPart = "";
let rightPart = "";




numberButton.forEach(number => {
    number.addEventListener("click", displayNum)
    function displayNum() {
        if (screen.innerHTML == "0") {
            screen.innerHTML = ""
        }
        screen.innerHTML += this.textContent
        // leftPart += this.value

        if (selectedOperator == "") {
          leftPart += this.value
        } else if(selectedOperator != "" ){
            rightPart += this.value
      }
    }
});

operatorButton.forEach(operator => {
    operator.addEventListener("click", compute)
    function compute() {
        screen.innerHTML += this.value
        selectedOperator = this.value
    }

});

document.querySelector("#calculate").addEventListener("click", function () {
    // = bastığımızda sonucu görmek için;
    if (selectedOperator == "+") {
        screen.innerHTML = parseInt(leftPart) + parseInt(rightPart);
        // var add = parseInt(leftPart) + parseInt(rightPart);
        // document.querySelector(".result").innerHTML = add
    } else if (selectedOperator == "-") {
        screen.innerHTML = leftPart - rightPart;
    } else if (selectedOperator == "*") {
        screen.innerHTML = leftPart * rightPart
    } else if (selectedOperator == "÷") {
        screen.innerHTML = leftPart / rightPart
    }
});


document.querySelector(".ac").addEventListener("click", function () {
    selectedOperator = ""
    leftPart = ""
    rightPart=""
    screen.innerHTML =""
})



document.querySelector(".mod").addEventListener("click", function () {
    let buttonClicked = this.innerHTML;
    screen.innerHTML = buttonClicked;
    if (buttonClicked == "%") {
        screen.innerHTML = leftPart / 100
    }
})

document.querySelector(".pm").addEventListener("click", function () {
    let buttonClicked = this.innerHTML;
    screen.innerHTML = buttonClicked;
    if (buttonClicked == "±")
        screen.innerHTML = leftPart * -1;
})