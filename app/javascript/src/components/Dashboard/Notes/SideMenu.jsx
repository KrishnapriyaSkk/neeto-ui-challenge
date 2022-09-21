import React from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { EIGHTY, SIXTY, TWO_HUNDRED } from "./constants";

const SideMenu = ({ showMenu }) => (
  <MenuBar showMenu={showMenu} title="Contacts">
    <MenuBar.Block active count={TWO_HUNDRED} label="All" />
    <MenuBar.Block count={EIGHTY} label="Users" />
    <MenuBar.Block count={SIXTY} label="Leads" />
    <MenuBar.Block count={SIXTY} label="Visitors" />
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Block count={EIGHTY} label="Europe" />
    <MenuBar.Block count={SIXTY} label="Middle-East" />
    <MenuBar.Block count={SIXTY} label="Asia" />
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Settings,
        },
        {
          icon: Plus,
        },
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Block count={EIGHTY} label="Europe" />
    <MenuBar.Block count={SIXTY} label="Middle-East" />
    <MenuBar.Block count={SIXTY} label="Asia" />
  </MenuBar>
);

export default SideMenu;
