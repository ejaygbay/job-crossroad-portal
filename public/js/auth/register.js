document.querySelector('#create-account-btn').addEventListener('click', e => {
    let first_name = document.getElementById('first-name').value.trim();
    let middle_name = document.getElementById('middle-name').value.trim();
    let last_name = document.getElementById('last-name').value.trim();
    let contact = document.getElementById('contact').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    let account_details = {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        contact: contact,
        email: email,
        password: password
    }

    if (!validateInputs(account_details)) {
        // make request
        console.log("No Empty");
    } else {
        // don't make request
        console.log("Empty");
        makeRequest(account_details);
    }
})

const validateInputs = (data) => {
    let result = false;

    for (item in data) {
        if (data[item].length < 1) {
            result = true;
            break;
        }
    }
    return result;
}

const makeRequest = (data) => {
    console.log(data)
    fetch('/account/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // TODO handle body
            console.log("body:", data);
        }).catch(error => {
            // TODO handle error
            console.log("error:", error);
        })
}