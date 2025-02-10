import moment from 'moment/moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-5 space-y-2'>
            <img width={350} src={logo} alt="" />
            <p className='text-gray-500 text-base'>Journalism Without Fear or Favour</p>
            <span className='text-gray-500 font-semibold'>{moment().format(`dddd, MMMM Do YYYY`)}</span>
        </div>
    );
};

export default Header;