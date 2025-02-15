import * as React from "react";
import { SVGProps } from "react";

interface LightningIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
}

export function LightningIcon({ width = 100, ...props }: LightningIconProps) {
  const height = width * (518 / 425);

  // Content bounds of the lightning bolt
  const contentMinX = 109;
  const contentMaxX = 297;
  const contentMinY = 111;
  const contentMaxY = 405;

  // Calculate content dimensions
  const contentWidth = contentMaxX - contentMinX;
  const contentHeight = contentMaxY - contentMinY;

  // Add some padding (20% on each side)
  const padding = 0.05;
  const paddingX = contentWidth * padding;
  const paddingY = contentHeight * padding;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`${contentMinX - paddingX} ${contentMinY - paddingY} ${contentWidth + paddingX * 2} ${contentHeight + paddingY * 2}`}
      fill="none"
      className={props.className}
      {...props}
    >
      <g stroke="url(#b)" strokeWidth={18} filter="url(#a)" opacity={0.4}>
        <path d="M223.031 111.534a2.535 2.535 0 0 1 2.534-2.534h8.869a2.535 2.535 0 1 1 0 5.068h-8.869a2.534 2.534 0 0 1-2.534-2.534zM201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 0 1 0-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534zM211.628 121.67a2.535 2.535 0 0 1 2.534-2.534h30.409a2.535 2.535 0 0 1 0 5.068h-30.409a2.534 2.534 0 0 1-2.534-2.534zM212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 1 1 0-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534zM204.026 131.806a2.535 2.535 0 0 1 2.534-2.534h38.011a2.535 2.535 0 0 1 0 5.068H206.56a2.534 2.534 0 0 1-2.534-2.534zM220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 1 1 0-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534zM196.424 141.942a2.535 2.535 0 0 1 2.534-2.534h45.613a2.535 2.535 0 0 1 0 5.068h-45.613a2.534 2.534 0 0 1-2.534-2.534zM228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 1 1 0-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534zM188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 0 1 0 5.069h-53.215a2.534 2.534 0 0 1-2.534-2.534zM235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 1 1 0-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534zM181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 1 1 0 5.068h-60.817a2.534 2.534 0 0 1-2.534-2.534zM243.304 354.801a2.535 2.535 0 0 1-2.534 2.534h-60.817a2.534 2.534 0 1 1 0-5.068h60.817a2.534 2.534 0 0 1 2.534 2.534zM172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 1 1 0 5.068h-69.686a2.534 2.534 0 0 1-2.534-2.534zM252.173 344.665a2.535 2.535 0 0 1-2.534 2.534h-69.686a2.534 2.534 0 1 1 0-5.068h69.686a2.534 2.534 0 0 1 2.534 2.534zM164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 1 1 0 5.068h-77.288a2.534 2.534 0 0 1-2.534-2.534zM259.775 334.529a2.535 2.535 0 0 1-2.534 2.534h-77.288a2.534 2.534 0 1 1 0-5.068h77.288a2.534 2.534 0 0 1 2.534 2.534zM157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 1 1 0 5.068h-84.89a2.534 2.534 0 0 1-2.534-2.534zM267.377 324.393a2.535 2.535 0 0 1-2.534 2.534h-84.89a2.534 2.534 0 1 1 0-5.069h84.89a2.535 2.535 0 0 1 2.534 2.535zM149.544 202.759a2.535 2.535 0 0 1 2.535-2.534h92.492a2.535 2.535 0 0 1 0 5.068h-92.492a2.534 2.534 0 0 1-2.535-2.534zM274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 1 1 0-5.068h92.492a2.535 2.535 0 0 1 2.534 2.534zM141.942 212.895a2.535 2.535 0 0 1 2.534-2.534h100.095a2.535 2.535 0 0 1 0 5.068H144.476a2.534 2.534 0 0 1-2.534-2.534zM282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534zM134.34 223.031a2.535 2.535 0 0 1 2.534-2.534h107.697a2.535 2.535 0 0 1 0 5.068H136.874a2.534 2.534 0 0 1-2.534-2.534zM290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534zM126.738 233.167a2.535 2.535 0 0 1 2.534-2.534h115.299a2.535 2.535 0 0 1 0 5.069H129.272a2.535 2.535 0 0 1-2.534-2.535zM297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534zM119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 1 1 0 5.068H121.67a2.535 2.535 0 0 1-2.534-2.534zM111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 1 1 0 5.068H114.068a2.535 2.535 0 0 1-2.534-2.534zM109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 1 1 0 5.068h-195.12a2.535 2.535 0 0 1-2.534-2.534zM120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 1 1 0 5.068H122.937a2.535 2.535 0 0 1-2.534-2.534z" />
      </g>
      <g stroke="url(#b)" strokeOpacity={0.2} strokeWidth={2} opacity={0.4}>
        <path d="M223.031 111.534a2.535 2.535 0 0 1 2.534-2.534h8.869a2.535 2.535 0 1 1 0 5.068h-8.869a2.534 2.534 0 0 1-2.534-2.534zM201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 0 1 0-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534zM211.628 121.67a2.535 2.535 0 0 1 2.534-2.534h30.409a2.535 2.535 0 0 1 0 5.068h-30.409a2.534 2.534 0 0 1-2.534-2.534zM212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 1 1 0-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534zM204.026 131.806a2.535 2.535 0 0 1 2.534-2.534h38.011a2.535 2.535 0 0 1 0 5.068H206.56a2.534 2.534 0 0 1-2.534-2.534zM220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 1 1 0-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534zM196.424 141.942a2.535 2.535 0 0 1 2.534-2.534h45.613a2.535 2.535 0 0 1 0 5.068h-45.613a2.534 2.534 0 0 1-2.534-2.534zM228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 1 1 0-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534zM188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 0 1 0 5.069h-53.215a2.534 2.534 0 0 1-2.534-2.534zM235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 1 1 0-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534zM181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 1 1 0 5.068h-60.817a2.534 2.534 0 0 1-2.534-2.534zM243.304 354.801a2.535 2.535 0 0 1-2.534 2.534h-60.817a2.534 2.534 0 1 1 0-5.068h60.817a2.534 2.534 0 0 1 2.534 2.534zM172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 1 1 0 5.068h-69.686a2.534 2.534 0 0 1-2.534-2.534zM252.173 344.665a2.535 2.535 0 0 1-2.534 2.534h-69.686a2.534 2.534 0 1 1 0-5.068h69.686a2.534 2.534 0 0 1 2.534 2.534zM164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 1 1 0 5.068h-77.288a2.534 2.534 0 0 1-2.534-2.534zM259.775 334.529a2.535 2.535 0 0 1-2.534 2.534h-77.288a2.534 2.534 0 1 1 0-5.068h77.288a2.534 2.534 0 0 1 2.534 2.534zM157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 1 1 0 5.068h-84.89a2.534 2.534 0 0 1-2.534-2.534zM267.377 324.393a2.535 2.535 0 0 1-2.534 2.534h-84.89a2.534 2.534 0 1 1 0-5.069h84.89a2.535 2.535 0 0 1 2.534 2.535zM149.544 202.759a2.535 2.535 0 0 1 2.535-2.534h92.492a2.535 2.535 0 0 1 0 5.068h-92.492a2.534 2.534 0 0 1-2.535-2.534zM274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 1 1 0-5.068h92.492a2.535 2.535 0 0 1 2.534 2.534zM141.942 212.895a2.535 2.535 0 0 1 2.534-2.534h100.095a2.535 2.535 0 0 1 0 5.068H144.476a2.534 2.534 0 0 1-2.534-2.534zM282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534zM134.34 223.031a2.535 2.535 0 0 1 2.534-2.534h107.697a2.535 2.535 0 0 1 0 5.068H136.874a2.534 2.534 0 0 1-2.534-2.534zM290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534zM126.738 233.167a2.535 2.535 0 0 1 2.534-2.534h115.299a2.535 2.535 0 0 1 0 5.069H129.272a2.535 2.535 0 0 1-2.534-2.535zM297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534zM119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 1 1 0 5.068H121.67a2.535 2.535 0 0 1-2.534-2.534zM111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 1 1 0 5.068H114.068a2.535 2.535 0 0 1-2.534-2.534zM109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 1 1 0 5.068h-195.12a2.535 2.535 0 0 1-2.534-2.534zM120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 1 1 0 5.068H122.937a2.535 2.535 0 0 1-2.534-2.534z" />
      </g>
      <g stroke="url(#b)" strokeOpacity={0.2} strokeWidth={8}>
        <path d="M223.031 111.534a2.535 2.535 0 0 1 2.534-2.534h8.869a2.535 2.535 0 1 1 0 5.068h-8.869a2.534 2.534 0 0 1-2.534-2.534zM201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 0 1 0-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534zM211.628 121.67a2.535 2.535 0 0 1 2.534-2.534h30.409a2.535 2.535 0 0 1 0 5.068h-30.409a2.534 2.534 0 0 1-2.534-2.534zM212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 1 1 0-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534zM204.026 131.806a2.535 2.535 0 0 1 2.534-2.534h38.011a2.535 2.535 0 0 1 0 5.068H206.56a2.534 2.534 0 0 1-2.534-2.534zM220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 1 1 0-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534zM196.424 141.942a2.535 2.535 0 0 1 2.534-2.534h45.613a2.535 2.535 0 0 1 0 5.068h-45.613a2.534 2.534 0 0 1-2.534-2.534zM228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 1 1 0-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534zM188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 0 1 0 5.069h-53.215a2.534 2.534 0 0 1-2.534-2.534zM235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 1 1 0-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534zM181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 1 1 0 5.068h-60.817a2.534 2.534 0 0 1-2.534-2.534zM243.304 354.801a2.535 2.535 0 0 1-2.534 2.534h-60.817a2.534 2.534 0 1 1 0-5.068h60.817a2.534 2.534 0 0 1 2.534 2.534zM172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 1 1 0 5.068h-69.686a2.534 2.534 0 0 1-2.534-2.534zM252.173 344.665a2.535 2.535 0 0 1-2.534 2.534h-69.686a2.534 2.534 0 1 1 0-5.068h69.686a2.534 2.534 0 0 1 2.534 2.534zM164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 1 1 0 5.068h-77.288a2.534 2.534 0 0 1-2.534-2.534zM259.775 334.529a2.535 2.535 0 0 1-2.534 2.534h-77.288a2.534 2.534 0 1 1 0-5.068h77.288a2.534 2.534 0 0 1 2.534 2.534zM157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 1 1 0 5.068h-84.89a2.534 2.534 0 0 1-2.534-2.534zM267.377 324.393a2.535 2.535 0 0 1-2.534 2.534h-84.89a2.534 2.534 0 1 1 0-5.069h84.89a2.535 2.535 0 0 1 2.534 2.535zM149.544 202.759a2.535 2.535 0 0 1 2.535-2.534h92.492a2.535 2.535 0 0 1 0 5.068h-92.492a2.534 2.534 0 0 1-2.535-2.534zM274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 1 1 0-5.068h92.492a2.535 2.535 0 0 1 2.534 2.534zM141.942 212.895a2.535 2.535 0 0 1 2.534-2.534h100.095a2.535 2.535 0 0 1 0 5.068H144.476a2.534 2.534 0 0 1-2.534-2.534zM282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534zM134.34 223.031a2.535 2.535 0 0 1 2.534-2.534h107.697a2.535 2.535 0 0 1 0 5.068H136.874a2.534 2.534 0 0 1-2.534-2.534zM290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534zM126.738 233.167a2.535 2.535 0 0 1 2.534-2.534h115.299a2.535 2.535 0 0 1 0 5.069H129.272a2.535 2.535 0 0 1-2.534-2.535zM297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534zM119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 1 1 0 5.068H121.67a2.535 2.535 0 0 1-2.534-2.534zM111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 1 1 0 5.068H114.068a2.535 2.535 0 0 1-2.534-2.534zM109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 1 1 0 5.068h-195.12a2.535 2.535 0 0 1-2.534-2.534zM120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 1 1 0 5.068H122.937a2.535 2.535 0 0 1-2.534-2.534z" />
      </g>
      <g stroke="url(#c)">
        <path
          d="M223.031 111.534a2.535 2.535 0 0 1 2.534-2.534h8.869a2.535 2.535 0 1 1 0 5.068h-8.869a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 0 } as React.CSSProperties}
        />
        <path
          d="M211.628 121.67a2.535 2.535 0 0 1 2.534-2.534h30.409a2.535 2.535 0 0 1 0 5.068h-30.409a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 1 } as React.CSSProperties}
        />
        <path
          d="M204.026 131.806a2.535 2.535 0 0 1 2.534-2.534h38.011a2.535 2.535 0 0 1 0 5.068H206.56a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 2 } as React.CSSProperties}
        />
        <path
          d="M196.424 141.942a2.535 2.535 0 0 1 2.534-2.534h45.613a2.535 2.535 0 0 1 0 5.068h-45.613a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 3 } as React.CSSProperties}
        />
        <path
          d="M188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 0 1 0 5.069h-53.215a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 4 } as React.CSSProperties}
        />
        <path
          d="M181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 1 1 0 5.068h-60.817a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 5 } as React.CSSProperties}
        />
        <path
          d="M172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 1 1 0 5.068h-69.686a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 6 } as React.CSSProperties}
        />
        <path
          d="M164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 1 1 0 5.068h-77.288a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 7 } as React.CSSProperties}
        />
        <path
          d="M157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 1 1 0 5.068h-84.89a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 8 } as React.CSSProperties}
        />
        <path
          d="M149.544 202.759a2.535 2.535 0 0 1 2.535-2.534h92.492a2.535 2.535 0 0 1 0 5.068h-92.492a2.534 2.534 0 0 1-2.535-2.534z"
          style={{ "--index": 9 } as React.CSSProperties}
        />
        <path
          d="M141.942 212.895a2.535 2.535 0 0 1 2.534-2.534h100.095a2.535 2.535 0 0 1 0 5.068H144.476a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 10 } as React.CSSProperties}
        />
        <path
          d="M134.34 223.031a2.535 2.535 0 0 1 2.534-2.534h107.697a2.535 2.535 0 0 1 0 5.068H136.874a2.534 2.534 0 0 1-2.534-2.534z"
          style={{ "--index": 11 } as React.CSSProperties}
        />
        <path
          d="M126.738 233.167a2.535 2.535 0 0 1 2.534-2.534h115.299a2.535 2.535 0 0 1 0 5.069H129.272a2.535 2.535 0 0 1-2.534-2.535z"
          style={{ "--index": 12 } as React.CSSProperties}
        />
        <path
          d="M119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 1 1 0 5.068H121.67a2.535 2.535 0 0 1-2.534-2.534z"
          style={{ "--index": 13 } as React.CSSProperties}
        />
        <path
          d="M111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 1 1 0 5.068H114.068a2.535 2.535 0 0 1-2.534-2.534z"
          style={{ "--index": 14 } as React.CSSProperties}
        />
        <path
          d="M109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 1 1 0 5.068h-195.12a2.535 2.535 0 0 1-2.534-2.534z"
          style={{ "--index": 15 } as React.CSSProperties}
        />
        <path
          d="M120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 1 1 0 5.068H122.937a2.535 2.535 0 0 1-2.534-2.534z"
          style={{ "--index": 16 } as React.CSSProperties}
        />
        <path
          d="M297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 17 } as React.CSSProperties}
        />
        <path
          d="M290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 18 } as React.CSSProperties}
        />
        <path
          d="M282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 1 1 0-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 19 } as React.CSSProperties}
        />
        <path
          d="M274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 1 1 0-5.068h92.492a2.535 2.535 0 0 1 2.534 2.534z"
          style={{ "--index": 20 } as React.CSSProperties}
        />
        <path
          d="M267.377 324.393a2.535 2.535 0 0 1-2.534 2.534h-84.89a2.534 2.534 0 1 1 0-5.069h84.89a2.535 2.535 0 0 1 2.534 2.535z"
          style={{ "--index": 21 } as React.CSSProperties}
        />
        <path
          d="M259.775 334.529a2.535 2.535 0 0 1-2.534 2.534h-77.288a2.534 2.534 0 1 1 0-5.068h77.288a2.534 2.534 0 0 1 2.534 2.534z"
          style={{ "--index": 22 } as React.CSSProperties}
        />
        <path
          d="M252.173 344.665a2.535 2.535 0 0 1-2.534 2.534h-69.686a2.534 2.534 0 1 1 0-5.068h69.686a2.534 2.534 0 0 1 2.534 2.534z"
          style={{ "--index": 23 } as React.CSSProperties}
        />
        <path
          d="M243.304 354.801a2.535 2.535 0 0 1-2.534 2.534h-60.817a2.534 2.534 0 1 1 0-5.068h60.817a2.534 2.534 0 0 1 2.534 2.534z"
          style={{ "--index": 24 } as React.CSSProperties}
        />
        <path
          d="M235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 1 1 0-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534z"
          style={{ "--index": 25 } as React.CSSProperties}
        />
        <path
          d="M228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 1 1 0-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 26 } as React.CSSProperties}
        />
        <path
          d="M220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 1 1 0-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 27 } as React.CSSProperties}
        />
        <path
          d="M212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 1 1 0-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 28 } as React.CSSProperties}
        />
        <path
          d="M201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 0 1 0-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534z"
          style={{ "--index": 29 } as React.CSSProperties}
        />
      </g>
      <defs>
        <radialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(90 36 176.262) scale(288.739 199.426)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <linearGradient id="b" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#7877C6" />
          <stop offset={1} stopColor="#6663F6" />
        </linearGradient>
        <filter
          id="a"
          width={width * (424.523 / 425)}
          height={width * (517.016 / 425)}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_1706_102550" stdDeviation={50} />
        </filter>
      </defs>
    </svg>
  );
}
