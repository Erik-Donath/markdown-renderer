import React, { useEffect, useState } from "react";
import {
  Clipboard,
  Download,
  Code,
  ClipboardPaste as Paste,
} from "lucide-react";
import { micromark } from "micromark";

export default function App() {
  const [text, setText] = useState("");
  const [htmlContent, setHTMLContent] = useState("");

  const copyToClipboard = () => navigator.clipboard.writeText(text);
  const pasteFromClipboard = async () =>
    setText(await navigator.clipboard.readText());
  const downloadAsPng = () => alert("Download als PNG wird hier implementiert");
  const copyHtml = () => navigator.clipboard.writeText(htmlContent);

  useEffect(() => {
    setHTMLContent(micromark(text));
  }, [text]);

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={pasteFromClipboard}
          className="tooltip"
          data-tooltip="Einfügen"
        >
          <Paste className="w-6 h-6" />
        </button>
        <button
          onClick={copyToClipboard}
          className="tooltip"
          data-tooltip="Kopieren"
        >
          <Clipboard className="w-6 h-6" />
        </button>
        <button
          onClick={downloadAsPng}
          className="tooltip"
          data-tooltip="Download PNG"
        >
          <Download className="w-6 h-6" />
        </button>
        <button
          onClick={copyHtml}
          className="tooltip"
          data-tooltip="HTML Kopieren"
        >
          <Code className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-grow gap-4">
        <textarea
          className="w-1/2 p-4 rounded-lg border border-gray-300 shadow-md resize-none"
          placeholder="Gib hier deinen Markdown-Text ein..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="w-1/2 p-4 rounded-lg border border-gray-300 shadow-md bg-white">
          <iframe
            srcDoc={htmlContent}
            title="Markdown Preview"
            className="w-full h-full"
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}
