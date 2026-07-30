import { ImageResponse } from "next/og"

export const alt = "Reuben Jacob, Co-Founder & CEO of Syphon Labs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadCaslon(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap",
      // An older UA makes Google Fonts serve TTF, which satori can consume (it cannot read woff2).
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:22.0) Gecko/20130405 Firefox/22.0" } }
    ).then((res) => res.text())
    const url = css.match(/src: url\((.+?)\)/)?.[1]
    if (!url) return null
    const data = await fetch(url).then((res) => res.arrayBuffer())
    // Satori parses only TTF/OTF. If Google ever serves WOFF to this UA, using it
    // would throw during render (a 500 for the OG route) instead of falling back,
    // so verify the magic bytes: 0x00010000 (TTF), 'OTTO' (OTF), or 'true'.
    const tag = new DataView(data).getUint32(0)
    const isTtfOrOtf = tag === 0x00010000 || tag === 0x4f54544f || tag === 0x74727565
    return isTtfOrOtf ? data : null
  } catch {
    return null
  }
}

export default async function OpengraphImage() {
  const caslon = await loadCaslon()
  const serif = caslon ? "Libre Caslon Text" : "serif"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f7f3ec",
          color: "#2b251d",
        }}
      >
        <div style={{ display: "flex", width: "100%", height: "1px", background: "#ddd5c7" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6e675c",
            }}
          >
            Co-Founder &amp; CEO, Syphon Labs
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: serif,
              fontSize: "104px",
              marginTop: "28px",
              letterSpacing: "-0.01em",
            }}
          >
            Reuben Jacob
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #ddd5c7",
            paddingTop: "28px",
            fontSize: "26px",
            color: "#6e675c",
          }}
        >
          <div style={{ display: "flex" }}>AI agents for recruiting &amp; people data</div>
          <div style={{ display: "flex" }}>reubenjacob.com</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: caslon
        ? [{ name: "Libre Caslon Text", data: caslon, style: "normal" as const, weight: 400 as const }]
        : undefined,
    }
  )
}
