
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex text-gray-300 font-bold text-xl md:text-2xl lg:text-3xl">
      <span className="flex text-blue-500" >Ese's</span>Tech Blog
    </Link>
  )
}