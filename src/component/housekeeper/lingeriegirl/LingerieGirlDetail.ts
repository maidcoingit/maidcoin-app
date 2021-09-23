import { DomNode, el, Popup } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import superagent from "superagent";
import CommonUtil from "../../../CommonUtil";
import LingerieGirlsContract from "../../../contracts/LingerieGirlsContract";
import LPTokenContract from "../../../contracts/LPTokenContract";
import NurseRaidContract from "../../../contracts/NurseRaidContract";
import Wallet from "../../../ethereum/Wallet";
import StaticDataManager from "../../../StaticDataManager";
import TokenPrompt from "../../dialogue/TokenPrompt";

export default class LingerieGirlDetail extends Popup {

    public content: DomNode;
    private additionalPower: undefined | DomNode;
    private supportedLP: undefined | DomNode;

    constructor(private id: number) {
        super(".lingeriegirl-detail");
        this.append(
            el("a.back-button", el("img", { src: "/images/component/housekeeper-detail/back-button.png", height: "19.5" }), {
                click: () => this.delete(),
            }),
            this.content = el(".content"),
        );
        this.load();
        LingerieGirlsContract.on("Support", this.supportHandler);
        LingerieGirlsContract.on("Desupport", this.desupportHandler);
    }

    private supportHandler = async (id: BigNumber) => {
        if (id.eq(this.id) === true) {
            const lingerieGirl = StaticDataManager.getLingerieGirl(this.id);
            const supportedLP = await LingerieGirlsContract.getSupportedLP(this.id);
            const lingerieGirlPower = await NurseRaidContract.powerOfMaids(LingerieGirlsContract.address, this.id);
            this.additionalPower?.empty().appendText(String(lingerieGirlPower - lingerieGirl.originPower));
            this.supportedLP?.empty().appendText(utils.formatEther(supportedLP));
        }
    };

    private desupportHandler = async (id: BigNumber) => {
        if (id.eq(this.id) === true) {
            const lingerieGirl = StaticDataManager.getLingerieGirl(this.id);
            const supportedLP = await LingerieGirlsContract.getSupportedLP(this.id);
            const lingerieGirlPower = await NurseRaidContract.powerOfMaids(LingerieGirlsContract.address, this.id);
            this.additionalPower?.empty().appendText(String(lingerieGirlPower - lingerieGirl.originPower));
            this.supportedLP?.empty().appendText(utils.formatEther(supportedLP));
        }
    };

    private async load() {

        const lingerieGirl = StaticDataManager.getLingerieGirl(this.id);
        const supportedLP = await LingerieGirlsContract.getSupportedLP(this.id);
        const lingerieGirlOwner = await LingerieGirlsContract.ownerOf(this.id);
        const lingerieGirlPower = await NurseRaidContract.powerOfMaids(LingerieGirlsContract.address, this.id);

        const result = await superagent.get(`https://api.maidcoin.org/lingeriegirls/${this.id}`);
        const tokenInfo = result.body;

        this.content.empty().append(
            el("img.image", { src: `https://storage.googleapis.com/maidcoin/LingerieGirl/Character/${this.id}.png` }),
            el(".name", tokenInfo.name),
            el(".owner", `Owner: ${CommonUtil.shortenAddress(lingerieGirlOwner)}`),
            el(".properties",
                el(".power", el("img", { src: "/images/component/power-icon.png", height: "23" }), el("span", String(lingerieGirlPower))),
                el(".property.origin-power", "Origin Power: ", el("span", String(lingerieGirl.originPower))),
                el(".property.additional-power", "Additional Power: ", this.additionalPower = el("span", String(lingerieGirlPower - lingerieGirl.originPower))),
                el(".property.lp-amount", "LP Supported: ", this.supportedLP = el("span", utils.formatEther(supportedLP))),
            ),
            el(".controller",
                el("a.power-up-button", "Power Up", {
                    click: async (event: MouseEvent) => {
                        event.stopPropagation();
                        const owner = await Wallet.loadAddress();
                        if (owner !== undefined) {
                            const lpBalance = await LPTokenContract.balanceOf(owner);
                            new TokenPrompt(
                                "Support Lingerie Girl",
                                "How much amount to support?",
                                "Support",
                                0, lpBalance,
                                async (amount) => {
                                    await LingerieGirlsContract.support(this.id, amount);
                                },
                            );
                        }
                    },
                }),
                el("a.power-down-button", "Power Down", {
                    click: async (event: MouseEvent) => {
                        event.stopPropagation();
                        const supported = await LingerieGirlsContract.getSupportedLP(this.id);
                        new TokenPrompt(
                            "Desupport Lingerie Girl",
                            "How much amount to desupport?",
                            "Desupport",
                            0, supported,
                            async (amount) => {
                                await LingerieGirlsContract.desupport(this.id, amount);
                            },
                        );
                    },
                }),
            ),
        );
    }

    public delete() {
        LingerieGirlsContract.off("Support", this.supportHandler);
        LingerieGirlsContract.off("Desupport", this.desupportHandler);
        super.delete();
    }
}
