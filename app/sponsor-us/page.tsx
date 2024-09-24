"use client";

import React, { useState, useEffect, useRef, RefObject } from "react";
import dynamic from "next/dynamic";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

import "@/app/globals.css";
import Footer from "../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import HackRPILink from "@/components/themed-components/hackrpi-link";

// Dynamically import Document and Page from react-pdf to prevent SSR issues
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
);

// Dynamically set the worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function SponsorUsPage() {
  const [numPagesThisYear, setNumPagesThisYear] = useState<number | null>(null);

  const singlePageContainerRef: RefObject<HTMLDivElement> = useRef(null);
  const [singlePageWidth, setSinglePageWidth] = useState<number>(0);

  const multiPageContainerRef: RefObject<HTMLDivElement> = useRef(null);
  const [multiPageWidth, setMultiPageWidth] = useState<number>(0);

  // Update single-page PDF width
  useEffect(() => {
    function updateSinglePageWidth() {
      if (singlePageContainerRef.current) {
        setSinglePageWidth(singlePageContainerRef.current.offsetWidth);
      }
    }
    updateSinglePageWidth();

    window.addEventListener("resize", updateSinglePageWidth);
    return () => {
      window.removeEventListener("resize", updateSinglePageWidth);
    };
  }, []);

  // Update multi-page PDF width
  useEffect(() => {
    function updateMultiPageWidth() {
      if (multiPageContainerRef.current) {
        setMultiPageWidth(multiPageContainerRef.current.offsetWidth);
      }
    }
    updateMultiPageWidth();

    window.addEventListener("resize", updateMultiPageWidth);
    return () => {
      window.removeEventListener("resize", updateMultiPageWidth);
    };
  }, []);

  const onDocumentLoadSuccessThisYear = ({ numPages }: { numPages: number }) => {
    setNumPagesThisYear(numPages);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Failed to load PDF file:", error);
  };

  return (
    <div className="w-full min-h-screen h-fit flex flex-col items-center">
      <NavBar showOnScroll={false} />
      <div className="w-11/12 flex-grow flex-shrink basis-auto flex flex-col items-start justify-center pt-24 desktop:pt-16 mb-4">
        <div className="flex w-full flex-wrap mb-2 items-center justify-center">
          {/* Last Year PDF */}
          <div className="flex flex-col items-center justify-start w-5/6 md:w-1/2 min-w-[350px] mb-2">
            <h1 className="text-3xl font-bold text-center mb-2">Last Year:</h1>
            <div
              className="w-5/6 md:w-4/6 aspect-[8.5/11] mx-auto border"
              ref={singlePageContainerRef}
            >
              {singlePageWidth > 0 && (
                <Document
                  file="/HackRPI_by_Numbers_2023.pdf"
                  renderMode="canvas"
                  onLoadError={onDocumentLoadError}
                >
                  <Page pageNumber={1} width={singlePageWidth} />
                </Document>
              )}
            </div>
          </div>

          {/* This Year PDF */}
          <div className="flex flex-col items-center justify-center w-5/6 md:w-1/2 min-w-[350px] mb-2">
            <h1 className="text-3xl font-bold text-center mb-2">
              This Year We Need Your Help:
            </h1>
            <div
              className="w-5/6 md:w-4/6 aspect-[8.5/11] mx-auto border overflow-auto"
              style={{ maxHeight: "500px" }}
              ref={multiPageContainerRef}
            >
              {multiPageWidth > 0 && (
                <Document
                  file="/HackRPI_Sponsorship_Booklet_2024_2.pdf"
                  onLoadSuccess={onDocumentLoadSuccessThisYear}
                  onLoadError={onDocumentLoadError}
                  renderMode="canvas"
                >
                  {Array.from(
                    new Array(numPagesThisYear),
                    (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={multiPageWidth}
                      />
                    )
                  )}
                </Document>
              )}
            </div>
          </div>
        </div>

        {/* Alumni and Sponsor Links */}
        <div className="w-full flex flex-wrap items-center justify-center">
          <div className="flex flex-col items-center justify-start w-1/2 min-w-[350px]">
            <h1 className="text-2xl font-bold text-center">
              Alumni Interested in Supporting HackRPI:
            </h1>
            <HackRPILink
              className="w-5/6 md:w-1/2 text-nowrap text-center text-2xl my-4"
              href="https://tinyurl.com/hackrpi-donation"
            >
              Donate Here!
            </HackRPILink>
          </div>
          <div className="flex flex-col items-center justify-start w-1/2 min-w-[350px]">
            <h1 className="text-2xl font-bold text-center">
              Companies Interested in Sponsoring HackRPI:
            </h1>
            <HackRPILink
              className="w-5/6 md:w-1/2 text-nowrap text-center text-2xl my-4"
              href="mailto:hackrpi@rpi.edu"
            >
              Email Us! 📧
            </HackRPILink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SponsorUsPage;