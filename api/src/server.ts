import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";
import { collectorRouter } from "./routes/collector.routes";
import { cardCollectionRouter } from "./routes/cardcollection.routes";
import { tcgapiRouter } from "./routes/tcgapi.routes";
import {default as bp} from "body-parser";

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
 
const { ATLAS_URI } = process.env;
 
if (!ATLAS_URI) {
   console.error("No ATLAS_URI environment variable has been defined in config.env");
   process.exit(1);
}

const port = process.env.PORT || 5200
 
connectToDatabase(ATLAS_URI)
   .then(() => {
       const app = express();
       app.use(cors());
       app.use(bp.json());
       app.use("/collectors", collectorRouter);
       app.use("/cards", cardCollectionRouter);
       app.use("/tcg", tcgapiRouter)

       app.get('/', (req, res) => {
        res.send('Express + TypeScript Server');
        });
       // start the Express server
       app.listen(port, () => {
           console.log(`Server running at ` + port);
       });
 
   })
   .catch(error => console.error(error));