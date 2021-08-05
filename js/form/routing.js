// ------------------------ LOGIC FOR ROUTING THROUGH APPLICATION ------------------------ //  

// -- SHOW/HIDE BUSINESS PREMISE INFO -- //
function businessPropertyInfoRouting() {
  myBusinessOperationsAnimation();
  // Starting a new venture // 
  radioFourYes = document.getElementById("radio-4"); // TRUE RADIO BUTTON (WHAT BRINGS YOU TO BW)
  // Do you own the building you operate from? //
  radioFiveYes = document.getElementById("radio-5"); // TRUE RADIO BUTTON (A32)
  // Do you store the content at your business location? // 
  radioSevenYes = document.getElementById("radio-7"); // TRUE RADIO BUTTON (A35)
  // Do you bring any contents away from your business location? //
  radioNineYes = document.getElementById("radio-9"); // TRUE RADIO BUTTON (A38)
  // Do you have any business vehicles that would like to insure? //
  radioElevenYes = document.getElementById("radio-11"); // TRUE RADIO BUTTON (A41)

  // --------------- BUSINESS PREMISE INFORMATION #1 --------------- //

  // IF A32 AND A35 IS CHECKED //
  if(radioFiveYes.checked == true && radioSevenYes.checked == true) {
      return show('fpg19','fpg18'); // SHOW BUSINESS PREMISE QUESTION 1 & 2
  }
  // IF A32 IS NOT CHECKED AND A35 IS CHECKED // 
  if (radioFiveYes.checked == false && radioSevenYes.checked == true) {
      return show('fpg19','fpg18'); // SHOW BUSINESS PREMISE QUESTION 1 & 2
  }
  // IF A32 IS CHECKED AND A35 IS NOT CHECKED // 
  if (radioFiveYes.checked == true && radioSevenYes.checked == false) {
    return show('fpg19','fpg18'); // SHOW BUSINESS PREMISE QUESTION 1 & 2
}

  // IF A32, A35, A41 IS NOT CHECKED, A38 IS CHECKED //
  if (radioFiveYes.checked == false && radioSevenYes.checked == false && radioNineYes.checked == true) 
  {
    return show('fpg23','fpg18');
  }

  // IF A32,A35 and A38 IS NOT CHECKED // 
  if (radioFiveYes.checked == false && radioSevenYes.checked == false && radioNineYes.checked == false 
    && radioElevenYes.checked == true)
  {
    myAutoAnimation();
    return show('fpg24','fpg18'); // SKIP BUSINESS PROPERTY INFO SECTION
  }

   // IF A32,A35,A38 and A41 IS NOT CHECKED // 
  if (radioFiveYes.checked == false && radioSevenYes.checked == false 
    && radioNineYes.checked == false && radioElevenYes.checked == false)
  {
    myBusinessPropertyAnimation();
    myAutoAnimation();

    if (radioElevenYes.checked == false) {
      if (radioFourYes.checked == false) {
        return show('fpg27','fpg18');
      }
      if (radioFourYes.checked == true) {
        return show('fpg30','fpg18');
      }
    }
  }
}

// -- SHOW/SKIP FOLLOW-UP BUSINESS PROPERTY INFO -- //
function additionalBusinessPropertyRouting() {
  var maxUpdatedYear = new Date().getFullYear();
  minUpdatedYear = maxUpdatedYear - 25;
  yearBuiltDropdown = document.getElementById('yearBuilt');

  // TO FIX THE ODD POSTIONING ON BIGGER SCREENS //
  buildingSelectFive = document.getElementById('roofType');

  if (yearBuiltDropdown.value <= maxUpdatedYear && yearBuiltDropdown.value >= minUpdatedYear) {
    return show('fpg21', 'fpg19');
      }
  else {
    return show('fpg20', 'fpg19');
  }
}

// -- BUSINESS PREMISE CON'T -- //
function businessPropertyInfoRoutingOne() {
  radioFourYes = document.getElementById("radio-4"); // TRUE RADIO BUTTON (WHAT BRINGS YOU TO BW)
  radioFiveYes = document.getElementById("radio-5"); // TRUE RADIO BUTTON (A32)
  radioSevenYes = document.getElementById("radio-7"); // TRUE RADIO BUTTON (A35)
  radioNineYes = document.getElementById("radio-9"); // TRUE RADIO BUTTON (A38)
  radioElevenYes = document.getElementById("radio-11"); // TRUE RADIO BUTTON (A41)

  // IF A32 IS CHECKED //
  if(radioFiveYes.checked == true) {
    return show('fpg21','fpg20'); // DO YOU NEED YOUR BUILDING COVERED // 
}

// IF A35 IS CHECKED // 
if (radioSevenYes.checked == true) {
    return show('fpg22','fpg20'); // SHOW BUSINESS LOCATION CONTENTS
}

// IF A38 IS CHECKED //
if (radioNineYes.checked == true) 
{
  return show('fpg23','fpg20'); // SHOW BUSINESS ITEMS TO TAKE AWAY CONTENTS
  }
}

// -- DO YOU NEED YOUR BUILDING COVERED? -- //
function businessPropertyInfoRoutingTwo() {
  radioFourYes = document.getElementById("radio-4"); // TRUE RADIO BUTTON (WHAT BRINGS YOU TO BW)
  radioFiveYes = document.getElementById("radio-5"); // TRUE RADIO BUTTON (A32)
  radioSevenYes = document.getElementById("radio-7"); // TRUE RADIO BUTTON (A35)
  radioNineYes = document.getElementById("radio-9"); // TRUE RADIO BUTTON (A38)
  radioElevenYes = document.getElementById("radio-11"); // TRUE RADIO BUTTON (A41)

  // IF A32 AND A35 IS CHECKED //
  if(radioFiveYes.checked == true && radioSevenYes.checked == true) {
    return show('fpg22','fpg21'); // SHOW BUSINESS LOCATION CONTENTS
}

// IF A32 IS NOT CHECKED AND A35 IS CHECKED // 
if (radioFiveYes.checked == false && radioSevenYes.checked == true) {
    return show('fpg22','fpg21'); // SHOW BUSINESS LOCATION CONTENTS
}

// IF A35 IS NOT CHECKED // 
if (radioSevenYes.checked == false && radioNineYes.checked == true) {
  return show('fpg23','fpg21'); // SHOW BUSINESS ITEMS TO TAKE AWAY // 
}

// IF A32,A35,A41 IS NOT CHECKED, A38 IS CHECKED //
if (radioFiveYes.checked == false && radioSevenYes.checked == false && radioNineYes.checked == true 
  && radioElevenYes.checked == false) 
{
  return show('fpg23','fpg21'); // SHOW BUSINESS ITEMS TO TAKE AWAY CONTENTS
}

// IF A32,A35 and A38 IS NOT CHECKED, A41 IS CHECKED // 
if (radioFiveYes.checked == false && radioSevenYes.checked == false && radioNineYes.checked == false 
  && radioElevenYes.checked == true)
{
  myAutoAnimation();
  return show('fpg24','fpg21'); // SKIP BUSINESS PROPERTY INFO SECTION
  }

  else {
      if (radioElevenYes.checked == false) {
        if (radioFourYes.checked == false) {
          return show('fpg27','fpg21');
        }
        if (radioFourYes.checked == true) {
          return show('fpg30','fpg21');
        }
      }
  }
}

// -- BUSINESS LOCATION CONTENTS -- //
function businessPropertyInfoRoutingThree() {
  radioFourYes = document.getElementById("radio-4"); // TRUE RADIO BUTTON (WHAT BRINGS YOU TO BW)
  radioFiveYes = document.getElementById("radio-5"); // TRUE RADIO BUTTON (A32)
  radioSevenYes = document.getElementById("radio-7"); // TRUE RADIO BUTTON (A35)
  radioNineYes = document.getElementById("radio-9"); // TRUE RADIO BUTTON (A38)
  radioElevenYes = document.getElementById("radio-11"); // TRUE RADIO BUTTON (A41)

// IF A32 IS NOT CHECKED AND A35 IS NOT CHECKED, A38 IS CHECKED //
if (radioNineYes.checked == true) 
{
  return show('fpg23','fpg22'); // SHOW BUSINESS ITEMS TO TAKE AWAY
  }
else if (radioNineYes.checked == false && radioElevenYes.checked == true) {
  return show('fpg24','fpg22');
}
else {
  if (radioElevenYes.checked == false) {
    if (radioFourYes.checked == false) {
      return show('fpg27','fpg22');
    }
    if (radioFourYes.checked == true) {
      return show('fpg30','fpg22');
    }
  }
}
}

// -- BUSINESS LOCATION CONTENTS -- //
function businessPropertyInfoRoutingFour() {
  radioFourYes = document.getElementById("radio-4"); // TRUE RADIO BUTTON (WHAT BRINGS YOU TO BW)
  radioFiveYes = document.getElementById("radio-5"); // TRUE RADIO BUTTON (A32)
  radioSevenYes = document.getElementById("radio-7"); // TRUE RADIO BUTTON (A35)
  radioNineYes = document.getElementById("radio-9"); // TRUE RADIO BUTTON (A38)
  radioElevenYes = document.getElementById("radio-11"); // TRUE RADIO BUTTON (A41)
 

  // A41 IS CHECKED // 
if (radioElevenYes.checked == true)
{
  myAutoAnimation();
  return show('fpg24','fpg23'); // SHOW AUTO SECTION
  }

if (radioElevenYes.checked == false) {
  if (radioFourYes.checked == false) {
    return show('fpg27','fpg23');
  }
  if (radioFourYes.checked == true) {
    return show('fpg30','fpg23');
  }
}
}

function insuranceHistoryRouting() {
  radioFourYes = document.getElementById("radio-4"); // TRUE RADIO BUTTON (WHAT BRINGS YOU TO BW)
    if (radioFourYes.checked == false) {
      return show('fpg27','fpg26');
    }
    if (radioFourYes.checked == true) {
      creditCheckAnimation();
      return show('fpg30','fpg26');
    }
/*  radioFour = document.getElementById("radio-4"); // STARTING A NEW VENTURE
  vinOne = document.getElementById("driverOne-vin");
  vinTwo = document.getElementById("driverTwo-vin");
  vinThree = document.getElementById("driverThree-vin");
  vinFour = document.getElementById("driverFour-vin");
  vehicleNumber = document.getElementById("numberofVehiclesRange");

  window.alert('yes')
  if(vehicleNumber.value == "1") {
    if(vinOne != "") {
      if (radioFour.checked == true) {
        return show('fpg30','fpg26'); // SKIP INSURANCE HISTORY SECTION // 
      }
      if (radioFour.checked == false) {
        return show('fpg27','fpg26'); // SHOW INSURANCE HISTORY SECTION // 
      }
    }
    if (vinOne == "") {
      window.alert("Please fill out the VIN number for Vehicle #1")
      return;
    }
  }

  if(vehicleNumber.value == "2") {
    if(vinOne != "" && vinTwo !="") {
      if (radioFour.checked == true) {
        return show('fpg30','fpg26'); // SKIP INSURANCE HISTORY SECTION // 
      }
      if (radioFour.checked == false) {
        return show('fpg27','fpg26'); // SHOW INSURANCE HISTORY SECTION // 
      }
    }
    else {
      window.alert("Please fill out the VIN number for Vehicle #1 and Vehicle #2")
      return;
    }
  }

  if(vehicleNumber.value == "3") {
    if(vinOne != "" && vinTwo !="" && vinThree !="") {
      if (radioFour.checked == true) {
        return show('fpg30','fpg26'); // SKIP INSURANCE HISTORY SECTION // 
      }
      if (radioFour.checked == false) {
        return show('fpg27','fpg26'); // SHOW INSURANCE HISTORY SECTION // 
      }
    }
    else {
      window.alert("Please fill out the VIN number for Vehicle #1, Vehicle #2 and Vehicle #3")
      return;
    }
  }

  if(vehicleNumber.value == "4") {
    if(vinOne != "" && vinTwo !="" && vinThree !="" && vinFour !="") {
      if (radioFour.checked == true) {
        return show('fpg30','fpg26'); // SKIP INSURANCE HISTORY SECTION // 
      }
      if (radioFour.checked == false) {
        return show('fpg27','fpg26'); // SHOW INSURANCE HISTORY SECTION // 
      }
    }
    else {
      window.alert("Please fill out the VIN number for all 4 vehicles!")
      return;
    }
  } */
}

function businessClaimsRouting() {
  var claimsSlider = document.getElementById("numberofClaimsRange");

  // SAYS YES TO CLAIMS BUT INPUTS 0 CLAIMS
  if (claimsSlider.value == 0) {
    return show('fpg30','fpg28'); // Show follow-up questions
  }
  // IF THERE ARE LESS THAN 3 CLAIMS //
  if (claimsSlider.value <= 3) {
    return show('fpg29','fpg28'); // Show follow-up questions
  }
  // IF THERE ARE MORE THAN 3 CLAIMS //
 if (claimsSlider.value >= 4) {
    return show('fpg30','fpg28');
  }
}
