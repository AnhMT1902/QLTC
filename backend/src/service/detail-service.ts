import {Request, Response} from "express";
import {Wallet} from "../model/wallet";
import {Detail} from "../model/detail";
import {Spending} from "../model/spending";

class DetailService {
    getAll = async (req: Request, res: Response) => {
        let idWallet = req.params.id
        let walletDetail = await Detail.find({idWallet: idWallet})
        res.status(200).json(walletDetail)
    }
    creatDetail = async (req: Request, res: Response) => {
        let idWallet = req.params.id
        let detail = req.body
        detail.idWallet = idWallet;
        await Detail.create(detail)
        return res.status(200).json(detail)
    }

    deleteDetail = async (req: Request, res: Response) => {
        let idDetail = req.params.id
        let detail = Detail.find({_id: idDetail})
        let arrDetail = await Detail.deleteOne(detail)
        return res.status(200).json({
            message: 'success'
        })
    }


    findByIdSpending = async (req: Request, res: Response, idS) => {
        let arrDetail = await Spending.find({idSpending: idS})
        if (arrDetail.length === 0) {
            return false
        } else {
            return true
        }
    }
}

export default new DetailService()