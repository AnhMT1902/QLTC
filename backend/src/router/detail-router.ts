import {Router} from "express";
import DetailController from "../controller/detail-controller";

export const detailRouter = Router()
detailRouter.post("/:id",DetailController.creatDetail);
detailRouter.get("/:id",DetailController.showDetail);
detailRouter.delete("/delete/:id",DetailController.deleteDetail);
