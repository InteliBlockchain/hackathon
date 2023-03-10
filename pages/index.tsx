import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Layout } from "@/components/Layout"
import { Cube } from "@/components/Cube"

import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();

    useEffect(() => {
//        setTimeout(() => router.push("/hackathon"), 1000)
    }, [])

    return (
            <Layout>
                <div className="w-screen min-h-screen h-full flex justify-center">
                    <div className="flex flex-col justify-center items-center w-full min-h-full">
                        <p className={"text-2xl"}>Redirecting...</p>
                        <div className="h-2/5">
                            <Cube />
                        </div>
                    </div>
                </div>
            </Layout>
    )
}

export default Home;