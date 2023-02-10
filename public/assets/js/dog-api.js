const getDogs = () => {
    fetch('/api/palplace/dogs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            const dogEl = document.getElementById("dogies")
            for (i = 0; i < data.length; i++) {
                const newText = document.createElement("p");
                newText.textContent = data[i].animal_name;
                dogEl.append(newText)
            }
        })
}

getDogs()
