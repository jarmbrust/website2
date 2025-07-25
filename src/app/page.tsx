'use client';

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#76707c] to-[#030310] text-white">
        <main className="flex flex-col items-center justify-between p-14">
          <h1 className="flex mt-[20px] text-2xl">Hello, and welcome to my (placeholder) website!</h1>
          <p className="mt-[10px]">My name is James Armbrust, and I am a software developer focused mostly on web development!</p>
          <p className="mt-[10px]">The purpose of this simple page is to collect some of my recent personal projects in one place.</p>
          <p className="mt-[10px]">I only have one project right now, but it is a fun one to work on, one so check it out.</p>
          <p>I will add more projects as I create suitable ones, so stay tuned!</p>
          <div className="mt-[30px]">
            <table className=" border-zinc-500">
              <tbody className=" border-zinc-500">
                <tr className="border border-zinc-500">
                  <th className="px-4 py-2 border-zinc-500">Project</th>
                  <th className="px-4 py-2 border-zinc-500">Description</th>
                  <th className="px-4 py-2 border-zinc-500">Tech Stack</th>
                  <th className="px-4 py-2 border-zinc-500">Code</th>
                </tr>
                <tr className="border border-zinc-500">
                  <td className="px-5 py-4 text-3xl">
                    <a
                      className="text-blue-300 hover:underline"
                      href="https://hire-an-adventurer.vercel.app/"
                      target="_blank"
                    >
                      Hire an Adventurer!
                    </a>
                  </td>
                  <td className="max-w-[700px] px-5 py-4">
                    Similar in some ways to a simple e-commerce app, this project is game where you are the in charge of saving your town
                    by hiring adventurers to defeat the monsters trying to attack it.  There are no game graphics (yet), since 
                    as I mentioned this is mostly structured like an e-commerce app. 
                    <br /><br />
                    In the game you hire adventurers out of a pool of available ones by selecting and placing them in your &quot;cart&quot;.
                    Then you hire the selected adventurers in a &quot;checkout&quot; page (similar to purchasing items as if you were at an online store). 
                    When ready, you send them to fight the monsters <span className="italic">off screen</span>.  Success or failure is determined by 
                    the relative abilities of the various adventurers you selected and the monsters they are fighting.  
                    This will also determine the condition they are in when they return.
                  </td>
                  <td className="max-w-[80px] px-5 py-4">
                    React 19, Next.js 15, TypeScript, Tailwind, PostgreSQL
                  </td>
                  <td className="px-5 py-4">
                    <a
                      className="text-blue-300 hover:underline"
                      href="https://github.com/jarmbrust/hire-an-adventurer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </td>
                </tr>
                <tr className="border border-zinc-500">
                  <td className="text-blue-500 px-5 py-4">
                      Personal Website/Portfolio
                  </td>
                  <td className="max-w-[600px] px-5 py-4">
                    This sight is TBD, but will likely be in React and Next.js. 
                  </td>
                  <td className="px-5 py-4">TBD</td>
                  <td className="text-blue-500 px-5 py-4">
                    GitHub
                  </td>
                </tr>
                {/* <tr className="border border-zinc-500" >
                  <td className="px-5 py-4 border-zinc-500">
                    <a
                      className="text-blue-300"
                      href="https://james3k.com/"
                      target="_blank"
                    >
                      Old Personal Website
                    </a>
                  </td>
                  <td className="max-w-[600px] px-5 py-4">
                    This was a site I created last year in Vue.js.
                    I have since retired it and plan to develop a new portfolio app in React soon to replace this placeholder site.
                    The old Vue.js one is still hosted online for now.
                  </td>
                  <td className="px-5 py-4">Vue 3, TypeScript, SCSS, Node.js, Mongodb, Vitest</td>
                  <td className="text-blue-300 px-5 py-4">
                    <a  href="https://github.com/jarmbrust/website1" target="_blank">
                      GitHub
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </main>
        <footer className="lg:fixed lg:bottom-0 lg:left-0 p-4 text-gray-600">
          &copy;2025 James Armbrust
        </footer>
      </div>
    </div>
  );
}
