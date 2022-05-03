import { Grid } from "@mui/material";
import { useEffect, useState } from "react";




 const Villian = ({heroDamage,VilliansNumber,villian}:any) => {

    const LIFE = villian.Health
    
    const [LifeBattle,setLifeBattle] = useState(LIFE);
    const [ProgressBar,setProgress] = useState(LIFE);

    useEffect(() =>{

        if(ProgressBar <= 0){
            VilliansNumber(villian.id);
        }
    },[ProgressBar]);

    const handleDamageVillian = (damage: number) =>{
    

         setProgress((oldProgress: number) => {
            if (oldProgress === 0) {  
              return 0;
            }
            const diff = damage *2;
           
            return Math.min(oldProgress - diff, 100);
          }); 

     
          
          
          
        heroDamage(villian.attack);

    }

    return(
        <Grid item xs={2}>
                        <progress max={LifeBattle} value={ProgressBar}></progress>
                            {ProgressBar}/{LifeBattle}                
                        <img src={villian.img} height={150} width={150}  onClick={() => handleDamageVillian(3)} />
        </Grid>
    );


}

export default Villian;

