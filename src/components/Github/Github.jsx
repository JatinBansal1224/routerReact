import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/jatinbansal1224')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    })

    return (
        <>
        <div className="text-color m-4  bg-gray-600 text-white p-4 text-3xl">GitHub</div>
        <img src={data.avatar_url} alt="Git Picture"width={300}/>
        <div className="text-color m-4  bg-gray-400 text-white p-1 text-3xl">{data.name}</div>
        <div className="text-color m-4  bg-gray-400 text-white p-1 text-3xl">{data.bio}</div>
        <div className="text-color m-4  bg-gray-400 text-white p-1 text-3xl">Followers:{data.followers}</div>
        <div className="text-color m-4  bg-gray-400 text-white p-1 text-3xl">Following:{data.following}</div>
        
        </>
    )
}

export default Github;