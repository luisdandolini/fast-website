import './App.css';
import Brokers from './components/Brokers';
import Benefits from './components/Benefits';
import Contracts from './components/Contracts';
import Header from './components/Header';
import Home from './components/Home';
import Premium from './components/Premium';
import Reference from './components/Reference';
import Doubts from './components/Doubts';
import Footer from './components/Footer';
import Easy from './components/Easy';
import Plans from './components/Plans';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Contracts />
        <Premium />
        <Benefits />
        <Plans />
        <Easy />
        <Brokers />
        <Reference />
        <Doubts />
      </main>
      <Footer />
    </>
  );
}

export default App;
