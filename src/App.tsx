import React, { useEffect, useState } from 'react';
import Select from './components/select';
import LoadingScreen from './components/reusable/LoadingScreen';
import './lib/scss/main.scss';
import { placeholder } from './lib/constants'; 
import { getCarsData } from './api/carsAPI';

const App: React.FC = () => {
  const [carBrands, setCarBrands] = useState<string []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const data = await getCarsData();
        const brandNames = data.map(brand => brand.name);
        // const brandNames = data.map(brand => brand.name).slice(0, 4); //use this for testing the scroll if less than 4
        setCarBrands(brandNames);
      } catch (error) {
        console.error("Error fetching car brands", error);
      } finally {
        setLoading(false); // update loading state after fetching data
      }
    };

    fetchCarBrands();
  }, []);

  const handleSelect = (value: string | string[]) => {
    console.log(value);
  };

  return (
    <main>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Select values={carBrands} onSelect={handleSelect} multiple required placeholder={placeholder} />
      )}
    </main>
  );
};

export default App;