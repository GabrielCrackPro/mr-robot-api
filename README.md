# Mr Robot API
[![GitHub license](https://img.shields.io/github/license/%7Busername%7D/%7Brepo-name%7D.svg)](https://github.com/GabrielCrackPro/mr-robot-api/master/LICENSE)

An API with data from Mr Robot TV series.

## Base URL
https://mr-robot-express-api.herokuapp.com/

## Endpoints

### Get series details


`````
GET /
https://mr-robot-express-api.herokuapp.com/
`````
- Response example:
`````json
{
 "docs": "https://github.com/GabrielCrackPro/mr-robot-api/blob/master/README.md",
 "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mr._Robot_Logo.svg",
 "name": "Mr. Robot",
 "description": "A young programmer is recruited by a mysterious firm to participate in its latest experiment, the one that will ultimately save the world.",
 "created_by": "Sam Esmail",
 "genres": […],
 "starring": […],
 "music": {…},
 "country": "United States",
 "originalLanguage": "English",
 "episodes": {…},
 "release": {…}
}
`````

### Get all seasons
`````
GET /seasons
https://mr-robot-express-api.herokuapp.com/seasons
`````
- Response example:
`````json
{	
"total": 45,
"season_1": {
  "season_id": 1,
  "episodes": 10,
  "first_aired": "2015-06-24",
  "last_aired": "2015-09-02"
  },
"season_2": {…},
"season_3": {…},
"season_4": {…}
}
`````

### Get a specific season by id
`````
GET /seasons/:season_id
https://mr-robot-express-api.herokuapp.com/seasons/:season_id
`````
- Response example:
`````json
{
 "season_id":1,
 "episodes":10,
 "first_aired":"2015-06-24",
 "last_aired":"2015-09-02"
}
`````

### Get all episodes
`````
GET /episodes
https://mr-robot-express-api.herokuapp.com/episodes
`````
- Response example:
````json
[
  {
    "overview": {
      "total": 45,
      "season_1": {
        "season_id": 1,
        "episodes": 10,
        "first_aired": "2015-06-24",
        "last_aired": "2015-09-02"
      },
      "season_2": {
        "season_id": 2,
        "episodes": 12,
        "first_aired": "2016-07-13",
        "last_aired": "2016-09-21"
      },
      "season_3": {
        "season_id": 3,
        "episodes": 10,
        "first_aired": "2017-10-11",
        "last_aired": "2017-12-13"
      },
      "season_4": {
        "season_id": 4,
        "episodes": 13,
        "first_aired": "2019-10-06",
        "last_aired": "2019-12-22"
      }
    },
    "all": [
      {
        "no_all": 1,
        "title": "eps1.0_hellofriend.mov",
        "directed_by": "Sam Esmail",
        "written_by": "Sam Esmail",
        "air_date": "2015-06-24",
        "us_milions_viewers": 1.75,
        "plot": "Socially inept Elliot Alderson works at cyber security company Allsafe. At night, he hacks social media, personal information, and bank records, including those of his co-workers, therapist, and a drug dealer. Elliot stops a DDoS attack against Allsafe's biggest client, E Corp. He identifies a file labeled fsociety00.dat and a text file asking him not to destroy malware he finds hidden on E Corp's server. Mr. Robot, the mysterious leader of the hacker group fsociety, contacts Elliot on the subway. Fsociety invites Elliot to join them in starting a digital revolution; they plan to delete all debt records held by E Corp. He is intrigued and eventually agrees. As his first collaborative act with fsociety, Elliot provides the FBI with an encrypted file falsely implicating Terry Colby, E Corp's own chief technology officer (CTO) as the orchestrator of the attack."
      }
      ...
    ]
  }
]
````
### Get a specific episode
````
GET /episodes:id
https://mr-robot-express-api.herokuapp.com/episodes/1
````
- Response example:
````json
{
"no_all": 1,
"title": "eps1.0_hellofriend.mov",
"directed_by": "Sam Esmail",
"written_by": "Sam Esmail",
"air_date": "2015-06-24",
"us_milions_viewers": 1.75,
"plot": "Socially inept Elliot Alderson works at cyber security company Allsafe. At night, he hacks social media, personal information, and bank records, including those of his co-workers, therapist, and a drug dealer. Elliot stops a DDoS attack against Allsafe's biggest client, E Corp. He identifies a file labeled fsociety00.dat and a text file asking him not to destroy malware he finds hidden on E Corp's server. Mr. Robot, the mysterious leader of the hacker group fsociety, contacts Elliot on the subway. Fsociety invites Elliot to join them in starting a digital revolution; they plan to delete all debt records held by E Corp. He is intrigued and eventually agrees. As his first collaborative act with fsociety, Elliot provides the FBI with an encrypted file falsely implicating Terry Colby, E Corp's own chief technology officer (CTO) as the orchestrator of the attack."
}
````

### Get a specific episode by its number in the season
````
GET /episodes/:season_id/:no_in_season
https://mr-robot-express-api.herokuapp.com/episodes/1/1
````
- Response example:
````json
{
 "no_all": 1,
 "no_season": 1,
 "title": "eps1.0_hellofriend.mov",
 "directed_by": "Sam Esmail",
 "written_by": "Sam Esmail",
 "air_date": "2015-06-24",
 "us_milions_viewers": 1.75,
 "plot": "Socially inept Elliot Alderson works at cyber security company Allsafe. At night, he hacks social media, personal information, and bank records, including those of his co-workers, therapist, and a drug dealer. Elliot stops a DDoS attack against Allsafe's biggest client, E Corp. He identifies a file labeled fsociety00.dat and a text file asking him not to destroy malware he finds hidden on E Corp's server. Mr. Robot, the mysterious leader of the hacker group fsociety, contacts Elliot on the subway. Fsociety invites Elliot to join them in starting a digital revolution; they plan to delete all debt records held by E Corp. He is intrigued and eventually agrees. As his first collaborative act with fsociety, Elliot provides the FBI with an encrypted file falsely implicating Terry Colby, E Corp's own chief technology officer (CTO) as the orchestrator of the attack."
}
````
### Get all characters
`````
GET /characters
https://mr-robot-express-api.herokuapp.com/characters
`````
- Response example:
````json
{
 {
   "id": 1,
   "name": "Rami Malek",
   "role": "Eliot Alderson",
   "image": "https://upload.wikimedia…282%29_%28cropped%29.jpg",
   "social": {…},
 },
 1: {…},
 2: {…},
 3: {…},
 4: {…},
 5: {…},
 ...
 "recurring": […]
}
````
### Get a specific character
````
GET /characters:id
https://mr-robot-express-api.herokuapp.com/characters/1
````
- Response example:
````json
	
{
 "id": 1,
 "name": "Rami Malek",
 "role": "Eliot Alderson",
 "image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Rami_Malek_in_2015_%282%29_%28cropped%29.jpg",
 "social": {
  "twitter": "https://twitter.com/ItsRamiMalek",
  "facebook": "RamiMalek",
  "instagram": "https://www.instagram.com/ramiimalek",
  }
}
````
## TODO

- [x] Define the API
- [x] Define the API endpoints
  - [x] Details
  - [x] Characters
    - [x] Get all characters
    - [x] Get a character by ID
  - [x] Episodes
    - [x] Get all episodes
    - [x] Get an episode by number in season
    - [x] Get an episode by ID
  - [x] Seasons
    - [x] Get all seasons
    - [x] Get a season by ID
- [x] Add documentation
- [x] Deploy to Heroku
- [ ] Create testing UI
