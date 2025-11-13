import TemplateMainlinePremium from "@/components/template-mainline-premium";
import { servicesBySlug } from "@/data/services";

const service = servicesBySlug["data-analytics"];

export default function DataAnalyticsPage() {
    return <TemplateMainlinePremium service={service} />;
}
