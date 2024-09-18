import Post from "@/components/Post";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);  
    if(session?.user) {
      return (
         <Post/>
      )
    }
  
    return (
      <div className='container mt-36 py-6 bg-gray-200 rounded-md w-[850px] items-center justify-center'>
      <span className='flex items-center justify-center'>If you want to see this page, please login first!</span>
    </div>
    )
}
