import React from "react";

import { Clock } from "neetoicons";
import { Tag, Tooltip, Avatar, Typography } from "neetoui";
import { Header } from "neetoui/layouts";

import {
  dateTimeFormatter,
  relativeCreationTime,
} from "components/Dashboard/utils";

import Dropdown from "./Dropdown";

import { USER_AVATAR_URL } from "../constants";

const Card = ({ note, setShowDeleteAlert, setSelectedNoteId }) => (
  <div className="m-3 w-full border border-gray-300 p-4 shadow-sm dark:border-gray-500 dark:bg-gray-600">
    <Header
      title={note.title}
      actionBlock={
        <Dropdown
          note={note}
          setSelectedNoteId={setSelectedNoteId}
          setShowDeleteAlert={setShowDeleteAlert}
        />
      }
    />
    <p>{note.description}</p>
    <hr className="my-2.5" />
    <div className="mt-2 flex justify-between">
      <Tag
        classname="neeto-ui-tag"
        label="Getting Started"
        style="secondary"
        type="outline"
      />
      <div className="flex items-center space-x-2">
        <Clock size={13} />
        <Tooltip
          content={dateTimeFormatter(note.created_at)}
          position="bottom-start"
        >
          <Typography className="px-1" color="black" style="body3">
            {`Drafted ${relativeCreationTime(note.created_at)}`}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: USER_AVATAR_URL,
          }}
        />
      </div>
    </div>
  </div>
);

export default Card;
