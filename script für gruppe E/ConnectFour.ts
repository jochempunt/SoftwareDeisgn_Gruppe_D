class Game{
    title: string;
    player_One:string;
    player_Two:string;
    win_score:number;
    fieldsize_x:number;
    fieldsize_y:number;
    win:boolean;

    fields: Field[];

    getUser():number{
        return null;
    }
}

class Field{
    pos_x: number;
    pos_y: number;
    occupied:boolean;
}


class Statistics{
    game_Amount:number;
    played_Games:Game[];

    show_Statistics():string{
        return "";
    }
}


class User{
    username: string;

    start_Game():void{}

    create_Game():void{
        function selectEnemy():string{
            return "against ____";
        }      
        function setPlayerColor()
        
        const choice: string = selectEnemy();


        



    }
}


class Registered_User extends User{
    password: string;

    statistic: Statistics;

    use_Statistics():string{
        return "";
    }

}



