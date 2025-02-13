import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>技术掌握</title>
        <meta
          name="技术栈"
          content="目前掌握的一些技术栈，仍然需要不断进步学习"
        />
      </Head>
      <SimpleLayout
        title="技术栈"
        intro="目前掌握的一些技术栈，仍然需要不断进步学习。"
      >
        <div className="space-y-20">
          <ToolsSection title="模型">
            <Tool title="Pytorch">
              <Link href={'https://pytorch.org/'} className='cursor-pointer'>https://pytorch.org/</Link>
              <br />
              PyTorch是一个开源的深度学习框架，广泛应用于机器学习和深度学习领域。它基于Python语言，提供了灵活且高效的神经网络构建工具，并支持动态计算图，使得调试和开发更加方便。
              - 在研究生期间，主要使用Pytorch进行深度学习的研究和实验，设计相应的群组推荐模型，并取得了一定效果，发表相关论文。
            </Tool>
            <Tool title="Chromadb">
              <Link href={'https://www.trychroma.com'} className='cursor-pointer'>https://www.trychroma.com</Link>
              <br />
              ChromaDB 是一个开源的嵌入式矢量数据库，主要用于存储和检索由机器学习模型生成的嵌入向量。
              <br />
              - 在公司的项目中结合Chromadb，设计了一套基于向量数据库的检索系统， 进行图片和文字的匹配，文字和文字的匹配等等。
            </Tool>
          </ToolsSection>
          <ToolsSection title="前端">
            <Tool title="Next.js">
              <Link href={'https://nextjs.org/'} className='cursor-pointer'>https://nextjs.org/</Link>
              <br />
              Next.js 是一个基于 React 的服务端渲染（SSR）框架，旨在帮助开发者构建高性能、高可靠性的全栈 Web 应用程序。它扩展了 React 的功能，提供了许多现代化的功能和工具，使得开发人员能够更加轻松地创建符合 SEO 要求的静态网站和网络应用。
              <br />
              目前使用Next.js开发个人网站，在产品中使用Next.js开发。
            </Tool>
            <Tool title="Typescript">
              <Link href={'https://www.typescriptlang.org/'} className='cursor-pointer'>https://www.typescriptlang.org/</Link>
              <br />
              TypeScript 是一种由微软开发的开源编程语言，它是 JavaScript 的超集，添加了静态类型和一些其他语言特性，旨在提高代码的可读性、可维护性和可靠性。TypeScript 引入了可选的静态类型系统，需要在编译时验证起类型，减少运行错误。
            </Tool>
            <Tool title="Tailwind CSS">
              <Link href={'https://tailwindcss.com/'} className='cursor-pointer'>https://tailwindcss.com/</Link>
              <br />
              Tailwind CSS 是一个高度可定制的实用类优先（Utility-First）的 CSS 框架，旨在帮助开发者快速构建现代化的用户界面。它的核心理念是通过提供一系列原子化的、可复用的工具类，使开发者能够直接在 HTML 标记中应用样式，从而减少编写自定义 CSS 的需求
              <br />
              本网站使用Tailwind CSS进行样式设计, 同时在公司产品设计中同样使用tailwind css,非常好用且高效!
            </Tool>
          </ToolsSection>
          <ToolsSection title="后端">
            <Tool title="Fastapi">
              <Link href={'https://fastapi.tiangolo.com/'}>https://fastapi.tiangolo.com/</Link>
              <br />
              FastAPI是一个现代、高性能的Web框架，用于构建API，提供了简洁而强大的接口定义方式。
              <br />
              对于fastapi，目前在公司的项目中使用，对于整体的设计和开发有较熟悉的流程。
            </Tool>
            <Tool title="Java">
              <br />
              对于java的开发一般熟悉，读研期间，关于老师的项目开发主要是使用java进行开发。在完成度和规范性上仍然有较多的提升空间。
            </Tool>
          </ToolsSection>
          <ToolsSection title="数据库">
            <Tool title="PostgreSQL">
              <Link href={'https://www.postgresql.org/'}>https://www.postgresql.org/</Link>
              <br />
              PostgreSQL是一个开源的关系型数据库管理系统，广泛应用于各种业务场景中。它支持多版本并发控制、触发器、规则、全文检索和NoSQL等功能。每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。
            </Tool>
          </ToolsSection>
          <ToolsSection title="个人管理">
            <Tool title="Notion">
              <Link href={'https://carpediemyang.notion.site/Yang-31824db1254648dd884641392516950d'}>👋我的主页👋</Link>
              <br />
              Notion是一个多功能的协作工具，通过notion可以进行团队协作，个人笔记，项目管理等等，方便进行规划。
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
