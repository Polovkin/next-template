import Router from 'next/router'
import {MainLayout} from "../../layouts/MainLayout";

export default function About() {
    return (
            <MainLayout title={'About page'}>
                <h1>About</h1>
            </MainLayout>

    );
}
