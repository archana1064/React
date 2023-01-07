import React from 'react';
import EmpDetails from './EmpDetails';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { BrowserRouter,Route,Routes }from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import Delete from  './Delete';
import Search from './Search';
function Home(props) {
    return (
      
             <BrowserRouter>
                <Routes>
                    <Route path = "/" element={<EmpDetails />} />
                    <Route path = "/create" element={<Add />} />
                    <Route path = "/edit" element={<Edit />} />
                    
                    <Route path = "/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
       
    );
}

export default Home;


/*{

        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
}*/