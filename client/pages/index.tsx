import Head from 'next/head';
import ImageUpload from '@/components/ImageUpload';

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Processing</title>
        <meta name="description" content="63070076 | Thanawat Jantawong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-screen overflow-hidden">
        <ImageUpload />
      </main>
    </>
  );
}
