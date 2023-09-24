import React from 'react';
import { Players } from './TacticComposition';
import "./../../scss/Tactic/Modal.scss"

interface ModalProps {
  players: Players[];
  onClose: () => void;
  onSelect: (player: Players) => void;
}

const PlayerModal: React.FC<ModalProps> = ({ players, onClose, onSelect }) => {
  if (!players.length) return null;

  // Trier les joueurs de sorte que ceux dont l'attribut 'enable' est 'false' viennent en premier
  const sortedPlayers = [...players].sort((a, b) => a.enable === b.enable ? 0 : a.enable ? 1 : -1);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='title-modal'>
          <h5>Choose your player</h5>
          <span className='close' onClick={onClose}>&times;</span>
        </div>
        <div className='modal-flex-player'>
          <table>
            <thead>
              <tr>
                <th>Position Comp.</th>
                <th>Fav Pos.</th>
                <th>Name</th>
                <th>Reputation</th>
                <th>DNA</th>
                <th> Fav. Role</th>
                <th>Nat.</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((player, index) => (
                <tr key={index}
                  className={player.enable ? "modal-player" : "modal-player-disable"}
                  onClick={() => {
                    if (player.enable) {
                      onSelect(player);
                      onClose();
                    }
                  }}>
                <td className='bold'>
                  {player.enable ? "-" : player.poste}
                </td>
                  {/* <td className='bold'>{player.poste}</td> */}
                  <td>{player.favPosition}</td>
                  <td>{player.name}</td>
                  <td className='reputation'>{player.reputation}</td>
                  <td>{player.dna}</td>
                  <td>{player.favRole}</td>
                  <td>{player.nationality}</td>
                  {/* <td className='index-up'>
                  {player.enable ? <button>Add</button> : ""}
                  </td> */}
                </tr>
              ))}
              {/* {sortedPlayers.map((player, index) => (
            <div key={index}
                className={player.enable ? "modal-player" : "modal-player-disable"}
                onClick={() => {
                  if (player.enable) {
                    onSelect(player);
                    onClose();
                  }
                }}>
              <h2>{player.poste}</h2>
              <h2>{player.favPosition}</h2>
              <h2>{player.name}</h2>
              <p className='reputation'>{player.reputation}</p>
              <p>{player.dna}</p>
              <p>{player.role}</p>
              <p>{player.nationality}</p>
            </div>
          ))} */}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
