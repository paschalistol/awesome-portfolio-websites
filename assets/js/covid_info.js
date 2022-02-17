AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/covid.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Covid Info</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>An app that gives useful information about COVID-19</li>
    <li>Platform: Android</li>
    <li>Made with Android Studio and Java</li>
    <li>Solo developed</li>
    <li>Numbers about cases/deaths from <a href="https://about-corona.net/" target="_blank">about-corona.net</a></li>
    <li>Numbers about vaccinated from <a href="https://mmediagroup.fr/covid-19" target="_blank">mmediagroup.fr</a></li>
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
    title: "COVID-19 Info",
    cardImage: "assets/images/projects/covid-info.png",
    desp: "<li>Gives information about <b>total cases</b> of COVID-19</li><li>Gives information about <b>deaths</b> by COVID-19</li><li>Gives information about how many <b>recovered</b> from COVID-19</li><li>Gives information about how many are partially or totally <b>vaccinated</b> for COVID-19</li>",
  },
  {
    title: "Hamburger Menu",
    cardImage: "assets/images/projects/covid-menu.png",
    desp: "<li>Easy to use menu</li><li>User selects mode</li><li>Button to navigate to notification settings</li><li>Information when data was updated</li>",
  },
  {
    title: "Daily Notification",
    cardImage: "assets/images/projects/covid-notification.png",
    desp:"<li>User gets a daily notification with information</li><li>User decides country from a list and time of notificaiton</li>",
  },
  {
    title: "Google Maps",
    cardImage: "assets/images/projects/covid-map.gif",
    desp: "<li>Google Maps integration</li><li>Pins only if respective API provides info about country</li><li>Custom map style</li>",
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

