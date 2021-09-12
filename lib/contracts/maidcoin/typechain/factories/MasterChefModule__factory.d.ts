import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MasterChefModule, MasterChefModuleInterface } from "../MasterChefModule";
export declare class MasterChefModule__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MasterChefModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MasterChefModule;
}
//# sourceMappingURL=MasterChefModule__factory.d.ts.map