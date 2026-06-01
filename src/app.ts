import { NiftiLoader } from './data-loader';
import { VolumeTexture } from './volume-texture';
import { VolumeRenderer, type RenderMode } from './volume-renderer';
import { TransferFunctionEditor } from './transfer-function-editor';
import { MPRView } from './mpr-view';
import type { WindowLevel, TransferFunctionPoint, SegmentationLabel } from './types';

export class VolumeRenderApp {
  private container: HTMLElement;
  private loader: NiftiLoader;
  private volumeTexture: VolumeTexture | null = null;
  private volumeRenderer: VolumeRenderer | null = null;
  private tfEditor: TransferFunctionEditor | null = null;
  private mprViews: Map<string, MPRView> = new Map();
  private segLabels: SegmentationLabel[] = [];
  
  private elements: {
    fileInput: HTMLInputElement;
    segFileInput: HTMLInputElement;
    volumeContainer: HTMLElement;
    tfContainer: HTMLElement;
    mprContainer: HTMLElement;
    renderModeSelect: HTMLSelectElement;
    windowInput: HTMLInputElement;
    levelInput: HTMLInputElement;
    brightnessInput: HTMLInputElement;
    densityInput: HTMLInputElement;
    stepSizeInput: HTMLInputElement;
    isoValueInput: HTMLInputElement;
    segBlendInput: HTMLInputElement;
    windowValueDisplay: HTMLElement;
    levelValueDisplay: HTMLElement;
    brightnessValueDisplay: HTMLElement;
    densityValueDisplay: HTMLElement;
    stepSizeValueDisplay: HTMLElement;
    isoValueValueDisplay: HTMLElement;
    segBlendValueDisplay: HTMLElement;
    infoDisplay: HTMLElement;
    segLabelsContainer: HTMLElement;
  } | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.loader = new NiftiLoader();
    this.createUI();
    this.loadSyntheticData();
  }

  private createUI(): void {
    this.container.innerHTML = `
      <style>
        .app-container {
          display: flex;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .sidebar {
          width: 320px;
          background: #16162a;
          border-right: 1px solid #2a2a4a;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #2a2a4a;
        }
        
        .sidebar-title {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        
        .volume-view {
          flex: 1;
          min-height: 0;
          position: relative;
        }
        
        .mpr-views {
          height: 200px;
          display: flex;
          border-top: 1px solid #2a2a4a;
          flex-shrink: 0;
        }
        
        .mpr-view {
          flex: 1;
          position: relative;
          border-right: 1px solid #2a2a4a;
        }
        
        .mpr-view:last-child {
          border-right: none;
        }
        
        .mpr-label {
          position: absolute;
          top: 8px;
          left: 8px;
          font-size: 11px;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          padding: 2px 8px;
          border-radius: 4px;
          pointer-events: none;
        }
        
        .mpr-index {
          position: absolute;
          bottom: 8px;
          right: 8px;
          font-size: 11px;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          padding: 2px 8px;
          border-radius: 4px;
          pointer-events: none;
        }
        
        .tf-editor-container {
          height: 140px;
          background: #1a1a2e;
          border-radius: 6px;
          overflow: hidden;
        }
        
        .control-group {
          margin-bottom: 12px;
        }
        
        .control-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #aaa;
          margin-bottom: 6px;
        }
        
        .control-value {
          color: #6496ff;
          font-family: monospace;
        }
        
        input[type="range"] {
          width: 100%;
          height: 4px;
          -webkit-appearance: none;
          background: #2a2a4a;
          border-radius: 2px;
          outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          background: #6496ff;
          border-radius: 50%;
          cursor: pointer;
        }
        
        select {
          width: 100%;
          padding: 8px 12px;
          background: #2a2a4a;
          border: 1px solid #3a3a5a;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }
        
        select:focus {
          outline: none;
          border-color: #6496ff;
        }
        
        .file-input-label {
          display: block;
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #6496ff, #8b5cf6);
          border-radius: 6px;
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        
        .file-input-label:hover {
          opacity: 0.9;
        }
        
        .seg-file-input-label {
          display: block;
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          border-radius: 6px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        
        .seg-file-input-label:hover {
          opacity: 0.9;
        }
        
        input[type="file"] {
          display: none;
        }
        
        .info-text {
          font-size: 11px;
          color: #888;
          line-height: 1.6;
        }
        
        .info-text span {
          color: #aaa;
          font-family: monospace;
        }
        
        .preset-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .preset-btn {
          padding: 6px 12px;
          background: #2a2a4a;
          border: 1px solid #3a3a5a;
          border-radius: 4px;
          color: #fff;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .preset-btn:hover {
          background: #3a3a5a;
          border-color: #6496ff;
        }

        .seg-labels-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 8px;
        }

        .seg-label-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: #1a1a2e;
          border-radius: 4px;
          font-size: 11px;
        }

        .seg-label-color {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          border: 1px solid #3a3a5a;
          flex-shrink: 0;
          cursor: pointer;
        }

        .seg-label-name {
          flex: 1;
          color: #ccc;
        }

        .seg-label-opacity {
          width: 60px;
          height: 3px;
          -webkit-appearance: none;
          background: #2a2a4a;
          border-radius: 2px;
          outline: none;
        }

        .seg-label-opacity::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 10px;
          height: 10px;
          background: #6496ff;
          border-radius: 50%;
          cursor: pointer;
        }

        .seg-toggle {
          position: relative;
          width: 30px;
          height: 16px;
          background: #2a2a4a;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .seg-toggle.active {
          background: #6496ff;
        }

        .seg-toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          transition: transform 0.2s;
        }

        .seg-toggle.active::after {
          transform: translateX(14px);
        }

        .seg-remove-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          font-size: 14px;
          padding: 0 2px;
          line-height: 1;
        }

        .seg-remove-btn:hover {
          color: #ff6b6b;
        }

        .seg-empty-msg {
          font-size: 11px;
          color: #555;
          text-align: center;
          padding: 12px 0;
        }
      </style>
      
      <div class="app-container">
        <div class="sidebar">
          <div class="sidebar-section">
            <div class="sidebar-title">数据加载</div>
            <label class="file-input-label">
              <input type="file" id="fileInput" accept=".nii,.nii.gz">
              加载 NIfTI 文件 (.nii, .nii.gz)
            </label>
            <div style="margin-top: 12px; padding: 10px; background: #1a1a2e; border-radius: 6px;">
              <div class="info-text" id="infoDisplay">
                尺寸: <span>-</span><br>
                体素间距: <span>-</span><br>
                值范围: <span>-</span>
              </div>
            </div>
          </div>

          <div class="sidebar-section">
            <div class="sidebar-title">分割蒙版</div>
            <label class="seg-file-input-label">
              <input type="file" id="segFileInput" accept=".nii,.nii.gz">
              加载分割标签 (.nii, .nii.gz)
            </label>
            <div id="segLabelsContainer">
              <div class="seg-empty-msg">未加载分割文件</div>
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">渲染模式</div>
            <select id="renderModeSelect">
              <option value="composite">合成渲染 (Composite)</option>
              <option value="mip">最大密度投影 (MIP)</option>
              <option value="iso">等值面 (Iso-surface)</option>
            </select>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">窗宽窗位</div>
            <div class="control-group">
              <div class="control-label">
                <span>窗宽 (Window)</span>
                <span class="control-value" id="windowValue">--</span>
              </div>
              <input type="range" id="windowInput" min="1" max="1000" value="500">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>窗位 (Level)</span>
                <span class="control-value" id="levelValue">--</span>
              </div>
              <input type="range" id="levelInput" min="0" max="1000" value="500">
            </div>
            <div class="preset-buttons">
              <button class="preset-btn" data-preset="brain">脑部</button>
              <button class="preset-btn" data-preset="bone">骨骼</button>
              <button class="preset-btn" data-preset="lung">肺部</button>
              <button class="preset-btn" data-preset="soft">软组织</button>
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">传递函数</div>
            <div class="tf-editor-container" id="tfContainer"></div>
            <div style="margin-top: 8px; font-size: 10px; color: #666;">
              点击添加点 · 拖拽调节 · 双击删除/改色
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">渲染参数</div>
            <div class="control-group">
              <div class="control-label">
                <span>亮度</span>
                <span class="control-value" id="brightnessValue">1.5</span>
              </div>
              <input type="range" id="brightnessInput" min="0.1" max="3" step="0.1" value="1.5">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>密度</span>
                <span class="control-value" id="densityValue">1.0</span>
              </div>
              <input type="range" id="densityInput" min="0.1" max="3" step="0.1" value="1.0">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>步长</span>
                <span class="control-value" id="stepSizeValue">0.005</span>
              </div>
              <input type="range" id="stepSizeInput" min="0.001" max="0.02" step="0.001" value="0.005">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>等值面值</span>
                <span class="control-value" id="isoValueValue">0.5</span>
              </div>
              <input type="range" id="isoValueInput" min="0" max="1" step="0.01" value="0.5">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>分割叠加强度</span>
                <span class="control-value" id="segBlendValue">1.0</span>
              </div>
              <input type="range" id="segBlendInput" min="0" max="1" step="0.05" value="1.0">
            </div>
          </div>
        </div>
        
        <div class="main-content">
          <div class="volume-view" id="volumeContainer"></div>
          <div class="mpr-views" id="mprContainer">
            <div class="mpr-view" data-plane="axial">
              <div class="mpr-label">Axial (横断面)</div>
              <div class="mpr-index" id="axialIndex">0/0</div>
            </div>
            <div class="mpr-view" data-plane="sagittal">
              <div class="mpr-label">Sagittal (矢状面)</div>
              <div class="mpr-index" id="sagittalIndex">0/0</div>
            </div>
            <div class="mpr-view" data-plane="coronal">
              <div class="mpr-label">Coronal (冠状面)</div>
              <div class="mpr-index" id="coronalIndex">0/0</div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.elements = {
      fileInput: this.container.querySelector('#fileInput') as HTMLInputElement,
      segFileInput: this.container.querySelector('#segFileInput') as HTMLInputElement,
      volumeContainer: this.container.querySelector('#volumeContainer') as HTMLElement,
      tfContainer: this.container.querySelector('#tfContainer') as HTMLElement,
      mprContainer: this.container.querySelector('#mprContainer') as HTMLElement,
      renderModeSelect: this.container.querySelector('#renderModeSelect') as HTMLSelectElement,
      windowInput: this.container.querySelector('#windowInput') as HTMLInputElement,
      levelInput: this.container.querySelector('#levelInput') as HTMLInputElement,
      brightnessInput: this.container.querySelector('#brightnessInput') as HTMLInputElement,
      densityInput: this.container.querySelector('#densityInput') as HTMLInputElement,
      stepSizeInput: this.container.querySelector('#stepSizeInput') as HTMLInputElement,
      isoValueInput: this.container.querySelector('#isoValueInput') as HTMLInputElement,
      segBlendInput: this.container.querySelector('#segBlendInput') as HTMLInputElement,
      windowValueDisplay: this.container.querySelector('#windowValue') as HTMLElement,
      levelValueDisplay: this.container.querySelector('#levelValue') as HTMLElement,
      brightnessValueDisplay: this.container.querySelector('#brightnessValue') as HTMLElement,
      densityValueDisplay: this.container.querySelector('#densityValue') as HTMLElement,
      stepSizeValueDisplay: this.container.querySelector('#stepSizeValue') as HTMLElement,
      isoValueValueDisplay: this.container.querySelector('#isoValueValue') as HTMLElement,
      segBlendValueDisplay: this.container.querySelector('#segBlendValue') as HTMLElement,
      infoDisplay: this.container.querySelector('#infoDisplay') as HTMLElement,
      segLabelsContainer: this.container.querySelector('#segLabelsContainer') as HTMLElement,
    };

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    if (!this.elements) return;

    this.elements.fileInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        this.loadFromFile(file);
      }
    });

    this.elements.segFileInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        this.loadSegmentationFromFile(file);
      }
    });

    this.elements.renderModeSelect.addEventListener('change', (e) => {
      const mode = (e.target as HTMLSelectElement).value as RenderMode;
      this.volumeRenderer?.setRenderMode(mode);
    });

    this.elements.windowInput.addEventListener('input', () => {
      this.updateWindowLevel();
    });

    this.elements.levelInput.addEventListener('input', () => {
      this.updateWindowLevel();
    });

    this.elements.brightnessInput.addEventListener('input', () => {
      const value = parseFloat(this.elements!.brightnessInput.value);
      this.elements!.brightnessValueDisplay.textContent = value.toFixed(1);
      this.volumeRenderer?.setBrightness(value);
    });

    this.elements.densityInput.addEventListener('input', () => {
      const value = parseFloat(this.elements!.densityInput.value);
      this.elements!.densityValueDisplay.textContent = value.toFixed(1);
      this.volumeRenderer?.setDensity(value);
    });

    this.elements.stepSizeInput.addEventListener('input', () => {
      const value = parseFloat(this.elements!.stepSizeInput.value);
      this.elements!.stepSizeValueDisplay.textContent = value.toFixed(3);
      this.volumeRenderer?.setStepSize(value);
    });

    this.elements.isoValueInput.addEventListener('input', () => {
      const value = parseFloat(this.elements!.isoValueInput.value);
      this.elements!.isoValueValueDisplay.textContent = value.toFixed(2);
      this.volumeRenderer?.setIsoValue(value);
    });

    this.elements.segBlendInput.addEventListener('input', () => {
      const value = parseFloat(this.elements!.segBlendInput.value);
      this.elements!.segBlendValueDisplay.textContent = value.toFixed(2);
      this.volumeRenderer?.setSegBlendFactor(value);
    });

    this.container.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = (btn as HTMLElement).dataset.preset;
        this.applyWindowPreset(preset as string);
      });
    });
  }

  private async loadSegmentationFromFile(file: File): Promise<void> {
    if (!this.volumeTexture) {
      alert('请先加载体数据文件');
      return;
    }
    try {
      const segData = await this.loader.loadSegmentationFromFile(file);
      this.segLabels = segData.labels;
      this.volumeTexture.setSegmentation(segData);
      this.volumeRenderer?.setSegmentation(this.segLabels);
      this.mprViews.forEach(view => {
        view.setSegmentationLabels(this.segLabels);
      });
      this.renderSegLabelsUI();
    } catch (error) {
      console.error('Failed to load segmentation:', error);
      alert('加载分割文件失败，请检查文件格式');
    }
  }

  private renderSegLabelsUI(): void {
    if (!this.elements) return;
    const container = this.elements.segLabelsContainer;

    if (!this.segLabels.length) {
      container.innerHTML = '<div class="seg-empty-msg">未加载分割文件</div>';
      return;
    }

    let html = '<div class="seg-labels-list">';
    for (const label of this.segLabels) {
      const colorHex = `rgb(${label.color.r},${label.color.g},${label.color.b})`;
      html += `
        <div class="seg-label-item" data-label-id="${label.id}">
          <div class="seg-label-color" style="background:${colorHex}" data-action="color" data-id="${label.id}"></div>
          <span class="seg-label-name" data-action="rename" data-id="${label.id}">${label.name}</span>
          <input type="range" class="seg-label-opacity" min="0" max="1" step="0.05" value="${label.opacity}" data-action="opacity" data-id="${label.id}">
          <div class="seg-toggle ${label.visible ? 'active' : ''}" data-action="toggle" data-id="${label.id}"></div>
        </div>
      `;
    }
    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll('[data-action="toggle"]').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt((el as HTMLElement).dataset.id || '0');
        this.toggleSegLabel(id);
      });
    });

    container.querySelectorAll('[data-action="opacity"]').forEach(el => {
      el.addEventListener('input', () => {
        const id = parseInt((el as HTMLInputElement).dataset.id || '0');
        const value = parseFloat((el as HTMLInputElement).value);
        this.updateSegLabelOpacity(id, value);
      });
    });

    container.querySelectorAll('[data-action="color"]').forEach(el => {
      el.addEventListener('dblclick', () => {
        const id = parseInt((el as HTMLElement).dataset.id || '0');
        this.changeSegLabelColor(id);
      });
    });

    container.querySelectorAll('[data-action="rename"]').forEach(el => {
      el.addEventListener('dblclick', () => {
        const id = parseInt((el as HTMLElement).dataset.id || '0');
        this.renameSegLabel(id);
      });
    });
  }

  private toggleSegLabel(id: number): void {
    const label = this.segLabels.find(l => l.id === id);
    if (!label) return;
    label.visible = !label.visible;
    this.propagateSegUpdate();
    this.renderSegLabelsUI();
  }

  private updateSegLabelOpacity(id: number, opacity: number): void {
    const label = this.segLabels.find(l => l.id === id);
    if (!label) return;
    label.opacity = opacity;
    this.propagateSegUpdate();
  }

  private changeSegLabelColor(id: number): void {
    const label = this.segLabels.find(l => l.id === id);
    if (!label) return;
    const r = prompt('Red (0-255):', label.color.r.toString());
    const g = prompt('Green (0-255):', label.color.g.toString());
    const b = prompt('Blue (0-255):', label.color.b.toString());
    if (r === null || g === null || b === null) return;
    label.color = {
      r: Math.max(0, Math.min(255, parseInt(r) || 0)),
      g: Math.max(0, Math.min(255, parseInt(g) || 0)),
      b: Math.max(0, Math.min(255, parseInt(b) || 0)),
    };
    this.propagateSegUpdate();
    this.renderSegLabelsUI();
  }

  private renameSegLabel(id: number): void {
    const label = this.segLabels.find(l => l.id === id);
    if (!label) return;
    const name = prompt('标签名称:', label.name);
    if (name === null) return;
    label.name = name || label.name;
    this.renderSegLabelsUI();
  }

  private propagateSegUpdate(): void {
    this.volumeRenderer?.updateSegmentationLabels(this.segLabels);
    this.mprViews.forEach(view => {
      view.updateSegmentationLabels(this.segLabels);
    });
  }

  private applyWindowPreset(preset: string): void {
    if (!this.volumeTexture) return;
    
    const valueRange = this.volumeTexture.getValueRange();
    let window: number, level: number;
    
    switch (preset) {
      case 'brain':
        window = 80;
        level = 40;
        break;
      case 'bone':
        window = 1500;
        level = 300;
        break;
      case 'lung':
        window = 1500;
        level = -600;
        break;
      case 'soft':
        window = 350;
        level = 50;
        break;
      default:
        window = valueRange.max - valueRange.min;
        level = (valueRange.max + valueRange.min) / 2;
    }

    if (level < valueRange.min || level > valueRange.max) {
      window = valueRange.max - valueRange.min;
      level = (valueRange.max + valueRange.min) / 2;
    }
    
    this.setWindowLevelUI(window, level);
    this.updateWindowLevel();
  }

  private setWindowLevelUI(window: number, level: number): void {
    if (!this.elements) return;
    this.elements.windowInput.value = window.toString();
    this.elements.levelInput.value = level.toString();
    this.elements.windowValueDisplay.textContent = window.toFixed(0);
    this.elements.levelValueDisplay.textContent = level.toFixed(0);
  }

  private updateWindowLevel(): void {
    if (!this.elements || !this.volumeTexture) return;
    
    const window = parseFloat(this.elements.windowInput.value);
    const level = parseFloat(this.elements.levelInput.value);
    
    this.elements.windowValueDisplay.textContent = window.toFixed(0);
    this.elements.levelValueDisplay.textContent = level.toFixed(0);
    
    const windowLevel: WindowLevel = { window, level };
    this.volumeRenderer?.setWindowLevel(windowLevel);
    
    const wMin = level - window / 2;
    const wMax = level + window / 2;
    
    this.mprViews.forEach(view => {
      view.setWindowLevel(wMin, wMax);
    });
  }

  private async loadSyntheticData(): Promise<void> {
    const volumeData = this.loader.generateSyntheticData();
    this.initializeWithVolumeData(volumeData);
  }

  private async loadFromFile(file: File): Promise<void> {
    try {
      const volumeData = await this.loader.loadFromFile(file);
      this.disposeCurrent();
      this.initializeWithVolumeData(volumeData);
    } catch (error) {
      console.error('Failed to load file:', error);
      alert('加载文件失败，请检查文件格式');
    }
  }

  private initializeWithVolumeData(volumeData: any): void {
    this.volumeTexture = new VolumeTexture(volumeData);
    
    this.updateInfoDisplay(volumeData);
    this.setupWindowControls(volumeData);
    
    if (this.elements) {
      this.volumeRenderer = new VolumeRenderer(
        this.elements.volumeContainer,
        this.volumeTexture
      );
      
      this.tfEditor = new TransferFunctionEditor(
        this.elements.tfContainer,
        this.volumeTexture.getDefaultTransferFunction(),
        this.volumeTexture.getHistogram(),
        this.volumeTexture.getValueRange(),
        (points: TransferFunctionPoint[]) => {
          this.volumeRenderer?.setTransferFunction(points);
        }
      );
      
      this.setupMPRViews();
    }
  }

  private setupMPRViews(): void {
    if (!this.elements || !this.volumeTexture) return;
    
    const mprElements = this.elements.mprContainer.querySelectorAll('.mpr-view');
    const planes = ['axial', 'sagittal', 'coronal'] as const;
    
    mprElements.forEach((el, index) => {
      const plane = planes[index];
      const view = new MPRView(
        el as HTMLElement,
        this.volumeTexture!,
        plane,
        (sliceIndex: number) => {
          const maxSlice = this.getMaxSliceForPlane(plane) - 1;
          const display = document.getElementById(`${plane}Index`);
          if (display) {
            display.textContent = `${sliceIndex + 1}/${maxSlice + 1}`;
          }
        }
      );
      this.mprViews.set(plane, view);
      
      const maxSlice = this.getMaxSliceForPlane(plane) - 1;
      const display = document.getElementById(`${plane}Index`);
      if (display) {
        display.textContent = `${Math.floor(maxSlice / 2) + 1}/${maxSlice + 1}`;
      }
    });
  }

  private getMaxSliceForPlane(plane: 'axial' | 'sagittal' | 'coronal'): number {
    if (!this.volumeTexture) return 1;
    const dims = this.volumeTexture.getDimensions();
    switch (plane) {
      case 'axial': return dims.depth;
      case 'sagittal': return dims.width;
      case 'coronal': return dims.height;
    }
  }

  private setupWindowControls(volumeData: any): void {
    if (!this.elements) return;
    
    const { minValue, maxValue } = volumeData;
    const range = maxValue - minValue;
    
    this.elements.windowInput.min = (range * 0.01).toFixed(0);
    this.elements.windowInput.max = range.toFixed(0);
    this.elements.levelInput.min = minValue.toFixed(0);
    this.elements.levelInput.max = maxValue.toFixed(0);
    this.elements.windowInput.step = (range * 0.01).toFixed(0);
    this.elements.levelInput.step = (range * 0.01).toFixed(0);
    
    const defaultWindow = range;
    const defaultLevel = (maxValue + minValue) / 2;
    
    this.setWindowLevelUI(defaultWindow, defaultLevel);
  }

  private updateInfoDisplay(volumeData: any): void {
    if (!this.elements) return;
    
    const { dimensions, spacing, minValue, maxValue } = volumeData;
    const dataType = volumeData.data instanceof Int16Array ? 'Int16' 
      : volumeData.data instanceof Uint16Array ? 'Uint16'
      : volumeData.data instanceof Float32Array ? 'Float32'
      : volumeData.data instanceof Int8Array ? 'Int8'
      : 'Uint8';
    
    this.elements.infoDisplay.innerHTML = `
      尺寸: <span>${dimensions.width} × ${dimensions.height} × ${dimensions.depth}</span><br>
      体素间距: <span>${spacing.x.toFixed(2)} × ${spacing.y.toFixed(2)} × ${spacing.z.toFixed(2)}</span><br>
      值范围: <span>${minValue.toFixed(0)} ~ ${maxValue.toFixed(0)}</span><br>
      数据类型: <span>${dataType}</span>
    `;
  }

  private disposeCurrent(): void {
    this.volumeRenderer?.dispose();
    this.tfEditor?.dispose();
    this.mprViews.forEach(view => view.dispose());
    this.mprViews.clear();
    this.volumeTexture?.dispose();
    this.segLabels = [];
  }

  dispose(): void {
    this.disposeCurrent();
    this.container.innerHTML = '';
  }
}
