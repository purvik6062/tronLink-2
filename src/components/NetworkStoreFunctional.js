import React, { useState } from 'react';

function NetworkStoreFunctional() {
    const [isConnected, setIsConnected] = useState(false);

    const Config = {
        version: 'v1.0.0',
        chain: {
            privateKey: '01',
            fullHost: 'https://api.trongrid.io'
        },
        trongrid: {
            host: 'https://api.trongrid.io',
            key: '7d6274ae-6ea7-4231-9ba8-fee5394e3f4a'
        },
        service: {},
        contract: {
            usdt: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
        },
        defaultDecimal: 6,
        tronLinkTime: 8,
        justSwap: 'https://justswap.org/',
        tronscanUrl: 'https://tronscan.io/#'
    };

    const initTronLinkWallet = async () => {
        try {
            let timeCount = 0;
            const tmpTimer1 = setInterval(() => {
                timeCount++;
                if (timeCount > Config.tronLinkTime) {
                    setIsConnected(false);
                    clearInterval(tmpTimer1);
                }
                if (window.tronWeb && window.tronWeb.ready) {
                    if (process.env.REACT_APP_ENV === 'test' || process.env.REACT_APP_ENV === 'qaTest') {
                        window.tronWeb.setFullNode(Config.chain.fullHost);
                        window.tronWeb.setSolidityNode(Config.chain.fullHost);
                    }
                    const { trongrid } = Config;

                    if (trongrid && window.tronWeb.setHeader && window.tronWeb.fullNode.host === trongrid.host) {
                        window.tronWeb.setHeader({ 'TRON-PRO-API-KEY': trongrid.key });
                    }
                    window.defaultAccount = null;
                    setIsConnected(true);
                    clearInterval(tmpTimer1);
                }
            }, 1000);
        } catch (e) {
            console.log(e);
        }
    };

    // JSX rendering and component return
    return (
        <div>
            <button onClick={initTronLinkWallet}>Initialize TronLink</button>
            {/* You can add more JSX content here */}
        </div>
    );
}

export default NetworkStoreFunctional;
