import z from "zod";

export const UserValidationSchema = z.object({
    name: z.string({required_error: "Name is required!"}).min(3,"Must be greater tham 3 characters!"),
    email: z.string({required_error: "Email is required!"})
})