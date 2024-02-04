import React from 'react'
import Typography, { TypographyVariant } from '../Typography'

const Copyright = ({copyrightText}: {copyrightText: string}) => {
  return (
    
    <div className='flex items-center justify-center bg-darkBackground p-4 text-center md:px-24 md:py-4'>
    <Typography variant={TypographyVariant.P} className='text-slate-300'>
      {copyrightText}
    </Typography>
  </div>
  )
}

export default Copyright
