import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <article className="h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold leading-normal">
        Solve Problems, Inspire Change
      </h1>
      <h1 className="text-5xl font-bold">and Transform Lives</h1>
      <h5 className="mt-8 text-grey">
        Don’t let your computer memories consumes all of those browser tabs.
      </h5>
      <h5 className="text-grey">
        Findtrend let you gathers all of your favorite website into one place.{" "}
      </h5>

      <section className="mt-20 flex justify-between items-center w-[40%]">
        <Button size="lg" className="font-semibold text-md" asChild>
          <Link href="/submit-problem">
            Submit Problem <span className="text-xl">&nbsp;🔥</span>
          </Link>
        </Button>
        <Button size="lg" className="font-semibold text-md" asChild>
          <Link href="/view-problems">
            View Problems <span className="text-xl">&nbsp;🧑🏾‍🔧</span>
          </Link>
        </Button>
      </section>
    </article>
  );
}
