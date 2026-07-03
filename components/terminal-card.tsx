"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { prompt: "~", command: "whoami", output: "devops-engineer" },
  {
    prompt: "~",
    command: "cat skills.txt",
    output: "AWS | Azure | Terraform | K8s | Docker",
  },
  {
    prompt: "~",
    command: "kubectl get pods -n production",
    output: "NAME                    READY   STATUS\napi-v2-7f4c8b9d6-xk2l   1/1     Running\nweb-5d8f7g2h3-mn4p      1/1     Running",
  },
  { prompt: "~", command: "terraform plan", output: "Plan: 3 to add, 0 to change, 0 to destroy." },
  { prompt: "~", command: "", output: "", isTyping: true },
];

export function TerminalCard() {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalLines>(
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const addNextLine = () => {
      if (currentIndex < terminalLines.length) {
        const lineToAdd = terminalLines[currentIndex];
        setDisplayedLines((prev) => [...prev, lineToAdd]);
        currentIndex++;
        timeoutId = setTimeout(addNextLine, 800);
      }
    };

    timeoutId = setTimeout(addNextLine, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">
          gbengacloud@devops ~ zsh
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-primary">{line.prompt}</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{line.command}</span>
              {line.isTyping && (
                <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
              )}
            </div>
            {line.output && (
              <pre className="mt-1 whitespace-pre-wrap text-muted-foreground">
                {line.output}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
