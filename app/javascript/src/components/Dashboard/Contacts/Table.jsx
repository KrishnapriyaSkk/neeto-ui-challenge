import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Avatar, Typography, Dropdown } from "neetoui";

import { USER_AVATAR_URL } from "./constants";

import { monthDateFormatter } from "../utils";

const { Menu, MenuItem } = Dropdown;

const renderUserDetails = (firstName, { lastName, role }) => (
  <div className="flex space-x-2">
    <Avatar size="large" user={{ imageUrl: USER_AVATAR_URL }} />
    <div className="flex flex-col">
      <Typography style="h4">
        {firstName} {lastName}
      </Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

const renderDropdownMenu = () => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger">Delete</MenuItem.Button>
    </Menu>
  </Dropdown>
);

const Table = ({ contacts = [] }) => (
  <div className="contacts-table-height w-full">
    <NeetoUITable
      defaultPageSize={10}
      rowData={contacts}
      columnData={[
        {
          title: "Name and Role",
          dataIndex: "firstName",
          key: "firstName",
          width: "40%",
          render: renderUserDetails,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          width: "30%",
        },
        {
          title: "Created at",
          dataIndex: "createdAt",
          key: "createdAt",
          width: "20%",
          render: monthDateFormatter,
        },
        {
          title: "",
          dataIndex: "id",
          key: "id",
          width: "10%",
          render: renderDropdownMenu,
        },
      ]}
    />
  </div>
);

export default Table;
