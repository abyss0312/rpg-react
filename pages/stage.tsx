import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Villian from "../components/villian_component";
import { VillianModel } from "../models/VillianModel";
import { VillianService } from "../service/Villians";



const Stage = () => {

    const [LifeBattle,setLife] = useState(100);
    const router = useRouter();
    let result = router.query.hasOwnProperty('level');
    console.log(result);
    const [progressHero, setProgressHero] = useState(100);
    const [Villians,SetVillians] = useState<VillianModel[]>([]);
    const villianService = new VillianService();

    useEffect(() => {

        if(result == true){
          
            SetVillians(() => {
                return villianService.getVilliansLevel(parseInt(router.query.level!.toString()));
            });
        }
       

        return () => {
           SetVillians([]);
        }
    
    },[])

    const EliminateVillian = (died: number) =>{
        const items = Villians.filter(x => x.id != died);

        SetVillians(() => {
            return items;
        });
    }
    
    const handleDamageHero = (damage: number) =>{

        Villians.forEach(x => {
            setProgressHero((oldProgress) => {
                if (oldProgress === 0) {
                  return 0;
                }
              
           
                return Math.min(oldProgress - damage, 100);
              });
        });
       
    }   

    return (
        <>

        {Villians.length > 0 && progressHero > 0 ?
              <Grid container spacing={10} direction="row" justifyContent='flex-end'>
              <Grid item xs={6}>
                      <progress max={LifeBattle} value={progressHero}></progress>
                      {progressHero}/{LifeBattle}
                      <img src="/hero.gif"  height={150} width={150}/>
                                                 
              </Grid>
              <Grid container item xs={6} direction='column' alignItems='flex-end' justifyContent='flex-end'>
                  
                  {Villians.map((v,index) => (
                      <Fragment key={v.id}>
                          <Villian  heroDamage={handleDamageHero} VilliansNumber={EliminateVillian}  villian={v}/>
                      </Fragment>
                  ))}
                  
                  
              </Grid>
          
  
  
             
          </Grid>
          :
            progressHero >0 ? <h1>Win</h1> : <h1>Lose</h1>
        }
       
        </>
        
    );
}

export default Stage;