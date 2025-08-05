import { Router } from "express";
import { addClient, allClients } from "./client.controller.js";



const clientRouter = Router();

clientRouter.route('/').post(addClient).get(allClients);


export default clientRouter;