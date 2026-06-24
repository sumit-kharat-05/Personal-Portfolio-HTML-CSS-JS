// const aboutTabs = document.querySelectorAll(".Tab");
// const aboutContent = document.querySelectorAll(".Tab-Content");
// const experienceListContainer = document.querySelector(".ExperienceList");

// const ExperienceList = [
//     {
//         Id: "01",
//         Duration: "June 2024 - July 2024",
//         Position: "FrontEnd Website Development",
//         Company: "Microspectra Software Technologies Pvt.Ltd",
//         Details: "I completed a 1-month FrontEnd Website Development internship at Microspectra Software Technologies Pvt. Ltd., building projects to strengthen my fundamentals."
//     },
//     {
//         Id: "02",
//         Duration: "June 2026 - July 2026",
//         Position: "MERN Full Stack Web Development",
//         Company: "EduSkill Academy",
//         Details: "During this internship, I learned and demonstrated industry-relevant skills that enhanced my employability and strengthened my confidence in web development."
//     }
// ];

// const renderExperienceList = () => {
//     if (!experienceListContainer) {
//         return;
//     }

//     const experienceContent = ExperienceList.map((ele) => {
//         return `
//             <div class="ExperienceBox" data-id="${ele.Id}">
//                 <h4>${ele.Duration}</h4>
//                 <h3>${ele.Position}</h3>
//                 <div class="CompanyName">
//                     <span></span>
//                     <p>${ele.Company}</p>
//                 </div>
//                 <p>${ele.Details}</p>
//             </div>
//         `;
//     }).join("");

//     experienceListContainer.innerHTML = experienceContent;
// };

// const activateTab = (tab) => {
//     if (!tab) {
//         return;
//     }

//     aboutTabs.forEach((a) => a.classList.remove("active"));
//     aboutContent.forEach((content) => content.classList.remove("active"));

//     tab.classList.add("active");
//     const activeSectionId = tab.dataset.section;
//     const activeSection = document.getElementById(activeSectionId);

//     if (activeSection) {
//         activeSection.classList.add("active");
//     }

//     if (activeSectionId === "Experience") {
//         renderExperienceList();
//     }
//     else if(activateTab === "Education")
//     {
//         const education = document.querySelector(".EducationList");

//         const EducationList = [
//             {Id: '1',
//              Date: "2022 - 2025",
//              Degree:"Diploma In Information Technology",
//              Institutions:"Government Polytechnic , Washim",
//              Details:"Studied Core subject Like Data Structure , Data Communication , Priciple Of Database,C,CPP,Computer Network Etc. Build Multiple Academic Projects Using C | CPP | JAVA."
//             },
//             {Id: '2',
//              Date: "2025 - 2028",
//              Degree:"B.Tech In Data Science",
//              Institutions:"G.H.Raisoni College Of Engineering And Management , Nagpur",
//              Details:"Studied Core subject Like Data Structure , Database Management System , Computer Architecture,Software Engineering,Big Data Computiong Etc. Build Multiple Academic Projects Using CPP | JAVA"}
//         ];

//          const educationContent = EducationList.map((ele) => {
//         return `
//             <div class="EducationBox" data-id="${ele.Id}">
//                 <h4>${ele.Date}</h4>
//                 <h3>${ele.Degree}</h3>
//                 <div class="Institutions Name">
//                     <span></span>
//                     <p>${ele.Institutions}</p>
//                 </div>
//                 <p>${ele.Details}</p>
//             </div>
//         `;
//          }).join("");

//          if (education) {
//             education.innerHTML = educationContent;
//          }
//     }
// };

// document.addEventListener("DOMContentLoaded", () => {
//     if (aboutTabs.length > 0) {
//         activateTab(aboutTabs[0]);
//     }
// });

// aboutTabs.forEach((tab) => {
//     tab.addEventListener("click", (e) => {
//         e.preventDefault();
//         activateTab(tab);
//     });
// });

const aboutTabs = document.querySelectorAll(".Tab");
const aboutContent = document.querySelectorAll(".Tab-Content");

const experienceListContainer = document.querySelector(".ExperienceList");
const educationListContainer = document.querySelector(".EducationList");
const skillListContainer = document.querySelector(".SkillsList");
const aboutMeListContainer =  document.querySelector(".AboutMeList");

// Experience Data
const ExperienceList = [
    {
        Id: "01",
        Duration: "June 2024 - July 2024",
        Position: "FrontEnd Website Development",
        Company: "Microspectra Software Technologies Pvt. Ltd.",
        Details:
            "I completed a 1-month FrontEnd Website Development internship at Microspectra Software Technologies Pvt. Ltd., building projects to strengthen my fundamentals."
    },
    {
        Id: "02",
        Duration: "June 2026 - July 2026",
        Position: "MERN Full Stack Web Development",
        Company: "EduSkill Academy",
        Details:
            "During this internship, I learned and demonstrated industry-relevant skills that enhanced my employability and strengthened my confidence in web development."
    }
];

// Education Data
const EducationList = [
    {
        Id: "01",
        Date: "2022 - 2025",
        Degree: "Diploma In Information Technology",
        Institution: "Government Polytechnic, Washim",
        Details:
            "Studied core subjects like Data Structures, Data Communication, Principles of Database, C, C++, and Computer Networks. Built multiple academic projects using C, C++, and Java."
    },
    {
        Id: "02",
        Date: "2025 - 2028",
        Degree: "B.Tech In Data Science",
        Institution: "G.H. Raisoni College of Engineering and Management, Nagpur",
        Details:
            "Studied core subjects like Data Structures, Database Management Systems, Computer Architecture, Software Engineering, and Big Data Computing. Built multiple academic projects using C++ and Java."
    }
];

// Skills Data
const SkillsList = [
    {
        Id: "01",
        Name:"HTML",
        Icon:"./assets/skills/html.png"
    },
     {
        Id: "02",
        Name:"CSS",
        Icon:"./assets/skills/css.png"
    },
     {
        Id: "03",
        Name:"TAILWIND CSS",
        Icon:"./assets/skills/Tailwind css.png.png"
    },
     {
        Id: "04",
        Name:"BOOTSTRAP",
        Icon:"./assets/skills/bootstrap.png"
    },
     {
        Id: "05",
        Name:"JAVASCRIPT",
        Icon:"./assets/skills/js.png"
    },
     {
        Id: "06",
        Name:"TYPESCRIPT",
        Icon:"./assets/skills/Typescript.png.png"
    },
     {
        Id: "07",
        Name:"REACT JS",
        Icon:"./assets/skills/React js.png.png"
    },
     {
        Id: "08",
        Name:"VUE JS",
        Icon:"./assets/skills/Vue js.png.png"
    },
     {
        Id: "09",
        Name:"ANGULAR JS",
        Icon:"./assets/skills/Angular js.png.png"
    },
     {
        Id: "10",
        Name:"GITHUB",
        Icon:"./assets/skills/github.png.png"
    },
     {
        Id: "11",
        Name:"EXPRESS JS",
        Icon:"./assets/skills/Express.png.png"
    },
     {
        Id: "12",
        Name:"NODE JS",
        Icon:"./assets/skills/Node js.png.png"
    },
     {
        Id: "13",
        Name:"NEXT JS",
        Icon:"./assets/skills/Next js.png.png"
    },
      {
        Id: "14",
        Name:"C",
        Icon:"./assets/skills/C.png.png"
    },
      {
        Id: "15",
        Name:"CPP",
        Icon:"./assets/skills/C++.png.png"
    },
      {
        Id: "16",
        Name:"JAVA",
        Icon:"./assets/skills/Java.png.png"
    },
      {
        Id: "17",
        Name:"PYTHON",
        Icon:"./assets/skills/Python.png.png"
    },
      {
        Id: "18",
        Name:"SQL",
        Icon:"./assets/skills/Sql.png.png"
    },
      {
        Id: "19",
        Name:"MONGODB",
        Icon:"./assets/skills/MongoDB.png.png"
    },
      {
        Id: "20",
        Name:"POSTGRESQL",
        Icon:"./assets/skills/PostgreSql.png.png"
    },

      {
        Id: "21",
        Name:"AWS",
        Icon:"./assets/skills/AWS.png.png"
    },
    {
        Id: "22",
        Name:"LINUX",
        Icon:"./assets/skills/Linux.png.png"
    },
        {
        Id: "23",
        Name:"SHELL-SCRIPTING",
        Icon:"./assets/skills/Shell-Scripting.png.png"
    }
];

// AboutMe Data
const AboutMeList = [
    {
        Id: "01",
        Key:"Name:-",
        Value:"SUMIT KHARAT"
    },
    {
        Id: "02",
        Key:"Coutry:-",
        Value:"INDIA"
    },
    {
        Id: "03",
        Key:"Industry:-",
        Value:"SOFTWARE/IT"
    },
      {
        Id: "04",
        Key:"Experience:-",
        Value:"0 YEARS"
    }
];

// Render Experience
const renderExperienceList = () => {
    if (!experienceListContainer) return;

    const experienceContent = ExperienceList.map((ele) => {
        return `
            <div class="ExperienceBox" data-id="${ele.Id}">
                <h4>${ele.Duration}</h4>
                <h3>${ele.Position}</h3>

                <div class="CompanyName">
                    <span></span>
                    <p>${ele.Company}</p>
                </div>

                <p>${ele.Details}</p>
            </div>
        `;
    }).join("");

    experienceListContainer.innerHTML = experienceContent;
};


// Render Education
const renderEducationList = () => {
    if (!educationListContainer) return;

    const educationContent = EducationList.map((ele) => {
        return `
            <div class="EducationBox" data-id="${ele.Id}">
                <h4>${ele.Date}</h4>
                <h3>${ele.Degree}</h3>

                <div class="InstitutionName">
                    <span></span>
                    <p>${ele.Institution}</p>
                </div>

                <p>${ele.Details}</p>
            </div>
        `;
    }).join("");

    educationListContainer.innerHTML = educationContent;
};

// Render Skills
const renderSkillsList = () => {
    if (!skillListContainer) return;

    const skillsContent = SkillsList.map((ele) => {
        return `
            <div class="SkillsBox" data-id="${ele.Id}">
                <img
                    src="${ele.Icon}"
                    alt="${ele.Name}"
                    title="${ele.Name}"
                    loading="lazy"
                />
                <h4>${ele.Name}</h4>
            </div>
        `;
    }).join("");

    skillListContainer.innerHTML = skillsContent;
};

// Render AboutMe
const renderAboutMeList = () => {
    if (!aboutMeListContainer) return;

    const aboutMeContent = AboutMeList.map((ele) => {
        return `
            <div class="AboutMeBox" data-id="${ele.Id}">
                <span>${ele?.Key}</span>
                <span>${ele?.Value}</span>
            </div>
        `;
    }).join("");

    aboutMeListContainer.innerHTML = aboutMeContent;
};

// Activate Tab
const activateTab = (tab) => {
    if (!tab) return;

    // Remove active classes
    aboutTabs.forEach((item) => item.classList.remove("active"));
    aboutContent.forEach((item) => item.classList.remove("active"));

    // Add active class to selected tab
    tab.classList.add("active");

    const activeSectionId = tab.dataset.section;
    const activeSection = document.getElementById(activeSectionId);

    if (activeSection) {
        activeSection.classList.add("active");
    }

    // Render content based on selected tab
    if (activeSectionId === "Experience") {
        renderExperienceList();
    }

    if (activeSectionId === "Education") {
        renderEducationList();
    }

     if (activeSectionId === "Skills") {
        renderSkillsList();
    }

     if (activeSectionId === "AboutMe") {
        renderAboutMeList();
    }
};

// Default active tab
document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs.length > 0) {
        activateTab(aboutTabs[0]);
    }
});

// Tab click events
aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab(tab);
    });
});