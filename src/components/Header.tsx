'use client';
import React from 'react';
import { Sun } from './Icons';
import Image from 'next/image';

const doctor = {
  name: 'Edward Jenner',
  avatar: '/images/Edward_Jenner.jpg',
};

const Header = () => {
  return (
    <header className=' p-5 flex justify-center border-b border-slate-950/10'>
      <div className='flex items-center justify-between w-full max-w-screen-lg'>
        <div className='flex gap-2 items-center'>
          <h1 className='text-slate-950/50 text-sm'>Patient Management</h1>
          <span className='text-slate-950/50 text-sm'>/</span>
          <h2 className='text-slate-950 text-sm'>Patients</h2>
        </div>
        <div className='flex gap-4 items-center'>
          <button aria-label='Toggle dark mode' onClick={() => {}}>
            <Sun />
          </button>
          <div className='flex gap-2 items-center'>
            <Image
              src={doctor.avatar}
              alt=''
              width={24}
              height={24}
              className='rounded-full aspect-square h-6 '
            />
            <p className='text-slate-950 text-sm'>{doctor.name}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
