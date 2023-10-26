var cardEntry = "0000000000000000";

const cardDigits = cardEntry.replace(/\d{4}(?=.)/g, '$& ');


function updateCardNo() {
    var cardNoValue = document.getElementById("card-number").value.toString().replace(/\d{4}(?=.)/g, '$& ');

    document.getElementById("card-digits").textContent = cardNoValue;
}

function updateCardName() {
    var cardNoValue = document.getElementById("cardholder-name").value;

    document.querySelector(".cardholder .name").textContent = cardNoValue;
}

function updateMonth() {
    var cardNoValue = document.getElementById("expiry-month").value;

    document.querySelector(".cardholder .expiry .month").textContent = cardNoValue;
}

function updateYear() {
    var cardNoValue = document.getElementById("expiry-year").value;

    document.querySelector(".cardholder .expiry .year").textContent = cardNoValue;
}

function updateCvc() {
    var cardNoValue = document.getElementById("cvc-no").value;

    document.querySelector(".card-back .cvc").textContent = cardNoValue;
}


//This function validates all the credit card form inputs
function checkForm() {
    const cardNo = document.getElementById("card-number");

    if (cardNo.value.trim() === "") {
        document.getElementById("cardnumber-error").style.display = "block";
        cardNo.style.border = "1.5px solid hsl(0, 100%, 66%)"
    }else{
        document.getElementById("cardnumber-error").style.display = "none";
        cardNo.style.border = "1.5px solid hsl(270, 3%, 87%)";
    }

    const cardName = document.getElementById("cardholder-name");

    if (cardName.value.trim() === "") {
        document.getElementById("cardname-error").style.display = "block";
        cardName.style.border = "1.5px solid hsl(0, 100%, 66%)"
    }else{
        document.getElementById("cardname-error").style.display = "none";
        cardName.style.border = "1.5px solid hsl(270, 3%, 87%)";
    }

    const expiryMonth = document.getElementById("expiry-month");
    
    const expiryYear = document.getElementById("expiry-year");

    if (expiryMonth.value.trim() === "" || expiryYear.value.trim() === "") {
        document.getElementById("expiry-error").style.display = "block";
    }else{
        document.getElementById("expiry-error").style.display = "none";
    }

    if (expiryMonth.value.trim() === "") {
        expiryMonth.style.border = "1.5px solid hsl(0, 100%, 66%)"
    }else{
        expiryMonth.style.border = "1.5px solid hsl(270, 3%, 87%)"
    }

    if (expiryYear.value.trim() === "") {
        expiryYear.style.border = "1.5px solid hsl(0, 100%, 66%)"
    }else{
        expiryYear.style.border = "1.5px solid hsl(270, 3%, 87%)"
    }


    const cvcNo = document.getElementById("cvc-no");

    if(cvcNo.value.trim() === ""){
        document.getElementById("cvc-error").style.display = "block";
        cvcNo.style.border = "1.5px solid hsl(0, 100%, 66%)"
    }else{
        document.getElementById("cvc-error").style.display = "none";
        cvcNo.style.border = "1.5px solid hsl(270, 3%, 87%)";
    }

    function leastLength(input , minlength){
        if (input.value.length < minlength ) {
            input.style.border = "1.5px solid hsl(0, 100%, 66%)"
        }else{
            input.style.border = "1.5px solid hsl(270, 3%, 87%)"
        }
    };

    leastLength(cardNo , 19);
    leastLength(expiryMonth , 2);
    leastLength(expiryYear , 2);
    leastLength(cvcNo , 3);

    function regDate(input , dateMax){
        if(input.value > dateMax){
            input.style.border = "1.5px solid hsl(0, 100%, 66%)"
        }
    }

    regDate(expiryMonth , 12);

    function regDate2(input , dateMin){
        if(input.value < dateMin){
            input.style.border = "1.5px solid hsl(0, 100%, 66%)"
        }
    }

    regDate2(expiryYear , 23);

    cardForm = document.getElementById("card-form");
    thankYou = document.getElementById("thank-you");

    function formSubmit() {
        cardForm.style.display = "none"
        thankYou.style.display = "flex"
        document.getElementById("card-digits").innerHTML = "0000 0000 0000 0000"
        document.querySelector(".cardholder .name").innerHTML = "JANE APPLESEED"
        document.querySelector(".cardholder .expiry .month").innerHTML = "00"
        document.querySelector(".cardholder .expiry .year").innerHTML = "00"
        document.querySelector(".card-back .cvc").innerHTML = "000"
    }

    if(cardNo.value.trim() !== "" & cardName.value.trim() !== "" & expiryMonth.value.trim() !== "" & expiryYear.value.trim() !== "" & cvcNo.value.trim() !== "" & cardNo.value.length === 19 & expiryMonth.value.length == 2 & expiryYear.value.length == 2 & cvcNo.value.length == 3 & expiryMonth.value <= 12 & expiryYear.value >= 23){
        formSubmit();
    }
}

//This function returns the form but all inputs are empty
function returnForm() {
    const cardNo = document.getElementById("card-number");
    cardNo.value = "";

    const cardName = document.getElementById("cardholder-name");
    cardName.value = "";

    const expiryMonth = document.getElementById("expiry-month");
    expiryMonth.value = "";

    const expiryYear = document.getElementById("expiry-year");
    expiryYear.value = "";

    const cvcNo = document.getElementById("cvc-no");
    cvcNo.value = "";

    cardForm.style.display = "flex"
    thankYou.style.display = "none"
}