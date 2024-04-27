import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'


const Background = ({ playStatus, heroCount }) => {
    if (playStatus === true) {
      return (
        <video className='background fade-in' autoPlay loop muted>
          <source src={video1} type='video/mp4' />
        </video>
      );
    } else {
      // Check heroCount for image selection
      let backgroundImage;
      if (heroCount === 0) {
        backgroundImage = image1;
      } else if (heroCount === 1) {
        backgroundImage = image2;
      } else if (heroCount === 2) {
        backgroundImage = image3;
      } else {
        // Handle unexpected heroCount values
        return null; // Or provide a default background image
      }
  
      return <img src={backgroundImage} alt="" className='background fade-in' />;
    }
  };
  
  export default Background;