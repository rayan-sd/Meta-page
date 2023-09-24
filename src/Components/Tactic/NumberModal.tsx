import React, { useState, useRef, useEffect } from 'react';
import "./../../scss/Tactic/NumberModal.scss"

interface NumberModalProps {
    playerName: string;
    playerPoste: string;
    usedNumbers: number[];
    currentNumber: number | null;
    onClose: () => void;
    onSelect: (number: number) => void;
}

const NumberModal: React.FC<NumberModalProps> = ({ playerName, playerPoste, currentNumber, usedNumbers, onClose, onSelect }) => {
    const [inputNumber, setInputNumber] = useState(currentNumber);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(parseInt(event.target.value, 10));
    };

    const handleNumberSelect = () => {
        if (inputNumber !== null) {
            if (usedNumbers.includes(inputNumber)) {
                setError('This number is already in use.');
            } else {
                onSelect(inputNumber);
            }
        }
    };

    const incrementNumber = () => {
        setInputNumber(prevNumber => prevNumber !== null && prevNumber < 100 ? prevNumber + 1 : prevNumber);
    };

    const decrementNumber = () => {
        setInputNumber(prevNumber => prevNumber !== null && prevNumber > 1 ? prevNumber - 1 : prevNumber);
    };

    return (
        <div className="number-modal">
            <div className="modal-number-content">
                <div className='title-modal'>
                    <h5>Choose the number of your player</h5>
                    <span className='close' onClick={onClose}>&times;</span>
                </div>
                <div className='modal-flex-player'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position Comp.</th>
                                <th>Actual Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{playerName}</td>
                                <td>{playerPoste}</td>
                                <td>{currentNumber ?? 'None'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="modal-flex-row">
                        <div className="quantity">
                            <input
                                ref={inputRef}
                                className="quantity-input"
                                type="number"
                                min="1"
                                max="100"
                                value={inputNumber ?? ''}
                                onChange={handleNumberChange}
                            />
                            <div className='decre'>
                                <div className="quantity-button quantity-up" onClick={incrementNumber}>+</div>
                                <div className="quantity-button quantity-down" onClick={decrementNumber}>-</div>
                            </div>
                        </div>
                        <button onClick={handleNumberSelect}>Select</button>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberModal;
