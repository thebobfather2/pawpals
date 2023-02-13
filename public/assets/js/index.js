var containerEl;
var spayedNeutered;

$(function () {
  findPath();
})

const findPath = () => {
  if (window.location.pathname === '/pages/dogs.html') {
    let fetchData = '/api/palplace/dogs';
    containerEl = document.getElementById("dogies");
    getData(fetchData);
    return containerEl;
  }
  else if (window.location.pathname === '/pages/cats.html') {
    let fetchData = '/api/palplace/cats';
    containerEl = document.getElementById("kitties");
    getData(fetchData);
    return containerEl;
  }
  else if (window.location.pathname === '/pages/rabbits.html') {
    let fetchData = '/api/palplace/rabbits';
    containerEl = document.getElementById("bunnies");
    getData(fetchData);
    return containerEl;
  }
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
    petClass.value = "card pb-0 m-4 w-50";
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
    petNameClass.value = "card-title";
    petNameEl.setAttributeNode(petNameID);
    petNameEl.setAttributeNode(petNameClass);

    var spanTagAge = document.createElement("span");
    var spanTagAgeID = document.createAttribute("id");
    var spanTagAgeClass = document.createAttribute("class");
    spanTagAgeID.value = 'age-' + `${data[i].id}`;
    spanTagAgeClass.value = 'age';
    spanTagAge.setAttributeNode(spanTagAgeID);
    spanTagAge.setAttributeNode(spanTagAgeClass);
    spanTagAge.textContent = `${data[i].age}` + 'y';

    petNameEl.append(spanTagAge);

    var breedEl = document.createElement("h4");
    var breedElID = document.createAttribute("id");
    var breedElClass = document.createAttribute("class");
    breedElID.value = 'breed-' + `${data[i].id}`;
    breedElClass.value = "card-subtitle mb-2 pb-2 border-bottom border-2";
    breedEl.setAttributeNode(breedElID);
    breedEl.setAttributeNode(breedElClass);
    breedEl.textContent = `${data[i].breed}`;

    var pTagGender = document.createElement("p");
    var pTagGenderClass = document.createAttribute("class");
    pTagGenderClass.value = "card-text";
    pTagGender.setAttributeNode(pTagGenderClass);
    pTagGender.textContent = 'Gender: ';
    var spanTagGender = document.createElement("span");
    var spanTagGenderID = document.createAttribute("id");
    spanTagGenderID.value = 'gender' + `${data[i].id}`;
    spanTagGender.setAttributeNode(spanTagGenderID);
    spanTagGender.textContent = `${data[i].gender}`;
    pTagGender.append(spanTagGender);

    var pTagColor = document.createElement("p");
    var pTagColorClass = document.createAttribute("class");
    pTagColorClass.value = "card-text";
    pTagColor.setAttributeNode(pTagColorClass);
    pTagColor.textContent = 'Color: ';
    var spanTagColor = document.createElement("span");
    var spanTagColorID = document.createAttribute("id");
    spanTagColorID.value = 'color' + `${data[i].id}`;
    spanTagColor.setAttributeNode(spanTagColorID);
    spanTagColor.textContent = `${data[i].color}`;
    pTagColor.append(spanTagColor);

    var pTagSize = document.createElement("p");
    var pTagSizeClass = document.createAttribute("class");
    pTagSizeClass.value = "card-text";
    pTagSize.setAttributeNode(pTagSizeClass);
    pTagSize.textContent = 'Size: ';
    var spanTagSize = document.createElement("span");
    var spanTagSizeID = document.createAttribute("id");
    spanTagSizeID.value = 'size' + `${data[i].id}`;
    spanTagSize.setAttributeNode(spanTagSizeID);
    spanTagSize.textContent = `${data[i].size}`;
    pTagSize.append(spanTagSize);

    var pTagWeight = document.createElement("p");
    var pTagWeightClass = document.createAttribute("class");
    pTagWeightClass.value = "card-text";
    pTagWeight.setAttributeNode(pTagWeightClass);
    pTagWeight.textContent = 'Weight: ';
    var spanTagWeight = document.createElement("span");
    var spanTagWeightID = document.createAttribute("id");
    spanTagWeightID.value = 'weight' + `${data[i].id}`;
    spanTagWeight.setAttributeNode(spanTagWeightID);
    spanTagWeight.textContent = `${data[i].weight}`;
    pTagWeight.append(spanTagWeight);

    var pTagSpayedNeutered = document.createElement("p");
    var pTagSpayedNeuteredClass = document.createAttribute("class");
    pTagSpayedNeuteredClass.value = "card-text";
    pTagSpayedNeutered.setAttributeNode(pTagSpayedNeuteredClass);
    pTagSpayedNeutered.textContent = 'Spayed/Neutered: ';
    var spanTagSpayedNeutered = document.createElement("span");
    var spanTagSpayedNeuteredID = document.createAttribute("id");
    spanTagSpayedNeuteredID.value = 'spayed-neutered' + `${data[i].id}`;
    spanTagSpayedNeutered.setAttributeNode(spanTagSpayedNeuteredID);

    if (data[i].isSpayedNeutered) {
      spanTagSpayedNeutered.textContent = "Yes!";
    }
    else {
      spanTagSpayedNeutered.textContent = "No!";
    }

    pTagSpayedNeutered.append(spanTagSpayedNeutered);

    cardBody.append(petNameEl);
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
