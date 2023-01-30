import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

const Home = ({ allPostsData }) => {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <l1 className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
              <br/>
              <br/>
            </l1>
          ))}
        </ul>
      </section>
    </Layout>
  );
}


export default Home;