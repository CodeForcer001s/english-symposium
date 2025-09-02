import AboutPageVisualMatch from "@/components/sections/About";
import EventsPage from "../components/sections/EventsPage";
import EventsOverview from "@/components/sections/EventsOverview";
import Hero from "@/components/sections/Hero";
import Schedule from "@/components/sections/Schedule";
export default function Page() {
  return (
    <div>
      <Hero />
      <AboutPageVisualMatch />
      <EventsOverview />
      <Schedule />
      <EventsPage />
    </div>
  );
}
