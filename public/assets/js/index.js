let dogsList;
const dogsContainer = document.getElementById("dogies");

$(function () {
  getDogs();
})

const getDogs = () => {
  fetch('/api/palplace/dogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(data => {
      console.log(data)
      renderDogsList(data);
    })
}

// Render the list of note titles
const renderDogsList = (data) => {
  for (i = 0; i < data.length; i++) {
    var dogCard = $("<div>");
    dogCard.attr('id', `${data[i].id}`);
    dogCard.addClass("card pb-0");

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    var dogNameEl = $("<h3>");
    dogNameEl.attr('id', `${data[i].pet_name}`);
    dogNameEl.addClass('card-title');
    dogNameEl.text(data[i].pet_name);

    var spanTagAge = $("<span>");
    spanTagAge.attr('id', 'age-' + `${data[i].id}`);
    spanTagAge.addClass('age');
    spanTagAge.text(`${data[i].age}` + 'y');
    dogNameEl.append(spanTagAge);

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

    cardBody.append(dogNameEl);
    cardBody.append(breedEl);
    cardBody.append(pTagGender);
    cardBody.append(pTagColor);
    cardBody.append(pTagSize);
    cardBody.append(pTagWeight);
    cardBody.append(pTagSpayedNeutered);

    dogCard.append(cardBody);
    dogsContainer.append(dogCard);
  }
};
