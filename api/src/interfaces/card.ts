import * as mongodb from "mongodb";
 
export interface Card {
   cardId: string;
   collectorId: string;
   condition: string;
   _id?: mongodb.ObjectId;
}