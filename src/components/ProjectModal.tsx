import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';
import './ProjectModal.css';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              &times;
            </button>

            <div className="modal-header">
              <div className="modal-badges">
                <span className="modal-category">{project.category}</span>
                {project.tag && <span className="modal-tag">{project.tag}</span>}
              </div>
              <h2 className="modal-title">{project.name}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-details">
                {project.venue && (
                  <div className="modal-detail-row">
                    <span className="modal-detail-label">Venue</span>
                    <span className="modal-detail-value">{project.venue}</span>
                  </div>
                )}
                {project.dates && (
                  <div className="modal-detail-row">
                    <span className="modal-detail-label">Dates</span>
                    <span className="modal-detail-value">{project.dates}</span>
                  </div>
                )}
                <div className="modal-detail-row">
                  <span className="modal-detail-label">Type</span>
                  <span className="modal-detail-value">
                    {project.type === 'venue' ? 'Venue' : 'Production'}
                  </span>
                </div>
              </div>

              <div className="modal-divider" />

              <p className="modal-description">{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
