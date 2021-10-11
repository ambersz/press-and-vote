const TOKENS_PER_PLAYER = 5;
const MESSAGE_TURNS = 20;

class Game {
  constructor(numPlayers, messageTurns = MESSAGE_TURNS) {
    this.players = new Array(numPlayers);
    let i = numPlayers;
    while (i--) {
      this.players[i] = new Player(
        numPlayers,
        i,
        TOKENS_PER_PLAYER * numPlayers
      );
    }
    this.turn = 0;
    this.messages = new Array(messageTurns);
  }
  sendMessage(messageInfo) {
    let message = new Message(messageInfo);
    // TODO: validate offered tokens in escrow
    // TODO: remove offered tokens from pool and place in escrow
  }

  onRoundEnd() {
    // move tokens for accepted trades
    // 
  }
}

class Player {
  constructor(numPlayers, playerID, numTokens) {
    this.tokens = new Array(numPlayers).fill(0);
    this.tokens[playerID] = numTokens;

    // to keep tokens offered in trades from being "double-spent"
    this.tokenEscrow = new Array(numPlayers).fill(0);
  }
}

class Message {
  constructor({sourcePlayerID, targetPlayerID, offerVotingMatrix, requestVotingMatrix, offerTokens, requestTokens, responseToMessageID, ccPlayerIDs, bccPlayerIDs})
}
module.exports = {
  Game,
};
