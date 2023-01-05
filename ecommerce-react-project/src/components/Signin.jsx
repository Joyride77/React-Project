import { useState } from 'react'

const SignIn = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <div className='flex gap-20'>
                <img src="./images/hero/logo.svg" alt="logo" />
                <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search any thing" type="text" name="search" />
                </label>
            </div>
            <div className='flex gap-12'>
                <p className='text-white'><a href="#"><i class="bi bi-person"></i> Sign In</a></p>
                <p className='text-white'><a href="#"><i class="bi bi-heart"></i></a></p>
                <p className='text-white'><a href="#"><i class="bi bi-cart3"></i></a></p>
            </div>
        </nav>
    )
}

export default SignIn