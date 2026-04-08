// Function for the Click Me button
const clickMe = () => {
  alert("Thanks for visiting! Have fun playing!");
};

// Function for modal form submission
const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    email: $('#email').val()
  };
  console.log("Form Data Submitted: ", formData);
  alert("Thanks for submitting your info!"); 
};


const addCards = (games) => {
  $("#card-section").empty(); 
  games.forEach(game => {
    const cardHTML = `
      <div class="col s12 m4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${game.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${game.title} <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#" target="_blank">${game.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${game.title} <i class="material-icons right">close</i>
            </span>
            <p>${game.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(cardHTML);
  });
};


const fetchGames = async () => {
  try {
    const response = await fetch('/api/games');
    const result = await response.json();
    if (result.statusCode === 200) {
      addCards(result.data);
    } else {
      console.error("Error fetching games:", result.message);
    }
  } catch (err) {
    console.error("Error fetching games:", err);
  }
};


$(document).ready(function() {
  $('.modal').modal();
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(clickMe);
  $('#formSubmit').click(submitForm);
  fetchGames();  
});