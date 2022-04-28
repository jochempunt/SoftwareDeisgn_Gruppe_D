"use strict";
class unregisteredUser {
    ip;
    fillOutQuestionaire(_questionaire) { }
    searchForQuestionaire(_questionaireName) { }
    viewStatistics() { }
    signUp(_username, _password) { }
}
class registeredUser extends unregisteredUser {
    username;
    password;
    getQuestionaires() { }
    signIn(_username, _password) { }
    createQuestionaire() { }
}
class Questionaire {
    title;
    timespan;
    questions;
    isValid;
    showQuestionaire() { }
    addQuestion(_question) { }
    showStatistics(_valid) { }
    finalisedQuestionaire() { }
}
class Question {
    text;
    getAnswers() { }
}
//# sourceMappingURL=script.js.map