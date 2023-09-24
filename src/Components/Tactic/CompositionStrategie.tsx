import React from 'react';
import "./../../scss/Tactic/TacticComposition.scss"
import Select from 'react-select';

interface CompositionStrategieProps {
    Options : {
        value: string;
        label: string;
    }[],
    Constant : {
        value: string;
        label: string;
    },
    setSystem : (value: React.SetStateAction<{
    value: string;
    label: string;
    }>) => void
}

const CompositionStrategie: React.FC<CompositionStrategieProps> = ({setSystem, Options, Constant}) => {
  
    return (
    <div className='bb'>
              <Select
                classNames={{
                  control: (state) =>
                    state.isFocused ? 'select-custom-focus' : 'select-custom',
                }}
                value={Options.find(option => option.value === Constant.value)}
                onChange={(option) => option && setSystem(option)}
                options={Options}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    boxShadow: "0px 1px 0px white",
                    borderRadius : "0"
                  }),
                  menu: base => ({
                    ...base,
                    background: "#17153A", border: "1px solid white", fontSize : "14px"
                  }),
                  option: (base, state) => ({
                    ...base,
                    borderBottom: "1px solid white",
                    backgroundColor: state.isFocused ? "#959FA8" : "transparent",
                    color: state.isFocused ? "white" : base.color
                  }),
                  singleValue: base => ({
                    ...base,
                    color: '#959FA8', // here you can change the color of the label
                  })
                }}
              />

            </div>
  );
};

export default CompositionStrategie;