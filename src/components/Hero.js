import Background from './../images/hero_bg.jpg';
import Woman from './../images/woman.png';

const Hero = () => {
    return (
        <div className='w-full h-[80vh] overflow-hidden'>
            <img src={ Background } alt='background-center' className='object-cover bg-center' />
        </div>
    );
}

export default Hero;