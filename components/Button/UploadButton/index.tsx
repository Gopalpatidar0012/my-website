'use client';
// not allowed
// ==============================================
// Filename: CBUploader.tsx
// Type: Component
// Last Updated: Nov 17 2023
// Project: cb-website - Front End
// ==============================================
import React, { useEffect, useState } from 'react';
import { ButtonSize, ButtonVariant, UploadButtonType } from '@/types/index';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import Button from '..';
import { Typography, TypographyVariant } from '../..';

const CBUploader = ({
  handleFileChange,
  file,
  errorText,
  isDarkBackground,
}: UploadButtonType) => {
  const [sideText, setSideText] = useState('Max file size 5MB');
  useEffect(() => {
    if (errorText) {
      setSideText(errorText);
    } else if (file) {
      setSideText(file.name);
    } else {
      setSideText('Max file size 5MB');
    }
  }, [errorText, file, sideText]);
  return (
    <div>
      <input
        style={{ display: 'none' }}
        id='upload-resume'
        onChange={(e) => handleFileChange(e)}
        type='file'
      />
      <div className='flex items-center gap-2'>
        <Button
          onClick={() => {
            const fileInput = document.getElementById('upload-resume');
            if (fileInput) {
              fileInput.click();
            }
          }}
          title='Upload Resume'
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          icon={faCloudArrowUp}
          backgroundColor={isDarkBackground ? 'white' : 'black'}
          color={isDarkBackground ? 'black' : 'white'}
        />
        <div className='max-w-xs overflow-hidden'>
          <Typography
            variant={TypographyVariant.LABELLIGHT}
            className={`${
              errorText ? 'text-red' : 'text-white'
            } overflow-hidden overflow-ellipsis whitespace-nowrap`}
          >
            {sideText}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CBUploader;
