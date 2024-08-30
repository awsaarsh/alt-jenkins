import Logos from '../assets/logo.jpg';

const Logo = () => {
    return(
        <div>
            <h2>
            <img className="avatar-img" src={Logos} alt="user@email.com" />
            </h2>         
        </div>
    )
}

export default Logo;