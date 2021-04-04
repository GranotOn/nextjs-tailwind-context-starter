import Header from "./Header";
import Content from "./Content";

export default function Drawer() {
  return (
    <section aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="h-screen flex">
        <div className="max-w-sm w-screen">
          <div className="h-full flex flex-col py-6 bg-white shadow-xl">
            <div className="px-4 sm:px-6">
              <Header />
            </div>
            <div className="mt-6 relative flex-1 px-4 sm:px-6">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
