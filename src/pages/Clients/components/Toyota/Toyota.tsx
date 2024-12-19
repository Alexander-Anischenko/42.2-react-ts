import { AboutCompany, Footer, ToyotaPage, Tytle, WikkiLink } from "./styles";
import GoBack from "../../../../components/GoBack/GoBack";

function Tesla() {
    

    return (
        <ToyotaPage>
            <Tytle>Toyota</Tytle>
            <AboutCompany>
            Toyota is a Japanese multinational automotive manufacturer, founded in 1937 by Kiichiro Toyoda. It is one of the world’s largest carmakers, known for producing a wide range of vehicles—from reliable, mass-market models to luxury and high-performance offerings. Toyota played a pioneering role in hybrid technology through its Prius line and emphasizes innovative manufacturing techniques, quality control, and continuous improvement, often encapsulated by the “Toyota Production System.”
            </AboutCompany>
            <Footer>
            <WikkiLink href="https://en.wikipedia.org/wiki/Toyota">
                More about Toyota
            </WikkiLink>
            <GoBack/>
            </Footer>
        </ToyotaPage>
    );
}

export default Tesla;