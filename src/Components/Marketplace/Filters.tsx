import React, { useState, useEffect } from 'react';
import "./../../scss/Marketplace/Filter.scss"
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

interface Positions {
    [key: string]: boolean;
}

const Filters: React.FC = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState({
        status: false,
        position: false,
        price: false,
        nationality: false,
        season: false
    });

    const [positions, setPositions] = useState<Positions>({
        AT: false,
        GK: false,
        CB: false,
        CM: false,
        CDM: false,
    });
    useEffect(() => {
        dispatch({ type: 'UPDATE_POSITION_FILTER', payload: positions });
    }, [positions, dispatch]);

    const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const position = event.target.name as keyof Positions;
        setPositions(prevPositions => ({
            ...prevPositions,
            [position]: !prevPositions[position]
        }));
    };

    const toggleOpen = (name: keyof typeof isOpen) => {
        setIsOpen(prevState => ({ ...prevState, [name]: !prevState[name] }));
    }

    return (
        <div className="box-filter-marketplace">
            <div className='box-filter-all'>
                <h4>Filters</h4>
                <button>Reset</button>
            </div>
            <div className='box-filter-content'>
                <div className="box-status">
                    <div className="box-title-filter" onClick={() => toggleOpen('status')}>
                        <h4>Status</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.status })} />
                        </button>
                    </div>
                    {isOpen.status && (
                        <div className="box-content-filter">
                            <button>Buy Now</button>
                            <button>On Auctions</button>
                            <button>New</button>
                            <button>Has Offer</button>
                            <button>All</button>
                        </div>
                    )}
                </div>
                <div className="box-position">
                    <div className="box-title-position" onClick={() => toggleOpen('position')}>
                        <h4>Position</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.position })} />
                        </button>
                    </div>
                    {isOpen.position && (
                        <div className="box-content-position">
                            <div>
                                {/* <input type="checkbox" id="AT" name="AT" /> */}
                                <input type="checkbox" id="AT" name="AT" checked={positions.AT} onChange={handlePositionChange} />
                                <label htmlFor="AT">AT</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="GK" name="GK" /> */}
                                <input type="checkbox" id="GK" name="GK" checked={positions.GK} onChange={handlePositionChange} />
                                <label htmlFor="GK">GK</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CB" name="CB" /> */}
                                <input type="checkbox" id="CB" name="CB" checked={positions.CB} onChange={handlePositionChange} />
                                <label htmlFor="CB">CB</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CM" name="CM" /> */}
                                <input type="checkbox" id="CM" name="CM" checked={positions.CM} onChange={handlePositionChange} />
                                <label htmlFor="CM">CM</label>
                            </div>
                            <div>
                                {/* <input type="checkbox" id="CDM" name="CDM" /> */}
                                <input type="checkbox" id="CDM" name="CDM" checked={positions.CDM} onChange={handlePositionChange} />
                                <label htmlFor="CDM">CDM</label>
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
                <div className="box-nationality">
                    <div className="box-title-nationality" onClick={() => toggleOpen('nationality')}>
                        <h4>Nationality</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.nationality })} />
                        </button>
                    </div>
                    {isOpen.nationality && (
                        <div className="box-content-nationality">
                            <input type="search" placeholder="Search Nationality players" />
                            <button>Specify</button>
                        </div>
                    )}
                </div>
                <div className="box-Season">
                    <div className="box-title-Season" onClick={() => toggleOpen('season')}>
                        <h4>Season</h4>
                        <button className='box-but'>
                            <BsChevronDown className={classNames({ 'rotate-icon': isOpen.season })} />
                        </button>
                    </div>
                    {isOpen.season && (
                        <div className="box-title-filter">
                            <input type="checkbox" id=" 0" name=" 0" placeholder="Season 0" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Filters;
