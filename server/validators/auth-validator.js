const { z } = require("zod");

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invaild email Address"})
    .min(3, { message: "Name must be  at least of 3 Characters."})
    .max(255, {message: "Name must not be more than 255 characters"}),

    password: z
    .string({required_error:"Passwoed is required"})
    .trim()
    .min(7, { message: "Password must be at least of 6 Characters."})
    .max(1024, {message: "Password must not be more than 1024 characters"}),
});

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, { message: "Name must be  at least of 3 Characters."})
    .max(255, {message: "Name must not be more than 255 characters"}),
    
    phone: z
    .string({required_error:"phone_no is required"})
    .trim()
    .min(10, { message: "Phone number must be  at least of 10 Characters."})
    .max(20, {message: "Phone number must not be more than 20 characters"}),
    password: z
    .string({required_error:"Passwoed is required"})
    .trim()
    .min(7, { message: "Password must be at least of 6 Characters."})
    .max(1024, {message: "Password must not be more than 1024 characters"}),
});

module.exports = {signupSchema, loginSchema};