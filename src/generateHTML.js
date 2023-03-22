
// Function to Generate HTML page
module.exports = templateData => {
  console.log(templateData);
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma-rtl.min.css">
  <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" data-auto-replace-svg="nest"></script>
  <link rel='stylesheet' href='./style.css'>
  <title>Team Profile Generator</title>
</head>
<body>
  <!-- Hero header section -->
  <header>
      <section class="hero is-primary">
          <div class="hero-body">
            <p class="title">
              Team Profile Generator
            </p>
            <p class="subtitle">
              A summary of current team members.
            </p>
          </div>
        </section>
  </header>
  <div>
  <!-- Team Member cards -->
  ${teamMemberCards(templateData)}
  </div>
</body>  
</html>
  `
};


  // Function to create Employee Card
  const addEmployee = employee => {
    return `
    <div class="card team-card employee-card">
      <div class="card-content" style="
      border-radius: .25rem;
      margin: 0.5em;
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
      max-width: auto;
      /* display: flex; */
      background-color: lightblue;">
      <div class="media">
        <div class="media-left">
        <i class="far fa-user-circle fa-3x"></i>
        </div>
        <div class="media-content">
          <p class="title is-4 employee-name" style="margin-left:20px">${employee.name}</p>
          <p class="subtitle is-6 employee-title" style="margin-left:20px">${employee.role}</p>
        </div>
      </div>
      <div class="content">
        <p class='id'>ID: ${employee.id}</p>
        <p class='email'>Email: <a href="mailto:${employee.email}">${employee.email}</p>
      </div>
    </div>
  </div> 
  `
  
  };
  
  // Function to create Manager Card
  const addManager = manager => {
     return `
      <div class="card team-card manager-card">
      <div class="card-content" style="
        border-radius: .25rem;
        margin: 0.5em;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
        max-width: auto;
        /* display: flex; */
        background-color: lightblue;">
    <div class="media">
      <div class="media-left">
      <i class="far fa-user-circle fa-3x"></i>
      </div>
      <div class="media-content">
        <p class="title is-4 manager-name" style="margin-left:20px">${manager.name}</p>
        <p class="subtitle is-6 manager-title" style="margin-left:20px">${manager.role}</p>
      </div>
    </div>
    <div class="content">
      <p class='id'>ID: ${manager.id}</p>
      <p class='officeNumber'>Office Number: ${manager.officeNumber}</p>
      <p class='email'>Email: <a href="mailto:${manager.email}">${manager.email}</p>
    </div>
    </div>
    </div> 
    `
  
  };
   
  
  // Function to create Engineer Card
  const addEngineer = engineer => {
    return `
    <div class="card team-card engineer-card">
    <div class="card-content" style="
    border-radius: .25rem;
    margin: 0.5em;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    max-width: auto;
    /* display: flex; */
    background-color: lightblue;">
    <div class="media">
      <div class="media-left">
      <i class="far fa-user-circle fa-3x"></i>
      </div>
      <div class="media-content">
        <p class="title is-4 engineer-name" style="margin-left:20px">${engineer.name}</p>
        <p class="subtitle is-6 engineer-title" style="margin-left:20px">${engineer.role}</p>
      </div>
    </div>
    <div class="content">
      <p class='id'>ID: ${engineer.id}</p>
      <p class='gitHub'>GitHub: ${engineer.gitHub}</p>
      <p class='email'>Email: <a href="mailto:${engineer.email}">${engineer.email}</p>
    </div>
  </div>
  </div> 
  `
  
  };
  
  // Function to create Intern Card
  const addIntern = intern => { 
    return `
    <div class="card team-card intern-card">
      <div class="card-content" style="
      border-radius: .25rem;
      margin: 0.5em;
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
      max-width: auto;
      /* display: flex; */
      background-color: lightblue;">
      <div class="media">
        <div class="media-left">
        <i class="far fa-user-circle fa-3x"></i>
        </div>
        <div class="media-content">
          <p class="title is-4 intern-name" style="margin-left:20px">${intern.name}</p>
          <p class="subtitle is-6 intern-title" style="margin-left:20px">${intern.role}</p>
        </div>
      </div>
      <div class="content">
        <p class='id'>ID: ${intern.id}</p>
        <p class='school'>School: ${intern.school}</p>
        <p class='email'>Email: <a href="mailto:${intern.email}">${intern.email}</p>
      </div>
    </div>
  </div> 
  `
  
  };

// Create Team Member cards
const teamMemberCards = (templateData) => {
  let output = '';
  templateData.forEach((member) => {
    console.log('rendering member', member.role);
    switch(member.role) {
      case 'Manager': 
        output += addManager(member);
        return;
      case 'Engineer':
        output += addEngineer(member);
          return;
      case 'Intern':
        output += addIntern(member);
          return;
      case 'Employee':
        output += addEmployee(member);
          break;
    }
  })
  return output;
}
