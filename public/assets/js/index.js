let dogsList;
const dogsContainer = document.getElementsByClassName("dogsPlace");

const getDogs = () =>
  fetch('/api/palplace/dogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// Render the list of note titles
const renderDogsList = async (dogs) => {
  let dogsDb = await dogs.json();
  if (window.location.pathname === '/dogs') {
    dogsList.forEach((el) => (el.innerHTML = ''));
  }

  let dogsListItems = [];

  // Returns HTML element
  if (dogsDb.length === 0) {
    dogsListItems.push(createLi('All dogs found a home!', false));
  }

  dogsDb.forEach((dog) => {
    var dogCard = $("<div>");
    dogCard.attr('id', `${dog}`);
    dogCard.addClass("card pb-0");

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    var dogNameEl = $("<h3>");
    dogNameEl.attr('id', data.pet_name);
    dogNameEl.addClass('card-title');
    dogNameEl.html(data.pet_name);


    var spanTagAge = $("<span>");
    spanTagAge.attr('id', 'age-' + `${dog}`);
    spanTagAge.addClass('age');
    spanTagAge.html(`${data.age}` + 'y');
    dogNameEl.append(spanTagAge);

    var breedEl = $("<h4>");
    breedEl.attr('id', 'breed-' + `${dog}`);
    breedEl.addClass("card-subtitle mb-2 pb-2 border-bottom border-2");
    breedEl.html(data.breed);

    var pTagGender = $("<p>");
    pTagGender.addClass("card-text");
    pTagGender.text('Gender: ');
    var spanTagGender = $("<span>");
    spanTagGender.attr('id', 'gender' + `${dog}`);
    spanTagGender.html(data.gender);
    pTagGender.append(spanTagGender);

    var pTagColor = $("<p>");
    pTagColor.addClass("card-text");
    pTagColor.text('Color: ');
    var spanTagColor = $("<span>");
    spanTagColor.attr('id', 'color' + `${dog}`);
    spanTagColor.html(data.color);
    pTagColor.append(spanTagColor);

    var pTagSize = $("<p>");
    pTagSize.addClass("card-text mt-2");
    pTagSize.text('Size: ');
    var spanTagSize = $("<span>");
    spanTagSize.attr('id', 'size-' + `${dog}`);
    spanTagSize.html(data.size);
    pTagSize.append(spanTagSize);

    var pTagWeight = $("<p>");
    pTagWeight.addClass("card-text");
    pTagWeight.text('Weight: ');
    var spanTagWeight = $("<span>");
    spanTagWeight.attr('id', 'weight-' + `${dog}`);
    spanTagSize.html(data.weight);
    pTagWeight.append(spanTagWeight)

    var pTagSpayedNeutered = $("<p>");
    pTagSpayedNeutered.addClass("card-text");
    pTagSpayedNeutered.text('Spayed/Neutered: ');
    var spanTagSpayedNeutered = $("<span>");
    spanTagSpayedNeutered.attr('id', 'spayed-neutered' + `${dog}`);
    spanTagSize.html(data.isSpayedNeutered);
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
  })

  if (window.location.pathname === '/dogs') {
    dogsListItems.forEach((dog) => dogsList[0].append(dog));
  }
};

// Gets notes from the db and renders them to the sidebar
const getandRenderDogs = () => getDogs().then(response => response.json()).then(renderDogsList(data));


getandRenderDogs();