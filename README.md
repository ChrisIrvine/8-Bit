# 8-Bit
Repo for the 8-Bit hack

# API

## Get a game
GET api/game?player1=id&player2=id
  Return a json object describing the game
 
 POST api/game?player1=id&player2=id
  body: a json file describing the new game state
  
## JSON file schema
The JSON game file has the following properties:
player1Id: string	#The numeric id of player 1
player2Id: string	#The numeric id of player 2
players: [ Player ]
baseLevel: int	#The level corresponds directly to which base image is served
xp: int

Of the two players, the smaller id is always player 1 (according to some comparator)

The player objects have the following properties:
name: String
avatar: int	#The id of the avatar used

