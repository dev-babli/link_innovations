import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["ai-automation"];

export default function AIAutomationPage() {
  return <TemplateMainlinePremium service={service} />;
}