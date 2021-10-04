import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
      <Bar
        data={{
          labels: ['blue', 'red', 'w', 'ds', 'sds'],
          datasets: [
            {
              label: "#vote",
              data: [1, 2, 3, 4, 5]
            }
          ]

        }}
        width={600}
        height={300}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}

export default App;
