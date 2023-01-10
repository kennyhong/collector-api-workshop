import * as mongodb from "mongodb";
 
export interface Collector {
   name: string;
   _id?: mongodb.ObjectId;
}