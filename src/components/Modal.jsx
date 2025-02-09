import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import jobsVideo from '@/resources/SteveJobs.mp4'
import { motion } from 'framer-motion'

export function VideoModal({ isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all dark:bg-zinc-900">
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">关闭</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 dark:text-white">
                    Steven Jobs
                  </Dialog.Title>
                  
                  <div className="mt-2">
                    <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                      纪念乔布斯逝世10周年
                    </h2>
                    
                    <div className="relative pt-[56.25%] w-full">
                      <video
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        src={jobsVideo}
                        title="Steve Jobs Memorial Video"
                        controls
                        playsInline
                      />
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
                      乔布斯逝世10周年，让我们一起回顾他的传奇人生。
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 