import React, { Component, Fragment } from 'react';
import Header from './Component/Header'
import Home from './Component/Home';
import Footer from './Component/Footer';
import './index.css';
import Card from './Component/Card';
class App extends Component {
  render(){
     return (
      <Fragment>
        {/* <div className="container">
          <div className="row">
            <Card authorName="Rishabh rijj" img="../assets/images/users/100_2.jpg" title=" - Software Developer" />
            <Card authorName="Shrikant" img="../assets/images/users/100_3.jpg" title="- Team-lead" />
          </div>
        </div>  */}
          <Header />
          <Home />
          <Footer />
      </Fragment>
    );
  }
 
}

export default App;
