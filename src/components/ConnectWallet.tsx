import { Mainnet, DAppProvider, useEtherBalance, useEthers, Goerli, Base } from '@usedapp/core'

import { formatEther } from '@ethersproject/units'



const ConnectButton = () => {
  const { chainId,account, switchNetwork, deactivate, activateBrowserWallet } = useEthers()


  if (account){
    
    if(chainId!==Base.chainId){
      return <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => switchNetwork(Base.chainId)}>Switch Network</button>  
    } 
    return (
      <div>
    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => deactivate()}>Disconnect</button>  
     <div className="balance">
          <br />
          Address:
          <p className="bold">{account}</p>
          <br />
        </div>
    </div>
  )

  }else{     
    return <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => activateBrowserWallet()}>Connect</button>        
  }
}

const App = ({config}) => {
  
  const {chainId } = useEthers()
  
  if (chainId && !config.readOnlyUrls[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>
  }

  return (    
    <DAppProvider config={config}>    
      <ConnectButton />    
    </DAppProvider>
  )
}
export default App;