import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

// The dynamics path-page file must contain
// 1. A React component to render the page
// 2. getStaticPaths which returns an array of possible values
// 3. getStaticProps which fetches necessary data

const Post = ({ postData }) => {
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
    );
};

// Called 1st
export const getStaticPaths = () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
};

// Called 2nd with result from getStaticPaths
export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
};

export default Post;