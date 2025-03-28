
import { useRef, useEffect } from 'react';

interface PlanetProgressTrackerProps {
  progress: number;
  questionNumber: number;
  totalQuestions: number;
}

const PlanetProgressTracker = ({ progress, questionNumber, totalQuestions }: PlanetProgressTrackerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with high DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 300 * dpr;
    canvas.height = 300 * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = '300px';
    canvas.style.height = '300px';

    // Clear canvas
    ctx.clearRect(0, 0, 300, 300);

    // Draw planet
    const centerX = 150;
    const centerY = 150;
    const planetRadius = 70;

    // Planet glow effect
    const gradient = ctx.createRadialGradient(
      centerX, centerY, planetRadius * 0.8,
      centerX, centerY, planetRadius * 1.5
    );
    gradient.addColorStop(0, 'rgba(90, 54, 135, 0.3)'); // Purple glow
    gradient.addColorStop(1, 'rgba(10, 17, 40, 0)'); // Transparent
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Planet base
    ctx.fillStyle = '#1A1F2C'; // Dark purple base
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
    ctx.fill();

    // Planet progress fill
    const progressAngle = (progress / 100) * Math.PI * 2;
    ctx.fillStyle = '#5A3687'; // Purple fill
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, planetRadius, -Math.PI / 2, progressAngle - Math.PI / 2);
    ctx.closePath();
    ctx.fill();

    // Planet rim/border
    ctx.strokeStyle = '#9B87F5'; // Light purple border
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw outer ring (progress tracker)
    const ringRadius = planetRadius + 25;
    const ringWidth = 10;

    // Full ring background (gray)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = ringWidth;
    ctx.beginPath();
    ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Progress ring (purple)
    ctx.strokeStyle = '#9B87F5';
    ctx.lineWidth = ringWidth;
    ctx.beginPath();
    ctx.arc(centerX, centerY, ringRadius, -Math.PI / 2, progressAngle - Math.PI / 2);
    ctx.stroke();

    // Draw a second decorative ring (tilted)
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(Math.PI / 6); // Tilt angle
    ctx.scale(1, 0.3); // Flatten to create the elliptical effect
    
    // Outer decorative ring - background
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, ringRadius + 15, 0, Math.PI * 2);
    ctx.stroke();
    
    // Outer decorative ring - progress
    ctx.strokeStyle = 'rgba(155, 135, 245, 0.3)';
    ctx.beginPath();
    ctx.arc(0, 0, ringRadius + 15, -Math.PI / 2, progressAngle - Math.PI / 2);
    ctx.stroke();
    
    ctx.restore();

    // Add some surface details to the planet
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (planetRadius * 0.7);
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      const size = Math.random() * 15 + 5;
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add percentage text in the middle
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${Math.round(progress)}%`, centerX, centerY);

  }, [progress]);

  return (
    <div className="flex flex-col items-center">
      <canvas 
        ref={canvasRef} 
        className="mb-4"
        style={{ width: '300px', height: '300px' }}
      />
      <div className="text-center text-purple-300">
        <p className="text-xl mb-1">Question {questionNumber} of {totalQuestions}</p>
        <p className="text-sm opacity-75">Complete the assessment to continue your cosmic journey</p>
      </div>
    </div>
  );
};

export default PlanetProgressTracker;
