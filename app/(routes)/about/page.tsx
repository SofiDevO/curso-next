import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "nextjs", "react"],
}

const AboutPage = () => {
  return (
    <>
        <h1 className='text-3xl text-center'>About page</h1>
    </>
  )
}

export default AboutPage;
