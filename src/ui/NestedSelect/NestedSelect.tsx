//@ts-nocheck
import { FC, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';
import { checkBoxGroup } from '../../assets/constants/checkBoxGroup';
import classes from './NestedSelect.module.css';

interface IChildCheckGroup {
  value: string;
  type: 'child' | string;
  isChecked: boolean;
}

interface IParentCheckGroup {
  value: string;
  type: 'parent' | string;
  isChecked: boolean;
  isOpen: boolean;
  children: IChildCheckGroup[];
}

// const checkBoxGroup: IParentCheckGroup[] = [
//   {
//     value: 'USA',
//     type: 'parent',
//     isChecked: false,
//     isOpen: false,
//     children: [
//       {
//         value: 'New York',
//         type: 'child',
//         isChecked: false,
//       },
//       {
//         value: 'Los Angeles',
//         type: 'child',
//         isChecked: false,
//       },
//       {
//         value: 'Washington',
//         type: 'child',
//         isChecked: false,
//       },
//     ],
//   },
//   {
//     value: 'Ukraine',
//     type: 'parent',
//     isOpen: false,
//     isChecked: false,
//     children: [
//       {
//         value: 'Kyiv',
//         type: 'child',
//         isChecked: false,
//       },
//       {
//         value: 'Odesa',
//         type: 'child',
//         isChecked: false,
//       },
//     ],
//   },
// ];

interface INestedSelect {
  register: any;
  control: any;
  setValue: any;
  title?: string;
}

const NestedSelect: FC<INestedSelect> = (props: any) => {
  const { register, control, setValue, title } = props;

  const [openList, setOpenList] = useState(false);
  const [parents, setParents] = useState<string[]>([]);

  const [isUpdate, setUpdate] = useState<number>(1);

  const [checkGroups, setCheckGroups] =
    useState<IParentCheckGroup[]>(checkBoxGroup);

  console.log(checkGroups);

  useEffect(() => {
    const parentList = [];
    for (let obj of checkGroups) {
      if (obj.children) {
        const isParentChecked = obj.children.some((item) => item.isChecked);
        if (isParentChecked) {
          parentList.push(obj.value);
        }
      }
    }
    setParents(parentList);
  }, [isUpdate]);

  const handleParentChange = (parentIdx: number) => {
    const updatedCheckGroups = [...checkGroups];
    updatedCheckGroups[parentIdx].isChecked =
      !updatedCheckGroups[parentIdx].isChecked;
    const isParentChecked = updatedCheckGroups[parentIdx].isChecked;

    updatedCheckGroups[parentIdx].children.map(
      (item) => {item.isChecked = isParentChecked}
    );

    setCheckGroups(updatedCheckGroups);

    // const updatedCheckGroups = [...checkGroups];
    // updatedCheckGroups[parentIdx].isChecked = true;
    // const parentChecked = updatedCheckGroups[parentIdx].children.every(
    //   (child) => child.isChecked
    // );
    // updatedCheckGroups[parentIdx].children.forEach((child) => {
    //   child.isChecked = !parentChecked;
    // });
    // setCheckGroups(updatedCheckGroups);

    // const selectedChildren = updatedCheckGroups[parentIdx].children
    //   .filter((child) => child.isChecked)
    //   .map((child) => child.value);

    // setValue(updatedCheckGroups[parentIdx].value, selectedChildren);
    // setUpdate((value) => (value += 1));
  };

  const handleChildChange = (parentIdx: number, childIdx: number) => {
    const updatedCheckGroups = [...checkGroups];
    // const updatedCheckGroups = [...checkGroups];
    // updatedCheckGroups[parentIdx].children[childIdx].isChecked =
    //   !updatedCheckGroups[parentIdx].children[childIdx].isChecked;
    // setCheckGroups(updatedCheckGroups);

    // const selectedChildren = updatedCheckGroups[parentIdx].children
    //   .filter((child) => child.isChecked)
    //   .map((child) => child.value);

    // setValue(updatedCheckGroups[parentIdx].value, selectedChildren);
    // setUpdate((value) => (value += 1));
  };

  const checkAllChildCheckBoxes = (childrenCheckBoxes: IChildCheckGroup[]) => {
    return childrenCheckBoxes.every((item) => item.isChecked === true);
  };

  const checkSomeChildCheckBoxes = (childrenCheckBoxes: IChildCheckGroup[]) => {
    const allChecked = checkAllChildCheckBoxes(childrenCheckBoxes);
    if (allChecked) {
      return false;
    }

    return childrenCheckBoxes.some((item) => item.isChecked === true);
  };

  const handleOpenChildren = (parentIdx: number) => {
    const updatedCheckGroups = [...checkGroups];

    const isOpen = checkGroups[parentIdx].isOpen;
    updatedCheckGroups[parentIdx].isOpen = !isOpen;

    setCheckGroups(updatedCheckGroups);
  };

  const handleOpenSelect = () => {
    setOpenList((value) => !value);
  };

  // console.log(`Check groups: ${checkGroups[0]}`);

  return (
    <div>
      {title && <h6 className={classes.title}>{title}</h6>}
      <div className={classes.select}>
        <div className={classes.selectHeader} onClick={handleOpenSelect}>
          {parents.map((item, idx) => {
            return (
              <div className={classes.selectedBlock} key={idx}>
                <p className={classes.selectedText}>{item}</p>
              </div>
            );
          })}
        </div>
        <div
          className={openList ? classes.selectList : classes.closedSelectList}
        >
          {checkBoxGroup.map((parentCheckBox, parentIdx) => {
            return (
              // <div>

              <Controller
                name={parentCheckBox.value}
                control={control}
                render={({ field }) => (
                  <>
                    <div className={classes.selectRow}>
                      <FormControlLabel
                        label={parentCheckBox.value}
                        control={
                          <Checkbox
                            onChange={() => {
                              handleParentChange(parentIdx);
                            }}
                            checked={checkAllChildCheckBoxes(
                              parentCheckBox.children
                            )}
                            indeterminate={checkSomeChildCheckBoxes(
                              parentCheckBox.children
                            )}
                          />
                        }
                      />
                      {parentCheckBox.children ? (
                        <div
                          className={classes.selectArrow}
                          onClick={() => handleOpenChildren(parentIdx)}
                        ></div>
                      ) : null}
                    </div>

                    <div
                      className={
                        parentCheckBox.isOpen
                          ? classes.selectSubBlock
                          : classes.closedSelectSubBlock
                      }
                    >
                      {parentCheckBox.children &&
                        parentCheckBox.children.map(
                          (childCheckBox, childIdx) => {
                            return (
                              <div className={classes.selectRow}>
                                <FormControlLabel
                                  label={childCheckBox.value}
                                  control={
                                    <Checkbox
                                      onChange={() =>
                                        handleChildChange(parentIdx, childIdx)
                                      }
                                      checked={childCheckBox.isChecked}
                                    />
                                  }
                                />
                              </div>
                            );
                          }
                        )}
                    </div>
                  </>
                )}
              />

              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NestedSelect;
