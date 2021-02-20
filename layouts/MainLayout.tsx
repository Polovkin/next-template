import Link from "next/link";
import Head from "next/head";
import nav from '../styles/nav.module.scss'

export function MainLayout({children,title='Next app'}) {
    return (
            <>
                <Head>
                    <title>{title} | Next course</title>
                </Head>
                <nav className={nav.navigation}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </nav>
                <main>
                    {children}
                </main>

            </>
    );
}


