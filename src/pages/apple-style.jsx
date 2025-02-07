import Head from 'next/head'
import { motion } from 'framer-motion'

export default function AppleStyle() {
  return (
    <>
      <Head>
        <title>Apple 风格页面</title>
        <meta
          name="description"
          content="一个模仿 Apple.com 风格的展示页面"
        />
      </Head>

      <div className="overflow-hidden">
        {/* 英雄区块 */}
        <section className="relative h-screen flex items-center justify-center bg-black text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">令人惊叹的产品</h1>
            <p className="text-xl text-gray-400">突破性的创新，只为更好的体验</p>
          </motion.div>
        </section>

        {/* 产品展示区 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold">强大性能</h2>
                <p className="text-xl text-gray-600">
                  突破性的性能表现，为你带来前所未有的体验。
                </p>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg"></div>
            </motion.div>
          </div>
        </section>

        {/* 特性展示区 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.2 }}
                  className="p-6 bg-white rounded-2xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">创新特性 {item}</h3>
                  <p className="text-gray-600">
                    探索令人惊叹的新特性，带来更好的使用体验。
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA区域 */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">准备好开始了吗？</h2>
              <p className="text-xl text-gray-400 mb-8">
                立即体验突破性的创新科技。
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                立即购买
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
} 