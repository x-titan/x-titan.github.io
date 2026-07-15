export default function Blur() {
  return (
    <div
      style="
        -webkit-user-select: none;
        user-select: none;
        bottom: calc(
          calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px
        );
        pointer-events: none;
        height: 171px;
        position: var(--framer-canvas-fixed-position, fixed);
        z-index: 1;
        flex: none;
        order: 1003;
        left: 0;
        right: 0;
      "
    >
      <div "style"={`"position: absolute; inset: 0; overflow: hidden"`}>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 1;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 0) 37.5%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 0) 37.5%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(0.1875px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 2;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 0) 50%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 0) 50%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(0.375px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 3;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 0) 62.5%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 0) 62.5%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(0.75px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 4;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 0) 75%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 0) 75%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(1.5px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 5;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 0) 87.5%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 0) 87.5%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(3px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 6;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 0) 100%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 0) 100%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(6px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 7;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 1) 100%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 1) 100%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(12px);
          "
        ></div>
        <div
          style="
            opacity: 1;
            position: absolute;
            inset: 0;
            z-index: 8;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 87.5%,
              rgba(0, 0, 0, 1) 100%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 87.5%,
              rgba(0, 0, 0, 1) 100%
            );
            border-radius: 0px;
            pointer-events: none;
            backdrop-filter: blur(24px);
          "
        ></div>
      </div>
    </div>
  );
}
