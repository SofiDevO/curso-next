

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <main className="flex flex-col items-center justify-center h-screen w-full">
        {children}
      </main>
    </>
  );
}
