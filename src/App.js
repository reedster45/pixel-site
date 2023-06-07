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
        <p>- software developer -</p>
      </div>
      

      <div className="center">
        <p className="heading">summary</p>
        <p className="summary">I'm Reed Tyhuis, a results-driven computer science graduate with a strong passion htmlFor software development.
           Equipped with a solid foundation in programming languages like Java, Python, JavaScript, and C/C++, I possess 
           expertise in data structures, algorithms, and system design principles. With hands-on experience in web development 
           using HTML, CSS, React, Node.js, and RESTful APIs, I excel in creating dynamic and interactive websites. My proficiency 
           extends to database management, utilizing SQL, Oracle, and MongoDB htmlFor efficient data storage and retrieval. Throughout 
           my career, I have demonstrated adaptability through diverse roles in customer service and IT support, while also 
           contributing to exciting projects such as developing a multiplayer game, creating dynamic websites, and implementing 
           machine learning techniques htmlFor stock price prediction. With a commitment to excellence and a drive to contribute to 
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
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/java.png")} alt="Java"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/python.png")} alt="Python"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/c.png")} alt="C"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/c++.png")} alt="C++"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/c#.png")} alt="C#"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/swift.png")} alt="Swift"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/ruby.png")} alt="Ruby"/></div>
            <div className="skills-grid-item"><img src={require("./imgs/programming-languages/haskell.png")} alt="Ruby"/></div>
          </div>
        </div>

        <p className="skills-header">web development</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item">Javascript</div>
            <div className="skills-grid-item">PHP</div>
            <div className="skills-grid-item">HTML</div>
            <div className="skills-grid-item">CSS</div>
            <div className="skills-grid-item">React</div>
            <div className="skills-grid-item">Angular</div>
            <div className="skills-grid-item">Express</div>
            <div className="skills-grid-item">Typescript</div>
          </div>
        </div>

        <p className="skills-header">Database management</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item">SQL/mySQL</div>
            <div className="skills-grid-item">MongoDB</div>
            <div className="skills-grid-item">Oracle</div>
            <div className="skills-grid-item">SQLite</div>
          </div>
        </div>

        <p className="skills-header">tools</p>
        <div className="skills-grid-container">
          <div className="skills-grid">
            <div className="skills-grid-item"><img className="github" src={require("./imgs/tools/github-dark.png")} alt="git/github"/></div>
            <div className="skills-grid-item">MS office</div>
            <div className="skills-grid-item">Linux</div>
            <div className="skills-grid-item">Bash/Shell</div>
            <div className="skills-grid-item">QNX</div>
            <div className="skills-grid-item">UNIX</div>
            <div className="skills-grid-item">Mac OS</div>
            <div className="skills-grid-item">Visual Studio</div>
          </div>
        </div>
      </div>
      {/* end of skills grid */}

      <div className="center">
        <p className="heading">projects</p>
        <div className="grid-container">
          <div className="grid">
            <div className="grid-item">
              <p><a className="project-link" href="https://github.com/reedster45/pacemaker_simulator" target="_blank" rel="noopener noreferrer">
                <img src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="pacemaker simulator"/>
              </a>
              <br></br>pacemaker simulator</p>
            </div>

            <div className="grid-item">
              <p><a className="project-link" href="https://github.com/reedster45/plant_game" target="_blank" rel="noopener noreferrer">
                <img src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="unity rpg game"/>
              </a>
              <br></br>Unity RPG Game</p>
            </div>

            <div className="grid-item">
              <p><a className="project-link" href="https://github.com/reedster45/retro_game_site" target="_blank" rel="noopener noreferrer">
                <img src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="retro game site"/>
              </a>
              <br></br>Retro Game Site</p>
            </div>

            <div className="grid-item">
              <p><a className="project-link" href="https://github.com/reedster45/word_predictor_python" target="_blank" rel="noopener noreferrer">
                <img src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="word prediction"/>
              </a>
              <br></br>Word Prediction</p>
            </div>

            <div className="grid-item">
              <p><a className="project-link" href="https://github.com/reedster45/stock_prediction_python" target="_blank" rel="noopener noreferrer">
                <img src={require("./imgs/files/chest-closed.png")} 
                onMouseOver={e => (e.currentTarget.src = require("./imgs/files/chest-open.png"))} 
                onMouseOut={e => (e.currentTarget.src = require("./imgs/files/chest-closed.png"))} 
                alt="stock price prediction"/>
              </a>
              <br></br>Stock Price Prediction</p>
            </div>

            <div className="grid-item">
            <p><img src={require("./imgs/files/chest-closed.png")} alt="in progress..."/>
            <br></br>More In Progress...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="center">
        <p className="heading">contact</p>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">send</button>
            </div>
          </form>
      </div>

      <div className="footer">
        <div className="footer-grid-container">
          <div className="footer-grid">

            <div className="footer-grid-item">
              <a className="footer-link" href="https://www.linkedin.com/in/reed-tyhuis453477/" target="_blank" rel="noopener noreferrer">
                <img src={require("./imgs/tools/linkedin.png")} alt="linkedin"/>
              </a>
            </div>

            <div className="footer-grid-item">
              <a className="footer-link" href="https://github.com/reedster45" target="_blank" rel="noopener noreferrer">
                <img className="github" src={require("./imgs/tools/github-dark.png")} alt="git/github"/>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default App;