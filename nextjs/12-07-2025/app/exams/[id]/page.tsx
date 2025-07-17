'use client'
import {useParams} from "next/navigation";

export default function (){
    const params = useParams();
    console.log(params);
    return (
        <>
            <h1>exam detail</h1>
        </>
    )
}