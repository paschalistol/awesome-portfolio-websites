AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/pizza.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Pizza Runner</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A cartoony runner prototype about a pizza baker</li>
    <li>Platform: Android</li>
    <li>Made with Unity and C#</li>
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
    cardImage: "assets/images/projects/pizza-gameplay.gif",
    desp: "<li>End level to get a star</li><li>Finish without dying to get an extra star</li><li>Collect all special ingredients to get an extra star</li>",
  },
  {
    title: "Controls",
    cardImage: "assets/images/projects/pizza-swipe.gif",
    desp: "<li>Custom code to swipe up/down in order to jump/slide</li><li>Player moves right/left based on user input</li>",
  },
  {
    title: "Main Programming",
    cardImage: "assets/images/projects/pizza-special.png",
    desp:"<li>Special ingredients gathering implemented</li><li>Death check for extra star implemented</li><li>Unlocked levels check</li><li>Remaining lives check</li>",
  },
  {
    title: "Animations",
    cardImage: "assets/images/projects/pizza-animations.gif",
    desp:"<li>Star animations at the end of the level</li><li>Main menu animations</li>",
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

