import { styles } from './style';
import { 
  Hero,
  Navbar,
  SocialBar 
} from './components';

function App() {

  return (
    <div className="w-full h-[100vh] overflow-x-hidden flex flex-row justify ">

      <div className="h-full sm:flex hidden flex-auto px-10 fixed left-0 top-0">
        <SocialBar />
      </div>

      <div className={`${styles.boxWidth} sm:pl-[120px]`}>
          <Navbar />
          {/*
          <Hero />
          About <br />
          Projects <br />
          Contact <br />
          Footer <br />
          */}
      </div>

    </div>

   
  )
}

export default App
