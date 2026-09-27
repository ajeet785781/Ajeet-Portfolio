import React, { useRef, useEffect } from 'react';
import { Radio, Cpu, Activity, Zap, Layers } from 'lucide-react';

export default function HeroVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    // Handle high DPI
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight || 460;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking for interactive deflection
    let mouse = { x: width / 2, y: height / 2, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = width / 2;
      mouse.y = height / 2;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Generate Neural Nodes
    const nodeCount = 22;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 2,
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#38bdf8' : '#818cf8',
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Circuit trace paths
    const traces = [
      { startX: 40, startY: 60, points: [[120, 60], [160, 100], [240, 100], [280, 140]] },
      { startX: width - 50, startY: 80, points: [[width - 130, 80], [width - 170, 120], [width - 230, 120]] },
      { startX: 60, startY: height - 70, points: [[140, height - 70], [180, height - 110], [260, height - 110]] },
      { startX: width - 60, startY: height - 90, points: [[width - 140, height - 90], [width - 180, height - 130], [width - 260, height - 130]] }
    ];

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle PCB grid background
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 32;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Circuit Traces with glowing pulse dots
      traces.forEach((trace) => {
        ctx.beginPath();
        ctx.moveTo(trace.startX, trace.startY);
        trace.points.forEach((pt) => ctx.lineTo(pt[0], pt[1]));
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Terminal circuit pads
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(trace.startX, trace.startY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Animated signal packet along trace
        const totalPoints = [ [trace.startX, trace.startY], ...trace.points ];
        const packetProgress = (time * 0.4) % (totalPoints.length - 1);
        const segIdx = Math.floor(packetProgress);
        const segT = packetProgress - segIdx;
        const p1 = totalPoints[segIdx];
        const p2 = totalPoints[segIdx + 1];

        if (p1 && p2) {
          const packetX = p1[0] + (p2[0] - p1[0]) * segT;
          const packetY = p1[1] + (p2[1] - p1[1]) * segT;

          ctx.shadowBlur = 10;
          ctx.shadowColor = '#38bdf8';
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 3. Central RF Antenna Array & Radiating EM Waves
      const centerX = width * 0.52;
      const centerY = height * 0.5;

      // Concentric RF waves propagating outward
      for (let w = 0; w < 5; w++) {
        const waveRadius = ((time * 30 + w * 45) % 220);
        const alpha = Math.max(0, 1 - waveRadius / 220) * 0.35;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius, -Math.PI * 0.7, Math.PI * 0.7);
        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.lineWidth = 1.8;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Antenna array element feedline
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX - 40, centerY + 60);
      ctx.lineTo(centerX + 40, centerY + 60);
      ctx.stroke();

      // 4 array patch elements
      for (let p = -2; p <= 1; p++) {
        const patchX = centerX + p * 24 + 12;
        const patchY = centerY + 45;
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1.5;
        ctx.fillRect(patchX - 6, patchY - 8, 12, 16);
        ctx.strokeRect(patchX - 6, patchY - 8, 12, 16);

        // Core RF emitter node
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(patchX, patchY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Neural Network Synaptic Connections & Nodes
      // Update nodes positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas boundaries
        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;

        // Subtle mouse attraction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 10) {
            node.x += (dx / dist) * 0.4;
            node.y += (dy / dist) * 0.4;
          }
        }
      });

      // Draw synaptic connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw neural nodes
      nodes.forEach((node) => {
        const pulseSize = node.radius + Math.sin(time * 3 + node.pulse) * 0.8;
        
        ctx.shadowBlur = 8;
        ctx.shadowColor = node.color;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, pulseSize), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Directional Beam Vector (Deep Learning Directed)
      const beamAngle = Math.sin(time * 0.7) * 0.65; // Dynamic steer angle
      const beamLength = 160;
      const targetX = centerX + Math.sin(beamAngle) * beamLength;
      const targetY = centerY - Math.cos(beamAngle) * beamLength;

      // Draw main radiation beam envelope
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY + 30);
      const angleLeft = beamAngle - 0.22;
      const angleRight = beamAngle + 0.22;
      ctx.lineTo(centerX + Math.sin(angleLeft) * beamLength, centerY - Math.cos(angleLeft) * beamLength);
      ctx.lineTo(centerX + Math.sin(angleRight) * beamLength, centerY - Math.cos(angleRight) * beamLength);
      ctx.closePath();

      const beamGrad = ctx.createRadialGradient(centerX, centerY + 30, 10, targetX, targetY, beamLength);
      beamGrad.addColorStop(0, 'rgba(6, 182, 212, 0.45)');
      beamGrad.addColorStop(0.7, 'rgba(56, 189, 248, 0.2)');
      beamGrad.addColorStop(1, 'rgba(129, 140, 248, 0)');
      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // Main beam vector line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY + 30);
      ctx.lineTo(targetX, targetY);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Beam target point
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#22d3ee';
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="hero-visual-wrapper">
      {/* Background ambient halo */}
      <div className="hero-visual-glow" />

      {/* Main Interactive Canvas */}
      <div className="canvas-container">
        <canvas ref={canvasRef} className="hero-interactive-canvas" />
      </div>

      {/* Futuristic Engineering HUD Overlay Cards */}
      <div className="hud-card hud-top-left">
        <div className="hud-header">
          <Radio size={14} className="hud-icon text-cyan" />
          <span className="hud-title">RF / EM SYNTHESIS</span>
        </div>
        <div className="hud-metric">
          <span className="hud-value">10.0 GHz</span>
          <span className="hud-sub">X-Band Resonator</span>
        </div>
      </div>

      <div className="hud-card hud-bottom-right">
        <div className="hud-header">
          <Cpu size={14} className="hud-icon text-purple" />
          <span className="hud-title">DEEP LEARNING BEAMFORMING</span>
        </div>
        <div className="hud-metric">
          <span className="hud-value">Real-Time Phase Shift</span>
          <span className="hud-sub">Neural Beam Steering Matrix</span>
        </div>
      </div>

      <div className="hud-status-bar">
        <span className="hud-pulse-dot" />
        <span className="hud-status-text">ECE HARDWARE & AI ARCHITECTURE</span>
      </div>
    </div>
  );
}
