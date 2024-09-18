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
import Link from "next/link"
import Google from "../Google"
import GitHub from "../GitHub"
 
const formSchema = z.object({
  email: z.string().min(1,  "Email is required!"),
  password: z.string().min(1,"Password is required!").max(8,"Password must be at least 8 characters")
})

const onSubmit = () => {
  console.log('hello');
  
}

const SignInForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="mail@mail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="w-full dark:border dark:border-gray-700 dark:text-white dark:bg-black" type="submit">Login</Button>
    </form>
    <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block
                      before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px
                      after:flex-grow after:bg-stone-400"
      >
        Or
      </div>
      <div className="flex flex-row gap-2 mb-4">
        <Google>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px" className="me-3">
            <path fill="#4285F4" d="M24 9.5c3.2 0 5.6 1.1 7.3 2.9l5.4-5.4C33.2 3.8 28.9 2 24 2 14.8 2 7.2 7.9 4.3 16.1l6.5 5.1C12.4 14 17.7 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.1 24.5c0-1.5-.1-2.6-.4-3.8H24v7.3h12.8c-.5 2.7-1.9 5-4 6.5l6.3 4.9c3.7-3.4 5.8-8.4 5.8-14.9z"/>
            <path fill="#FBBC05" d="M10.8 28.5c-1-2.7-1-5.7 0-8.4L4.3 15c-2.1 4.1-2.1 8.9 0 13.1l6.5-5.1z"/>
            <path fill="#EA4335" d="M24 46c5.4 0 9.9-1.8 13.2-4.8l-6.3-4.9c-1.8 1.2-4.2 2-6.9 2-6.3 0-11.6-4.3-13.5-10.1l-6.5 5.1C7.2 40.1 14.8 46 24 46z"/>
          </svg>
          Sign in with Google
        </Google>
        <GitHub>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28px" height="28px" fill="currentColor" className="me-4 fill-current text-white dark:text-black">
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.725-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.757-1.333-1.757-1.089-0.744 0.083-0.729 0.083-0.729 1.205 0.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495 0.998 0.108-0.775 0.418-1.305 0.76-1.605-2.665-0.305-5.466-1.335-5.466-5.93 0-1.31 0.469-2.382 1.237-3.22-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.98-0.398 3-0.403 1.02 0.005 2.043 0.137 3 0.403 2.291-1.552 3.297-1.23 3.297-1.23 0.654 1.653 0.243 2.873 0.119 3.176 0.771 0.838 1.236 1.91 1.236 3.22 0 4.61-2.804 5.623-5.475 5.92 0.43 0.372 0.814 1.102 0.814 2.222 0 1.606-0.015 2.896-0.015 3.286 0 0.322 0.218 0.694 0.825 0.576 4.765-1.587 8.198-6.082 8.198-11.383 0-6.627-5.373-12-12-12z"/>
          </svg>
          Sign in with GitHub
        </GitHub>
      </div>
      <p className="text-center text-sm text-gray-800 dark:text-white mt-2">
        If you have already account , please&nbsp;
        <Link href="/sign-up" className="text-blue-500 hover:underline"> Sign up</Link>
      </p>
  </Form>
  )
}

export default SignInForm
