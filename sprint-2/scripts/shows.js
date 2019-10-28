// ----- Tablet & Desktop ----- //

let showInfo = [
    { date: "Mon Dec 17 2018", venue: "Ronald Lane", location: 'San Franciso, CA' },
    { date: "Tue Jul 18 2019", venue: "Pier 3 East", location: 'San Franciso, CA' },
    { date: "Fri Jul 22 2019", venue: "View Loungue", location: 'San Franciso, CA' },
    { date: "Sat Aug 12 2019", venue: "Hyatt Agency", location: 'San Franciso, CA' },
    { date: "Fri Sep 05 2019", venue: "Moscow Center", location: 'San Franciso, CA' },
    { date: "Wed Aug 11 2019", venue: "Press Club", location: 'San Franciso, CA' },
];
 
function tableMobile(table, showInfo) {
 let rowTop = table.insertRow();
 rowTop.classList.add("shows__tablet-top");

 let cellTop = rowTop.insertCell();
 let textTop = document.createTextNode("DATE");
 cellTop.appendChild(textTop);

 cellTop.classList.add("shows__tablet-head-date");
 //create cell inside the row
 let cellTopSec = rowTop.insertCell();

 // create a text node to a cell
 let textTopSec = document.createTextNode("VENUE");

// append text to cell
 cellTopSec.appendChild(textTopSec);
 cellTopSec.classList.add("shows__tablet-head-venue");

 let cellTopThird = rowTop.insertCell();
 let textTopThird = document.createTextNode("LOCATION");
 cellTopThird.appendChild(textTopThird);
 cellTopThird.classList.add("shows__tablet-head-location");


 

 for (show of showInfo) {
   let row = table.insertRow();
   row.classList.add("shows-table");

   for (key in show) {
     let cell = row.insertCell();
     cell.classList.add("shows__mobile-table-title");


     let cellTwo = row.insertCell();
     cellTwo.classList.add("shows__mobile-table-value");

     let text = document.createTextNode(key);
     let textTwo = document.createTextNode(show[key]);
     cell.appendChild(text);
     cellTwo.appendChild(textTwo);
   }

   // button
   let cell = row.insertCell();
   cell.classList.add("shows__mobile-button");
   let text = document.createTextNode("BUY TICKETS");
   cell.appendChild(text);
 }
}

let table = document.querySelector("table");

tableMobile(table, showInfo);






































// function declaration
// function createTable(show, shows) {
//     for (let show of shows) {
//         let row = table.insertRow();
        
//         for (key in show) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(show[key]);
//             cell.appendChild(text);
//         }
        
//         let cell = row.insertCell();
//         let button = document.createElement('button');
//         cell.appendChild(button);
//         button.textContent = 'BUY TICKETS';
//     }
// }

// function createTableHead(table, shows) {
//     let tHead = table.createTHead();
//     let row = tHead.insertRow();
    
//     for (let show of shows) {
//         let th = document.createElement('th');
//         let text = document.createTextNode(show);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// let table = document.querySelector('table');
// console.log(table);
// let showKeys = Object.keys(shows[0]);

// createTable(table, shows);
// createTableHead(table, showKeys);

// ----- Media Query: Mobile ----- //





























// function createMobileTable(show, shows) {

//     for (let show of shows) {
        
//         for (key in show) {
//             let row = table.insertRow();
//             row.classname = 'mobile__row';

//             let cell = row.insertCell();
//             cell.classname = 'mobile__cell';

//             let text = document.createTextNode(key.toUpperCase());
//             let node = document.createElement('h4');
//             node.classname = 'mobile__row-heading';

//             node.appendChild(text);
//             cell.appendChild(node);

//             let textData = document.createTextNode(show[key]);
//             let nodeData = document.createElement('h4');
//             nodeData.className = 'mobile__cell-data';
//             nodeData.appendChild(textData);
//             cell.appendChild(node);
//         } 
//         CreateButton();
//     }

    


//     if (table.matches) { // If media query matches
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }

// var x = window.matchMedia("(max-width: 767px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes