import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import { Title, UsersPage } from "./styles";

function Users() {
    //хук useNavigate возвращает функцию, при вызове которой нас может перенаправить на указанный url
    const navigate = useNavigate();

    const goToAboutPage = () => {
        navigate("/about");
    };

    //пример useEffect при размонтировании компонента Users
    useEffect(()=>{
        return()=>{
            console.log('Component Users unmounting');
            
        }
    }, [])

    //При загрузке страници Users отправляется запрос на сервер, который присылает данные в виде массива объектов
    // пример данных сервера
    const usersData =[
        {id: 1, userName: 'User1'},
        {id: 2, userName: 'User2'},
        {id: 3, userName: 'User3'}
    ]

    // создаем ссылки на страницы пользователей с помощью map
    // map для генерации элементов:
    //Метод map проходит по массиву usersData, извлекает id и userName и создаёт компонент <Link> для каждого пользователя.
    const usersLinks = usersData.map((userData)=>{

        return <Link to={`/users/${userData.id}`}>{userData.userName}</Link>
        //state — это объект, который можно передать в компонент <Link> из библиотеки react-router-dom.
        //Эти данные передаются скрытно, не отображаясь в адресной строке браузера.
        //На целевой странице эти данные можно получить через объект location, который предоставляется React Router. Доступ к ним осуществляется через location.state
        //return <Link to={`/users/${userData.id}`} state={{userId: 1}}>{userData.userName}</Link>
    })

    return (
        <UsersPage>
           {/*  Content Users page */}
            <Title>Select user</Title>
            {/* Создаём ссылки, которые буду переносить нас на соответствующую страницу с данными пользователя, в зависимости от id */}
            {/* <Link to='/users/1'>User 1</Link>
            <Link to='/users/2'>User 2</Link>
            <Link to='/users/3'>User 3</Link> */}
            {/* переменная, которая хранит массив ссылок<Link></Link> */}
            {usersLinks}
            <Button buttonName="Go to About Page" onClick={goToAboutPage} />
        </UsersPage>
    );
}

export default Users;
