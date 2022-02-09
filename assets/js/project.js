AOS.init();


const tagImages = [
  {name:"Android Studio", imgSrc:"assets/icons/android.png"},
  {name:"Autodesk Maya", imgSrc:"assets/icons/maya.jpg"},
  {name:"AR Core", imgSrc:"assets/icons/arcore.jpeg"},
  {name:"Blender", imgSrc:"assets/icons/blender.jpg"},
  {name:"C#", imgSrc:"assets/icons/c#.png"},
  {name:"C++", imgSrc:"assets/icons/c++.png"},
  {name:"CSS", imgSrc:"assets/icons/css.jpg"},
  {name:"HTML", imgSrc:"assets/icons/html.png"},
  {name:"Java", imgSrc:"assets/icons/java.png"},
  {name:"JavaScript", imgSrc:"assets/icons/javascript.png"},
  {name:"Photoshop", imgSrc:"assets/icons/photoshop.png"},
  {name:"Unity",imgSrc: "assets/icons/unity.jpg"},
  {name: "Unreal Engine", imgSrc:"assets/icons/unreal.jpg"},
]
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Bowonia",
    cardImage: "assets/icons/unity.jpg",
    description: "A quiz app built using basic react.",
    Previewlink: "bowonia.html",
    tags: ["11"],
  },
  {
    title: "Bob the Burgler",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "A chess engine for a popular game dev engine.",
    Previewlink: "bob.html",
    tags: ["11","11"],
  },
  {
    title: "Bowonia Site",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Flappy bird game built using React.js",
    Previewlink: "bowonia_site.html",
    tags: ["0","1"],
  },
  {
    title: "AR Game",
    cardImage: "assets/images/project-page/exercise.jpg",
    description: "Exercise tracker built using basic redux.",
    Previewlink: "ar.html",
    tags: ["0","1"],
  },
  {
    title: "Covid Info",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    Previewlink: "covid_info.html",
    tags: ["0","1"],
  },
  {
    title: "Ice Cold Juice",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "Poker game built using typescript.",
    Previewlink: "ice_cold_juice.html",
    tags: ["0","1"],
  },
  {
    title: "Pixel Runner",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React .",
    Previewlink: "pixel_runner.html",
    tags: ["0","1"],
  },
  {
    title: "Pizza Runner",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    Previewlink: "pizza_runner.html",
    tags: ["0","1"],
  },
  {
    title: "Rome Quiz Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python ",
    Previewlink: "rome.html",
    tags: ["0","1"],
  },
  {
    title: "Series Finder",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    Previewlink: "series_finder.html",
    tags: ["0","1"],
  },
  {
    title: "Traffic Jam",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    Previewlink: "traffic_jam.html",
    tags: ["0","1"],
  },
  {
    title: "3D Night Scene",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    Previewlink: "3d.html",
    tags: ["0","1"],
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
                  <img class="tagimg" width="40px" src=" ${tagImages[tag].imgSrc}" alt="${tag}" />
                    
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

