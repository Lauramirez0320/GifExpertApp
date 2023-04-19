import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
import { GifImage } from "../GifImage";
import { IImages } from '../index';

describe('loads and displays greeting', () => {
  const props = {
    imgTitle: 'Goku',
    imdId: 'goku2',
    imgUrl: 'https//'
  }


  it('Should render GifImage', () => {
    render(<GifImage {...props} />)
    expect(screen.getByRole('heading')).toHaveTextContent(props.imgTitle)
    expect(screen.getByRole('img')).toBeInTheDocumen()
  })
})
