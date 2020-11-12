const ID = "__candy";
const ssr = { textContent: "" };

const createSheet = (target) => {
  let sheet,
    injected = { rules: "", media: "" };

  const init = () => {
    try {
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
    } catch (e) {
      sheet = ssr;
    }
  };
  init();
  return {
    // FIXME:
    insert(css, media = false) {
      try {
        if (!sheet) init();
        if (sheet.textContent.indexOf(css) < 0) {
          if (media) injected.media = injected.media + css;
          else injected.rules = injected.rules + css;
          sheet.textContent = injected.rules + injected.media;
        }
      } catch (e) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(`Something went wrong: "${css}"`, e);
        }
      }
    },
    extractCSS() {
      const css = sheet.textContent;
      injected = { rules: "", media: "" };
      sheet.textContent = " ";
      return css;
    },
  };
};

const sheet = createSheet();

export default sheet;
