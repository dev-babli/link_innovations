import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["cloud-services"];

export default function CloudServicesPage() {
  return <TemplateMainlinePremium service={service} />;
}