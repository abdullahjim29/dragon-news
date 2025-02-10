import userIcon from '../assets/user.png'
const Login = () => {
    return (
        <div className='flex items-center gap-3'>
            <img width={40} src={userIcon} alt="" />
            <button className='btn btn-neutral text-white px-10'>Login</button>
        </div>
    );
};

export default Login;