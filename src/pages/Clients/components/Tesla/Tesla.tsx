import { AboutCompany, Footer, TeslaPage, Tytle, WikkiLink } from "./styles";
import GoBack from "../../../../components/GoBack/GoBack";

function Tesla() {
    

    return (
        <TeslaPage>
            <Tytle>Tesla</Tytle>
            <AboutCompany>
                Tesla is an American company specializing in the production of
                electric vehicles, as well as energy storage and generation
                solutions. It was founded in 2003 by Elon Musk and other
                investors. Tesla is known for its innovations in the field of
                electric cars and autonomous driving, as well as its efforts to
                popularize sustainable energy sources.
            </AboutCompany>
            <Footer>
            <WikkiLink href="https://en.wikipedia.org/wiki/Tesla,_Inc.">
                More about Tesla
            </WikkiLink>
            <GoBack/>
            </Footer>
        </TeslaPage>
    );
}

export default Tesla;
