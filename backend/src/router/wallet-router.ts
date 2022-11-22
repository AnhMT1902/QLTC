import {Router} from "express";
import WalletController from "../controller/wallet-controller";
import {auth} from "../middleware/auth";
export const walletRouter = Router();
walletRouter.use(auth)
// walletRouter.get('/show', WalletController.showWallet);
walletRouter.get('/show/:id', WalletController.showWalletById);
walletRouter.post('/create/:id', WalletController.createWallet);
walletRouter.delete('/delete/:id', WalletController.deleteWallet);
walletRouter.put('/edit/:id', WalletController.uploadWallet);
walletRouter.get('/find', WalletController.findWalletByName);