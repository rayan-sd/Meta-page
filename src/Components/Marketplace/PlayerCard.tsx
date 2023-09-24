import React from 'react';
import { Players } from './InitialPlayers';
import "./../../scss/Marketplace/PlayerCard.scss"

interface PlayerCardProps {
    player: Players;
}

const PlayerCard: React.FC<PlayerCardProps> = (props) => {
    const { player } = props;

    return (
        <div className="box-player"
        style={{ 
            backgroundImage: `url(${player.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat : "no-repeat"
        }}
        >
            <div className='box-top-card'>
                <div className='flex-box'>
                    <h2>{player.name}</h2>
                    <h2>{player.poste}</h2>
                </div>
                <h3>{player.nationality}</h3>
            </div>
            <div className='box-bottom-card'>
                <div className='box-reputation-card'>
                    <div className='align-box'>
                        <h5>Season</h5>
                        <h4>{player.season}</h4>
                    </div >
                    <h4>{player.reputation}</h4>
                    <div className='align-box'>
                        <h5>Age</h5>
                        <h4>{player.numero}</h4>
                    </div >

                    {/* <h4>{player.poste}</h4> */}
                </div>
                <div className='box-content-card'>
                    <div className='align-box'>
                        <h5>Club</h5>
                        <h4>{player.club}</h4>
                    </div>
                    <div className='align-box'>
                        <h5>Highest Bid</h5>
                        <h4>{player.price} ETH</h4>
                    </div>
                </div>
            </div>
            {/* <img src={player.image} alt={player.name} /> */}
        </div>
    );
};

export default PlayerCard;
