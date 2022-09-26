import * as R from "ramda";

const camelize = str =>
  str
    .replace(/[^a-z0-9]/gi, " ")
    .toLowerCase()
    .split(" ")
    .map((element, index) =>
      index === 0
        ? element
        : element[0].toUpperCase() + element.substring(1, element.length)
    )
    .join("");

export const buildSelectOption = values =>
  values.map(value => ({
    label: value,
    value: camelize(value),
  }));

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
