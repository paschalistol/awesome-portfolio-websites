AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/stack-mania.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Stack Mania</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A clone of the arcade game <i>Stack</i></li>
    <li>Platform: Android</li>
    <li>Made with Unity and C#</li>
    <li>Solo developed</li>
    <li>Fast track developed in 2 days</li>
    <li>Released on <a href="https://play.google.com/store/apps/details?id=com.PhobTroll.StackMania" target="_blank">Play Store</a></li>
    <li><a href="https://github.com/paschalistol/Stack-Mania" target="_blank">Source Code</a></li>
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
    cardImage: "assets/images/projects/stack-mania-gameplay.gif",
    desp: "<li>Stack blocks as high as possible</li><li>Random color for every block</li><li>Excess parts of blocks are cut off</li><li>Particles when perfectly stacked</li>",
  },
  {
    title: "Google AdMob",
    cardImage: "assets/images/projects/stack-mania-admob.gif",
    desp: "<li>Monetizes the app</li><li>Simple banner not visible during gameplay</li>",
  },
  {
    title: "Audio Mixer",
    cardImage: "assets/images/projects/stack-mania-audio.gif",
    desp: "<li>Different mixer groups for music and effects</li><li>Uninterrupted music on level reload</li><li>Sound controls in main menu to mute Music/FX</li>",
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

