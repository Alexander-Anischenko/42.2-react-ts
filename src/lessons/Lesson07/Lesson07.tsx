import { BoxInfo } from "../Lesson07/styles";
import "./styles.css";

function Lesson07() {
    //Generic
    type CustomArrayType<T = string> = (T | undefined)[];

    const colors: CustomArrayType = ["red", "blue"];
    const colorCodes: CustomArrayType<number> = [416541, 1468];

    //enum
    enum Colors {red, Black= 10, Green};

    let currentColor: Colors = Colors.Black
    console.log(Colors);

    enum USER_ROLES {
        ADMIN ='Admin',
        USER = 'User',
        GUEST ='Guest'
    }

    interface userData {
        name: string,
        Age: number,
        role: USER_ROLES
    }

    // enum для цветов светофора 

    enum TRAFIC_LIGHT {
        RED = 'Red',
        YELLOW = 'Yellow',
        GREEN = 'Green'
    }

    const getAction = (light: TRAFIC_LIGHT): string =>{
        switch(light) {
            case TRAFIC_LIGHT.RED:
                return 'Стоп!'
            case TRAFIC_LIGHT.YELLOW:
                return 'Приготовтесь'
            case TRAFIC_LIGHT.GREEN:
                return 'Поехали!'
            default:
                return 'Светофор сломан'
        }
        
    }
    
    console.log(getAction(TRAFIC_LIGHT.RED));

    // Стилизация компонентов
    // InLine стили
    const textStyles = {
        color: 'blue',
        fontSize: '24px'
    }
    return <div className="lesson07-container">
        {/* <div style={{color: 'green'}}>Inline style example 1</div> */}
        <div style={textStyles}>Inline style example 1</div>
        <p style={textStyles}>Inline style example 2</p>
        <BoxInfo primary>Emotion Example</BoxInfo>
        <BoxInfo>Emotion Example</BoxInfo>
    </div>;
}

export default Lesson07;
