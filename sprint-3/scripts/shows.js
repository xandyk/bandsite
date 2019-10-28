let showInfo = [];

axios
  .get("https://project-1-api.herokuapp.com/showdates?api_key=sandy")
  .then(response => {
    showInfo = response.data;
    createDivMobile(showInfo);
  })


// create Div for mobile size // 
function createDivMobile (showsInfo) {

// select .shows__table from HTML //
  const showsContainer = document.querySelector('.shows__table');

// For tablet and desktop
  let header = document.createElement('div');
  header.classList.add('header-tablet');
  showsContainer.appendChild(header);

  let date = document.createElement('h1');
  header.appendChild(date);
  date.innerText = 'DATES';

  let venue = document.createElement('h1');
  header.appendChild(venue);
  venue.innerText = 'VENUE';

  let location = document.createElement('h1');
  header.appendChild(location);
  location.innerText = 'LOCATION';


  for(let i = 0; i < showsInfo.length; i++) {

    // add a div to the existing .shows__table 
    let infoDiv= document.createElement('div');
        infoDiv.classList.add('shows__info');
        showsContainer.appendChild(infoDiv); 

    // date key & value are container's childrean now
    let dateKey = document.createElement('h1');
        dateKey.classList.add('date-key');
        infoDiv.appendChild(dateKey);
        dateKey.innerText = "Date";
   
    let dateValue = document.createElement('h1');
    dateValue.classList.add('date-value');
    infoDiv.appendChild(dateValue);
    dateValue.innerText = showsInfo[i].date;
      
    // Venue key and value
    let venueKey = document.createElement('h1');
    venueKey.classList.add('venue-key');
    infoDiv.appendChild(venueKey);
    venueKey.innerText = "Venue";

    let venueValue = document.createElement('h1');
    venueValue.classList.add('venue-value');
    infoDiv.appendChild(venueValue);
    venueValue.innerText = showsInfo[i].place;

    // Location key and value
    let locationKey = document.createElement('h1');
    locationKey.classList.add('location-key');
    infoDiv.appendChild(locationKey);
    locationKey.innerText = "Location";


    let locationValue = document.createElement('h1');
    locationValue.classList.add('location-value');
    infoDiv.appendChild(locationValue);
    locationValue.innerText = showsInfo[i].location;

    // create buy tickets button
    let buyTickets = document.createElement('button');
    buyTickets.classList.add('tickets-button');
    infoDiv.appendChild(buyTickets);
    buyTickets.innerText = "BUY TICKETS";
  }



}

// createDivMobile(showInfo);