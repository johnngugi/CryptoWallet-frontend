import { extend } from "vee-validate";
import { required, email, min, max, confirmed } from "vee-validate/dist/rules";

extend('min', min);
extend('max', max);
extend('confirmed', {
    ...confirmed,
    message: "Passwords don't match"
});

extend('email', {
    ...email,
    message: "Invalid email"
});

extend("required", {
    ...required,
    message: "This field is required"
});

extend("names", {
    validate: value => {
        return value.length >= 3 && value.length <= 30;
    },
    message: "Name must be between 3 charachters and 30 charachters long"
});

extend("strong_password", {
    validate: value => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
        return strongRegex.test(value);
    },
    message: "Password must contain at least one uppercase, one lowercase, one symbol and one number"
});