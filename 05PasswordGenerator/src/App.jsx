import { useState ,useEffect,useCallback,useRef} from "react";




function App() {
  const [length,setLength]=useState(8)
  const [clicked,setClicked]=useState(false)
  const [number,setNumber]=useState(false)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState('')

  const passwordRef=useRef(null)

  const password_generation=useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) str+='0123456789'
    if (char) str+="!@#$%^&*-_+=[]{}~`"
    let pass=''
    for (let i = 0; i <length; i++) {
      const elem = Math.floor(Math.random()*str.length);
      pass+=str.charAt(elem)
      
    }
    setPassword(pass)
  },[length,char,number,setPassword])

  const copyClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);


  },[password])
  
  useEffect(()=>{
    password_generation();
    setClicked(false)
  },[length,number,char,setPassword])

  
  return (

    <>
      <div className="w-full h-screen bg-linear-to-r from-gray-600 to-gray-800 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Password Generator
          </h1>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              placeholder='Password'
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
            <button className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition" onClick={()=>{copyClipboard();setClicked(true)
            }}>
              {clicked?"copied":"copy"}
            </button>
          </div>
            <div>
              <input type="range" min={8} max={20} value={length} onChange={(e)=>setLength(Number(e.target.value))} className="w-20 mr-2" /><label>Length({length})</label>

              <label htmlFor="special-char" className="ml-2">Char</label><input type="checkbox" name="" id="special-char" className="ml-1 mr-2" defaultChecked={char} onChange={()=>setChar((prev)=>!prev)}/>
              <label htmlFor="numbers" className="ml-2">Numbers</label><input type="checkbox" name="" id="numbers" className="ml-1 mr-2" defaultChecked={number} onChange={()=>setNumber((prev)=>!prev)} />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;