import { forwardRef, FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import classes from './CheckBox.module.css';

interface ICheckBoxProps {
  children?: any;
  name: string;
  control: any;
  rules?: object;
  isChecked?: boolean;
  onClick?: (event: any) => void;
}

const CheckBox: FC<ICheckBoxProps> = forwardRef((props) => {
  const { children, name, control, rules, isChecked } = props;
  const [active, setActive] = useState(false);

  return (
    <div className={classes.wrapper}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className={active ? classes.activeBlock : classes.block}>
            <label className={classes.label}>
              <input
                onChange={field.onChange}
                onClick={() => setActive((isActive) => !isActive)}
                onBlur={field.onBlur}
                type="checkbox"
                id={name}
                className={classes.input}
                defaultChecked={false}
              />
              {children}
            </label>
          </div>
        )}
      />
    </div>
  );
});

export default CheckBox;
