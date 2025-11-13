import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["web-development"];

export default function WebDevelopmentPage() {
  return <TemplateMainlinePremium service={service} />;
}
