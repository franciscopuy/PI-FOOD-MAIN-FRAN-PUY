
 import './App.css';
 import { Route } from 'react-router-dom';
 import { BrowserRouter, Switch } from 'react-router-dom';
 import { NavBar, Landing, Home, Form, Detail, NotFound } from "./components/";

 function App() {
   return (
     <BrowserRouter>
       <div className="App">
         <Switch>
           <Route exact path="/" component={Landing} />
           <Route path="/" render={({ location }) => {if (location.pathname !== '/') {
                 return (
                   <>
                     <NavBar />
                     <Route exact path="/home" component={Home} />
                     <Route exact path="/dogs/:id" component={Detail} />
                     <Route exact path="/form" component={Form} />
                     <Route exact path="/form/:id" component={Form} />
                   </>
                 );
               }
             }}
           />
         </Switch>
       </div>
     </BrowserRouter>
   );
 }

 export default App;






//  import "./App.css";
//  import { useLocation, Route, BrowserRouter } from "react-router-dom"; 
//  import { NavBar, Landing, Home, Form, Detail, NotFound } from "./components/"
//  const App = () => {
//    const location = useLocation()
//    return (
//      <BrowserRouter>
//        <div className="App">
//          {location.pathname !== "/" && <NavBar />}
//          <Route path="/" element={<Landing />} />
//          <Route path="/home" element={<Home />} />
//          <Route path="/form" element={<Form />} />
//          <Route path="/detail/:id" element={<Detail />} />
//          {/* <Route path="/about" element={<About />} /> */}
//          <Route path="*" element={<NotFound />} />
//        </div>
//      </BrowserRouter>
//    );
//  }
//  export default App;