import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Steps from './Steps.tsx';
const contentStyle = { width:'100%',height: '100%' };

export default () => (

  <Popup trigger={<button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</button>}    modal {...{ contentStyle }}
  >
    <div className="content-center w-1/3 ml-auto mr-auto block relative"> 
        <Steps />
        </div>
  </Popup>

);