import type { TransferFunctionPoint } from './types';

export class TransferFunctionEditor {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private points: TransferFunctionPoint[];
  private histogram: number[];
  private selectedPoint: number | null = null;
  private isDragging: boolean = false;
  private onChange: (points: TransferFunctionPoint[]) => void;
  private valueRange: { min: number; max: number };

  constructor(
    container: HTMLElement,
    initialPoints: TransferFunctionPoint[],
    histogram: number[],
    valueRange: { min: number; max: number },
    onChange: (points: TransferFunctionPoint[]) => void
  ) {
    this.container = container;
    this.points = [...initialPoints];
    this.histogram = histogram;
    this.valueRange = valueRange;
    this.onChange = onChange;
    
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.cursor = 'crosshair';
    this.container.appendChild(this.canvas);
    
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2D context');
    this.ctx = ctx;
    
    this.resizeCanvas();
    this.setupEventListeners();
    this.render();
  }

  private resizeCanvas(): void {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  private setupEventListeners(): void {
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseUp.bind(this));
    this.canvas.addEventListener('dblclick', this.onDoubleClick.bind(this));
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.render();
    });
  }

  private getCanvasCoords(): { width: number; height: number } {
    return {
      width: this.canvas.width / (window.devicePixelRatio || 1),
      height: this.canvas.height / (window.devicePixelRatio || 1),
    };
  }

  private onMouseDown(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { width, height } = this.getCanvasCoords();
    
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      const px = point.value * width;
      const py = (1 - point.opacity) * height;
      const dist = Math.sqrt((x - px) ** 2 + (y - py) ** 2);
      
      if (dist < 10) {
        this.selectedPoint = i;
        this.isDragging = true;
        return;
      }
    }
    
    const newPoint: TransferFunctionPoint = {
      value: Math.max(0, Math.min(1, x / width)),
      color: { r: 128, g: 128, b: 128 },
      opacity: Math.max(0, Math.min(1, 1 - y / height)),
    };
    
    this.points.push(newPoint);
    this.points.sort((a, b) => a.value - b.value);
    this.selectedPoint = this.points.indexOf(newPoint);
    this.isDragging = true;
    
    this.notifyChange();
    this.render();
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.isDragging || this.selectedPoint === null) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const { width, height } = this.getCanvasCoords();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    x = Math.max(5, Math.min(width - 5, x));
    y = Math.max(5, Math.min(height - 5, y));
    
    const point = this.points[this.selectedPoint];
    const minValue = this.selectedPoint > 0 ? this.points[this.selectedPoint - 1].value + 0.01 : 0;
    const maxValue = this.selectedPoint < this.points.length - 1 ? this.points[this.selectedPoint + 1].value - 0.01 : 1;
    
    point.value = Math.max(minValue, Math.min(maxValue, x / width));
    point.opacity = Math.max(0, Math.min(1, 1 - y / height));
    
    this.notifyChange();
    this.render();
  }

  private onMouseUp(): void {
    this.isDragging = false;
  }

  private onDoubleClick(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { width, height } = this.getCanvasCoords();
    
    for (let i = 1; i < this.points.length - 1; i++) {
      const point = this.points[i];
      const px = point.value * width;
      const py = (1 - point.opacity) * height;
      const dist = Math.sqrt((x - px) ** 2 + (y - py) ** 2);
      
      if (dist < 10) {
        e.preventDefault();
        this.points.splice(i, 1);
        this.selectedPoint = null;
        this.notifyChange();
        this.render();
        return;
      }
    }
    
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      const px = point.value * width;
      const py = (1 - point.opacity) * height;
      const dist = Math.sqrt((x - px) ** 2 + (y - py) ** 2);
      
      if (dist < 10) {
        const color = this.promptColor(point.color);
        if (color) {
          point.color = color;
          this.notifyChange();
          this.render();
        }
        return;
      }
    }
  }

  private promptColor(current: { r: number; g: number; b: number }): { r: number; g: number; b: number } | null {
    const r = prompt('Red (0-255):', current.r.toString());
    const g = prompt('Green (0-255):', current.g.toString());
    const b = prompt('Blue (0-255):', current.b.toString());
    
    if (r === null || g === null || b === null) return null;
    
    return {
      r: Math.max(0, Math.min(255, parseInt(r) || 0)),
      g: Math.max(0, Math.min(255, parseInt(g) || 0)),
      b: Math.max(0, Math.min(255, parseInt(b) || 0)),
    };
  }

  private notifyChange(): void {
    this.onChange([...this.points]);
  }

  private render(): void {
    const { width, height } = this.getCanvasCoords();
    const ctx = this.ctx;
    
    ctx.clearRect(0, 0, width, height);
    
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);
    
    if (this.histogram.length > 0) {
      const maxCount = Math.max(...this.histogram);
      ctx.fillStyle = 'rgba(100, 100, 150, 0.3)';
      
      for (let i = 0; i < this.histogram.length; i++) {
        const barWidth = width / this.histogram.length;
        const barHeight = (this.histogram[i] / maxCount) * height;
        ctx.fillRect(i * barWidth, height - barHeight, barWidth, barHeight);
      }
    }
    
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    for (const point of this.points) {
      const color = `rgb(${point.color.r}, ${point.color.g}, ${point.color.b})`;
      gradient.addColorStop(point.value, color);
    }
    
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = gradient;
    ctx.fillRect(0, height * 0.85, width, height * 0.15);
    ctx.globalAlpha = 1;
    
    ctx.beginPath();
    ctx.moveTo(0, height - this.points[0].opacity * height);
    
    for (let i = 1; i < this.points.length; i++) {
      const x = this.points[i].value * width;
      const y = height - this.points[i].opacity * height;
      ctx.lineTo(x, y);
    }
    
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    
    const opacityGradient = ctx.createLinearGradient(0, 0, 0, height);
    opacityGradient.addColorStop(0, 'rgba(100, 150, 255, 0.4)');
    opacityGradient.addColorStop(1, 'rgba(100, 150, 255, 0.1)');
    ctx.fillStyle = opacityGradient;
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(0, height - this.points[0].opacity * height);
    for (let i = 1; i < this.points.length; i++) {
      const x = this.points[i].value * width;
      const y = height - this.points[i].opacity * height;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#6496ff';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      const x = point.value * width;
      const y = height - point.opacity * height;
      
      ctx.beginPath();
      ctx.arc(x, y, this.selectedPoint === i ? 8 : 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${point.color.r}, ${point.color.g}, ${point.color.b})`;
      ctx.fill();
      ctx.strokeStyle = this.selectedPoint === i ? '#fff' : '#666';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    ctx.fillStyle = '#999';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(this.formatValue(this.valueRange.min), 5, height - 5);
    ctx.textAlign = 'right';
    ctx.fillText(this.formatValue(this.valueRange.max), width - 5, height - 5);
  }

  private formatValue(value: number): string {
    if (Math.abs(value) >= 1000) {
      return value.toFixed(0);
    }
    return value.toFixed(1);
  }

  setPoints(points: TransferFunctionPoint[]): void {
    this.points = [...points];
    this.render();
  }

  getPoints(): TransferFunctionPoint[] {
    return [...this.points];
  }

  dispose(): void {
    this.container.removeChild(this.canvas);
  }
}
