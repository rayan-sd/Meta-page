import React from 'react';
import "./../../scss/Tactic/TacticComposition.scss"
import {Players} from './TacticComposition'

interface CompositionProps {
  teamFormation : Players[], 
  openPlayerModal :  (player: string, index: number) => void, 
  openNumberModal : (player: Players) => void , 
  openRoleModal :  (player: Players) => void , 
  handleRemovePlayer : (index: number, event: React.MouseEvent) => void
}

const CompositionPlayer: React.FC<CompositionProps> = ({teamFormation, openPlayerModal, openNumberModal, openRoleModal, handleRemovePlayer}) => {
  return (
      <div className='composition-players'>
        <table>
          <thead>
            <tr>
              <th>n°</th>
              <th>Position</th>
              <th className='flex-role'>Role</th>
              <th>Name</th>
              <th>DNA</th>
              <th>Fav Role</th>
              <th>Fav Pos.</th>
              <th>Reputation</th>
              <th>Nat.</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {teamFormation.map((player, index) => (
              <tr key={index}>
                <td className='button' onClick={() => openNumberModal(player)}>{player.number}</td>
                <td className='button' onClick={() => openPlayerModal(player.poste, index)}>{player.poste}</td>
                <td className='button' onClick={() => openRoleModal(player)}>
                  {player.role !== null ? player.role : player.favRole}
                </td>
                {/* <td className='button' onClick={() => openRoleModal(player)}>{player.role}</td> */}
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.name}</td>
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.dna}</td>
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.favRole}</td>
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.favPosition}</td>
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.reputation}</td>
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.nationality}</td>
                <td onClick={() => openPlayerModal(player.poste, index)}>{player.season}</td>
                <td className='index-up'>
                  {player.name && (
                    <button onClick={(event) => handleRemovePlayer(index, event)}>&times;</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
  );
};

export default CompositionPlayer;





// import React, { useState, useEffect } from 'react';
// import "./../../scss/Tactic/TacticComposition.scss"
// import {Players} from './TacticComposition'

// interface CompositionProps {
//   teamFormation : Players[], 
//   openPlayerModal :  (player: string, index: number) => void, 
//   openNumberModal : (player: Players) => void , 
//   openRoleModal :  (player: Players) => void , 
//   handleRemovePlayer : (index: number, event: React.MouseEvent) => void
//   usedNumbers: number[];
//   currentNumber: number | null;
//   onSelect: (number: number) => void;
// }

// const TacticComposition: React.FC<CompositionProps> = ({teamFormation, openPlayerModal, openNumberModal, openRoleModal, handleRemovePlayer, usedNumbers, onSelect}) => {
//   const [inputNumber, setInputNumber] = useState(currentNumber);
//   const [error, setError] = useState<string | null>(null);

//   const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setInputNumber(parseInt(event.target.value, 10));
//   };

//   const handleNumberSelect = () => {
//       if(inputNumber !== null) {
//           if (usedNumbers.includes(inputNumber)) {
//               setError('This number is already in use.');
//           } else {
//               onSelect(inputNumber);
//           }
//       }
//   };
  
//   return (
//       <div className='composition-players'>
//         <table>
//           <thead>
//             <tr>
//               <th>n°</th>
//               <th>Position</th>
//               <th className='flex-role'>Role</th>
//               <th>Name</th>
//               <th>DNA</th>
//               <th>Fav Role</th>
//               <th>Fav Pos.</th>
//               <th>Reputation</th>
//               <th>Nat.</th>
//               <th>Season</th>
//             </tr>
//           </thead>
//           <tbody>
//             {teamFormation.map((player, index) => (
//               <tr key={index}>
//                 <td className='button' onClick={() => openNumberModal(player)}>{player.number}</td>
//                 <td className='button' onClick={() => openPlayerModal(player.poste, index)}>{player.poste}</td>
//                 <td className='button' onClick={() => openRoleModal(player)}>
//                   {player.role !== null ? player.role : player.favRole}
//                 </td>
//                 {/* <td className='button' onClick={() => openRoleModal(player)}>{player.role}</td> */}
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.name}</td>
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.dna}</td>
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.favRole}</td>
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.favPosition}</td>
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.reputation}</td>
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.nationality}</td>
//                 <td onClick={() => openPlayerModal(player.poste, index)}>{player.season}</td>
//                 <td className='index-up'>
//                   {player.name && (
//                     <button onClick={(event) => handleRemovePlayer(index, event)}>&times;</button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>
//   );
// };

// export default TacticComposition;