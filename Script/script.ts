class unregisteredUser{
    ip: string;

    fillOutQuestionaire(_questionaire: Questionaire): void{}
    
    searchForQuestionaire(_questionaireName: string): void{}

    viewStatistics(): void{}

    signUp(_username: string, _password: string): void{}
}

class registeredUser extends unregisteredUser{
    username: string;
    password: string;


    getQuestionaires(): Questionaire[]{}

    signIn(_username: string, _password:string): void{}

    createQuestionaire(): void{}

}



class Questionaire{
    title: string;
    timespan: TimeRanges;
    questions: Question[];
    isValid: boolean;

    showQuestionaire(): void{}

    addQuestion(_question: Question): void{}

    showStatistics(_valid: boolean): void{}

    finalisedQuestionaire(): void {}


}

class Question{
    text: string;

    getAnswers(): string[]{}

}

    








