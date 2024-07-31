'use client';
import React from 'react';
import { Patient } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Edit, Trash, ChevronDown } from './Icons';

const PatientCard = ({ patient }: Patient) => {
  return (
    <li className='bg-slate-50 rounded-2xl p-3 pr-6'>
      <div className='flex justify-between '>
        <div className='flex gap-4'>
          <Image
            src={patient.avatar}
            alt=''
            width={48}
            height={48}
            className='rounded-full aspect-square'
          />
          <div>
            <p className='text-slate-950 font-semibold '>{patient.name}</p>
            <time
              className='text-slate-950/70 text-xs'
              dateTime={patient.createdAt}>
              {patient.createdAt}
            </time>
          </div>
        </div>
        <div className='flex justify-between gap-6'>
          <div className='flex gap-2'>
            <button aria-label='Edit patient' onClick={() => {}}>
              <Edit />
            </button>
            <button aria-label='Delete patient' onClick={() => {}}>
              <Trash />
            </button>
          </div>
          <button aria-label='Toggle description' onClick={() => {}}>
            <ChevronDown />
          </button>
        </div>
      </div>
      <div className='p-6 flex flex-col gap-3'>
        <p className='text-sm text-slate-950/90'>{patient.description}</p>
        <Link
          className='text-sm font-semibold underline'
          href={patient.website}>
          {patient.website}
        </Link>
      </div>
    </li>
  );
};

export default PatientCard;
