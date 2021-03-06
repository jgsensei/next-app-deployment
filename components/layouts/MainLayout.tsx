import style from "./MainLayout.module.css";
import  Head  from 'next/head';
import { NavbBar } from '../NavBar';

type TMainLayoutProps = {
  children: React.ReactNode;
}

export const MainLayout: React.FC<TMainLayoutProps>= ({children}) => {
  return (
    <div className={style.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavbBar />


    <main className={style.main}>
      { children }
    </main>
  </div>
  )
}
