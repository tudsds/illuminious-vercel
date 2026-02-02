import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illuminious Startups Program",
  description: "Join the Illuminious Startups Program for preferential pricing, dedicated support, and a fast-track path from prototype to mass production.",
};

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
