"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"


const formSchema = z.object({
  name: z.string().min(1,"Category name field is required!"),
})

const CreateCateogry = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/category", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        catName: values.name
      })
    })

    if(res.ok) {
      router.push('/sign-in')
    }else {
     "worng"
    }
   }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category name</FormLabel>
            <FormControl>
              <Input placeholder="Enter category name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="w-full" type="submit">Create category</Button>
    </form>
  </Form>
  )
}

export default CreateCateogry
