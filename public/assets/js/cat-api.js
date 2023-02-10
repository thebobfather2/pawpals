const getCats = () => {
    fetch('/api/palplace/cats', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            const dogEl = document.getElementById("kitties")
            for (i = 0; i < data.length; i++) {
                const newText = document.createElement("p");
                newText.textContent = data[i].animal_name;
                dogEl.append(newText)
            }
        })
}

getCats()
