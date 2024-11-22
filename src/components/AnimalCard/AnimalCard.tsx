import { AnimalCardProps } from "./types";
import "./styles.css";

/* interface Animal {
        name: string
        species: string
        role: string
        skills: string[]
        image: string
};

interface AnimalCardProps {
    animalData: Animal
}; */

function AnimalCard({animalData}: AnimalCardProps) {
    return (
        <div className="animal-card-wrapper">
            <h3>{animalData.name}</h3>
            <div>{animalData.species}</div>
            <img src={animalData.image} alt="" />
        </div>
    );
}

export default AnimalCard;
