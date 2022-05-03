import { Box, Button, Fab, Grid, LinearProgress } from "@mui/material";
import { useRouter } from 'next/router'
import StarIcon from '@mui/icons-material/Star';
import { NextPage } from "next";
import { Fragment, useState } from "react";
import {animated, useTransitions} from 'react-spring';
import Villian from "../components/villian_component";
import Stage from "./stage";

const Home = () => {

    const router = useRouter();
    const villians = [1,2,3];


    const handleOnclickLevel = (level: number) => {
        
        router.push({
            pathname: '/stage',
            query: { level: level },
          })
    }

   return (
       <>
       
       {villians.map((x,index) => (
           <Fab color="primary" aria-label="add" style={{width:'100px',height:'100px'}} onClick={() => handleOnclickLevel(x)} key={x}>
                <div>
                    <label style={{paddingRight:'19px'}}>Level {x}</label>
                    <StarIcon />
                </div>
   
            </Fab>
       ))}
         
      
       </>
   )
}

export default Home;