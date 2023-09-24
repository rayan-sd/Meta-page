import "./../../scss/HomePage/HomePage.scss"
import React from 'react';
import league from "./../../Images/league.png"
import one from "./../../Images/p-tournament.png"
import tournament from "./../../Images/tournament.png"
import game from "./../../Images/game.png"
import map from "./../../Images/map.png"
import clock from "./../../Images/clock.png"

const HomePage: React.FC = () => {


    return (
        <section className='HomePage'>
            <div className='container-HomePage'>
                <div className="container-Weekly-Tournament"
                    style={{
                        backgroundImage: `url(${one})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="box-info-tournament">
                        <h2>Weekly Meta Manager 64 Tournament</h2>
                        <h3>0.5 ETH (800 €) CASHPRIZE</h3>
                        <span>0.005 ETH entry fees</span>
                    </div>

                    <div className="box-join-tournament">
                        <div className="box-flex">
                            <img alt="clock" src={clock}></img>
                            <p>Friday 5:00 PM</p>
                        </div>
                        <div className="box-flex">
                            <img alt="map" src={map}></img>
                            <p>Paris</p>
                        </div>
                        <button>Join Now</button>
                    </div>
                </div>
                <div className="container-League"
                    style={{
                        backgroundImage: `url(${league})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="shadow"></div>
                    <h2>LEAGUE</h2>
                </div>
                <div className="container-Tournament"
                    style={{
                        backgroundImage: `url(${tournament})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="shadow"></div>
                    <h2>TOURNAMENT</h2>
                </div>
                <div className="container-Game"
                    style={{
                        backgroundImage: `url(${game})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="shadow"></div>
                    <h2>1 v 1 GAME</h2>
                </div>
            </div>
        </section>
    )
};

export default HomePage;
