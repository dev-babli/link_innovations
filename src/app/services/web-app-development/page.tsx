import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["web-app-development"];

export default function WebAppDevelopmentPage() {
  return <TemplateMainlinePremium service={service} />;
}
