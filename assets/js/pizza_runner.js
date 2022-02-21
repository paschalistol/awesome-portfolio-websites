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
    <li>Bowonia is a survival fast-paced RPG with cartoony style</li>
    <li>Made with Unity and C#</li>
    <li>Part of an exhibition at the Swedish National Museum of Science and Technology</li>
    <li>Roles in the project were Lead Developer, Programmer and UX Designer</li>
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
    cardImage: "assets/images/projects/pizza-gameplay.gif",
    desp: "<li>End level to get a star</li><li>Finish without dying to get an extra star</li><li>Collect all special ingredients to get an extra star</li>",
  },
  {
    title: "Controls",
    cardImage: "assets/images/projects/pizza-swipe.gif",
    desp: "<li>Custom code to swipe up/down in order to jump/slide</li><li>Player moves right/left based on user input</li>",
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

