import { styles } from './style';
import { 
  Hero,
  Navbar,
  SocialBar,
  About,
  Contact
} from './components';

function App() {

  return (
    <div className="w-full h-[100vh] overflow-x-hidden flex flex-row justify-center px-10">

      <div className="h-full sm:flex hidden flex-auto px-10 fixed left-0 top-0">
        <SocialBar />
      </div>

      <div className={`${styles.boxWidth} sm:pl-[150px] pl-0`}>
          <Navbar />
          
          <Hero />
          
          <About />

          <Contact />
          {/*
          Projects <br />
          Contact <br />
          Footer <br />
          */}
      </div>

    </div>

   
  )
}

export default App
