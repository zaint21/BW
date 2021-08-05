// --- BUSINESS AUTOCOMPLETE SEARCH -- //
let autocomplete;
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("businessname"),
    {
      types: ['establishment'],
      componentRestrictions: {'country': ['CA']},
      fields: ['place_id', 'geometry', 'name']
    });
    /* ADD LISTENER TO COMMUNICATE WITH AUTOFILL API */
    autocomplete.addListener('place_changed', onPlaceChanged);
  }

  // ---- BUSINESS AUTOFILED FUNCTION ---- //
  function onPlaceChanged() {
    var place = autocomplete.getPlace();
    businessName = document.getElementById("businessname").value;

    /* IF USER ENTERS BUSINESS NAME WITHOUT AUTOFILL */
    if (!place.geometry) {
      document.getElementById("businessname").placeholder = "Enter a place";

    /* ELSE PULL AUTOFILLED DATA */ 
    } else {
      // AUTOFILL LOCATION ADDRESS + CITY //
      document.getElementById("address-input").value = businessName.split(",")[1].trim();
      document.getElementById("city-input").value = businessName.split(',').slice(2).join(',').trim();
    }
  }