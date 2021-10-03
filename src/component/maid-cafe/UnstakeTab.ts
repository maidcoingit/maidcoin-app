import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import CommonUtil from "../../CommonUtil";
import MaidCafeContract from "../../contracts/MaidCafeContract";
import Wallet from "../../ethereum/Wallet";

export default class UnstakeTab extends DomNode {

    private input: DomNode<HTMLInputElement>;

    constructor() {
        super(".tab.unstake-tab");
        this.append(
            el(".input-container",
                this.input = el("input"),
                el("a.max-button", "Max", {
                    click: async () => {
                        const owner = await Wallet.loadAddress();
                        if (owner !== undefined) {
                            const balance = await MaidCafeContract.balanceOf(owner);
                            this.input.domElement.value = utils.formatEther(balance);
                        }
                    },
                }),
            ),
            el("a.confirm-button", "Unstake", {
                click: async () => {
                    await MaidCafeContract.leave(utils.parseEther(this.input.domElement.value));
                    this.input.domElement.value = "";
                },
            }),
        );
        this.loadBalance();

        Wallet.on("connect", this.connectHandler);
        MaidCafeContract.on("Transfer", this.transferHandler);
    }

    private connectHandler = () => {
        this.loadBalance();
    };

    private transferHandler = async (from: string, to: string, amount: BigNumber) => {
        const address = await Wallet.loadAddress();
        if (from === address || to === address) {
            this.loadBalance();
        }
    };

    private async loadBalance() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const balance = await MaidCafeContract.balanceOf(owner);
            this.input.domElement.placeholder = `Balance: ${CommonUtil.displayPrice(balance)}`;
        }
    }

    public delete(): void {
        Wallet.off("connect", this.connectHandler);
        MaidCafeContract.off("Transfer", this.transferHandler);
        super.delete();
    }
}
