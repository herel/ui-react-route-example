import React, { Component } from 'react';
import { UIRouter,UIView, pushStateLocationPlugin} from '@uirouter/react';
import Home from './screens/home/Home';
import About from './screens/about/About';
import Layout from './Layout';

const states = [
  {
    name : 'layout',
    component : Layout
  },
  {
    name : 'layout.home',
    url  : '/',
    component : Home
  },{
    name : 'layout.about',
    url  : '/about',
    component : About
  }
]

const plugins = [
  pushStateLocationPlugin
];

class App extends Component {
  render() {
    return (
      <UIRouter plugins={plugins} states={states}>
        <UIView />
      </UIRouter>
    );
  }
}

export default App;
