import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
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

export const CONTACT_DETAILS_DATA = [
  {
    id: 0,
    name: "Ronald Richards",
  },
  {
    id: 1,
    name: "Jacob Jones",
  },
  {
    id: 2,
    name: "Ronald Jones",
  },
  {
    id: 3,
    name: "Jacob Richards",
  },
];

export const TAGS_DATA = [
  {
    id: 0,
    name: "Getting Started",
  },
  {
    id: 1,
    name: "Onboarding",
  },
  {
    id: 2,
    name: "User Flow",
  },
  {
    id: 3,
    name: "UX",
  },
  {
    id: 4,
    name: "Bugs",
  },
  {
    id: 5,
    name: "V2",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(CONTACT_DETAILS_DATA.map(contact => contact.name)),
      value: yup
        .number()
        .oneOf(CONTACT_DETAILS_DATA.map(contact => contact.id)),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS_DATA.map(tag => tag.name)),
        value: yup.number().oneOf(TAGS_DATA.map(tag => tag.id)),
      })
    )
    .min(1, "Atleast one tag is required")
    .required("Tag is required"),
});
