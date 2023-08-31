import React from 'react';
import { WalletError } from '@tronweb3/tronwallet-abstract-adapter';
import { WalletDisconnectedError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import {
    WalletActionButton,
    WalletConnectButton,
    WalletDisconnectButton,
    WalletModalProvider,
    WalletSelectButton,
} from '@tronweb3/tronwallet-adapter-react-ui';
// import toast from 'react-hot-toast';
import { BitKeepAdapter, OkxWalletAdapter, TokenPocketAdapter, TronLinkAdapter } from '@tronweb3/tronwallet-adapters';
import { WalletConnectAdapter } from '@tronweb3/tronwallet-adapter-walletconnect';
import { LedgerAdapter } from '@tronweb3/tronwallet-adapter-ledger';
import { Button } from '@tronweb3/tronwallet-adapter-react-ui';
// import { tronWeb } from './components/tronweb';
import "./ConnectButton.css"
import { toast } from 'react-toastify'; // Import toast

export function ConnectButton() {
    return (
        <div>
            {/* <h2>Connect Button:</h2> */}
            <WalletActionButton onError={onError} /> 
    </div>
  );
}

function onError(e) {
  if (e instanceof WalletNotFoundError) {
    toast.error(e.message);
  } else if (e instanceof WalletDisconnectedError) {
    toast.error(e.message);
  } else {
    toast.error('An error occurred. Please try again.'); // Generic error message
  }
}


// function ButtonComponent() {
//     return (
//         <div>
//             {/* <h2>Connect Button:</h2> */}
//             <WalletActionButton />
//         </div>
//     );
// }

// function Profile() {
//     const { address, connected, wallet } = useWallet();
//     return (
//         <div>
//             <h2>Wallet Connection Info</h2>
//             <p>
//                 <span>Connection Status:</span> {connected ? 'Connected' : 'Disconnected'}
//             </p>
//             <p>
//                 <span>Your selected Wallet:</span> {wallet?.adapter.name}
//             </p>
//             <p>
//                 <span>Your Address:</span> {address}
//             </p>
//         </div>
//     );
// }



// function SignDemo() {
//     const { signMessage, signTransaction, address } = useWallet();
//     const [message, setMessage] = useState('');
//     const [signedMessage, setSignedMessage] = useState('');
//     // const receiver = 'TQ8AfB9fjrNLN4ZZdj8D6wAAv19ZJ492sk';
//     const receiver = 'TMDKznuDWaZwfZHcM61FVFstyYNmK6Njk1';
//     const [open, setOpen] = useState(false);

//     async function onSignMessage() {
//         const res = await signMessage(message);
//         setSignedMessage(res);
//     }

//     async function onSignTransaction() {
//         const transaction = await tronWeb.transactionBuilder.sendTrx(receiver, tronWeb.toSun(0.001), address);

//         const signedTransaction = await signTransaction(transaction);
//         // const signedTransaction = await tronWeb.trx.sign(transaction);
//         await tronWeb.trx.sendRawTransaction(signedTransaction);
//         setOpen(true);
//     }
//     return (
//         <div style={{ marginBottom: 200 }}>
//             <h2>Sign a message</h2>
//             <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all' }}>
//                 You can sign a message by click the button.
//             </p>
//             <Button style={{ marginRight: '20px' }} onClick={onSignMessage}>
//                 SignMessage
//             </Button>
//             <TextField
//                 size="small"
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="input message to signed"
//             ></TextField>
//             <p>Your sigedMessage is: {signedMessage}</p>
//             <h2>Sign a Transaction</h2>
//             <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all' }}>
//                 You can transfer 0.001 Trx to &nbsp;<i>{receiver}</i>&nbsp;by click the button.
//             </p>
//             <Button onClick={onSignTransaction}>Transfer</Button>
//             {open && (
//                 <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%', marginTop: 1 }}>
//                     Success! You can confirm your transfer on{' '}
//                     <a target="_blank" rel="noreferrer" href={`https://nile.tronscan.org/#/address/${address}`}>
//                         Tron Scan
//                     </a>
//                 </Alert>
//             )}
//         </div>
//     );
// }
