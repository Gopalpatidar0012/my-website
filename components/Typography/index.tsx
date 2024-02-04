import React, { ReactNode } from 'react';

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  LABEL = 'label',
  LABELLIGHT = 'labelLight',
  TITLE = 'title',
  H1MOBILE = 'H1Mobile',
  H2MOBILE = 'H2Mobile',
  H2BOLDMOBILE = 'H2BoldMobile',
  H2BOLD = 'H2Bold',
}

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: TypographyVariant;
  children?: ReactNode;
  color?: string;
  className?: string;
}
const Typography = ({
  variant,
  children,
  color,
  className = '',
}: TypographyProps) => {
  const variantStyles = {
    [TypographyVariant.H1]: 'text-6xl font-montserrat font-bold',
    [TypographyVariant.H1MOBILE]:
      'text-4xl font-montserrat font-bold leading-normal',
    [TypographyVariant.H2MOBILE]:
      'text-[32px] font-montserrat font-light capitalize leading-normal',
    [TypographyVariant.H2BOLDMOBILE]:
      'text-[32px] font-montserrat font-bold capitalize',
    [TypographyVariant.H2BOLD]:
      'text-5xl font-montserrat font-bold capitalize leading-normal',
    [TypographyVariant.H2]:
      'text-5xl font-light font-montserrat capitalize leading-normal',
    [TypographyVariant.H3]: 'text-[32px] font-bold font-montserrat',
    [TypographyVariant.H5]: 'text-lg font-bold font-montserrat',
    [TypographyVariant.H6]: 'text-base font-bold font-montserrat',
    [TypographyVariant.TITLE]: 'text-xl font-medium font-montserrat',
    [TypographyVariant.H4]: 'text-2xl font-medium font-poppins',
    [TypographyVariant.LABEL]: 'text-sm font-semibold font-poppins',
    [TypographyVariant.LABELLIGHT]:
      'text-xs font-normal not-italic leading-normal font-poppins',
    [TypographyVariant.P]: 'text-base font-normal font-openSans',
  };

  let CustomTag = `${variant}` as keyof JSX.IntrinsicElements;
  // if variant starts with H1 or H2, then variant is <h1> or <h2>
  if (variant.startsWith('H1')) {
    CustomTag = 'h1';
  } else if (variant.startsWith('H2')) {
    CustomTag = 'h2';
  }

  switch (variant) {
    case 'title':
      return (
        <h2
          className={`${variantStyles[variant]} ${className}`}
          style={{ color: color }}
        >
          {children}
        </h2>
      );
    case 'labelLight':
      return (
        <label
          className={`${variantStyles[variant]} ${className}`}
          style={{ color: color }}
        >
          {children}
        </label>
      );
    case 'label':
      return (
        <p
          className={`${variantStyles[variant]} ${className}`}
          style={{ color: color }}
        >
          {children}
        </p>
      );
    default:
      return (
        <CustomTag
          className={`${variantStyles[variant]} ${className}`}
          style={{ color: color }}
        >
          {children}
        </CustomTag>
      );
  }
};

export default Typography;
