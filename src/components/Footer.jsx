import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">关于我</NavLink>
                <NavLink href="/experience">经历</NavLink>
                <NavLink href="/hobby">爱好</NavLink>
                <NavLink href="/tec">技术</NavLink>
                <NavLink href="/more">更多</NavLink>
              </div>
              {/* 版权所有 */}
              {/* <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} 赵纯想. 版权所有 <Link href='https://beian.miit.gov.cn/#/Integrated/recordQuery' className = ' text-blue-400'>
                沪ICP备19032288号-3
                </Link>
              </p> */}
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
