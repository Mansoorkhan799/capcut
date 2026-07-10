export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  readTime: string;
  keywords: string[];
  keyTakeaways: string[];
  relatedSlugs: string[];
  relatedPaths?: { href: string; label: string }[];
  content: ContentBlock[];
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "faq"; items: { q: string; a: string }[] };

export const blogPosts: BlogPost[] = [
  {
    slug: "is-capcut-mod-apk-safe",
    title: "Is CapCut Mod APK Safe in 2026? Risks, Malware Signs & Safer Options",
    description:
      "Is CapCut Mod APK safe? Learn the real malware, ban, and crash risks of cracked CapCut Pro unlockers—and how to get Pro features legally.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "Security",
    readTime: "8 min",
    keywords: [
      "is CapCut mod APK safe",
      "CapCut cracked APK risks",
      "CapCut Pro unlocker malware",
    ],
    keyTakeaways: [
      "CapCut Mod APKs from third-party sites are unverified and frequently bundled with malware or adware.",
      "Cracked builds can crash, corrupt projects, miss security patches, and trigger account bans.",
      "The safe path is Google Play or capcutpromodapk.org, plus an official CapCut Pro subscription for premium features.",
    ],
    relatedSlugs: [
      "how-to-download-capcut-apk-officially",
      "capcut-pro-vs-free",
      "remove-capcut-watermark-legally",
    ],
    relatedPaths: [
      { href: "/security", label: "Full security assessment" },
      { href: "/install", label: "Safe install guide" },
    ],
    content: [
      {
        type: "p",
        text: "Short answer: No—CapCut Mod APK (also called cracked CapCut Pro or “premium unlocked” CapCut) is not safe. Unofficial packages can unlock watermarks and filters on paper, but they bypass CapCut’s signing and update systems, which is exactly where malware, spyware, and unstable code get introduced.",
      },
      {
        type: "callout",
        title: "What Google and security teams care about",
        text: "Software-download pages that push unverified APKs are treated as high-risk. This guide exists to answer the search intent honestly and point creators to official CapCut channels—not to host cracked files.",
      },
      {
        type: "h2",
        id: "why-people-search",
        text: "Why people search for CapCut Mod APK",
      },
      {
        type: "p",
        text: "Creators usually want three outcomes: remove the end-card watermark, unlock Pro effects/AI tools, and avoid a monthly subscription. Mod pages promise all three for free. That demand is real—but the delivery method is the problem.",
      },
      {
        type: "h2",
        id: "main-risks",
        text: "The main risks of CapCut Mod APK",
      },
      {
        type: "ul",
        items: [
          "Spyware and credential theft: modified packages can log keystrokes or steal CapCut/TikTok login data.",
          "Aggressive adware: forced redirects, notification spam, and phishing overlays are common in cracked APK ecosystems.",
          "Excessive permissions: mods often request more system access than the official CapCut app needs.",
          "Project loss: subscription-bypass hooks are fragile and can freeze exports or corrupt timelines.",
          "No security updates: unofficial builds do not receive CapCut’s official patches.",
          "Account bans: anomalous client behavior can lead to permanent CapCut/TikTok-linked restrictions.",
        ],
      },
      {
        type: "h2",
        id: "how-to-spot",
        text: "How to spot a dangerous CapCut download page",
      },
      {
        type: "ol",
        items: [
          "It promises “CapCut Pro unlocked forever” with no subscription.",
          "Download buttons jump through multiple ad redirects.",
          "The file is hosted on a random mirror, not Play Store or capcutpromodapk.org.",
          "The site avoids saying who publishes the APK or how it is signed.",
          "Comments mention viruses, black screens, or stolen accounts.",
        ],
      },
      {
        type: "h2",
        id: "safer-options",
        text: "Safer options that still get you Pro results",
      },
      {
        type: "ul",
        items: [
          "Install CapCut from Google Play or the official CapCut website.",
          "Use official CapCut Pro for watermark-free exports and premium AI/assets.",
          "For long-form work, move heavy projects to CapCut desktop workflows when needed.",
          "If budget is tight, plan free-tier exports carefully and upgrade only for client deliverables.",
        ],
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Can antivirus make a CapCut Mod APK safe?",
            a: "No. A clean scan does not prove a cracked app is trustworthy. Malicious behavior can activate after install or hide behind delayed payloads.",
          },
          {
            q: "Is an “official mod” CapCut APK real?",
            a: "No. CapCut does not publish premium-unlocked mod builds. Anything labeled that way is unofficial.",
          },
          {
            q: "What should I do if I already installed a mod?",
            a: "Uninstall it, run a reputable mobile security scan, change CapCut/TikTok passwords, and reinstall CapCut only from official sources.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-download-capcut-apk-officially",
    title: "How to Download CapCut APK Officially on Android (Safe 2026 Guide)",
    description:
      "Download CapCut APK the safe way: Google Play or official capcutpromodapk.org steps, permissions, and fixes for App not installed errors.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "Install",
    readTime: "7 min",
    keywords: [
      "download CapCut APK",
      "CapCut official APK Android",
      "install CapCut without Play Store",
    ],
    keyTakeaways: [
      "Prefer Google Play when available; otherwise download only from capcutpromodapk.org.",
      "Uninstall old CapCut builds first to avoid signature conflicts.",
      "Never use random “mod APK” mirrors for CapCut installs.",
    ],
    relatedSlugs: [
      "is-capcut-mod-apk-safe",
      "capcut-app-not-installed-fix",
      "capcut-pro-vs-free",
    ],
    relatedPaths: [{ href: "/install", label: "Full deployment matrix" }],
    content: [
      {
        type: "p",
        text: "If you need CapCut on Android, the safest downloads come from Google Play or CapCut’s official website. This guide walks through both paths and the exact settings that prevent “App not installed” failures.",
      },
      {
        type: "h2",
        id: "play-store",
        text: "Method 1: Install from Google Play (recommended)",
      },
      {
        type: "ol",
        items: [
          "Open the Google Play Store on your Android device.",
          "Search for CapCut (package commonly listed as com.lemon.lvoverseas for international builds).",
          "Tap Install and wait for the download to finish.",
          "Open CapCut and sign in if you use cloud projects or Pro.",
        ],
      },
      {
        type: "h2",
        id: "official-apk",
        text: "Method 2: Official CapCut APK from capcutpromodapk.org",
      },
      {
        type: "p",
        text: "Use this when Play Store is unavailable in your region or on a device without Google services.",
      },
      {
        type: "ol",
        items: [
          "Uninstall any existing CapCut app to avoid signature collisions.",
          "Open a browser and go to capcutpromodapk.org.",
          "Choose the Android APK download from CapCut’s official download area.",
          "If Android warns that APK files may be harmful, continue only because the source is CapCut’s own site.",
          "Open the file in Downloads, allow install permission for that browser/file manager, then tap Install.",
        ],
      },
      {
        type: "callout",
        title: "Do not confuse official APK with mod APK",
        text: "An official CapCut APK is signed by CapCut. A CapCut Mod APK is resigned by unknown publishers and is a different security risk entirely.",
      },
      {
        type: "h2",
        id: "after-install",
        text: "After install checklist",
      },
      {
        type: "ul",
        items: [
          "Confirm the app name and publisher details look correct.",
          "Update CapCut when prompted so you receive security and feature patches.",
          "If you need watermark-free Pro output, subscribe inside the official app—not via a cracked unlocker.",
        ],
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Do I need to root Android to install CapCut APK?",
            a: "No. Rooting is unnecessary. You only need the Install unknown apps permission for your browser or file manager.",
          },
          {
            q: "Is CapCut APK outside Play Store always unsafe?",
            a: "Not if it comes directly from CapCut’s official website. Third-party mirrors are the risky category.",
          },
        ],
      },
    ],
  },
  {
    slug: "capcut-pro-vs-free",
    title: "CapCut Pro vs Free (2026): Watermark, 4K, AI Tools & Cloud Storage",
    description:
      "Compare CapCut Pro vs free: watermark rules, export quality, AI features, cloud storage, and whether Pro is worth it for creators.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "Comparison",
    readTime: "9 min",
    keywords: [
      "CapCut Pro vs free",
      "CapCut Pro worth it",
      "CapCut watermark free vs pro",
    ],
    keyTakeaways: [
      "Free CapCut is strong for learning and social drafts; Pro removes watermarks and unlocks premium export/AI/asset access.",
      "Cloud storage and update reliability are major Pro advantages over cracked unlockers.",
      "Choose Pro when client work, brand exports, or 4K deliverables matter.",
    ],
    relatedSlugs: [
      "remove-capcut-watermark-legally",
      "is-capcut-mod-apk-safe",
      "capcut-export-4k-60fps-settings",
    ],
    relatedPaths: [{ href: "/free-vs-pro", label: "Full comparison matrix" }],
    content: [
      {
        type: "p",
        text: "CapCut’s free tier is already powerful. CapCut Pro mainly removes commercial friction: watermarks, premium asset locks, higher-end export targets, and larger cloud sync. Here’s a practical 2026 breakdown for creators deciding whether to upgrade.",
      },
      {
        type: "h2",
        id: "quick-compare",
        text: "Quick comparison",
      },
      {
        type: "ul",
        items: [
          "Watermark: Free often adds a brand end card; Pro exports without that Pro paywall watermark.",
          "Export quality: Free is fine for many social posts; Pro is better when you need consistent 4K/60fps + HDR-capable output on supported devices.",
          "AI tools: Core AI exists on free, but advanced/premium AI and asset catalogs are broader on Pro.",
          "Cloud: Free storage is limited (commonly around 1GB); Pro expands significantly (often cited up to about 10GB depending on plan/region).",
          "Support & updates: Official Pro stays inside CapCut’s update and support ecosystem; mods do not.",
        ],
      },
      {
        type: "h2",
        id: "who-should-stay-free",
        text: "Who should stay on free",
      },
      {
        type: "ul",
        items: [
          "Beginners practicing edits and learning the timeline.",
          "Personal social posts where a watermark is acceptable.",
          "Creators who mostly use basic trim, captions, and free effects.",
        ],
      },
      {
        type: "h2",
        id: "who-should-upgrade",
        text: "Who should upgrade to CapCut Pro",
      },
      {
        type: "ul",
        items: [
          "Freelancers delivering client videos without CapCut branding.",
          "Teams that need premium effects libraries and reliable cloud backup.",
          "Creators publishing high-resolution vertical video as a primary business channel.",
        ],
      },
      {
        type: "callout",
        title: "Avoid “Pro unlocked” shortcuts",
        text: "Cracked CapCut Pro APKs are not a free Pro plan. They trade short-term unlocks for malware risk, instability, and possible account loss.",
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Does CapCut Pro remove all watermarks?",
            a: "Official Pro is designed for watermark-free production exports compared with the free tier’s branding limitations. Always confirm current plan terms in-app for your region.",
          },
          {
            q: "Is CapCut Pro worth it for TikTok only?",
            a: "If you post daily and need clean branding plus premium effects, yes. If you edit casually, free may be enough.",
          },
        ],
      },
    ],
  },
  {
    slug: "remove-capcut-watermark-legally",
    title: "How to Remove CapCut Watermark Legally (Official Pro Methods)",
    description:
      "Learn how to remove CapCut watermark the right way with official CapCut Pro—not unsafe mod APKs or random watermark removers.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "How-to",
    readTime: "6 min",
    keywords: [
      "remove CapCut watermark",
      "CapCut no watermark",
      "CapCut Pro watermark free",
    ],
    keyTakeaways: [
      "The reliable legal method is upgrading to official CapCut Pro.",
      "Third-party “watermark remover” APKs and CapCut mods are high-risk.",
      "Export settings and template licensing can still affect final branding—check before publishing.",
    ],
    relatedSlugs: [
      "capcut-pro-vs-free",
      "is-capcut-mod-apk-safe",
      "capcut-export-4k-60fps-settings",
    ],
    relatedPaths: [{ href: "/free-vs-pro", label: "Free vs Pro details" }],
    content: [
      {
        type: "p",
        text: "Want CapCut exports without the free-tier brand card? The safe answer is official CapCut Pro—not a cracked mod APK or an unknown “watermark remover” app.",
      },
      {
        type: "h2",
        id: "legal-method",
        text: "Legal method: upgrade to CapCut Pro",
      },
      {
        type: "ol",
        items: [
          "Open the official CapCut app from Play Store or capcutpromodapk.org.",
          "Go to the Pro / subscription area inside CapCut.",
          "Choose a plan that includes watermark-free exports for your region.",
          "Re-export your project and confirm the end card is gone before publishing.",
        ],
      },
      {
        type: "h2",
        id: "what-not-to-do",
        text: "What not to do",
      },
      {
        type: "ul",
        items: [
          "Do not install CapCut Mod APK “Pro unlocked” packages.",
          "Do not upload projects to random online watermark-removal sites.",
          "Do not trust browser extensions that ask for CapCut account access to “remove watermark.”",
        ],
      },
      {
        type: "h2",
        id: "extra-tips",
        text: "Extra tips for clean exports",
      },
      {
        type: "ul",
        items: [
          "Avoid templates that include mandatory branded elements unrelated to CapCut’s free watermark.",
          "Check music licensing before monetized uploads.",
          "Keep CapCut updated so export and Pro entitlements stay current.",
        ],
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Can I crop out the CapCut watermark?",
            a: "Cropping can damage framing and still may not remove end-card watermarks cleanly. Pro is the proper fix.",
          },
          {
            q: "Does desktop CapCut remove watermark the same way?",
            a: "Watermark and plan rules can differ by platform and region. Use official CapCut account entitlements rather than third-party unlock tools.",
          },
        ],
      },
    ],
  },
  {
    slug: "capcut-app-not-installed-fix",
    title: "CapCut “App Not Installed” Error: Causes and Fixes (Android)",
    description:
      "Fix CapCut App not installed errors: storage space, architecture mismatch, signature conflicts, and corrupted APK downloads.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "Troubleshooting",
    readTime: "6 min",
    keywords: [
      "CapCut app not installed",
      "CapCut APK install failed",
      "CapCut signature conflict",
    ],
    keyTakeaways: [
      "Most failures come from old CapCut leftovers, low storage, or wrong CPU architecture.",
      "Re-download only from official CapCut sources after uninstalling previous builds.",
      "Parsing errors usually mean a corrupted or incomplete APK file.",
    ],
    relatedSlugs: [
      "how-to-download-capcut-apk-officially",
      "capcut-no-internet-connection-fix",
      "is-capcut-mod-apk-safe",
    ],
    relatedPaths: [
      { href: "/troubleshooting", label: "Full troubleshooting guide" },
      { href: "/install", label: "Install steps" },
    ],
    content: [
      {
        type: "p",
        text: "Seeing “App not installed” when sideloading CapCut? This is almost always a device or package conflict—not a mysterious CapCut ban. Work through the fixes below in order.",
      },
      {
        type: "h2",
        id: "fix-order",
        text: "Fix order that works most often",
      },
      {
        type: "ol",
        items: [
          "Uninstall every existing CapCut variant from Settings → Apps.",
          "Free at least 1.5–2 GB of internal storage.",
          "Re-download CapCut from Google Play or capcutpromodapk.org (not a mod mirror).",
          "Confirm the APK matches your device architecture (modern phones need arm64-v8a support).",
          "Enable Allow from this source for the browser/file manager used to open the APK.",
        ],
      },
      {
        type: "h2",
        id: "signature-conflicts",
        text: "Signature conflicts explained",
      },
      {
        type: "p",
        text: "If you previously installed a modded CapCut, its signing certificate differs from the official app. Android then blocks the official package until the old app is fully removed.",
      },
      {
        type: "h2",
        id: "parsing-error",
        text: "If you get a parsing error instead",
      },
      {
        type: "ul",
        items: [
          "The download was interrupted—delete the file and download again on stable Wi‑Fi.",
          "The package is incompatible with your Android version.",
          "The file was altered by a third-party host (another reason to avoid mod sites).",
        ],
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Can I install CapCut Pro APK over free CapCut?",
            a: "Official updates can replace free installs. Cracked “Pro APK” overlays often fail because of signature mismatch and should be avoided.",
          },
        ],
      },
    ],
  },
  {
    slug: "capcut-no-internet-connection-fix",
    title: "CapCut No Internet Connection Error: Fast Fixes That Work",
    description:
      "Fix CapCut no internet connection and too many people using this feature errors with reset, Business Creator Mode, and VPN tips.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "Troubleshooting",
    readTime: "5 min",
    keywords: [
      "CapCut no internet connection",
      "CapCut too many people using this feature",
      "CapCut Business Creator Mode",
    ],
    keyTakeaways: [
      "Force-close and relaunch CapCut first to clear hung connections.",
      "Business Creator Mode can route around crowded public nodes when available.",
      "A reputable VPN helps only when your network blocks ByteDance/CapCut servers.",
    ],
    relatedSlugs: [
      "capcut-app-not-installed-fix",
      "capcut-export-4k-60fps-settings",
      "how-to-download-capcut-apk-officially",
    ],
    relatedPaths: [{ href: "/troubleshooting", label: "More CapCut fixes" }],
    content: [
      {
        type: "p",
        text: "CapCut’s “No Internet Connection” message often appears even when your phone Wi‑Fi works. The app may be failing to reach CapCut asset or AI servers—or those servers may be overloaded.",
      },
      {
        type: "h2",
        id: "quick-fixes",
        text: "Quick fixes",
      },
      {
        type: "ol",
        items: [
          "Force-close CapCut from Recents and reopen it.",
          "Toggle airplane mode on/off, or switch between Wi‑Fi and mobile data.",
          "In CapCut settings, enable Business Creator Mode if available.",
          "Update CapCut from Play Store or official CapCut channels.",
          "If CapCut servers are restricted on your ISP, connect a reputable VPN, then reopen CapCut.",
        ],
      },
      {
        type: "h2",
        id: "too-many-people",
        text: "“Too many people using this feature”",
      },
      {
        type: "p",
        text: "This usually means a cloud AI/effect endpoint is rate-limited. Wait a few minutes, retry off-peak, or use Business Creator Mode when CapCut provides that routing option.",
      },
      {
        type: "callout",
        title: "Mods make network errors worse",
        text: "Cracked CapCut builds often break API authentication, which creates permanent “no internet” loops. Reinstall the official app if you previously used a mod.",
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Why do AI features fail while basic editing works?",
            a: "Timeline editing can work offline or locally, while captions, generative tools, and some assets need live CapCut servers.",
          },
        ],
      },
    ],
  },
  {
    slug: "capcut-export-4k-60fps-settings",
    title: "CapCut Export Settings for 4K 60fps (and How to Stop 99% Freezes)",
    description:
      "Best CapCut export settings for 4K and 60fps, plus fixes when CapCut export freezes at 99% on Android.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "How-to",
    readTime: "7 min",
    keywords: [
      "CapCut 4K export",
      "CapCut 60fps settings",
      "CapCut export stuck at 99",
    ],
    keyTakeaways: [
      "4K/60fps needs device headroom, Pro entitlements where required, and clean cache.",
      "If export freezes at 99%, clear CapCut cache or temporarily drop to 1080p/30fps.",
      "Match export frame rate to your footage to avoid unnecessary interpolation load.",
    ],
    relatedSlugs: [
      "capcut-pro-vs-free",
      "capcut-no-internet-connection-fix",
      "remove-capcut-watermark-legally",
    ],
    relatedPaths: [
      { href: "/assets-export", label: "Assets & export overview" },
      { href: "/troubleshooting", label: "Export troubleshooting" },
    ],
    content: [
      {
        type: "p",
        text: "CapCut can export sharp vertical video, but 4K 60fps is demanding on phones. Use these settings and recovery steps to get clean exports without endless 99% freezes.",
      },
      {
        type: "h2",
        id: "recommended-settings",
        text: "Recommended export settings",
      },
      {
        type: "ul",
        items: [
          "Resolution: 1080p for daily social; 2K/4K for hero ads or YouTube when the device allows.",
          "Frame rate: 30fps for most talking-head content; 60fps for motion-heavy clips if source footage supports it.",
          "Bitrate: prefer higher quality presets for client work; standard for quick drafts.",
          "HDR: enable Smart HDR only on compatible devices and platforms that preserve HDR.",
        ],
      },
      {
        type: "h2",
        id: "freeze-99",
        text: "Fix CapCut export stuck at 99%",
      },
      {
        type: "ol",
        items: [
          "Minimize the project and go to Android Settings → Apps → CapCut → Storage → Clear cache.",
          "Reopen CapCut and export again.",
          "If it still hangs, export at 1080p or 30fps, then upscale elsewhere only if needed.",
          "Close background apps and keep the phone cool—thermal throttling kills late-stage encodes.",
          "Remove extremely heavy effects stacks or nested compounds before retrying 4K.",
        ],
      },
      {
        type: "h2",
        id: "pro-note",
        text: "Pro note on resolution unlocks",
      },
      {
        type: "p",
        text: "Some maximum export combinations are tied to official CapCut Pro entitlements and device capability. Cracked unlockers that “force 4K” often crash because they skip CapCut’s stability checks.",
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Should every TikTok be exported in 4K?",
            a: "No. 1080p is enough for most feeds. Use 4K when the platform and your source footage benefit from the extra detail.",
          },
        ],
      },
    ],
  },
  {
    slug: "capcut-auto-captions-guide",
    title: "CapCut Auto Captions Guide: Faster Subtitles for Reels & TikTok",
    description:
      "How to use CapCut auto captions: generate subtitles, fix accuracy, style text, and export readable captions for short-form video.",
    date: "2026-07-10",
    updated: "2026-07-10",
    category: "AI Tools",
    readTime: "6 min",
    keywords: [
      "CapCut auto captions",
      "CapCut captions for TikTok",
      "CapCut subtitle generator",
    ],
    keyTakeaways: [
      "Auto Captions uses speech recognition to place synced subtitles on the timeline.",
      "Always proofread names, numbers, and niche terms before publishing.",
      "Consistent caption style improves watch time on Reels, Shorts, and TikTok.",
    ],
    relatedSlugs: [
      "capcut-export-4k-60fps-settings",
      "capcut-pro-vs-free",
      "capcut-no-internet-connection-fix",
    ],
    relatedPaths: [{ href: "/ai-features", label: "All CapCut AI features" }],
    content: [
      {
        type: "p",
        text: "CapCut Auto Captions is one of the fastest ways to add readable subtitles for silent-scroll feeds. Here’s a practical workflow that keeps captions accurate and on-brand.",
      },
      {
        type: "h2",
        id: "steps",
        text: "How to generate auto captions",
      },
      {
        type: "ol",
        items: [
          "Import your clip and open the editing timeline.",
          "Select the main audio/video track.",
          "Choose Captions / Auto Captions (wording can vary by app version).",
          "Pick the spoken language and generate.",
          "Review each caption block, then apply a global text style.",
        ],
      },
      {
        type: "h2",
        id: "accuracy-tips",
        text: "Accuracy tips",
      },
      {
        type: "ul",
        items: [
          "Record voiceover in a quiet room with clear mic input.",
          "Avoid heavy background music under dialogue during transcription.",
          "Manually fix brand names, usernames, and product spellings.",
          "Split long caption blocks so viewers can read at mobile speed.",
        ],
      },
      {
        type: "h2",
        id: "styling",
        text: "Styling for retention",
      },
      {
        type: "ul",
        items: [
          "Use high-contrast fill and stroke for busy footage.",
          "Keep captions in the safe lower-middle area above UI overlays.",
          "Animate sparingly—readability beats excessive motion.",
        ],
      },
      {
        type: "h2",
        id: "faq",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "Do auto captions need internet?",
            a: "Often yes, because CapCut may process speech through online models. If generation fails, check connectivity and CapCut server status.",
          },
        ],
      },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost) {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
