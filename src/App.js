import './App.css';
import Brokers from './components/Brokers';
import Benefits from './components/Benefits';
import Contracts from './components/Contracts';
import Header from './components/HeaderMobile';
import Home from './components/Home';
import Premium from './components/Premium';
import Reference from './components/Reference';
import Doubts from './components/Doubts';
import Footer from './components/Footer';
import Easy from './components/Easy';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Contracts />
        <Premium />
        <Benefits />
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
