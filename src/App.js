import logo from './logo.svg';
import './App.css';
import './MyClassComponent';

// import MyClassComponent from './MyClassComponent';
// import Test from './Test';
// import FirstFunc from './FirstFunc';
// import Counter from './Counter';
// import Text from './Text';
// import NameTest from './NameTest';
// import Expense1 from './Expense1';
 // import Car from './Car';
 // import Effect from './Effect';
//import FunctionComp from './FunctionComp';
import Hobby from './Hobby';
//import Hobbydemo from './Hobbydemo';
//import FunctionUser from './FunctionUser';
//import RefHook from './RefHook';
import Login from './Practise/Login';
import LoginSt from './Practise/LoginSt';
import LoginTest from './Practise/LoginTest';
import FunctionComp from './FunctionComp';
import Greet from './Greet';
import Welcome from './Welcome';
import Message from './Message';
import RctHook from './RctHook';
import FirstuseState from './FirstuseState';
import Layout from "./pages/Layout";
//import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Home from "./CRUD/Home"
import { BrowserRouter,Route,Routes }from 'react-router-dom';




function App() {
  return (    <div className="App"> 

<Home />

    </div>
);
}

  
   {/* 
   <Login />
<LoginSt />
<LoginTest/>
       <Home />
       <FirstuseState color="Red"/>
    <FirstuseState color="Red"/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     </div>
   <div className="App"> 
     <FirstuseState color="Red"/>
      <Welcome favcol="yellow"/>
   <Greet name ="Archana"  lName="Kumari" /><Message /> 
  <Welcome favcol="yellow"/>
 <Greet name ="Archana"  lName="Kumari"> 
    <p1>This is chlidren</p1>
    <p2>This is chlidren</p2>
    <input type='text'></input>
    </Greet>

    <Greet name ="Raman" lName="Kumar"/> 
    <Greet name ="Vihan" lName="Roy" /> 
    <Greet name ="Tanay" lName="Roy"/> 
    <Welcome favcol="yellow"/>
    <Welcome name ="Raman" lName="Kumar"/>
    <Welcome name ="Vihan" lName="Roy"/>
    <Welcome name ="Tanay" lName="Roy"/> 
   <h1>Hello World</h1>
    <FunctionComp/>
  <Hobby/>*/ }

  


export default App;
