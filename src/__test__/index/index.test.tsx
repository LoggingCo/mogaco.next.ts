import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';

describe('<Home />', () => {
  it('renders a heading', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );

    const home = screen.getByText('mogaco');
    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
