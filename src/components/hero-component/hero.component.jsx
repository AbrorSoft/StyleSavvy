import './hero.styles.scss'
import { useNavigate } from 'react-router-dom'
import Video from '../../assets/3ee934ee-74e8-432a-9624-b57ef08c6b99.mp4'
import Button from "../../components/button/button.component";
const HeroSection = ()=>{
    const navigate = useNavigate()
    const goToShopHandler = ()=>{
        navigate('/shop')
    }
    return(
     <div className='hero-container' >
            <video className='video'  autoPlay muted loop="loop"  src={Video}/>
            <div style={{display: 'flex', flexDirection: "column", alignItems:'center'}}>
              <h3>Outfit Ideas, Stylist Tips & More</h3>
              <Button onClick={goToShopHandler}>Check Out </Button>
           </div>
      </div>

    )
}
export default HeroSection