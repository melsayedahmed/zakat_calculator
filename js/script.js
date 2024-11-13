var money = document.getElementById("money");
var gold = document.getElementById("gold");
var selver = document.getElementById("selver");
var sahm = document.getElementById("sahm");
var bttns = document.querySelectorAll(".type .bttn");
var boxs = document.querySelectorAll(".box1");
let valueNum = document.querySelector(".centerValue h1");
let numInput = document.querySelectorAll("input.num");
let alertMassage = document.querySelector(".alert");
let topMoney = document.querySelector(".topMoney h6.zakat span");
let theRestMoney = document.querySelector(".bottomValue h5.rest");
let sizeGold = document.querySelector(".sizeGold input");
let chooseInput = document.querySelector(".choose select");
let btnGold = document.querySelector(".btn-gold button");
let topGold = document.querySelector(".topGold h6.zakat span");
let topSelver = document.querySelector(".topSelver h6.zakat span");
bttns.forEach(function(btn){
    btn.addEventListener("click",function(){
        bttns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btn.classList.add("active");
        let btnBoxs = btn.getAttribute("data-target");
        //console.log(btn.id)
        boxs.forEach(function(box){
            if(box.id === btnBoxs)
                {
                    box.classList.replace("d-none" , "d-block")
                    document.querySelector(".icon").classList.replace("d-flex","d-none");
                    valueNum.innerHTML = "0";
                    topMoney.innerHTML = "0";
                    topGold.innerHTML = "0"
                    theRestMoney.innerHTML = "0"
                    topSelver.innerHTML = "0";
                }
                else
                {
                    box.classList.replace("d-block" , "d-none");
                    numInput.forEach(function(inputs){
                        inputs.value = "";
                    })
                    chooseInput.value = ""
                    alertMassage.classList.replace("d-flex","d-none")
                }
        })
    })
});



for(let i = 0; i < numInput.length; i++)
    {
        numInput[i].addEventListener("input",function(e){
            // let inputValue = numInput[i].value;
            //console.log(inputValue);
            let num = /[^0-9]/gi;
            numInput[i].value = numInput[i].value.replace(num,"");
        })
    }



let inputMoney = document.querySelector(".moneyForm");
console.log(inputMoney);
let btnMoney = document.querySelector(".bttnMoney button");
inputMoney.addEventListener("input",function(){
    if(inputMoney.value != "")
        {
            btnMoney.style.backgroundColor = "blue";
        }
        else
        {
            btnMoney.style.backgroundColor = "#bdbdbd";
        }
});

//hide alert when clicked it
alertMassage.addEventListener("click",function(){
    alertMassage.classList.replace("d-flex","d-none")
})

btnMoney.addEventListener("click",function(){
    let valInputMoney = inputMoney.value;
    let endMoney = valInputMoney / 40 ;
    valueNum.innerHTML = `${endMoney}`;
    topMoney.innerHTML = `${endMoney}`;
    let sumMoney = valInputMoney - endMoney ;
    theRestMoney.innerHTML = `${sumMoney}`;
    if(valInputMoney < 266931.88)
        {
            alertMassage.classList.replace("d-none","d-flex")
        }
        else
        {
            alertMassage.classList.replace("d-flex","d-none")
        }
})

function validBtnGold(){
    if(sizeGold.value != "" && chooseInput.value != "")
        {
            btnGold.style.backgroundColor = "blue"
        }
        else
        {
            btnGold.style.backgroundColor = "#bdbdbd"
        }
}
sizeGold.addEventListener("input",function(){
    validBtnGold();
})
console.log(sizeGold)
chooseInput.addEventListener("change",function(){
    validBtnGold();
});


btnGold.addEventListener("click",function(){
    let gram12Value = sizeGold.value * 1797;
    let endValueGold = gram12Value / 40;
    let sumValueGold = gram12Value - endValueGold;
    //gram14
    let gram14Value = sizeGold.value * 2096.50;
    let endValueGold14 = gram14Value / 40;
    let sumValueGold14 = gram14Value - endValueGold14;
    //gram18
    let gram18Value = sizeGold.value * 2695.50;
    let endValueGold18 = gram18Value / 40;
    let sumValueGold18 = gram18Value - endValueGold18;
    //gram21
    let gram21Value = sizeGold.value * 3144.75;
    let endValueGold21 = gram21Value / 40;
    let sumValueGold21 = gram21Value - endValueGold21;
    //gram22
    let gram22Value = sizeGold.value * 3294.50;
    let endValueGold22 = gram22Value / 40;
    let sumValueGold22 = gram22Value - endValueGold22;
    //gram24
    let gram24Value = sizeGold.value * 3294.50;
    let endValueGold24 = gram24Value / 40;
    let sumValueGold24 = gram24Value - endValueGold24;
    if(sizeGold.value != "" && chooseInput.value != "")
    {
        if(chooseInput.value == 12 && sizeGold.value < 169)
        {
            alertMassage.classList.replace("d-none","d-flex")
            valueNum.innerHTML = `${endValueGold}`;
            theRestMoney.innerHTML = `${sumValueGold}`;
            topGold.innerHTML = `${endValueGold}`
        }
        else if(chooseInput.value == 12 && sizeGold.value >= 169)
        {
            alertMassage.classList.replace("d-flex","d-none")
            valueNum.innerHTML = `${endValueGold}`;
            theRestMoney.innerHTML = `${sumValueGold}`;
            topGold.innerHTML = `${endValueGold}`
        }
        else if(chooseInput.value == 14 && sizeGold.value < 145)
            {
                alertMassage.classList.replace("d-none","d-flex")
                valueNum.innerHTML = `${endValueGold14}`;
                theRestMoney.innerHTML = `${sumValueGold14}`;
                topGold.innerHTML = `${endValueGold14}`
        }
        else if(chooseInput.value == 14 && sizeGold.value >= 145)
            {
                alertMassage.classList.replace("d-flex","d-none")
                valueNum.innerHTML = `${endValueGold14}`;
                theRestMoney.innerHTML = `${sumValueGold14}`;
                topGold.innerHTML = `${endValueGold14}`
        }
        else if(chooseInput.value == 18 && sizeGold.value < 113)
            {
                alertMassage.classList.replace("d-none","d-flex")
                valueNum.innerHTML = `${endValueGold18}`;
                theRestMoney.innerHTML = `${sumValueGold18}`;
                topGold.innerHTML = `${endValueGold18}`
        }
        else if(chooseInput.value == 18 && sizeGold.value >= 113)
            {
                alertMassage.classList.replace("d-flex","d-none")
                valueNum.innerHTML = `${endValueGold18}`;
                theRestMoney.innerHTML = `${sumValueGold18}`;
                topGold.innerHTML = `${endValueGold18}`
        }
        else if(chooseInput.value == 21 && sizeGold.value < 97)
            {
                alertMassage.classList.replace("d-none","d-flex")
                valueNum.innerHTML = `${endValueGold21}`;
                theRestMoney.innerHTML = `${sumValueGold21}`;
                topGold.innerHTML = `${endValueGold21}`
        }
        else if(chooseInput.value == 21 && sizeGold.value >= 97)
            {
                alertMassage.classList.replace("d-flex","d-none")
                valueNum.innerHTML = `${endValueGold21}`;
                theRestMoney.innerHTML = `${sumValueGold21}`;
                topGold.innerHTML = `${endValueGold21}`
        }
        else if(chooseInput.value == 22 && sizeGold.value < 93)
            {
                alertMassage.classList.replace("d-none","d-flex")
                valueNum.innerHTML = `${endValueGold22}`;
                theRestMoney.innerHTML = `${sumValueGold22}`;
                topGold.innerHTML = `${endValueGold22}`
        }
        else if(chooseInput.value == 22 && sizeGold.value >= 93)
            {
                alertMassage.classList.replace("d-flex","d-none")
                valueNum.innerHTML = `${endValueGold22}`;
                theRestMoney.innerHTML = `${sumValueGold22}`;
                topGold.innerHTML = `${endValueGold22}`
        }
        else if(chooseInput.value == 24 && sizeGold.value < 85)
            {
                alertMassage.classList.replace("d-none","d-flex")
                valueNum.innerHTML = `${endValueGold24}`;
                theRestMoney.innerHTML = `${sumValueGold24}`;
                topGold.innerHTML = `${endValueGold24}`
        }
        else if(chooseInput.value == 24 && sizeGold.value >= 85)
            {
                alertMassage.classList.replace("d-flex","d-none")
                valueNum.innerHTML = `${endValueGold24}`;
                theRestMoney.innerHTML = `${sumValueGold24}`;
                topGold.innerHTML = `${endValueGold24}`
        }
    }
        else
        {
            console.log("empty")
        }
})

let selverInput = document.querySelector("#Selverinp");
let bttnSelver = document.querySelector(".bttnSelver button");


selverInput.addEventListener("input",function(){
    if(selverInput.value != "")
        {
            bttnSelver.style.backgroundColor = "blue";
        }
        else
        {
            bttnSelver.style.backgroundColor = "#bdbdbd";
        }
});

bttnSelver.addEventListener("click",function(){
    let valInputSelver = selverInput.value;
    let multiValue = valInputSelver * 38;
    let endSelver = multiValue / 40 ;
    valueNum.innerHTML = `${endSelver}`;
    topSelver.innerHTML = `${endSelver}`;
    let sumSelver = multiValue - endSelver ;
    theRestMoney.innerHTML = `${sumSelver}`;
    if(valInputSelver < 595)
        {
            alertMassage.classList.replace("d-none","d-flex")
        }
        else
        {
            alertMassage.classList.replace("d-flex","d-none")
        }
})

let numOfSahm = document.querySelector("#numSahm");
let valueOfSahm = document.querySelector("#ValueSahm");
let btnSahm = document.querySelector(".bttnSahm button");
function validBtnSahm(){
    if(numOfSahm.value != "" && valueOfSahm.value != "")
        {
            btnSahm.style.backgroundColor = "blue";
        }
        else
        {
            btnSahm.style.backgroundColor = "#bdbdbd";
        }
} 
numOfSahm.addEventListener("input",function(){
    validBtnSahm();
});
valueOfSahm.addEventListener("input",function(){
    validBtnSahm();
})
btnSahm.addEventListener("click",function(){
    let valNumOfSahm = numOfSahm.value;
    let valValueOfSahm = valueOfSahm.value;
    let multiSahm = valNumOfSahm * valValueOfSahm;
    let endValSahm = valNumOfSahm * valValueOfSahm / 40;
    if(multiSahm < 267303.75)
        {
            alertMassage.classList.replace("d-none","d-flex");
            valueNum.innerHTML = `${endValSahm}`;
            let sumSahm = multiSahm - endValSahm ;
            theRestMoney.innerHTML = `${sumSahm}`;
        }
        else
        {
            alertMassage.classList.replace("d-flex","d-none");
            valueNum.innerHTML = `${endValSahm}`;
            let sumSahm = multiSahm - endValSahm ;
            theRestMoney.innerHTML = `${sumSahm}`;
        }
})


// alertMassage.classList.replace("d-flex","d-none");
// valueNum.innerHTML = `${endValSahm}`;
// let sumSahm = multiSahm - endValSahm ;
// theRestMoney.innerHTML = `${sumSahm}`;