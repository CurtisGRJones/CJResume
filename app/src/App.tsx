import { useEffect, useState, createContext } from 'react';
import { ConfigControler } from './controlers/ConfigControler';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Spinner } from './components';
import { Home, Page404, Calculator, Contact, Resume } from './pages';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  const configControler = new ConfigControler()
  let [config, setConfig] = useState({})
  // TODO find way to make this more global

  useEffect(() => {
    setTimeout(function(){
      document.querySelectorAll('.preload').forEach( element => {
        element.classList.remove('preload')
      } )
    },500);
    
  }, [])

  useEffect(() => {
    const getConfig = async () => {
      // if loading takes > 250 ms show spinner
      // if spinner shows, make sure it shows for at least 1 second
      setConfig(await configControler.getConfig())
    }

    getConfig().catch((e) => {
      console.log(e)
    })
    
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path='/spinner' element={<Spinner />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
