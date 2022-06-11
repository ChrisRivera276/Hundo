// Step One - controller accept request
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    displayValues(startValue, endValue);
}
// Final Step - view
function displayValues(start, end) {

    let startNum = parseInt(start);
    let endNum = parseInt(end);

    //fist get ol element from page
    element = document.getElementById("results");
    // prevent the user from using any number not between 1 and 100
    if (startNum >= 1 && endNum <= 100) {


        for (let i = startNum; i <= endNum; i++) {

            //next create new div element
            let item = document.createElement("div");

            if (i % 2 == 0) {
                item.classList.add("boldItem");
            } else item.classList.add("redItem");

            //add classes to div element
            item.classList.add("col");
            // set message for div element
            item.innerHTML = i;
            // add new item to list
            element.appendChild(item);
        }
    } else {
        let item = document.createElement("div");
        item.classList.add("col");
        item.classList.add("col-md-8");
        item.classList.add("text-start");
        item.innerHTML = "Please enter values between 1 and 100";
        element.appendChild(item);
    }
}

// clear the any outputs to allow refreshed results every time the button is pressed
function clearOutput() {
    let output = document.getElementById("results");
    output.innerHTML = "";
}