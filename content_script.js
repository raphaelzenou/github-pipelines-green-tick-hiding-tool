function addImportantRule(element, property, value) {
  var styleElement = document.createElement("style");
  var selector = "#" + element.id;
  styleElement.textContent =
    selector + " { " + property + ": " + value + " !important; }";
  document.head.appendChild(styleElement);
}

console.log(`Let's go 🚀`);

var listGreen = document.querySelectorAll(
  ".octicon.octicon-check.mx-auto.d-block.color-fg-success"
);
var listGrey = document.querySelectorAll(
  ".octicon.octicon-skip.mx-auto.d-block.neutral-check"
);

if (!listGreen.length) {
  alert("Potentially wrong URL, please visit a Github PR");
} else {
  var parentsListHidden = [...listGreen, ...listGrey].forEach(function (
    element,
    index
  ) {
    var parentElement = element.parentNode.parentNode;
    var parentClass = parentElement.className;
    var excludeClass = "review-status-item d-flex flex-justify-between";

    if (parentElement && parentClass !== excludeClass) {
      parentElement.id = `hide-${index}`;
      addImportantRule(parentElement, "display", "none");
    }
  });

  console.log("Pipeline Greenticks hidden ✅");
}
