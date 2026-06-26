import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import VideoHero from './VideoHero';

test('renders VideoHero component correctly with mockup copy', () => {
  render(<VideoHero />);
  
  // 1. Verify main heading is present and readable (Welcome to Blueberry Blessings!)
  const heading = screen.getByRole('heading', {
    name: /welcome to/i,
  });
  expect(heading).toBeDefined();
  
  const spanText = screen.getByText(/blueberry blessings!/i);
  expect(spanText).toBeDefined();

  // 2. Verify single gold action button (Shop Now) exists
  const shopNowBtn = screen.getByRole('link', { name: /shop now/i });
  expect(shopNowBtn).toBeDefined();
  expect(shopNowBtn.getAttribute('href')).toBe('#shop');
});
