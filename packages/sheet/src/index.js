const ID = "__candy";
const ssr = { textContent: "" };

const createSheet = (target) => {
  let sheet,
    injected = { rules: [], media: [] };

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
          if (media) injected.media.push(css);
          else injected.rules.push(css);
          sheet.textContent = injected.rules.join("") + injected.media.join("");
        }
      } catch (e) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(`Something went wrong: "${css}"`, e);
        }
      }
    },
    extractCSS() {
      const css = sheet.textContent;
      injected = { rules: [], media: [] };
      sheet.textContent = " ";
      console.log(injected)
      return css;
    },
  };
};

const sheet = createSheet();

export default sheet;
