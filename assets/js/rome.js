AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/rome.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">All roads lead to Rome</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A prototype quiz game</li>
    <li>Platform PC</li>
    <li>Role in the project was programmer </li>
    <li>Made with Unity and C#</li>
    <li>The player's goal is to answer to questions until they arrive to Rome</li>
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
    title: "Quiz System",
    cardImage: "assets/images/projects/rome-quiz.gif",
    desp: "<li>Easy event system to create many questions</li><li>Correct answer unlocks next step</li><li>Answer buttons are randomized every time</li><li>Written feedback if answer is correnct/wrong</li>",
  },
  {
    title: "Zoom Inside Canvas",
    cardImage: "assets/images/projects/rome-keepinside.gif",
    desp: "<li>When pressing a bubble it zooms towards it</li><li>If bubble close to the canvas edge it stays inside of it</li>",
  },
  {
    title: "Typewriter Effect",
    cardImage: "assets/images/projects/rome-typewriter.gif",
    desp: "<li>User defined type speed</li>",
  },

  {
    title: "Unlocked NPCs",
    cardImage: "assets/images/projects/rome-npc.gif",
    desp: "<li>List of NPCs the player has interacted with</li><li>If clicked the NPC will retell their respective text</li>",
  },
  {
    title: "Lives",
    cardImage: "assets/images/projects/rome-lives.gif",
    desp: "<li>If answer is wrong the player loses a life</li><li>When out of lives the game ends</li>",
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

