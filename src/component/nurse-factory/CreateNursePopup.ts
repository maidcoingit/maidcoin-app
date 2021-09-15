import { DomNode, el, Popup } from "@hanul/skynode";
import superagent from "superagent";
import Calculator from "../../Calculator";
import CommonUtil from "../../CommonUtil";
import CloneNursesContract, { NurseType } from "../../contracts/CloneNursesContract";
import NursePartContract from "../../contracts/NursePartContract";
import Wallet from "../../ethereum/Wallet";

export default class CreateNursePopup extends Popup {

    public content: DomNode;

    private nurseTypeInfo: undefined | NurseType;
    private input: undefined | DomNode<HTMLInputElement>;
    private range: undefined | DomNode<HTMLInputElement>;
    private lifetime: undefined | DomNode;

    constructor(private nurseType: number) {
        super(".popup-background");

        this.append(
            this.content = el(".create-nurse-popup",
                el("a.close-button", el("img", { src: "/images/component/nurse-battery-popup/close-button.png", height: "25" }), {
                    click: () => this.delete(),
                }),
                el("h1", "Create Nurse"),
                el("p", "Enter the number of nurse parts."),
            ),
        );

        this.load();
    }

    private refreshLifetime() {
        if (this.nurseTypeInfo !== undefined && this.input !== undefined) {
            this.lifetime?.empty().appendText(
                CommonUtil.displayBlockDuration(
                    Calculator.nurseLifetime(
                        this.nurseTypeInfo.lifetime,
                        this.nurseTypeInfo.partCount,
                        parseInt(this.input.domElement.value, 10),
                        true,
                    ),
                ),
            );
        }
    }

    private async load() {

        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {

            this.nurseTypeInfo = await CloneNursesContract.getNurseType(this.nurseType);
            const balance = (await NursePartContract.balanceOf(owner, this.nurseType)).toNumber();

            const result = await superagent.get(`https://api.maidcoin.org/nursetypes/${this.nurseType}`);
            const tokenInfo = result.body;

            const rangePercent = 100 - this.nurseTypeInfo.partCount / balance * 100;

            this.content.append(
                el("img.part", { src: `https://storage.googleapis.com/maidcoin/NursePart/${tokenInfo.name}.png`, height: "80" }),
                el(".part-count",
                    this.input = el("input", {
                        value: String(this.nurseTypeInfo.partCount),
                        change: () => {
                            if (this.range !== undefined && this.input !== undefined && this.nurseTypeInfo !== undefined) {
                                const currentValue = parseInt(this.input.domElement.value, 10);
                                if (currentValue < this.nurseTypeInfo.partCount) {
                                    this.input.domElement.value = String(this.nurseTypeInfo.partCount);
                                } else if (currentValue > balance) {
                                    this.input.domElement.value = String(balance);
                                }
                                this.range.domElement.value = this.input.domElement.value;
                            }
                            this.refreshLifetime();
                        },
                    }),
                    ` / ${balance.toString()}`,
                ),
                el(".range-info",
                    el(".assemble-range", "Assemble", { style: { width: `${100 - rangePercent}%` } }),
                    el(".battery-range", "Battery"),
                ),
                el(".range-container",
                    el(".assemble-range", { style: { width: `${100 - rangePercent}%` } }),
                    this.range = el("input.range", {
                        style: { width: `${rangePercent}%` },
                        type: "range",
                        min: String(this.nurseTypeInfo.partCount),
                        value: String(this.nurseTypeInfo.partCount),
                        max: balance.toString(),
                        change: () => {
                            if (this.input !== undefined && this.range !== undefined) {
                                this.input.domElement.value = this.range.domElement.value;
                            }
                            this.refreshLifetime();
                        },
                    }),
                ),
                el(".lifetime-container",
                    el("img.icon", { src: "/images/component/nurse-battery-popup/battery.png", height: "22" }),
                    this.lifetime = el(".lifetime"),
                ),
                el("a.create-button", "Create", {
                    click: async () => {
                        if (this.input !== undefined) {
                            await CloneNursesContract.assemble(this.nurseType, parseInt(this.input.domElement.value, 10));
                        }
                        this.delete();
                    },
                }),
            );
            this.refreshLifetime();
        }
    }
}