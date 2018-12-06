// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Person from "./Person/Person";
// import Api from "./Api/Api";
// import Menu from "./Menu/Menu";
// import 'semantic-ui-css/semantic.min.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";

// class App extends Component {
//   render() {
//     // const test=()=>{
//     //   return(
//     //       <div>
//     //         test
//     //       </div>
//     //   )
//     // }
//       function Home() {
//           return (
//               <div>
//                   <h2>Home</h2>
//               </div>
//           );
//       }

//       function About() {
//           return (
//               <div>
//                   <h2>About</h2>
//               </div>
//           );
//       }
//     return (
//       <div className="App">
//           <Router>
//               <div>
//                   <Menu />
//                   <Route exact path="/" component={Home} />
//                   <Route path="/about" component={About} />
//                   {/*<Route path="/test" component={()=><Person  name={"harry"}/>} />*/}
//                   {/*this works but do not do it it reduce performance*/}
//                   <Route path={"/test"} render={(props)=><Person name={"Rasmina"}/>}/>
//                   <Route path={"/api"} component={Api}/>
//               </div>

//           </Router>

//         <h1>Here will be footer</h1>
//           {/*<p>This is really working</p>*/}
//           {/*<Person name={"harry"}/>*/}
//           {/*<Person name={"sushmita"}/>*/}
//           {/*<Person name={"manoj"}/>*/}
//           {/*<Person>Wow children</Person>*/}
//       </div>
//     );
//   //   return React.createElement('div',{className:"App"},React.createElement("h1",null,"This is basic react project"));

//     }
// }

// export default App;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './ContraMusic/Contramusic';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Contact from './Contact/contact';
import About from './About/About';
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Header, Image } from 'semantic-ui-react';
import Api from './Api/Api';
import ToDO from "./pages/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


class App extends Component {
  render() {
    const Application=()=>(
    <div>
        <Header as='h2'>
             <Image circular src={require('./images/download.jpeg')} /> Welcome
        </Header>
      
      <Menu/>
    </div>
    )
    return (
      <ReduxProvider store={reduxStore}>

      <Router>
      <div className="App">
      
      <Route path="" component={Application} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path ="/api" component={Api}/>

      <Route path="/contact-us" component={Contact} />
      <ToDO/>
      </div>
      </Router>
      </ReduxProvider>
    );
  }
}

export default App;



