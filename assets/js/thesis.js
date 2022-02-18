AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="projects/series.png" class="project-img"/>
      
    
      `
  projectimage.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showImage);



const projectinfo = document.querySelector(".project-info");
const showInfo = () => {
  let output = "";
  output += `        
  <div class=" ">
              
                
                        
  <h2 class="main-heading mb-0 experience_head"><span class="my_experience">Bachelor Thesis</span></h2>
  <p class="pre-heading font-weight-bolder  ">
  <ul>
    <li>Filters and finds series from user's watchlist</li>
    <li>Platform: PC</li>
    <li>Made with Java</li>
    <li>Using the <a href="https://www.imdb.com/interfaces/" target="_blank">IMDb datasets</a></li>
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
    title: "Filter by genre",
    cardImage: "assets/images/projects/series-genres.png",
    desp: "<li>Checkboxes that make it easier to find series of a specific genre</li><li>Selecting multiple boxes shows series meeting all the criteria</li>",
  },
  {
    title: "Filter only completed series",
    cardImage: "assets/images/projects/series-ended.png",
    desp: "<li>A unique feature that (as far as I know) doesn't exist anywhere else</li><li>A checkbox that hides all series that are still being aired</li><li>Ability to type the last year that a series can have been completed</li>",
  },
  {
    title: "Total runtime",
    cardImage: "assets/images/projects/series-runtime.png",
    desp:"<li>The total runtime of a series</li><li>IMDb provides the total runtime of any mini-series but only the time of every episode for regular series. The program takes this into account and approximates the total runtime of regular series as well</li><li>User can easier select a series to watch for marathons</li>",
  },
  {
    title: "Sorting",
    cardImage: "assets/images/projects/series-sorting.png",
    desp:"<li>Three different sorting methods</li><li>The series can be sorted by name, rating or total airtime</li><li>Ability to show series of a minimum rating and above</li>",
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

