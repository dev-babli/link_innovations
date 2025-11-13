import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["mobile-apps"];

export default function MobileAppsPage() {
  return <TemplateMainlinePremium service={service} />;
}
