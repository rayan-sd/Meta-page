import React from 'react';
import player from './../Images/players.png'
import vms from './../Images/vms.png'
import "./../scss/Profile.scss"


interface Players {
    name: string;
    reputation: string;
    poste: string;
    nationality: string;
    age: string;
    image: JSX.Element;
    numero: number;
    season: number;
}

const players: Players[] = [
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
    { name: 'Takimu Hibo', age: "22", reputation: "SuperStar", poste: 'CM', nationality: "Japan", image: <img src={player} alt="player" />, numero: 15, season: 0 },
];

const Profile: React.FC = () => {
    return (
        <section className='Profile'>
            <div className='container-profile-flex'>
                <div className='container-info-manager'>
                    <img src={vms} alt="userProfile"></img>
                    <h3>Nom de coach</h3>
                    <h4>Nom du club</h4>
                    <span>0x9b3E...7a5Bc</span>
                </div>
                <div className='container-players-show'>
                    <h4>Players</h4>
                    <div className='container-grid-card'>
                        {players.map((player, index) => (
                            <div className='box-player'
                                key={index}
                                style={{
                                    backgroundImage: `url(${player.image.props.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Profile;
