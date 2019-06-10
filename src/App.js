import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  }
  initValues(){
    return {
      preference: 'tabs',
      newsletter: true
    }
  }
  render() {
    return <RegisterForm 
             onSubmit={this.submit} 
             initialValues={this.initValues()}
           />;
  }
}

export default App;
