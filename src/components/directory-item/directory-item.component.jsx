import './directory-item-styles.scss'
import { useNavigate } from 'react-router-dom'
const CategoryItem = ({category})=>{
    const  {imageUrl, title, route} =category
    const navigate = useNavigate()
    const onNavigateHedler = ()=> {
      navigate(route)
      window.scrollTo(500, 0);
    }
    return (
      <div className="directory-item-container" onClick={onNavigateHedler}>
              <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
              <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>
           </div>
    )
}
export default CategoryItem