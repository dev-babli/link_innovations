import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["mobile-app-development"];

export default function MobileAppDevelopmentPage() {
  return <TemplateMainlinePremium service={service} />;
}
