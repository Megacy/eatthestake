import React, {useContext} from "react";

import BlockchainContext from "../context/BlockchainContext";


export default function NavBar() {
    const blockchainContext = useContext(BlockchainContext);
    const { web3, accounts } = blockchainContext;

    const AddressView = () => (
        <>
            Connected: {accounts? accounts[0].substring(0,6) : undefined}...{accounts? accounts[0].substring(accounts[0].length-4,accounts[0].length) : undefined}
        </>
    )

    return (
        <>
            <div className="minimalistic-nav-bar">
                <div className="threew">
                <img
                    alt=""
                    src={require('../logo.png')}
                    width="60px"
                    height="50px"
                    className="d-inline-block align-top"
                />
                </div>
                <div >
                SagaWorld Staking
                </div>
                <div>
                {web3? <AddressView />: 'Not connected'}
                
                </div>
            </div>
        </>
    )
}