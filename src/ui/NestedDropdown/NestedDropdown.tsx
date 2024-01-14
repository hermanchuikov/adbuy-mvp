//@ts-nocheck
import { FC, useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { TreeSelect } from 'primereact/treeselect';
import { classNames } from 'primereact/utils';
import classes from './NestedDropdown.module.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { NodeService } from '../../assets/constants/NodeService';

interface INestedDropdownProps {
  name: string;
  label?: string;
  control: any;
  data: any;
  error?: string | undefined | null;
  rules?: object;
  style?: object;
  setValue?: any;
}

const NestedDropdown: FC<INestedDropdownProps> = (props) => {
  const { name, label, control, data, error, rules, style, setValue } = props;
  const [nodes, setNodes] = useState(null);
  // const [selectedNodeKey, setSelectedNodeKey] = useState(null);

  useEffect(() => {
    data.getTreeNodes().then((data) => setNodes(data));
  }, []);

  return (
    <div className={classes.wrapper}>
      {label && <h6 className={classes.title}>{label}</h6>}
      <Controller
        name={name}
        control={control}
        rules={{ required: 'Value is required.' }}
        render={({ field, fieldState }) => (
          <>
            <TreeSelect
              selectionMode="checkbox"
              id={field.name}
              value={field.value}
              onChange={field.onChange}
              inputRef={field.ref}
              options={nodes}
              metaKeySelection={false}
              placeholder="Select..."
              className={classNames('font w-full md:w-20rem', {
                'p-invalid': fieldState.error,
              })}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                alignItems: 'center',
              }}
            />
          </>
        )}
      />
      <div className={classes.errorContainer}>
        {error && <p className={classes.inputError}>{error}</p>}
      </div>
    </div>
  );
  // const { name, label, control, data, error, rules, style, setValue } = props;
  // const [nodes, setNodes] = useState(null);

  // useEffect(() => {
  //   locations.getTreeNodes().then((data) => setNodes(data));
  // }, []);

  // console.log(nodes);

  // const valueMapping = {
  //   '0': 'Documents',
  //   '0-0': 'Work',
  //   '0-1': 'Home',
  //   '1': 'Events',
  //   '2': 'Movies',
  //   '2-0': 'Al Pacino',
  //   '2-1': 'Robert De Niro',
  // };

  // const onSubmit = (data: any) => {
  //   const result = {};

  //   Object.entries(data.value).forEach(([key, value]) => {
  //     const [parentKey, childKey] = key.split('-');

  //     if (!result[parentKey]) {
  //       result[parentKey] = [];
  //     }
  //     if (childKey != undefined) {
  //       result[parentKey].push(parentKey + '-' + childKey);
  //     }
  //   });

  //   const convertedResult = transformData(result);
  //   console.log(convertedResult);
  // };

  // const transformData = (data) => {
  //   const transformed = {};

  //   Object.entries(data).forEach(([key, value]) => {
  //     const transformedKey = valueMapping[key] || key;
  //     console.log(value);
  //     const transformedValue = Array.isArray(value)
  //       ? value.map((child) => valueMapping[child] || child)
  //       : value;
  //     transformed[transformedKey] = transformedValue;
  //   });

  //   return transformed;
  // };

  // // const getFormErrorMessage = (name) => {
  // //   return errors[name] ? (
  // //     <small className="p-error">{errors[name].message}</small>
  // //   ) : (
  // //     <small className="p-error">&nbsp;</small>
  // //   );
  // // };

  // return (
  //   <div>
  //     {label && <h6 className={classes.title}>{label}</h6> }
  //     <Controller
  //       name={name}
  //       control={control}
  //       rules={{ required: 'Value is required.' }}
  //       render={({ field }) => (
  //         <>
  //           <TreeSelect
  //             selectionMode="checkbox"
  //             id={field.name}
  //             value={field.value}
  //             onChange={field.onChange}
  //             inputRef={field.ref}
  //             options={nodes}
  //             className={classNames("w-full md:w-20rem")}
  //           />
  //         </>
  //       )}
  //     />
  //   </div>
  // );
};

export default NestedDropdown;
