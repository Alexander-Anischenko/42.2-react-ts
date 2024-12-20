import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";

import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import Tesla from "./pages/Clients/components/Tesla/Tesla";
import Toyota from "./pages/Clients/components/Toyota/Toyota";
import Volkswagen from "./pages/Clients/components/Volkswagen/Volkswagen";



//lessons
//import Lesson06 from './lessons/Lesson06/Lesson06';
//import Lesson07 from './lessons/Lesson07/Lesson07';
//import Lesson08 from './lessons/Lesson08/Lesson08';
//import Lesson09 from "./lessons/Lesson09/Lesson09";
//import Lesson10 from "./lessons/Lesson10/Lesson10";
//import Lesson11 from "./lessons/Lesson11";
import Lesson13 from "./lessons/Lesson13/Lesson13";
import Users from "./pages/Users/Users";
import User from "./pages/Users/components/User/User";



//homeworks
/* import Homework07 from './homeworks/Homework07/Homework07'; */
/* import Homework08 from "./homeworks/Homework08/Homework08"; */
//import Homework009 from "./homeworks/Homework009/Homework009";
//import HomeWork09 from "./homeworks/HomeWork09/HomeWork09";
//import HomeWork11 from "./homeworks/HomeWork11/HomeWork11";


//consultations
//import Consultation04 from "./consultations/Consultaion04/Consultation04";
//import Consultation05 from "./consultations/Consultation05/Consultation05";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            {<Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    {/* Пример консультации 7. В url добавляется параметр id(переменная) - синтаксис :id */}
                    <Route path="/users/:id" element={<User/>}/>
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/clients/tesla" element={<Tesla />} />
                    <Route path="/clients/toyota" element={<Toyota />} />
                    <Route path="/clients/volkswagen" element={<Volkswagen />} />
                    <Route path="/lesson13" element={<Lesson13 />} />
                    <Route path='*' element='Page not found' />
                </Routes>
            </Layout>}
            {/* <Lesson06/> */}
            {/* <Lesson07/> */}
            {/* <Consultation04/> */}
            {/* <Consultation05/> */}
            {/* <Homework07/> */}
            {/* <Lesson08/> */}
            {/* <Lesson09/> */}
            {/* /<HomeWork09/> */}
            {/* <Lesson10/> */}
            {/* <Lesson11/> */}
            {/* <HomeWork11/> */}

        </BrowserRouter>
    );
}

export default App;
