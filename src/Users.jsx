import axios from 'axios'
import React, { useEffect, useState } from "react";

export const Users = () => {

    const [data, setData] = useState([{ id: 'tttt' ,email:'',first_name:'',last_name:'',avatar:''}])
    //const [data1, setData1] = useState([{ email: 'tttt' }])

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                //alert('success')
                console.log(res.data)
                setData(res?.data?.data)
                //setData1(res?.data?.data)
            })
            .catch(_err => {
                alert('Something went wrong')
            })
    }, [])

    return (
        <div >
            List of Data:
            {
                data && data.length > 0 && data.map((item, index) => {
                    return (
                        <div class="alert alert-primary" role="alert">
                        <p key={index}>
                        Id :{item.id} <br></br>
                        Email: {item.email}<br></br>
                        First Name :{item.first_name} <br></br>
                        Last Name: {item.last_name}<br></br>
                        Avatar: {item.avatar}</p>
                        </div>
                    );
                })
            }
 
        </div>
    )
}


