
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import ProfilePic from "../../public/images/profile/avatar.png";
import { AnimatedText } from '@/components/subcomponents/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/subcomponents/Icons';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import { Transition } from '@/components/subcomponents/Transition';
import { basePath } from '@/lib/utils';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Transition />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
            <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className='w-1/2 md:w-full'>
                <Image
                  src={ProfilePic}
                  alt='Francisco Lopez'
                  className='w-full h-auto lg:hidden md:inline-block md:w-full'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className='w-1/2 flex flex-col  self-center lg:w-full lg:text-center mx-4'>
                <AnimatedText text='Building distributed systems.' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:text-5xl sm:!text-3xl' />
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  Stay sharp & never quit.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <a
                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                    href={`${basePath}/resume.pdf`}
                    target="_blank"
                    download
                  >
                    Resume <LinkArrow className='w-6 ml-1' />
                  </a>
                  <Link
                    href="mailto:fraloal97@gmail.com"
                    target='_blank'
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >Contact</Link>
                </div>
              </div>
            </div>
        </Layout>

        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Francisco Lopez" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}

export default Home;
