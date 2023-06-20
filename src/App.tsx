import React from 'react';
import './App.css';
import Login from './components/Login';

const App: React.FC = () => { //The App component is defined as a functional component using the React.FC
  return (
    <div className="app-container"> {/*container for the component's contents */}
      <h1>Sign In</h1>
      <Login /> {/* Render the Login component */}
    </div>
  );
};

export default App;