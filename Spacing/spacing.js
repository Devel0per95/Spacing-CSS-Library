/*
    *Spacing.js v1.3 (2019)
    --! MIT License !--
    -- Made By Khaled Mneimneh --
    Github Link https://github.com/Devel0per95/Useful-CSS-Library

    !!JQuery Required
*/

// Useful Vars
let dataAttr = "[data-m], [data-mt], [data-mr], [data-mb], [data-ml], [data-my], [data-mx], [data-p], [data-pt], [data-pr], [data-pb], [data-pl], [data-py], [data-px]";
let dataSpacing = $("[data-spacing]").find(dataAttr);
let p = "px";

// Margin
const marginSpacing = () => {
  dataSpacing.each(function () {
    $(this).css({
      'margin': $(this).attr("data-m") + p,
      'margin-top': $(this).attr("data-mt") + p,
      'margin-right': $(this).attr("data-mr") + p,
      'margin-bottom': $(this).attr("data-mb") + p,
      'margin-left': $(this).attr("data-ml") + p,
    });
  });
};
const marginSpacingDouble = () => {
  dataSpacing.each(function () {
    $(this).css({
      'margin-top': $(this).attr("data-my") + p,
      'margin-bottom': $(this).attr("data-my") + p,
      'margin-right': $(this).attr("data-mx") + p,
      'margin-left': $(this).attr("data-mx") + p,
    });
  });
};

// Padding
const paddingSpacing = () => {
  dataSpacing.each(function () {
    $(this).css({
      'padding': $(this).attr("data-p") + p,
      'padding-top': $(this).attr("data-pt") + p,
      'padding-right': $(this).attr("data-pr") + p,
      'padding-bottom': $(this).attr("data-pb") + p,
      'padding-left': $(this).attr("data-pl") + p,
    });
  });
};
const paddingSpacingDouble = () => {
  dataSpacing.each(function () {
    $(this).css({
      'padding-top': $(this).attr("data-py") + p,
      'padding-bottom': $(this).attr("data-py") + p,
      'padding-right': $(this).attr("data-px") + p,
      'padding-left': $(this).attr("data-px") + p,
    });
  });
};

// Function Calling 📱
marginSpacing()
paddingSpacing();
marginSpacingDouble();
paddingSpacingDouble();