import Hero from "../components/Hero";
import SentinelCards from "../components/SentinelCards";
import Pegasus from "../components/Pegasus";
import VanguardModule from "../components/VanguardModule";
import Backend from "../components/Backend";
import Comparison from "../components/Comparison";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-24">
      <Hero />
      <SentinelCards />
      <Pegasus />
      <VanguardModule />
      <Backend />
      <Comparison />
    </div>
  );
}