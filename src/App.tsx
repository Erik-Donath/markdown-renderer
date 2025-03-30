import TooltipButton from "./TooltipButton";
import MarkdownBlock, { MarkdownBlockHandle } from "./MarkdownBlock";
import React, { useState, useRef } from "react";
import { Clipboard, Download, ClipboardPaste as Paste } from "lucide-react";

const app = function App() {
  const [text, setText] = useState("");
  const markdownBlockRef = useRef<MarkdownBlockHandle>(null);

  const copyToClipboard = () => navigator.clipboard.writeText(text);
  const pasteFromClipboard = async () =>
    setText(await navigator.clipboard.readText());
  const downloadAsHtml = () => {
    if (markdownBlockRef.current) {
      // Create file
      const htmlContent = markdownBlockRef.current.getFullHtmlContent();
      const blob = new Blob([htmlContent], { type: "text/html" });

      // Create temporary link to download file
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "output.html";

      // Stard download by clicking link and then removing URL
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex justify-center gap-4 mb-4">
        <TooltipButton action={pasteFromClipboard} icon={<Paste />}>
          Einfügen
        </TooltipButton>
        <TooltipButton action={copyToClipboard} icon={<Clipboard />}>
          Kopieren
        </TooltipButton>
        <TooltipButton action={downloadAsHtml} icon={<Download />}>
          Download HTML
        </TooltipButton>
      </div>

      <div className="flex flex-col md:flex-row flex-grow gap-4 bg-white">
        <textarea
          id="markdown"
          className="w-full md:w-1/2 p-4 rounded-lg border border-gray-300 shadow-md resize-none min-h-[200px]"
          rows={6}
          placeholder="Gib hier deinen Markdown-Text ein..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="w-full md:w-1/2 p-4 rounded-lg border border-gray-300 shadow-md bg-white">
          <MarkdownBlock ref={markdownBlockRef}>{text}</MarkdownBlock>
        </div>
      </div>
    </div>
  );
};

export default app;
