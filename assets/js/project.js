AOS.init();


const tagImages = [
  {name:"Android Studio", imgSrc:"assets/icons/android.png"},
  {name:"Autodesk Maya", imgSrc:"assets/icons/maya.png"},
  {name:"AR Core", imgSrc:"assets/icons/arcore.png"},
  {name:"Blender", imgSrc:"assets/icons/blender.png"},
  {name:"C#", imgSrc:"assets/icons/c_sharp.png"},
  {name:"C++", imgSrc:"assets/icons/c++.png"},
  {name:"CSS", imgSrc:"assets/icons/css.png"},
  {name:"HTML", imgSrc:"assets/icons/html.png"},
  {name:"Java", imgSrc:"assets/icons/java.png"},
  {name:"JavaScript", imgSrc:"assets/icons/javascript.png"},
  {name:"Photoshop", imgSrc:"assets/icons/photoshop.png"},
  {name:"Unity",imgSrc: "assets/icons/unity.png"},
  {name: "Unreal Engine", imgSrc:"assets/icons/unreal.png"},
  {name: "Tobii", imgSrc:"assets/icons/tobii.png"},
  {name: "Flutter", imgSrc:"assets/icons/flutter.png"},
  {name: "Dart", imgSrc:"assets/icons/dart.png"},
]
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Big PC Game",
    cardImage: "projects/bowonia-preview.png",
    description: "A survival fast-paced RPG with cartoony style",
    Previewlink: "bowonia.html",
    tags: ["11","4","10"],
  },
  {
    title: "Released Android Game",
    cardImage: "projects/icecold-preview.png",
    description: "An arcade game based on the popular Ice Cold Beer",
    Previewlink: "ice_cold_juice.html",
    tags: ["11","4","3"],
  },
  {
    title: "Bachelor Thesis",
    cardImage: "projects/thesis-preview.jpg",
    description: "Local multiplayer cheating avoidance using Eye tracking",
    Previewlink: "thesis.html",
    tags: ["11","4","13"],
  },
  {
    title: "AR Game",
    cardImage: "projects/ar-preview.png",
    description: "An AR game created during a game jam",
    Previewlink: "ar.html",
    tags: ["11","4","2"],
  },
  {
    title: "Simple Game Engine",
    cardImage: "projects/traffic-preview.jpg",
    description: "A game engine created during a C++ course",
    Previewlink: "traffic_jam.html",
    tags: ["5"],
  },
  {
    title: "Android App",
    cardImage: "projects/covid-preview.png",
    description: "An app parsing covid related info",
    Previewlink: "covid_info.html",
    tags: ["0","8"],
  },
  {
    title: "Promotional Site",
    cardImage: "projects/bowonia-site-preview.png",
    description: "A promotional site about Bowonia",
    Previewlink: "bowonia_site.html",
    tags: ["7","6","9"],
  },
  {
    title: "PC App",
    cardImage: "projects/series-preview.png",
    description: "Find the optimal series to watch from your watchlist",
    Previewlink: "series_finder.html",
    tags: ["8"],
  },
  {
    title: "3D Night Scene",
    cardImage: "projects/3d-preview.png",
    description: "A sample night scene assembled with modular assets created by me",
    Previewlink: "3d.html",
    tags: ["12","1"],
  },
  {
    title: "Arcade Game",
    cardImage: "projects/pixel-preview.png",
    description: "An endless arcade game with randomly generated level",
    Previewlink: "pixel_runner.html",
    tags: ["11","4"],
  },
  {
    title: "Smaller PC Game",
    cardImage: "projects/bob-preview.png",
    description: "A cartoony game about a burgler",
    Previewlink: "bob.html",
    tags: ["11","4"],
  },
  {
    title: "Runner Game",
    cardImage: "projects/pizza-preview.png",
    description: "An android runner of a pizza baker collecting ingredients",
    Previewlink: "pizza_runner.html",
    tags: ["11","4"],
  },
  {
    title: "Quiz PC Game",
    cardImage: "projects/rome-preview.png",
    description: "A prototype of a quiz game made with Unity",
    Previewlink: "rome.html",
    tags: ["11","4"],
  },
  {
    title: "PC Platformer",
    cardImage: "projects/knight-preview.png",
    description: "A 2D platformer made for PC",
    Previewlink: "knight.html",
    tags: ["11","4"],
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  
  projects.forEach(
    ({ title, cardImage,description, tags, Previewlink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px" >
        <a href="${Previewlink}">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title">${title}</h1>
                <h4 class="description">${description}</h4>
                </div>


              </div>
              <div class="technologies">
              ${tags.map(tag => (
                `
                  <img class="tagimg" height="40px" src=" ${tagImages[tag].imgSrc}" alt="${tag}" />
                    
                `                    
              )
        )}
        </div>
            </div>
          </div>
          </a>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

