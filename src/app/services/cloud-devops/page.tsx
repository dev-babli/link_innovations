import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["cloud-devops"];

export default function CloudDevOpsPage() {
  return <TemplateMainlinePremium service={service} />;
}