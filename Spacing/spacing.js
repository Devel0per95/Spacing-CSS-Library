/*
    *Spacing.js v1.5 (2019)
    --! MIT License !--
    -- Made By Khaled Mneimneh --
    Github Link https://github.com/Devel0per95/Useful-CSS-Library
*/
let add = document.body.setAttribute("data-spacing", "");
let dataAttr = "[data-m], [data-mt], [data-mr], [data-mb], [data-ml], [data-my], [data-mx], [data-p], [data-pt], [data-pr], [data-pb], [data-pl], [data-py], [data-px]";
let dataSpacing = [...document.querySelectorAll('[data-spacing]')].map(el => el.querySelectorAll(dataAttr));
let p = "px";

const elemntsSpacing = () => {
  dataSpacing.forEach(dataSpacingDataEls => {
    dataSpacingDataEls.forEach(getEl => {
      getEl.style.margin = getEl.getAttribute('data-m') + p;
      getEl.style.marginTop = getEl.getAttribute('data-mt') + p;
      getEl.style.marginRight = getEl.getAttribute('data-mr') + p;
      getEl.style.marginBottom = getEl.getAttribute('data-mb') + p;
      getEl.style.marginLeft = getEl.getAttribute('data-ml') + p;
      getEl.style.marginTop = getEl.getAttribute('data-my') + p;
      getEl.style.marginBottom = getEl.getAttribute('data-my') + p;
      getEl.style.marginRight = getEl.getAttribute('data-mx') + p;
      getEl.style.marginLeft = getEl.getAttribute('data-mx') + p;
      getEl.style.padding = getEl.getAttribute('data-p') + p;
      getEl.style.paddingTop = getEl.getAttribute('data-pt') + p;
      getEl.style.paddingRight = getEl.getAttribute('data-pr') + p;
      getEl.style.paddingBottom = getEl.getAttribute('data-pb') + p;
      getEl.style.paddingLeft = getEl.getAttribute('data-pl') + p;
      getEl.style.paddingTop = getEl.getAttribute('data-py') + p;
      getEl.style.paddingBottom = getEl.getAttribute('data-py') + p;
      getEl.style.paddingRight = getEl.getAttribute('data-px') + p;
      getEl.style.paddingLeft = getEl.getAttribute('data-px') + p;
    })
  })
};

// Function Calling 📱
elemntsSpacing();