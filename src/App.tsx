import React, { useMemo, useState } from "react";
import {
  Clipboard,
  Download,
  Code,
  ClipboardPaste as Paste,
} from "lucide-react";
import { micromark } from "micromark";
import TooltipButton from "./TooltipButton";

export default function App() {
  const [text, setText] = useState("");
  const htmlContent = useMemo(() => micromark(text), [text]);

  const copyToClipboard = () => navigator.clipboard.writeText(text);
  const pasteFromClipboard = async () =>
    setText(await navigator.clipboard.readText());
  const downloadAsPng = () => alert("Download als PNG wird hier implementiert");
  const copyHtml = () => navigator.clipboard.writeText(htmlContent);

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex justify-center gap-4 mb-4">
        <TooltipButton action={pasteFromClipboard} icon={<Paste />}>
          Einfügen
        </TooltipButton>
        <TooltipButton action={copyToClipboard} icon={<Clipboard />}>
          Kopieren
        </TooltipButton>
        <TooltipButton action={downloadAsPng} icon={<Download />}>
          Download PNG
        </TooltipButton>
        <TooltipButton action={copyHtml} icon={<Code />}>
          HTML Kopieren
        </TooltipButton>
      </div>

      <div className="flex flex-col md:flex-row flex-grow gap-4">
        <textarea
          className="w-full md:w-1/2 p-4 rounded-lg border border-gray-300 shadow-md resize-none min-h-[200px]"
          rows={6}
          placeholder="Gib hier deinen Markdown-Text ein..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="w-full md:w-1/2 p-4 rounded-lg border border-gray-300 shadow-md bg-white">
          <iframe
            srcDoc={htmlContent}
            title="Markdown Preview"
            className="w-full min-h-[300px] md:h-full"
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}
