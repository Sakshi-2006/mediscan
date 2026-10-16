'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Download,
  FileImage,
  GitBranch,
  HeartPulse,
  LayoutDashboard,
  Menu,
  Microscope,
  MoreHorizontal,
  Play,
  ScanLine,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Model lab', icon: Microscope },
  { label: 'Evaluations', icon: BarChart3 },
  { label: 'Documentation', icon: BookOpen },
]

const phases = [
  { number: '01', title: 'Dataset', detail: 'Public chest X-ray dataset', status: 'Complete' },
  { number: '02', title: 'Preprocessing', detail: 'Resize, normalize, augment', status: 'Complete' },
  { number: '03', title: 'Training', detail: 'MobileNetV2 transfer learning', status: 'In progress' },
  { number: '04', title: 'Evaluation', detail: 'Metrics and error analysis', status: 'Next up' },
]

export default function Page() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showUpload, setShowUpload] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f7f8] text-[#172126]">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-[#dfe6e7] bg-white px-5 py-6 transition-transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#0f7774] text-white shadow-sm"><Activity size={19} strokeWidth={2.4} /></div>
            <div><p className="text-[15px] font-bold tracking-tight">medscope</p><p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7c8a8e]">project workspace</p></div>
          </div>
          <button aria-label="Close navigation" onClick={() => setMobileOpen(false)} className="rounded-lg p-1 text-[#789094] lg:hidden"><X size={18} /></button>
        </div>

        <div className="mt-10 px-2"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#95a1a4]">Workspace</p>
          <nav className="space-y-1">{navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => setActiveNav(label)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition ${activeNav === label ? 'bg-[#e7f3f2] text-[#0d716e]' : 'text-[#718084] hover:bg-[#f4f7f7]'}`}><Icon size={17} strokeWidth={1.9} />{label}{label === 'Model lab' && <span className="ml-auto rounded-md bg-[#d8efed] px-1.5 py-0.5 text-[9px] font-bold text-[#0d716e]">LAB</span>}</button>)}</nav>
        </div>

        <div className="mt-9 px-2"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#95a1a4]">Project</p>
          <div className="rounded-2xl border border-[#e4ebeb] bg-[#fafcfc] p-3.5"><div className="mb-3 flex items-start justify-between"><div className="flex size-8 items-center justify-center rounded-lg bg-[#e4f1f0] text-[#0f7774]"><Brain size={16} /></div><span className="flex items-center gap-1 text-[10px] font-bold text-[#4b9a78]"><span className="size-1.5 rounded-full bg-[#4b9a78]" />Active</span></div><p className="text-[12px] font-bold">AI-Powered Medical<br />Image Analysis</p><p className="mt-1 text-[10px] leading-4 text-[#8a9799]">Pneumonia detection · v0.3</p></div>
        </div>

        <div className="mt-auto space-y-1 px-2"><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-[#718084] hover:bg-[#f4f7f7]"><Settings2 size={17} />Settings</button><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-[#718084] hover:bg-[#f4f7f7]"><CircleHelp size={17} />Help center</button><div className="mt-4 flex items-center gap-3 border-t border-[#edf1f1] px-3 pt-4"><div className="flex size-8 items-center justify-center rounded-full bg-[#d5e8e7] text-[11px] font-bold text-[#1a6462]">AS</div><div className="min-w-0"><p className="truncate text-[12px] font-bold">Alex Sharma</p><p className="text-[10px] text-[#8a9799]">Student researcher</p></div><MoreHorizontal size={16} className="ml-auto text-[#98a5a7]" /></div></div>
      </aside>

      {mobileOpen && <button aria-label="Close menu overlay" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-30 bg-[#172126]/20 lg:hidden" />}
      <main className="min-h-screen lg:ml-[248px]">
        <header className="flex h-[72px] items-center justify-between border-b border-[#e2e9e9] bg-white/80 px-5 backdrop-blur-sm sm:px-8"><div className="flex items-center gap-3"><button aria-label="Open navigation" onClick={() => setMobileOpen(true)} className="rounded-lg p-1.5 text-[#617175] lg:hidden"><Menu size={20} /></button><div className="hidden items-center gap-2 text-[12px] text-[#8b989a] sm:flex"><span>Projects</span><ChevronRight size={14} /><span className="font-semibold text-[#344347]">Medical image analysis</span></div><span className="rounded-full bg-[#edf7f5] px-2.5 py-1 text-[10px] font-bold text-[#25827d] sm:hidden">Overview</span></div><div className="flex items-center gap-2"><button className="hidden items-center gap-2 rounded-lg border border-[#dfe7e7] bg-white px-3 py-2 text-[11px] font-bold text-[#58696c] sm:flex"><GitBranch size={14} /> GitHub <ArrowUpRight size={12} /></button><button onClick={() => setShowUpload(true)} className="flex items-center gap-2 rounded-lg bg-[#0f7774] px-3.5 py-2 text-[11px] font-bold text-white shadow-sm shadow-[#0f7774]/20 hover:bg-[#096966]"><Upload size={14} /> Analyze image</button></div></header>

        <div className="mx-auto max-w-[1250px] px-5 py-8 sm:px-8 lg:px-10">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f7774]"><span className="size-1.5 rounded-full bg-[#0f7774]" /> Project overview</div><h1 className="text-[27px] font-bold tracking-[-0.03em] text-[#172126] sm:text-[31px]">Good morning, Alex.</h1><p className="mt-1.5 text-[13px] text-[#78878a]">Here's the current state of your medical imaging project.</p></div><div className="flex items-center gap-2 text-[11px] text-[#8a9799]"><Clock3 size={14} /> Last synced 4 min ago</div></section>

          <section className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Model accuracy" value="92.4%" delta="+3.8%" icon={Activity} tone="teal" /><Metric label="Images processed" value="5,842" delta="+12.6%" icon={FileImage} tone="blue" /><Metric label="Training progress" value="68%" delta="Epoch 14 / 20" icon={Brain} tone="purple" /><Metric label="False negative rate" value="4.1%" delta="−1.2%" icon={ShieldCheck} tone="green" /></section>

          <section className="mt-7 grid gap-5 xl:grid-cols-[1.55fr_1fr]"><div className="rounded-2xl border border-[#e1e9e9] bg-white p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[13px] font-bold">Model performance</p><p className="mt-1 text-[11px] text-[#8b989a]">Validation accuracy across the latest training run</p></div><button className="rounded-lg border border-[#e1e8e8] px-2.5 py-1.5 text-[10px] font-bold text-[#657376]">Last 20 epochs <ChevronRight size={12} className="ml-1 inline" /></button></div><div className="mt-7 flex h-[190px] items-end gap-1.5 px-1 sm:gap-3">{[38,44,47,53,58,62,65,68,70,74,76,78,81,84,86,88,89,90,91,92].map((height, i) => <div key={i} className="group relative flex h-full flex-1 items-end"><div className="w-full rounded-t-[4px] bg-[#cce9e6] transition group-hover:bg-[#0f7774]" style={{ height: `${height}%` }} />{i === 19 && <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#0f7774]">92.4%</span>}</div>)}</div><div className="mt-3 flex justify-between border-t border-[#eef2f2] pt-3 text-[10px] text-[#a0abad]"><span>Epoch 1</span><span>Epoch 5</span><span>Epoch 10</span><span>Epoch 15</span><span>Epoch 20</span></div></div>

            <div className="rounded-2xl border border-[#e1e9e9] bg-white p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[13px] font-bold">Latest prediction</p><p className="mt-1 text-[11px] text-[#8b989a]">Sample from test set</p></div><span className="rounded-full bg-[#eaf7f0] px-2 py-1 text-[9px] font-bold text-[#3d966e]">Verified</span></div><div className="mt-5 flex items-center gap-4"><div className="relative flex size-[92px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#dfe8e8] bg-[#192326]"><div className="absolute inset-2 rounded-full border border-[#718084]/30" /><ScanLine size={30} className="text-[#b4cbcb]" /><span className="absolute bottom-1.5 right-1.5 text-[8px] font-bold text-[#94a7a8]">X-RAY</span></div><div><p className="text-[18px] font-bold tracking-tight">Normal</p><p className="mt-1 text-[11px] text-[#849194]">Confidence score</p><div className="mt-1.5 flex items-center gap-2"><div className="h-1.5 w-20 overflow-hidden rounded-full bg-[#e4eded]"><div className="h-full w-[94%] rounded-full bg-[#4b9a78]" /></div><span className="text-[11px] font-bold text-[#3d966e]">94.2%</span></div></div></div><div className="mt-5 grid grid-cols-2 gap-2 border-t border-[#eef2f2] pt-4"><div><p className="text-[10px] text-[#98a5a7]">File ID</p><p className="mt-1 text-[11px] font-bold">XR_005842</p></div><div><p className="text-[10px] text-[#98a5a7]">Processed</p><p className="mt-1 text-[11px] font-bold">1.24 sec</p></div></div><button onClick={() => setShowUpload(true)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#f1f7f6] py-2.5 text-[11px] font-bold text-[#0f7774] hover:bg-[#e4f1f0]">Run another analysis <ArrowUpRight size={13} /></button></div></section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.55fr]"><div className="rounded-2xl border border-[#e1e9e9] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-[13px] font-bold">Project workflow</p><p className="mt-1 text-[11px] text-[#8b989a]">Your path from dataset to demo</p></div><button className="text-[10px] font-bold text-[#0f7774]">View all</button></div><div className="mt-5 space-y-4">{phases.map((phase, i) => <div key={phase.number} className="flex items-center gap-3"><div className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${phase.status === 'Complete' ? 'bg-[#e4f3ed] text-[#3d966e]' : phase.status === 'In progress' ? 'bg-[#e4f1f0] text-[#0f7774]' : 'bg-[#f0f3f3] text-[#8b989a]'}`}>{phase.status === 'Complete' ? <Check size={14} /> : phase.number}</div><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><p className="text-[11px] font-bold">{phase.title}</p><span className={`text-[9px] font-bold ${phase.status === 'In progress' ? 'text-[#0f7774]' : 'text-[#8d9b9d]'}`}>{phase.status}</span></div><p className="mt-0.5 truncate text-[10px] text-[#98a5a7]">{phase.detail}</p></div>{i < phases.length - 1 && <div className="absolute" />}</div>)}</div></div>

            <div className="rounded-2xl border border-[#e1e9e9] bg-white p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[13px] font-bold">Experiment notes</p><p className="mt-1 text-[11px] text-[#8b989a]">Recent updates from your research log</p></div><button className="rounded-lg p-1 text-[#8b989a] hover:bg-[#f3f6f6]"><MoreHorizontal size={17} /></button></div><div className="mt-5 space-y-1"><Note icon={<Sparkles size={14} />} title="Switched to MobileNetV2" detail="Transfer learning improved validation accuracy by 3.8%" time="Today, 10:42 AM" color="teal" /><Note icon={<BarChart3 size={14} />} title="Evaluation set updated" detail="Added 420 balanced samples from the test split" time="Yesterday, 4:18 PM" color="purple" /><Note icon={<GitBranch size={14} />} title="Repository synced" detail="Pushed training pipeline and evaluation notebook" time="Oct 14, 2:06 PM" color="gray" /></div></div></section>

          <section className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-[#cfe4e2] bg-[#eaf6f4] p-5 sm:flex-row sm:items-center sm:p-6"><div className="flex items-start gap-3"><div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#0f7774]"><Play size={14} fill="currentColor" /></div><div><p className="text-[12px] font-bold text-[#155b59]">Ready to document your progress?</p><p className="mt-1 max-w-xl text-[11px] leading-5 text-[#5e8583]">Capture your latest results, add a confusion matrix, and keep your GitHub proof of work up to date.</p></div></div><button className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0f7774] px-4 py-2.5 text-[11px] font-bold text-white hover:bg-[#096966]"><Download size={14} /> Export project report</button></section>
        </div>
      </main>
      {showUpload && <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-[#172126]/30 p-5 backdrop-blur-sm"><div className="w-full max-w-md rounded-2xl border border-[#e0e8e8] bg-white p-6 shadow-xl"><div className="flex items-start justify-between"><div><p className="text-[16px] font-bold">Analyze a medical image</p><p className="mt-1 text-[11px] text-[#849194]">Upload a chest X-ray from the public test dataset.</p></div><button aria-label="Close dialog" onClick={() => setShowUpload(false)} className="rounded-lg p-1 text-[#829093] hover:bg-[#f2f5f5]"><X size={18} /></button></div><div className="mt-6 flex flex-col items-center rounded-xl border border-dashed border-[#a9cccc] bg-[#f5fbfa] px-6 py-10 text-center"><div className="flex size-11 items-center justify-center rounded-full bg-[#dff1ef] text-[#0f7774]"><Upload size={19} /></div><p className="mt-3 text-[12px] font-bold">Drop an image here</p><p className="mt-1 text-[10px] text-[#8a9799]">PNG or JPEG · Max 10 MB</p><button className="mt-4 rounded-lg border border-[#c9dedd] bg-white px-3 py-2 text-[10px] font-bold text-[#0f7774]">Browse files</button></div><p className="mt-4 text-center text-[10px] leading-4 text-[#96a2a4]">This educational demo is not intended for clinical diagnosis.</p></div></div>}
    </div>
  )
}

function Metric({ label, value, delta, icon: Icon, tone }: { label: string; value: string; delta: string; icon: typeof Activity; tone: string }) { const tones: Record<string, string> = { teal: 'bg-[#e5f3f1] text-[#0f7774]', blue: 'bg-[#e9f0f8] text-[#4a78a7]', purple: 'bg-[#eeeafa] text-[#7664b2]', green: 'bg-[#e8f4ed] text-[#4b9a78]' }; return <div className="rounded-2xl border border-[#e1e9e9] bg-white p-4"><div className="flex items-start justify-between"><div><p className="text-[11px] font-semibold text-[#879496]">{label}</p><p className="mt-2 text-[23px] font-bold tracking-tight">{value}</p></div><div className={`flex size-8 items-center justify-center rounded-lg ${tones[tone]}`}><Icon size={15} /></div></div><p className="mt-3 text-[10px] font-bold text-[#4b9a78]">{delta} <span className="font-medium text-[#9aa6a8]">vs last run</span></p></div> }
function Note({ icon, title, detail, time, color }: { icon: React.ReactNode; title: string; detail: string; time: string; color: string }) { const colors: Record<string, string> = { teal: 'bg-[#e4f3f1] text-[#0f7774]', purple: 'bg-[#eeeafa] text-[#7664b2]', gray: 'bg-[#eff2f2] text-[#718084]' }; return <div className="flex gap-3 rounded-xl p-2 hover:bg-[#fafcfc]"><div className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg ${colors[color]}`}>{icon}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline justify-between gap-x-3"><p className="text-[11px] font-bold">{title}</p><span className="text-[9px] text-[#a0abad]">{time}</span></div><p className="mt-1 text-[10px] text-[#8b989a]">{detail}</p></div></div> }
