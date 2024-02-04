import { render, screen } from '@testing-library/react';
import Typography, { TypographyVariant } from '.';
import '@testing-library/jest-dom';

describe('Typography Component', () => {
  it('renders the correct variant and color for H1', () => {
    render(
      <Typography variant={TypographyVariant.H1} color='red'>
        Heading 1
      </Typography>
    );
    const headingElement = screen.getByText('Heading 1');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('color: red');
    expect(headingElement.tagName).toBe('H1');
  });

  it('renders the correct variant and color for P', () => {
    render(
      <Typography variant={TypographyVariant.P} color='blue'>
        Paragraph
      </Typography>
    );
    const paragraphElement = screen.getByText('Paragraph');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveStyle('color: blue');
    expect(paragraphElement.tagName).toBe('P');
  });

  it('renders the correct variant and color for Label', () => {
    render(
      <Typography variant={TypographyVariant.LABEL} color='green'>
        Label Text
      </Typography>
    );
    const labelElement = screen.getByText('Label Text');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle('color: green');
    expect(labelElement.tagName).toBe('LABEL');
  });
});
