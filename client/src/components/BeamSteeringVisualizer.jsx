import React, { useState, useRef, useEffect } from 'react';
import { Radio, Cpu, Sliders, Play, RotateCcw, Activity } from 'lucide-react';

export default function BeamSteeringVisualizer() {
  const [steerAngle, setSteerAngle] = useState(25); // degrees
  const [autoSweep, setAutoSweep] = useState(true);
  const canvasRef = useRef(null);

  // Auto sweep angle if enabled
  useEffect(() => {
    if (!autoSweep) return;
    let angle = steerAngle;
    let direction = 1;

    const interval = setInterval(() => {
      angle += direction * 0.8;
      if (angle >= 50) {
        direction = -1;
      } else if (angle <= -50) {
        direction = 1;
      }
      setSteerAngle(Math.round(angle * 10) / 10);
    }, 40);

    return () => clearInterval(interval);
  }, [autoSweep, steerAngle]);

  // Canvas drawing of radiation pattern and phased array
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth || 520;
    const height = 360;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const originX = width / 2;
    const originY = height - 55;

    // 1. Draw polar radial grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    [60, 120, 180, 240].forEach((r) => {
      ctx.beginPath();
      ctx.arc(originX, originY, r, Math.PI, 0);
      ctx.stroke();
    });

    // Radial degree lines (-60°, -30°, 0°, 30°, 60°)
    [-60, -30, 0, 30, 60].forEach((deg) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX + Math.cos(rad) * 250, originY + Math.sin(rad) * 250);
      ctx.stroke();

      // Degree labels
      ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      const labelX = originX + Math.cos(rad) * 262;
      const labelY = originY + Math.sin(rad) * 262;
      ctx.fillText(`${deg}°`, labelX, labelY);
    });

    // 2. Synthesize Array Radiation Pattern
    // Array Factor: AF(theta) = sum_{n=0}^{N-1} exp(j * n * (k*d*(cos(theta) - cos(theta_0))))
    const N = 8; // 8-element linear array
    const targetRad = ((steerAngle - 90) * Math.PI) / 180;
    const targetTheta = (steerAngle * Math.PI) / 180;

    ctx.beginPath();
    ctx.moveTo(originX, originY);

    const points = [];
    for (let deg = -85; deg <= 85; deg += 1) {
      const theta = (deg * Math.PI) / 180;
      // Array factor formula for d = lambda / 2
      const psi = Math.PI * (Math.sin(theta) - Math.sin(targetTheta));
      let af = 0;
      if (Math.abs(psi) < 1e-6) {
        af = 1;
      } else {
        af = Math.abs(Math.sin((N * psi) / 2) / (N * Math.sin(psi / 2)));
      }

      // Convert to display radius
      const lobeRadius = 30 + af * 210;
      const plotRad = ((deg - 90) * Math.PI) / 180;
      const px = originX + Math.cos(plotRad) * lobeRadius;
      const py = originY + Math.sin(plotRad) * lobeRadius;
      points.push({ x: px, y: py });
    }

    // Fill beam pattern
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    points.forEach((pt) => ctx.lineTo(pt.x, pt.y));
    ctx.closePath();

    const beamGradient = ctx.createRadialGradient(
      originX,
      originY,
      20,
      originX + Math.cos(targetRad) * 220,
      originY + Math.sin(targetRad) * 220,
      240
    );
    beamGradient.addColorStop(0, 'rgba(6, 182, 212, 0.45)');
    beamGradient.addColorStop(0.6, 'rgba(56, 189, 248, 0.25)');
    beamGradient.addColorStop(1, 'rgba(129, 140, 248, 0.05)');
    ctx.fillStyle = beamGradient;
    ctx.fill();

    // Stroke beam boundary
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#06b6d4';
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 3. Draw Main Beam Steering Vector
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    const steerVecX = originX + Math.cos(targetRad) * 240;
    const steerVecY = originY + Math.sin(targetRad) * 240;
    ctx.lineTo(steerVecX, steerVecY);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Vector Tip Indicator
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(steerVecX, steerVecY, 5, 0, Math.PI * 2);
    ctx.fill();

    // 4. Draw Linear Antenna Array Elements at base
    const numElements = 8;
    const spacing = 34;
    const arrayStartX = originX - ((numElements - 1) * spacing) / 2;

    // Ground plane line
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(arrayStartX - 25, originY + 12);
    ctx.lineTo(arrayStartX + (numElements - 1) * spacing + 25, originY + 12);
    ctx.stroke();

    for (let i = 0; i < numElements; i++) {
      const elemX = arrayStartX + i * spacing;
      const elemY = originY;

      // Phase calculation for element
      const phaseShiftDeg = Math.round((-i * 180 * Math.sin(targetTheta)) % 360);

      // Antenna patch
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.fillRect(elemX - 9, elemY - 14, 18, 20);
      ctx.strokeRect(elemX - 9, elemY - 14, 18, 20);

      // Glow center
      ctx.fillStyle = '#06b6d4';
      ctx.beginPath();
      ctx.arc(elemX, elemY - 4, 3, 0, Math.PI * 2);
      ctx.fill();

      // Phase readout below each element
      ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${phaseShiftDeg}°`, elemX, originY + 28);
    }
  }, [steerAngle]);

  return (
    <div className="beam-visualizer-container card-glass">
      {/* Top Telemetry Bar */}
      <div className="visualizer-header">
        <div className="vis-badge-group">
          <div className="vis-status-pill">
            <span className="live-dot" />
            <span>Interactive RF Simulation</span>
          </div>
          <span className="badge badge-purple">8-Element Phased Array</span>
        </div>

        <div className="vis-controls-quick">
          <button
            type="button"
            className={`btn-vis-mode ${autoSweep ? 'active' : ''}`}
            onClick={() => setAutoSweep(!autoSweep)}
          >
            <Activity size={14} />
            <span>{autoSweep ? 'Pause Auto-Sweep' : 'Auto-Sweep'}</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Plot */}
      <div className="vis-canvas-wrap">
        <canvas ref={canvasRef} className="beam-canvas" />
      </div>

      {/* Interactive Controls & Readouts */}
      <div className="visualizer-controls">
        <div className="slider-control-group">
          <div className="slider-label-row">
            <span className="slider-label">
              <Sliders size={14} className="text-cyan" />
              Main Lobe Steering Angle (θ):
            </span>
            <span className="slider-val-badge">{steerAngle}°</span>
          </div>
          <input
            type="range"
            min="-50"
            max="50"
            step="1"
            value={steerAngle}
            onChange={(e) => {
              setAutoSweep(false);
              setSteerAngle(Number(e.target.value));
            }}
            className="beam-range-slider"
          />
        </div>

        {/* Quick Angle Presets */}
        <div className="preset-buttons-row">
          <span className="presets-label">Target Presets:</span>
          {[-45, -25, 0, 25, 45].map((preset) => (
            <button
              key={preset}
              type="button"
              className={`preset-btn ${steerAngle === preset ? 'active' : ''}`}
              onClick={() => {
                setAutoSweep(false);
                setSteerAngle(preset);
              }}
            >
              {preset > 0 ? `+${preset}°` : `${preset}°`}
            </button>
          ))}
        </div>

        {/* Neural Network Phase Estimation Telemetry */}
        <div className="vis-telemetry-grid">
          <div className="telemetry-box">
            <span className="tel-label">RF Frequency</span>
            <span className="tel-val">10 GHz (X-Band)</span>
          </div>
          <div className="telemetry-box">
            <span className="tel-label">Inter-Element Gap</span>
            <span className="tel-val">d = λ / 2 (15 mm)</span>
          </div>
          <div className="telemetry-box">
            <span className="tel-label">Phase Shift (Δφ)</span>
            <span className="tel-val">
              {Math.round(-180 * Math.sin((steerAngle * Math.PI) / 180))}°
            </span>
          </div>
          <div className="telemetry-box">
            <span className="tel-label">Inference Model</span>
            <span className="tel-val">Deep Neural Network</span>
          </div>
        </div>
      </div>
    </div>
  );
}
