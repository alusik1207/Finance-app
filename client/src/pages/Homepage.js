import React, {useEffect, useState} from 'react'
import PieChart from "../components/Charts/PieChart/PieChart";
import axios from "axios";
import categoryIcons from "../components/CategoryIcons/CategoryIcons";
import {capitalize} from "lodash/string";



function Homepage() {

    const [value, setValue] = useState([]);
    useEffect(() => {
        axios.get("/api/stat/expenses").then((res) => {
            setValue(res.data.map((item)=>({
                id:capitalize(item.type),
                label:capitalize(item.type),
                value:item.value
            })))
            console.log(res.data)
        })
    }, []);


    return (
        <div style={{width:500, height:500, margin:100}}><PieChart data={value}/></div>
    )
}

export default Homepage