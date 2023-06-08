import React, { FC, useState } from 'react';
import classes from './RadioButtonGroup.module.css';

interface IRadioButtonGroupProps {
  // value: string;
  defaultCheck?: boolean;
  isChecked?: boolean;
  groupName: string;
  valuesGroup: string[];
  onChange: (event: any) => void;
}

const RadioButtonGroup: FC<IRadioButtonGroupProps> = ({
  isChecked,
  groupName,
  valuesGroup,
  onChange
}) => {
  return (
    <div className={classes.radioBlock}>
      {valuesGroup.map((value) => {
        return (
          <>
            <input
              name={groupName}
              className={classes.radio}
              value={value}
              type="radio"
              checked={isChecked}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor={value} className={classes.radioText}>
              {value}
            </label>
          </>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
