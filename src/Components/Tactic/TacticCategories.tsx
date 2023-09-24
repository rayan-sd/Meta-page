import './../../scss/Tactic/TacticCategories.scss'
import React, { useState, useEffect } from 'react';
import {
  Wcategorie,
  WTcategorie,
  transitions
} from './Constant'


interface Category {
  name: string;
  value: number;
}

interface TacticCategoriesProps {
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: number[]) => void;
  categories: Category[];
}

const ModalCategories: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, categories }) => {
  const [inputValues, setInputValues] = useState<number[]>([]);

  useEffect(() => {
    setInputValues(categories.map(c => c.value));
  }, [categories]);

  const handleChange = (index: number, value: number) => {
    setInputValues(prevState => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  const handleSubmit = () => {
    onSubmit(inputValues);
    onClose();
  };

  return (
    isOpen ? (
      <div className='modal-categories'>
        <div className='modal-categories-content'>
          <div className='title-modal'>
            <h5>Choose your tactic</h5>
            <span className='close' onClick={onClose}>&times;</span>
          </div>
          <div className="modal-categories-value">
            {categories.map((category, index) => (
              <div key={index}>
                <label htmlFor={category.name}>{category.name}: <span className='purple'>{inputValues[index]}%</span></label>
                <input
                  type="range"
                  id={category.name}
                  name={category.name}
                  min="0"
                  max="100"
                  value={inputValues[index]}
                  onChange={e => handleChange(index, Number(e.target.value))}
                />
              </div>
            ))}
          </div>
          <div className='box-but'>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    ) : null
  );
};

const TacticCategories: React.FC<TacticCategoriesProps> = () => {
  const [withBall, setWithBall] = useState<Category[]>(Wcategorie);
  const [withoutBall, setWithoutBall] = useState<Category[]>(WTcategorie);
  const [transition, setTransition] = useState<Category[]>(transitions);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategoryType, setActiveCategoryType] = useState<null | 'withBall' | 'withoutBall' | 'transition'>(null);

  const handleClick = (type: 'withBall' | 'withoutBall' | 'transition') => {
    setActiveCategoryType(type);
    setModalOpen(true);
  };

  const handleSubmit = (values: number[]) => {
    switch (activeCategoryType) {
      case 'withBall':
        setWithBall(prevState => values.map((value, index) => ({ ...prevState[index], value })));
        break;
      case 'withoutBall':
        setWithoutBall(prevState => values.map((value, index) => ({ ...prevState[index], value })));
        break;
      case 'transition':
        setTransition(prevState => values.map((value, index) => ({ ...prevState[index], value })));
        break;
      default:
        break;
    }
    setModalOpen(false);
  };

  return (
    <div className='composition-tactic'>
      <div className='with-ball' onClick={() => handleClick('withBall')}>
        <h5>With the ball</h5>
        {withBall.map((category, index) => (
          <div key={index}>
            <span>{category.name} -</span>
            <span>{category.value}%</span>
          </div>
        ))}
      </div>
      <div className='without-ball' onClick={() => handleClick('withoutBall')}>
      <h5>Without the ball</h5>
        {withoutBall.map((category, index) => (
          <div key={index}>
            <span>{category.name} -</span>
            <span>{category.value}%</span>
          </div>
        ))}
      </div>
      <div className='transition' onClick={() => handleClick('transition')}>
      <h5>Transitions</h5>
        {transition.map((category, index) => (
          <div key={index}>
            <span>{category.name} -</span>
            <span>{category.value}%</span>
          </div>
        ))}
      </div>
      <ModalCategories isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} categories={activeCategoryType === 'withBall' ? withBall : activeCategoryType === 'withoutBall' ? withoutBall : transition} />
    </div>
  );
};

export default TacticCategories;
