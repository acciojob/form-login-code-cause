// function getFormvalue() {
//     //Write your code here
//    let input = document.querySelectorAll("input");

// 	let btn = document.querySelector("button")
// 	btn.addEventListener("click",()=>{
// 		alert(input[0].value+" "+input[1].value);
// 	})


function getFormvalue() {
    let form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        let inputs = document.querySelectorAll("input");
        let firstName = inputs[0].value.trim();
        let lastName = inputs[1].value.trim();

        if (firstName === "" || lastName === "") {
            alert("Please enter both First Name and Last Name.");
            return;
        }

        alert(firstName + " " + lastName);
    });
}

// Ensure the function runs after the page loads
window.onload = getFormvalue;


	
// }
