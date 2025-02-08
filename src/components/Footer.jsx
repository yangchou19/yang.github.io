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
    <footer className='mt-10'>
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-12 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">关于我</NavLink>
                <NavLink href="/experience">经历</NavLink>
                <NavLink href="/hobby">爱好</NavLink>
                <NavLink href="/tec">技术</NavLink>
                <NavLink href="/more">更多</NavLink>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
