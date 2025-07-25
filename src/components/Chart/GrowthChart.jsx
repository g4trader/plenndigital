import React from 'react';

const GrowthChart = () => {
  const dataPoints = [
    { x: 10, y: 80, label: 'Jan' },
    { x: 25, y: 65, label: 'Fev' },
    { x: 40, y: 45, label: 'Mar' },
    { x: 55, y: 30, label: 'Abr' },
    { x: 70, y: 20, label: 'Mai' },
    { x: 85, y: 15, label: 'Jun' }
  ];

  // Criar path SVG para a curva
  const createPath = (points) => {
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cp1x = prev.x + (curr.x - prev.x) * 0.3;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * 0.3;
      const cp2y = curr.y;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  const pathData = createPath(dataPoints);

  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Background Circle */}
      <div className="absolute w-32 h-32 md:w-40 md:h-40 border-2 border-pink-500/30 rounded-full flex items-center justify-center animate-pulse">
        <div className="w-20 h-20 md:w-24 md:h-24 border border-pink-500/50 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* SVG Chart */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1"/>
          </linearGradient>
          
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Area under curve */}
        <path
          d={`${pathData} L 85 95 L 10 95 Z`}
          fill="url(#areaGradient)"
          className="animate-pulse"
        />
        
        {/* Main curve */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="drop-shadow-lg"
        />
        
        {/* Data points */}
        {dataPoints.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="2"
              fill="#ec4899"
              stroke="#fff"
              strokeWidth="1"
              className="drop-shadow-sm"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              fill="none"
              stroke="#ec4899"
              strokeWidth="1"
              opacity="0.5"
              className="animate-ping"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Floating Metrics */}
      <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-pink-500/20 shadow-lg">
        <div className="text-pink-400 text-xs font-semibold">ROI</div>
        <div className="text-white text-lg font-bold">+1,250%</div>
      </div>

      <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20 shadow-lg">
        <div className="text-blue-400 text-xs font-semibold">Leads</div>
        <div className="text-white text-lg font-bold">+450%</div>
      </div>

      <div className="absolute top-1/2 left-2 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 border border-purple-500/20 shadow-lg transform -translate-y-1/2">
        <div className="text-purple-400 text-xs font-semibold">CAC</div>
        <div className="text-white text-sm font-bold">-65%</div>
      </div>
    </div>
  );
};

export default GrowthChart;

