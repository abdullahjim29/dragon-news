import moment from 'moment/moment';
import logo from '../assets/logo.png'
import MarqueeText from './MarqueeText';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-5 space-y-2'>
            <Link to='/'><img width={350} src={logo} alt="" /></Link>
            <p className='text-gray-500 text-base'>Journalism Without Fear or Favour</p>
            <span className='text-gray-500 font-semibold'>{moment().format(`dddd, MMMM Do YYYY`)}</span>
            <MarqueeText/>
        </div>
    );
};

export default Header;