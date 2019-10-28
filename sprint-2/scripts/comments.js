/* ----- Add Form Here ----- */

const comments = [
  { name: 'Micheal Lyons', date: '12/18/2018', comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'},

  { name: 'Gary Wong', date: '12/12/2018', comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'},

  { name: 'Theodore Duncan', date: '11/15/2018', comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'}
];


const displayComment = document.getElementById('display-comments');

/* ----- Add Event Here ----- */

function validateData(event) {
  let name = event.target.name.value;
  let comment = event.target.comment.value;
  
  return (
    !!name && !!comment
  );
}

const form = document.getElementsByClassName("convo__form");
console.log(form);
form[0].addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

    let convo = {};
    convo.name = submitEvent.target.nameBox.value;
    convo.date = "2019";
    convo.comment = submitEvent.target.commentBox.value;
    comments.unshift(convo);

    console.log(comments);

    clearComments(displayComment);
    fillComments(comments);
});

// Clear old comments then fill in a new one on top of the old comments //
function clearComments(section){
  let sectionDiv = section.getElementsByTagName('div');
  console.log(sectionDiv);

  for(let i=sectionDiv.length ; i > 0; i--) {

  section.removeChild(sectionDiv[i -1 ]);
  }
}


function createComment(data,section) {

// create div-container //
let divContainer = document.createElement('div');
divContainer.classList.add('comment-row');

//create button
let button = document.createElement('button');
button.classList.add('button');


// create <h3> class = name //
let h3name = document.createElement('h3');
h3name.classList.add('name');
h3name.innerText = data.name; // grab data


// create <h3> class = date //
let h3= document.createElement('h3');
h3.classList.add('date');
h3.innerText = data.date;


// create div for headers 
let textHeadingDiv = document.createElement('div');
textHeadingDiv.classList.add('textHeading');
textHeadingDiv.appendChild(h3name);
textHeadingDiv.appendChild(h3);



// create <p> class = comment //
let p = document.createElement('p');
p.classname = 'comment';
p.innerText = data.comment;
divContainer.appendChild(p);


  //create a div for main content
  let mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('mainContentDiv');
  mainContentDiv.appendChild(textHeadingDiv);
  mainContentDiv.appendChild(p);
  divContainer.appendChild(button);
  divContainer.appendChild(mainContentDiv);
  
 

  
  section.appendChild(divContainer);
 
}

function fillComments(data)
{
  for(let i=0; i < data.length; i++) {
    createComment(data[i], displayComment);
  }
}

fillComments(comments);