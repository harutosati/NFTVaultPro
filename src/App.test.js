// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTVaultPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTVaultPro/i);
    expect(titleElement).toBeInTheDocument();
});
