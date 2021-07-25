import { DomNode } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
export default class Layout implements View {
    static current: Layout;
    private container;
    private menuList;
    content: DomNode;
    private showingNav;
    constructor();
    private bodyClickHandler;
    changeBackground(src: string): void;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Layout.d.ts.map