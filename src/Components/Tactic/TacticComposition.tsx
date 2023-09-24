import React, { useState, useEffect } from 'react';
import "./../../scss/Tactic/TacticComposition.scss"
import PlayerModal from './Modal';
import RoleModal from './ModalRole';
import TacticCategories from './TacticCategories';
import { players, formations, role } from './Constant';
import CompositionPlayer from './CompositionPlayers';
import StadiumComposition from './StadiumComposition'
import CompositionStrategie from './CompositionStrategie'
import NumberModal from './NumberModal';
import CompositionSysteme from './CompositionSysteme';

import { SyntheticEvent } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const initFormation = (formation: string[]): Players[] => {
  return formation.map((pos) => {
    return {
      name: "",
      reputation: null,
      poste: pos,
      role: null,
      nationality: null,
      number: null,
      favRole: null,
      favPosition: null,
      dna: null,
      season: null,
      enable: true
    }
  });
};



export interface Players {
  name: string;
  reputation: string | null;
  poste: string;
  role: string | null;
  nationality: string | null;
  number: number | null;
  favRole: string | null;
  favPosition: string | null;
  dna: string | null;
  season: number | null;
  enable: boolean;
}


const TacticComposition: React.FC = () => {
  const [composition, setComposition] = useState({ value: "4-3-3", label: "4-3-3" });
  const [philosophy, setPhilosophy] = useState({ value: "play on the wings", label: "play on the wings" });
  const [system, setSystem] = useState({ value: "neutral", label: "neutral" });
  const [Index, setIndex] = useState(0);

  const [teamFormation, setTeamFormation] = useState<Players[]>(initFormation(formations[composition.value]));
  const compositions = ['4-3-3', '4-4-2', '4-3-2-1', '4-2-3-1', '4-1-4-1'];
  const philosophies = ["possession control", "intensive pressing", "Tiki taka", "vertical tiki taka", "play on the wings", "long balls in front", "fluid counter attack", "direct counter attack", "catenaccio", "everyone behind"];
  const systems = ["ultra defensive", "defensive", "neutral", "offensive", "ultra offensive"];
  const [error, setError] = useState<string | null>(null);

  // Ajoutez ces pièces d'état à votre composant
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Players[]>([]);
  const [selectedPoste, setselectedPoste] = useState("");

  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [selectedNumberPlayer, setSelectedNumberPlayer] = useState<Players | null>(null);
  const [usedNumbers, setUsedNumbers] = useState<number[]>([]);

  const [alertopen, setAlertOpen] = useState(false);
  const [message, setMessage] = useState('');


  const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const openNumberModal = (player: Players) => {
    if (player.name !== null && player.name !== "") {
      setSelectedNumberPlayer(player);
      setIsNumberModalOpen(true);
    } else {
      setError('You must fill a player before add number or role');
      setMessage('You must fill a player before add number or role');
      setAlertOpen(true);
    }
  };


  const handleNumberSelect = (number: number) => {
    if (selectedNumberPlayer) {
      let newTeamFormation = [...teamFormation];
      let playerIndex = newTeamFormation.findIndex(player => player.name === selectedNumberPlayer.name && player.poste === selectedNumberPlayer.poste);
      if (playerIndex !== -1) {
        let oldNumber = newTeamFormation[playerIndex].number;
        newTeamFormation[playerIndex].number = number;
        setTeamFormation(newTeamFormation);

        // Update usedNumbers
        if (oldNumber !== null) {
          setUsedNumbers(usedNumbers.filter(num => num !== oldNumber));
        }
        setUsedNumbers([...usedNumbers, number]);
      }
    }
    setIsNumberModalOpen(false);
  };


  const optionsSystems = systems.map(system => ({ value: system, label: system }));
  const optionsPhilosophies = philosophies.map(philosophy => ({ value: philosophy, label: philosophy }));
  const optionscompositions = compositions.map(compositions => ({ value: compositions, label: compositions }));
  // Ajoutez cette fonction à votre composant pour ouvrir la modal avec le joueur sélectionné
  const openPlayerModal = (player: string, index: number) => {
    setSelectedPlayer(players);  // mettez tout le tableau de joueurs
    setIsModalOpen(true);
    setIndex(index)
    setselectedPoste(player);
  };

  const closePlayerModal = () => {
    setIsModalOpen(false);
  };

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  // const [selectedRole, setSelectedRole] = useState<RoleTable | null>(null);
  const [selectedRolePlayer, setSelectedRolePlayer] = useState<Players | null>(null);

  // Ajoutez cette fonction à votre composant pour ouvrir le modal des rôles avec le joueur sélectionné
  // const openRoleModal = (player: Players) => {
  //   setSelectedRolePlayer(player);
  //   setIsRoleModalOpen(true);
  // };
  const openRoleModal = (player: Players) => {
    if (player.name !== null && player.name !== "") {
      setSelectedRolePlayer(player);
      setIsRoleModalOpen(true);
    } else {
      setError('You must fill a player before add number or role');
      setMessage('You must fill a player before add number or role');
      setAlertOpen(true);
      // Vous pouvez ajouter un message d'erreur ou une action ici, pour informer l'utilisateur que le champ "name" doit être rempli.
    }
  };


  const closeRoleModal = () => {
    setIsRoleModalOpen(false);
  };

  const handleRoleSelect = (role: string) => {
    if (selectedRolePlayer) {
      let newTeamFormation = [...teamFormation];
      let playerIndex = newTeamFormation.findIndex(player => player.name === selectedRolePlayer.name && player.poste === selectedRolePlayer.poste);
      if (playerIndex !== -1) {
        newTeamFormation[playerIndex].role = role;
        setTeamFormation(newTeamFormation);
      }
    }
    console.log(teamFormation)
    closeRoleModal();
  };

  const compositionToArray = (comp: string): number[] => {
    return comp.split('-').map(Number);
  }

  const handlePlayerSelect = (player: Players) => {
    // Nous créons une copie de l'équipe actuelle
    let newTeamFormation = [...teamFormation];
    let positionIndex = Index;
    let name = ""

    if (positionIndex !== -1) {
      if (newTeamFormation[positionIndex].name !== '')
        name = newTeamFormation[positionIndex].name
      // Nous remplaçons le joueur à cette position par le nouveau joueur
      // newTeamFormation[positionIndex] = player;
      newTeamFormation[positionIndex].name = player.name;
      newTeamFormation[positionIndex].number = player.number;
      newTeamFormation[positionIndex].reputation = player.reputation;
      newTeamFormation[positionIndex].favPosition = player.favPosition;
      if (newTeamFormation[positionIndex].favRole === null)
        newTeamFormation[positionIndex].favRole = player.favRole;
      newTeamFormation[positionIndex].nationality = player.nationality;
      newTeamFormation[positionIndex].dna = player.dna;
      newTeamFormation[positionIndex].season = player.season;
      newTeamFormation[positionIndex].enable = false
      // Nous conservons la position du joueur
      newTeamFormation[positionIndex].poste = selectedPoste;
      // Nous mettons à jour l'équipe
      setTeamFormation(newTeamFormation);

      // Nous créons une copie de la liste de joueurs sélectionnés
      let newPlayerTab = [...selectedPlayer];
      // Nous trouvons l'index du joueur que nous venons d'ajouter à l'équipe
      let playerIndex = newPlayerTab.findIndex(pos => pos.name === player.name);
      newPlayerTab[playerIndex].enable = false

      if (name !== '') {
        let playerIndex = newPlayerTab.findIndex(pos => pos.name === name);
        newPlayerTab[playerIndex].enable = true
      }

      // Nous mettons cet valeur en false pour pouvoir le disabled et ne plus pouvoir etre clickable dans le modal
      // Nous mettons à jour la liste de joueurs sélectionnés
      setSelectedPlayer(newPlayerTab);
    }

    // Nous fermons la modal
    setIsModalOpen(false);
  };

  function handleRemovePlayer(index: number, event: React.MouseEvent) {
    event.stopPropagation();
    let newTeamFormation = [...teamFormation];
    const removedPlayer = newTeamFormation[index]; // store the removed player

    newTeamFormation[index] = {
      name: "",
      reputation: null,
      poste: newTeamFormation[index].poste,
      role: newTeamFormation[index].role,
      nationality: null,
      number: null,
      favRole: null,
      favPosition: null,
      dna: null,
      season: null,
      enable: true
    };

    setTeamFormation(newTeamFormation);
    // We create a copy of the list of selected players
    let newPlayerTab = [...selectedPlayer];
    // We find the index of the player that we just removed from the team
    let playerIndex = newPlayerTab.findIndex(player => player.name === removedPlayer.name); // find the player by name

    if (playerIndex !== -1) {
      newPlayerTab[playerIndex].enable = true;
      console.log(newPlayerTab[playerIndex].enable)
    }

    // We update the list of selected players
    setSelectedPlayer(newPlayerTab);

    console.log(newPlayerTab)
  };


  const organisePlayers = (players: Players[], composition: number[]): Players[][] => {
    // Nous utilisons une copie de la liste de joueurs pour ne pas modifier la liste originale
    let playersCopy = [...players];
    let organisedPlayers: Players[][] = [];
    // Nous devons ajouter le gardien de but en premier
    let gk = playersCopy.find(player => player.poste === 'GK');
    if (gk) {
      organisedPlayers.push([gk]);
      // Nous supprimons le gardien de but de la liste de joueurs
      playersCopy = playersCopy.filter(player => player !== gk);
    }
    // Ensuite, nous ajoutons les autres joueurs en fonction de la composition
    for (let i = 0; i < composition.length; i++) {
      let number = composition[i];
      let playersForPosition: Players[] = [];
      for (let j = 0; j < number; j++) {
        // Nous ajoutons le premier joueur disponible pour chaque position
        let player = playersCopy.shift();
        if (player) {
          playersForPosition.push(player);
        }
      }
      organisedPlayers.push(playersForPosition);
    }

    return organisedPlayers;
  }

  function getIndexOrganisePlayer(index: number, index2: number, compo: Players[][]) {
    let indexfinal = 0

    for (let index3 = 0; index3 < index + 1; index3++) {
      indexfinal += compo[index3].length

    }
    return 11 - (indexfinal - index2)
  }

  useEffect(() => {
    setTeamFormation(initFormation(formations[composition.value]));
    let newPlayerTab = [...selectedPlayer];
    newPlayerTab.map((value) => {
      value.enable = true;
      return value;
    })
    setSelectedPlayer(newPlayerTab)
    // eslint-disable-next-line
  }, [composition]);



  return (
    <div className='TacticComposition'>
      {isModalOpen && <PlayerModal players={selectedPlayer} onClose={closePlayerModal} onSelect={handlePlayerSelect} />}
      {isRoleModalOpen && selectedRolePlayer &&
        <RoleModal roles={role[selectedRolePlayer.poste]} currentRole={selectedRolePlayer.role} onClose={closeRoleModal} onSelect={handleRoleSelect} />
      }
      {isNumberModalOpen && selectedNumberPlayer &&
        <NumberModal playerName={selectedNumberPlayer.name} playerPoste={selectedNumberPlayer.poste} usedNumbers={usedNumbers} currentNumber={selectedNumberPlayer.number} onClose={() => setIsNumberModalOpen(false)} onSelect={handleNumberSelect} />
      }

      <Snackbar
        open={alertopen}
        autoHideDuration={4500}
        onClose={handleClose}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          <Typography variant="h6">Error</Typography>
          {message}
        </Alert>
      </Snackbar>

      <div className='composition-team'>
        <div className='composition-button'>
          <div className='composition-strategie'>
            <CompositionStrategie setSystem={setSystem} Options={optionsSystems} Constant={system} />
            <CompositionStrategie setSystem={setPhilosophy} Options={optionsPhilosophies} Constant={philosophy} />
          </div>
          <div className='composition-systeme'>
            {/* <select value={composition.value} onChange={(e) => {
              setComposition(e.target.value)
            }}>
              {compositions.map((comp, index) => (
                <option key={index} value={comp}>{comp}</option>
              ))}
            </select> */}
            <CompositionSysteme setComposition={setComposition} Options={optionscompositions} Constant={composition} />
          </div>
        </div>
        <StadiumComposition Team={organisePlayers(teamFormation, compositionToArray(composition.value)).reverse()} openPlayerModal={openPlayerModal} openRoleModal={openRoleModal} getIndexOrganisePlayer={getIndexOrganisePlayer} />
      </div>
      <CompositionPlayer teamFormation={teamFormation} openPlayerModal={openPlayerModal} openNumberModal={openNumberModal} openRoleModal={openRoleModal} handleRemovePlayer={handleRemovePlayer} />
      <TacticCategories />
    </div>
  );
};

export default TacticComposition;