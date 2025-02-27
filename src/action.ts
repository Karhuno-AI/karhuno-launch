import { redirect } from "next/navigation"
import { formSchema } from "./lib/zodschema"

// Server action with validation
async function formAction(prevState: unknown, formData: FormData) {
    // Validate the form data with Zod
    const validatedFields = formSchema.safeParse({
      details: formData.get("details"),
    })
  
    // If validation fails, return errors
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        
      }
    }

    redirect('/success');

    // Your server-side logic here
    // ...

}

export default formAction