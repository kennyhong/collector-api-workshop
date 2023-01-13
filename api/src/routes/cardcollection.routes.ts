import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "../database";
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

export const cardCollectionRouter = express.Router();
cardCollectionRouter.use(express.json());

// Get ALL cards in everyone's collection
cardCollectionRouter.get("/", async (_req, res) => {
    try {
        const cards = await collections.cards.find({}).toArray();
        res.status(200).send(cards);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a Collector's Collection and use the API to display the collections details
cardCollectionRouter.get("/:collectorId", async (req, res) => {
    try {
        const id = req?.params?.collectorId;
        const infoCards: any[] = []; // use this to send

        // Code Task 1 Here
        res.status(200).send(`NOT YET IMPLEMENTED: ` + infoCards)

    } catch (error) {
        res.status(404).send(`Failed to find a collector's cards: ${req?.params?.collectorId}`);
    }
});


// Given Card Object/Document Id Delete Card
cardCollectionRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        // Code Task 3 Here

        res.status(200).send(`NOT YET IMPLEMENTED`)


    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});


 cardCollectionRouter.put("/:cardId", async (req, res) => {
    try {
        const id = req?.params?.cardId;
        const newCondition = req.body.newCondition;

        const result = await collections.cards.updateOne({ cardId: id }, { $set: { condition: newCondition } });

        if (result.modifiedCount === 0) {
            res.status(400).send("u forgor (the right card id) 💀");
        } else {
            res.status(200).send("bruh it worked 🤯");
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });