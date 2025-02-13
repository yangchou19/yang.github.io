import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AppleHeader from '@/components/AppleHeader'
import jobsImage from '@/images/jobs.png'
import portraitImage from '@/images/japan.jpeg' 
import { useState } from 'react'
import { VideoModal } from '@/components/Modal'
import { TypeAnimation } from 'react-type-animation'

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta
          name="description"
          content=""
        />
      </Head>

      <AppleHeader />
      <div className="overflow-hidden">

        <section className="relative h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:flex-1"
            >
              <Image
                src={jobsImage}
                alt="Steve Jobs"
                width={500}
                height={300}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left md:flex-1 md:self-start"
            >
              <h1 className="text-5xl font-bold mb-4">People with passion can change the world for the better!</h1>
              <p className="mt-6 text-xl text-gray-400">有热情的人才能使这个世界变得更好！</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-4 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start
              </button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-black dark:text-white">
                  你好，我是扬。
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-800 dark:text-gray-400 whitespace-pre-wrap">
                    <TypeAnimation
                      sequence={[
                        '世界加速了，变难了，时间变快了，归根到整个世界的频率提高，接触的信息变化太快。\n\n',
                        1000,
                        '世界加速了，变难了，时间变快了，归根到整个世界的频率提高，接触的信息变化太快。\n\n科技的每次革命都把时间和空间的屏障打破，短期变化的事物是一个个风口，而更多需要关注哪些低频的，长期的事物，那才是未来趋势。\n\n',
                        1000,
                        '世界加速了，变难了，时间变快了，归根到整个世界的频率提高，接触的信息变化太快。\n\n科技的每次革命都把时间和空间的屏障打破，短期变化的事物是一个个风口，而更多需要关注哪些低频的，长期的事物，那才是未来趋势。\n\n科技带来的效率提升，让人们专注度越来越低；我需要的是专注；迎接这次的历史潮流，找到趋势屹立在其中！',
                      ]}
                      wrapper="span"
                      speed={20}
                      repeat={0}
                      cursor={false}
                    />
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg">
                <Image
                  src={portraitImage}
                  alt="扬"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-black">
        <h2 className="text-4xl text-center font-bold mb-6 text-black dark:text-white">Three things should be cherished in the world！</h2>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-sm dark:bg-black dark:shadow-white"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">热情</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  热情驱使我不断探索这个世界。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-sm dark:bg-black dark:shadow-white"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">踏实</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  踏实让我完成内在的积累与沉淀。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-sm dark:bg-black dark:shadow-white"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">生命力</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  生命力是我活在世界的最终目标。
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        <section className="py-20 bg-gray-50 dark:bg-black text-black">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">准备好进入我的世界了吗？</h2>
              <p className="text-xl text-gray-400 mb-8 dark:text-gray-400">
                开始探索我的世界。
              </p>
              <button className="bg-white text-black dark:bg-black dark:text-white dark:border-white border px-8 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                开始
              </button>
            </motion.div>
          </div>
        </section>
      </div>


      <VideoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
} 