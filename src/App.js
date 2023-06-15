import React, { useState, useEffect } from 'react';
import Tours from './components/Tours';



const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours)
    console.log(tours)
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button type="button" className='btn' onClick={()=> fetchTours()} style={{marginTop: '2rem'}}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App