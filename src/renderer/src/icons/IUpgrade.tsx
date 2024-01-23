import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill={'currentColor'}
    {...props}
  >
    <path d="M512 55.257c-251.83 0-456.692 204.862-456.692 456.692S260.17 968.64 512 968.64 968.692 763.78 968.692 511.95 763.83 55.257 512 55.257zm0 820.265c-200.461 0-363.573-163.112-363.573-363.573S311.54 148.376 512 148.376 875.573 311.488 875.573 511.95 712.46 875.522 512 875.522z" />
    <path d="M548.838 302.687c-8.493-8.493-19.647-12.688-31.108-13.098-1.228-.204-2.455-.102-3.683-.204-1.228.102-2.456 0-3.684.204-11.461.41-22.615 4.605-31.108 13.098l-159.12 159.019c-18.215 18.214-18.215 47.685 0 65.797 18.214 18.214 47.582 18.214 65.796 0l79.51-79.51v240.063c0 25.684 20.875 46.56 46.559 46.56.716 0 1.33-.205 1.944-.205.614 0 1.228.204 1.944.204 25.685 0 46.56-20.875 46.56-46.559V447.891l79.509 79.51c18.214 18.214 47.583 18.214 65.797 0 18.215-18.113 18.215-47.583 0-65.798L548.838 302.687z" />
  </svg>
)
export default SvgComponent