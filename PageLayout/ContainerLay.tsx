
export default function ContainerLay({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-[90%] xl:w-[75%] mx-auto pt-24 md:pt-28 lg:pt-32 pb-16">
      {children}
    </section>
  );
}