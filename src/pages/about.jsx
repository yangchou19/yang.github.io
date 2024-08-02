import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { RiNotionFill } from "react-icons/ri";
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TikTokIcon,
  GitHubIcon,
  TwitterIcon,
  BiliBiliIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait1.jpg'

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
          content="我对创造感兴趣。而不局限于小说、软件，和剧本。创造的激情是我作为人生的意义所一直保护的东西， 尽管它曾屡受打击，但总能从我乐天派的心地上重新抽丝剥茧。"
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
                
              </p>
              <p>
               
              </p>
              <p>
                跨越，跨越，跨越现有的东西。痛击我们认知的疆界。
              </p>
              <p>
                这是我即将发起纯想理心社的初衷。和你们一样期待它的快速到来。
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
