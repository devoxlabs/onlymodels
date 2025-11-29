import { notFound } from "next/navigation";
import { HomeRoot } from "../home-root";

const sections = [
  "featured",
  "why-us",
  "transparency",
  "done-for-you",
  "features",
  "workflow",
  "real-struggles",
  "steps",
  "faq",
  "testimonials",
  "cta",
];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  if (!sections.includes(params.section)) {
    notFound();
  }
  return <HomeRoot initialSection={params.section} />;
}
