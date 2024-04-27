let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");

// Event listener
btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "CODE128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });
});

window.onload = () => {
  input.value = "";
};
