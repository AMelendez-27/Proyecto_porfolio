import { addExperience, addStudies } from "./public/components/experience_studies/experience_studies"
import { addProject } from "./public/components/project/project"
import { skillImg } from "./public/components/skillImg/skillImg"
import { addLink } from "./public/components/link/link"

// HEADER
const header = document.createElement('header')
document.body.appendChild(header)

// HEADER - PORTFOLIO NAME
const aPortfolioName = document.createElement('a')
const pPortfolioName = document.createElement('p')
pPortfolioName.className = 'portfolio-name'
pPortfolioName.textContent = 'Àlex Meléndez Centeno'

// GENERATE HTML
header.appendChild(aPortfolioName)
aPortfolioName.appendChild(pPortfolioName)


// HEADER - MAIN MENU
const navMenu = document.createElement('nav')
navMenu.className = 'header nav-menu'

const ulMainMenu = document.createElement('ul')
ulMainMenu.className = 'header ul-main-menu'

const liHome = document.createElement('li')
liHome.className = 'header li-main-menu'
liHome.id = 'home'
liHome.textContent = 'Inicio'

const liAboutMe = document.createElement('li')
liAboutMe.className = 'header li-main-menu'
liAboutMe.id = 'about-me'
liAboutMe.textContent = 'Sobre mí'

const liSkills = document.createElement('li')
liSkills.className = 'header li-main-menu'
liSkills.id = 'skills'
liSkills.textContent = 'Skills'

const liExperienceAndStudies = document.createElement('li')
liExperienceAndStudies.className = 'header li-main-menu'
liExperienceAndStudies.id = 'e&s'
liExperienceAndStudies.textContent = 'Experiencia y Estudios'

const liProjects = document.createElement('li')
liProjects.className = 'header li-main-menu'
liProjects.id = 'projects'
liProjects.textContent = 'Proyectos'

// GENERATE HTML
header.appendChild(navMenu)
navMenu.appendChild(ulMainMenu)
ulMainMenu.appendChild(liHome)
ulMainMenu.appendChild(liAboutMe)
ulMainMenu.appendChild(liSkills)
ulMainMenu.appendChild(liExperienceAndStudies)
ulMainMenu.appendChild(liProjects)


// HEADER - EXTRA
const aContact = document.createElement('a')
const pContact = document.createElement('p')
pContact.className = 'header-contact'
pContact.textContent = 'Contacto'

// GENERATE HTML
header.appendChild(aContact)
aContact.appendChild(pContact)


// HEADER - SMALL SCREEN MENU
const compactMenu = document.createElement('div')
compactMenu.className = 'header menu-container'

const cMenuIcon = document.createElement('img')
cMenuIcon.className = 'header menu-icon'
cMenuIcon.src = '/public/src/menu-icon.png'
cMenuIcon.alt = 'Imagen botón menú'

/*const cMenuText = document.createElement('p')
cMenuText.className = 'header menu-text'
cMenuText.textContent = 'Menú'*/

// GENERATE HTML
header.appendChild(compactMenu)
compactMenu.appendChild(cMenuIcon)
/*compactMenu.appendChild(cMenuText)*/


// ----------------------------------------------------------------------------------
// HERO - SECTION
const heroSection = document.createElement('section')
heroSection.className = 'hero hero-section'

document.body.appendChild(heroSection)

// HERO TITLE
const heroTopContainer = document.createElement('div')
heroTopContainer.className = 'hero hero-top-container'

const heroTitleContainer = document.createElement('div')
heroTitleContainer.className = 'hero hero-title-container'

const h1Hero = document.createElement('h1')
h1Hero.className = 'hero hero-h1'
h1Hero.textContent = 'Soy desarrollador web'

const h2Hero = document.createElement('h2')
h2Hero.className = 'hero hero-h2'
h2Hero.textContent = 'Para mí, ser desarrollador web no es solo un trabajo, sino también un hobby'

const heroImgContainer = document.createElement('div')
heroImgContainer.className = 'hero hero-img-container'

const heroImg = document.createElement('img')
heroImg.className = 'hero hero-img'
heroImg.src = '/public/src/desarrollador-web-profile-img.jpg';
heroImg.alt = 'Imagen de Àlex Meléndez Centeno';

// GENERATE HTML
heroSection.appendChild(heroTopContainer)
heroTopContainer.appendChild(heroTitleContainer)
heroTitleContainer.appendChild(h1Hero)
heroTitleContainer.appendChild(h2Hero)
heroTopContainer.appendChild(heroImgContainer)
heroImgContainer.appendChild(heroImg)


// HERO DESCRIPTION
const heroDescContainer = document.createElement('div')
heroDescContainer.className = 'hero hero-desc-container'

const heroDescTitle = document.createElement('h2')
heroDescTitle.className = 'hero hero-description-title'
heroDescTitle.textContent = 'Sobre mí'

const heroDesc = document.createElement('p')
heroDesc.className = 'hero hero-description'
heroDesc.textContent = 'Ejemplo. Como desarrollador web, soy responsable de diseñar y desarrollar páginas web. Mi principal enfoque es crear experiencias receptivas y fáciles de usar que satisfagan las necesidades de una audiencia en línea diversa.'

// GENERATE HTML
heroSection.appendChild(heroDescContainer)
heroDescContainer.appendChild(heroDescTitle)
heroDescContainer.appendChild(heroDesc)


// ----------------------------------------------------------------------------------
// SKILLS - SECTION
const skillsSection = document.createElement('section')
skillsSection.className = 'skills skills-section'
// GENERATE HTML
document.body.appendChild(skillsSection)

// SKILLS
const skillsTitle = document.createElement('h2')
skillsTitle.className = 'skills skills-title'
skillsTitle.textContent = 'Mis skills'

const divImgsContainer = document.createElement('div')
divImgsContainer.className = 'skills skills-imgs-container'

// GENERATE HTML
skillsSection.appendChild(skillsTitle)
skillsSection.appendChild(divImgsContainer)

// GENERATE HTML
// ADD SKILLS IMGS
skillImg('HTML')
skillImg('CSS')
skillImg('JavaScript')
skillImg('Github')
skillImg('Visual Studio Code')
skillImg('Oracle DBA')


// ----------------------------------------------------------------------------------
// EXPERIENCE & STUDIES - SECTION
const expStuSection = document.createElement('section');
expStuSection.className = 'e-s e-s-section';

document.body.appendChild(expStuSection);

// E & S - CATEGORIES
const expStuDiv = document.createElement('div');
expStuDiv.className = 'e-s e-s-container';

const categoryContainer = document.createElement('div');
categoryContainer.className = 'e-s category-container';

const experienceTitle = document.createElement('h2');
experienceTitle.className = 'e-s experience-h2';

const experienceButton = document.createElement('button');
experienceButton.className = 'e-s e-s-button';
experienceButton.textContent = 'Experiencia';

const studiesTitle = document.createElement('h2');
studiesTitle.className = 'e-s studies-h2';

const studiesButton = document.createElement('button');
studiesButton.className = 'e-s e-s-button';
studiesButton.textContent = 'Estudios';

// GENERATE HTML
expStuSection.appendChild(expStuDiv);
expStuDiv.appendChild(categoryContainer);
categoryContainer.appendChild(experienceTitle);
experienceTitle.appendChild(experienceButton);
categoryContainer.appendChild(studiesTitle);
studiesTitle.appendChild(studiesButton);

// GENERATE HTML
// ADD EXPERIENCE
addExperience("Systems Technician en Comsa 07/2021 - 09/2023", "Gestión del portal del empleado, y de las bases de datos de la empresa")
addExperience("Superior Systems Technician (DBA) en Minsait 07/2021 - 09/2023", "Gestión y administración de bases de datos para entidades financieras")

// ADD STUDIES
addStudies("Pàlcam 09/2018 - 07/2020", "Ciclo de superior de administración de sistemas informáticos en red")
addStudies("Oracle Academy Online 09/2018 - 07/2020", "Database Design and Programming with SQL")
addStudies("Oracle Academy Online 09/2018 - 07/2020", "Database Programming with PL/SQL")
addStudies("Oracle Academy Online 09/2018 - 07/2020", "Java Programming")

// ----------------------------------------------------------------------------------
// BUTTON EVENT LISTENERS - SHOW AND HIDE CONTENT
experienceButton.addEventListener('click', () => {
  // SHOW EXPERIENCE, HIDE ALL STUDIES
  const experienceElements = document.querySelectorAll('.experience-container');
  experienceElements.forEach(element => {
    element.style.display = 'flex';
  });
  
  const studiesElements = document.querySelectorAll('.studies-container');
  studiesElements.forEach(element => {
    element.style.display = 'none';
  });

  experienceButton.classList.add('active');
  experienceButton.classList.remove('color');
  studiesButton.classList.remove('active');
  studiesButton.classList.add('color');
});

studiesButton.addEventListener('click', () => {
  // SHOW STUDIES, HIDE ALL EXPERIENCE
  const studiesElements = document.querySelectorAll('.studies-container');
  studiesElements.forEach(element => {
    element.style.display = 'flex';
  });
  
  const experienceElements = document.querySelectorAll('.experience-container');
  experienceElements.forEach(element => {
    element.style.display = 'none';
  });

  studiesButton.classList.add('active');
  studiesButton.classList.remove('color');
  experienceButton.classList.remove('active');
  experienceButton.classList.add('color');
});

// ----------------------------------------------------------------------------------
// DEFAULT: SHOW EXPERIENCE CONTENT
document.addEventListener('DOMContentLoaded', () => {
  // SHOW ALL EXPERIENCE ELEMENTS BY DEFAULT
  const experienceElements = document.querySelectorAll('.experience-container');
  experienceElements.forEach(element => {
    element.style.display = 'flex';
  });
  
  // HIDE ALL STUDIES ELEMENTS BY DEFAULT
  const studiesElements = document.querySelectorAll('.studies-container');
  studiesElements.forEach(element => {
    element.style.display = 'none';
  });

  // SET "EXPERIENCIA" BUTTON AS ACTIVE BY DEFAULT
  experienceButton.classList.add('active');
  experienceButton.classList.remove('color');
  studiesButton.classList.remove('active');
  studiesButton.classList.add('color');
});


// ----------------------------------------------------------------------------------
// PROJECTS - SECTION
const projectsSection = document.createElement('section')
projectsSection.className = 'projects projects-section'

document.body.appendChild(projectsSection)

// PROJECTS
const projectsTitle = document.createElement('h2')
projectsTitle.className = 'projects projects-title'
projectsTitle.textContent = 'Proyectos'

const projectsSubTitle = document.createElement('p')
projectsSubTitle.className = 'projects projects-sub-title'
projectsSubTitle.textContent = "Estos son algunos de mis últimos proyectos"

const projectsContainer = document.createElement('div')
projectsContainer.className = 'projects projects-container'

// GENERATE HTML
projectsSection.appendChild(projectsTitle)
projectsSection.appendChild(projectsSubTitle)
projectsSection.appendChild(projectsContainer)

// GENERATE HTML
// ADD PROJECTS
addProject('PComponentes', "El primer proyecto que hice para practicar el uso de html y css")
addProject('Tienda online JD', "Proyecto recreando la tienda online de la marca JD, hecha solo con html y css")
addProject('Pinterest', "Proyecto recreando un web tipo pinterest, usando js por primera vez y api's para las imagenes")
addProject('Porfolio', "Este porfolio está hecho únicamente con js y css, sin escribir código html directamente")

// ----------------------------------------------------------------------------------
// CONTACT FORM - SECTION
const contactSection = document.createElement('section')
contactSection.className = 'contact contact-section'

document.body.appendChild(contactSection)

// CONTACT OPTIONS
const contactDiv = document.createElement('div')
contactDiv.className = 'contact contact-container'

const infoContainer = document.createElement('div')
infoContainer.className = 'contact info-container'

const contactTitle = document.createElement('p')
contactTitle.className = 'contact contact-title'
contactTitle.innerHTML = '¿Quieres ponerte en <span class="contact-span">contacto</span> conmigo?'

const contactText = document.createElement('p')
contactText.className = 'contact contact-text'
contactText.textContent = 'Dime en qué estás interesado...'

// CONTACT BUTTONS
const buttonsContainer = document.createElement('div')
buttonsContainer.className = 'contact contact-buttons-container'

const button1 = document.createElement('button')
button1.className = 'contact contact-button-tag'
button1.textContent = 'Data Base'

const button2 = document.createElement('button')
button2.className = 'contact contact-button-tag'
button2.textContent = 'Landing Page'

const button3 = document.createElement('button')
button3.className = 'contact contact-button-tag'
button3.textContent = 'Blog Website'

const button4 = document.createElement('button')
button4.className = 'contact contact-button-tag'
button4.textContent = 'Web App'

// CONTACT FORM
const formDiv = document.createElement('div')
formDiv.className = 'contact form-container'

const contactForm = document.createElement('form')
contactForm.className = 'contact form'

const formName = document.createElement('input')
formName.className = 'contact form-name'
formName.type = 'text'
formName.placeholder = 'Tu nombre'

const formEmail = document.createElement('input')
formEmail.className = 'contact form-email'
formEmail.type = 'email'
formEmail.placeholder = 'Tu correo electrónico'

const formMessage = document.createElement('textarea')
formMessage.className = 'contact form-message'
formMessage.placeholder = 'Tu mensaje'

const formButton = document.createElement('button')
formButton.className = 'contact form-button'
formButton.textContent = 'Enviar'

// GENERATE HTML
contactSection.appendChild(infoContainer)
infoContainer.appendChild(contactDiv)
infoContainer.appendChild(formDiv)

// INFO AND BUTTONS
contactDiv.appendChild(contactTitle)
contactDiv.appendChild(contactText)
contactDiv.appendChild(buttonsContainer)
buttonsContainer.appendChild(button1)
buttonsContainer.appendChild(button2)
buttonsContainer.appendChild(button3)
buttonsContainer.appendChild(button4)

// FORM
formDiv.appendChild(contactForm)
contactForm.appendChild(formName)
contactForm.appendChild(formEmail)
contactForm.appendChild(formMessage)
contactForm.appendChild(formButton)


// FOOTER
const footer = document.createElement('footer')

document.body.appendChild(footer)

const footerText = document.createElement('p')
footerText.className = 'footer footer-text'
footerText.innerHTML = 'Diseñado por <span class="footer-span">Àlex Meléndez Centeno</span>'

const footerLinksContainer = document.createElement('div')
footerLinksContainer.className = 'footer footer-links-container'

// GENERATE HTML
footer.appendChild(footerText)
footer.appendChild(footerLinksContainer)

addLink('linkedin2')
addLink('github2')