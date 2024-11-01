"use client";

import { useParams } from "next/navigation"

export default function Uni(){


    let myParams = useParams();

    return <div>
        <h1>{myParams.province} {myParams.city} {myParams.uni}</h1>
        this is product detail page
    </div>
}