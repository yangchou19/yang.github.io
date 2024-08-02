
import Head from 'next/head'
import Link from 'next/link'
import CopyButton from '@/components/CopyBtn'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { RiNotionFill } from "react-icons/ri";
import {
  GitHubIcon,
  BiliBiliIcon

} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { ProjectList } from '@/pages/hobby'




function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/experience/${article.slug}`}>
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
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            你好，我是扬。
          </h2>
          <SocialLinks />
          <p className="mt-6 text-base font-bold text-zinc-600 dark:text-zinc-400">
            &quot;People with passion can change the world for the better.&quot; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — Steve Jobs
            <br></br>
            &quot;I skate to where the puck is going to be，not where it has been.&quot; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;Wayne Gretzky
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Steve Jobs逝世10周年之际，APPLE官网上映了简短影片记录了乔布斯在苹果期间的时刻，最后提到了Wayne Gretzky这句话。我把这个视频保存，时不时会翻看一下，激励自己。<a href="https://www.bilibili.com/video/BV1jfiTePEd5" className='text-green-500 cursor-pointer '>🔗链接</a>
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            世界加速了，变难了，时间变快了，归根到整个世界的频率提高，接触的信息变化太快。科技的每次革命都把把时间和空间的屏障打破，短期变化的事物是一个个风口，而更多需要关注哪些低频的，长期的事物，那才是未来趋势。
            <br></br>
            科技带来的效率提升，让人们专注度越来越低；我需要的是专注、专注、专注；迎接这次的历史潮流，找到趋势屹立在其中！
            <br></br>
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
        href="https://space.bilibili.com/24926202"
        icon={BiliBiliIcon}
      />
      <SocialLink href="https://carpediemyang.notion.site/Yang-31824db1254648dd884641392516950d"
        icon={RiNotionFill}>
      </SocialLink>
      <CopyButton content="spacecowboyyang" btntitle='私人微信' className="text-emerald-600" />
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
