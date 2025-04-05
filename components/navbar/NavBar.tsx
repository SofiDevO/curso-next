import React from 'react'
import ActiveLink from '@/components/active-link/ActiveLink';
const menu = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "pricing", path: "/pricing" },
]



export default function NavBar() {
  return (
    <nav className='flex justify-center items-center gap-4 p-4  text-white'>
        <ul className="flex gap-5">
            {menu.map((item) => (
                    <ActiveLink key={item.text} {...item} />
            ))}
        </ul>
    </nav>
  )
}
