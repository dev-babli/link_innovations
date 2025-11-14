"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type MegaMenuItem = {
  id: number;
  label: string;
  link?: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
    }[];
  }[];
};

export interface MegaMenuProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={cn(
          "relative flex items-center gap-1 text-base font-medium text-slate-600 md:text-sm",
          className,
        )}
        {...props}
      >
        {items.map((navItem) => {
          const hasDropdown = Boolean(navItem.subMenus?.length);
          const baseButton = (
            <span className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full px-5 py-2 transition-all duration-300 hover:text-slate-900 group">
              <span>{navItem.label}</span>
              {hasDropdown && (
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300 group-hover:rotate-180",
                    openMenu === navItem.label && "rotate-180",
                  )}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 rounded-full bg-slate-900/5"
                />
              )}
            </span>
          );

          if (!hasDropdown && navItem.link) {
            return (
              <li key={navItem.label} className="relative">
                <Link href={navItem.link} className="inline-flex">
                  {baseButton}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}
            >
              <button
                className="relative"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                {baseButton}
              </button>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-1/2 top-[calc(100%+16px)] z-50 -translate-x-1/2 pt-2">
                  <motion.div
                    className="w-[min(960px,90vw)] rounded-[30px] border border-white/40 bg-white/90 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
                    layoutId="menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex w-full gap-6">
                      {navItem.subMenus.map((sub) => (
                        <motion.div
                          layout
                          className="flex-1 rounded-2xl border border-white/50 bg-white/75 p-5 shadow-inner"
                          key={sub.title}
                        >
                          <h3 className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">
                            {sub.title}
                          </h3>
                          <ul className="mt-4 space-y-4">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <LinkOrButton
                                    href={item.href}
                                    className="flex items-start gap-3 rounded-2xl border border-transparent px-3 py-2 transition hover:border-slate-200 hover:bg-white"
                                  >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="leading-tight">
                                      <p className="text-sm font-semibold text-slate-900">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-slate-500 group-hover:text-slate-600">
                                        {item.description}
                                      </p>
                                    </div>
                                  </LinkOrButton>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                      <div className="hidden w-48 flex-shrink-0 overflow-hidden rounded-2xl md:block">
                        <ImagePanel />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
          );
        })}
      </ul>
    );
  },
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;

function LinkOrButton({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn("group", className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={cn("group", className)}>
      {children}
    </div>
  );
}

function ImagePanel() {
  return (
    <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl">
      <Image
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
        alt="Team collaboration"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          Featured
        </p>
        <p className="mt-2 text-base font-semibold leading-tight">
          Build once, scale everywhere with Link.
        </p>
        <p className="mt-2 text-xs text-white/70">
          Product squads, AI copilots, automation, and secure delivery in one partner.
        </p>
      </div>
    </div>
  );
}