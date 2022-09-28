import React from "react";

import { Pane as NeetoUIPane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACT_FORM_INITIAL_FORM_VALUES } from "../constants";

const Pane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <NeetoUIPane isOpen={showPane} onClose={onClose}>
      <NeetoUIPane.Header>
        <Typography style="h2" weight="semibold">
          Create a new contact
        </Typography>
      </NeetoUIPane.Header>
      <Form
        contact={CONTACT_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
        onClose={onClose}
      />
    </NeetoUIPane>
  );
};

export default Pane;
