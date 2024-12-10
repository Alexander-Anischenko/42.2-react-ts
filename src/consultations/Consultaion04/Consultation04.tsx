import ProductItem from "../../components/ProductItem/ProductItem";
import { Consultation04Container } from "./styles"

function Consultation04 (){
    // пример readonly
    interface User {
        readonly name: string;
        age: number;
    }

    const user: User = {name: 'Tom', age: 23};

    user.age = 24;
    // невозможно изменить значение из-за флага readonly (используется редко)
    //user.name = 'Bob';

    // пример readonly в массивах
    //const colors: readonly string[] = ['red', 'black'];
    // невозможно изменить значение из-за флага readonly (используется редко)
    //colors[0] = 'green';

    // типизация unknown невозможно обрабатывать данные в случае any ошибка просматриваться не будет, но без строгой типизации будет ошибка в браузере
    let userName: unknown;
    userName = 'Mary';
    userName = undefined;
    userName = 'Olga';

    // console.log(userName.toUpperCase());
    //unknown требует проверки на соответствие типу
    if(typeof userName === 'string') {
        console.log(userName.toUpperCase());
    }
    

    return <Consultation04Container>
        <ProductItem productName='Milk' productImg={""}/>
    </Consultation04Container>

}

export default Consultation04