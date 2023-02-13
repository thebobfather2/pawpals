var containerEl;

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
    console.log(data[i].pet_name);
    var petCard = $("<div>");
    petCard.attr('id', `${data[i].id}`);
    petCard.addClass("card pb-0");

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    var petNameEl = $("<h3>");
    petNameEl.attr('id', `${data[i].pet_name}`);
    petNameEl.addClass('card-title');
    petNameEl.text(data[i].pet_name);

    var spanTagAge = $("<span>");
    spanTagAge.attr('id', 'age-' + `${data[i].id}`);
    spanTagAge.addClass('age');
    spanTagAge.text(`${data[i].age}` + 'y');
    petNameEl.append(spanTagAge);

    var breedEl = $("<h4>");
    breedEl.attr('id', 'breed-' + `${data[i].id}`);
    breedEl.addClass("card-subtitle mb-2 pb-2 border-bottom border-2");
    breedEl.text(data[i].breed);

    var pTagGender = $("<p>");
    pTagGender.addClass("card-text");
    pTagGender.text('Gender: ');
    var spanTagGender = $("<span>");
    spanTagGender.attr('id', 'gender' + `${data[i].id}`);
    spanTagGender.text(data[i].gender);
    pTagGender.append(spanTagGender);

    var pTagColor = $("<p>");
    pTagColor.addClass("card-text");
    pTagColor.text('Color: ');
    var spanTagColor = $("<span>");
    spanTagColor.attr('id', 'color' + `${data[i].id}`);
    spanTagColor.text(data[i].color);
    pTagColor.append(spanTagColor);

    var pTagSize = $("<p>");
    pTagSize.addClass("card-text mt-2");
    pTagSize.text('Size: ');
    var spanTagSize = $("<span>");
    spanTagSize.attr('id', 'size-' + `${data[i].id}`);
    spanTagSize.text(data[i].size);
    pTagSize.append(spanTagSize);

    var pTagWeight = $("<p>");
    pTagWeight.addClass("card-text");
    pTagWeight.text('Weight: ');
    var spanTagWeight = $("<span>");
    spanTagWeight.attr('id', 'weight-' + `${data[i].id}`);
    spanTagSize.text(data[i].weight);
    pTagWeight.append(spanTagWeight)

    var pTagSpayedNeutered = $("<p>");
    pTagSpayedNeutered.addClass("card-text");
    pTagSpayedNeutered.text('Spayed/Neutered: ');
    var spanTagSpayedNeutered = $("<span>");
    spanTagSpayedNeutered.attr('id', 'spayed-neutered' + `${data[i].id}`);
    spanTagSize.text(data[i].isSpayedNeutered);
    pTagSpayedNeutered.append(spanTagSpayedNeutered)

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
