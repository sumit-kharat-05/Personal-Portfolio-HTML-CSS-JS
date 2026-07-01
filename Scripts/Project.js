// const projectTabs = document.querySelectorAll(".Tab");
// const projects = document.querySelector(".Projects");

// const ProjectList = [
//     {
//         Id: "1",
//         Number:"01",
//         Tittle:"Tic-Tac-Toe-Game",
//         Details:
//             "Build Tic-Tac-Toe Game Using HTML | CSS | JS. Work Properly All Functional Work ",
//         TechStack:["HTML","CSS","JS"],
//         image:"./assets/projects/Project 01/Tic-Tac-Toe Game.png",
//         GitHubLink:"https://github.com/sumit-kharat-05/Tic-Tac-Toe-Game-JAVASCRIPT-"
//     },
//      {
//         Id: "2",
//         Number:"02",
//         Tittle:"Stone-Paper-Scissors Game",
//         Details:
//             "Build Stone-Paper-Scissors Game Using HTML | CSS | JS. Work Properly All Functional Work ",
//         TechStack:["HTML","CSS","JS"],
//         image:"./assets/projects/Project 02/Stone-Paper-Scissor Game.png",
//         GitHubLink:"https://github.com/sumit-kharat-05/Stone-Paper-scissors-Game-JAVASCRIPT"
//     }
// ];

// let currentIndex = 0;
// const renderProject  = (Index) =>
// {
//    const projectContent = ProjectList[Index];

//    const previousDisabled = currentIndex === 0;
//    const nextDisabled = currentIndex === ProjectList.length - 1;
//    projects.innerHTML = `
                    
//    <h3>${projectContent?.Number}</h3>
//    <h4>${projectContent?.Tittle}</h4>
//    <p>${projectContent?.Details}</p>
// <div class="TechStack">
//     ${projectContent?.TechStack?.map((Tech , i) => {
//     return `
//     <span key=${i}>${Tech}</span>`;
//     })}
//     </div>
//     <hr>
//     <div class="links">
//     <a href="${projectContent?.GitHubLink}">
//     <i class="fa-solid fa-arrow-right" style="color: rgb(246, 47, 47);"></i> 
//     </a>
//     <a href="${projectContent?.GitHubLink}">
//     <i class="fa-brands fa-square-github" style="color: rgb(246, 47, 47);"></i>  
//     </a>
//     </div>
//     <div class="Carousal">
//      <img src=${projectContent?.image} alt="${projectContent?.Tittle}">

//     <div class="Arrows">
//     <a href="" id="previous" class=${previousDisabled? "disabled-btn":" "}><i class="ph ph-caret-circle-left"></i></a>
//     <a href="" id="next" class=${nextDisabled? "disabled-btn":" "} ><i class="ph ph-caret-circle-right"></i></a>
//     </div>
//    </div>
//   `;
//   document.getElementById("previous").addEventListener("click",(e) => {
//     e.preventDefault();

//     if (currentIndex > 0) {
//         currentIndex --;
//         renderProject(currentIndex);
//     }
// });
// document.getElementById("next").addEventListener("click",(e) => {
//     e.preventDefault();

//     if (currentIndex < ProjectList.length - 1) {
//         currentIndex ++;
//         renderProject(currentIndex);
//     }
// });
// };

// renderProject(currentIndex);


const projects = document.querySelector(".Projects");

const ProjectList = [
    {
        Id: "1",
        Number: "01",
        Tittle: "Tic-Tac-Toe Game",
        Details: "Build Tic-Tac-Toe Game Using HTML, CSS and JavaScript. Fully functional with all game features.",
        TechStack: ["HTML", "CSS", "JavaScript"],
        image: "./assets/projects/Project 01/Tic-Tac-Toe Game.png",
        GitHubLink: "https://github.com/sumit-kharat-05/Tic-Tac-Toe-Game-JAVASCRIPT-"
    },
    {
        Id: "2",
        Number: "02",
        Tittle: "Stone Paper Scissors Game",
        Details: "Build Stone Paper Scissors Game Using HTML, CSS and JavaScript. Fully functional with score tracking.",
        TechStack: ["HTML", "CSS", "JavaScript"],
        image: "./assets/projects/Project 02/Stone-Paper-Scissor Game.png",
        GitHubLink: "https://github.com/sumit-kharat-05/Stone-Paper-scissors-Game-JAVASCRIPT"
    }
];

let currentIndex = 0;

function renderProject(index) {

    const project = ProjectList[index];

    const previousDisabled = index === 0;
    const nextDisabled = index === ProjectList.length - 1;

    projects.innerHTML = `
    
        <div class="ProjectsInfo">

            <h3>${project.Number}</h3>

            <h4>${project.Tittle}</h4>

            <p>${project.Details}</p>

            <div class="TechStack">
                ${project.TechStack
                    .map(tech => `<span>${tech}</span>`)
                    .join("")}
            </div>

            <hr>

            <div class="links">

                <a href="${project.GitHubLink}"
                   target="_blank"
                   rel="noopener noreferrer">

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

                <a href="${project.GitHubLink}"
                   target="_blank"
                   rel="noopener noreferrer">

                    <i class="fa-brands fa-square-github"></i>

                </a>

            </div>

        </div>

        <div class="Carousal">

            <img src="${project.image}" alt="${project.Tittle}">

            <div class="Arrows">

                <a href="#"
                   id="previous"
                   class="${previousDisabled ? "disabled-btn" : ""}">
                    <i class="ph ph-caret-circle-left"></i>
                </a>

                <a href="#"
                   id="next"
                   class="${nextDisabled ? "disabled-btn" : ""}">
                    <i class="ph ph-caret-circle-right"></i>
                </a>

            </div>

        </div>

    `;

    document.getElementById("previous").addEventListener("click", function (e) {

        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }

    });

    document.getElementById("next").addEventListener("click", function (e) {

        e.preventDefault();

        if (currentIndex < ProjectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }

    });

}

renderProject(currentIndex);


