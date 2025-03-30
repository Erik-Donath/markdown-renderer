import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import Frame from "react-frame-component";
import { micromark } from "micromark";
import { math, mathHtml } from "micromark-extension-math";

interface MarkdownBlockProps {
  children: string;
}

export interface MarkdownBlockHandle {
  getFullHtmlContent: () => string;
}

const MarkdownBlock = forwardRef<MarkdownBlockHandle, MarkdownBlockProps>(
  ({ children }, ref) => {
    const frameRef = useRef<HTMLIFrameElement | null>(null);
    const [htmlContent, setHtmlContent] = useState<string>("");

    useMemo(() => {
      try {
        setHtmlContent(
          micromark(children, {
            allowDangerousHtml: true,
            extensions: [math()],
            htmlExtensions: [mathHtml()],
          })
        );
      } catch (error) {
        //console.error("Error while parsing Markdown:", error);
        // Optionally keep the previous content or set a fallback message
      }
    }, [children]);

    useImperativeHandle(ref, () => ({
      getFullHtmlContent: () => {
        if (!frameRef.current) return "";
        const doc = frameRef.current.contentDocument;

        if (!doc) return "";
        return doc.documentElement.outerHTML;
      },
    }));

    return (
      <Frame
        ref={frameRef}
        head={
          <>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
            />
            <style>
              {
                "body { margin: 0;padding: 0;font-family: system-ui, sans-serif;} p, h1, h2, h3, h4, h5, h6 { margin: 0;}"
              }
            </style>
          </>
        }
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          backgroundColor: "white",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Frame>
    );
  }
);

export default MarkdownBlock;
