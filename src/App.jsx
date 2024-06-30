import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,StarsCanvas,Tech,Works} from './components'
const App=()=>{
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="bg-primary z-0 relative">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    <div className="relative z-0">
    <Contact/>
    <StarsCanvas/>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
