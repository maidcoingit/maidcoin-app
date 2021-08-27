import { DomNode, el } from "@hanul/skynode";
import { SkyRouter } from "skyrouter";

export default class PCMenu extends DomNode {

    constructor() {
        super(".pc-menu");
        this.load();
        SkyRouter.on("go", this.load);
    }

    private load = () => {
        this.empty().append(
            el(`a${location.pathname === "/" ? ".on" : ""}`, "Dashboard", { click: () => SkyRouter.go("/") }),
            el(`a${location.pathname === "/maid" ? ".on" : ""}`, "Maid", { click: () => SkyRouter.go("/maid") }),
            el(`a${location.pathname === "/housekeeper" ? ".on" : ""}`, "Housekeeper", { click: () => SkyRouter.go("/housekeeper") }),
            el(`a${location.pathname === "/nurseraid" ? ".on" : ""}`, "Nurse Raid", { click: () => SkyRouter.go("/nurseraid") }),
            el(`a${location.pathname === "/nursefactory" ? ".on" : ""}`, "Nurse Factory", { click: () => SkyRouter.go("/nursefactory") }),
            el(`a${location.pathname === "/farm" ? ".on" : ""}`, "Farm", { click: () => SkyRouter.go("/farm") }),
        );
    };

    public delete() {
        SkyRouter.off("go", this.load);
        super.delete();
    }
}
