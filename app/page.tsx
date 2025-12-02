import DigitalKnights from "./boot/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Digital Knights",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <DigitalKnights />
    </>
  );
}
