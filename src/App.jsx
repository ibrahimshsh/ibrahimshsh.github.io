import { useState } from 'react';
import './fonts.css';
import './App.css';
import './index.css';
import { Button } from "@/components/ui/button"

function App() {
  const [num , setNum] = useState(0);

  return(
    <>
    <div className='pic relative rounded-3xl h-4/5 z-0 w-full'>
 
      <h1 className='text-gray-500 font-semibold text-6xl'>Popple Flights</h1>
      
    <div className='text float-left'>
    <h1 className='text-gray-500 font-semibold text-7xl px-16 text-left pt-24'>Travel around</h1>
    <h1 className='text-white font-semibold text-7xl px-16 text-left'>Follow your heart</h1>
    <p className='text-2xl px-16 pt-16 text-left text-gray-300 w-3/5'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos odio velit modi voluptatum dolore nihil, ex fugiat quo cum officiis totam provident numquam perspiciatis minima. Animi qui unde quaerat molestiae?
  </p>
  <Button variant="default" size="lg" onClick={()=>{window.alert("Visit Google")}} className="float-left mx-16 bg-slate-100 mt-5 mb-16 rounded-full font-semibold">Book now!</Button>

</div>
<p>wdw</p>
<img src='src\photo\down-pic.png' className='rounded-7xl w-4/6 mx-auto absolute bottom-[-7%] left-1/2 transform -translate-x-1/2 z-10'></img>
  </div>
       </>
  )
};

export default App;
