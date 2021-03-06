import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Rafael Bastiani</h1>
    </header>
    <div className="content">
      <nav className="App-side">
        <div className="profile-photo-container">
          <img
            alt=""
            className="profile-photo"
            src="https://s3-sa-east-1.amazonaws.com/fotos-bastiani/avatar2.jpg"
          />
          <br />
          <b>Rafael Campos de Bastiani</b>
        </div>
        <div>
          <i className="fas fa-envelope" /> rafacdb@gmail.com<br />
          <i className="fab fa-telegram-plane" /> @rafacdb
        </div>
        <ul className="ul-no-bullet">
          <li>
            <a href="https://github.com/Bastiani" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bastiani/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin" /> Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rbastiani/" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-facebook-square" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/RBastiani" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-twitter" /> Twitter
            </a>
          </li>
        </ul>
      </nav>
      <article className="App-intro">
        Olá, sou o Rafael, desenvolvedor de software.<br />
        Atuo na área a 14 anos.<br />
        <h2>Habilidades</h2>
        <ul className="lists">
          <li>Delphi</li>
          <li>JavaScript(ES6, ES7)</li>
          <li>HTML/CSS</li>
          <li>RubyOnRails</li>
          <li>React/ReactNative</li>
          <li>NodeJS</li>
          <li>GraphQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <h2>Palestras</h2>
        <ul className="lists">
          <li>
            <a href="http://meetup-graphql.surge.sh/#/" rel="noopener noreferrer" target="_blank">
              GraphQL
            </a>
            <br />
            <a
              href="https://www.meetup.com/pt-BR/Rede-Neural/events/246024897/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Meetup
            </a>
          </li>
        </ul>
        <h2>Projetos</h2>
        <ul className="lists">
          <li>RFDevCondomínios (RubyOnRails)</li>
          <li>
            <a href="https://bastiani.github.io/bah/" rel="noopener noreferrer" target="_blank">
              bah, React components
            </a>
          </li>
        </ul>
      </article>
    </div>
  </div>
);

export default App;
