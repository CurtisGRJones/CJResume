import { useEffect, useState } from 'react';
import { ConfigControler } from './controlers/ConfigControler';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Spinner } from './components';
import { Home, Page404, Calculator } from './pages';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const configControler = new ConfigControler()
  let [config, setConfig] = useState({})
  // TODO find way to make this more global
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const getConfig = async () => {
      setConfig(await configControler.getConfig())
      setLoading(false)
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
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {loading && <Spinner />}
    </>
  );
}

export default App;
