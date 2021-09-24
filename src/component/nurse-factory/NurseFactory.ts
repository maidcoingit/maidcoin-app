import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "../../CommonUtil";
import NursePartContract from "../../contracts/NursePartContract";
import Wallet from "../../ethereum/Wallet";
import StaticDataManager from "../../StaticDataManager";
import Alert from "../dialogue/Alert";
import CreateNursePopup from "./CreateNursePopup";

export default class NurseFactory extends DomNode {

    private content: DomNode;
    private footer: DomNode;

    constructor(private nurseType: number) {
        super(".nurse-factory");
        this.append(
            el(".background"),
            this.content = el(".content"),
            this.footer = el("footer"),
        );
        this.load();
        Wallet.on("connect", this.connectHandler);
    }

    private connectHandler = () => {
        this.load();
    };

    private async load() {

        const owner = await Wallet.loadAddress();

        const nurseType = StaticDataManager.getNurseType(this.nurseType);
        const balance = owner === undefined ? undefined : await NursePartContract.balanceOf(owner, this.nurseType);

        this.content.empty().append(
            el(".name", nurseType.name),
            el(".image", {
                style: {
                    backgroundImage: `url(https://storage.googleapis.com/maidcoin/Nurse/Illust/${nurseType.name}.png)`,
                    width: nurseType.width,
                    backgroundPosition: `${nurseType.left}px calc(50% + ${nurseType.top + 56}px)`,
                },
            }),
            el("img.part", { src: `https://storage.googleapis.com/maidcoin/NursePart/${nurseType.name}.png`, height: "60" }),
            balance === undefined ? undefined : el(".part-count", el("span.balance", balance.toString()), ` / ${nurseType.partCount}`),
        );

        this.footer.empty().append(
            el(".destroy-return", "Destroy Return: ", el("span", CommonUtil.numberWithCommas(utils.formatEther(nurseType.destroyReturn))), " $MAID"),
            balance === undefined ? undefined : el("a.create-button", "Create", {
                click: () => {
                    if (balance.toNumber() < nurseType.partCount) {
                        new Alert("Error", "Nurse Parts not enough.", "Confirm");
                    } else {
                        new CreateNursePopup(this.nurseType);
                    }
                },
            }),
        );
    }

    public delete(): void {
        Wallet.off("connect", this.connectHandler);
        super.delete();
    }
}
