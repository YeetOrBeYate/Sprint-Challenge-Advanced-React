import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const GetData = (call) => {

    const [players, Setplayers] = useState([]);

    useEffect(()=>{
            axios
            .get(`${call}`)
            .then((res)=>{
                console.log("array",res.data);
                Setplayers(res.data);
            })
    },[])
      
        return [players];
}