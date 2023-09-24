// import { createStore, Action, Reducer } from 'redux';

// // Définir le type de l'état
// interface State {
//   user: null | { name: string };
// }

// // Définir les types des actions
// interface LoginAction extends Action<'LOGIN'> { payload: { name: string }; }
// interface LogoutAction extends Action<'LOGOUT'> { }

// // Type des actions possibles
// type AppActions = LoginAction | LogoutAction;

// // L'état initial
// const initialState: State = {
//   user: null,
// };

// // Le reducer
// const reducer: Reducer<State, AppActions> = (state = initialState, action) => {
//   switch(action.type) {
//     case 'LOGIN':
//       return { ...state, user: action.payload };
//     case 'LOGOUT':
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// export default store;


import { createStore, Action, Reducer } from 'redux';

// Define the type of the state
interface User {
  name: string,
  managerName?: string,
  clubName?: string,
  country?: string,
  city?: string,
  stadiumName?: string,
  tactic?: string,
  clubLogo?: string // for image url or data if you want to store image data in redux
}
type Position = 'AT' | 'GK' | 'CB' | 'CM' | 'CDM' | 'All';

interface Filter {
  category: 'Transfert Market' | 'Selling Players' | 'Favorite Players' | 'Historic' | 'All';
  reputation: 'All' | 'Icon' | 'SuperStar' | 'Great' | 'Good' | 'Starter';
  status: 'Buy Now' | 'On Auctions' | 'New' | 'Has Offer' | 'All';
  position: Record<Position, boolean>;
  price: number;
  nationality: string;
  season: number;
}

export const initialFilters: Filter = {
  category: 'All',
  reputation: 'All',
  status: 'All',
  position: {
      'AT': true,
      'GK': true,
      'CB': true,
      'CM': true,
      'CDM': true,
      'All': true,
  },
  price: 0,
  nationality: '',
  season: 0,
}

interface Players {
  name: string;
  image: string;
  price: number;
  poste: Position;
  season: number;
  club: string;
  nationality : string;
  reputation : string;
  numero : number;
}

interface State {
  user: null | User;
  players: null | Players[];
  filters: Filter;
}

const initialState: State = {
  user: null,
  players: [],
  filters: initialFilters
};

// Define the types of actions
interface LoginAction extends Action<'LOGIN'> { payload: { name: string }; }
interface LogoutAction extends Action<'LOGOUT'> { }
interface UpdateUserInformationAction extends Action<'UPDATE_USER_INFORMATION'> { 
  payload: { 
    name: string,
    managerName: string,
    clubName: string,
    country: string,
    city: string,
    stadiumName: string,
    tactic: string,
    clubLogo: string
  }; 
}

interface SetPlayersAction extends Action<'SET_PLAYERS'> { payload: Players[]; } // add this
interface SetFiltersAction extends Action<'SET_FILTERS'> { payload: Filter; }
interface UpdatePositionFilterAction extends Action<'UPDATE_POSITION_FILTER'> { 
  payload: { 
    position: Position;
  }; 
}

// Type of possible actions
type AppActions = LoginAction | LogoutAction | UpdateUserInformationAction | SetPlayersAction | SetFiltersAction | UpdatePositionFilterAction; // add new actions
// The reducer
const reducer: Reducer<State, AppActions> = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, user: { ...state.user, name: action.payload.name } };
    case 'UPDATE_USER_INFORMATION':
      return { ...state, user: { ...state.user, ...action.payload } };
    case 'SET_PLAYERS':
      return { ...state, players: action.payload }; // add this
    case 'SET_FILTERS':
      return { ...state, filters: action.payload }; // add this
      case 'UPDATE_POSITION_FILTER':
        const currentPositionFilter = state.filters?.position || {};
        const newPositionFilter = { ...currentPositionFilter, [action.payload.position]: !currentPositionFilter[action.payload.position] };
        return { ...state, filters: { ...state.filters, position: newPositionFilter } };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

export default store;
