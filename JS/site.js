// Step One - controller accept request
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    displayValues(startValue, endValue);
}
// Final Step - view
function displayValues(start, end) {

    //fist get ol element from page
    element = document.getElementById("results");

    for (let i = start; i <= end; i++) {


        //next create new div element
        let item = document.createElement("div");

        if (i % 2 == 0) {
            item.classList.add("boldItem");
        }

        //add classes to div element
        item.classList.add("col");
        // set message for div element
        item.innerHTML = i;
        // add new item to list
        element.appendChild(item);
    }
}