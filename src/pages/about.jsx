import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { RiNotionFill } from "react-icons/ri";
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  BiliBiliIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait2.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>关于我 - </title>
        <meta
          name="关于我"
          content=""
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              关于我
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                人生需要不断的认识自己、看清自己、思考自己。
              </p>
              <p>
                我是扬，是一个很普普通通的人，有一些爱好的程序员，爱记录和思考这个世界；时常会对抗这个信息过载的世界，让自己保持专注；不喜欢这个世界表面，努力的看到那些本质；不想夸大其词，保持实事求是，谦虚踏实。没有特别过人的长处，至今走着大部分人走的道路，但希望不止于此，我热爱冒险与挑战，喜欢与众不同，而不是随大流。虽然还没有特别大的成就，但在自己人生道路上踏实的做好自己事情。
              </p>
              <p>
                当今的世界，每天变化太快，充斥着泡沫、浮躁、利益，事情快速变化让世界逐渐变成草台班子，面对如此的世界，实事求是是需要极大勇气的。在看清世界真相之后，仍然保持当初的真挚是不朽的。
              </p>
              <p>
                对我来说，在这个频率变化的世界，我所需要保持三种东西：<span className='font-bold'>热情、踏实、生命力</span>。热情让我能有动力去做一件事，踏实是让我把这件事做好；生命力是每个人都必须要有的，是如何的爱自己，只有爱自己后才能分享和传播，展现你的生命。
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink className='pt-3' href="https://carpediemyang.notion.site/Yang-31824db1254648dd884641392516950d" icon={RiNotionFill}>
                Notion主页
              </SocialLink>
              <SocialLink className='pt-3' href="https://space.bilibili.com/24926202" icon={BiliBiliIcon}>
                Bilibili主页
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="pt-3"
              >
                1178574011@qq.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
