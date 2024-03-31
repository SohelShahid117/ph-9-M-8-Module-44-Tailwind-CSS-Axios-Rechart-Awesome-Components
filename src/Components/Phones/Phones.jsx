import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { Audio } from 'react-loader-spinner'

// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//https://recharts.org/en-US/examples----------rechart react
//https://axios-http.com/docs/intro-----------axios js
//https://openapi.programming-hero.com/api/phones?search=iphone----PH github----phone bracket
//https://github.com/wojtekmaj/react-calendar
//https://recharts.org/en-US/examples/TinyBarChart

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const Phones = () => {
    const [phones,setPhones] = useState([]);
    const [loading,setLoading] = useState(true)

    const [value, onChange] = useState(new Date());

    useEffect(()=>{
        const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
        // fetch(url)
        //     .then((res)=>res.json())
        //     // .then((data)=>console.log(data.data))
        //     .then((data)=>setPhones(data.data))

      axios.get(url)
        // .then((data)=>console.log(data))
        // .then((data)=>console.log(data.data))
        // .then((data)=>console.log(data.data.data))
        // .then((data)=>setPhones(data.data.data))

        .then((data)=>{
            const phoneData = data.data.data;
            // const phoneWithFakeData = phoneData.map((p)=>{
            //     const name = p.phone_name;
            //     const price = p.slug.split('-')[1];
            //     // console.log(price)
            // })
            const phoneWithFakeData = phoneData.map((p)=>{
                // console.log(p.phone_name)
                const obj = {
                    name : p.phone_name,
                    price : p.slug.split('-')[1]
                // console.log(price)
                }
                return obj;
                // console.log(obj.name)
            })
            // console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData);
            setLoading(false)
        })

    },
    [])

  return (
    <div>
        <h2 className='text-5xl'>Phones:{phones.length}</h2>

        {loading &&  <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
        />}


            <BarChart width={600} height={400} data={phones}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
    </div>
    
  )
}

Phones.propTypes = {

}

export default Phones
