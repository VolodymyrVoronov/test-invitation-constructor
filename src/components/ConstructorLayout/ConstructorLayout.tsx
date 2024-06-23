import DotBackground from "../DotBackground/DotBackground";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const ConstructorLayout = (): JSX.Element => {
  return (
    <div className="grid w-auto grid-cols-1 gap-2 p-2">
      <nav className="flex justify-end">
        <ThemeToggle />
      </nav>

      <main className="grid w-auto grid-cols-2 grid-rows-2 lg:grid-cols-[200px_1fr_200px] lg:grid-rows-1 xl:grid-cols-[300px_1fr_300px]">
        <div className="lg:col-span-200px col-span-2 row-start-1 sm:col-span-1">
          <DotBackground>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
            explicabo modi. Eveniet perferendis id laborum nostrum ipsum
            distinctio, veritatis ut veniam assumenda quis ducimus reiciendis
            accusamus possimus at dolorum.
          </DotBackground>
        </div>

        <div className="col-span-2 bg-slate-500 lg:col-span-1 lg:row-start-1">
          2
        </div>

        <div className="lg:col-span-200px col-span-2 row-start-2 sm:col-span-1 sm:row-start-1 lg:row-start-1">
          <DotBackground>3</DotBackground>
        </div>
      </main>
    </div>
  );
};

export default ConstructorLayout;
