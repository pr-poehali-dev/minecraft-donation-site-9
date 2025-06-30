import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DonationPackages from "@/components/DonationPackages";
import ServerStats from "@/components/ServerStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-minecraft-stone">
      <Header />
      <Hero />
      <DonationPackages />
      <ServerStats />
    </div>
  );
};

export default Index;
