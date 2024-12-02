import { AnimalCardProps } from "./types";
import { AnimalCardWrapper, AnimalImg, AnimalH3, AnimalSpecsContainer } from "./styles.ts";

function AnimalCard({ animalData }: AnimalCardProps) {
    return (
        <AnimalCardWrapper>
            <AnimalH3>{animalData.name}</AnimalH3>
            <AnimalSpecsContainer>{animalData.species}</AnimalSpecsContainer>
            <AnimalImg src={animalData.image} alt="" />
        </AnimalCardWrapper>
    );
}

export default AnimalCard;
