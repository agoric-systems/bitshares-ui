import React from "react";
import Translate from "react-translate-component";
import FormattedAsset from "../Utility/FormattedAsset";
import {ChainStore} from "bitsharesjs/es";
import utils from "common/utils";
import WalletActions from "actions/WalletActions";
import {Apis} from "bitsharesjs-ws";


class AccountHardwareWallet extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="grid-content" style={{overflowX: "hidden"}}>
                This is the hardware wallet view!
            </div>
        );
    }
}

export default AccountHardwareWallet;
