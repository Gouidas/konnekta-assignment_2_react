import React, { useEffect, useState } from 'react';
import Select from './components/select';
import LoadingScreen from './components/reusable/LoadingScreen';
import './lib/scss/main.scss';
import { placeholder } from './lib/constants'; 
import { getCarsData } from './api/carsAPI';

// This component serves as the main App component
const App: React.FC = () => {
  // Initializing states for carBrands and loading
  const [carBrands, setCarBrands] = useState<string []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the car brand data from the API
    const fetchCarBrands = async () => {
      try {
        const data = await getCarsData();
        const brandNames = data.map(brand => brand.name);
        // const brandNames = data.map(brand => brand.name).slice(0, 4); //use this for testing the scroll if less than 4

        // Update the carBrands state with the retrieved brand names
        setCarBrands(brandNames);
      } catch (error) {
        // Log any errors that occur during fetch
        console.error("Error fetching car brands", error);
      } finally {
        // Update loading state to false once data has been fetched
        setLoading(false);
      }
    };

    // Invoke the fetchCarBrands function
    fetchCarBrands();
  }, []);

  // Handler for the Select component's onSelect event
  const handleSelect = (value: string | string[]) => {
    // Log the selected value(s) to the console
    console.log(value);
  };

  // Render the loading screen if data is being fetched, otherwise render the Select component
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
