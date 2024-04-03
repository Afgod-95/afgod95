import React, { useEffect, useState } from 'react';
import './App.css'; 
import Navigation from './Route/Navigation'; 
import ThemeProvider from './ThemeProvider'; 
import Loading from './Components/Loading'; 

function App() {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const simulateLoading = async () => { 
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };
    simulateLoading(); 
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {isLoading ? (
          <Loading /> 
        ) : (
          <Navigation /> 
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
