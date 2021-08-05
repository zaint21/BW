// RANDOMIZE FORM BOTS ON RELOAD //
randomNumber = Math.floor(Math.random() * 3) + 1;
window.onload = function () {
  if (randomNumber == 1) {

    var icon, name, info;
    var i;

    icon = document.querySelectorAll(".form-icon-1");
    for (i = 0; i < icon.length; i++) {
      icon[i].style.display = "inline";
    }

    name = document.querySelectorAll(".form-profile-name");
    for (i = 0; i < name.length; i++) {
      name[i].innerHTML = "Herb";
    }

    info = document.querySelectorAll(".form-profile-info");
    for (i = 0; i < info.length; i++) {
      info[i].innerHTML = "P: 416-477-9771 E: herb@myboardwalk.ca";
    }

    document.getElementsByClassName("form-title")[0].innerHTML = "Hello, I'm Herb. <br> Let's get started on your insurance quote?";
  }

  if (randomNumber == 2) {

    icon = document.querySelectorAll(".form-icon-2");
    for (i = 0; i < icon.length; i++) {
      icon[i].style.display = "inline";
    }

    name = document.querySelectorAll(".form-profile-name");
    for (i = 0; i < name.length; i++) {
      name[i].innerHTML = "Herb";
    }

    info = document.querySelectorAll(".form-profile-info");
    for (i = 0; i < info.length; i++) {
      info[i].innerHTML = "P: 416-477-9771 E: herb@myboardwalk.ca";
    }
    document.getElementsByClassName("form-title")[0].innerHTML = "Hi, I'm Herb. <br> Let's get started on your insurance quote?";
  }

  if (randomNumber == 3) {

    icon = document.querySelectorAll(".form-icon-3");
    for (i = 0; i < icon.length; i++) {
      icon[i].style.display = "inline";
    }

    name = document.querySelectorAll(".form-profile-name");
    for (i = 0; i < name.length; i++) {
      name[i].innerHTML = "Herb";
    }

    info = document.querySelectorAll(".form-profile-info");
    for (i = 0; i < info.length; i++) {
      info[i].innerHTML = "P: 416-477-9771 E: herb@myboardwalk.ca";
    }
    document.getElementsByClassName("form-title")[0].innerHTML = "Hello, I'm Herb. <br> How about we find you a great quote together?";
  }
}

// -- MOVE USER TO THE TOP OF THE PAGE -- //
function positionToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --------------- CHECK VALIDATION ------------- //

// LET SUBMIT BUTTON SEND THE FORM //
function Validator(){
     window.onbeforeunload = null;
     document.getElementById('myform').submit();
     return(true);
}

// ----- WARN USER THAT CHANGES WILL NOT BE SAVED ----//
function changesNotSaved() {
  window.onbeforeunload = function() {
     return 'Are you sure you want to leave? Your changes will not be saved';
  }
}

function confirmSubmitForm() {
  if (confirm('Are you sure you want to submit the application now? If so, we will contact you shortly after we recieve your submission.')) {
    Validator();
  } else {
    return;
  }
}

function checkValidation2() {
  businessName = document.getElementById("businessname").value.trim();
  csRadioOne = document.getElementById("csoption1");
  csRadioTwo = document.getElementById("csoption2");
  csRadioThree = document.getElementById("csoption3");

  if (businessName != "" && (csRadioOne.checked == true || csRadioTwo.checked == true || csRadioThree.checked == true)) {
    document.getElementById("csradio-error").innerHTML = "";
  
    positionToTop();
    return show('fpg3','fpg2');
  }
  else {
    document.getElementById("csradio-error").innerHTML = "Please enter your business name and <br> select one of the available options!";
    return false;
  }
}

function checkValidation3() {
  firstName = document.getElementById("firstname").value.trim();
  lastName = document.getElementById("lastname").value.trim();
  email = document.getElementById("email").value.trim();
  phone = document.getElementById("phone").value.trim();
  formPageThree = document.getElementById("fpg3");

   if (firstName != "" && lastName != "" && email != "" && phone.length == 10 || phone.length == 12) {
    document.getElementById("phone-error").innerHTML = "";
    formPageThree.style.height = "700px";
    positionToTop();
    return show('fpg4','fpg3');
  }
  else {
    formPageThree.style.height = "780px";
    document.getElementById("phone-error").innerHTML = "Please format your number like this: <br> 123-456-7890 or 1234567890";
    return false;
  }
}

function checkValidation4() {
  address = document.getElementById("address-input").value.trim();
  city = document.getElementById("city-input").value.trim();
  cbAddress = document.getElementById("cb-address");
  pgPageFour = document.getElementById("progressBarPageFour");

   if (address != "" && city != "")
     {
        if(cbAddress.checked == true) {
          positionToTop();
          return show('fpg6','fpg4');
        }
       else {
         positionToTop();
         return show('fpg5', 'fpg4');
       }
  }
}

function checkValidation5() {
  address = document.getElementById("maddress-input").value.trim();
  city = document.getElementById("mcity-input").value.trim();

   if (address != "" && city != "")
    {
        positionToTop();
        return show('fpg6','fpg5');
    }
  }

function checkValidation6() {
  radioOne = document.getElementById("radio-1");
  radioTwo = document.getElementById("radio-2");
  radioThree = document.getElementById("radio-3");
  radioFour = document.getElementById("radio-4");
  formPageSix = document.getElementById("fpg6");

  if (radioOne.checked == true || radioTwo.checked == true || radioThree.checked == true || radioFour.checked)
  {
    document.getElementById("radio-alert-one").innerHTML = "";
    formPageSix.style.height = "650px";
    positionToTop();
    myBusinessInfoAnimation(); // Progress Bar Animation //
    return show('fpg7','fpg6');
  }
  else {
    document.getElementById("radio-alert-one").innerHTML = "Please select one of the options before continuing!";
    formPageSix.style.height = "700px";
    return false;
  }
}

// ------------------------------ MY BUSINESS INFO ------------------------------ //

function checkValidation7() {
  radioFive = document.getElementById("radio-5");
  radioSix = document.getElementById("radio-6");
  formPageSeven = document.getElementById("fpg7");

  if(radioFive.checked == true || radioSix.checked == true) {
    formPageSeven.style.height = "650px";
    document.getElementById("radio-alert-one").innerHTML = "";
    positionToTop();
    return show('fpg8','fpg7');
  }

  else {
    formPageEight.style.height = "700px";
    document.getElementById("radio-alert-one").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}

function checkValidation8() {
  radioSeven = document.getElementById("radio-7");
  radioEight = document.getElementById("radio-8");
  formPageEight = document.getElementById("fpg8");

  if(radioSeven.checked == true || radioEight.checked == true) {
    formPageEight.style.height = "650px";
    document.getElementById("radio-alert-two").innerHTML = "";
    positionToTop();
    return show('fpg9','fpg8');
  }

  else {
    formPageEight.style.height = "700px";
    document.getElementById("radio-alert-two").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}

function checkValidation9() {
  radioNine = document.getElementById("radio-9");
  radioTen = document.getElementById("radio-10");
  formPageNine = document.getElementById("fpg9");

  if(radioNine.checked == true || radioTen.checked == true) {
    formPageEight.style.height = "650px";
    document.getElementById("radio-alert-three").innerHTML = "";
    positionToTop();
    return show('fpg10','fpg9');
  }

  else {
    formPageEight.style.height = "700px";
    document.getElementById("radio-alert-three").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}

function checkValidation10() {
  radioEleven = document.getElementById("radio-11");
  radioTwelve = document.getElementById("radio-12");
  formPageTen = document.getElementById("fpg10");

  // -- PROGRESS BAR PROGRESSION -- //
  pbPageThree = document.getElementById("progressBarPageThree");
  pbLine = document.getElementById("progressBarDash");
 
  stepCountTwo = document.getElementById("sCountTwo");
  stepCountImageTwo = document.getElementById("sCountImgTwo");

  if(radioEleven.checked == true || radioTwelve.checked == true) {
    formPageTen.style.height = "650px";
    document.getElementById("radio-alert-four").innerHTML = "";
    positionToTop();
    return show('fpg11','fpg10');
  }

  else {
    formPageTen.style.height = "700px";
    document.getElementById("radio-alert-four").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}

/* SKIP VALIDATION 11 (POLICY START DATE) */

function checkValidation12() {
  selectedYear = document.getElementById("businessyear-option");
  return show('fpg13', 'fpg12')
}

function checkValidation13() {
  insCompany = document.getElementById("insurance-company").value;

  if (insCompany != "") {
    positionToTop();
    return show('fpg14', 'fpg13');
  }
    else {
      return false;
  }
}

function checkValidation14() {
  operationValue = document.getElementById("operation").value.trim();

  if (operationValue == "") {
    return false;
  }
  if (operationValue != "") {
    checkRangeNumber();
  }
}

// ---- SHOW OR SKIP RANGE ALLOCATION ---- //
function checkRangeNumber() {
  operationTwo = document.getElementById("operation-2");
  if (operationTwo.value == "") {
    positionToTop();
    return show('fpg16','fpg14');
  }
  else {
    positionToTop();
    return show('fpg15','fpg14');
  }
}

// --- SHOW OR SKIP RANGE ALLOCATION ON BACK BUTTON--- //
function checkRangeNumberBack() {
  operationTwo = document.getElementById("operation-2");
  if (operationTwo.value == "") {
    positionToTop();
    return show('fpg14','fpg16');
  }
  else {
    positionToTop();
    return show('fpg15','fpg16');
  }
}

// --- SHOW OR SKIP MAILING ADDRESS ON BACK BUTTON--- //
function checkAddressBack() {
  if (cbAddress.checked == false) {
    positionToTop();
    return show('fpg5','fpg6');
  }
  else {
    positionToTop();
    return show('fpg4','fpg6');
  }
}

function checkValidation16() {
  
}

function checkValidation17() {
 
}


function checkValidation19() {
  formPage19 = document.getElementById("fpg19");

  if (buildingoption.selected == false
    && roofoption.selected == false
    && storiesoption.selected == false
    && sprinklersoption.selected == false
    && basementoption.selected == false
    && yearbuiltoption.selected == false
    && document.getElementById("sqftbuilding").value != ""
    && alarmoption.selected == false)
    {
      additionalBusinessPropertyRouting(); // Call Routing Function //
      formPage19.style.height = "720px";
    }
    else {
      document.getElementById("premise-alert-one").innerHTML = "Please fill out all fields before continuing!";
      formPage19.style.height = "780px";
    }
}

function checkValidation20() {
  formPage20 = document.getElementById("fpg20");

  if (heatingoption.selected == false
    && heatingupdated.selected == false
    && paneloption.selected == false
    && panelupdated.selected == false
    && wiringoption.selected == false
    && wiringupdated.selected == false
    && plumbingoption.selected == false
    && plumbingupdated.selected == false
    && foundationoption.selected == false
    && foundationupdated.selected == false)
  {
    formPage20.style.height = "800px";
    businessPropertyInfoRoutingOne(); // Call Routing Function // 
    document.getElementById("premise-alert-two").innerHTML = "";
    positionToTop();
  }
  else {
    formPage20.style.height = "850px";
    document.getElementById("premise-alert-two").innerHTML = "Please fill out all fields before continuing!";
  }
}

function checkValidation21() {
  radioThirteen = document.getElementById("radio-13");
  radioFourteen = document.getElementById("radio-14");
  formPageTwentyOne = document.getElementById("fpg21");

  if(radioThirteen.checked == true || radioFourteen.checked == true) {
    formPageTwentyOne.style.height = "650px";
    document.getElementById("radio-alert-five").innerHTML = "";
    positionToTop();
    businessPropertyInfoRoutingTwo();
  }

  else {
    formPageTwentyOne.style.height = "680px";
    document.getElementById("radio-alert-five").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}

function checkValidation27() {
  radioFifteen = document.getElementById("radio-15");
  radioSixteen = document.getElementById("radio-16");
  formPageTwentySeven = document.getElementById("fpg27");

  if(radioFifteen.checked == true || radioSixteen.checked == true) {
    formPageTwentySeven.style.height = "720px";
    document.getElementById("radio-alert-seven").innerHTML = "";
    positionToTop();
    return show('fpg28','fpg27');
  }

  else {
    formPageEight.style.height = "760px";
    document.getElementById("radio-alert-seven").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}

function checkValidation28() {
  radioSeventeen = document.getElementById("radio-17");
  radioEighteen = document.getElementById("radio-18");
  formPageTwentyEight = document.getElementById("fpg28");

  if(radioSeventeen.checked == true || radioEighteen.checked == true) {
    formPageTwentyEight.style.height = "720px";
    document.getElementById("radio-alert-eight").innerHTML = "";
    businessClaimsRouting();
    positionToTop();
  }

  else {
    formPageTwentyEight.style.height = "760px";
    document.getElementById("radio-alert-eight").innerHTML = "Please select one of the options!";
    return; // Show error
  }
}


function checkValidation30() {
  csYes = document.getElementById("creditRadioNo");
  csNo = document.getElementById("creditRadioYes");

  if (csYes.checked == true || csNo.checked == true) {
    finishedPageAnimation();
    return show('fpg31', 'fpg30');
  }
  else {
    return false;
  }
}

// ---------------- OPERATION LOGIC ------------------ //
function addOperation() {
  document.getElementById("operation").style.margin = "5px 10px";
  document.getElementById("operation-2").style.display = "inline";
  document.getElementById("btn-remove-2").style.display = "inline";
  document.getElementById("btn-add").style.display = "none";
  return;
}

function removeOperation2() {
  document.getElementById("operation-2").style.marginBottom = "20px";
  document.getElementById("operation").style.display = "inline";
  document.getElementById("btn-add").style.display = "inline";
  document.getElementById("btn-remove-2").style.display = "none";
  document.getElementById("operation-2").style.display = "none";
  document.getElementById("operation-2").value = "";
  return;
}

// ---------------- RANGE SLIDER FOR OPERATIONS -----------------//
function displayRanges() {
  document.getElementById("pr1-label").innerHTML = document.getElementById("operation").value;

  if (document.getElementById("operation-2").value != "") {
    document.getElementById("r2").style.display = "inline";
    document.getElementById("pr2-label").style.display = "inline";
    document.getElementById("pr2-label").innerHTML = document.getElementById("operation-2").value;
    document.getElementById("s2").style.display = "inline";
  }
 if (document.getElementById("operation-2").value == "") {
    document.getElementById("r2").style.display = "none";
    document.getElementById("pr2-label").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s2").value = "";
  }
}

// --- CHECK HOW MANY OPERATIONS THERE ARE --- //
function operationCases() {
  operationOne = document.getElementById("operation");
  operationTwo = document.getElementById("operation-2");

  rangeValueOne = document.getElementById("s1");
  rangeValueTwo = document.getElementById("s2");

  // CASES FOR SLIDER RANGES //
  if(operationTwo.value == "") {
    document.getElementById("r1").value = "100";
    return;
  }

  if (operationOne.value != "" && operationTwo.value != "") {
    document.getElementById("r1").value = "50";
    document.getElementById("s1").innerHTML = "50";
    document.getElementById("s2").innerHTML = "50";
    document.getElementById("r2").value = "50";
    return;
  }
}

// --- SHOW OR SKIP RADIO BUTTON FOLLOW UP QUESTIONS ON BACK BUTTON--- //
function checkWhyBoardwalkBack() {
  if (radioFour.checked == true) {
    positionToTop()
    return show('fpg6','fpg9');
  }
  else {
    positionToTop();
    return show('fpg8','fpg9');
  }
}

// -------- FORM PAGES --------//
function show(fpg1, fpg2) {
  document.getElementById(fpg1).style.display = 'block';
  document.getElementById(fpg2).style.display = 'none';
  return false;
}

function show(fpg2, fpg3) {
  document.getElementById(fpg2).style.display = 'block';
  document.getElementById(fpg3).style.display = 'none';
  return false;
}

function show(fpg3, fpg4) {
  document.getElementById(fpg3).style.display = 'block';
  document.getElementById(fpg4).style.display = 'none';
  return false;
}
var pw = "bw2021";
function show(fpg4, fpg5) {
  document.getElementById(fpg4).style.display = 'block';
  document.getElementById(fpg5).style.display = 'none';
  return false;
}

function show(fpg5, fpg6) {
  document.getElementById(fpg5).style.display = 'block';
  document.getElementById(fpg6).style.display = 'none';
  return false;
}

function show(fpg6, fpg7) {
  document.getElementById(fpg6).style.display = 'block';
  document.getElementById(fpg7).style.display = 'none';
  return false;
}

function show(fpg7, fpg8) {
  document.getElementById(fpg7).style.display = 'block';
  document.getElementById(fpg8).style.display = 'none';
  return false;
}

function show(fpg8, fpg9) {
  document.getElementById(fpg8).style.display = 'block';
  document.getElementById(fpg9).style.display = 'none';
  return false;
}

function show(fpg9, fpg10) {
  document.getElementById(fpg9).style.display = 'block';
  document.getElementById(fpg10).style.display = 'none';
  return false;
}

function show(fpg10, fpg11) {
  document.getElementById(fpg10).style.display = 'block';
  document.getElementById(fpg11).style.display = 'none';
  return false;
}

function show(fpg11, fpg12) {
  document.getElementById(fpg11).style.display = 'block';
  document.getElementById(fpg12).style.display = 'none';
  return false;
}

function show(fpg12, fpg13) {
  document.getElementById(fpg12).style.display = 'block';
  document.getElementById(fpg13).style.display = 'none';
  return false;
}

function show(fpg13, fpg14) {
  document.getElementById(fpg13).style.display = 'block';
  document.getElementById(fpg14).style.display = 'none';
  return false;
}

function show(fpg14, fpg15) {
  document.getElementById(fpg14).style.display = 'block';
  document.getElementById(fpg15).style.display = 'none';
  return false;
}

function show(fpg15, fpg16) {
  document.getElementById(fpg15).style.display = 'block';
  document.getElementById(fpg16).style.display = 'none';
  return false;
}

function show(fpg16, fpg17) {
  document.getElementById(fpg16).style.display = 'block';
  document.getElementById(fpg17).style.display = 'none';
  return false;
}

function show(fpg17, fpg18) {
  document.getElementById(fpg17).style.display = 'block';
  document.getElementById(fpg18).style.display = 'none';
  return false;
}

function show(fpg18, fpg19) {
  document.getElementById(fpg18).style.display = 'block';
  document.getElementById(fpg19).style.display = 'none';
  return false;
}

function show(fpg19, fpg20) {
  document.getElementById(fpg19).style.display = 'block';
  document.getElementById(fpg20).style.display = 'none';
  return false;
}

function show(fpg20, fpg21) {
  document.getElementById(fpg20).style.display = 'block';
  document.getElementById(fpg21).style.display = 'none';
  return false;
}

function show(fpg21, fpg22) {
  document.getElementById(fpg21).style.display = 'block';
  document.getElementById(fpg22).style.display = 'none';
  return false;
}

function show(fpg22, fpg23) {
  document.getElementById(fpg22).style.display = 'block';
  document.getElementById(fpg23).style.display = 'none';
  return false;
}

function show(fpg23, fpg24) {
  document.getElementById(fpg23).style.display = 'block';
  document.getElementById(fpg24).style.display = 'none';
  return false;
}

function show(fpg24, fpg25) {
  document.getElementById(fpg24).style.display = 'block';
  document.getElementById(fpg25).style.display = 'none';
  return false;
}

function show(fpg25, fpg26) {
  document.getElementById(fpg25).style.display = 'block';
  document.getElementById(fpg26).style.display = 'none';
  return false;
}

function show(fpg26, fpg27) {
  document.getElementById(fpg26).style.display = 'block';
  document.getElementById(fpg27).style.display = 'none';
  return false;
}

function show(fpg27, fpg28) {
  document.getElementById(fpg27).style.display = 'block';
  document.getElementById(fpg28).style.display = 'none';
  return false;
}

function show(fpg28, fpg29) {
  document.getElementById(fpg28).style.display = 'block';
  document.getElementById(fpg29).style.display = 'none';
  return false;
}

function show(fpg29, fpg30) {
  document.getElementById(fpg29).style.display = 'block';
  document.getElementById(fpg30).style.display = 'none';
  return false;
}

function show(fpg30, fpg31) {
  document.getElementById(fpg30).style.display = 'block';
  document.getElementById(fpg31).style.display = 'none';
  return false;
}

// DISPLAYING USER INFO VIA FORM TITLES //
function getName() {
  document.getElementById("form-title-fpg4").innerHTML = "Hi " + document.getElementById("firstname").value.trim() + "! Where do you operate your business from?";
  document.getElementById("form-title-fpg12").innerHTML = "When was " + "<u>" + businessName.split(",")[0] + "</u>" + " started?";
  document.getElementById("form-title-fpg13").innerHTML = "Who are you currently insured with " + document.getElementById("firstname").value.trim() + "?";
  document.getElementById("form-title-fpg17").innerHTML = "What are " + "<u>" + businessName.split(",")[0] + "</u>" + " projected annual revenues?";
  document.getElementById("form-title-fpg27").innerHTML = "Has " + "<u>" + businessName.split(",")[0] + "</u>" + " had any insurance cancellations in the past?";
  document.getElementById("form-title-fpg28").innerHTML = "Has " + "<u>" + businessName.split(",")[0] + "</u>" + " had any claims in the past 5 years?";
  document.getElementById("form-title-fpg31").innerHTML = "Thanks for your time " + document.getElementById("firstname").value + "!";
}

// FINAL MESSAGE //
function displayMessageSubmit() {
  document.getElementById("redirect-title").innerHTML = "Thank you " + document.getElementById("firstname").value.trim() + " for your time.";
}


