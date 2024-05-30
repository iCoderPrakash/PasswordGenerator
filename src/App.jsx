import { useState, useCallback, useEffect, useRef } from 'react';

// function App() {
//   const [length, setlength] = useState(8);
//   const [number, setnumber] =
//     useState(false);
//   const [chracter, setcharacter] =
//     useState(false);
//   const [password, setpassword] = useState();

//   const passwordGeneratot = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (number) str += "01234567890";
//     if (chracter) str += "!@#$%^&*()_~`-+/";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor((Math.random()) * str.length + 1);
//       pass += str.charAt(char);

//     }
//     setpassword(pass);
//   }, [length, number, chracter, setpassword]);

//   useEffect(() => {
//     passwordGeneratot()
//   }, [length, number, chracter, setpassword]);

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
//         <h1 className='text-white text-center '>Password generator</h1>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4 py-2'>
//           <input type="text" value={password} className='outline-none w-full py-1  px-3' placeholder='Password' readOnly />
//           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex item-center gap-x-1'>
//             <input type="range" min={8} max={100} value={length} className='cursor-pointer'
//               onChange={(e) => { setlength(e.target.value) }}
//             />
//             <label>length :{length}</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input type="checkbox" defaultChecked={number} id="numberinput"
//               onChange={() => {
//                 setnumber((prev) => !prev)
//               }}
//             />
//             <label>Number</label>
//             <input type="checkbox" defaultChecked={chracter} id="numberinput"
//               onChange={() => {
//                 setcharacter((prev) => !prev)
//               }}
//             />
//             <label>charcter</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [specialCharacter, setspecialCharacter] = useState(false);
  const [password, setpassword] = useState();

  //useRef hook
  const passwordref =useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (number) str += '0123456789';
    if (specialCharacter) str += '~!@#$%^&*()_+`=-';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random()) * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, specialCharacter, setpassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, specialCharacter, setpassword])
  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700'>
        <h1 className='text-center py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 py-2'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='Password' readOnly 
          ref={passwordref}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setlength(e.target.value)} />
            <label className=' text-orange-500'>length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} id="numberinput" onChange={() => {
              setnumber((prev) => !prev)
            }} />
            <label className=' text-orange-500' >number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={specialCharacter} id="numberinput" onChange={() => {
              setspecialCharacter((prev) => !prev)
            }} />
            <label className=' text-orange-500'>specialCharacter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
