
function Card({image, title}){
    return(
        <div className="card">
            <img className= "card-image" src ={image} alt="title" />
            <h2 className="card-title">{title}</h2>


        </div>
        
    );

}
export default Card