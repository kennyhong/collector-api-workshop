import * as mongodb from "mongodb";
import { Collector } from "./interfaces/collector";
import { Card } from "./interfaces/card";
 
export const collections: {
   collectors?: mongodb.Collection<Collector>;
   cards?: mongodb.Collection<Card>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("rbc-workshop");
   await applySchemaValidation(db);
 
   const collectorsCollection = db.collection<Collector>("collectors");
   collections.collectors = collectorsCollection;

   const cardsCollection = db.collection<Card>("cards");
   collections.cards = cardsCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Collector model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const collectorSchema = {
       $collectorSchema: {
           bsonType: "object",
           required: ["name"],
           additionalProperties: false,
           properties: {
               _id: {},
               name: {
                   bsonType: "string",
                   description: "'name' is required and is a string",
               },
           },
       },
   };

   const cardSchema = {
    $cardSchema: {
        bsonType: "object",
        required: ["collectorId", "cardId"],
        additionalProperties: false,
        properties: {
            _id: {},
            _collectorId: {
                bsonType: "string",
                description: "'collectorId' is required and is a string"
            },
            cardId: {
                bsonType: "string",
                description: "'cardId' is required and is a string",
            }
        },
    },
};
   
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "collectors",
       validator: collectorSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("collectors", {validator: collectorSchema});
       }
   });

   await db.command({
    collMod: "cards",
    validator: cardSchema
}).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection("cards", {validator: cardSchema});
    }
});
}