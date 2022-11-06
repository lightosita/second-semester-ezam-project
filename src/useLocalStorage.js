import {useState} from 'react'

function getsavedValue (key,initilValue){
    
}

export default function useLocalStorage (initilValue){
const [calue,setValue] = useState(initilValue) 

    return [value,setValue]
}