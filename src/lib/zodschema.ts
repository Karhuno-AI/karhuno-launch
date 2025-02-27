import { z } from "zod";

export const formSchema = z.object({
    details: z
      .string()
      .min(10, "Please provide at least 10 characters of details")
      .max(500, "Details must be less than 500 characters"),
  })
  
  // Type for the form data
  export type FormData = z.infer<typeof formSchema>
  
  // Validation function you can use anywhere
  export function validateFormData(data: { details?: string; IdealCustomer?: string }) {
    return formSchema.safeParse(data)
  }
