export default function Blur() {
  return (
    <div
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
        bottom:
          "calc(calc(100% - min(var(--viewport-height, 100%), 100%)) + 0px)",
        pointerEvents: "none",
        height: 171,
        position: "fixed",
        zIndex: 1,
        flex: "none",
        order: 1003,
        left: 0,
        right: 0,
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 1,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(0.1875px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 2,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(0.375px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 3,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(0.75px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 4,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(1.5px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 5,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(3px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 6,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(6px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 7,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(12px)",
          }}
        ></div>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: 8,
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
            borderRadius: 0,
            pointerEvents: "none",
            backdropFilter: "blur(24px)",
          }}
        ></div>
      </div>
    </div>
  );
}
