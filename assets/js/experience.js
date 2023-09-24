AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/ticket.png",
    place: "Ticket Privatresor",
    time: "(Dec, 2022 - present)",
    desp: "<li>Backend development</li><li>New microservice, features, fixes</li><li>Regular releases, service monitoring</li><li>Test-driven development</li><li>.NET Core, Redis, Kubernetes, Jenkins X</li><li>Kibana, Grafana, Prometheus</li><li>JetBrains Rider, LinqPad, SQL Server Management Studio</li><li>Postman, Protoman, Swagger</li>",
  },
  {
    title: "Game Developer",
    cardImage: "assets/images/experience-page/pt.jpg",
    place: "Self-employed",
    time: "(Sep, 2021 - present)",
    desp: "<li>Developing and releasing my solo developed games</li><li>Released Ice Cold Juice on Play Store</li><li>Released Stack Mania on Play Store</li>",
  },
  {
    title: "Language Administrator - Greek",
    cardImage: "assets/images/experience-page/academic_work.jpg",
    place: "Academic Work · Contract",
    time: "(Jun, 2021 - Jul, 2021)",
    desp: "<li>Consultant to a company to help them translate a software to Greek</li>",
  },
  {
    title: "IT specialist & Audiovisual support",
    cardImage: "assets/images/experience-page/vdl.jpg",
    place: "VDL Bros audiovisual",
    time: "(Feb, 2016 - Jun, 2018)",
    desp:"<li>AV installation</li><li>IT support for conferences</li><li>Middle person between AV team and Conference organizer</li><li>Conference talk control and speaker support</li><li>YouTube live stream direction</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
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
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Dance Teacher",
    cardImage: "assets/images/experience-page/epos.jpg",
    place: "Greek Cultural Group in Stockholm (EPOS) / Apollon Solna FK (Cultural department)",
    time: "(Oct, 2018 - Jun, 2021)",
    description:
    "<li>Co-founded the dance group in 2018</li><li>Dance teacher</li><li>Co-coordinated the events of the group</li>",
  },
  {
    title: "Co Coordinator",
    cardImage: "assets/images/experience-page/xofeth.jpg",
    place: "Dance Group of the Student Dorms in Thessaloniki (HOFETh)",
    time: "(Oct, 2011 - Jun, 2017)",
    description:
    "<li>Part of the organizing committee of an annual 8-day dance festival</li><li>Responsible for the (then) 39 year old archive of the group</li><li>Sometimes used as teacher substitute</li><li>Directed and edited the promo video of the festival for 3 years</li><li>Designed and edited the posters and other promo material for the festival and other events for 4 years</li><li>Created and edited social media material</li><li>Communicated with musicians and dance groups in order for them to participate in the festival</li>",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description,time, place }) =>
      (output += `      
        
      <div class="card card1" ">
      
      <img src="${cardImage}" class="featured-image">
      <article class="card-body">
          <header>
          <div class="title">
            <h3>${title}</h3>
          </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              ${description}
            </ul>
          </header>
        </article>
        </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

