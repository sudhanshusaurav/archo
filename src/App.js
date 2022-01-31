import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  const [appLoading, setAppLoading] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    setAppLoading(true);
    setTimeout(() => {
      setAppLoading(false)
    }, 3000);
  }, []);
  

  useEffect(() => {

    const stickyHeader = () => {
      setStickyHeader(true)
      document.querySelector('.header').classList.add('header-sticky')
    }

    const removeStickyHeader = () => {
      setStickyHeader(false)
      document.querySelector('.header').classList.remove('header-sticky')
    }
    
    const onPageScroll = () => {
      if (window.pageYOffset > 300) {
        stickyHeader() 
      }
      if(window.pageYOffset < 100){
        removeStickyHeader()
      }
    }
    window.addEventListener('scroll', onPageScroll)
  }, []);
  
  return (
    <div className={`app ${appLoading ? '' : 'app-loaded'}`}>
      <div className={`h-[100vh] ${appLoading ? 'overflow-hidden' : ''}`}>
      <Cursor/>
      <Header stickyHeader={stickyHeader}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </div>
      {appLoading && <span className="loader"></span>}
    </div>
  );
}

export default App;
