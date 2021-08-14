import DialogPage_reducer from './Redux/DialogsPage-reducer'
import Profile_reducer from './Redux/Profile-reducer'




let State={
        Profile:{
            Posts:[
                {Name:"Dima",post:"Hi",id:"1",like:'1'},
                {Name:"Oleg",post:"Bye",id:"2",like:'5'},
                {Name:"Vasy",post:"Yo",id:"3",like:'22'}
            ],
            Newtext: ''
        },
        DialogsPage:{
            Dialogs:[
                { id:"1",name:"Dima",},
                {id:"7",name:"Vova",},
                {id:"2",name:"Vasy",}
            ],
            Messeges:[
                { id:"1",messege:"Hi",},
                {id:"2",messege:"Bye",},
                {id:"3",messege:"Yo",}
            ],
            NewMessegetext: ''    
        },

    // getProfile(){
    //     return this._Profile;
    // },

    rerenderEntireTree(){
            console.log("State is  changed")
    },
    subscribe(observer){
        this.rerenderEntireTree = observer
    },



    dispatch(action){


        this.Profile=Profile_reducer(this.Profile,action)
        this.DialogsPage=DialogPage_reducer(this.DialogsPage,action)
        this.rerenderEntireTree(State)
        // if (action.type===ADD_POST){
        //     let newpost={
        //         Name:'Gleb',
        //         post:action.text,                          
        //         id:'4',
        //         like:'1',
        //     }
        //     this.Profile.Newtext=''
        //     this.Profile.Posts.push(newpost)
        //     this.rerenderEntireTree(State)
        // }
        // else if(action.type===UPDATE_NEW_POST_TEXT){
        //     this.Profile.Newtext=action.text
        //     this.rerenderEntireTree(State)
        // }
        // else if(action.type===ADD_MESSEGE){
        //     let newpost={                          
        //         id:'4',
        //         messege:action.text,
        //     }
        //     this.DialogsPage.NewMessegetext=''
        //     this.DialogsPage.Messeges.push(newpost)
        //     this.rerenderEntireTree(State)
        // }
        // else if(action.type===UPDATE_NEW_MESSEGE_TEXT){
        //     this.DialogsPage.NewMessegetext=action.text
        //     this.rerenderEntireTree(State)
        // }
    }
    
}
export default State;






