
export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center px-4 py-4">
        <h1 className="flex mt-[20px] text-2xl">Hello, and welcome to my humble website!</h1>
        <p className="mt-[10px]">My name is James Armbrust, and I am a software developer based in sunny Colorado!</p>
        <p className="mt-[10px]">The purpose of this simple page is to collect some of my recent personal projects in one place.</p>
        <p className="mt-[10px]">I will add more projects as I create suitable ones, so stay tuned!</p>

        <div className="mt-[30px]">
          <table className=" border-collapse">
            <tbody className="border border-zinc-500">
              <tr className="border border-zinc-500" >
                <th className="px-4 py-2 border-zinc-500">Project</th>
                <th className="px-4 py-2 border-zinc-500">Description</th>
                <th className="px-4 py-2 border-zinc-500">Code</th>
              </tr>
              <tr className="border border-zinc-500">
                <td className="px-5 py-4 border-zinc-500">
                  <a
                    className="text-blue-700"
                    href="https://hire-an-adventurer.vercel.app/"
                    target="_blank">
                    Hire an Adventurer!
                  </a>
                </td>
                <td className="max-w-[600px] px-5 py-4">
                  Similar to a simple e-commerce site this is an adventure game where you hire heroes to defeat monsters
                  and save your village.
                </td>
                <td className="text-blue-700 px-5 py-4">
                  <a  href="https://github.com/jarmbrust/hire-an-adventurer" target="_blank">
                    GitHub
                  </a>
                </td>
              </tr>
              <tr className="border border-zinc-500" >
                <td className="px-5 py-4">In Progress...</td>
                <td className="max-w-[600px] px-5 py-4">TBD</td>
                <td className="px-5 py-4">TBD</td></tr>
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
