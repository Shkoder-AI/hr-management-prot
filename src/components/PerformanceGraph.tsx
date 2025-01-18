import React from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface PerformanceGraphProps {
  data: DataPoint[];
  height?: number;
}

export function PerformanceGraph({ data, height = 300 }: PerformanceGraphProps) {
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 800; // We'll make this responsive
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Calculate scales
  const maxValue = Math.max(...data.map(d => d.value));
  const yScale = (value: number) => (graphHeight * (1 - value / maxValue));
  const xScale = graphWidth / (data.length - 1);

  // Generate path for the line
  const pathData = data.map((point, index) => {
    const x = index * xScale;
    const y = yScale(point.value);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  // Generate area path (for gradient fill)
  const areaPath = `
    ${pathData} 
    L ${graphWidth} ${graphHeight} 
    L 0 ${graphHeight} 
    Z
  `;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        width={width}
        height={height}
        className="overflow-visible"
        style={{ minWidth: width }}
      >
        <defs>
          {/* Gradient for the area fill */}
          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0" />
          </linearGradient>
          {/* Gradient for the line */}
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Transform the graph to add padding */}
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          {/* Y-axis grid lines and labels */}
          {[0, 25, 50, 75, 100].map((tick) => {
            const y = yScale(tick);
            return (
              <g key={tick}>
                <line
                  x1={-10}
                  x2={graphWidth}
                  y1={y}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeDasharray={tick === 0 ? "" : "4,4"}
                />
                <text
                  x={-15}
                  y={y}
                  textAnchor="end"
                  alignmentBaseline="middle"
                  className="text-xs fill-gray-400"
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          {/* Area fill */}
          <path
            d={areaPath}
            fill="url(#areaGradient)"
            className="transition-all duration-300"
          />

          {/* Line */}
          <path
            d={pathData}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            className="transition-all duration-300"
          />

          {/* Data points */}
          {data.map((point, index) => (
            <g
              key={index}
              transform={`translate(${index * xScale}, ${yScale(point.value)})`}
              className="transition-all duration-300"
            >
              {/* Hover target (larger invisible circle) */}
              <circle
                r={12}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={(e) => {
                  const tooltip = e.currentTarget.nextSibling as SVGGElement;
                  tooltip.classList.remove('opacity-0');
                }}
                onMouseLeave={(e) => {
                  const tooltip = e.currentTarget.nextSibling as SVGGElement;
                  tooltip.classList.add('opacity-0');
                }}
              />

              {/* Tooltip */}
              <g
                className="opacity-0 transition-opacity duration-200"
                transform="translate(0, -20)"
              >
                <rect
                  x={-30}
                  y={-25}
                  width={60}
                  height={20}
                  rx={4}
                  fill="#1F2937"
                />
                <text
                  textAnchor="middle"
                  y={-12}
                  className="text-xs fill-white font-medium"
                >
                  {point.value}%
                </text>
              </g>

              {/* Visible data point */}
              <circle
                r={4}
                className="fill-purple-600 stroke-white stroke-2"
              />
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((point, index) => (
            <text
              key={index}
              x={index * xScale}
              y={graphHeight + 20}
              textAnchor="middle"
              className="text-xs fill-gray-400"
            >
              {point.label}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}