'use strict'

function Todo(todo: {title: string, name: string}){
    return todo.title + ':' + todo.name;
}

function ITodo(todo: _Todo){
    return todo.title + ':' + todo.name;
}


interface _Todo { 
    title: string,
    name: string,
}

console.log(Todo({title: 'vivek', name:'chauhan'}));
console.log(ITodo({title: 'vivek', name:'chauhan'}));

interface JQuery{
    (selector : string) : HTMLElement;
    version: number;
}

var $ =  function(selector){
    
}

