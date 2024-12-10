import { ChangeEvent, useEffect, useState } from "react"; // Импортируем необходимые хуки React
import axios from "axios"; // Импортируем axios для выполнения HTTP-запросов
import { DogImg, ErrorMessage, Homework009Component, Spinner } from "./styles"; // Импортируем стилизованные компоненты
import Input from "../../components/Input/Input"; // Импортируем пользовательский компонент Input

function Homework009() {
    // Состояние для управления значением поля ввода "search"
    const [search, setSearch] = useState<string>("");

    // Состояние для управления значением поля ввода "note"
    const [note, setNote] = useState<string>("");

    // Состояние для хранения URL полученного изображения собаки
    const [dogImageUrl, setDogImageUrl] = useState<string | undefined>(undefined);

    // Состояние для управления ошибками
    const [error, setError] = useState<any>(undefined);

    // Состояние для отображения индикатора загрузки
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Константа с URL для получения случайного изображения собаки
    const DOG_URL = "https://dog.ceo/api/breeds/image/random";

    // Функция для обработки изменений в поле ввода "search"
    const onSearchCange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Обновляем состояние "search" новым значением
    };

    // Функция для обработки изменений в поле ввода "note"
    const onNoteCange = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value); // Обновляем состояние "note" новым значением
    };

    // Асинхронная функция для получения случайного изображения собаки из API
    const getDogPhoto = async () => {
        setDogImageUrl(undefined); // Сбрасываем текущее изображение
        setError(undefined); // Сбрасываем предыдущие ошибки
        try {
            setIsLoading(true); // Устанавливаем состояние загрузки в true
            const response = await axios.get(DOG_URL); // Выполняем запрос к API
            setDogImageUrl(response.data.message); // Сохраняем URL изображения в состоянии
        } catch (error: any) {
            setError(error); // Сохраняем ошибку, если запрос не удался
        } finally {
            setIsLoading(false); // Устанавливаем состояние загрузки в false
        }
    };

    // Хук useEffect для вызова функции getDogPhoto при изменении значения "search"
    useEffect(() => {
        getDogPhoto(); // Выполняем API-запрос
    }, [search]); // Зависимость: "search"

    return (
        <Homework009Component>
            {/* Поле ввода для "search" */}
            <Input
                name="search"
                placeholder="Введите слово"
                value={search}
                onChange={onSearchCange}
            />

            {/* Поле ввода для "note" */}
            <Input
                name="note"
                placeholder="Введите заметку"
                value={note}
                onChange={onNoteCange}
            />

            {/* Отображение изображения собаки, если оно доступно */}
            {dogImageUrl && <DogImg src={dogImageUrl} alt="random dog" />}

            {/* Отображение сообщения об ошибке, если произошла ошибка */}
            {error && <ErrorMessage>{error.message}</ErrorMessage>}

            {/* Отображение индикатора загрузки во время выполнения запроса */}
            {isLoading && <Spinner></Spinner>}
        </Homework009Component>
    );
}

export default Homework009;

