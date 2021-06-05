import logo from './logo.svg';
import './App.css';
import RestaurantList from './components/RestaurantList'
import TrafficJam from './components/TrafficJam'
import ZooList from './components/ZooList'

const myArray = [
  {nama: 'restaurant1', status: 'buka'},
  {nama: 'restaurant2', status: 'buka'},
  {nama: 'restaurant3', status: 'tutup'},
  {nama: 'restaurant4', status: 'tutup'},
  {nama: 'restaurant5', status: 'buka'},
];

const myTraf = [
  {letak: 'atas', warna: 'merah'},
  {letak: 'tengah', warna: 'kuning'},
  {letak: 'bawah', warna: 'hijau'},
];

const myZoo = [
  {zone: 'A', animal: 'anoa', fed: 'done'},
  {zone: 'B', animal: 'bear', fed: 'not yet'},
  {zone: 'C', animal: 'cheetah', fed: 'done'},
  {zone: 'D', animal: 'deer', fed: 'done'},
];

function App() {
  return (
    <div className="App">
      <RestaurantList mydata={myArray} />
      <TrafficJam trafficdata={myTraf}/>
      <ZooList zoodata={myZoo} />
    </div>
  );
}

export default App;
