import Image from "next/image";

import { DashedLine } from "../dashed-line";

import { cn } from "@/lib/utils";

type ResourceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ResourceItem = {
  title?: string;
  description?: string;
  images?: ResourceImage[];
  className?: string;
  fade?: string[];
};

interface ResourceContent {
  resourceTitle?: string;
  resourceTopItems?: ResourceItem[];
  resourceBottomItems?: ResourceItem[];
  approachTabData?: any[];
}

interface ResourceAllocationProps {
  content?: Record<string, unknown>;
}

const defaultTopItems: ResourceItem[] = [
  {
    title: "Discover & design your product blueprint.",
    description:
      "Align on outcomes, personas, and flows with collaborative workshops and rapid prototyping.",
    images: [
      {
        src: "/mainline_service_template/resource-allocation/templates.webp",
        alt: "Product discovery workshops",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Automate delivery across your toolchain.",
    description:
      "We integrate your stack so design, development, and QA move in lockstep.",
    images: [
      {
        src: "/mainline_service_template/logos/jira.svg",
        alt: "Jira logo",
        width: 48,
        height: 48,
      },
      {
        src: "/mainline_service_template/logos/notion.svg",
        alt: "Notion logo",
        width: 48,
        height: 48,
      },
      {
        src: "/mainline_service_template/logos/drive.svg",
        alt: "Google Drive logo",
        width: 48,
        height: 48,
      },
      {
        src: "/mainline_service_template/logos/asana.svg",
        alt: "Asana logo",
        width: 48,
        height: 48,
      },
      {
        src: "/mainline_service_template/logos/perplexity.svg",
        alt: "Perplexity logo",
        width: 48,
        height: 48,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const defaultBottomItems: ResourceItem[] = [
  {
    title: "Build & iterate with component-driven code.",
    description:
      "Ship reusable design systems and API layers with automated testing baked in.",
    images: [
      {
        src: "/mainline_service_template/resource-allocation/graveyard.webp",
        alt: "Component-driven delivery",
        width: 305,
        height: 280,
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "Collaborate transparently across teams.",
    description:
      "Async updates, review workflows, and CI insights keep every stakeholder aligned.",
    images: [
      {
        src: "/mainline_service_template/resource-allocation/discussions.webp",
        alt: "Team collaboration workflows",
        width: 320,
        height: 103,
      },
    ],
    className:
      "justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
    fade: [""],
  },
  {
    title: "Deploy & monitor with confidence.",
    description:
      "Cloud-native pipelines, observability hooks, and SLO dashboards from day one.",
    images: [
      {
        src: "/mainline_service_template/resource-allocation/notifications.webp",
        alt: "Deployment insights dashboards",
        width: 305,
        height: 280,
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = ({ content }: ResourceAllocationProps) => {
  const allocationContent = (content?.resourceAllocation ?? content ??
    {}) as ResourceContent;

  const title =
    allocationContent.resourceTitle ?? "Web delivery without the bottlenecks";

  const deriveItemsFromApproach = (steps: any[] = []): ResourceItem[] =>
    steps.map((step) => ({
      title:
        Array.isArray(step.title) && step.title.length
          ? step.title.join("")
          : step.title ?? step.subtitle ?? step.label,
      description: step.description,
      images: step.image
        ? [
            {
              src: step.image,
              alt: step.subtitle ?? step.title ?? "Process visual",
              width: 480,
              height: 320,
            },
          ]
        : [],
    }));

  const derivedItems = deriveItemsFromApproach(
    allocationContent.approachTabData,
  );
  const derivedTop = derivedItems.slice(0, 2);
  const derivedBottom = derivedItems.slice(2);

  const customTop = Array.isArray(allocationContent.resourceTopItems)
    ? allocationContent.resourceTopItems
    : undefined;
  const customBottom = Array.isArray(allocationContent.resourceBottomItems)
    ? allocationContent.resourceBottomItems
    : undefined;

  const topItems =
    customTop && customTop.length > 0
      ? customTop.map((item, index) => ({
          ...defaultTopItems[index % defaultTopItems.length],
          ...item,
        }))
      : derivedTop.length > 0
        ? derivedTop
        : defaultTopItems;

  const bottomItems =
    customBottom && customBottom.length > 0
      ? customBottom.map((item, index) => ({
          ...defaultBottomItems[index % defaultBottomItems.length],
          ...item,
        }))
      : derivedBottom.length > 0
        ? derivedBottom
        : defaultBottomItems;

  return (
    <section
      id="resource-allocation"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/30" />
      <div className="relative container max-w-6xl">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
          {title}
        </h2>

        <div className="mt-10 md:mt-12 lg:mt-16 space-y-10">
          <DashedLine orientation="horizontal" className="scale-x-105" />

          {/* Top Features Grid - 2 items */}
          <div className="relative flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>

          <DashedLine orientation="horizontal" className="scale-x-110" />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative grid gap-4 md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </div>

          <DashedLine orientation="horizontal" className="scale-x-110" />
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  item: ResourceItem;
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 rounded-3xl border border-white/10 bg-background/80 shadow-[0_16px_45px_rgba(6,10,19,0.08)]",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade?.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images && item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images?.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images?.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images?.map((image, j) => (
            <Image
              key={j}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-contain object-left-top"
            />
          )) ?? (
            <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-muted text-sm text-muted-foreground">
              Visual coming soon
            </div>
          )}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
