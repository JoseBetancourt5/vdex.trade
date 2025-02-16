import { Section } from "@/components/section";
import { Heading, Text } from "@/components/ui/typography";

export default function BlogPage() {
  return (
    <Section centerContent>
      <Heading variant="h1" size="4xl" className="mb-16 text-center">
        Our Latest News
      </Heading>
      <Text className="text-muted-foreground">Coming Soon...</Text>
    </Section>
  );
}
