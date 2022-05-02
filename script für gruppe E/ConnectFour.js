"use strict";
class Game {
    title;
    player_One;
    player_Two;
    win_score;
    fieldsize_x;
    fieldsize_y;
    win;
    fields;
    getUser() {
        return null;
    }
}
class Field {
    pos_x;
    pos_y;
    occupied;
}
class Statistics {
    game_Amount;
    played_Games;
    show_Statistics() {
        return "";
    }
}
class User {
    username;
    start_Game() { }
    create_Game() {
        function selectEnemy() {
            return "against ____";
        }
        const choice = selectEnemy();
    }
}
class Registered_User extends User {
    password;
    statistic;
    use_Statistics() {
        return "";
    }
}
//# sourceMappingURL=ConnectFour.js.map