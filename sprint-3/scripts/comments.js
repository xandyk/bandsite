/* ----- Add Form Here ----- */

let commentsArray= [];

function reloadComments() {
  axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=sandy2")
    .then(response => {
      commentsArray= response.data;

      for (i = 0; i < commentsArray.length; i++) {
        let d = timeStamp(commentsArray[i].timestamp);
        commentsArray[i].date= d;
      }

      fillComments(response.data);
    }); 
}

// create a function for updated time stamp
function timeStamp(seconds) {
  let date = new Date(seconds);

  let m = date.getMonth() + 1;
  let d = date.getDate();
  let y = date.getFullYear();

  return m + "/" + d + "/" + y
}


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
// console.log(form);
form[0].addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

    let convo = {};
    convo.name = submitEvent.target.nameBox.value;
    convo.comment = submitEvent.target.commentBox.value;


    axios.post("https://project-1-api.herokuapp.com/comments?api_key=sandy", {name: convo.name, comment: convo.comment})
    .then(response => {
      console.log("Resp received.")
      // let newComment = response.data;
      // newComment.timestamp
      // d=timeStamp(newComment.timestamp);
      // commentsArray.unshift(newComment);
      createComment(response.data, displayComment)
     // reloadComments();
    });
});
   

// Clear old comments then fill in a new one on top of the old comments //
function clearComments(section){
  let sectionDiv = section.getElementsByTagName('div');
  // console.log(sectionDiv);

  for(let i=sectionDiv.length ; i > 0; i--) {

  section.removeChild(sectionDiv[i -1 ]);
  }
}


function createComment(data, section) {

// create div-container //
let divContainer = document.createElement('div');
divContainer.classList.add('comment-row');

//create button
let button = document.createElement("div");
button.src = ""
button.classList.add('button');


// create <h3> class = name //
let h3name = document.createElement('h3');
h3name.classList.add('comment-name');
h3name.innerText = data.name; // grab data


// create <h3> class = date //
let h3= document.createElement('h3');
h3.classList.add('comment-date');
h3.innerText = timeStamp(data.timestamp);

// create div for headers 
let textHeadingDiv = document.createElement('div');
textHeadingDiv.classList.add('comment-heading');
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
section.insertBefore(divContainer,section.childNodes[0]);
}


function fillComments(data)
{
  for(let i=0; i < data.length; i++) {
    createComment(data[i], displayComment);
  }
}




reloadComments();