# Collector API Backend

## Getting Started!
Once you clone your repo you can open up your terminal and do the following to get started locally.

Please create a `.env` file in the `api` folder and input the following in the file:

```
ATLAS_URI=mongodb+srv://rbcuser:rbcpassword@rbcworkshop.rseanjq.mongodb.net/?retryWrites=true&w=majority
POKEMONTCG_API_KEY=6b5ad362-458b-4aee-be9a-a0e5d17af69a
```

`ATLAS_URI` will connect you to our fake database

`POKEMONTCG_API_KEY` will connect you to the PokemonTCG data api for information

Once the `.env` file is created you can run the following commands in terminal to get started! (Starting at the root of the project)

```
cd api
npm i
npx ts-node src/server.ts
```

`cd api` - If you're at the root of the project, this will take you to the api folder

`npm i` - This will tell node package manager to install the packages you need to start

`npx ts-node src/server.ts` - This will start the server locally on localhost:5200 for you to test!

## Some fun calls to make to try it out

`GET` `http://localhost:5200/tcg/swsh12/188` Will get card information

## Resources that can help you out!

* NodeJs Installation: https://nodejs.org/en/

* Pokemon TCG API: https://pokemontcg.io/ (Examples in Repo!)

* Postman: https://www.postman.com/

* CRUD functions with typescript: https://www.mongodb.com/compatibility/using-typescript-with-mongodb-tutorial


## Task 1
In this task, you will be coding the functionality to display the details of each specific card of a collector's collection. Using the Pokemon TCG API (some examples can be found the the `tcgapi.routes.ts` file), you will query for each card's information and display it along with the card's condition from the `cards collection.

You can use the id `63c1aff90123d06bc3afb885` to test your task! 

You can find your task located in `cardcollection.routes.ts`.

Using `/collectors/63c1aff90123d06bc3afb885`, you can see what cards the collector has.

when `/cards/:collectorid` is called we should receive the following:
```json
[
    {
        "collectorInfo": {
            "_id": "63c1b20e0123d06bc3afb88a",
            "collectorId": "63c1b1fa0123d06bc3afb889",
            "cardId": "swsh12-184",
            "condition": "brand new"
        },
        "tcgApiInfo": {
            "id": "swsh12-184",
            "name": "Regidrago V",
            "supertype": "Pokémon",
            "subtypes": [
                "Basic",
                "V"
            ],
            "hp": "220",
            "types": [
                "Dragon"
            ],
            "rules": [
                "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
            ],
            "attacks": [
                {
                    "name": "Celestial Roar",
                    "cost": [
                        "Colorless"
                    ],
                    "convertedEnergyCost": 1,
                    "damage": "",
                    "text": "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon."
                },
                {
                    "name": "Dragon Laser",
                    "cost": [
                        "Grass",
                        "Grass",
                        "Fire"
                    ],
                    "convertedEnergyCost": 3,
                    "damage": "130",
                    "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
                }
            ],
            "retreatCost": [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            "convertedRetreatCost": 3,
            "set": {
                "id": "swsh12",
                "name": "Silver Tempest",
                "series": "Sword & Shield",
                "printedTotal": 195,
                "total": 215,
                "legalities": {
                    "unlimited": "Legal",
                    "standard": "Legal",
                    "expanded": "Legal"
                },
                "ptcgoCode": "SIT",
                "releaseDate": "2022/11/11",
                "updatedAt": "2022/09/09 11:45:00",
                "images": {
                    "symbol": "https://images.pokemontcg.io/swsh12/symbol.png",
                    "logo": "https://images.pokemontcg.io/swsh12/logo.png"
                }
            },
            "number": "184",
            "artist": "Hataya",
            "rarity": "Rare Ultra",
            "nationalPokedexNumbers": [
                895
            ],
            "legalities": {
                "unlimited": "Legal",
                "standard": "Legal",
                "expanded": "Legal"
            },
            "regulationMark": "F",
            "images": {
                "small": "https://images.pokemontcg.io/swsh12/184.png",
                "large": "https://images.pokemontcg.io/swsh12/184_hires.png"
            },
            "tcgplayer": {
                "url": "https://prices.pokemontcg.io/tcgplayer/swsh12-184",
                "updatedAt": "2023/01/09",
                "prices": {
                    "holofoil": {
                        "low": 36.99,
                        "mid": 45.69,
                        "high": 125,
                        "market": 39.15
                    }
                }
            },
            "cardmarket": {
                "url": "https://prices.pokemontcg.io/cardmarket/swsh12-184",
                "updatedAt": "2023/01/09",
                "prices": {
                    "averageSellPrice": 44.34,
                    "lowPrice": 32,
                    "trendPrice": 39.69,
                    "reverseHoloTrend": 0,
                    "lowPriceExPlus": 32,
                    "avg1": 54.95,
                    "avg7": 42.87,
                    "avg30": 44.17
                }
            }
        }
    },
    {
        "collectorInfo": {
            "_id": "63c1b2180123d06bc3afb88b",
            "collectorId": "63c1b1fa0123d06bc3afb889",
            "cardId": "swsh12-184",
            "condition": "mint"
        },
        "tcgApiInfo": {
            "id": "swsh12-184",
            "name": "Regidrago V",
            "supertype": "Pokémon",
            "subtypes": [
                "Basic",
                "V"
            ],
            "hp": "220",
            "types": [
                "Dragon"
            ],
            "rules": [
                "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
            ],
            "attacks": [
                {
                    "name": "Celestial Roar",
                    "cost": [
                        "Colorless"
                    ],
                    "convertedEnergyCost": 1,
                    "damage": "",
                    "text": "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon."
                },
                {
                    "name": "Dragon Laser",
                    "cost": [
                        "Grass",
                        "Grass",
                        "Fire"
                    ],
                    "convertedEnergyCost": 3,
                    "damage": "130",
                    "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
                }
            ],
            "retreatCost": [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            "convertedRetreatCost": 3,
            "set": {
                "id": "swsh12",
                "name": "Silver Tempest",
                "series": "Sword & Shield",
                "printedTotal": 195,
                "total": 215,
                "legalities": {
                    "unlimited": "Legal",
                    "standard": "Legal",
                    "expanded": "Legal"
                },
                "ptcgoCode": "SIT",
                "releaseDate": "2022/11/11",
                "updatedAt": "2022/09/09 11:45:00",
                "images": {
                    "symbol": "https://images.pokemontcg.io/swsh12/symbol.png",
                    "logo": "https://images.pokemontcg.io/swsh12/logo.png"
                }
            },
            "number": "184",
            "artist": "Hataya",
            "rarity": "Rare Ultra",
            "nationalPokedexNumbers": [
                895
            ],
            "legalities": {
                "unlimited": "Legal",
                "standard": "Legal",
                "expanded": "Legal"
            },
            "regulationMark": "F",
            "images": {
                "small": "https://images.pokemontcg.io/swsh12/184.png",
                "large": "https://images.pokemontcg.io/swsh12/184_hires.png"
            },
            "tcgplayer": {
                "url": "https://prices.pokemontcg.io/tcgplayer/swsh12-184",
                "updatedAt": "2023/01/09",
                "prices": {
                    "holofoil": {
                        "low": 36.99,
                        "mid": 45.69,
                        "high": 125,
                        "market": 39.15
                    }
                }
            },
            "cardmarket": {
                "url": "https://prices.pokemontcg.io/cardmarket/swsh12-184",
                "updatedAt": "2023/01/09",
                "prices": {
                    "averageSellPrice": 44.34,
                    "lowPrice": 32,
                    "trendPrice": 39.69,
                    "reverseHoloTrend": 0,
                    "lowPriceExPlus": 32,
                    "avg1": 54.95,
                    "avg7": 42.87,
                    "avg30": 44.17
                }
            }
        }
    }
]
```

HINT:
<details>
  <summary>Task 1 Hint</summary>
  
  Break up the task and try to figure out what to do
  1. Get all the cards from the collector's collection
  2. For each card found, call the PokemonTCGApi to get the cards information and combine the collector's card info with the api's info
  3. add object to an array
  4. Send array
  
</details>

## Task 2
Your group is tasked with adding a card to a collection given the collector's Id. 

When a user does a `POST` call with a JSON body of collectorId (given below), cardId(you can use `SWSH12-184` in the call on postman for better results), and condition of the card(any string describing the card) to `/collectors/:collectorId` it should be added to the `cards` collection. After the card has been added, send a 200 response.

You can use `63c1b1fa0123d06bc3afb889` and query `/collectors/63c1b1fa0123d06bc3afb889` to see if your card has been added.


You can find your task located in `collector.routes.ts`

For Example:
Before card's been added:
```json
{
    "collector": {
        "_id": "63b84cf812ecb06707bfcc80",
        "name": "Ash Ketchum"
    },
    "collection": [
        {
            "_id": "63bc92f3b37fd379bfa04e6f",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-155",
            "condition": {
                "condition": "mint"
            }
        },
        {
            "_id": "63bc9306b37fd379bfa04e70",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-186",
            "condition": "near mint"
        },
        {
            "_id": "63bc933bb37fd379bfa04e71",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-186",
            "condition": "brand new"
        },
        {
            "_id": "63bc9341b37fd379bfa04e72",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-12",
            "condition": "brand new"
        }
    ]
}
```

After the card's been added:
```json
{
    "collector": {
        "_id": "63b84cf812ecb06707bfcc80",
        "name": "Ash Ketchum"
    },
    "collection": [
        {
            "_id": "63bc92f3b37fd379bfa04e6f",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-155",
            "condition": {
                "condition": "mint"
            }
        },
        {
            "_id": "63bc9306b37fd379bfa04e70",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-186",
            "condition": "near mint"
        },
        {
            "_id": "63bc933bb37fd379bfa04e71",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-186",
            "condition": "brand new"
        },
        {
            "_id": "63bc9341b37fd379bfa04e72",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-12",
            "condition": "brand new"
        },
        {
            "_id": "63c1bdb50123d06bc3afb88d",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-184",
            "condition": "mint"
        }
    ]
}
```

## Task 3
Your group is tasked with removing a card from a collector's collection

When a user does a `DELETE` call using a card object id (from mongo), it will be deleted from the `cards` collection. Once the card's been deleted, send a response saying its success otherwise send an error Due to the nature of this task, please work together!

You can find your task located in `cardcollection.routes.ts`

Before `63c1bebb0123d06bc3afb894` is deleted:

```json
{
    "collector": {
        "_id": "63c1be850123d06bc3afb88e",
        "name": "Tester Task 3"
    },
    "collection": [
        {
            "_id": "63c1bea10123d06bc3afb88f",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-186",
            "condition": "mint"
        },
        {
            "_id": "63c1bea50123d06bc3afb890",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-184",
            "condition": "mint"
        },
        {
            "_id": "63c1bea90123d06bc3afb891",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-183",
            "condition": "mint"
        },
        {
            "_id": "63c1bead0123d06bc3afb892",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-181",
            "condition": "mint"
        },
        {
            "_id": "63c1beb20123d06bc3afb893",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-179",
            "condition": "mint"
        },
        {
            "_id": "63c1bebb0123d06bc3afb894",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-160",
            "condition": "mint"
        }
    ]
}
```

After `63c1bebb0123d06bc3afb894` is deleted:
```json
{
    "collector": {
        "_id": "63c1be850123d06bc3afb88e",
        "name": "Tester Task 3"
    },
    "collection": [
        {
            "_id": "63c1bea10123d06bc3afb88f",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-186",
            "condition": "mint"
        },
        {
            "_id": "63c1bea50123d06bc3afb890",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-184",
            "condition": "mint"
        },
        {
            "_id": "63c1bea90123d06bc3afb891",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-183",
            "condition": "mint"
        },
        {
            "_id": "63c1bead0123d06bc3afb892",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-181",
            "condition": "mint"
        },
        {
            "_id": "63c1beb20123d06bc3afb893",
            "collectorId": "63c1be850123d06bc3afb88e",
            "cardId": "swsh12-179",
            "condition": "mint"
        }
    ]
}
```


## Task 4

Your group is tasked with modifying the condition of a card and updating it. When a user sends a `PUT` call with a new `condition` update the card object's condition and send an appropriate response when completed. You can the condition of the user `Ash Ketchum` by calling `/collectors/63b84cf812ecb06707bfcc80`.

You can also use a card within that collection such as `63bc9306b37fd379bfa04e70` to modify it's condition.

You can find your task located in `cardcollection.routes.ts`

For example:
Before modification of `63bc9306b37fd379bfa04e70`
```json
{
    "collector": {
        "_id": "63b84cf812ecb06707bfcc80",
        "name": "Ash Ketchum"
    },
    "collection": [
        {
            "_id": "63bc92f3b37fd379bfa04e6f",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-155",
            "condition": "wer"
        }
    ]
}
```

After modification of `63bc9306b37fd379bfa04e70`:
```json
{
    "collector": {
        "_id": "63b84cf812ecb06707bfcc80",
        "name": "Ash Ketchum"
    },
    "collection": [
        {
            "_id": "63bc92f3b37fd379bfa04e6f",
            "collectorId": "63b84cf812ecb06707bfcc80",
            "cardId": "swsh12-155",
            "condition": "broken"
        }
    ]
}

```
