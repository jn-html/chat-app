import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Contact name="Jack" avatar="https://randomuser.me/api/portraits/men/90.jpg" online={true}/>
      <Contact name="Jacques" avatar="https://randomuser.me/api/portraits/men/5.jpg"/>
      <Contact name="Jackie"avatar="https://randomuser.me/api/portraits/men/25.jpg"/>
      
    </div>
  );
}

export default App;
