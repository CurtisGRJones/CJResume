import { useEffect, useState } from 'react';
import { ConfigControler } from './controlers/ConfigControler';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components';
import { Home, Page404, Calculator } from './pages';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const configControler = new ConfigControler()
  let [config, setConfig] = useState({})

  useEffect(() => {
    const getConfig = async () => {
      setConfig(await configControler.getConfig())
      console.log(config)
    }

    getConfig().catch((e) => {
      console.log(e)
    })
    
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        {
          /*
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          */
        }
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
