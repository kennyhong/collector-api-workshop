import * as express from "express";
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';


export const tcgapiRouter = express.Router();
tcgapiRouter.use(express.json());

// Get Information of a Specific Card in a Set
tcgapiRouter.get("/:setId/:cardId", async (_req, res) => {
    try {
        const setId = _req?.params?.setId;
        const cardId = _req?.params?.cardId;
        const fullID = setId + '-' + cardId;

        PokemonTCG.findCardByID(fullID).then((card: PokemonTCG.Card) => {
            res.status(200).send(card);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text)
        })
        
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get Information of all cards of a set
tcgapiRouter.get("/:setId", async (_req, res) => {
    try {
        const setId = _req?.params?.setId;

        const params: PokemonTCG.Parameter[] = [{q: 'set.id:' + setId}];

        PokemonTCG.findCardsByQueries(params[0]).then((cards: PokemonTCG.Card[]) => {
            res.status(200).send(cards);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text)
        })
        
    } catch (error) {
        res.status(500).send(error.message);
    }
});