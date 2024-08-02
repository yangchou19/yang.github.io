import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticlesByDir } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article, ifclick }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        {ifclick
          ? (<Card.Title href={`/experience/${article.slug}`}>
            {article.title}
          </Card.Title>)
          : (<Card.Title >
            {article.title}
          </Card.Title>)
        }
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

function ExperienceList({ name, experiences, ifclick = true }) {
  return (
    <>
      <span className='font-mono text-2xl font-bold text-black dark:text-white'>{name}</span>
      <div className="mt-5 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {experiences.map((article) => (
            <Article key={article.slug} article={article} ifclick={ifclick} />
          ))}
        </div>
      </div>
      <div class="mt-8 mb-12 border-t border-gray-300 my-4"></div>
    </>
  )
}

export default function ArticlesIndex({ allArticlesByDir }) {
  return (
    <>
      <Head>
        <title>在世界的成长和探索之路</title>
        <meta
          name="description"
          content="The path of growth and exploration in the world."
        />
      </Head>
      <SimpleLayout
        title="在世界的成长和探索之路"
        intro="这里是我在这个社会寥寥无几的经历，仅此记录我，点击获取详情💻！"
      >
        <ExperienceList name='工作经历' experiences={allArticlesByDir.work} />
        <ExperienceList name='论文发表' experiences={allArticlesByDir.paper} />
        <ExperienceList name='校园经历' experiences={allArticlesByDir.school} />
        <ExperienceList name='实习经历' experiences={allArticlesByDir.internship} ifclick={false} />
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      // articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
      allArticlesByDir: await getAllArticlesByDir()
    },
  }
}
