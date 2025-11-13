import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["automation-testing"];

export default function AutomationTestingPage() {
  return <TemplateMainlinePremium service={service} />;
}