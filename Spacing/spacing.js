/*
    *Spacing.js v1 (2019)
    --! MIT License !--
    -- Made By Khaled Mneimneh --
    Github Link https://github.com/Devel0per95/Useful-CSS-Library

    !!JQuery Required
*/

// Useful Vars
const dataSpacing = $("[ds]")
const p = "px"

// Margin
const marginSpacing = () => {
  dataSpacing.each(function () {
    $(this).css({
      'margin': $(this).attr("m") + p,
      'margin-top': $(this).attr("mt") + p,
      'margin-right': $(this).attr("mr") + p,
      'margin-bottom': $(this).attr("mb") + p,
      'margin-left': $(this).attr("ml") + p,
    });
  });
};
const marginSpacingDouble = () => {
  dataSpacing.each(function () {
    $(this).css({
      'margin-top': $(this).attr("my") + p,
      'margin-bottom': $(this).attr("my") + p,
      'margin-right': $(this).attr("mx") + p,
      'margin-left': $(this).attr("mx") + p,
    });
  });
};

// Padding
const paddingSpacing = () => {
  dataSpacing.each(function () {
    $(this).css({
      'padding': $(this).attr("p") + p,
      'padding-top': $(this).attr("pt") + p,
      'padding-right': $(this).attr("pr") + p,
      'padding-bottom': $(this).attr("pb") + p,
      'padding-left': $(this).attr("pl") + p,
    });
  });
};
const paddingSpacingDouble = () => {
  dataSpacing.each(function () {
    $(this).css({
      'padding-top': $(this).attr("py") + p,
      'padding-bottom': $(this).attr("py") + p,
      'padding-right': $(this).attr("px") + p,
      'padding-left': $(this).attr("px") + p,
    });
  });
};

// Function Calling 📱
marginSpacing()
paddingSpacing();
marginSpacingDouble();
paddingSpacingDouble();