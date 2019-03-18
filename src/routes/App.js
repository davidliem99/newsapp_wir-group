import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Technology from '../views/Technology';
import Entertainment from '../views/Entertainment';
import Business from '../views/Business';
import Health from '../views/Health';
import Sports from '../views/Sports';
import PostDetail from '../views/PostDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header navBrand={'Wir Group'} />
        <div>
        <Route exact path="/" component={Technology} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/business" component={Business} />
        <Route path="/health" component={Health} />
        <Route path="/sports" component={Sports} />
        <Route path="/detailpost" component={PostDetail} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
