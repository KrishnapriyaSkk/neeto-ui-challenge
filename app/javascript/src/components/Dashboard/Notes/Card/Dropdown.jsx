import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown as NeetoUIDropdown } from "neetoui";

const { Menu, MenuItem } = NeetoUIDropdown;

const Dropdown = ({ note, setShowDeleteAlert, setSelectedNoteId }) => {
  const handleDeleteNote = () => {
    setSelectedNoteId([note.id]);
    setShowDeleteAlert(true);
  };

  return (
    <NeetoUIDropdown buttonStyle="text" icon={MenuVertical}>
      <Menu>
        <MenuItem.Button>Edit</MenuItem.Button>
        <MenuItem.Button style="danger" onClick={handleDeleteNote}>
          Delete
        </MenuItem.Button>
      </Menu>
    </NeetoUIDropdown>
  );
};

export default Dropdown;
