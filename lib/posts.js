import * as fs from 'fs'
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const mdFileExtension = /\.md$/;

/**
 * Gets Post metadata sorted by date - descending
 * @returns data shaped like { id, date, title, ... } 
 */
export const getSortedPostsData = () => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(mdFileExtension, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => (a.date < b.date) ? 1 : -1);
};

/**
 * Gets Post ids
 * @returns list of Post ids
 */
export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    /**
     * format must be { params: { id: string } } 
     * note: id matches [id].js
     */
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(mdFileExtension, '')
            }
        }
    });
};


export const getPostData = (id) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
        id,
        ...matterResult.data
    };
};