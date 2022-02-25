AOS.init();



const projectimage = document.querySelector(".project-image");
const showImage = () => {
  let output = "";
output += `        
      
        <img src="assets/images/projects/bowonia-gameplay.png" class="project-img"/>
      
    
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
    <li>Bowonia is a survival fast-paced RPG with cartoony style</li>
    <li>Made with Unity and C#</li>
    <li>Part of an exhibition at the Swedish National Museum of Science and Technology</li>
    <li>Roles in the project were Lead Developer, Programmer and UX Designer</li>
    <li>Download available at <a href="https://paschalistol.itch.io/bowonia" target="_blank">itch.io</a></li>
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
    title: "Gameplay",
    cardImage: "assets/images/projects/bowonia-gameplay.jpg",
    desp: "<li>Choose between 2 classes, <b>Fighter</b> or <b>Mystic</b></li><li>Endless number of waves with increasing difficulty</li><li>Buy or upgrade skills and potions</li><li>Random events and quests</li><li>Fully remappable controls</li>",
  },
  {
    title: "Pool Manager",
    cardImage: "assets/images/projects/bowonia-pool.gif",
    desp: "<li>Custom made pool manager</li><li>Reusable code</li><li>Optimizes for smoother gameplay</li><li>More clones are created if needed</li>",
  },
  {
    title: "Ability Manager (UX)",
    cardImage: "assets/images/projects/bowonia-shop.gif",
    desp: "<li>Auto equip ability to first available spot</li><li>Move abilities to free spots</li><li>Easy to swap ability spots</li><li>Animations when buying/upgrading</li><li>Make ability spots obvious with animations and screen fade while dragging unequiped abilities</li><li>Enequip ability</li><li>Different cursors for different states (dragging, pointing, ready to grab)</li><li>Ability price and level</li><li>Differantiate locked abilities</li><li>Show ability description and upgrade stats</li>",
  },
  {
    title: "Scoreboard",
    cardImage: "assets/images/projects/bowonia-scoretable.gif",
    desp: "<li>Saves score with player defined name</li><li>Autoscrolls scores to user's position</li><li>Always shows the player in first place</li><li>If same score shows the same posistion</li><li>Shows relevant information such as player class, progress and points</li><li>Developer defined number of score entries</li>",
  },
  {
    title: "Other UX",
    cardImage: "assets/images/projects/bowonia-2animations.gif",
    desp: "<li>Typewriter effect</li><li>Animation when wave starts/ends</li><li>Skill loading while cooldown</li><li>Pointer under player pointing to boss/shop/building to protect, scaled depending on distance</li><li>Small pointers at edge of screen pointing to all enemies out of sight</li>",
  },
  {
    title: "Quests",
    cardImage: "assets/images/projects/bowonia-quest.gif",
    desp: `<li>Implemented 2 of the 3 available quests</li><li><u>Protect the building.</u> The player's goal is to protect a random building from the enemies</li><li><u>Collect the objects.</u> Gather the objects around the map before the wave is over</li>`,
  },
  {
    title: "Other Programming",
    cardImage: "assets/images/projects/bowonia-programming.gif",
    desp: "<li>Smoother math based enemy jump</li><li>Autorefill health if selected</li><li>Navigate menu also with keyboard and continue navigation from mouse point</li><li>Fix enemy animations not playing. Adjust player animation walking in all directions</li><li>Randomize enemy color</li><li>Change player weapon after some upgrades</li><li><b><u>Bug Fixing</u></b> throughout the game</li>",
  },
  {
    title: "Trailer",
    cardImage: "assets/images/projects/bowonia-trailer.gif",
    desp: `<li>Video editing</li><li>Music supervising & Sound editing</li><li>Software used: <a href="https://www.vegascreativesoftware.com/us/vegas-pro/" target="_blank">VEGAS Pro</a></li><li>Trailer available on: <a href="https://www.youtube.com/watch?v=To2v6NSFGp4" target="_blank">YouTube</a></li>`,
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

