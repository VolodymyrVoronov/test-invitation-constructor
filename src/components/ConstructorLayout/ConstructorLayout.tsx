import ConstructorLeft from "../ConstructorLeft/ConstructorLeft";
import DotBackground from "../DotBackground/DotBackground";
import RedoUndoButtons from "../RedoUndoButtons/RedoUndoButtons";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const ConstructorLayout = (): JSX.Element => {
  return (
    <div className="grid w-auto grid-cols-1 gap-2 p-2">
      <nav className="grid w-auto grid-cols-[1fr_40px] grid-rows-1">
        <RedoUndoButtons className="sm:mr-[-40px]" />
        <ThemeToggle />
      </nav>

      <main className="grid w-auto grid-cols-2 grid-rows-2 lg:grid-cols-[200px_1fr_200px] lg:grid-rows-1 xl:grid-cols-[300px_1fr_300px]">
        <section className="lg:col-span-200px col-span-2 row-start-1 sm:col-span-1">
          <DotBackground className="h-auto">
            <ConstructorLeft />
          </DotBackground>
        </section>

        <section className="col-span-2 bg-slate-500 lg:col-span-1 lg:row-start-1">
          2
        </section>

        <section className="lg:col-span-200px col-span-2 row-start-2 sm:col-span-1 sm:row-start-1 lg:row-start-1">
          <DotBackground className="h-auto">3</DotBackground>
        </section>
      </main>
    </div>
  );
};

export default ConstructorLayout;
