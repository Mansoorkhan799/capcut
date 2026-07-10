import Image from "next/image";

export const installVisuals = [
  {
    src: "/capcut-pro-mod-apk-installation.webp",
    alt: "Tap Official CapCut download on capcutpromodapk.org",
    label: "1 · Start download",
    caption: "Open this site and tap Official CapCut download to get the APK.",
  },
  {
    src: "/capcut-pro-apk.webp",
    alt: "Android File might be harmful dialog with Download anyway",
    label: "2 · Confirm download",
    caption: "If Android warns the file might be harmful, choose Download anyway.",
  },
  {
    src: "/capcut-pro-mod-apk-download.webp",
    alt: "CapCut Pro v18.5.0 Mod APK downloading in Chrome Downloads",
    label: "3 · Wait for APK",
    caption: "Keep Wi‑Fi on until capcut-pro-v18.5.0-mod.apk finishes downloading.",
  },
  {
    src: "/capcut-apk-free.webp",
    alt: "CapCut APK installing with progress bar",
    label: "4 · Install package",
    caption: "Open the APK, allow install from this source, then wait for Installing…",
  },
  {
    src: "/capcut-apk-download.webp",
    alt: "CapCut App installed dialog with Open button",
    label: "5 · Open CapCut",
    caption: "When you see App installed, tap Open to launch CapCut.",
  },
  {
    src: "/capcut-apk-interface.webp",
    alt: "CapCut Terms of Service Agree and continue screen",
    label: "6 · Accept terms",
    caption: "On first launch, tap Agree and continue to enter the editor.",
  },
] as const;

export function InstallGuideVisuals({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          : "not-prose my-8 grid gap-5 sm:grid-cols-2"
      }
    >
      {installVisuals.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden border border-line bg-white"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line bg-accent-soft px-3 py-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-deep">
              {item.label}
            </p>
          </div>
          <div className="px-3 py-4 sm:px-4">
            <Image
              src={item.src}
              alt={item.alt}
              width={440}
              height={880}
              className="mx-auto h-auto w-full max-w-[240px]"
              sizes="(max-width: 640px) 70vw, 240px"
            />
          </div>
          <figcaption className="border-t border-line px-3 py-3 text-sm leading-relaxed text-ink-muted">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function InstallStepImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure
      className={`not-prose overflow-hidden border border-line bg-white ${className || "my-6"}`}
    >
      <div className="px-3 py-4 sm:px-6 sm:py-5">
        <Image
          src={src}
          alt={alt}
          width={520}
          height={1040}
          className="mx-auto h-auto w-full max-w-[260px]"
          sizes="(max-width: 640px) 75vw, 260px"
        />
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-sm leading-relaxed text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
