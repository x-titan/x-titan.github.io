export function Screen({
  width,
  height,
  children,
}: ScreenProps & { children: React.ReactNode }) {

  return (
    <div
      style={{
        width: width ?? "100%",
        height: height ?? "100%",
        overflow: "hidden",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        outline: "1px solid black",
        background: "white",
      }}
    >
      {children}
    </div>
  )

}

export interface ScreenProps {
  width?: number
  height?: number
}
