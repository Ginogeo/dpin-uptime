// "use client";
// import { useAuth } from "@clerk/nextjs";
// import { API_BACKEND } from "@/config";
// import axios from "axios";
// import { useState, useEffect } from "react";
// interface Website {
//     id: string;
//     url: string;
//     ticks: {
//         id: string;
//         createdAt: string;
//         status: string;
//         latency: number;
//     }
    
// }


// export function useWebsites() {
//     const {getToken} = useAuth();
//     const [websites, setWebsites] = useState<Website[]>([]);
//     async function refreshWebsites(){
//         const auth = await getToken();
//     //    const response= await axios.get(`${API_BACKEND}/api/v1/websites`, {
//         const response= await axios.get(`${API_BACKEND}/api/v1/websites`, {
//             headers:{
//                 Authorization: auth,
//             }
//     }, );
//     console.log(response.data);
//     setWebsites(response.data.websites);
//     }

//     useEffect(() => {
//         refreshWebsites();
//         const interval = setInterval(refreshWebsites, 60000);
//         return () => clearInterval(interval);
//     }, []);
//     return {websites, refreshWebsites};
// }
"use client";
import { API_BACKEND } from "@/config";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

interface Website {
    id: string;
    url: string;
    ticks: {
        id: string;
        createdAt: string;
        status: string;
        latency: number;
    }[];
}

export function useWebsites() {
    const { getToken } = useAuth();
    const [websites, setWebsites] = useState<Website[]>([]);

    async function refreshWebsites() {    
        const token = await getToken();
        const response = await axios.get(`${API_BACKEND}/api/v1/websites`, {
            headers: {
                Authorization: token,
            },
        });

        setWebsites(response.data.websites);
    }

    useEffect(() => {
        refreshWebsites();

        const interval = setInterval(() => {
            refreshWebsites();
        }, 1000 * 60 * 1);

        return () => clearInterval(interval);
    }, []);

    return { websites, refreshWebsites };

}