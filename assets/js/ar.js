AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="assets/images/experience-page/pt.jpg" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Nod to the Node</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>Made for a Game Jam where theme word was <b>"NOD"</b></li>
    <li>Made with Unity, C# and AR Core</li>
    <li>Solo developed</li>
    <li><b>Nod</b> also meaning <b>node</b> in Swedish</li>
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
    title: "AR Core",
    cardImage: "",
    desp: "<li>Face recognition using AR Core</li><li>Detects face parts such as the nose to use for head movement recognition</li>",
  },
  {
    title: "Head Movement Recognition",
    cardImage: "",
    desp: "<li>Custom code to recognize head movement and nodding</li>",
  },
  {
    title: "Gameplay",
    cardImage: "",
    desp:"<li>Connect nodes by nodding</li><li>Recreate the shape to the right represented with black and yellow lines</li><li>Connects the blue node to the node on the underside in the middle</li>",
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

