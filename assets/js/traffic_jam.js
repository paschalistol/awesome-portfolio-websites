AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/traffic.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Traffic Jam</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A game engine that is displayed through a game</li>
    <li>Made with C++</li>
    <li>Using <a href="https://www.libsdl.org/" target="_blank">Simple Directmedia Layer</a></li> 
    <li><a href="https://github.com/paschalistol/CPROG_TrafficJam" target="_blank">Source Code</a></li> 
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
    cardImage: "assets/images/projects/traffic-gameplay.png",
    desp: "<li>Player changes lanes and attacks cars by throwing stones</li><li>The cars get deleted when they are hit by stones</li>",
  },
  {
    title: "Object Manager",
    cardImage: "assets/images/projects/traffic-manager.gif",
    desp: "<li>Objects (i.e. cars and stones) are deleted when out of the screen</li>",
  },
  {
    title: "Player Input",
    cardImage: "assets/images/projects/traffic-player.gif",
    desp: "<li>Player moves to different lanes</li><li>Player throws stones to the cars</li>",
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

