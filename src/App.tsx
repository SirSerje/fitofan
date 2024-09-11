import './App.css';
import './styles/constants.css'
import { Calendar } from './components/calendar';
import { NavigationSection } from './components/navigation-section';
import { SearchSection } from './components/search-section';

function App() {
  return (
    <>
      <NavigationSection />
      <SearchSection />
      <Calendar />
    </>
  );
}

export default App;
