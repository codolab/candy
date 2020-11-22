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

  const updateInject = () => {
    const splitted = sheet.textContent.split("/*media*/")
    injected.rules = splitted[0];
    injected.media = splitted[1] || "";
  }
  init();
  return {
    // FIXME:
    insert(css, media = false, append = false) {
      try {
        if (!sheet) init();
        updateInject();
        if (sheet.textContent.indexOf(css) < 0) {
          if (media) injected.media = append ? css + injected.media :  injected.media + css;
          else injected.rules = append ? css + injected.rules : injected.rules + css;
          sheet.textContent = injected.rules + "/*media*/" + injected.media;
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
