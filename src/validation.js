import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

// No message specified.
extend('email', {
    ...email,
    message: "Invalid email"
});

extend("required", {
    ...required,
    message: "This field is required"
});