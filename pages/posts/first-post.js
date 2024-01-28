import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post</title>                
            </Head>
            <h1>This is my first post boyyyy</h1>
            <h3><Link href="/">You want to go back home</Link></h3>
            
        </Layout>
    )
}