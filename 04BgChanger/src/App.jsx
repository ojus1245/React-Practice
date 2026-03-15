import {useState} from 'react'

function App() {
const [bgcolor,setbgcolor]=useState('Yellow')

  return (
    <>
     <div className='w-full h-screen '
     style={{backgroundColor:bgcolor}}
     >
    <div className='text-3xl text-white flex justify-center py-10 italic underline font-semibold'> My Personal BackGround Changer Webpage</div>

      <div className='fixed bottom-10 left-96 mx-auto w-1/2 h-20 flex justify-center items-center bg-white rounded-2xl   '>
      <div className='flex gap-3'>
        <button className='w-20 h-12 bg-red-500 rounded-2xl text-white cursor-pointer shadow-2xl'
        onClick={()=>setbgcolor('red')}>Red</button>
        <button className='w-20 h-12 bg-blue-500 rounded-2xl text-white cursor-pointer shadow-2xl'
        onClick={()=>setbgcolor('blue')}>Blue</button>
        <button className='w-20 h-12 bg-yellow-500 rounded-2xl text-white cursor-pointer shadow-2xl'
        onClick={()=>setbgcolor('yellow')}>Yellow</button>
        <button className='w-20 h-12 bg-green-500 rounded-2xl text-white cursor-pointer shadow-2xl'
        onClick={()=>setbgcolor('green')}>Green</button>
        <button className='w-20 h-12 bg-black rounded-2xl text-white cursor-pointer shadow-2xl'
        onClick={()=>setbgcolor('Black')}>Black</button>
        <button className='w-20 h-12 bg-purple-500 rounded-2xl text-white cursor-pointer shadow-2xl'
        onClick={()=>setbgcolor('purple')}>Lavender</button>
       
      </div>
      
      </div>
     </div>
    </>
  )
}

export default App
