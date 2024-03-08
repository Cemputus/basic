
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import AttendanceTracker from './AttendanceTracker';
// // import Navbar from './components/Navbar';

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Navbar />
// //         <Route path="/" exact component={Home} />
// //         <Route path="/attendance" component={AttendanceTracker} />
// //       </div>
// //     </Router>
// //   );
// // }

// // function Home() {
// //   return <h2>Home Page</h2>;
// // }

// // export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AttendanceTracker from './components/AttendanceTracker';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Route path="/" exact component={Home} />
//         <Route path="/attendance" component={AttendanceTracker} />
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home Page</h2>;
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceTracker from './components/AttendanceTracker';
import Navbar from './components/Navbar';

function App() {
const App = () => {
  return (
    <div>
      <Navbar />
      <AttendanceTracker />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

}

export default App;