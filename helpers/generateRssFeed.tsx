import fs from "fs";
import { Feed } from "feed";
import { getAllPosts } from "../services";

export default function generateRssFeed(allPosts: []) {
    const posts = allPosts;
    const siteURL = 'whitepaper.am';
    const date = new Date();

    const author = {
        name: "Gor Sargsyan",
        email: "gor.sargsyan.frontend@gmail.com",
    };

    // Creating feed
    const feed = new Feed({
        title: "The WhitePaper",
        description: "A silky & refined minimalist magazine about Front-end development.",
        id: siteURL,
        link: siteURL,
        image: `${siteURL}/favicon.ico`,
        favicon: `${siteURL}/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, Gor Sargsyan`,
        updated: date,
        generator: "Feed for Node.js",
        feedLinks: {
            rss2: `${siteURL}/rss/feed.xml`,  // xml format
            json: `${siteURL}/rss/feed.json`,// json fromat
        },
        author,
    });

    // Adding blogs to the rss feed
    posts.forEach(({ node: { slug, title, excerp, createdAt } }) => {
        const url = `${siteURL}/post/${slug}`;
        feed.addItem({
            title: title,
            id: url,
            link: url,
            description: excerp,
            content: excerp,
            author: [author],
            contributor: [author],
            date: new Date(createdAt),
        });
    });

    // generating the xml and json for rss
    fs.mkdirSync("./public/rss", { recursive: true });
    fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
    fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
