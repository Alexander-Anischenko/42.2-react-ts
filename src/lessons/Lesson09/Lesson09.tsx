import axios from "axios"; // Импортируем библиотеку axios для выполнения HTTP-запросов
import { ChangeEvent, useEffect, useState } from "react"; // Импортируем хуки React
import Counter from "../../components/Counter/Counter"; // Импортируем компонент счетчика
import { Lesson09Container } from "./styles"; // Импортируем стилизованный контейнер
import Input from "../../components/Input/Input"; // Импортируем компонент ввода

function Lesson09() {
    // Состояние для хранения значения поиска
    const [searchValue, setsearchValuet] = useState<string>("");

    // Состояние для хранения полученной шутки
    const [joke, setJoke] = useState<string | undefined>("");

    // Состояние для управления значением счетчика
    const [count, setCount] = useState<number>(1);

    // Обработчик для увеличения значения счетчика
    const onPlusClick = (): void => {
        setCount((prevValue) => prevValue + 2); // Увеличиваем значение на 2
    };

    // Обработчик для уменьшения значения счетчика
    const onMinusClick = (): void => {
        setCount((prevValue) => prevValue - 2); // Уменьшаем значение на 2
    };

    // Обработчик для изменения значения поиска
    const searchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setsearchValuet(event.target.value); // Обновляем состояние `searchValue`
    };

    // useEffect с пустым массивом зависимостей (выполняется при монтировании компонента)
    useEffect(() => {
        console.log("mounting"); // Логируем событие монтирования
    }, []);

    // useEffect с зависимостью от `count` (выполняется при изменении `count`)
    useEffect(() => {
        console.log("update"); // Логируем событие обновления
    }, [count]);

    // useEffect для выполнения кода при размонтировании компонента
    useEffect(() => {
        return () => {
            console.log("unmounting"); // Логируем событие размонтирования
        };
    }, []);

    // Функция для выполнения API-запроса и получения случайной шутки
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://official-joke-api.appspot.com/random_joke" // URL API для получения случайной шутки
            );
            setJoke(response.data.punchline); // Сохраняем текст шутки в состояние `joke`
        } catch (err) {
            console.log(err); // Логируем ошибки в случае неудачного запроса
        }
    };

    // useEffect для выполнения API-запроса при изменении значения `searchValue`
    useEffect(() => {
        fetchData(); // Вызываем функцию для отправки запроса
    }, [searchValue]); // Зависимость: `searchValue`

    // Примеры использования  типа never
    const infinite = (): never => {
        while (true) {
            console.log('This  loop is never ends');
        }
    }

    const throwError = (message: string): never => {
        throw new Error(message)
    }
    //----------------------

    return (
        <Lesson09Container>
            {/* Отображение текста шутки */}
            <div>{joke}</div>

            {/* Поле ввода для ввода значения поиска */}
            <Input
                name="data"
                placeholder="search"
                value={searchValue}
                onChange={searchOnChange}
            />

            {/* Компонент счетчика с кнопками "+" и "-" */}
            <Counter
                countValue={count} // Передаем текущее значение счетчика
                onMinus={onMinusClick} // Передаем обработчик для уменьшения
                onPlus={onPlusClick} // Передаем обработчик для увеличения
            />
        </Lesson09Container>
    );
}

export default Lesson09;

