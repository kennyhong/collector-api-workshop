// TASK 1: Get a collector's info and collection

// query object the collectors mongo collection with collectors ID
const query = { _id: new mongodb.ObjectId(id) };

// query object for the cards mongo collection using collector id
const cardsQuery = {collectorId: id};

// query collectors collection for the collector
const collector = await collections.collectors.findOne(query);

// query the cards collection for all of the collector's cards
const cards = await collections.cards.find(cardsQuery).toArray();


// combine them to one object
let collectorObj = {
    collector: collector,
    collection: cards
}

// send results or error
if (collectorObj) {
    res.status(200).send(collectorObj);
} else {
    res.status(404).send(`Failed to find an collector: ID ${id}`);
}
  

// TASK 2: Get cards in a collector's collection and send information

// query object for cards collection
const query = {collectorId: id};

// query cards collection for all cards in the collection
const cards = await collections.cards.find(query).toArray();

// create an any[] type array (some may struggle with this part)
const infoCards: any[] = [];

// for each card in the array cards
for (const collectorCard of cards) {
   try {
        // get the info using POKEMON TCG
        await PokemonTCG.findCardByID(collectorCard.cardId).then((card: PokemonTCG.Card) => {
            // combine the collector card info with the info from tcgApi
            const cardInfo = {
                collectorInfo: collectorCard,
                tcgApiInfo: card
            }
            // push card into array
            infoCards.push(cardInfo)
    }).catch(error => {
        res.status(500).send(`error with API: ` + error)
    })
   } catch (err) {
        res.status(500).send(`error with API`)
   }
}

// send all cards
if (infoCards) {
    res.status(200).send(infoCards);
} else {
    res.status(404).send(`Failed to find any cards: ID ${id}`);
}

// TASK 3: Add card to collector's collection

// Collector object for collectors collection
const insertCollection = {
    collectorId: collectorId,
    cardId: cardId,
    condition: condition
};

// Insert object to collectors collection
const result = await collections.cards.insertOne(insertCollection);

// Send results
if (result.acknowledged) {
    res.status(201).send(`Added new card to Collector's Collection ${result.insertedId}.`);
} else {
    res.status(500).send("Failed to create a new card.");
}


//TASK 4: Delete a card given a card object id

// query object for card object ID
const query = { _id: new mongodb.ObjectId(id) };

// results of deleting card
const result = await collections.cards.deleteOne(query);

// send results
if (result && result.deletedCount) {
    res.status(202).send(`Removed an card: ID ${id}`);
} else if (!result) {
    res.status(400).send(`Failed to remove an card: ID ${id}`);
} else if (!result.deletedCount) {
    res.status(404).send(`Failed to find an card: ID ${id}`);
}

// TASK 5: Edit a card's condition

// query object for card object ID
const query = { _id: new mongodb.ObjectId(id) };

// get current card information
const currentCard = await collections.cards.findOne(query);

// replace current condition with new condition
const newCardConditiom = {
    collectorId: currentCard.collectorId,
    cardId: currentCard.cardId,
    condition: newCondition
}

// update the object in collections
const result = await collections.cards.updateOne(query, { $set: newCardConditiom });

// send results
if (result && result.matchedCount) {
    res.status(200).send(`Updated an collector's card condition: ID ${id}.`);
} else if (!result.matchedCount) {
    res.status(404).send(`Failed to find a collector's card condition: ID ${id}`);
} else {
    res.status(304).send(`Failed to update a collector's card condition: ID ${id}`);
}





// Won't need this for the workshop!

//  collectorRouter.put("/:id", async (req, res) => {
//     try {
//         const id = req?.params?.id;
//         const collector = req.body;
//         const query = { _id: new mongodb.ObjectId(id) };
//         const result = await collections.collectors.updateOne(query, { $set: collector });
  
//         if (result && result.matchedCount) {
//             res.status(200).send(`Updated an collector: ID ${id}.`);
//         } else if (!result.matchedCount) {
//             res.status(404).send(`Failed to find an collector: ID ${id}`);
//         } else {
//             res.status(304).send(`Failed to update an collector: ID ${id}`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
//  });

//  collectorRouter.delete("/:id", async (req, res) => {
//     try {
//         const id = req?.params?.id;
//         const query = { _id: new mongodb.ObjectId(id) };
//         const result = await collections.collectors.deleteOne(query);
  
//         if (result && result.deletedCount) {
//             res.status(202).send(`Removed an collector: ID ${id}`);
//         } else if (!result) {
//             res.status(400).send(`Failed to remove an collector: ID ${id}`);
//         } else if (!result.deletedCount) {
//             res.status(404).send(`Failed to find an collector: ID ${id}`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
//  });