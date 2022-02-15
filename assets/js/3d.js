AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/3d.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">3D Night Scene</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>A sample night scene created with modular assets created by me in Maya and assembled in Unreal Engine</li>
    <li>Made with Unreal Engine and Autodesk Maya</li>
    <li>High quality video of the scene can be <a href="https://www.youtube.com/watch?v=C-4nKMUu9fI" target="_blank">found here</a></li>
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
    title: "Flame - Torch",
    cardImage: "assets/images/projects/3d-flame.gif",
    desp: "<li>Torch with flame</li><li>3D modeling of the torch</li><li>Flame throws shadow</li><li>Flame with particles</li>",
  },
  {
    title: "Fireflies",
    cardImage: "assets/images/projects/3d-fireflies.gif",
    desp: "<li>Fireflies/Particles that illuminate</li><li>Random movement and life duration/creation</li>",
  },
  {
    title: "3D Assets",
    cardImage: "assets/images/projects/3d-modules.gif",
    desp: "<li>Modeling of 3D assets in Maya</li><li>Simple objects than can be mixed to get different results</li>",
  },
  {
    title: "Create environment and reuse assets",
    cardImage: "assets/images/projects/3d-day.png",
    desp: "<li>Modular houses made with the assets shown above</li><li>Terrain manipulation</li><li>Foliage usage</li>",
  },
  {
    title: "Post processing",
    cardImage: "assets/images/projects/3d-post.png",
    desp: "<li>Post processing of the scene with fog, vignette, blur</li>",
  },
  {
    title: "UV Mapping",
    cardImage: "assets/images/projects/3d-uv.png",
    desp: "<li>UV Mapping of all the assets created</li>",
  },
  {
    title: "Vertex Painting",
    cardImage: "assets/images/projects/3d-vertex.gif",
    desp: "<li>Vertex painting of some objects</li>",
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

