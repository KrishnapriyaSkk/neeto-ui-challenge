import * as yup from "yup";

import { buildSelectOptions } from "utils/index";

export const CONTACT_DETAILS_DATA = [
  {
    id: 0,
    firstName: "Ronald",
    lastName: "Richards",
    email: "ronald123@example.com",
    createdAt: "2022-09-25 13:03",
    role: "Owner",
  },
  {
    id: 1,
    firstName: "Jacob",
    lastName: "Jones",
    email: "jones123@example.com",
    createdAt: "2022-09-25 17:03",
    role: "Owner",
  },
  {
    id: 2,
    firstName: "Ronald",
    lastName: "Jones",
    email: "ronald123@example.com",
    createdAt: "2022-09-25 12:03",
    role: "Owner",
  },
  {
    id: 3,
    firstName: "Jacob",
    lastName: "Richards",
    email: "jones123@example.com",
    createdAt: "2022-09-24 13:03",
    role: "Owner",
  },
];

export const USER_AVATAR_URL = "https://picsum.photos/id/1005/5760/3840";

export const SIXTY = 60;
export const EIGHTY = 80;
export const TWO_HUNDRED = 200;

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES_DATA = buildSelectOptions([
  "Owner",
  "User",
  "Lead",
  "Visitor",
]);

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Valid email is required")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES_DATA.map(role => role.label)),
      value: yup.string().oneOf(ROLES_DATA.map(role => role.value)),
    })
    .required("Role is required"),
});
