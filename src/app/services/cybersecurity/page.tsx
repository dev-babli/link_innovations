import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["cybersecurity"];

export default function CybersecurityPage() {
    return <TemplateMainlinePremium service={service} />;
}
