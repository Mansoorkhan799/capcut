import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "CapCut APK Technical Specs",
  description:
    "CapCut Android package specs: com.lemon.lvoverseas, arm64-v8a builds, file sizes, DPI profiles, and version architecture notes.",
  path: "/specs",
});

export default function SpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 4"
        title="Technical specs & device architecture"
        description="Match CapCut binaries to your Android hardware profile to avoid install failures and keep rendering performance stable."
        crumbs={[{ href: "/specs", label: "Specs" }]}
      />

      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="prose-guide mx-auto max-w-3xl">
          <p>
            Official CapCut Android releases are split across variants optimized
            for CPU instruction sets and display densities. Understanding bundle
            vs standalone APK builds helps you pick a compatible installer.
          </p>
          <p>
            Version labels and timestamps below are illustrative of how CapCut
            packages are commonly distributed. Always verify the live build on{" "}
            <a href={siteConfig.url} target="_blank" rel="noopener noreferrer">
              capcutpromodapk.org
            </a>{" "}
            or Google Play before installing.
          </p>
        </div>

        <div className="table-scroll mt-8">
          <table className="data-table">
            <thead>
              <tr>
                <th>Build release</th>
                <th>Example window</th>
                <th>Architectures</th>
                <th>Min OS</th>
                <th>DPI profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18.4.0 Bundle</td>
                <td>Mid 2026 cycle</td>
                <td>arm64-v8a + armeabi-v7a</td>
                <td>Android 6.0+</td>
                <td>Multi-density 120–640dpi</td>
              </tr>
              <tr>
                <td>18.4.0 Standalone APK</td>
                <td>Mid 2026 cycle</td>
                <td>arm64-v8a + armeabi-v7a</td>
                <td>Android 6.0+</td>
                <td>Unified nodpi</td>
              </tr>
              <tr>
                <td>18.4.0 Native arm64</td>
                <td>Later 18.4.x</td>
                <td>Pure arm64-v8a</td>
                <td>Android 6.0+</td>
                <td>Unified nodpi</td>
              </tr>
              <tr>
                <td>18.5.0 Premium stable</td>
                <td>Later cycle</td>
                <td>arm64-v8a + armeabi-v7a</td>
                <td>Android 5.0+ / 6.0+</td>
                <td>Flexible multi-variant</td>
              </tr>
              <tr>
                <td>18.6.0 Pipeline</td>
                <td>Latest tracked</td>
                <td>arm64-v8a optimized</td>
                <td>Android 6.0+</td>
                <td>High-density nodpi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-guide mx-auto mt-4 max-w-3xl">
          <h2>Architectural component analysis</h2>
          <ul>
            <li>
              <strong>Package name:</strong> com.lemon.lvoverseas
            </li>
            <li>
              <strong>Typical file size:</strong> roughly 200–300 MB depending on
              assets and regional libraries
            </li>
            <li>
              <strong>CPU instruction sets:</strong> modern devices prefer pure
              64-bit arm64-v8a; dual builds keep armeabi-v7a for older 32-bit
              hardware
            </li>
            <li>
              <strong>DPI management:</strong> nodpi packages scale layouts
              dynamically; density-specific bundles reduce memory on matched
              screens
            </li>
          </ul>
        </div>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
