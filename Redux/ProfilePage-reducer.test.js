import Profile_reducer, {AddPostActionCreator} from "./ProfilePage-reducer";
import React from "react";


test('length post should be ++ ', () => {
    let action=AddPostActionCreator("hello")

    let state={
        posts:[
            {Name:"Dima",post:"Hi",id:"1",like:'1'},
            {Name:"Dima",post:"Hi",id:"1",like:'1'},
            {Name:"Dima",post:"Hi",id:"1",like:'1'},
            {Name:"Dima",post:"Hi",id:"1",like:'1'},
            {Name:"Dima",post:"Hi",id:"1",like:'1'},
        ]
    }

    let newState= Profile_reducer(state,action)
    expect(newState.posts[2].post).toBe('hello')
});

