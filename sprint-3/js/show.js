const apiKey = '?api_key=0cLaQ2bZ3V9DA35aHiyyZPUOHeA0C5uCAW9eMKEI';
const url = 'http://project-1-api.herokuapp.com/showdates/';

//post the comment to the API
getData = () => {
    axios.get(url + apiKey)
        .then(response => {
            let eventData = response.data;
            eventData.forEach(Element => {
                displayData(Element)
            })
        })
        .catch((error) => {
            console.error(error)
        });
}
getData();

function displayData(response) {
    let eventSelector = document.querySelector('.main__content-table');
    let newDiv = makeEventNode(response);
    eventSelector.appendChild(newDiv);
}

function makeEventNode(event) {
    // add the inner html for the node
    let parentDiv = document.querySelector('.main__content-table-body');
    let html;
    let newHtml;
    html = '<tr class="main__content-table-body__heading"><td class=" main__content-table-body__date main__content-table-body__data" data-label="DATE" >%eventDate-%</td><td class="main__content-table-body__data" data-label="VENUE">%placeName%</td><td class="main__content-table-body__data" data-label="LOCATION">%locationName%</td><td class="main__content-table-body__data"><button class="main__content-table-body__data-button">Buy tickets</button></td></tr>'
    newHtml = html.replace('%eventDate-%', event.date);
    newHtml = newHtml.replace('%placeName%', event.place);
    newHtml = newHtml.replace('%locationName%', event.location);

    parentDiv.innerHTML += newHtml;
    return parentDiv;
}