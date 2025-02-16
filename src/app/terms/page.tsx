import { Heading } from "@/components/ui/typography";

export default function TermsPage() {
  return (
    <div className="mx-auto px-4 py-8 container">
      <Heading variant="h1" size="4xl" className="mb-16 text-center">
        Terms & Conditions
      </Heading>
      <div className="mt-4">{/* Terms content will go here */}</div>
    </div>
  );
}
