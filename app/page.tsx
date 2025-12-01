import DigitalKnights from "./boot/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Preview || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
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
