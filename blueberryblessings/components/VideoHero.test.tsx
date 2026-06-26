import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import VideoHero from './VideoHero';

test('renders VideoHero component correctly', () => {
  render(<VideoHero />);
  
  // 1. Verify main heading is present and readable (Accessibility-first)
  const heading = screen.getByRole('heading', {
    name: /growing together for a stronger blueberry future/i,
  });
  expect(heading).toBeDefined();

  // 2. Verify tagline badge is present
  const tagline = screen.getByText(/british columbia blueberry industry/i);
  expect(tagline).toBeDefined();

  // 3. Verify action buttons exist in the DOM
  const learnMoreBtn = screen.getByRole('link', { name: /learn more/i });
  const joinBtn = screen.getByRole('link', { name: /join the community/i });
  
  expect(learnMoreBtn).toBeDefined();
  expect(joinBtn).toBeDefined();
  
  expect(learnMoreBtn.getAttribute('href')).toBe('#learn-more');
  expect(joinBtn.getAttribute('href')).toBe('#join');
});
