// validation script
const inputs = document.querySelectorAll("input");

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/i,
    password: /^[\w@-]{8,20}$/i,
    telephone: /^\d{10}$/,
    slug: /^[a-z\d-]{8,20}$/,
};

function validate (field, regex) {
    //console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]) 
        //e.target = input field
    });
});