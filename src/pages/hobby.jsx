import Image from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
// logo
import shootlogo from '@/images/photos/shoot.jpeg'
import basketballlogo from '@/images/photos/basketball.jpeg'
import xiatianlogo from '@/images/photos/xiatian.jpeg'
import skatelogo from '@/images/photos/skate.png'
import gymlogo from '@/images/photos/gym.jpeg'
import guitarlogo from '@/images/photos/guitar.png'

const projects = [
  {
    name: '摄影',
    description:
      '摄影是作为记录生活的方式，同时表达关系和情感。从本科开始接触到现在，它让我更加关注生活中忽略的细节，让我思考、平静和记录当下。',
    link: { href: 'https://carpediemyang.notion.site/Yang-31824db1254648dd884641392516950d', label: '摄影作品记录' },
    logo: shootlogo,
  },
  {
    name: '篮球',
    description:
      '篮球是我接触最久的运动，小学开始接受训练至今，加入过院队征战比赛，喜欢通过传切的配合后将篮球投进篮筐的过程。',
    logo: basketballlogo,
  },
  {
    name: '夏天',
    description:
      '夏天是一只边牧，今年两岁了，头上有个聪明豆，喜欢接球、追光、咬拖把、睡觉；性格上安静、胆小谨慎、有一丢懒。有好多小聪明，会和家里人斗智斗勇，带来了很多快乐。',
    logo: xiatianlogo,
  },
  {
    name: '滑雪',
    description:
      '2024年3月，临近毕业时发现还有学生套餐，去北大湖滑雪，第一次比较长时间体验，北方雪场真的好大，从此喜欢上滑雪，也想着要尝试一些新事物。',
    link: { href: 'https://carpediemyang.notion.site/6e9aaf154b8d48e0a7351c0933733303', label: '滑雪记录' },
    logo: skatelogo,
  },
  {
    name:'健身',
    description:
      '健身是本科开始接触，断断续续坚持很久，虽然没有十分傲人的身材；但体会到一次次击碎自己后又顽强站起来的感觉。其作为平衡工作和生活的方式，让我保持身体健康，短暂离开网络，沉浸在每一个动作中。',
    link: { href: 'https://carpediemyang.notion.site/84bc500e95c24749b27a0b1123d490d3?pvs=4', label: '健身动作' },
    logo: gymlogo,
  },
  {
    name: '吉他',
    description:
    '高中的时候开始接触吉他，断断续续学了一段时间，但好像发现自己在弹唱上没啥天赋😂，五音不太全。在演奏的过程中，让我心平气和，找到节奏感，而不是急于完成。',
    logo: guitarlogo,
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>爱好 - 喜欢的事物</title>
        <meta
          name="我喜欢的事情"
          content="探索世界路上，发现的喜欢。"
        />
      </Head>
      <SimpleLayout
        title="探索世界路上，发现的喜欢"
        intro="永远保持一颗积极热忱的心，对世界充满好奇，尝试新的事物。"
      >
        <ProjectList />
      </SimpleLayout>
    </>
  )
}


export function ProjectList() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <Card as="li" key={project.name}>
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              src={project.logo}
              alt=""
              className="h-20 w-20 object-cover rounded-lg"
              unoptimized
            />
          </div>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            {project.link
              ? (<Card.Link href={project.link.href}>{project.name}</Card.Link>)
              : (<Card.Link>{project.name}</Card.Link>)
            }
          </h2>
          <Card.Description>{project.description}</Card.Description>
          {
            project.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <Link href={project.link.href} className="ml-2" target="_blank">{project.link.label}</Link>
              </p>
            )
          }
        </Card>
      ))}
    </ul>
  )
}