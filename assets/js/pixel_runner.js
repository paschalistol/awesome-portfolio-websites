AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/pixel-level.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Pixel Runner</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
  <li>An endless 2D arcade with randomly generated level</li>
    <li>Platform: Android</li>
    <li>Made with Unity and C#</li>
    <li>Also used Blender</li>
    <li>Based on a Game Jam project</li>
    <li>Solo maintained with new/updated code</li>
    <li>Project is under developemnt and more features will be added</li>
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
    cardImage: "assets/images/projects/pixel-gameplay.gif",
    desp: "<li>Player can be in 3 different modes</li><li>One mode is <b>small and slow</b></li><li>One mode is <b>long and fast</b></li><li>One mode is <b>wide and fast</b></li><li>Be fast to avoid the enemies hunting you</li><li>Different kinds of obstacles needing being in different mode</li>",
  },
  {
    title: "Randomly Generated Level",
    cardImage: "assets/images/projects/pixel-level.png",
    desp: "<li>Level randomly is built in X-axis</li><li>Random kind of obstacle is spawn</li><li>Random color for every piece built</li>",
  },
  {
    title: "Pool Manager",
    cardImage: "assets/images/projects/pixel-pool.gif",
    desp:"<li>Custom made pool manager</li><li>Reusable code (based on code from <b>Bowonia</b> and <b>Ice Cold Juice</b>)</li><li>Optimizes for smoother gameplay</li><li>User decides the number of clones that already exist on Awake</li><li>Custom made pool manager</li><li>More clones are created if needed</li>",
  },
  {
    title: "Enemies",
    cardImage: "assets/images/projects/pixel-enemies.gif",
    desp:"<li>The enemies follow the player's exact path</li><li>If enemies touch the player the game ends</li><li>Enemies start with random rotation speed and direction</li>",
  },
  {
    title: "Trail",
    cardImage: "assets/images/projects/pixel-trail.gif",
    desp:"<li>Different trail length depending on player speed</li><li>Special trail colors for power-up speed</li><li>More trails for wide mode</li>",
  },
  {
    title: "Handheld Arcade Feel",
    cardImage: "assets/images/projects/pixel-arcade.png",
    desp:"<li>3D model of a handheld console with sticks</li><li>Screen canvas showing the gameplay taking place in 3D space behind the console</li>",
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

