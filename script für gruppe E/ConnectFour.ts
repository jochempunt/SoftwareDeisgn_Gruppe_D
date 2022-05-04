class Game {
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

class Field {
    pos_x: number;
    pos_y: number;
    occupied:boolean;
}

class Statistics {
    game_Amount:number;
    played_Games:Game[];

    show_Statistics():string{
        return "";
    }
}


class User {
    username: string;

    chooseFieldPoint(_field: Field): void {}

    start_Game():void{}

    create_Game():void{

        let game: Game = new Game();
        let ownPlayer: Player = new Player();
        let enemyPlayer: Player = new Player();
        
        selectEnemy();

        setPlayerColor(ownPlayer);
        setPlayerColor(enemyPlayer);
        
        let gameSizeX: number = 0;
        let gameSizeY: number = 0;

        while (gameSizeX < 3 || gameSizeY < 3) {
            determineFieldSize();
        }
        setFieldSize(gameSizeX, gameSizeY);

        let winningScore: number;
        while (winningScore < gameSizeX || winningScore < gameSizeY){
            determineScore();
        }
        
        setScore(winningScore);

        let firstPoint: Field = new Field();
        this.chooseFieldPoint(firstPoint);

        function determineScore(): void {}
        
        function setScore(_winScore: number): void {
            game.win_score = winningScore;
        }

        function determineFieldSize(): void {}
        
        function setFieldSize(_sizeX: number, _sizeY: number): void {
            game.fieldsize_x = _sizeX;
            game.fieldsize_y = _sizeY;
        }
        
        function setPlayerColor(_player: Player): void {
            let colorChoice: string;
            _player.color = colorChoice;
        }
        
        function selectEnemy(): void {
            let buttonChoice: string;
            enemyPlayer.playerType = buttonChoice;
        }      
    }
}

class Player {
    color: string;
    playerType: string;
}

class Registered_User extends User{
    password: string;

    statistic: Statistics;

    use_Statistics():string{
        return "";
    }

}



