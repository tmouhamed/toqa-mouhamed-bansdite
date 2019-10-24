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
}
getData();

function displayData(response) {
    let eventSelector = document.querySelector('.main__content');
    let newDiv = makeEventNode(response);
    eventSelector.appendChild(newDiv);
}

function makeEventNode(event) {
    // add the inner html for the node
    let parentDiv = document.querySelector('.main__content-section');
    let html;
    let newHtml;
    if(event.id == '0'){
        html = '<div class="main__content-cards"><div class="main__content-cards-div"><h4 class="main__content-cards-title">DATE</h4><p class="main__content-cards-text">%eventDate-%</p></div><div class="main__content-cards-div"><h4 class="main__content-cards-title">VENUE</h4><p>%placeName%</p></div><div class="main__content-cards-div"><h4 class="main__content-cards-title">LOCATION</h4><p>%locationName%</p></div><button class="main__content-cards-button">Buy tickets</button></div>'
        newHtml = html.replace('%eventDate-%', event.date);
        newHtml = newHtml.replace('%placeName%', event.place);
        newHtml = newHtml.replace('%locationName%', event.location);
    }
    else {
        html = '<div class="main__content-cards"><div class="main__content-cards-div"><h4 class="main__content-cards-title hidden-title">DATE</h4><p class="main__content-cards-text">%eventDate-%</p></div><div class="main__content-cards-div"><h4 class="main__content-cards-title hidden-title">VENUE</h4><p>%placeName%</p></div><div class="main__content-cards-div"><h4 class="main__content-cards-title hidden-title">LOCATION</h4><p>%locationName%</p></div><button class="main__content-cards-button">Buy tickets</button></div>'
        newHtml = html.replace('%eventDate-%', event.date);
        newHtml = newHtml.replace('%placeName%', event.place);
        newHtml = newHtml.replace('%locationName%', event.location);
    }
    parentDiv.innerHTML += newHtml;
    return parentDiv;
}