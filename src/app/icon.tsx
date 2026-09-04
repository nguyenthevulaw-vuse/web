import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#ffffff",
          border: "2.5px solid #EF7604",
          color: "#B30000",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        T
      </div>
    ),
    size,
  );
}
