(function () {
  console.log("Init");
  init();
  function init() {
    // listen for change on the input
    document.getElementById("bill").addEventListener("change", function (e) {
      const fifteen = calculateTip(e.target.value, 15).toFixed(2);
      const twenty = calculateTip(e.target.value, 20).toFixed(2);
      const twentyfive = calculateTip(e.target.value, 25).toFixed(2);

      document.getElementById("fifteen").innerHTML = "$" + fifteen;
      document.getElementById("twenty").innerHTML = "$" + twenty;
      document.getElementById("twentyfive").innerHTML = "$" + twentyfive;
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
        insertTip(tip);
        adjustEnteredAmount(customTip);
      });
  }

  function calculateTip(billTotal, tipAmount) {
    return billTotal * (tipAmount / 100);
  }

  function insertTip(tipAmount) {
    //get tip amount input
    const tipAmountInput = document.getElementById("tip");
    //set tip amount input value
    tipAmountInput.innerHTML = "$" + tipAmount;
  }

  function adjustEnteredAmount(customTip) {
    document.getElementById("entered-amount").innerHTML = customTip + "%";
  }
})();
