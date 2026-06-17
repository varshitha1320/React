import {useEffect} from "react";
function Data() {
    useEffect(
        ()=>{
            console.log("Good Morning");
        },[]
    );
    return (
        <h3>Good Morning</h3>
    );
    
}
export default Data;