"use client";

import React, { useEffect, useRef } from 'react';

export default function SchemaCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));

    function resizeCanvas() {
      if (!canvas) return;
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    function updateWaveData() {
      waveData.forEach(data => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = (py + 1) * canvas.height / 2;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 100;
        const g = 70 + intensity * 130;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center p-4">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 w-full max-w-xs">
        <div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float bg-black/40 backdrop-blur-sm">
            <div className="p-4 flex justify-center relative">
              <div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full animate-pulse" 
                    style={{ 
                      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', 
                      backgroundSize: '15px 15px' 
                    }} 
                  />
                </div>
                
                {/* SVG Schema Visualization */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                  {/* Database Table 1 */}
                  <rect x="50" y="50" width="80" height="60" rx="4" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1.5" className="animate-schemaPulse" />
                  <text x="90" y="75" textAnchor="middle" className="text-xs fill-indigo-300 font-medium">Users</text>
                  <line x1="90" y1="80" x2="90" y2="100" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                  <line x1="90" y1="100" x2="90" y2="110" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                  
                  {/* Database Table 2 */}
                  <rect x="270" y="50" width="80" height="60" rx="4" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1.5" className="animate-schemaPulse" />
                  <text x="310" y="75" textAnchor="middle" className="text-xs fill-indigo-300 font-medium">Posts</text>
                  <line x1="310" y1="80" x2="310" y2="100" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                  <line x1="310" y1="100" x2="310" y2="110" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                  
                  {/* Database Table 3 */}
                  <rect x="160" y="180" width="80" height="60" rx="4" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1.5" className="animate-schemaPulse" />
                  <text x="200" y="205" textAnchor="middle" className="text-xs fill-indigo-300 font-medium">Comments</text>
                  <line x1="200" y1="210" x2="200" y2="230" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                  
                  {/* Connection Lines */}
                  <path 
                    d="M 130 110 L 270 110 L 270 80" 
                    stroke="rgba(99, 102, 241, 0.5)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-dataStream"
                  />
                  <path 
                    d="M 200 180 L 200 110 L 130 110" 
                    stroke="rgba(99, 102, 241, 0.5)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-dataStream"
                  />
                  <path 
                    d="M 310 110 L 240 110 L 240 180" 
                    stroke="rgba(99, 102, 241, 0.5)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-dataStream"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="p-4">
              <span className="inline-block px-3 py-1 glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/30">
                Database
              </span>
              <h3 className="text-lg font-medium text-white mb-2">Schema Management</h3>
              <p className="text-white/70 mb-4 leading-relaxed text-xs">
                Design, optimize and maintain your database structure with powerful schema tools.
              </p>
              <div className="flex justify-between items-center">
                <a 
                  href="#" 
                  className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-indigo-400/30"
                >
                  Manage
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10">
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

