import Head from 'next/head'

import CopyButton from '@/components/CopyBtn'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {/* <Card.Eyebrow decorate>{event}</Card.Eyebrow> */}
      <Card.Description>{description}</Card.Description>
      {cta && (<Card.Cta>{cta}</Card.Cta>)}
    </Card>
  )
}

export default function Technology() {
  return (
    <>
      <Head>
        <title>杂谈</title>
        <meta
          name="一些杂谈"
          content="发表自己的一些观点和感悟，关于自己看的书和电影，我精神世界。"
        />
      </Head>
      <SimpleLayout
        title="杂谈分享"
        intro="发表自己的一些观点和感悟，关于自己看的书和电影，我精神世界。"
      >
        <div className="space-y-20">
          <SpeakingSection title="播客">
            <Appearance
              href="https://www.xiaoyuzhoufm.com/podcast/5e5c52c9418a84a04625e6cc"
              title="《硅谷101》"
              description="《硅谷101》是泓君发起的深度访谈节目，是一档分享当下最新鲜的技术、知识与思想的科技播客。从去年就一直开始收听《硅谷101》，每次都会有特别多的干货，邀请许多重量级嘉宾分享他们独到见解，拉近了我和硅谷的距离。"
            />
            <Appearance
              href="https://www.xiaoyuzhoufm.com/podcast/648b0b641c48983391a63f98"
              title="《42章经》"
              description="《42章经》为大家找寻如沐春风的感觉，聚集了很多优秀有趣，有独到认知且愿意分享的人。每期节目都有非常深度的见解，产出质量很高，推荐大家订阅。"
            />
            <Appearance
              href="https://www.xiaoyuzhoufm.com/podcast/60502e253c92d4f62c2a9577"
              title="《十字路口Crossing》"
              description="「十字路口」是乔布斯对苹果公司的一个比哈，形容它站在科技与人文的十字路口，伟大的产品往往诞生在这里。当下便是“十字路口“，koji和ronghui带来了很多方向和可能性。"
            />
            <Appearance
              href="https://www.xiaoyuzhoufm.com/podcast/5eb7b46b418a84a046799cda"
              title="《卧房撸歌》"
              description="《卧房撸歌》是由掌柜阿峻主持的播客节目，给大家提供一个轻松愉快的听觉体验，还能进一步了解歌手。"
            />
          </SpeakingSection>
          <SpeakingSection title="读书">
            <Appearance
              href="https://book.douban.com/subject/27171481/#review"
              title="《平台革命》"
              description="《平台革命》探讨了平台经济的兴起及其对传统商业模式的影响。分析了平台如何利用技术在多边市场中匹配生产者和消费者，释放隐藏资源并创造新的价值形式。同时让我如何设计产品应用给了很大启发"
            />
            <Appearance
              href="https://carpediemyang.notion.site/d5d9273474f84e2fa146d5d373ecd259?pvs=4"
              title="《强风吹拂》"
              description="《强风吹拂》是让我爱上跑步的一步书，可以让我深切感受跑步过程中给我带来什么样的感觉。是热血的，是给你激情的，这些是我需要的。"
              cta="读后感"
            />
            <Appearance
              title="《饱食穷民》"
              description="《饱食穷民》是一本纪实文学作品，讲述了在泡沫经济时代的日本社会中，人民真实的生活故事。虽然物质上不匮乏，但精神上却极度贫困，陷入穷忙和债务缠身的极限状态。反映了中产阶层消失、贫富两极分化严重的“m型社会”特征。"
            />
          </SpeakingSection>
          <SpeakingSection title="电影">
            <Appearance
              href="https://carpediemyang.notion.site/fd79f0e420b3420db1b19399a77c848f?pvs=4"
              title="《死亡诗社》"
              description="“我不希望度过非生活的生活，生活是如此可爱”"
              cta="观后感"
            />
           <Appearance
              href="https://carpediemyang.notion.site/63ba525469644bb39a042d6dcfcbe6a6?pvs=4"
              title="《芬奇》"
              description="人生的意义是什么？电影从一个对人生什么都不知道的机器人开始探索，到最后开始了解人生意义，从一个开始要受教导的机器人，到最后可以发挥主观能动性的Jeff，可以自己决定自己的人生。"
              cta="观后感"
            />
            <Appearance
              href="https://carpediemyang.notion.site/04bbf6fd0ce14c00aa2a1b339407d7ad?pvs=4"
              title="《蓝色大门》"
              description="大门总是隔离着内外两边的世界，推开大门之后，就变成另一个你了。会不会这是青春的大门，许久之后，在大门前看到了青春的结束，变成了体育老师，妈妈，程序员。但为什么又是蓝色呢？我能看见它么？"
              cta="观后感"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
