

import "./card.styles.css";

const Card = ({ monster }) => {
 const {id, name, email} = monster;

        return(

            <div className="card-container" key={id}>
                    <img alt="monster" 
                         src={`https://robohash.org/${id}?set=set2&size=300x300`} 
                         />
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        )
}

export default Card;