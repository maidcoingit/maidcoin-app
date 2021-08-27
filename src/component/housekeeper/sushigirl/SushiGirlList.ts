import { DomNode } from "@hanul/skynode";
import SkyUtil from "skyutil";
import SushiGirlsContract from "../../../contracts/SushiGirlsContract";
import SushiGirl from "./SushiGirl";

export default class SushiGirlList extends DomNode {

    constructor() {
        super(".sushigirl-list");
        this.loadSushiGirls();
    }

    private async loadSushiGirls() {

        const sushiGirlCount = (await SushiGirlsContract.getTotalSupply()).toNumber();

        SkyUtil.repeat(sushiGirlCount, async (sushiGirlId) => {
            new SushiGirl(sushiGirlId).appendTo(this);
        });
    }
}
