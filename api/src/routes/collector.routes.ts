import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "../database";
 
export const collectorRouter = express.Router();
collectorRouter.use(express.json());
 
collectorRouter.get("/", async (_req, res) => {
   try {
       const collectors = await collections.collectors.find({}).toArray();
       res.status(200).send(collectors);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

collectorRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        // Code Task 1 Here
        res.status(200).send(`NOT YET IMPLEMENTED`)
    } catch (error) {
        res.status(404).send(`Failed to find an collector: ID ${req?.params?.id}`);
    }
 });

 collectorRouter.post("/", async (req, res) => {
    try {
        const collector = req.body;
        const result = await collections.collectors.insertOne(collector);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new collector: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new collector.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });

 // Add Card to Collector's Collection
 collectorRouter.post("/:collectorId", async (req, res) => {
    try {
        const cardId = req.body.cardId;
        const condition = req.body.condition;
        const collectorId = req?.params?.collectorId;

        // Code Task 3 Here!
        res.status(200).send(`NOT YET IMPLEMENTED`)
        
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});


