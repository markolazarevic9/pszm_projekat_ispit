let CHECK = false;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const btnCalc = document.getElementById("btnCalc");
const popUp = document.getElementById("popUp");
const numbers = document.getElementById("numbers");
const numSum = document.getElementById("numSum");

nameInput.addEventListener("change",checkName);
emailInput.addEventListener("change",checkEmail);
phoneInput.addEventListener("change",checkPhone);

btn.addEventListener("click", function(e) {
    e.preventDefault();
    let checkIsEmpty = nameInput.value != "" && emailInput.value != "" && phoneInput.value != "";
    if(checkIsEmpty === false) {
        alert("Niste popunili sva polja")
    } else {
        let checkRegEx = checkName() == false || checkEmail() == false || checkPhone() == false;
        if(checkRegEx) {
          alert("Niste pravilno popunili polja")
        } else {
          popUp.style.visibility = "visible";

          // $.ajax({
          //   method: "GET",
          //   url: "php/ajax.php",
          //   data: {
          //     nameInput: nameInput.value,
          //     emailInput: emailInput.value,
          //     phoneInput: phoneInput.value
          //   },
          //   success: function(odg) {
          //     alert(odg);
          //   }
          // })     
        }
    }
})

function checkName() {
    const reg1 = /^([A-Za-z\s']{5,35})$/;
  
    if (!reg1.test(nameInput.value)) {
      nameInput.style.border = "3px solid red";
      return false;
    } else {
      nameInput.style.border = "3px solid green";
      return true;
    }
}

function checkEmail() {
    const reg2 = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
  
    if (!reg2.test(emailInput.value)) {
      emailInput.style.border = "3px solid red";
      return false;
    } else {
      emailInput.style.border = "3px solid green";
      return true;
    }
  }

  function checkPhone() {
    const reg3 = /^(\+[0-9]{1,3})\ ([0-9]{7,12})$/;
  
    if (!reg3.test(phoneInput.value)) {
      phoneInput.style.border = "3px solid red";
      return false;
    } else {
      phoneInput.style.border = "3px solid green";
      return true;
    }
  }


let n1 = Math.floor(Math.random() * 6);
let n2 = Math.floor(Math.random() * 6);
let sum = n1 + n2;
let q = n1 + " + " + n2 + " ?";
numbers.textContent = q;

btnCalc.addEventListener("click", ()=> {
  let numSumValue = numSum.value;

  if(numSumValue == sum) {
    $.ajax({
      method: "GET",
      url: "php/ajax.php",
      data: {
        nameInput: nameInput.value,
        emailInput: emailInput.value,
        phoneInput: phoneInput.value
      },
      success: function(odg) {
        alert("Uspešno poslati podaci");
        location.reload();
      }
    })     
  } else {
    alert("netacan unos");
    location.reload();
  }
})


function clearInputs() {
  popUp.style.visibility = "hidden";
  nameInput.style.border = "none";
  phoneInput.style.border = "none";
  emailInput.style.border = "none";
  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
}