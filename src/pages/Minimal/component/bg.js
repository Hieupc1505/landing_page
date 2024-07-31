import { Box } from "@mui/material";

const SvgComponent = () => {
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1440 1080"
                width={"100%"}
                height={"100%"}
            >
                <defs>
                    <radialGradient
                        id="mask_gradient_id"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(720 0 0 420 720 560)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                        <stop
                            offset="100%"
                            stopColor="#FFFFFF"
                            stopOpacity="0.08"
                        />
                    </radialGradient>
                    <mask id="mask_id">
                        <ellipse
                            cx="50%"
                            cy="50%"
                            rx="50%"
                            ry="36%"
                            fill="url(#mask_gradient_id)"
                        />
                    </mask>
                </defs>
                <g mask="url(#mask_id)">
                    <path
                        d="M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1"
                        opacity="1"
                        style={{
                            strokeDasharray: "var(--stroke-dasharray)",
                            stroke: "var(--hero-circle-stroke-color)",
                            strokeWidth: "var(--hero-circle-stroke-width)",
                            transform:
                                "translate(calc(50% - 480px), calc(50% - 80px))",
                        }}
                    />
                    <path
                        d="M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1"
                        opacity="1"
                        style={{
                            strokeDasharray: "var(--stroke-dasharray)",
                            stroke: "var(--hero-circle-stroke-color)",
                            strokeWidth: "var(--hero-circle-stroke-width)",
                            transform:
                                "translate(calc(50% + 400px), calc(50% + 80px))",
                        }}
                    />
                    <circle
                        cx="50%"
                        cy="50%"
                        fill="var(--hero-circle-stroke-color)"
                        r="5"
                        style={{
                            transform:
                                "translate(calc(0% - 200px), calc(0% + 200px))",
                        }}
                    />
                    <path
                        d="M8 0V16M16 8.08889H0"
                        stroke="var(--hero-plus-stroke-color)"
                        opacity="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                        style={{
                            transform:
                                "translate(calc(50% - 448px), calc(50% - 128px))",
                        }}
                    />
                    <path
                        d="M8 0V16M16 8.08889H0"
                        stroke="var(--hero-plus-stroke-color)"
                        opacity="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                        style={{
                            transform:
                                "translate(calc(50% + 432px), calc(50% + 192px))",
                        }}
                    />
                    {[...Array(6).keys()].map((i) => (
                        <line
                            key={`line-${i}`}
                            x1="0"
                            x2="100%"
                            y1="50%"
                            y2="50%"
                            strokeOpacity="1"
                            style={{
                                transform: `translateY(calc(${i} * var(--stroke-spacing) + var(--stroke-spacing) / 2) * -1)`,
                                stroke: "var(--hero-line-stroke-color)",
                                strokeDasharray: "var(--stroke-dasharray)",
                                strokeWidth: "var(--hero-line-stroke-width)",
                            }}
                        />
                    ))}
                    {[...Array(6).keys()].map((i) => (
                        <line
                            key={`line-${i + 6}`}
                            x1="0"
                            x2="100%"
                            y1="50%"
                            y2="50%"
                            strokeOpacity="1"
                            style={{
                                transform: `translateY(calc(${
                                    5 - i
                                } * var(--stroke-spacing) + var(--stroke-spacing) / 2))`,
                                stroke: "var(--hero-line-stroke-color)",
                                strokeDasharray: "var(--stroke-dasharray)",
                                strokeWidth: "var(--hero-line-stroke-width)",
                            }}
                        />
                    ))}
                    {[...Array(6).keys()].map((i) => (
                        <line
                            key={`line-x-${i}`}
                            x1="50%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                            strokeOpacity="1"
                            style={{
                                transform: `translateX(calc(${i} * var(--stroke-spacing) + var(--stroke-spacing) / 2) * -1)`,
                                stroke: "var(--hero-line-stroke-color)",
                                strokeDasharray: "var(--stroke-dasharray)",
                                strokeWidth: "var(--hero-line-stroke-width)",
                            }}
                        />
                    ))}
                    {[...Array(6).keys()].map((i) => (
                        <line
                            key={`line-x-${i + 6}`}
                            x1="50%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                            strokeOpacity="1"
                            style={{
                                transform: `translateX(calc(${
                                    5 - i
                                } * var(--stroke-spacing) + var(--stroke-spacing) / 2))`,
                                stroke: "var(--hero-line-stroke-color)",
                                strokeDasharray: "var(--stroke-dasharray)",
                                strokeWidth: "var(--hero-line-stroke-width)",
                            }}
                        />
                    ))}
                </g>
            </svg>
        </Box>
    );
};

export default SvgComponent;
