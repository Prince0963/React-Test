import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';



export const ApiFetch = () => {

    const [data , setdata] = useState([]);

    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products")
        .then(y => {
            setdata(y.data);
        })
    })
  return (
    <div>
        {
            data.map((value , index) => {
                return (    <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={value.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        {value.price}
                      </Typography>
                    </CardContent>
                  </Card>)
            })
        }
    </div>
  )
}
