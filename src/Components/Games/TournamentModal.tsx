import React from 'react';
import { Tournaments } from './AllGames';
import "./../../scss/Games/TournamentModal.scss"
import { useNavigate } from "react-router";

interface TournamentModalProps {
  tournament: Tournaments | null;
  isOpen: boolean;
  onClose: () => void;
}

const TournamentModal: React.FC<TournamentModalProps> = ({ tournament, isOpen, onClose }) => {
    let navigate = useNavigate();

  if (!isOpen || !tournament) {
    return null;
  }

  const confirmEntry = () => {
    // Votre logique de confirmation ici...
  
    // Naviguez vers TournamentMatches
    navigate("/tournamentview", { state: { tournament } });
    }

  return (
    <div className="modal">
      <div className="modal-content-tournament">
        <div className='title-modal-tournament'>
            <span className="close" onClick={onClose}>&times;</span>
            <div>
                <div className='name-city'>
                    <h2>{tournament.name}</h2>
                    <p>{tournament.city}</p>
                </div>
                <h2>{tournament.reputation}</h2>
            </div>
        </div>
        <div className='flex-tournament'>
            <div>
                <h2>Registered</h2>
                <p>{tournament.numberRegistered}/{tournament.participant}</p>
            </div>

            <div>
                <h2>Entry Fee</h2>
                <div>
                    <p>{tournament.entryFees} ETH</p>
                    <p>({tournament.entryFees} €)</p>
                </div>
            </div>
            <div>
                <h2>Prize Pool</h2>
                <div>
                    <p>{tournament.pricePool} ETH</p>
                    <p>({tournament.pricePoolE} €)</p>
                </div>
            </div>
            <div>
                <h2>First Game</h2>
                <p>When the room is full</p>
            </div>
        </div>
        <div className='but-box'>
            <button onClick={confirmEntry}>ENTER</button>
        </div>
      </div>
    </div>
  );
};

export default TournamentModal;
