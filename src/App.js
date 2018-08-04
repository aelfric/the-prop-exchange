import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import MaterialIcon from 'material-icons-react';


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const plays = [
  "Our Town",
  "Hamlet",
  "Death of a Salesman",
  "The King and I",
  "The Pirates of Penzence"
]

function Card(props){
  return <div className="col s12 m6 l3"><div className="card">
  <div className="card-image">
    <img src="http://via.placeholder.com/350x350" />
    <span className="card-title">Prop Title</span>
    <a class="btn-floating  halfway-fab btn-large waves-effect waves-light yellow darken-4:q"><MaterialIcon icon="person"/></a>

  </div>
  <div className="card-content">
    <p>I am a paper prop made with care for a specific show.  I can potentially be re-used if you are doing the
      same show or something else from a similar time period.</p>
  </div>
  <div className="card-content">
    <div class="chip"><a href="#">{plays[Math.floor(Math.random() * plays.length)]}</a></div>
  </div>
  <div class="card-action">
          <a href="#"><MaterialIcon icon="bookmark" /></a>
          <a href="#"><MaterialIcon icon="file_download" /></a>
          <a href="#"><MaterialIcon icon="expand_more" /></a>
        </div>
</div></div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
    <div className="nav-wrapper  purple darken-4">
      <a href="#" className="brand-logo center">The Paper Prop Exchange</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Shows</a></li>
        <li><a href="#">Props</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </nav>
      <div className="container">
      <div className="row">
      <div className="col s12">
      <h1>Comming Soon…Maybe.</h1>
      </div>
      </div>
        <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
      <ul className="pagination">
    <li className="disabled"><a href="#!"><MaterialIcon icon="chevron_left"/></a></li>
    <li className="active"><a href="#!">1</a></li>
    <li className="waves-effect"><a href="#!">2</a></li>
    <li className="waves-effect"><a href="#!">3</a></li>
    <li className="waves-effect"><a href="#!">4</a></li>
    <li className="waves-effect"><a href="#!">5</a></li>
    <li className="waves-effect"><a href="#!"><MaterialIcon icon="chevron_right"/></a></li>
  </ul>
      </div>
    );
  }
}

export default App;
