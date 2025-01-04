// This template creates a full-screen BentoGrid layout using TailwindCSS.
// Customize the layout and content as needed.

// Step 1: Install TailwindCSS in your Next.js project.
// Follow the official installation guide: https://tailwindcss.com/docs/installation

// Step 2: Create a new page in your Next.js project.
// Save this file as `pages/bentoGrid.js`.

import Head from 'next/head';

export default function BentoGridPage() {
  return (
    <>
      <Head>
        <title>BentoGrid Fullscreen Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="grid grid-rows-7 grid-cols-12 gap-2 w-screen h-screen overflow-hidden">
        <div className="row-span-1 col-span-12 bg-gray-100"></div>
        <div className="row-span-5 col-span-4 bg-gray-200"></div>
        <div className="row-span-5 col-span-4 bg-gray-300"></div>
        <div className="row-span-5 col-span-4 bg-gray-400"></div>
        <div className="row-span-1 col-span-12 bg-gray-500"></div>
      </div>
    </>
  );
}

// Step 3: Start the development server and navigate to `/bentoGrid` to see your fullscreen layout.

// Note: Ensure your `tailwind.config.js` is properly set up to enable JIT mode and purge unused styles.
