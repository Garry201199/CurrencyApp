import Converter from "./features/currency/Converter"
import Scroll from './features/currency/comp/Scroll'
const App = () =>  {

  return (
    <div className="flex font-monte justify-center items-center text-black bg-gradient-to-br from-[#200122] to-[#6f0000] w-full min-h-screen ">
       <Converter/>
       <Scroll />
    </div>
  )
}

export default App
