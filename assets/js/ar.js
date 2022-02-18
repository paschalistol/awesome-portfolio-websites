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
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Nod The Node</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>Made for a Game Jam where key word was "NOD"</li>
    <li>Made with Unity, C# and AR Core</li>
    <li>Solo developed</li>
    <li>Nod also meaning node in swedish</li>
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
    title: "Game Developer",
    cardImage: "assets/images/experience-page/pt.jpg",
    desp: "<li>Developing and releasing my solo developed games.</li><li>Released Ice Cold Juice on Play Store</li>",
  },
  {
    title: "Language Administrator - Greek",
    cardImage: "assets/images/experience-page/academic_work.jpg",
    desp: "<li>Consultant to a company to help them translate a software to Greek.</li>",
  },
  {
    title: "IT specialist & Audiovisual support",
    cardImage: "assets/images/experience-page/vdl.jpg",
    desp:"<li>AV installation</li><li>IT support for conferences</li><li>Middle person between AV team and Conference organizer</li><li>Conference talk control and speaker support</li><li>YouTube live stream direction</li>",
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

