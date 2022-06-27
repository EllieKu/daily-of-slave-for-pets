// import logo from './logo.svg';
import './App.css';
import React from "react";
import PetList from './pages/PetList';

// TODO add router
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           鏟屎官的日常
//         </p>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <PetList/>
  )
}

export default App;
