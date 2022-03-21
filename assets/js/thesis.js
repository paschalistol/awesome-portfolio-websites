AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/thesis.png" class="project-img"/>
      
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Bachelor Thesis Game</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>"Gaze tracking as hidden input in local multiplayer games"</li>
    <li>Minigame created for testing our thesis hypothesis</li>
    <li>Platform: PC</li>
    <li>Made with Unity, C# and Tobii Eye tracker</li>
    <li>Thesis yet to be presented</li>
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
    title: "Gameplay",
    cardImage: "assets/images/projects/thesis-gameplay.gif",
    desp: "<li>Local multiplayer game</li><li>One player is the attacker and the other is the goalkeeper</li><li>Practice where players' targets are visible</li><li>After both players attacked by aiming with the controller, they will aim with the eye tracker</li>",
  },
  {
    title: "Tobii Support",
    cardImage: "assets/images/projects/thesis-tobii.gif",
    desp: "<li>Support for Tobii eye tracker</li>",
  },
  {
    title: "Multiple Controllers",
    cardImage: "assets/images/projects/thesis-controllers.gif",
    desp: `<li>Support for several controllers at the same time</li><li>Software used: <a href="https://ryochan7.github.io/ds4windows-site/" target="_blank">DS4Windows</a></li>`,
  },
  {
    title: "Unity's New Input System",
    cardImage: "assets/images/projects/thesis-input.png",
    desp: "<li>Support for different kinds of controllers</li><li>Easy change of mapping to attacking/defensive controls</li>",
  },
  {
    title: "Players",
    cardImage: "assets/images/projects/thesis-grid.gif",
    desp: "<li><b>Ball</b> and <b>Goalkeeper</b> change color depending on player</li><li>Targets snap to a grid</li>",
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

