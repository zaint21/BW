// -- DRIVER AND VEHICLE AUTOMATION -- //
function dynamicVehicleAnimations() {
    var sliderVehicleRange = document.getElementById("numberofVehiclesRange");
    var vehicleNumberValue = document.getElementById("vehicles-value");
    vehicleNumberValue.innerHTML = sliderVehicleRange.value;
    
    // VEHICLE IMAGES //
    vehicleImg1 = document.getElementById("vehicleImgOne");
    vehicleImg2 = document.getElementById("vehicleImgTwo");
    vehicleImg3 = document.getElementById("vehicleImgThree");
    vehicleImg4 = document.getElementById("vehicleImgFour");
    vehicleImg5 = document.getElementById("vehicleImgFive");
    vehicleImg6 = document.getElementById("vehicleImgSix");
    
    if(sliderVehicleRange.value == "1") {
        vehicleNumberValue.innerHTML = "1 vehicle";
        vehicleImg1.style.display = "inline";
        vehicleImg2.style.display = "none";
        vehicleImg3.style.display = "none";
        vehicleImg4.style.display = "none";
        vehicleImg5.style.display = "none";
        vehicleImg6.style.display = "none";
        return;
      }
      if(sliderVehicleRange.value == "2") {
        vehicleNumberValue.innerHTML = "2 vehicles";
        vehicleImg1.style.display = "inline";
        vehicleImg2.style.display = "inline";
        vehicleImg3.style.display = "none";
        vehicleImg4.style.display = "none";
        vehicleImg5.style.display = "none";
        vehicleImg6.style.display = "none";
        return;
      }
      if(sliderVehicleRange.value == "3") {
        vehicleNumberValue.innerHTML = "3 vehicles";
        vehicleImg1.style.display = "inline";
        vehicleImg2.style.display = "inline";
        vehicleImg3.style.display = "inline";
        vehicleImg4.style.display = "none";
        vehicleImg5.style.display = "none";
        vehicleImg6.style.display = "none";
        return;
      }
      if(sliderVehicleRange.value == "4") {
        vehicleNumberValue.innerHTML = "4 vehicles";
        vehicleImg1.style.display = "inline";
        vehicleImg2.style.display = "inline";
        vehicleImg3.style.display = "inline";
        vehicleImg4.style.display = "inline";
        vehicleImg5.style.display = "none";
        vehicleImg6.style.display = "none";
        return;
      }
      if(sliderVehicleRange.value == "5") {
        vehicleNumberValue.innerHTML = "5 vehicles";
        vehicleImg1.style.display = "inline";
        vehicleImg2.style.display = "inline";
        vehicleImg3.style.display = "inline";
        vehicleImg4.style.display = "inline";
        vehicleImg5.style.display = "inline";
        vehicleImg6.style.display = "none";
        return;
      }
      if(sliderVehicleRange.value == "6") {
        vehicleNumberValue.innerHTML = "More than 5 vehicles";
        vehicleImg1.style.display = "inline";
        vehicleImg2.style.display = "inline";
        vehicleImg3.style.display = "inline";
        vehicleImg4.style.display = "inline";
        vehicleImg5.style.display = "inline";
        vehicleImg6.style.display = "inline";
        return;
      }
}

// -- DRIVER AND VEHICLE AUTOMATION -- //
function dynamicDriverAnimations() {
    var sliderDriverRange = document.getElementById("numberofDriversRange");
    var driverNumberValue = document.getElementById("drivers-value");
    driverNumberValue.innerHTML = sliderDriverRange.value;
    
    // VEHICLE IMAGES //
    driverImg1 = document.getElementById("driverImgOne");
    driverImg2 = document.getElementById("driverImgTwo");
    driverImg3 = document.getElementById("driverImgThree");
    drvierImg4 = document.getElementById("driverImgFour");
    driverImg5 = document.getElementById("driverImgFive");
    driverImg6 = document.getElementById("driverImgSix");
    
    if(sliderDriverRange.value == "1") {
        driverNumberValue.innerHTML = "1 driver";
        driverImg1.style.display = "inline";
        driverImg2.style.display = "none";
        driverImg3.style.display = "none";
        drvierImg4.style.display = "none";
        driverImg5.style.display = "none";
        driverImg6.style.display = "none";
        return;
      }
      if(sliderDriverRange.value == "2") {
        driverNumberValue.innerHTML = "2 drivers";
        driverImg1.style.display = "inline";
        driverImg2.style.display = "inline";
        driverImg3.style.display = "none";
        drvierImg4.style.display = "none";
        driverImg5.style.display = "none";
        driverImg6.style.display = "none";
        return;
      }
      if(sliderDriverRange.value == "3") {
        driverNumberValue.innerHTML = "3 drivers";
        driverImg1.style.display = "inline";
        driverImg2.style.display = "inline";
        driverImg3.style.display = "inline";
        drvierImg4.style.display = "none";
        driverImg5.style.display = "none";
        driverImg6.style.display = "none";
        return;
      }
      if(sliderDriverRange.value == "4") {
        driverNumberValue.innerHTML = "4 drivers";
        driverImg1.style.display = "inline";
        driverImg2.style.display = "inline";
        driverImg3.style.display = "inline";
        drvierImg4.style.display = "inline";
        driverImg5.style.display = "none";
        driverImg6.style.display = "none";
        return;
      }
      if(sliderDriverRange.value == "5") {
        driverNumberValue.innerHTML = "5 drivers";
        driverImg1.style.display = "inline";
        driverImg2.style.display = "inline";
        driverImg3.style.display = "inline";
        drvierImg4.style.display = "inline";
        driverImg5.style.display = "inline";
        driverImg6.style.display = "none";
        return;
      }
      if(sliderDriverRange.value == "6") {
        driverNumberValue.innerHTML = "More than 5 drivers";
        driverImg1.style.display = "inline";
        driverImg2.style.display = "inline";
        driverImg3.style.display = "inline";
        drvierImg4.style.display = "inline";
        driverImg5.style.display = "inline";
        driverImg6.style.display = "inline";
        return;
      }
    }

// -- DRIVER LICENSE AUTOFILL -- //

  // D0728-42108-11006 (16 chars) // 
  // Char 10 + 12 = Year //
  // Char 13 + 14 = Month //
  // Char 15 + 16 = Day //

function fetchDriverOneLicense() {
  licenseNumberOne = document.getElementById("driverOne-license").value;
  var getYearSubStringOne = licenseNumberOne.charAt(10) + licenseNumberOne.charAt(12);
  var getMonthSubStringOne = licenseNumberOne.charAt(13) + licenseNumberOne.charAt(14);
  var getDaySubStringOne = licenseNumberOne.charAt(15) + licenseNumberOne.charAt(16);
  var isMale = true;
  var is2000s = true;

  if (licenseNumberOne.charAt(10) >= 0 && licenseNumberOne.charAt(10) <= 2) {
    is2000s = true;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 0 AND 2 (THEN DISPLAY 2000s)
  }
  else if (licenseNumberOne.charAt(10) >= 3 && licenseNumberOne.charAt(10) <= 9) {
    is2000s = false;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 3 AND 9 (THEN DISPLAY 1900s)
  }
  // FETCH THE GENDER //
  if (getMonthSubStringOne >= 1 && getMonthSubStringOne <= 12) {
    isMale = true;
  }
  else if (getMonthSubStringOne >= 51 && getMonthSubStringOne <= 62) {
    isMale = false;
  }

  // ---- POPULATE DATE PICKER ----- //
  if (is2000s == true && isMale == true) {   // MALE BORN IN THE 2000s //
    document.getElementById("driverOne-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverOne-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == true) {   // MALE BORN IN THE 1900s //
    document.getElementById("driverOne-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverOne-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == true && isMale == false) {   // FEMALE BORN IN THE 2000s //
    document.getElementById("driverOne-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverOne-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == false) {   // FEMALE BORN IN THE 1900s //
    document.getElementById("driverOne-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverOne-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }
}

function fetchDriverTwoLicense() {
  licenseNumberTwo = document.getElementById("driverTwo-license").value;
  var getYearSubStringOne = licenseNumberTwo.charAt(10) + licenseNumberTwo.charAt(12);
  var getMonthSubStringOne = licenseNumberTwo.charAt(13) + licenseNumberTwo.charAt(14);
  var getDaySubStringOne = licenseNumberTwo.charAt(15) + licenseNumberTwo.charAt(16);
  var isMale = true;
  var is2000s = true;

  if (licenseNumberTwo.charAt(10) >= 0 && licenseNumberTwo.charAt(10) <= 2) {
    is2000s = true;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 0 AND 2 (THEN DISPLAY 2000s)
  }
  else if (licenseNumberTwo.charAt(10) >= 3 && licenseNumberTwo.charAt(10) <= 9) {
    is2000s = false;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 3 AND 9 (THEN DISPLAY 1900s)
  }
  // FETCH THE GENDER //
  if (getMonthSubStringOne >= 1 && getMonthSubStringOne <= 12) {
    isMale = true;
  }
  else if (getMonthSubStringOne >= 51 && getMonthSubStringOne <= 62) {
    isMale = false;
  }

  // ---- POPULATE DATE PICKER ----- //
  if (is2000s == true && isMale == true) {   // MALE BORN IN THE 2000s //
    document.getElementById("driverTwo-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverTwo-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == true) {   // MALE BORN IN THE 1900s //
    document.getElementById("driverTwo-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverTwo-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == true && isMale == false) {   // FEMALE BORN IN THE 2000s //
    document.getElementById("driverTwo-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverTwo-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == false) {   // FEMALE BORN IN THE 1900s //
    document.getElementById("driverTwo-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverTwo-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }
}

function fetchDriverThreeLicense() {
  licenseNumberThree = document.getElementById("driverThree-license").value;
  var getYearSubStringOne = licenseNumberThree.charAt(10) + licenseNumberThree.charAt(12);
  var getMonthSubStringOne = licenseNumberThree.charAt(13) + licenseNumberThree.charAt(14);
  var getDaySubStringOne = licenseNumberThree.charAt(15) + licenseNumberThree.charAt(16);
  var isMale = true;
  var is2000s = true;

  if (licenseNumberThree.charAt(10) >= 0 && licenseNumberThree.charAt(10) <= 2) {
    is2000s = true;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 0 AND 2 (THEN DISPLAY 2000s)
  }
  else if (licenseNumberThree.charAt(10) >= 3 && licenseNumberThree.charAt(10) <= 9) {
    is2000s = false;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 3 AND 9 (THEN DISPLAY 1900s)
  }
  // FETCH THE GENDER //
  if (getMonthSubStringOne >= 1 && getMonthSubStringOne <= 12) {
    isMale = true;
  }
  else if (getMonthSubStringOne >= 51 && getMonthSubStringOne <= 62) {
    isMale = false;
  }

  // ---- POPULATE DATE PICKER ----- //
  if (is2000s == true && isMale == true) {   // MALE BORN IN THE 2000s //
    document.getElementById("driverThree-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverThree-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == true) {   // MALE BORN IN THE 1900s //
    document.getElementById("driverThree-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverThree-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == true && isMale == false) {   // FEMALE BORN IN THE 2000s //
    document.getElementById("driverOne-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverOne-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == false) {   // FEMALE BORN IN THE 1900s //
    document.getElementById("driverThree-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverThree-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }
}

function fetchDriverFourLicense() {
  licenseNumberFour = document.getElementById("driverFour-license").value;
  var getYearSubStringOne = licenseNumberFour.charAt(10) + licenseNumberFour.charAt(12);
  var getMonthSubStringOne = licenseNumberFour.charAt(13) + licenseNumberFour.charAt(14);
  var getDaySubStringOne = licenseNumberFour.charAt(15) + licenseNumberFour.charAt(16);
  var isMale = true;
  var is2000s = true;

  if (licenseNumberFour.charAt(10) >= 0 && licenseNumberFour.charAt(10) <= 2) {
    is2000s = true;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 0 AND 2 (THEN DISPLAY 2000s)
  }
  else if (licenseNumberFour.charAt(10) >= 3 && licenseNumberFour.charAt(10) <= 9) {
    is2000s = false;   // IF THE FIRST NUMBER OF THE YEAR IS BETWEEN 3 AND 9 (THEN DISPLAY 1900s)
  }
  // FETCH THE GENDER //
  if (getMonthSubStringOne >= 1 && getMonthSubStringOne <= 12) {
    isMale = true;
  }
  else if (getMonthSubStringOne >= 51 && getMonthSubStringOne <= 62) {
    isMale = false;
  }

  // ---- POPULATE DATE PICKER ----- //
  if (is2000s == true && isMale == true) {   // MALE BORN IN THE 2000s //
    document.getElementById("driverFour-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverFour-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == true) {   // MALE BORN IN THE 1900s //
    document.getElementById("driverFour-gender").selectedIndex = 1; // INDEX 1 - MALE
    document.getElementById("driverFour-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == true && isMale == false) {   // FEMALE BORN IN THE 2000s //
    document.getElementById("driverFour-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverFour-date").value = "20" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }

  if (is2000s == false && isMale == false) {   // FEMALE BORN IN THE 1900s //
    document.getElementById("driverFour-gender").selectedIndex = 2; // INDEX 2 - FEMALE
    document.getElementById("driverFour-date").value = "19" + 
    getYearSubStringOne + "-" + getMonthSubStringOne - 50 + "-" + getDaySubStringOne;
    return;
  }
}

// -- NHTSA VIN VEHICLE THREE API -- //
function useVinVehicleOneApi() {
    vinOne = document.getElementById("driverOne-vin").value;

    makeOne = document.getElementById("driverOne-make");
    yearOne = document.getElementById("driverOne-year");
    modelOne = document.getElementById("driverOne-model");

    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vinOne + '?format=json')
      .then(
        function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
            }
       // Format the response data.
        response.json().then(function (data) {
          let info = {
            year: data.Results[9].Value,
            make: data.Results[6].Value,
            model: data.Results[8].Value,
          };
        console.log(info);
        yearOne.value = info.year;
        makeOne.value = info.make;
        modelOne.value = info.model;

        if (yearOne.value != "" && makeOne.value != "" && modelOne.value != "") {
          document.getElementById("driverOne-make").disabled = false;
          document.getElementById("driverOne-year").disabled = false;
          document.getElementById("driverOne-model").disabled = false;
        }
        else {
          document.getElementById("driverOne-make").disabled = true;
          document.getElementById("driverOne-year").disabled = true;
          document.getElementById("driverOne-model").disabled = true;
        }
        })
      })
    }
    
  // -- NHTSA VIN VEHICLE TWO API -- //
  function useVinVehicleTwoApi() {
      vinTwo = document.getElementById("driverTwo-vin").value;
  
      makeTwo = document.getElementById("driverTwo-make");
      yearTwo = document.getElementById("driverTwo-year");
      modelTwo = document.getElementById("driverTwo-model");
  
      fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vinTwo + '?format=json')
        .then(
          function (response) {
          if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' + response.status);
              return;
              }
         // Format the response data.
          response.json().then(function (data) {
            let info = {
              year: data.Results[9].Value,
              make: data.Results[6].Value,
              model: data.Results[8].Value,
            };
          console.log(info);
          yearTwo.value = info.year;
          makeTwo.value = info.make;
          modelTwo.value = info.model;
  
          if (yearTwo.value != "" && makeTwo.value != "" && modelTwo.value != "") {
            document.getElementById("driverTwo-make").disabled = false;
            document.getElementById("driverTwo-year").disabled = false;
            document.getElementById("driverTwo-model").disabled = false;
          }
          else {
            document.getElementById("driverTwo-make").disabled = true;
            document.getElementById("driverTwo-year").disabled = true;
            document.getElementById("driverTwo-model").disabled = true;
          }
          })
        })
      }
      
  // -- NHTSA VIN VEHICLE THREE API -- //
  function useVinVehicleThreeApi() {
    vinThree = document.getElementById("driverThree-vin").value;

    makeThree = document.getElementById("driverThree-make");
    yearThree = document.getElementById("driverThree-year");
    modelThree = document.getElementById("driverThree-model");

    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vinThree + '?format=json')
      .then(
        function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
            }
       // Format the response data.
        response.json().then(function (data) {
          let info = {
            year: data.Results[9].Value,
            make: data.Results[6].Value,
            model: data.Results[8].Value,
          };
        console.log(info);
        yearThree.value = info.year;
        makeThree.value = info.make;
        modelThree.value = info.model;

        if (yearThree.value != "" && makeThree.value != "" && modelThree.value != "") {
          document.getElementById("driverThree-make").disabled = false;
          document.getElementById("driverThree-year").disabled = false;
          document.getElementById("driverThree-model").disabled = false;
        }
        else {
          document.getElementById("driverThree-make").disabled = true;
          document.getElementById("driverThree-year").disabled = true;
          document.getElementById("driverThree-model").disabled = true;
        }
        })
      })
    } 

  // -- NHTSA VIN VEHICLE FOUR API -- //
  function useVinVehicleFourApi() {
    vinFour = document.getElementById("driverFour-vin").value;

    makeFour = document.getElementById("driverFour-make");
    yearFour = document.getElementById("driverFour-year");
    modelFour = document.getElementById("driverFour-model");

    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vinFour + '?format=json')
      .then(
        function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
            }
       // Format the response data.
        response.json().then(function (data) {
          let info = {
            year: data.Results[9].Value,
            make: data.Results[6].Value,
            model: data.Results[8].Value,
          };
        console.log(info);
        yearFour.value = info.year;
        makeFour.value = info.make;
        modelFour.value = info.model;

        if (yearFour.value != "" && makeFour.value != "" && modelFour.value != "") {
          document.getElementById("driverFour-make").disabled = false;
          document.getElementById("driverFour-year").disabled = false;
          document.getElementById("driverFour-model").disabled = false;
        }
        else {
          document.getElementById("driverFour-make").disabled = true;
          document.getElementById("driverFour-year").disabled = true;
          document.getElementById("driverFour-model").disabled = true;
        }
        })
      })
    } 

    // -- POPULATE PRIMARY DRIVER FIELDS -- //
  function populatePrimaryDrivers() {
  driverNameOne = document.getElementById("driverOne-name").value;
  driverNameTwo = document.getElementById("driverTwo-name").value;
  driverNameThree = document.getElementById("driverThree-name").value;
  driverNameFour = document.getElementById("driverFour-name").value;
    if (driverNameOne != "" && driverNameTwo == "" && driverNameThree == "" && driverNameFour == "")
    {
     var newDriversOne = document.createElement('option');
     newDriversOne.innerHTML = driverNameOne;

     document.getElementById("primaryDriverList1").appendChild(newDriversOne);
     return;
    }

    if (driverNameOne != "" && driverNameTwo != "" && driverNameThree == "" && driverNameFour == "")
    {
     var newDriversOne = document.createElement('option');
     var newDriversTwo = document.createElement('option');

     newDriversOne.innerHTML = driverNameOne;
     newDriversTwo.innerHTML = driverNameTwo;

     document.getElementById("primaryDriverList1").appendChild(newDriversOne);
     document.getElementById("primaryDriverList1").appendChild(newDriversTwo);
    }

    if (driverNameOne != "" && driverNameTwo != "" && driverNameThree != "" && driverNameFour == "")
    {
     var newDriversOne = document.createElement('option');
     var newDriversTwo = document.createElement('option');
     var newDriversThree = document.createElement('option');

     newDriversOne.innerHTML = driverNameOne;
     newDriversTwo.innerHTML = driverNameTwo;
     newDriversThree.innerHTML = driverNameThree;

     document.getElementById("primaryDriverList1").appendChild(newDriversOne);
     document.getElementById("primaryDriverList1").appendChild(newDriversTwo);
     document.getElementById("primaryDriverList1").appendChild(newDriversThree);
    }

    if (driverNameOne != "" && driverNameTwo != "" && driverNameThree != "" && driverNameFour != "")
    {
     var newDriversOne = document.createElement('option');
     var newDriversTwo = document.createElement('option');
     var newDriversThree = document.createElement('option');
     var newDriversFour = document.createElement('option');

     newDriversOne.innerHTML = driverNameOne;
     newDriversTwo.innerHTML = driverNameTwo;
     newDriversThree.innerHTML = driverNameThree;
     newDriversFour.innerHTML = driverNameFour;

     document.getElementById("primaryDriverList1").appendChild(newDriversOne);
     document.getElementById("primaryDriverList1").appendChild(newDriversTwo);
     document.getElementById("primaryDriverList1").appendChild(newDriversThree);
     document.getElementById("primaryDriverList1").appendChild(newDriversFour);
    }
}

