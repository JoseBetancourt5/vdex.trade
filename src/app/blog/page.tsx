import { Heading } from "@/components/ui/typography";

export default function BlogPage() {
  return (
    <div className="mx-auto px-4 py-8 container">
      <Heading variant="h1" size="4xl" className="mb-16 text-center">
        Blog
      </Heading>
      <div className="mt-4">{/* Blog content will go here */}</div>
    </div>
  );
}
