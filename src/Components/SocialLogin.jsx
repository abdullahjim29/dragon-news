import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="space-y-2">
            <div><button className="btn btn-wide"><FaGoogle/>Login With Google</button></div>
            <div><button className="btn btn-wide"><FaGithub/>Login With Github</button></div>
        </div>
    );
};

export default SocialLogin;