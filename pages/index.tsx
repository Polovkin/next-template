import Link from "next/link";
import Head from 'next/head'
import {MainLayout} from "../layouts/MainLayout";

export default function Index() {
    return (
            <MainLayout title={'Home page'}>

                <h1>Hello next.js</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </MainLayout>
    )
}
