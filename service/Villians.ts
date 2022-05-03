import { VillianModel } from "../models/VillianModel";


interface Response {
    Level:number,
    Enemigies: VillianModel[]
}

export class VillianService {

    AllVillians: Response[];

    constructor(){

        this.AllVillians = [
            {
                Level:1,
                Enemigies: [
                    {
                        img:"/goblin.png",
                        Health:100,
                        attack:2,
                        id:1
                    },
                    {
                        img:"/goblin.png",
                        Health:100,
                        attack:3,
                        id:2
                    },
                ]
            },

            {
                Level:2,
                Enemigies: [
                    {
                        img:"/goblin.png",
                        Health:200,
                        attack:4,
                        id:3
                    },
                    {
                        img:"/goblin.png",
                        Health:200,
                        attack:5,
                        id:4
                    },
        
                    {
                        img:"/goblin.png",
                        Health:300,
                        attack:5,
                        id:5
                    },
                ]
            },
            {
                Level:3,
                Enemigies:[
                    {
                        img:"/goblin.png",
                        Health:400,
                        attack:8,
                        id:6
                    },
                ]
            }
        ];
       
    }


    getVilliansLevel(level:number){

        var villians = this.AllVillians.find(x => x.Level == level);
        if(villians == undefined){
            return [];
        }
        return villians.Enemigies;
    }

}