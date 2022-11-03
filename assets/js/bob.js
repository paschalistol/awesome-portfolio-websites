AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/bob.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Bob the Burgler</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A cartoony game about a sneaky burgler</li>
    <li>Platform: PC</li>
    <li>Made with Unity and C#</li>
    <li>The entire game was made with custom coded physics</li>
    <li>Role in the project: Programmer</li>
  </ul>
  </p>
  
  </div>
    
      `
  projectinfo.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showInfo);

const contributioncards = document.querySelector(".contribution-cards");
const con = [
  {
    title: "Game Description",
    cardImage: "assets/images/projects/bob-gameplay.gif",
    desp: "<li>Physics based game</li><li>Walk and run, jump, throw and sneak into the building</li><li>Follow the mission and steal the valuables</li><li>Avoid the guards and the dogs, disable the security cameras</li>",
  },
  {
    title: "Custom Physics",
    cardImage: "assets/images/projects/bob-physics.gif",
    desp: "<li>Newly coded physics</li><li>Independent of Unity physics and Rigidbodies</li><li>Collision Detection</li><li>Hold items</li><li>Jump and move</li><li>Interact with objects</li><li>Throw objects</li>",
  },
  {
    title: "State Machine & Event System",
    cardImage: "assets/images/projects/bob-states.gif",
    desp: "<li>Individual states for the player and the enemies</li><li>Easy to switch state and have different behaviours</li><li>Event system manager for easier event registration/unregistration</li>",
  },
  {
    title: "Other Programming",
    cardImage: "assets/images/projects/bob-patrol.gif",
    desp: "<li><b><u>Bug Fixing</u></b> throughout the game</li><li>Patrol points for default enemy route</li><li>Typewriter effect</li><li>Sound implementation</li><li>Checkpoints</li><li>Respawn items if irregular use or player death</li><li>Scrapped sliding state where player was sliding on belly in custom physics</li>",
  },
];

const showCards = () => {
  let output = "";
  con.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap""> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <ul>
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  contributioncards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

