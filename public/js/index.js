let containerEl;
let fetchData;
let folderName;
let spayedNeutered;

if (window.location.pathname === '/dogs') {
  fetchData = '/api/palplace/dogs';
  containerEl = document.getElementById("dogies");
  folderName = 'dogs';
  getData(fetchData);
}
else if (window.location.pathname === '/cats') {
  fetchData = '/api/palplace/cats';
  containerEl = document.getElementById("kitties");
  folderName = 'cats';
  getData(fetchData);
}
else if (window.location.pathname === '/rabbits') {
  fetchData = '/api/palplace/rabbits';
  containerEl = document.getElementById("bunnies");
  folderName = 'rabbits';
  getData(fetchData);
}

function getData(fetchData) {
  fetch(fetchData, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (!response.ok) {
        alert("No pets found!");
      }
      else {
        return response.json()
          .then(function (data) {
            if (data !== null) {
              console.log(data);
              renderCards(data);
            }
          })
      }
    })
}

function renderCards(data) {
  for (i = 0; i < data.length; i++) {
    var petCard = document.createElement("div");
    var petID = document.createAttribute("id");
    var petClass = document.createAttribute("class");
    petID.value = (data[i].id);
    petClass.value = "card petCard pb-4 m-4";
    petCard.setAttributeNode(petID);
    petCard.setAttributeNode(petClass);

    var cardBody = document.createElement("div");
    var cardClass = document.createAttribute("class");
    cardClass.value = "card-body m-1";
    cardBody.setAttributeNode(cardClass);

    var petNameEl = document.createElement("h3");
    var petNameID = document.createAttribute("id");
    var petNameClass = document.createAttribute("class");
    petNameID.value = (data[i].pet_name);
    petNameClass.value = "card-title petName";
    petNameEl.setAttributeNode(petNameID);
    petNameEl.setAttributeNode(petNameClass);
    petNameEl.textContent = (data[i].pet_name);

    var spanTagAge = document.createElement("span");
    var spanTagAgeClass = document.createAttribute("class");
    spanTagAgeClass.value = 'age';
    spanTagAge.setAttributeNode(spanTagAgeClass);
    spanTagAge.textContent = `${data[i].age}` + 'y';

    petNameEl.append(spanTagAge);

    var petImg = document.createElement("img");
    var petImgSrc = document.createAttribute("src");
    var petImgAlt = document.createAttribute("alt");
    var petImgClass = document.createAttribute("class");
    petImgSrc.value = `/images/${folderName}/${data[i].pet_name}.png`;
    petImgAlt.value = `pic of a ${folderName}`;
    petImgClass.value = 'petImg';
    petImg.setAttributeNode(petImgSrc);
    petImg.setAttributeNode(petImgAlt);
    petImg.setAttributeNode(petImgClass);

    var breedEl = document.createElement("h4");
    var breedElClass = document.createAttribute("class");
    breedElClass.value = "card-subtitle mt-2 mb-2 pb-2 border-bottom border-2 breed";
    breedEl.setAttributeNode(breedElClass);
    breedEl.textContent = `${data[i].breed}`;

    var pTagGender = document.createElement("p");
    var pTagGenderClass = document.createAttribute("class");
    pTagGenderClass.value = "card-text";
    pTagGender.setAttributeNode(pTagGenderClass);
    pTagGender.textContent = 'Gender: ';
    var spanTagGender = document.createElement("span");
    spanTagGender.textContent = `${data[i].gender}`;
    pTagGender.append(spanTagGender);

    var pTagColor = document.createElement("p");
    var pTagColorClass = document.createAttribute("class");
    pTagColorClass.value = "card-text";
    pTagColor.setAttributeNode(pTagColorClass);
    pTagColor.textContent = 'Color: ';
    var spanTagColor = document.createElement("span");
    spanTagColor.textContent = `${data[i].color}`;
    pTagColor.append(spanTagColor);

    var pTagSize = document.createElement("p");
    var pTagSizeClass = document.createAttribute("class");
    pTagSizeClass.value = "card-text";
    pTagSize.setAttributeNode(pTagSizeClass);
    pTagSize.textContent = 'Size: ';
    var spanTagSize = document.createElement("span");
    spanTagSize.textContent = `${data[i].size}`;
    pTagSize.append(spanTagSize);

    var pTagWeight = document.createElement("p");
    var pTagWeightClass = document.createAttribute("class");
    pTagWeightClass.value = "card-text";
    pTagWeight.setAttributeNode(pTagWeightClass);
    pTagWeight.textContent = 'Weight: ';
    var spanTagWeight = document.createElement("span");
    spanTagWeight.textContent = `${data[i].weight}`;
    pTagWeight.append(spanTagWeight);

    var pTagSpayedNeutered = document.createElement("p");
    var pTagSpayedNeuteredClass = document.createAttribute("class");
    pTagSpayedNeuteredClass.value = "card-text";
    pTagSpayedNeutered.setAttributeNode(pTagSpayedNeuteredClass);
    pTagSpayedNeutered.textContent = 'Spayed/Neutered: ';
    var spanTagSpayedNeutered = document.createElement("span");

    if (data[i].isSpayedNeutered) {
      spanTagSpayedNeutered.textContent = "Yes!";
    }
    else {
      spanTagSpayedNeutered.textContent = "No!";
    }

    pTagSpayedNeutered.append(spanTagSpayedNeutered);

    cardBody.append(petNameEl);
    cardBody.append(petImg);
    cardBody.append(breedEl);
    cardBody.append(pTagGender);
    cardBody.append(pTagColor);
    cardBody.append(pTagSize);
    cardBody.append(pTagWeight);
    cardBody.append(pTagSpayedNeutered);

    petCard.append(cardBody);
    containerEl.append(petCard);
  }
};

function displayAlert() {
  alert("Thank you! Our team will reach out to you soon :)");
}
