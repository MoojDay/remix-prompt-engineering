import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, AlertTriangle } from 'lucide-react';

const slides = [
  // INTRO
  {
    dept: null,
    title: "prompt engineering for business",
    subtitle: "stop guessing, start getting results",
    content: (
      <div className="text-center space-y-8">
        <p className="text-xl text-gray-400">transform your daily workflows with AI — without the fluff</p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {["10+ use cases","step-by-step guides","ethical guardrails"].map(t => (
            <div key={t} className="bg-gray-800 border border-gray-700 p-4 rounded-lg">
              <p className="text-lg text-gray-200">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-gray-500 text-lg">organised by department: Sales · Marketing · Accounting · HR</div>
      </div>
    )
  },

  // ── SALES ──
  {
    dept: "Sales",
    title: "email that doesn't sound like a template",
    subtitle: "because your prospects can tell",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Identify the email type (cold, follow-up, internal)</li>
            <li>Gather context — role, company, history</li>
            <li>Pick a prompt template and customise tone</li>
            <li>Edit the output — <span className="text-green-400 font-semibold">30% human rewrite minimum</span></li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/TONE [professional] + /BRIEFLY</span> — cold intro under 100 words</p>
            <p><span className="text-green-400 font-mono">/AUDIENCE [customer]</span> — rewrite to sound consultative</p>
            <p><span className="text-green-400 font-mono">/EXEC SUMMARY</span> — 3 action items from a thread</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• confidential data in prompts</li><li>• generic, impersonal tone</li><li>• GDPR violations</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• disclose AI where required</li><li>• no fabricated info</li><li>• keep your own voice</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">15–20 min/email → 3–5 min &nbsp;<span className="text-green-400 font-semibold">≈ 2 hrs saved/day</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "Sales",
    title: "prep for customer visits",
    subtitle: "know more than they expect you to",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Gather customer data — profile, history, spend</li>
            <li>Research recent company news and sector trends</li>
            <li>Generate a strategic account plan</li>
            <li>Prepare objection handling before you walk in</li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/ACT AS [consultant]</span> — strategic account plan with goals, risks, next steps</p>
            <p><span className="text-green-400 font-mono">/SWOT</span> — map challenges to your solution</p>
            <p><span className="text-green-400 font-mono">/PITFALLS</span> — likely objections + rebuttals</p>
            <p><span className="text-green-400 font-mono">web search</span> — last 6 months of company news</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• outdated research</li><li>• over-preparing vs. listening</li><li>• wrong assumptions</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• no insider info</li><li>• honest capability claims</li><li>• respect privacy</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">2–3 hrs prep → 30–45 min &nbsp;<span className="text-green-400 font-semibold">≈ 2 hrs saved/visit</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "Sales",
    title: "running a sales campaign",
    subtitle: "more pipeline, less grunt work",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Score and segment target accounts</li>
            <li>Build personalised outreach sequences</li>
            <li>Create battlecards and one-pagers</li>
            <li>Generate competitive intelligence</li>
            <li>Track and optimise as you go</li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/FORMAT AS [table]</span> — rank top 10 accounts with reasoning</p>
            <p><span className="text-green-400 font-mono">/ACT AS [sales rep]</span> — 3 email variants for different personas</p>
            <p><span className="text-green-400 font-mono">/COMPARE</span> — us vs competitor battlecard</p>
            <p><span className="text-green-400 font-mono">web search</span> — top 5 proof points from customer reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• spammy messaging</li><li>• inaccurate competitor claims</li><li>• bad CRM data</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• honour opt-outs</li><li>• factual comparisons only</li><li>• transparent pricing</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">4–6 hrs setup → 1–1.5 hrs &nbsp;<span className="text-green-400 font-semibold">≈ 3 hrs saved/campaign</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "Sales",
    title: "sales reports that tell a story",
    subtitle: "data in, insight out",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Export from CRM (CSV or Excel)</li>
            <li>Upload with clear column labels</li>
            <li>Define what you're after — trends, forecasts, anomalies</li>
            <li>Request visuals and narrative insights</li>
            <li><span className="text-green-400 font-semibold">Validate findings against your own knowledge</span></li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/METRICS MODE</span> — conversion rates by stage, drop-off analysis</p>
            <p><span className="text-green-400 font-mono">/FORMAT AS [chart]</span> — deal velocity with trend lines</p>
            <p><span className="text-green-400 font-mono">/COMPARE</span> — top vs bottom reps, key differences</p>
            <p><span className="text-green-400 font-mono">/FIRST PRINCIPLES</span> — root cause of Q3 decline</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• data privacy breaches</li><li>• misread trends</li><li>• overconfident forecasts</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• anonymise performance data</li><li>• fair evaluation standards</li><li>• don't massage metrics</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">3–4 hrs/report → 45–60 min &nbsp;<span className="text-green-400 font-semibold">≈ 2.5 hrs saved/report</span></p>
        </div>
      </div>
    )
  },

  // ── MARKETING ──
  {
    dept: "Marketing",
    title: "content that actually gets read",
    subtitle: "quantity without losing quality",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Define audience and campaign goal</li>
            <li>Generate multiple variations — test different angles</li>
            <li>A/B test prompts for best results</li>
            <li><span className="text-green-400 font-semibold">Human review for brand voice — always</span></li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/TONE [engaging] + /AUDIENCE</span> — 3 social posts for a launch</p>
            <p><span className="text-green-400 font-mono">/MULTI-PERSPECTIVE</span> — blog post from customer, competitor, analyst POVs</p>
            <p><span className="text-green-400 font-mono">/COMPARE</span> — 5 headline variants with emotional appeal scores</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• generic templated output</li><li>• brand voice drift</li><li>• copyright risk</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• disclose AI when material</li><li>• no misleading claims</li><li>• fact-check everything</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">2–3 hrs/piece → 30–45 min &nbsp;<span className="text-green-400 font-semibold">≈ 3 hrs saved/day</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "Marketing",
    title: "campaign planning without the spreadsheet chaos",
    subtitle: "from blank page to full plan in an afternoon",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Lock in objectives and KPIs first</li>
            <li>Define audience segments</li>
            <li>Use AI for strategy framework and content calendar</li>
            <li>Map channel tactics and budget splits</li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/PM MODE</span> — 90-day plan with timeline, deliverables, resources</p>
            <p><span className="text-green-400 font-mono">/SCHEMA</span> — touchpoint map across email, social, content, events</p>
            <p><span className="text-green-400 font-mono">/SWOT</span> — opportunities and threats in current market</p>
            <p><span className="text-green-400 font-mono">/METRICS MODE</span> — define KPIs and tracking method</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• generic strategies</li><li>• unrealistic timelines</li><li>• budget misallocation</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• truthful ad claims</li><li>• inclusive messaging</li><li>• respect audience privacy</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">5–8 hrs/plan → 1.5–2 hrs &nbsp;<span className="text-green-400 font-semibold">≈ 4 hrs saved/campaign</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "Marketing",
    title: "social media — without burning out your team",
    subtitle: "consistent presence, less scrambling",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Lock in brand voice and content pillars</li>
            <li>Build a monthly calendar with themes</li>
            <li>Generate platform-specific variants from one brief</li>
            <li>Schedule, monitor, adjust based on performance</li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/TONE [casual] + /AUDIENCE</span> — 10 Instagram ideas, authentic feel</p>
            <p><span className="text-green-400 font-mono">/FORMAT AS [calendar]</span> — 2-week plan with daily themes</p>
            <p><span className="text-green-400 font-mono">/REWRITE AS [LinkedIn post]</span> — adapt Twitter thread for professional audience</p>
            <p><span className="text-green-400 font-mono">/BRIEFLY</span> — 5 tweet variants under 280 chars</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• off-brand messaging</li><li>• culturally tone-deaf content</li><li>• image copyright issues</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• label sponsored content</li><li>• no misleading claims</li><li>• follow platform guidelines</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">2–3 hrs/day → 30–45 min &nbsp;<span className="text-green-400 font-semibold">≈ 2 hrs saved/day</span></p>
        </div>
      </div>
    )
  },

  // ── ACCOUNTING ──
  {
    dept: "Accounting",
    title: "financial reports people actually understand",
    subtitle: "less jargon, more clarity",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Export data in clean CSV/Excel format</li>
            <li>Define what you need — variance, trends, anomalies</li>
            <li>Request narrative summaries alongside the numbers</li>
            <li><span className="text-green-400 font-semibold">Always validate AI calculations manually</span></li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/EXEC SUMMARY</span> — plain-language P&L summary for leadership</p>
            <p><span className="text-green-400 font-mono">/FORMAT AS [table]</span> — budget vs actuals with variance flagged</p>
            <p><span className="text-green-400 font-mono">/FIRST PRINCIPLES</span> — root cause of cost overrun in [category]</p>
            <p><span className="text-green-400 font-mono">/METRICS MODE</span> — cash flow trends and 90-day forecast narrative</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• calculation errors — verify everything</li><li>• confidential data exposure</li><li>• regulatory non-compliance</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• no manipulation of figures</li><li>• accurate representation</li><li>• maintain audit trail</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">3–5 hrs/report → 1–1.5 hrs &nbsp;<span className="text-green-400 font-semibold">≈ 3 hrs saved/report</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "Accounting",
    title: "meeting notes and follow-ups — done before you leave the room",
    subtitle: "no more 'I'll send the notes later' promises",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Record or transcribe meeting (with consent)</li>
            <li>Feed transcript to AI with structured prompt</li>
            <li>Extract action items with owners</li>
            <li><span className="text-green-400 font-semibold">Send formatted notes within 1 hour</span></li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/EXEC SUMMARY + /CHECKLIST</span> — summary + action item list from transcript</p>
            <p><span className="text-green-400 font-mono">/FORMAT AS [table]</span> — decisions, actions, owners in one view</p>
            <p><span className="text-green-400 font-mono">/STEP-BY-STEP</span> — discussion points → project plan</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• misread context or nuance</li><li>• recording consent issues</li><li>• confidential discussions logged</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• always get consent to record</li><li>• accurate representation of views</li><li>• protect sensitive discussions</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">30–45 min/meeting → 5–10 min &nbsp;<span className="text-green-400 font-semibold">≈ 2.5 hrs saved/day</span></p>
        </div>
      </div>
    )
  },

  // ── HR ──
  {
    dept: "HR",
    title: "team coordination that doesn't eat your calendar",
    subtitle: "meetings, scheduling, project plans — handled",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Define project scope and team structure</li>
            <li>Use AI to generate timeline and milestones</li>
            <li>Draft task breakdowns and assignments</li>
            <li>Automate status update summaries</li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/PM MODE</span> — full project plan with timeline and resources</p>
            <p><span className="text-green-400 font-mono">/SCHEMA</span> — task breakdown for a given project</p>
            <p><span className="text-green-400 font-mono">/CHECKLIST</span> — kickoff checklist: stakeholders, resources, risks</p>
            <p><span className="text-green-400 font-mono">/EXEC SUMMARY</span> — weekly update in 3 bullet points</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• unrealistic timelines</li><li>• missed dependencies</li><li>• communication overload</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• fair workload distribution</li><li>• credit team contributions</li><li>• transparent reporting</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">1–2 hrs/week on planning → 30 min &nbsp;<span className="text-green-400 font-semibold">≈ 1.5 hrs saved/week</span></p>
        </div>
      </div>
    )
  },
  {
    dept: "HR",
    title: "customer service replies that feel human",
    subtitle: "fast responses, without the robot energy",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">how to do it</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg text-gray-300">
            <li>Categorise common enquiries</li>
            <li>Create AI-assisted response templates per type</li>
            <li>Always adjust tone for empathy before sending</li>
            <li><span className="text-green-400 font-semibold">Complex cases escalate to humans — no exceptions</span></li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">prompts that work</h3>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-green-400 font-mono">/TONE [empathetic]</span> — acknowledge complaint + propose solution</p>
            <p><span className="text-green-400 font-mono">/BRIEFLY</span> — concise FAQ answer for common queries</p>
            <p><span className="text-green-400 font-mono">/ACT AS [customer success]</span> — onboarding email sequence</p>
            <p><span className="text-green-400 font-mono">/STEP-BY-STEP</span> — troubleshooting guide for recurring issues</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-red-900 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-red-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/>watch out for</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• robotic, cold tone</li><li>• missing customer context</li><li>• data privacy breaches</li></ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-semibold text-base mb-1 text-gray-300">ethics check</h4>
            <ul className="text-base text-gray-400 space-y-1"><li>• disclose AI assistance</li><li>• genuine care, not performance</li><li>• escalate complex cases</li></ul>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-400 shrink-0"/>
          <p className="text-base text-gray-300">10–15 min/reply → 3–5 min &nbsp;<span className="text-green-400 font-semibold">≈ 2 hrs saved/day</span></p>
        </div>
      </div>
    )
  },

  // CLOSING
  {
    dept: null,
    title: "risk, ethics, and where not to use AI",
    subtitle: "the stuff nobody tells you until it goes wrong",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">key risks across all departments</h3>
          <ul className="list-disc list-inside space-y-1 text-lg text-gray-300">
            <li><strong className="text-gray-100">Data security</strong> — never paste PII, financials, or trade secrets</li>
            <li><strong className="text-gray-100">Accuracy</strong> — AI hallucinates. Validate everything important</li>
            <li><strong className="text-gray-100">Compliance</strong> — GDPR, CCPA and industry rules still apply</li>
            <li><strong className="text-gray-100">Dependency</strong> — over-reliance erodes your own critical thinking</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">core ethical principles</h3>
          <div className="grid grid-cols-2 gap-2 text-base text-gray-300">
            <div>✦ <span className="text-green-400 font-semibold">transparency</span> — disclose AI when it matters</div>
            <div>✦ <span className="text-green-400 font-semibold">accuracy</span> — fact-check outputs</div>
            <div>✦ <span className="text-green-400 font-semibold">fairness</span> — watch for bias in outputs</div>
            <div>✦ <span className="text-green-400 font-semibold">accountability</span> — humans own the decisions</div>
          </div>
        </div>
        <div className="bg-gray-900 border border-red-900 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-red-400">never use AI alone for:</h3>
          <ul className="list-disc list-inside text-base text-gray-400 space-y-1">
            <li>Legal contracts or compliance docs (get a lawyer)</li>
            <li>Medical or financial advice to customers</li>
            <li>Employee performance reviews or terminations</li>
            <li>Crisis communications or sensitive PR</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    dept: null,
    title: "your 30-day rollout plan",
    subtitle: "small steps, compounding returns",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "week 1", title: "foundation", items: ["Choose your tools (ChatGPT Plus, Copilot)", "Set data governance rules", "Run a team training session"] },
            { label: "weeks 2–3", title: "pilot", items: ["Start with 2–3 high-impact processes", "Build your prompt library", "Measure time savings honestly"] },
            { label: "week 4", title: "scale", items: ["Roll out to remaining processes", "Share wins across teams", "Build ongoing support habits"] }
          ].map(w => (
            <div key={w.label} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-red-400 text-base font-bold uppercase tracking-wider">{w.label}</p>
              <p className="text-gray-100 font-semibold text-lg mb-2">{w.title}</p>
              <ul className="text-base text-gray-400 space-y-1">{w.items.map(i => <li key={i}>• {i}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-3 text-red-400">total impact per employee</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-3 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-400">15–20 hrs</p>
              <p className="text-base text-gray-400">saved per week</p>
            </div>
            <div className="bg-gray-900 p-3 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-400">37–50%</p>
              <p className="text-base text-gray-400">productivity gain</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-600 p-4 rounded-lg text-center">
          <p className="text-xl font-bold text-gray-100">start with one process. do it well. then scale.</p>
          <p className="text-base text-gray-500 mt-1">that's how habits stick</p>
        </div>
      </div>
    )
  }
];

const deptColors: Record<string, string> = {
  Sales: "bg-red-900 text-red-300",
  Marketing: "bg-gray-700 text-gray-300",
  Accounting: "bg-red-950 text-red-400",
  HR: "bg-gray-800 text-gray-400",
};

export default function App() {
  const [cur, setCur] = useState(0);
  const slide = slides[cur];

  return (
    <div className="w-full h-screen bg-gray-950 flex flex-col" style={{fontFamily:'system-ui,sans-serif'}}>
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex justify-between items-center shrink-0">
        <span className="text-gray-100 font-semibold tracking-wide">AI Prompt Training</span>
        <span className="text-gray-500 text-sm">{cur + 1} / {slides.length}</span>
      </div>

      {/* Slide */}
      <div className="flex-1 overflow-hidden flex items-stretch p-6">
        <div className="bg-gray-900 rounded-xl border border-gray-800 w-full flex flex-col overflow-hidden">
          {/* Dept badge + titles */}
          <div className="px-8 pt-6 pb-4 border-b border-gray-800 shrink-0">
            {slide.dept && (
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${deptColors[slide.dept]} mb-3 inline-block`}>
                {slide.dept}
              </span>
            )}
            <h2 className="text-3xl font-bold text-gray-100 leading-tight">{slide.title}</h2>
            {slide.subtitle && <p className="text-gray-500 text-lg mt-1">{slide.subtitle}</p>}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {slide.content}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="bg-gray-900 border-t border-gray-800 px-6 py-4 flex justify-between items-center shrink-0">
        <button
          onClick={() => setCur(c => Math.max(0, c-1))}
          disabled={cur === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-30 transition-colors text-base"
        >
          <ChevronLeft className="w-4 h-4"/>previous
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`h-2 rounded-full transition-all ${i === cur ? 'w-6 bg-red-500' : 'w-2 bg-gray-700 hover:bg-gray-500'}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCur(c => Math.min(slides.length-1, c+1))}
          disabled={cur === slides.length-1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-700 text-white hover:bg-red-600 disabled:opacity-30 transition-colors text-base"
        >
          next<ChevronRight className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
}
