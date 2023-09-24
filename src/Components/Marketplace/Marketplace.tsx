import "./../../scss/Marketplace/Marketplace.scss"
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, initialFilters } from './../../Store'
import PlayerCard from './PlayerCard';
import { initialPlayers } from './InitialPlayers';
import Filters from './Filters';

const Marketplace: React.FC = () => {
    // const players = useSelector((state: RootState) => state.players);
    const players = useSelector((state: RootState) => state.players) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_PLAYERS', payload: initialPlayers });
        dispatch({ type: 'SET_FILTERS', payload: initialFilters });
    }, [dispatch]);

    // const positionFilters = useSelector((state: RootState) => state.filters?.position);

    const positionFilters = useSelector((state: RootState) => state.filters?.position);

    const filteredPlayers = players.filter(player => {
        return positionFilters ? positionFilters[player.poste] : true;
    });
    

    return (
        <section className='Marketplace'>
            <div className='container-Marketplace'>
                <div className="container-categories">
                    <button>Transfert Market</button>
                    <button>Selling Players</button>
                    <button>Favorite Players</button>
                    <button>Historic</button>
                </div>
                <div className="container-marketplace">
                    <Filters />
                    <div className="box-player-marketplace">
                        <div className="box-filter-content-reputation">
                            <button>All</button>
                            <button>Icon</button>
                            <button>SuperStar</button>
                            <button>Great</button>
                            <button>Good</button>
                            <button>Starter</button>
                        </div>

                        <div className='box-visuel-pack'>
                            {
                                filteredPlayers.length > 0 ?
                                    filteredPlayers.map((player) => <PlayerCard key={player.name} player={player} />)
                                    :
                                    <p>Pas de joueurs disponible dans la marketplace.</p>
                            }
                            {/* {
                                players.length > 0 ?
                                    players.map((player) => <PlayerCard key={player.name} player={player} />)
                                    :
                                    <p>Pas de joueurs disponible dans la marketplace.</p>
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Marketplace;
