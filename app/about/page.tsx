import { socialLinks } from "app/config";
import Image from "next/image";


export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profil.jpg"
          alt="Profile photo"
          className="block mx-auto mt-0 mb-10 bg-gray-100 rounded-full sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={130}
          height={130}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hey, I'm Cedric Manchau
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my page. 
        </p>
        <p>
          This blog is kind of an outlet for programming-related posts in which I share things I encounter and found interesting.
        </p>
      </div>
    </section>
  );
}
