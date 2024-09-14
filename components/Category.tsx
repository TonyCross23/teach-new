import { buttonVariants } from './ui/button'
import Link from 'next/link'

const Category = () => {
  return (
    <div>
        <ul className='container flex flex-row gap-4 py-1'>
        <li className={buttonVariants({ variant: "outline" })}><Link href={"/"}>News</Link></li>
        <li className={buttonVariants({ variant: "outline" })}><Link href={"/"}>Rreviews</Link></li>
        <li className={buttonVariants({ variant: "outline" })}><Link href={"/"}>Laptop</Link></li>
        <li className={buttonVariants({ variant: "outline" })}><Link href={"/"}>Tips&Tricks</Link></li>
      </ul>
    </div>
  )
}

export default Category
