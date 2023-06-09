import React from 'react';
import './App.css';

import Character from './Character';

const App = () => {
 
  return (
    <div id="container">
      <div id="fountain"></div>
      {/* <div><Character /></div> */}
      <div className="center">
        <div className="flex-container">

          <div className="torch-wrapper">
            <div className="torch-shadow-1"></div>
            <div className="torch-shadow-2"></div>
            <div className="torch-shadow-3"></div>
            <div className="torch-shadow-4"></div>
            <div className="torch-1"></div>
          </div>

          <div><p id="name-main">Reed Tyhuis</p></div>

          <div className="torch-wrapper">
            <div className="torch-shadow-1"></div>
            <div className="torch-shadow-2"></div>
            <div className="torch-shadow-3"></div>
            <div className="torch-shadow-4"></div>
            <div className="torch-2"></div>
          </div>

        </div>
        <p id="soft-dev-large">- software developer -</p>
        <p id="soft-dev-small">software developer</p>
      </div>
      

      <div className="center">
        <p className="heading">summary</p>
        <p className="summary">I'm Reed Tyhuis, a results-driven computer science graduate with a strong passion for software development.
           Equipped with a solid foundation in programming languages like Java, Python, JavaScript, and C/C++, I possess 
           expertise in data structures, algorithms, and system design principles. With hands-on experience in web development 
           using HTML, CSS, React, Node.js, and RESTful APIs, I excel in creating dynamic and interactive websites. My proficiency 
           extends to database management, utilizing SQL, Oracle, and MongoDB For efficient data storage and retrieval. Throughout 
           my career, I have demonstrated adaptability through diverse roles in customer service and IT support, while also 
           contributing to exciting projects such as developing a multiplayer game, creating dynamic websites, and implementing 
           machine learning techniques for stock price prediction. With a commitment to excellence and a drive to contribute to 
           cutting-edge projects, I am seeking software development or computer science roles where I can apply my expertise, create 
           innovative solutions, and make a significant impact in the field of software development.</p>
      </div>

      {/* skills grid */}
      {/* make logos 64x64 */}
      <div className="center">
        <p className="heading">skills</p>
        <p className="skills-header">programming languages</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/programming-languages/java.png")} alt="Java"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/python.png")} alt="Python"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/c.png")} alt="C"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/c++.png")} alt="C++"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/c#.png")} alt="C#"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/swift.png")} alt="Swift"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/ruby.png")} alt="Ruby"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/programming-languages/haskell.png")} alt="Ruby"/></div>
          </div>
        </div>

        <p className="skills-header">web development</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/web-development/javascript.png")} alt="JavaScript"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/web-development/php.png")} alt="PHP"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/web-development/html.png")} alt="HTML"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/web-development/css.png")} alt="CSS"/></div>
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/web-development/react.png")} alt="React"/></div>
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/web-development/angular.png")} alt="Angular"/></div>
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/web-development/node.png")} alt="Node"/></div>
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/web-development/npm.png")} alt="NPM"/></div>
          </div>
        </div>

        <p className="skills-header">Database management</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/database-management/mongodb.png")} alt="MongoDB"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/database-management/sql.png")} alt="SQL"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/database-management/oracle.png")} alt="Oracle"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/database-management/sqlite.png")} alt="SQLite"/></div>
          </div>
        </div>

        <p className="skills-header">tools</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/tools/github-dark.png")} alt="git/github"/></div>
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/tools/windows.png")} alt="MS Office"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/tools/linux.png")} alt="Linux"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/tools/bash.png")} alt="BASH"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/tools/qnx.png")} alt="QNX"/></div>
            <div className="skills-grid-item img-shadow github-resize"><img src={require("./imgs/tools/unity.png")} alt="UNITY"/></div>
            <div className="skills-grid-item img-shadow"><img src={require("./imgs/tools/macos.png")} alt="Mac OS"/></div>
            <div className="skills-grid-item img-shadow skill-resize"><img src={require("./imgs/tools/visual-studio.png")} alt="Visual Studio"/></div>
          </div>
        </div>
      </div>
      {/* end of skills grid */}

      <div className="center">
        <p className="heading">projects</p>
        <div className="grid-container">
          <div className="grid">
            <div className="grid-item">
              <a className="project-link" href="https://github.com/reedster45/pacemaker_simulator" target="_blank" rel="noopener noreferrer">
                <img className="img-shadow" src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="pacemaker simulator"/>
              </a>
              <p>pacemaker simulator</p>
            </div>

            <div className="grid-item">
              <a className="project-link" href="https://github.com/reedster45/plant_game" target="_blank" rel="noopener noreferrer">
                <img className="img-shadow" src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="unity rpg game"/>
              </a>
              <p>Unity RPG Game</p>
            </div>

            <div className="grid-item">
              <a className="project-link" href="https://github.com/reedster45/retro_game_site" target="_blank" rel="noopener noreferrer">
                <img className="img-shadow" src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="retro game site"/>
              </a>
              <p>Retro Game Site</p>
            </div>

            <div className="grid-item">
              <a className="project-link" href="https://github.com/reedster45/word_predictor_python" target="_blank" rel="noopener noreferrer">
                <img className="img-shadow" src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="word prediction"/>
              </a>
              <p>Word Prediction</p>
            </div>

            <div className="grid-item">
              <a className="project-link" href="https://github.com/reedster45/stock_prediction_python" target="_blank" rel="noopener noreferrer">
                <img className="img-shadow" src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="stock price prediction"/>
              </a>
              <p>Stock Price Prediction</p>
            </div>

            <div className="grid-item">
            <img className="img-shadow" src={require("./imgs/files/chest-closed.png")} alt="in progress..."/>
            <p>More In Progress...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="center">
        <p className="heading">contact</p>
          <form action="https://public.herotofu.com/v1/65a1ad40-06f6-11ee-b0a7-9f000c4c1540" method="post" acceptCharset="UTF-8">
            <div className="form-group img-shadow">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="Name" required/>
            </div>
            <div className="form-group img-shadow">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="Email" required/>
            </div>
            <div className="form-group img-shadow">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject"/>
            </div>
            <div className="form-group img-shadow">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="Message" required></textarea>
            </div>
            <div className="form-group img-shadow">
              <button type="submit">send</button>
            </div>
            <div id="gotcha" aria-hidden="true">
              <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
            </div>
          </form>
      </div>

      <div className="footer">
        <div className="footer-grid-container">
          <div className="footer-grid">

            <div className="footer-grid-item">
              <a className="footer-link" href="https://www.linkedin.com/in/reed-tyhuis453477/" target="_blank" rel="noopener noreferrer">
                <img className="img-shadow" src={require("./imgs/tools/linkedin.png")} alt="linkedin"/>
              </a>
            </div>

            <div className="footer-grid-item">
              <a className="footer-link" href="https://github.com/reedster45" target="_blank" rel="noopener noreferrer">
                <img className="github img-shadow" src={require("./imgs/tools/github-dark.png")} alt="git/github"/>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default App;