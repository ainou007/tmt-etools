import { Link } from 'react-router-dom';

type TLogoProps = {
  size?: 'lg' | 'md';
};

const Logo = ({ size = 'md' }: TLogoProps) => {
  if (size === 'lg') {
    return (
      <Link to={'/'} className='text-gray-700 flex items-center2 justify-center gap-2 uppercase'>
        <p>
          <span className='text-[#d9d749] text-8xl'> {'{'}</span>
          <span className='font-bold text-7xl'>TMT-E</span>
          <span className='text-xs'>tools</span>
        </p>
      </Link>
    );
  }

  return (
    <Link to={'/'} className='text-gray-700  flex items-center justify-center gap-2 uppercase'>
      <p>
        <span className='text-[#d9d749] text-5xl'> {'{'}</span>
        <span className='font-bold text-3xl'>TMT-E</span>
        <span className='text-xxs'>tools</span>
      </p>
    </Link>
  );
};

export default Logo;
