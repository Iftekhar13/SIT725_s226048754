// List of game cards (like slide’s kittens)
const gameList = [
  {
    title: "Valorant",
    image: "images/Game1.png",
    link: "Play Valorant",
    description: "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
  },
  {
    title: "FC26",
    image: "images/Game2.png",
    link: "Play FC26",
    description: "The Club is Yours. Play EA SPORTS FC™ 26 now, with an overhauled gameplay experience powered by community feedback, Manager Live Challenges that bring fresh scenarios to the new season, and Archetypes inspired by greats of the game."
  },
  {
    title: "Forza Horizon 5",
    image: "images/Game3.png",
    link: "Play Forza",
    description: "Your Ultimate Horizon Adventure awaits! Explore the ever-evolving open world landscapes of Mexico with limitless driving action in hundreds of the world’s greatest cars"
  }
];

// Function for the Click Me button
const clickMe = () => {
  alert("Thanks for visiting! Have fun playing!");
};

// Function for modal form submission
const submitForm = () => {
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.email = $('#email').val();
  console.log("Form Data Submitted: ", formData);
};

// Function to dynamically add cards
const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = `
      <div class="col s4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(itemToAppend);
  });
};

// Document ready
$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#clickMeButton').click(()=>{ clickMe(); });
  $('#formSubmit').click(()=>{ submitForm(); });
  addCards(gameList);
});