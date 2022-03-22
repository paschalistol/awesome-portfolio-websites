AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/icecold.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Ice Cold Juice</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>An arcade game based on the popular <i>Ice Cold Beer</i></li>
    <li>Platform: Android</li>
    <li>Made with Unity and C#</li>
    <li>Also used Blender, Photoshop and Audacity</li>
    <li>Solo developed</li>
    <li>Released on <a href="https://play.google.com/store/apps/details?id=com.PhobTroll.coldbeer" target="_blank">Play Store</a></li>
    <li><a href="https://github.com/paschalistol/IceCold" target="_blank">Source Code</a></li>
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
    cardImage: "assets/images/projects/icecold-gameplay.gif",
    desp: "<li>2 modes, classic and survival</li><li>Classic arcade sticks</li><li>Realistic animations and game start/end</li><li>Gravity based ball movement</li>",
  },
  {
    title: "Pool Manager",
    cardImage: "assets/images/projects/icecold-pool.gif",
    desp: "<li>Custom made pool manager</li><li>Reusable code (based on code from <b>Bowonia</b>)</li><li>Optimizes for smoother gameplay</li><li>User decides the number of clones that already exist on Awake</li><li>More clones are created if needed</li>",
  },
  {
    title: "Google Play Services",
    cardImage: "assets/images/projects/icecold-google2.gif",
    desp: "<li>Usage of Google Play Services</li><li>2 leaderboards, 1 for each mode</li><li>11 different achievements</li>",
  },
  {
    title: "Randomly Generated Level",
    cardImage: "assets/images/projects/icecold-rgl.jpg",
    desp:"<li>Randomly generated level in runtime</li><li>Makes use of my pool manager for better optimization</li><li>Random offset on both axes for the holes when put</li><li>Randomly put items and power-ons</li>",
  },
  {
    title: "2 Different Modes",
    cardImage: "assets/images/projects/icecold-modes.gif",
    desp: "<li>Classic mode based on Ice Cold Beer</li><li>Survival mode, an endless level for endless fun</li><li>Adjusted mechanics for each mode</li>",
  },
  {
    title: "Animations",
    cardImage: "assets/images/projects/icecold-animation.gif",
    desp: "<li>Coded in-game animations for ball falling into hole and resetting bar</li><li>Unity Animator for theme manager and minileds around arcade screen</li>",
  },
  {
    title: "Unity Ads",
    cardImage: "assets/images/projects/icecold-ads.gif",
    desp: "<li>Monetizes the app</li><li>Rewards player with extra lives if watched successfully</li>",
  },
  {
    title: "Audio Mixer",
    cardImage: "assets/images/projects/icecold-audio.gif",
    desp: "<li>Different mixer groups for music and effects</li><li>Uninterrupted music on level reload</li><li>Snapshots for fade in/out</li><li>Exposed parameters and in-game sliders</li>",
  },
  {
    title: "Adaptive Screen",
    cardImage: "assets/images/projects/icecold-adaptive.gif",
    desp: "<li>Game adapting to all aspect ratios</li><li>Option to make screen panel bigger</li>",
  },
  {
    title: "3D Objects",
    cardImage: "assets/images/projects/icecold-3d.gif",
    desp: "<li>Made in Blender</li><li>Different objects for easier usage</li><li>Minimum number of object parts for easier material management</li>",
  },
  {
    title: "Custom Shaders",
    cardImage: "assets/images/projects/icecold-shader.gif",
    desp: "<li>Custom shaders to make 2D and 3D objects only visible in certain areas</li><li>One shader for the objects</li><li>One shader for the masked region that allows visibility</li>",
  },
  {
    title: "Theme Manager",
    cardImage: "assets/images/projects/icecold-themes.gif",
    desp: "<li>Easy to use theme manager</li><li>More than 10 unique combinations of colors and backgrounds*</li><li>Visual feedback of selected, locked and available themes</li><br>*The background images are part of an asset pack but edited by me",
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

