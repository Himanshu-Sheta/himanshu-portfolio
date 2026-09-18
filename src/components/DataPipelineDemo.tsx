import React, { useState } from 'react';
import { Terminal, Play, RefreshCw, CheckCircle2, Cpu, Database, Sparkles, Code2, ArrowRight } from 'lucide-react';

export const DataPipelineDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  const sampleRawData = `[
  { "id": 101, "sensor": "Solar_Array_A", "output_kw": "45.2", "sky_cover": 0.15, "temp_c": 24 },
  { "id": 102, "sensor": "Solar_Array_B", "output_kw": null, "sky_cover": 0.85, "temp_c": 19 },
  { "id": 103, "sensor": "Solar_Array_C", "output_kw": "38.9", "sky_cover": 0.05, "temp_c": 26 }
]`;

  const pipelineSteps = [
    { title: "1. Data Ingestion & Extraction", desc: "Reading structured JSON payload from REST API / DB", icon: Database },
    { title: "2. Harmonization & Validation", desc: "Imputing null values, type-casting & schema enforcement", icon: Cpu },
    { title: "3. Feature Engineering & ML", desc: "OpenCV image segmentation & Scikit-learn capacity prediction", icon: Code2 },
    { title: "4. LLM Summary Generation", desc: "Synthesizing automated executive report using LLM agent", icon: Sparkles },
  ];

  const handleRunPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 800);
    setTimeout(() => setActiveStep(3), 1600);
    setTimeout(() => setActiveStep(4), 2400);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <section id="demo" className="py-20 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-teal-500/30 text-xs font-mono text-teal-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">ETL & AI Pipeline Simulation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Simulating my Master's Thesis & AI project workflows: automated data processing, transformation, validation, and AI reporting.
          </p>
        </div>

        {/* Demo Playground */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs font-mono text-slate-400 ml-2">himanshu_etl_pipeline.py</span>
            </div>

            <button
              onClick={handleRunPipeline}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                isRunning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 hover:scale-105 shadow-md shadow-teal-500/20'
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running Pipeline Steps...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  Run Pipeline Simulation
                </>
              )}
            </button>
          </div>

          {/* Stepper Visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const stepNum = idx + 1;
              const isDone = activeStep >= stepNum;
              const isCurrent = activeStep === stepNum && isRunning;

              return (
                <div
                  key={step.title}
                  className={`p-4 rounded-2xl border transition-all ${
                    isDone
                      ? 'bg-teal-950/20 border-teal-500/40 text-teal-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  } ${isCurrent ? 'ring-2 ring-teal-400 animate-pulse' : ''}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-teal-400">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <span className="text-xs font-mono text-slate-500">Step {stepNum}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white">{step.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Terminal Output Code Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            {/* Input Json */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Input Raw Dataset</span>
                <span className="text-amber-400 font-bold">Unvalidated JSON</span>
              </label>
              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto h-48">
                <code>{sampleRawData}</code>
              </pre>
            </div>

            {/* Simulated Cleaned Output */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Processed & Harmonized Output</span>
                <span className="text-emerald-400 font-bold">Status: 200 OK (Clean)</span>
              </label>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-teal-300 overflow-x-auto h-48 space-y-2">
                {activeStep === 0 && <span className="text-slate-500">// Click "Run Pipeline Simulation" to execute processing...</span>}
                {activeStep >= 1 && <div className="text-teal-400">[INFO] Data extraction completed. 3 records ingested.</div>}
                {activeStep >= 2 && <div className="text-emerald-400">[VALIDATION] Sensor 102 null imputed with mean (42.05 kW). Schema matched.</div>}
                {activeStep >= 3 && <div className="text-indigo-400">[ML] Scikit-learn predicted solar yield capacity: 126.1 kW (98.4% confidence).</div>}
                {activeStep >= 4 && (
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-slate-100 space-y-1">
                    <div className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> LLM Automated Executive Summary
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      "All 3 solar array nodes operating within optimal limits. Estimated daily output: 126.1 kW. Zero validation errors."
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
