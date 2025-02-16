import { Heading } from "@/components/ui/typography";

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 py-8 container">
      <Heading variant="h1">About Us</Heading>
      <div className="mt-4">{/* About content will go here */}</div>
    </div>
  );
}
