import React, { useState} from 'react';
import "./../../scss/Games/FilterGames.scss"
import { BsChevronDown } from 'react-icons/bs';
import classNames from 'classnames';

interface Games {
    [key: string]: boolean;
}

const FiltersGames: React.FC = () => {
    const [isOpen, setIsOpen] = useState({
        TypeTournament: false,
        Reputation: false,
        price: false
    });

    const [TypeTournament, setTypeTournament] = useState<Games>({
        game: false,
        gamev4: false,
        gamev8: false,
        gamev16: false,
        Special: false,
    });

    const [Reputation, setReputation] = useState<Games>({
        World: false,
        Continent: false,
        Country: false,
        Region: false,
        City: false,
    });

    const toggleOpen = (name: keyof typeof isOpen) => {
        setIsOpen(prevState => ({ ...prevState, [name]: !prevState[name] }));
    }

    const handleReputationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const Reputation = event.target.name as keyof Games;
        setReputation(prevReputation => ({
            ...prevReputation,
            [Reputation]: !prevReputation[Reputation]
        }));
    };

    const handleTypeTournamentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const TypeTournament = event.target.name as keyof Games;
        setTypeTournament(prevTypeTournaments => ({
            ...prevTypeTournaments,
            [TypeTournament]: !prevTypeTournaments[TypeTournament]
        }));
    };

    return (
        <div className="box-filter-Games">
            {/* <div className='box-filter-all'>
                <h4>FiltersGames</h4>
            </div> */}
            <div className='box-filter-content'>
                <div className="box-status">
                    <div className="box-title-filter" onClick={() => toggleOpen('TypeTournament')}>
                        <h4>Type of Tournament</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.TypeTournament })} />
                        </button>
                    </div>
                    {isOpen.TypeTournament && (
                        <div className="box-content-position">
                            <div>
                                {/* <input type="checkbox" id="AT" name="AT" /> */}
                                <input type="checkbox" id="game" name="game" checked={TypeTournament.game} onChange={handleTypeTournamentChange}/>
                                <label htmlFor="game">1v1</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="GK" name="GK" /> */}
                                <input type="checkbox" id="gamev4" name="gamev4" checked={TypeTournament.gamev4} onChange={handleTypeTournamentChange}/>
                                <label htmlFor="gamev4">4v4</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CB" name="CB" /> */}
                                <input type="checkbox" id="gamev8" name="gamev8" checked={TypeTournament.gamev8} onChange={handleTypeTournamentChange}/>
                                <label htmlFor="gamev8">8v8</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CM" name="CM" /> */}
                                <input type="checkbox" id="gamev16" name="gamev16" checked={TypeTournament.gamev16} onChange={handleTypeTournamentChange}/>
                                <label htmlFor="gamev16">16v16</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CDM" name="CDM" /> */}
                                <input type="checkbox" id="Special" name="Special" checked={TypeTournament.Special} onChange={handleTypeTournamentChange}/>
                                <label htmlFor="Special">Special</label>
                            </div>
                        </div>
                    )}
                </div>
                <div className="box-position">
                    <div className="box-title-position" onClick={() => toggleOpen('Reputation')}>
                        <h4>Reputation</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.Reputation })} />
                        </button>
                    </div>
                    {isOpen.Reputation && (
                        <div className="box-content-position">
                            <div>
                                {/* <input type="checkbox" id="AT" name="AT" /> */}
                                <input type="checkbox" id="World" name="World" checked={Reputation.World} onChange={handleReputationChange} />
                                <label htmlFor="World">World</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="GK" name="GK" /> */}
                                <input type="checkbox" id="Continent" name="Continent" checked={Reputation.Continent} onChange={handleReputationChange} />
                                <label htmlFor="Continent">Continent</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CB" name="CB" /> */}
                                <input type="checkbox" id="Country" name="Country" checked={Reputation.Country} onChange={handleReputationChange} />
                                <label htmlFor="Country">Country</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CM" name="CM" /> */}
                                <input type="checkbox" id="Region" name="Region" checked={Reputation.Region} onChange={handleReputationChange} />
                                <label htmlFor="Region">Region</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CDM" name="CDM" /> */}
                                <input type="checkbox" id="City" name="City" checked={Reputation.City} onChange={handleReputationChange} />
                                <label htmlFor="City">City</label>
                            </div>
                        </div>
                    )}
                </div>
                <div className="box-price">
                    <div className="box-title-price" onClick={() => toggleOpen('price')}>
                        <h4>Price</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.price })} />
                        </button>
                    </div>
                    {isOpen.price && (
                        <div className="box-content-price">
                            <input type="range" id="price" name="volume" min="0" max="10" />
                            <button>Specify</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FiltersGames;
