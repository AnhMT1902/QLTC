import {model, Schema} from "mongoose";
import {IUser} from "./user";

export interface ISpending {
    name?: string,
    description?: string,
    classify?: boolean
    User?: IUser
}

const SpendingSchema = new Schema<ISpending>({
    name: String,
    description: String,
    classify: Boolean,
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
const Spending = model<ISpending>('Spending', SpendingSchema);
export {Spending};
