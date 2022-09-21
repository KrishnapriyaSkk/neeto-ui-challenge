import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Tag, Tooltip, Avatar, Dropdown } from "neetoui";
import { Header } from "neetoui/layouts";

import { USER_AVATAR_URL } from "../constants";
import { requiredDateFormat, relativeCreationTime } from "../utils";

const CardDiv = ({ item }) => (
  <div className="m-3 w-full  border border-gray-200 p-4 shadow-sm  dark:border-gray-500 dark:bg-gray-600">
    <Header
      title={item.title}
      actionBlock={
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      }
    />
    <div className="mb-4">{`"${item.description}"`}</div>
    <hr />
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
          content={requiredDateFormat(item.created_at)}
          position="bottom-start"
        >
          <div> {`Drafted ${relativeCreationTime(item.created_at)}`}</div>
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

export default CardDiv;
