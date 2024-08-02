
import Head from 'next/head'
import Link from 'next/link'
import CopyButton from '@/components/CopyBtn'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TikTokIcon,
  GitHubIcon,
  TwitterIcon,
  BiliBiliIcon

} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { ProjectList } from '@/pages/hobby'




function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}



export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          个人网站 - 技术、爱好和经历
        </title>
        <meta
          name="个人网站"
          content="我是有一些爱好的程序员。"
        />
      </Head>
      <Container className="mt-24">
        <div className="max-w-2xl pb-24">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            我的部分
          </h1>

          {/* 联系方式连接 */}
          <SocialLinks />
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            这是我的<CopyButton content="spacecowboyyang" btntitle='私人微信' className="text-emerald-600" />，欢迎一起交流。
            <br></br>
            <br></br>
            我的个人简介。
            <br></br>
            <br></br>
            正在努力变得更好，不淹没在历史的潮流之中。
          </p>
        </div>
        {/* 产品 */}
        <ProjectList />
        {/* <Products /> */}
      </Container>
      {/* 文章 */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}

function SocialLinks() {
  return (
    <div className="mt-6 flex gap-6">
      <SocialLink
        href=""
        aria-label="Follow on Bilibili"
        icon={BiliBiliIcon}
      />
      <SocialLink
        href=""
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        href=""
        aria-label="Follow on Twitter"
        icon={TwitterIcon}
      />
    </div>
  )
}


export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
