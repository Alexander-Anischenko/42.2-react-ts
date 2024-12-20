import { useLocation, useParams } from "react-router-dom";

import { UserInfo, UserPage, UserTitle } from "./styles";
import GoBack from "../../../../components/GoBack/GoBack";

function User() {
    //хук useParams возвращает объект с параметрами из url в данном случае через деструктуризацию
    //Деструктуризация — это способ извлечения значений из массивов или свойств из объектов и их присвоения переменным с помощью упрощенного синтаксиса.
    //Она позволяет "разбирать" сложные структуры данных (например, объекты или массивы) на отдельные переменные
    const {id} = useParams();
    // Хук useLocation из библиотеки react-router-dom ипользуется для получения текущего объекта местоположения (location) в приложении, основанном на React Router. 
    //Этот объект предоставляет информацию о текущем URL и может содержать дополнительные данные, такие как state, переданные через маршруты.
    const location = useLocation();
    console.log(location);
    

    //при загрузке страницы отправляется запрос на сервер для получения данных определенного пользователя
    // Пример данных, пришшедших с сервера для пользователя с id 1
    const data = {
        id: 1,
        name: 'Bob Smith',
        job_title: 'Manager'
    }

    return (
        <UserPage>
            <UserTitle>UserPage</UserTitle>
            <UserInfo>
                Здесь отображается информация о пользователе с ID: {id}
            </UserInfo>
            <UserInfo>{data.name}</UserInfo>
            <UserInfo>{data.job_title}</UserInfo>
            <GoBack/>
        </UserPage>
    );
}

export default User;
