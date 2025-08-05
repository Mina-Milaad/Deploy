import { catchError } from "../../middleware/catchError.js";
import { Client } from "../../../database/model/client.model.js";


export const addClient = catchError(async (req, res, next) => {
    let client = new Client(req.body);
    await client.save();
    res.status(201).json({ message: "client added successfully", client });
})


export const allClients = catchError(async (req, res, next) => {
    const clients = await Client.find();
    res.status(200).json({ message: "clients fetched successfully", clients });
})