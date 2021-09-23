import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import Wallet from "../ethereum/Wallet";
import LingerieGirlsArtifact from "./lingeriegirls/artifacts/contracts/LingerieGirls.sol/LingerieGirls.json";
import { LingerieGirls } from "./lingeriegirls/typechain";
import LPTokenContract from "./LPTokenContract";
import ERC721EnumerableContract from "./standard/ERC721EnumerableContract";

class LingerieGirlsContract extends ERC721EnumerableContract<LingerieGirls> {

    constructor() {
        super(Config.contracts.LingerieGirls, LingerieGirlsArtifact.abi, [
            "Support",
            "Desupport",
        ]);
    }

    public async getSupportedLP(id: number): Promise<BigNumber> {
        const [, supportedLPTokenAmount] = await this.contract.lingerieGirls(id);
        return supportedLPTokenAmount;
    }

    public async ownerOf(id: number): Promise<string> {
        return await this.contract.ownerOf(id);
    }

    public async support(id: BigNumberish, lpTokenAmount: BigNumberish) {

        const contract = await this.connectAndGetWalletContract();
        const owner = await Wallet.loadAddress();
        if (contract !== undefined && owner !== undefined) {

            if ((await LPTokenContract.allowance(owner, this.address)).lt(lpTokenAmount)) {

                const deadline = Math.ceil(Date.now() / 1000) + 1000000;
                const signed = await Wallet.signERC20Permit(

                    await LPTokenContract.getName(),
                    "1",
                    LPTokenContract.address,

                    this.address,
                    lpTokenAmount,
                    await LPTokenContract.getNonce(owner),
                    deadline,
                );

                await contract.supportWithPermit(id, lpTokenAmount, deadline, signed.v, signed.r, signed.s);
            } else {
                await contract.support(id, lpTokenAmount);
            }
        }
    }

    public async desupport(id: BigNumberish, lpTokenAmount: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.desupport(id, lpTokenAmount);
    }
}

export default new LingerieGirlsContract();
