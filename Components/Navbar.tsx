import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center bg-slate-700  px-8 py-4'> 
            <Link className='p-0 text-3xl bg-transparent font-bold text-white' href={"/"}>YG BLOG</Link>
            <Link className='bg-white px-4 py-2 rounded font-bold' href={"/addTopic"}>Add Blogs</Link>
        </nav>
    </>
  )
}

export default Navbar
