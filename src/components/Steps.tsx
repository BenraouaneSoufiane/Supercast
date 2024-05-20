import { Steps } from 'rsuite';
import 'rsuite/Steps/styles/index.css';
import Signup from './Signup.tsx';
import Username from './Username';
import CompleteProfile from './CompleteProfile.tsx';
import {useState} from 'react'
import React from 'react';

const styles = {
  display: 'inline-table',
  verticalAlign: 'top'
};


const steps = ()=>{

  const [step,setStep]=useState(0)
  const [status, setStatus]=useState('wait')
  return(
    <>
      <Steps current={step} vertical style={styles} className="w-full">
        <Steps.Item title="Register Account" description={<Signup setStep={setStep}/>} />
        <Steps.Item title="Pick a username" description={<Username setStep={setStep} />} />
        <Steps.Item title="Complete profile" description={<CompleteProfile setStatus={setStatus} />} status={status}/>
      </Steps>
      
      
    </>
    )

}
export default steps;