import './App.css';
import PetList from './components/PetList/PetList';
import PetForm from './components/PetForm/PetForm';

function App() {
  return (
    <div className="App">
      <PetForm />
      <PetList />
    </div>
  );
}

export default App;
