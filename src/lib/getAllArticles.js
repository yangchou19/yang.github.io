import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/experience/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*/*.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/experience'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}


export async function getDirArticles(dirname) {
  let dir_mdx = dirname + '/*.mdx'
  let articleFilenames = await glob([dir_mdx], {
    cwd: path.join(process.cwd(), 'src/pages/experience'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}


export async function getAllArticlesByDir() {
  let articleFilenames = await glob(['*/*.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/experience'),
  });

  let articlesByDir = {};

  // 获取每篇文章
  let articles = await Promise.all(articleFilenames.map(async (filename) => {
    let article = await importArticle(filename);
    let { component, ...meta } = article;
    let dirName = path.dirname(filename); // 获取文件的目录名
    if (!articlesByDir[dirName]) {
      articlesByDir[dirName] = [];
    }
    articlesByDir[dirName].push(meta);
    return { ...meta, dirName }; // 在文章对象中附加目录名
  }));

  // 对每个目录下的文章按日期排序
  Object.keys(articlesByDir).forEach((dirName) => {
    articlesByDir[dirName].sort((a, z) => new Date(z.date) - new Date(a.date));
  });
  return articlesByDir;
}