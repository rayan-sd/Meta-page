// Un joueur ou une équipe participant au tournoi
export interface Player {
    id: string;
    name: string;
    // Plus de champs en fonction de vos besoins
  }
  
  // Un match entre deux joueurs ou équipes
  export interface Match {
    id: string;
    player1: Player;
    player2: Player;
    winner: Player | null; // Le vainqueur du match. Null si le match n'a pas encore été joué
  }
  
  // Un tournoi composé de plusieurs rounds de matchs
  export interface Tournament {
    id: string;
    name: string;
    rounds: Match[][]; // Un tableau de rounds. Chaque round est un tableau de matchs
    currentRound: number; // L'index du round actuel dans le tableau "rounds"
  }
  