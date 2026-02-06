
import BackLink from "@/app/components/general/BackLink";

export default function ContainerLay({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-32 pb-16">
      <div className="mb-6">
        <BackLink />
      </div>
      {children}
      <div className="mt-10">
        <BackLink />
      </div>
    </section>
  );
}