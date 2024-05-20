import {useState} from 'react';

export default ({setStep})=> {
  const handleOnClick = ()=>{
    setUsername(
      <p className="text-left mb-0 text-xl font-medium leading-9 tracking-tight text-gray-900">Done</p>

    )
    setStep(2)
  }
  const [username,setUsername]=useState(
    <>
  <div className="relative mt-2 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm">@</span>
    </div>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="JohnDoe.eth"></input>       
  </div>
      <button type="submit"  onClick={handleOnClick} className="relative top-5 mb-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>      
</>
  )
  return username
}