class User {
    username: string
    inbox: Inbox
    followers: Map<string, User>
    following: Map<string, User>

    constructor(username: string){
        this.username = username.toLowerCase();
        this.inbox = new Inbox()
        this.followers = new Map<string, User>()
        this.following = new Map<string, User>()
    }
//------------follow-----------//
    follow(other: User): void {
        if (other.username == this.username){
            console.log("narcisista não pode seguir você mesmo");
        }
        if (!this.following.has(other.username)){
            this.following.set(other.username, other)
            this.followers.set(other.username, this)
        }
    }
//----------------twittar----------//
    getInbox(): Inbox{
        return 
    }

    sendTweet(tw: Tweet): void{

    }
//------------unfollow--------------//
    unfollow(other: string): void{
        if (this.following.has(other)){
            this.following.get(other)
            this.following.delete(other)
            console.log("deixou de seguir");
        }
        else{
            console.log("Usuario não encontrado");
        }
    }
//--------------like-----------------//
    like(idTw: number): void{

    }
//-------------remover--------------//
    unfllowAll(): void{

    }

    rejectAll(): void{

    }

    toString(): string{
        return `user: ${this.username} \n seguidores: [${[...this.followers.keys()].join(", ")}] seguindo: [${[...this.following.keys()].join(", ")}`
    }
}

class Controller{
    nextTweetId: number
    users: Map<string, User>
    tweets: Map<number, Tweet>

    constructor(){
        this.nextTweetId = 0;
        this.users = new Map<string, User>()
        this.tweets = new Map<number, Tweet>()
    }

    addUser(username: string): void{
       
        let user = new User(username);
        if (this.users.has(username)) {
            console.log("Usuário encontrado");
        }
        if (!this.users.has(username)) {
            this.users.set(username, user);
            console.log("Usuário adicionado");
        }
       
    }
//---------------- Twittar------------------------------//
    createTweet(sender: string, msg: string): Tweet{
        return 
    }

    getUser(username: string): User{
        if (!this.users.has(username)){
            console.log("usuario não encontrado");
        }
        else if(this.users.has(username)){
            return this.users.get(username)
        }
    }

    sendTweet(username: string, msg: string): void{

    }

// ----------------retweet-----------------//

    sendRT(username: string, twId: number, rtMsg: string): void{

    }
//-----------------remover-------------------//

    rmUser(username: string){

    }

    toString(): string{
        return `${[...this.users.values()].join('')}`
    }
}

class Inbox{
    timeline: Map<number, Tweet>;
    myTweets: Map<number, Tweet>;

    constructor(){
        this.myTweets = new Map<number, Tweet>();
        this.timeline = new Map<number, Tweet>();
    }
//------------twittar---------------//
    storeInTimeline(tweet: Tweet): void{

    }

    getTimeline(): Array<Tweet>{
        return 
    }

    toString(): string{
        return 
    }
//------------like-------------//

    getTweet(id: number): Tweet{
        return
    }
//------------unfollow----------//

    rmMsgsFrom(username: string){

    }
//--------------remover-----------//

    storeInMyTweets(tweet: Tweet): void{

    }

    getMyTweets(): Array<Tweet>{
        return 
    }
}

class Tweet {
    id: number;
    username: string;
    msg: string;
    likes: Array<string>;
    rt: Tweet 

    constructor(id: number, username: string, msg: string, rt: Tweet){
        this.id = id;
        this.username = username;
        this.msg = msg;
        this.likes = Array<string>();
        this.rt = rt;
    }

    getId(): number{
        return this.id
    }

    getSender(): string{
        return 
    }

    getMsg(): string{
        return this.msg;
    }

    toString(): string{
        return 
    }
//------------like-----------//

    like(username: string): void{

    }

    getLikes(): Array<string>{
        return this.likes;
    }
//---------------retweet----------//

    setRt(tw: Tweet): void{

    }
//----------------remover-------------//
    deleted: boolean

    setDeleted():void{

    }

    isDeleted(): boolean{
        return 
    }

}

let contr = new Controller;

contr.addUser("eme");
contr.addUser("gato");
contr.addUser("Gabi");

let user1 = contr.getUser("eme")
let user2 = contr.getUser("gato")
let user3 = contr.getUser("Gabi")

user1.follow(user3);
user2.follow(user1);

console.log(contr.toString());
