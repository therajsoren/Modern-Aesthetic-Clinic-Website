import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Specialists from "./components/Specialists"

const App = () => {
  return (
    <div className="bg-pink-100">
      <Header/>
      <Hero/>
      <Services/>
      <Specialists/>
    </div>
  )
}

export default App