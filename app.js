(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

})();


// Select the button and the main text element
const lakeHomeBtn = document.getElementById('lake-home-btn');
const mainText = document.getElementById('main-text');
//text projects
const mainTextDescription1 = document.getElementById('main-text-description1');
const mainTextDescription2 = document.getElementById('main-text-description2');
const mainTextDescription3 = document.getElementById('main-text-description3');
const mainTextDescription4 = document.getElementById('main-text-description4');

//img projects
const mainImg = document.getElementById('main-img');

// Add an event listener to the button for the lake home
lakeHomeBtn.addEventListener('click', () => {
  mainText.textContent = 'THE LAKE HOME';
  mainTextDescription1.textContent = 'The Lake Home website was designed to showcase an exclusive collection of apartments in a premium lakeside community. Built to reflect the elegance and high-end lifestyle offered by The Lake Home, the website serves as both an informational platform and a marketing tool.';
  mainTextDescription2.textContent = 'One of the standout features of the website is its focus on showcasing the unique selling points of The Lake Home apartments. With a detailed presentation of the 81 available units, the website prominently features the remaining 14 apartments, creating a sense of urgency and exclusivity. Each listing highlights premium facilities, upscale amenities, and the picturesque location, helping visitors understand the unparalleled lifestyle offered by this residential complex.';
  mainTextDescription3.textContent = 'The website is optimized not only for aesthetics but also for functionality. Built to cater to both desktop and mobile users, it ensures smooth navigation and quick loading times, enhancing the overall user experience. Strategic calls to action encourage visitors to inquire about availability, schedule tours, or connect directly with the sales team, driving conversions and interest effectively.';
  mainTextDescription4.textContent = 'With a focus on elegance and performance, The Lake Home website serves as an exemplary digital representation of the brand. It reflects the brand’s core values of exclusivity and luxury while maintaining a user-centric approach. By combining advanced technology with creative design, this project showcases my ability to deliver high-quality, custom-tailored web solutions that align perfectly with client objectives.';

  mainImg.src = 'img/thelakehome.png'; // Update the image source


  // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });
  
});

//forwork app 

const formworkappbtn = document.getElementById('formwork-app-btn');
// Add an event listener to the button for the lake home
formworkappbtn.addEventListener('click', () => {
    mainText.textContent = 'Formwork Recycling ';
    mainTextDescription1.textContent = 'Designed and implemented a robust full-stack web application using Angular for the frontend and Django for the backend, creating a seamless platform for users to log in, register, and manage account recovery through secure email confirmation workflows. This project demonstrates expertise in building scalable, user-friendly interfaces and integrating secure authentication systems with advanced backend frameworks.';
    mainTextDescription2.textContent = 'Engineered a dynamic platform allowing users to list, browse, and manage formwork for recycling, ensuring efficient communication between buyers and sellers. Integrated real-time notifications for user activity, leveraging Angular s reactive features and Django s REST framework for optimal data handling and user interaction.';
    mainTextDescription3.textContent = 'Deployed the application on AWS, ensuring high availability, scalability, and reliability. Implemented a robust manual update pipeline using GitHub, showcasing proficiency in version control and maintaining server-side updates, aligning with industry best practices for deployment and maintenance.';
    mainTextDescription4.textContent = 'Delivered a user-centric, responsive application designed to function seamlessly across devices, emphasizing intuitive navigation and efficient data handling. By combining Angular s state management with Django s API development, this project highlights expertise in creating end-to-end solutions that prioritize performance, security, and maintainability.';
  
    mainImg.src = 'img/formwork.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});

const taskappbtn = document.getElementById('task-app-btn');
// Add an event listener to the button for the lake home
taskappbtn.addEventListener('click', () => {
    mainText.textContent = 'Task Management Application';
    mainTextDescription1.textContent = 'Developed a full-stack Task Management application using Angular (frontend) and Django (backend). The platform allows users to log in and perform role-specific actions, such as creating accounts for team members (admin) and assigning tasks. Demonstrated expertise in implementing secure authentication and managing permissions with fine-grained control, ensuring a scalable and secure user experience.';    
    mainTextDescription2.textContent = 'One of the standout features of the website is its focus on showcasing the unique selling points of The Lake Home apartments. With a detailed presentation of the 81 available units, the website prominently features the remaining 14 apartments, creating a sense of urgency and exclusivity. Each listing highlights premium facilities, upscale amenities, and the picturesque location, helping visitors understand the unparalleled lifestyle offered by this residential complex.';
    mainTextDescription2.textContent = 'Built a comprehensive system for assigning and managing tasks. Features include the ability to assign tasks to team members, attach photo proof for task completion, and approve or reassign tasks with updated descriptions. Angular s reactive forms and Django REST framework were used to ensure seamless task tracking and feedback workflows.';
    mainTextDescription3.textContent = 'Integrated real-time notifications to alert users of new tasks or task completion, enhancing team communication and productivity. Implemented an organizational chart feature to visualize team structure, leveraging Angular for dynamic rendering and Django for efficient backend data processing.';
    mainTextDescription4.textContent = 'Hosted the application on AWS to ensure high availability and scalability. Employed GitHub for version control and manual updates via server pulls, demonstrating proficiency in maintaining and deploying full-stack applications in production environments. Focused on delivering a user-friendly interface while maintaining robust backend functionality.';
      
    mainImg.src = 'img/taskapp.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});








(function () {
    [...document.querySelectorAll(".goback")].forEach(button => {
        button.addEventListener("click", function() {
            // Remove 'active-btn' from the current active control
            document.querySelector(".active-btn").classList.remove("active-btn");
            
            // Make the 'portfolio' control the active-btn
            const portfolioControl = document.querySelector('.control[data-id="portfolio"]');
            portfolioControl.classList.add("active-btn");

            // Switch active section to portfolio
            document.querySelector(".active").classList.remove("active");
            document.getElementById("portfolio").classList.add("active");

            // Remove 'deactive' class from all .control elements
            document.querySelectorAll(".controls .control").forEach(control => {
                control.classList.remove("deactive");
            });
        });
    });


})();

