const ID = "__candy";

const createSheet = (target) => {
  let sheet,
    rules = [];

  const init = () => {
    let tag = target ? target.querySelector("#" + ID) : self[ID];
    if (!tag) {
      tag = (target || document.head).appendChild(
        document.createElement("style")
      );
      tag.textContent = " ";
      tag.id = ID;
      tag.type = "text/css";
    }

    // sheet = tag.sheet;
    sheet = tag;
  };
  init();
  return {
    insert(css, append = false) {
      try {
        if (!sheet) init();
        if (rules.indexOf(css) !== -1) return;
        rules.push(css);
        // FIXME
        // sheet.insertRule(css, sheet.cssRules.length);
        if (sheet.textContent.indexOf(css) < 0)
          sheet.textContent = append
            ? css + sheet.textContent
            : sheet.textContent + css;
      } catch (e) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(`Something went wrong: "${css}"`, e);
        }
      }
    },
    extractCSS() {
      const css = sheet.textContent;
      rules = [];
      sheet.textContent = " ";
      return css;
    },
  };
};

const sheet = createSheet();

export default sheet;
