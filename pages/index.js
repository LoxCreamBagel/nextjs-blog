import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there, I'm Lox. I'm a full stack engineer but I spend my free time playing FFXIV</p>
        <p>
          "Did you know that the critically acclaimed MMORPG Final Fantasy XIV 
          has a free trial, and includes the entirety of A Realm Reborn AND 
          the award-winning Heavensward expansion up to level 60 with no restrictions on playtime?
          <br/><a href='https://secure.square-enix.com/account/app/svc/ffxivregister?lng=en-us'>Sign up, and enjoy Eorzea today!</a>"
        </p>
      </section>
    </Layout>
  );
}

export default Home;