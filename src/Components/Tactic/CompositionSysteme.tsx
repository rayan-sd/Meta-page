import React from 'react';
import "./../../scss/Tactic/TacticComposition.scss"
import Select from 'react-select';

interface CompositionSystemeProps {
    Options : {
        value: string;
        label: string;
    }[],
    Constant : {
        value: string;
        label: string;
    },
    setComposition : (value: React.SetStateAction<{
    value: string;
    label: string;
    }>) => void
}

const CompositionSysteme: React.FC<CompositionSystemeProps> = ({setComposition, Options, Constant}) => {
  
    return (
    <div className='bb'>
              <Select
                classNames={{
                  control: (state) =>
                    state.isFocused ? 'select-systeme-focus' : 'select-systeme',
                }}
                value={Options.find(option => option.value === Constant.value)}
                onChange={(option) => option && setComposition(option)}
                options={Options}
                styles={{
                  control: base => ({
                    ...base,
                    boxShadow: "0",
                  }),
                  menu: base => ({
                    ...base,
                    background: "#4D00EF", border: "1px solid white", fontSize : "14px"
                  }),
                  option: (base, state) => ({
                    ...base,
                    // borderBottom: "1px solid white",
                    textDecoration : "underline",
                    backgroundColor: state.isFocused ? "#17153A" : "transparent",
                    color: state.isFocused ? "white" : base.color
                  }),
                  singleValue: base => ({
                    ...base,
                    color: 'white', // here you can change the color of the label
                  })
                }}
              />

            </div>
  );
};

export default CompositionSysteme;