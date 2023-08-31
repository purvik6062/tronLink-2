// import React from 'react';
// import { observer } from 'mobx-react';
import tronStore from './store';

// const TronLinkIntegration = observer(() => {
//   const handleConnect = () => {
//     tronStore.connectToTronLink();
//   };

//   return (
//     <div>
//       <h1>TronLink Integration</h1>
//       <button onClick={handleConnect}>Connect to TronLink</button>
//       {tronStore.isConnected && (
//         <div>
//           <p>Wallet Address: {tronStore.walletAddress}</p>
//           <p>Balance: {tronStore.balance / 1e6} TRX</p>
//         </div>
//       )}
//     </div>
//   );
// });

// export default TronLinkIntegration;



import React from 'react';
import useTronStore from './store'; // Adjust the import path as needed

function TronLinkIntegration() {
  const { isConnected, walletAddress, balance, connectToTronLink } = useTronStore();

  const handleConnectClick = () => {
    connectToTronLink();
  };

  return (
    <div>
      <p>Is Connected: {isConnected.get().toString()}</p>
      <p>Wallet Address: {walletAddress.get()}</p>
      <p>Balance: {balance.get()}</p>
      <button onClick={handleConnectClick}>Connect to TronLink</button>
    </div>
  );
}

export default TronLinkIntegration;
