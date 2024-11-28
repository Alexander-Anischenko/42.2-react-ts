import { AnimalCardProps } from "./types";
import { AnimalCardWrapper, AnimalImg } from "./styles.ts";

function AnimalCard({ animalData }: AnimalCardProps) {
    return (
        <AnimalCardWrapper>
            <h3>{animalData.name}</h3>
            <div>{animalData.species}</div>
            <AnimalImg src={animalData.image} alt="" />
        </AnimalCardWrapper>
    );
}

export default AnimalCard;
