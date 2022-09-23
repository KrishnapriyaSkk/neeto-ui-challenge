import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const CardsDropdown = ({ note, setShowDeleteAlert, setSelectedNoteId }) => {
  const OnDelete = () => {
    setSelectedNoteId([note.id]);
    setShowDeleteAlert(true);
  };
  return (
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <Menu>
        <MenuItem.Button>Edit</MenuItem.Button>
        <MenuItem.Button style="danger" onClick={OnDelete}>
          Delete
        </MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};

export default CardsDropdown;
