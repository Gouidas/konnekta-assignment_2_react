import React from 'react';
import Select from './components/select';
import './lib/scss/main.scss';
import { placeholder, values } from './lib/constants'; 
const App: React.FC = () => {


  const handleSelect = (value: string | string[]) => {
    console.log(value);
  };

  return (
    <main>
      <Select values={values} onSelect={handleSelect} multiple required placeholder={placeholder} />
    </main>
  );
};

export default App;
