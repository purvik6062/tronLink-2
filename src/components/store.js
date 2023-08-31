// import { observable, action } from 'mobx';

// const useTronStore = () => {
//   const isConnected = observable.box(false);
//   const walletAddress = observable.box('');
//   const balance = observable.box(0);

//   const connectToTronLink = action(async () => {
//     try {
//       if (window.tronWeb && window.tronWeb.ready) {
//         const tronWeb = window.tronWeb;
//         const defaultAddress = tronWeb.defaultAddress.base58;
//         const balanceValue = await tronWeb.trx.getBalance(defaultAddress);

//         walletAddress.set(defaultAddress);
//         balance.set(balanceValue);
//         isConnected.set(true);
//       }
//     } catch (error) {
//       console.error('Error connecting to TronLink:', error);
//     }
//   });

//   return {
//     isConnected,
//     walletAddress,
//     balance,
//     connectToTronLink
//   };
// };

// export default useTronStore;


import { observable, action } from 'mobx';

class TronStore {
  @observable isConnected = false;
  @observable walletAddress = '';
  @observable balance = 0;

  @action
  async connectToTronLink() {
    try {
      if (window.tronWeb && window.tronWeb.ready) {
        const tronWeb = window.tronWeb;

        if (tronWeb.defaultAddress.base58) {
          const defaultAddress = tronWeb.defaultAddress.base58;
          const balance = await tronWeb.trx.getBalance(defaultAddress);

          this.walletAddress = defaultAddress;
          this.balance = balance;
          this.isConnected = true;
        } else {
          console.error('No default address available.');
        }
      } else {
        console.error('TronWeb is not ready.');
      }
    } catch (error) {
      console.error('Error connecting to TronLink:', error);
    }
  }
}

const store = new TronStore();
export default store;
