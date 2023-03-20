import React from 'react'
import './app.scss'
import NestedRouter from './components/NestedRouter'
import {BrowserRouter} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navigation from './components/Navigation'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
// import CategoryIcons from "./components/CategoryIcons/CategoryIcons";
// import * as categories from "./constans/ExpensesCategories";

const menu = [
    {
        title: 'Homepage',
        component: Homepage,
        path: "/"
    },
    {
        title: 'Incomes',
        component: Incomes,
        path: "/incomes"
    },
    {
        title: 'Expenses',
        component: Expenses,
        path: "/expenses"
    }
]

function App() {
    return (
        <BrowserRouter>


            <div><Navigation menu={menu}/></div>
            <div><NestedRouter menu={menu}/></div>
        </BrowserRouter>
    )
}

export default App