export function Screen({
  width,
  height,
  children,
}: ScreenProps & { children: React.ReactNode }) {
  return (
    <div
      id="screen"
      style={{
        width: width ?? "100%",
        height: height ?? "100%",
        overflow: "hidden",
        // position: "relative",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        background: "white",
        color: "black",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
}

export interface ScreenProps {
  width?: number;
  height?: number;
}
