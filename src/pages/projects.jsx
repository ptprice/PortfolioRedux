export default function Projects() {
    return (
      <div className="projectsTab">
        <h1>Projects Page</h1>
        <div className="projectMainCard">
          <a
            href="https://ptprice.github.io/Payroll-Manager-Site/"
            target="_blank"
          >
            <h3>Project 1</h3>
          </a>
          <p>
            Project 1 is a website I created for a local business. It is a
            simple, clean design that can be used by the payroll manager.
          </p>
          <img className="mainProjectImage" src="" alt="" />

        </div>

       
        <div className="subProject">
          
          <div className="project project2">
            <a href="https://ptprice.github.io/5-Day-Weather/" target="_blank">
              <h3>Project 2</h3>
            </a>
            <p>
              Project 2 is a five day weather forecast website I created. It can
              be used to search for the weather in any city.
            </p>
          </div>

          
          <div className="project project3">
            <a
              href="https://ptprice.github.io/Simple-Task-Board/"
              target="_blank"
            >
              <h3>Project 3</h3>
            </a>
            <p>
              Project 3 is a task board website I created. It is a simple, site
              where you can add, edit, and delete tasks.
            </p>
          </div>
      </div>
      </div>
    )
  }