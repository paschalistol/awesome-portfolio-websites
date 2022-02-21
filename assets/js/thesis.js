AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/bachelor.png" class="project-img"/>
      
    
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
    <li>A game created for the testing of our thesis hypothesis</li>
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
    title: "",
    cardImage: "",
    desp: "<li></li>",
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

