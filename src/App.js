import './App.css';
import CoffeeTable from './components/CoffeeTable';
import Search from './components/Search';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
      <Search />
      <CategoryList />
      <CoffeeTable />
    </div>
  );
}

export default App;
