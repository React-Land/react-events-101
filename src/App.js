import React, { Component } from 'react';
import ShowAlert from './components/ShowAlert';
import ChangeInput from './components/ChangeInput';
import HoverBox from './components/HoverBox';
import SelectBoxes from './components/SelectBoxes';
import ResizeWindow from './components/ResizeWindow';

class App extends Component {

  render() {
    return (
      <div>
        <ResizeWindow />
      </div>
    );
  }
  
}

export default App;
