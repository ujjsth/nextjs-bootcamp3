import Link from 'next/link'
import React, { ReactNode } from 'react'

// interface Props{
//     children :  ReactNode,
// }

export default function AdminLayout({ children}: {  children :  ReactNode }) {
  return (
    <div className='w-[1200px] m-auto'>
        <div>
            <nav className=' bg-sky-700 py-5 px-5'>
                <Link href="/admin" className='text-white transition-all duration-1000 text-lg bg-black py-3 hover:bg-red-700 px-5 rounded-full'>Admin</Link>
                <Link href="/admin/users" className='text-white text-lg bg-black py-3 hover:bg-red-700 px-5 rounded-3xl mx-5'>Users</Link>
                <Link href="/admin/products" className='text-white text-lg bg-black hover:bg-red-700 py-3 px-5 rounded-[15px]'>Products</Link>
            </nav>
        </div>
        <div>
          {children}
        </div>
    </div>
  )
}
