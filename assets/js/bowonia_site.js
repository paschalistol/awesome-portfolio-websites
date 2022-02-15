AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/bowonia-site.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Bowonia</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>This is a promotional website about the game Bowonia that I was part of creating</li>
    <li>Made with HTML, CSS and Javascript</li>
    <li><a href="https://github.com/paschalistol/bowonia-site" target="_blank">Source code</a></li>
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
    title: "Functional logo",
    cardImage: "assets/images/projects/bowonia-site-toggle.gif",
    desp: "<li>2 modes of showing the page banner</li><li>Easy to use button that makes it easier for the user to decide</li><li>Resize and fade in animation</li>",
  },
  {
    title: "Responsive content",
    cardImage: "assets/images/projects/bowonia-site-responsive.gif",
    desp:"<li>Responsive content that fits all types of screens</li>",
  },
  {
    title: "Rich Backgrounds",
    cardImage: "assets/images/projects/bowonia-site-alternating.png",
    desp: "<li>Alternating backgrounds for every section in a page</li>",
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

