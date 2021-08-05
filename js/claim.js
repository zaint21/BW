function show(cpg1, cpg2) {
    document.getElementById(cpg1).style.display = 'block';
    document.getElementById(cpg2).style.display = 'none';
    return false;
  }


  function show(cpg2, cpg3) {
    document.getElementById(cpg2).style.display = 'block';
    document.getElementById(cpg3).style.display = 'none';
    return false;
  }


  function show(cpg3, cpg4) {
    document.getElementById(cpg3).style.display = 'block';
    document.getElementById(cpg4).style.display = 'none';
    return false;
  }


// VALIDATION //

function checkValidation1() {
    firstName = document.getElementById("firstname").value.trim();
    lastName = document.getElementById("lastname").value.trim();
    businessName = document.getElementById("business-name").value.trim();
    policyNumber = document.getElementById("policy-number").value.trim();

     if (firstName != "" && lastName != "" && businessName != "" && policyNumber != "") {
      return show('cpg2','cpg1');
    }
  }

  function checkValidation2() {
    contactPerson = document.getElementById("contact-person").value.trim();
    contactPhone = document.getElementById("contact-phone").value.trim();
    contactEmail = document.getElementById("contact-email").value.trim();

     if (contactPerson != "" && contactPhone.length == 12 || contactPhone.length == 10 && contactEmail != "") {
      document.getElementById("phone-error").innerHTML = "";
      return show('cpg3','cpg2');
    }
    else {
      document.getElementById("phone-error").innerHTML = "Please format your number like this: <br> 123-456-7890 or 1234567890";
      return false;
    }
  }

  function checkValidation3() {
    defaultOption = document.getElementById("defaultpfp-option");
    dateOfLoss = document.getElementById("date-of-loss");

    if (defaultOption.selected == true) {
      document.getElementById("select-error").innerHTML = "Please select one of the given options!"
      return;
    }
    else {
      document.getElementById('claimsform').submit();
      return(true);
    }
  }
