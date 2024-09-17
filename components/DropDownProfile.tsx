import {
  ChartColumnStacked,
  Plus,
  User,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"
import NavLogout from "./NavLogout"
import Link from "next/link"

const DropDownProfile = async () => {
  const session = await getServerSession(authOptions)
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
      <Image
        src={session?.user?.image || ""}
        width={40} // Actual width of the image
        height={40} // Actual height of the image // Makes it auto scale while maintaining aspect ratio
        alt="Home" 
        className="rounded-full object-cover cursor-pointer" // Adjust width and height as needed
      />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={"/create/post"} className="flex ">
          <Plus size={18} strokeWidth={1.5} className="mr-2 h-4 w-4 mt-1"/>
          <span className='mt-1'>Create post</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={"/create/category"} className="flex ">
          <ChartColumnStacked size={18} strokeWidth={1.5} className="mr-2 h-4 w-4 mt-1"/>
          <span className='mt-1'>Create category</span>
        </Link>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <NavLogout/>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default DropDownProfile
