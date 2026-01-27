
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center text-gray-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
      <span className="flex text-blue-500" >Ese's</span><span className="hidden xs:inline">Tech Blog</span><span className="inline xs:hidden">Tech</span>
    </Link>
  )
}