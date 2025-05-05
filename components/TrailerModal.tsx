"use client";

import { Dialog } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  youtubeKey: string;
}

export default function TrailerModal({ isOpen, onClose, youtubeKey }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 text-white text-xl"
          >
            ✕
          </button>

          {/* Embedded YouTube Trailer */}
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded"
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
