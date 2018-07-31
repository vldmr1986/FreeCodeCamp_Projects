import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Editor from '../Editor/Editor.jsx';
import Preview from '../Preview/Preview.jsx';
import example from './example';
import './App.css';

class App extends Component {
  state = {
      input: example
    };

    changeInput = (evt) => {
      const value = evt.target.value;
      this.setState({
        input: value
      });
    }

    

  render() {
    
    return (
      <div className="App">
        <Editor header="Editor" input={this.state.input} handleChange = {this.changeInput}/>
        {/* < ReactMarkdown source = {this.state.input}/>, <Preview / > */}
        <Preview header = "Preview" text = {this.state.input} />
      </div>
    );
  }
}

export default App;
