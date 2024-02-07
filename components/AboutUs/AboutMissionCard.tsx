// ==============================================
// Filename: CBAboutMissionCard.tsx
// Type: Component
// Last Updated: Jan 16, 2024
// Project: cb-website - Front End
// ==============================================

import Image from 'next/image';
import React from 'react';
import { CBAboutMissionCardType } from '@/types/index';
import useIsMobile from '@/hooks/useIsMobile';

const CBAboutMissionCard = ({
  title,
  image,
  description,
}: CBAboutMissionCardType) => {
  const { isMobile } = useIsMobile();
  return (
    <div className='flex h-full w-full flex-col items-center gap-6 rounded-2xl border-[0.4px] border-lightGray bg-white p-6 text-black md:p-12'>
      <div className='relative flex aspect-square h-full max-h-40 w-full flex-col items-center justify-center '>
        <Image src={image} alt='client' fill className='object-contain' />
      </div>
      <div className='flex h-fit w-full max-w-96 flex-col items-center gap-4'>
        {isMobile ? <h4>{title}</h4> : <h3>{title}</h3>}
        <p className='line-clamp-4 text-center text-gray'>{description}</p>
      </div>
    </div>
  );
};

export default CBAboutMissionCard;
