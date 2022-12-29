import { styles } from './style';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div className={`${styles.boxWidth}`}>
          <Navbar />
      </div>
    </div>
      
  )
}

export default App
