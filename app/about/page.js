import HeroManifesto from "@/components/about/HeroManifesto";
import CorePhilosophy from "@/components/about/CorePhilosophy";
import ActionCommitment from "@/components/about/ActionCommitment";
import CurationGrid from "@/components/about/CurationGrid";

export const metadata = {
  title: "About Us | Heirloom",
  description: "Redefining subtractive consumption with SDG 12 principles.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A]">
      <HeroManifesto />
      <CorePhilosophy />
      <ActionCommitment />
      <CurationGrid />
    </main>
  );
}
