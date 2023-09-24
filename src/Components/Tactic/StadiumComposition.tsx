import React, { useState, useEffect } from 'react';
import "./../../scss/Tactic/TacticComposition.scss"
import {Players} from './TacticComposition'
import kit from './../../Images/kit.png'

interface CompositionProps {
  Team : Players[][], 
  openPlayerModal :  (player: string, index: number) => void, 
  openRoleModal :  (player: Players) => void ,
  getIndexOrganisePlayer : (index: number, index2: number, compo: Players[][]) => number
}

const StadiumComposition: React.FC<CompositionProps> = ({Team, openPlayerModal, openRoleModal, getIndexOrganisePlayer}) => {
  return (
    <div className='stadium-composition'>
    {Team.map((line, index) => {
      return (
        <div className='line' key={index}>
          {line.map((player, index2) => {
            return (
              <div className='player' key={index2}>
                <div className='number-kit'>
                  <img src={kit} alt="kit"></img>
                  <h3>{player.number}</h3>
                </div>
                <span>{player.name}</span>
                <div className='open-modal'>
                  <h5 onClick={() => openPlayerModal(player.poste, getIndexOrganisePlayer(index, index2, Team))} >{player.poste}</h5>
                  <button onClick={() => openRoleModal(player)}>{player.role !== null ? player.role : player.favRole}</button>
                </div>
              </div>
            )
          })}
        </div>
      )
    })}
  </div>
  );
};

export default StadiumComposition;