import Config from "./Config";

class CommonUtil {

    public shortenAddress(address: string) {
        return `${address.substring(0, 6)}...${address.substring(38)}`
    }

    public displayBlockDuration(blockCount: number) {
        let seconds = blockCount * Config.blockTimeSecond;

        const day = Math.floor(seconds / 86400);
        seconds -= day * 86400;

        const hour = Math.floor(seconds / 3600);
        seconds -= hour * 3600;

        const minute = Math.floor(seconds / 60);
        seconds -= minute * 60;

        return day === 0 ? `${hour}h ${minute}m` : `${day}d ${hour}h ${minute}m`;
    }

    public numberWithCommas(x: string) {
        const parts = String(+(+x).toFixed(3)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}

export default new CommonUtil();
