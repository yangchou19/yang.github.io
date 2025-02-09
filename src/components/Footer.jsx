import Link from 'next/link'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const isHomePage = router.pathname === '/home-page'

  return (
    <footer className={`mt-10 ${isHomePage ? ' mt-0 bg-gray-50 dark:bg-black' : ''}`}>
      <Container.Outer>
        <div className={`border-t border-zinc-100 pt-10 pb-12 dark:border-zinc-700/40 ${
          isHomePage ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''
        }`}>
          <Container.Inner>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className={`flex gap-6 text-sm font-medium ${
                isHomePage ? 'text-black/80 dark:text-white/80' : 'text-zinc-800 dark:text-zinc-200'
              }`}>
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
