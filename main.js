(function () {
  console.log("Init");
  init();
  function init() {
    // listen for change on the input
    document.getElementById("bill").addEventListener("change", function (e) {
      const fifteen = calculateTip(e.target.value, 15).toFixed(2);
      const twenty = calculateTip(e.target.value, 20).toFixed(2);
      const twentyfive = calculateTip(e.target.value, 25).toFixed(2);
    });

    //listen for click on calculate button
    document
      .getElementById("calculate-tip")
      .addEventListener("click", function (e) {
        //get custom tip input value
        const customTip = document.getElementById("custom-tip").value;
        //get bill input value
        const bill = document.getElementById("bill").value;

        //calculate tip
        const tip = calculateTip(bill, customTip).toFixed(2);
      });
  }

  function calculateTip(billTotal, tipAmount) {
    return billTotal * (tipAmount / 100);
  }
})();
