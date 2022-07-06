import { useEffect, useState } from 'react';
import {getTestData} from '../../api';
import './App.scss';

function App() {
  const [testData, setTestData] = useState('Before API call');
  
  useEffect(() => {
    (async () =>  {
      const response = await getTestData()
      setTestData(response.data);
    })();
  }, []);

  return (
    <div className="app">
      <div className='header'>
        Starter Kit
      </div>
        {testData}
    </div>
  );
}

export default App;
