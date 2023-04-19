import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GifGrid } from "../GifGrid";

describe('<GifGrid />', () => {
  const props = {
    category: 'Goku'
  }

  it('Should render loading', () => {
    render(<GifGrid {...props} />);

    expect(screen.getByRole('heading', {name: 'Cargando'})).toBeInTheDocument()
  })
})