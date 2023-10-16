import { Template } from './pages/template/Template';
import { useEffect, useState } from 'react';
import { ConfigControler } from './controlers/ConfigControler';
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
    }

    getConfig().catch((e) => {
      console.log(e)
    })
    
  }, [])
  return (
    <Template config={config} />
  );
}

export default App;
