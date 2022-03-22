AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/knight.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Knight's Quest</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A 2D platformer with 2 levels</li>
    <li>Platform: PC</li>
    <li>Made with Unity and C#</li>
    <li>My first Unity project</li>    
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
    cardImage: "assets/images/projects/knight-gameplay.gif",
    desp: "<li>Save the princess</li><li>Collect the keys to open the gate</li><li>Kill the evil spiders</li><li>Avoid the obstacles</li>",
  },
  {
    title: "Enemies",
    cardImage: "assets/images/projects/knight-spider.gif",
    desp:"<li>Detect player proximity and attack</li><li>Have own health</li><li>Make damage to player</li><li>Limits to move inside of</li><li>Be aggresive if player is near</li><li>Pushback when attacked by player</li>",
  },
  {
    title: "Controls",
    cardImage: "assets/images/projects/knight-controls.gif",
    desp: "<li>Move character</li><li>Double jump</li><li>Attack with sword</li>",
  },
  {
    title: "Animations",
    cardImage: "assets/images/projects/knight-animations.gif",
    desp:"<li>Fade in/out scene</li><li>The series can be sorted by name, rating or total airtime</li><li>Ability to show series of a minimum rating and above</li>",
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

