import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import SkyStore from "skystore";
import CommonUtil from "../CommonUtil";
import CloneNursesContract from "../contracts/CloneNursesContract";
import LPTokenContract from "../contracts/LPTokenContract";
import MaidCoinContract from "../contracts/MaidCoinContract";
import TheMasterContract from "../contracts/TheMasterContract";
import Wallet from "../ethereum/Wallet";
import FirstEarnPopup from "./first-earn-popup/FirstEarnPopup";

export default class UserInfo extends DomNode {

    private ownerPanel: DomNode;
    private maidCoinPanel: DomNode;
    private connectButton: DomNode;

    private store: SkyStore = new SkyStore("UserInfo");

    constructor() {
        super(".user-info");
        this.append(
            this.ownerPanel = el(".owner"),
            this.maidCoinPanel = el(".maid-coin"),
            this.connectButton = el("a.connect-button", "Connect", {
                click: () => Wallet.connect(),
            }),
        );

        this.ownerPanel.style({ display: "none" });
        this.maidCoinPanel.style({ display: "none" });
        this.connectButton.style({ display: "none" });

        this.loadUserInfo();
        this.loadBalances();

        Wallet.on("connect", this.connectHandler);
        LPTokenContract.on("Transfer", this.transferHandler);
        MaidCoinContract.on("Transfer", this.transferHandler);
    }

    private connectHandler = () => {
        this.loadUserInfo();
        this.loadBalances();
    };

    private transferHandler = async (from: string, to: string, amount: BigNumber) => {
        const address = await Wallet.loadAddress();
        if (from === address || to === address) {
            this.loadBalances();
        }
        if ((
            from === TheMasterContract.address ||
            from === CloneNursesContract.address
        ) && to === address && this.store.get("first-earn") !== true) {
            new FirstEarnPopup(amount);
            this.store.set("first-earn", true);
        }
    };

    private async loadUserInfo() {
        const owner = await Wallet.loadAddress();
        if (owner === undefined) {

            this.ownerPanel.style({ display: "none" });
            this.maidCoinPanel.style({ display: "none" });
            this.connectButton.style({ display: "flex" });

        } else {

            this.ownerPanel.style({ display: "block" });
            this.maidCoinPanel.style({ display: "block" });
            this.connectButton.style({ display: "none" });

            this.ownerPanel.empty().append(
                el(".address", `Owner: ${CommonUtil.shortenAddress(owner)}`),
            );
        }
    }

    private async loadBalances() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const lpBalance = await LPTokenContract.balanceOf(owner);
            const maidBalance = await MaidCoinContract.balanceOf(owner);
            this.maidCoinPanel.empty().append(
                el(".balance",
                    el("img.icon", { src: "/images/lptoken.png", height: "20.5" }),
                    el(".amount", CommonUtil.displayPrice(lpBalance)),
                    el("a.add-button",
                        el("img", { src: "/images/component/user-info/add-button.png", height: "19" }),
                        { href: "https://app.sushi.com/add/ETH/0x4Af698B479D0098229DC715655c667Ceb6cd8433", target: "_blank" },
                    ),
                ),
                el(".balance",
                    el("img.icon", { src: "/images/maidcoin.png", height: "20.5" }),
                    el(".amount", CommonUtil.displayPrice(maidBalance)),
                    el("a.add-button",
                        el("img", { src: "/images/component/user-info/add-button.png", height: "19" }),
                        { href: "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x4Af698B479D0098229DC715655c667Ceb6cd8433", target: "_blank" },
                    ),
                ),
            );
        }
    }

    public delete(): void {

        Wallet.off("connect", this.connectHandler);
        LPTokenContract.off("Transfer", this.transferHandler);
        MaidCoinContract.off("Transfer", this.transferHandler);

        super.delete();
    }
}
