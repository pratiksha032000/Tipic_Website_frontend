import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import Contact from './Pages/CONTACT.js';
import ABOUT from './Pages/ABOUT.js';
import HOME from './Pages/HOME.js';
import SERVICES from './Pages/SERVICES.js';
import NAVBAR from './Componant/NAVBAR.js';
import Footer from './Componant/Footer.js';
import COSTOM from './Pages/COSTOM.js';
import SoftOpt from './Pages/Softopt.js';
import Sfttest from './Pages/Sfttest.js';
import ScrollToTop from './Componant/ScrollToTop.js';
import PrivacyPolicy from './Pages/PrivacyPolicy.js';
import TermsAndConditions from './Pages/Terms.js';


function App() {
  return (
   <>
   <BrowserRouter>
   <ScrollToTop/>
   <NAVBAR/>
   <Routes>
    <Route path='/' element={<HOME/>} />
    <Route path='/Services' element={<SERVICES/>} />
    <Route path='/About' element={<ABOUT/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Costom' element={<COSTOM/>} />
    <Route path='/softopt' element={<SoftOpt />}></Route>
    <Route path='/sfttest' element={<Sfttest />}></Route>
    <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
    <Route path='/TermsandConditions' element={<TermsAndConditions/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>

  
   </>
  
  );
}

export default App;
