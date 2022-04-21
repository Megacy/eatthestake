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
                <div>
                SAGAWORLD
                </div>
                <div>
                STAKE
                </div>
                <div>
                {web3? <AddressView />: 'Not connected'}
                
                </div>
            </div>
        </>
    )
}