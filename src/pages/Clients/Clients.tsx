
import { ClientsLink, ClientsPages } from "./style"

function Clients() {
    return <ClientsPages>
        <ClientsLink to='/clients/tesla'>Tesla
        
        </ClientsLink>
        <ClientsLink to='toyota'>Toyota
        </ClientsLink>
        <ClientsLink to='volkswagen'>Volkswagen
        </ClientsLink>
    </ClientsPages>
}

export default Clients