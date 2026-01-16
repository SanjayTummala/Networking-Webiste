import React, { useEffect } from "react";

interface Props {
  title: string;
  src: string;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ title, src, onClose }) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    // expose close function to iframe
    (window as any).closeProjectModal = onClose;

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
      delete (window as any).closeProjectModal;
    };
  }, [onClose]);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-header">
          <span className="project-modal-title">{title}</span>
          <button
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project"
          >
            ×
          </button>
        </div>

        <iframe
          src={src}
          title={title}
          className="project-modal-iframe-full"
        />
      </div>
    </div>
  );
};

export default ProjectModal;
