
export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <h1 className="flex mt-[20px] text-2xl">Hello, and welcome to my humble website!</h1>
        <p className="mt-[10px]">My name is James Armbrust, and I am a software developer based in sunny Colorado!</p>
        <p className="mt-[10px]">The purpose of this simple page is to collect some of my recent personal projects in one place.</p>
        <p className="mt-[10px]">I will add projects here as I create suitable ones, and improve on this page as I go, so stay tuned!</p>

        <div className="mt-[30px]">
          <table className="w-full border-collapse">
            <tbody className="border border-zinc-500">
              <tr className="border border-zinc-500" ><th className="px-4 py-2">Project name</th><th className="px-4 py-2">Description</th><th className="px-4 py-2">Link</th></tr>
              <tr className="border border-zinc-500">
                <td className="px-4 py-2">Hire an Adventurer!</td>
                <td className="max-w-[600px] px-4 py-2">
                  A simple e-commerce site in the guise of an adventure game.  Your goal is to protect your village by hiring adventurers to slay the monsters attacking it.  You will have a limited amount of currency to hire them, and a limited pool of adventurers to draw from.  The e-commerce aspect is that the you have a cart you can add and remove &quot;adventurers&quot; from before you choose to hire them. And the stock of each adventurer can be exhausted if adventurers are slain on any of their missions.
                </td>
                <td><a className="text-blue-700 px-4 py-2" href="https://hire-an-adventurer.vercel.app/" target="_blank">hire-an-adventurer</a></td>
              </tr>
              <tr className="border border-zinc-500" ><td className="px-4 py-2">In Progress...</td><td className="max-w-[600px] px-4 py-2">TBD</td><td className="px-4 py-2">TBD</td></tr>
            </tbody>
          </table>
        </div>
      </main>
      <footer className="left-8 text-sm absolute bottom-4">
        &copy;2025 James Armbrust
      </footer>
    </div>
  );
}
