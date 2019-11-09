/*
    *Spacing.js v1.5 (2019)
    --! MIT License !--
    -- Made By Khaled Mneimneh --
    Github Link https://github.com/Devel0per95/Useful-CSS-Library
*/
let autoTrigger = document.body.setAttribute("data-spacing", "");
let dataAttr = "[data-m], [data-mt], [data-mr], [data-mb], [data-ml], [data-my], [data-mx], [data-p], [data-pt], [data-pr], [data-pb], [data-pl], [data-py], [data-px]";
let dataSpacing = [...document.querySelectorAll('[data-spacing]')].map(el => el.querySelectorAll(dataAttr));
let p = "px";

const elemntsSpacing = () => {
  dataSpacing.forEach(dataSpacingDataEls => {
    dataSpacingDataEls.forEach(getEl => {
      getEl.style.margin = getEl.dataset.m + p;
      getEl.style.marginTop = getEl.dataset.mt + p;
      getEl.style.marginRight = getEl.dataset.mr + p;
      getEl.style.marginBottom = getEl.dataset.mb + p;
      getEl.style.marginLeft = getEl.dataset.ml + p;
      getEl.style.marginTop = getEl.dataset.my + p;
      getEl.style.marginBottom = getEl.dataset.my + p;
      getEl.style.marginRight = getEl.dataset.mx + p;
      getEl.style.marginLeft = getEl.dataset.mx + p;
      getEl.style.padding = getEl.dataset.p + p;
      getEl.style.paddingTop = getEl.dataset.pt + p;
      getEl.style.paddingRight = getEl.dataset.pr + p;
      getEl.style.paddingBottom = getEl.dataset.pb + p;
      getEl.style.paddingLeft = getEl.dataset.pl + p;
      getEl.style.paddingTop = getEl.dataset.py + p;
      getEl.style.paddingBottom = getEl.dataset.py + p;
      getEl.style.paddingRight = getEl.dataset.px + p;
      getEl.style.paddingLeft = getEl.dataset.px + p;
    })
  })
};

// Function Calling 📱
elemntsSpacing();