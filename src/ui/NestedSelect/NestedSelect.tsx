//@ts-nocheck
import React, { useState } from 'react';

const data = [
  {
    id: 1,
    label: 'USA',
    children: [
      { id: 11, label: 'New York' },
      { id: 12, label: 'Los Angeles' },
      { id: 13, label: 'Chicago' },
    ],
  },
  {
    id: 2,
    label: 'Germany',
    children: [
      { id: 21, label: 'Berlin' },
      { id: 22, label: 'Munich' },
      { id: 23, label: 'Hamburg' },
    ],
  },
  {
    id: 3,
    label: 'Japan',
    children: [
      { id: 31, label: 'Tokyo' },
      { id: 32, label: 'Osaka' },
      { id: 33, label: 'Kyoto' },
    ],
  },
];

interface INestedSelect {
  register: any;
  setValue: any;
  getValues: any;
}

const NestedSelect = (props) => {
  const { register, setValue, getValues } = props;
  const [selectedData, setSelectedData] = useState({});
  const [updatedLocations, setUpdatedLocations] = useState([]);

  const handleParentChange = (parentId) => {
    const parentItem = data.find((item) => item.id === parentId);

    if (selectedData[parentId]) {
      const updatedData = { ...selectedData };
      delete updatedData[parentId];
      setSelectedData(updatedData);
      parentItem.children.forEach((child) => {
        const childFieldName = `child_${child.id}`;
        setValue(childFieldName, false);
      });
    } else {
      const updatedData = { ...selectedData, [parentId]: [] };
      setSelectedData(updatedData);
      parentItem.children.forEach((child) => {
        const childFieldName = `child_${child.id}`;
        setValue(childFieldName, true);
      });
    }

    const updatedLocations = [];
    Object.entries(selectedData).forEach(([parentId, children]) => {
      const country = data.find((item) => item.id === parseInt(parentId)).label;
      const cities = children;
      console.log(cities);
      updatedLocations.push({
        country,
        cities,
      });
    });
    setValue('locations', updatedLocations);
  };

  const handleChildChange = (parentId, childId) => {
    const childFieldName = getLabelById(parentId, childId);
    
    if (selectedData[parentId]) {
      const updatedData = {
        ...selectedData,
        [parentId]: selectedData[parentId].includes(childId)
          ? selectedData[parentId].filter((id) => id !== childId)
          : [...selectedData[parentId], childId],
      };
      setSelectedData(updatedData);
    } else {
      const updatedData = {
        ...selectedData,
        [parentId]: [childId],
      };
      setSelectedData(updatedData);
    }

    setValue(childFieldName, !getValues(childFieldName));

    const updatedLocations = [];
    Object.entries(selectedData).forEach(([parentId, children]) => {
      const country = data.find((item) => item.id === parseInt(parentId)).label;
      const cities = children.map((childId) => getLabelById(parseInt(parentId), childId));
      updatedLocations.push({
        country,
        cities,
      });
    });
    setValue('locations', updatedLocations);
  };

  const registeredValues = getValues();

  const getLabelById = (parentId, childId) => {
    const parentItem = data.find((item) => item.id === parentId);
    const childItem = parentItem.children.find((child) => child.id === childId);
    return childItem ? childItem.label : '';
  };

  return (
    <div>
      <div>
        {Object.entries(selectedData).map(([parentId, children]) => (
          <div key={parentId}>
            <input type="text" value={data.find((item) => item.id === parseInt(parentId)).label} readOnly />
            <ul>
              {children.map((childId) => (
                <li key={childId}>{getLabelById(parseInt(parentId), childId)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <label>
              <input
                type="checkbox"
                {...register(`parent_${item.id}`)}
                onChange={() => handleParentChange(item.id)}
              />
              {item.label}
            </label>
            <ul>
              {item.children.map((child) => (
                <li key={child.id}>
                  <label>
                    <input
                      type="checkbox"
                      {...register(`child_${child.id}`)}
                      onChange={() => handleChildChange(item.id, child.id)}
                    />
                    {child.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedSelect;
