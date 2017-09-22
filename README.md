# 2it Decision - BACK-END

Back-end designed to provide the business rules necessary for running the system 2it Decision.

## install

$ npm install

## run

$ npm start

## run test

$ npm test

## technologies

NodeJS, NeDB, Express, JWT, Mocha, Supertest, Lodash, ES6, Babel, 

## Testes

I couldn't write all tests that I wanted, but I tried to test the main endpoints behavior

## endpoints

This is the endpoints available

### manual use

Is possible to test all endpoint using the Postman collection exported and available on this zip file.

### POST    /login

    request-body: {
        "name": "kopzinski",
        "password": "123123"
    }

    response: {
        "message": "ok",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBtR1lnS2F0UWwydUFjc3giLCJpYXQiOjE1MDYwNDE1OTl9.4vIXMLXuH_WhKbs7uvqN2GuWtJPIWk0EKBunYlsFzhA"
    }


### PUT     /users

    request-body: {
        "name": "kopzinski",
        "password": "123123"
    }

    response: {
        "name": "cccccc",
        "password": "123123",
        "type": "USER",
        "_id": "0CAbmKpbTPnPHaIH"
    }

### GET     /places

    header: {
        Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBtR1lnS2F0UWwydUFjc3giLCJpYXQiOjE1MDYwNDE1OTl9.4vIXMLXuH_WhKbs7uvqN2GuWtJPIWk0EKBunYlsFzhA
    }
    
    response: [
        {
            "name": "apple biz",
            "type": "PLACE",
            "votes": [
                {
                    "userId": "pmGYgKatQl2uAcsx",
                    "date": 1506041788737
                }
            ],
            "_id": "jrAQ02qkxYBsP5gC"
        },
        {
            "name": "mac donalds",
            "type": "PLACE",
            "votes": [
                {
                    "userId": "nvlccBemNA8B3Ys5",
                    "date": 1506013032000
                }
            ],
            "_id": "Qf0lAonlbyvZDAlA"
        },
        {
            "name": "outback",
            "type": "PLACE",
            "votes": [

                {
                    "userId": "esXzCIPhyOxlNNiq",
                    "date": 1506011308447
                }
            ],
            "_id": "l0AuvaGTTZA1ua1i"
        },
        {
            "name": "burger king",
            "type": "PLACE",
            "votes": [
                {
                    "userId": "rOMamA02ajF1hm2u",
                    "date": 1505856731370
                },
            ],
            "_id": "cvrGQEfAiMHabkwQ"
        }
    ]

### PUT     /places

    header: {
        Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBtR1lnS2F0UWwydUFjc3giLCJpYXQiOjE1MDYwNDE1OTl9.4vIXMLXuH_WhKbs7uvqN2GuWtJPIWk0EKBunYlsFzhA
    }
    request-body: {
        "name": "apple biz"
    }

    response: {
        "name": "apple biz",
        "type": "PLACE",
        "votes": [
            {
                "userId": "pmGYgKatQl2uAcsx",
                "date": 1506041788737
            }
        ],
        "_id": "jrAQ02qkxYBsP5gC"
    }



### GET     /winner

    header: {
        Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBtR1lnS2F0UWwydUFjc3giLCJpYXQiOjE1MDYwNDE1OTl9.4vIXMLXuH_WhKbs7uvqN2GuWtJPIWk0EKBunYlsFzhA
    }

    response: {
        "name": "whole foods",
        "type": "PLACE",
        "votes": [
            {
                "userId": "rOMamA02ajF1hm2u",
                "date": 1505853662838
            }
        ],
        "_id": "e0DIahirHk3YJRnH",
        "qtyVotes": 2
    }


### POST    /places/:placeId/votes

    header: {
        Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBtR1lnS2F0UWwydUFjc3giLCJpYXQiOjE1MDYwNDE1OTl9.4vIXMLXuH_WhKbs7uvqN2GuWtJPIWk0EKBunYlsFzhA
    }

    response: many results can be returned
