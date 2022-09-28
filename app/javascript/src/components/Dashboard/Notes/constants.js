import * as yup from "yup";

import { buildSelectOptions } from "utils/index";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const USER_AVATAR_URL = "https://picsum.photos/id/1005/5760/3840";

export const SIXTY = 60;
export const EIGHTY = 80;
export const TWO_HUNDRED = 200;

export const CONTACT_DETAILS_DATA = buildSelectOptions([
  "Ronald Richards",
  "Jacob Jones",
  "Ronald Jones",
  "Jacob Richards",
]);

export const TAGS_DATA = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(CONTACT_DETAILS_DATA.map(contact => contact.label)),
      value: yup
        .string()
        .oneOf(CONTACT_DETAILS_DATA.map(contact => contact.value)),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS_DATA.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS_DATA.map(tag => tag.value)),
      })
    )
    .min(1, "Atleast one tag is required")
    .required("Tag is required"),
});
