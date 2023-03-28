import logo from './../images/logo.png';

const Header = () => {
    return (
        <div className='bg-secondary px-9 py-6'>
            <div className='flex items-center'>
                <img src={logo} alt='logo' />
                <h1 className='font-bold text-primary text-2xl ml-2'>E-Fashion</h1>
            </div>
        </div>
    );
}

export default Header;