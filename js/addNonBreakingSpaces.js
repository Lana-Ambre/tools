export default (value) => {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/ ([?!:;»%€=+-])/gm, "&nbsp;$1")
    .replace(/(«) /gm, "$1&nbsp;");
};
