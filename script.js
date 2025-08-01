// Function to calculate the internal marks
function calculateInternalMarks() {
    // Get input values
    const internal1 = parseFloat(document.getElementById('internal1').value);
    const internal2 = parseFloat(document.getElementById('internal2').value);
    const internal3 = parseFloat(document.getElementById('internal3').value);

    // Validate inputs
    if (isNaN(internal1) || isNaN(internal2) || isNaN(internal3)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
        return;
    }

    // Sort the marks to find the best two
    let marks = [internal1, internal2, internal3];
    marks.sort((a, b) => b - a); // Sort in descending order

    // Take the best two marks
    let a = marks[0] + marks[1];

    // Perform the calculations
    let b = a / 4;
    let c = 30 - b;
    let result = c * 5;

    // Format output
    let externalOutOf200 = result.toFixed(2);
    let externalOutOf100 = (result / 2).toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = `
        Your external requirement is: ${externalOutOf200} / 200<br>
        (Per paper ${externalOutOf100} / 100)
    `;
}

// Add event listener to the button
document.getElementById('calculateBtn').addEventListener('click', calculateInternalMarks);
