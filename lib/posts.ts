import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { stringify } from "querystring";
import { LANGUAGES } from "@/constants/languageTypes";

const postsDirectory = path.join(process.cwd(), "posts");
const languages = [LANGUAGES.ENGLISH, LANGUAGES.SPANISH];

export function getSortedPostsData() {
  let allPostsData = {};
  languages.forEach((language) => {
    const filePath = `${postsDirectory}/${language}`;
    const fileNames = fs.readdirSync(filePath);
    const postData = fileNames
      .map((fileName) => {
        return getPostMetaData(filePath, fileName);
      })
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });

    allPostsData = { ...allPostsData, [language]: postData };
  });
  return allPostsData;
}

const getPostMetaData = (filePath: string, fileName: string) => {
  const id = fileName.replace(/\.md$/, "");

  const fullPath = path.join(filePath, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...(matterResult.data as { date: string; title: string }),
  };
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
