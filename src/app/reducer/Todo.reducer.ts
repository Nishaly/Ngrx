import { TodoActionType } from '../shared/enum/TodoActiontypes.enum';
import {ActionParent} from '../action/Todo.action';
import { Todo }from '../models/Todo';

export const initialState:Todo[]=[
    {title:"todo 1"},
    {title:"todo 2"},
    {title:"todo 3"}
];

export function TodoReducer(state=initialState,action:ActionParent){
    switch(action.type){
        case TodoActionType.Add:{
return [...state,action.payload];
        }
        case TodoActionType.Remove:{
             [...state.splice(action.payload,1)];
             return[...state];
        }
        default:{
            return state;
        }
    }

}