let numberButton = document.querySelectorAll(".number")
let screen = document.querySelector(".result")
let operatorButton = document.querySelectorAll(".operator")
let selectedOperator = "" // seçileck operatörü burada tutuyoruz.
// İşlem yapabilmek için numaraları da bir yerde tutmamız gerek.
// Bunu da iki parça olarak düşünelim. operatorden önceki ve sonraki şeklinde
let leftPart = "";
let rightPart = "";



// number class buttons
numberButton.forEach(number => {
    number.addEventListener("click", displayNum)
    function displayNum() {
        if (screen.innerHTML == "0") {
            screen.innerHTML = ""
        }
        screen.innerHTML += this.textContent
        if (selectedOperator == "") {
          leftPart += this.value
        } else if(selectedOperator != "" ){
            rightPart += this.value
      }
    }
});


// operator buttons
operatorButton.forEach(operator => {
    operator.addEventListener("click", compute)
    function compute() {
        screen.innerHTML += this.value
        selectedOperator = this.value
    }

});

// (=) equal button
document.querySelector("#calculate").addEventListener("click", function () {
    // = bastığımızda sonucu görmek için;
    screen.textContent = eval(screen.textContent)
});

// AC button
document.querySelector(".ac").addEventListener("click", function () {
    selectedOperator = ""
    leftPart = ""
    rightPart=""
    screen.innerHTML =""
})


// % (percent) button
document.querySelector(".mod").addEventListener("click", function () {
    screen.innerHTML = eval(screen.innerHTML);
})


// plus minus button
document.querySelector(".pm").addEventListener("click", function () {
    let buttonClicked = this.innerHTML;
    screen.innerHTML = buttonClicked;
    if (buttonClicked == "±")
        screen.innerHTML = Number(leftPart * -1) || Number(rightPart * -1)
})





















// let numberButton = document.querySelectorAll(".number")
// let screen = document.querySelector(".result")
// let operatorButton = document.querySelectorAll(".operator")

// numberButton.forEach(number => {
//     number.addEventListener("click", displayNum)
//     function displayNum() {
//         if (screen.innerHTML == "0") {
//             screen.innerHTML = "";
//         }

//         screen.innerHTML += this.textContent
//     }
// });

// operatorButton.forEach(operator => {
//     operator.addEventListener("click", compute)
//     function compute() {
//         screen.innerHTML += operator.innerHTML
//     }
// })

// operatorButton.forEach(function (operator){
//     operator.addEventListener("click", () => {
//         screen.innerHTML += operator.innerHTML;
//     })
// })


// operatorButton.forEach(operator => {
//     operator.addEventListener("click", compute)
//     function compute() {
//         screen.innerHTML += this.value  
// }

// document.querySelector(".ac").addEventListener("click", function () {
//      screen.innerHTML = "0"
// })
 
// document.querySelector("#calculate").addEventListener("click", function () {
//     screen.innerHTML = eval(screen.innerHTML)
// })