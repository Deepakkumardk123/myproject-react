import one from "../assets/images/dk (4).jpeg"
import two from "../assets/images/dk (8).jpeg"
import three from "../assets/images/dk6.jpeg"
function Products(){
    return(
        <div class="products">
        
        <div class="box">
          
                    <img src={one} alt="One"></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
        </div>
        
        
        <div class="box">
            <img src={two} alt="villain"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
        </div>
        <div class="box">
            <img src={three} alt="Designs Club"></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>


        
        </div>
    )
}

export default Products