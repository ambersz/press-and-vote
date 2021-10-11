lobby:

* by game ID
  * /:gameID
* input user name
* click button to join
  * /:gameID/join/:username
  * store user id in localstorage
* anyone can start the game
* manually refresh to see new user list

game initialization:

* n players
* construct n-player voting matrices
* give each player t*n trust tokens

game:

Message:
* message construction:
  * choose target of trade
  * fill out voting matrix on both sides
  * choose number and type of trust tokens on both sides
  * validation: cannot request/offer trust tokens which you do not have already
    * invalid voting matrx is allowed
  * choose which people can see the offered trade
* message response:
  * choose which people can see the response to trade
  * responses: 
    * accept, decline, new message

End Round:

* after user has prepared all messages they want to, end their turn
* when all users have ended their turns, send out all messages to users who can see them

Voting/Mock Voting:

* choose vote and submit
* when all votes submitted, declare winners



