import {IWallet} from "./wallet";
import {ISpending} from "./spending";
import {model, Schema} from "mongoose";

interface IDetail {
    money?: number,
    Wallet?: IWallet
    Spending?: ISpending
}

const DetailSchema = new Schema<IDetail>({
    money: Number,
    Wallet: {
        type: Schema.Types.ObjectId,
        ref: 'Wallet'
    },
    Spending: {
        type: Schema.Types.ObjectId,
        ref: 'Spending'
    }
});
const Detail = model<IDetail>('Detail', DetailSchema);
export {Detail};