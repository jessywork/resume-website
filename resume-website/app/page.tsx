import Banner from "@/src/components/banner/Banner";
import Footer from "@/src/components/footer";
import Navigation from "@/src/components/navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col">
          <Navigation />
          <Banner />
          <Footer />
        </div>
      </main>
    </div>
  );
}
