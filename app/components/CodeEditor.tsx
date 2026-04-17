'use client';

import { useState, useCallback, useEffect } from 'react';
import { projects, folders, getProjectsByFolder } from '../data/projects';
import type { ProjectFile } from '../data/projects';

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  shipped: { bg: '#0f2018', text: '#4ade80', border: 'rgba(74,222,128,0.2)' },
  'in-progress': { bg: '#1c1408', text: '#f59e0b', border: 'rgba(245,158,11,0.2)' },
  patented: { bg: '#1a0f2e', text: '#a78bfa', border: 'rgba(167,139,250,0.2)' },
  archived: { bg: '#1a1a1a', text: '#888', border: 'rgba(136,136,136,0.2)' },
};

const statusLabels: Record<string, string> = {
  shipped: 'SHIPPED',
  'in-progress': 'IN PROGRESS',
  patented: 'PATENTED',
  archived: 'ARCHIVED',
};

// ─── File icon SVG ───────────────────────────────────
function FileIcon({ active }: { active?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
        stroke={active ? '#569cd6' : '#888'}
        strokeWidth="1"
        fill="none"
      />
      <path d="M9 1v4h4" stroke={active ? '#569cd6' : '#888'} strokeWidth="1" fill="none" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{
        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 0.15s ease',
      }}
    >
      <path d="M4 2l4 4-4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FolderIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      {open ? (
        <path
          d="M1.5 3A1.5 1.5 0 013 1.5h3.379a1.5 1.5 0 011.06.44L8.56 3.06a.5.5 0 00.354.147H13A1.5 1.5 0 0114.5 4.707V5H2.5v-.5M2.5 5l-1 8h13l-1-8H2.5z"
          stroke="#dcb67a"
          strokeWidth="1"
          fill="none"
        />
      ) : (
        <path
          d="M1.5 3A1.5 1.5 0 013 1.5h3.379a1.5 1.5 0 011.06.44L8.56 3.06a.5.5 0 00.354.147H13A1.5 1.5 0 0114.5 4.707V12.5A1.5 1.5 0 0113 14H3a1.5 1.5 0 01-1.5-1.5V3z"
          stroke="#dcb67a"
          strokeWidth="1"
          fill="none"
        />
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Main Component ──────────────────────────────────
export default function CodeEditor() {
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(folders.map((f) => f.name))
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const openFile = useCallback(
    (id: string) => {
      if (!openTabs.includes(id)) {
        setOpenTabs((prev) => [...prev, id]);
      }
      setActiveTab(id);
    },
    [openTabs]
  );

  const closeTab = useCallback(
    (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const newTabs = openTabs.filter((t) => t !== id);
      setOpenTabs(newTabs);
      if (activeTab === id) {
        setActiveTab(newTabs[newTabs.length - 1] || '');
      }
    },
    [openTabs, activeTab]
  );

  const toggleFolder = useCallback((name: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const activeProject = projects.find((p) => p.id === activeTab);

  return (
    <div className="editor-shell">
      {/* Mobile top bar */}
      <div className="editor-mobile-bar">
        <button
          className="editor-hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 5h12M3 9h12M3 13h12" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <span className="editor-mobile-title">
          {activeProject ? activeProject.filename : 'showcase'}
        </span>
      </div>

      {/* Sidebar */}
      <aside className={`editor-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-label">EXPLORER</span>
        </div>
        <div className="sidebar-section-label">SHOWCASE</div>
        <nav className="file-tree">
          {folders.map((folder) => {
            const expanded = expandedFolders.has(folder.name);
            const folderProjects = getProjectsByFolder(folder.name);
            return (
              <div key={folder.name} className="tree-folder">
                <button className="tree-folder-btn" onClick={() => toggleFolder(folder.name)}>
                  <ChevronIcon open={expanded} />
                  <FolderIcon open={expanded} />
                  <span>{folder.label}</span>
                </button>
                {expanded && (
                  <div className="tree-files">
                    {folderProjects.map((p) => (
                      <button
                        key={p.id}
                        className={`tree-file-btn ${activeTab === p.id ? 'active' : ''}`}
                        onClick={() => {
                          openFile(p.id);
                          if (window.innerWidth < 769) setSidebarOpen(false);
                        }}
                      >
                        <FileIcon active={activeTab === p.id} />
                        <span>{p.filename}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <a href="https://aaroncougle.com" className="sidebar-link" target="_blank" rel="noopener">
            aaroncougle.com
          </a>
        </div>
      </aside>

      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main editor area */}
      <main className={`editor-main ${sidebarOpen ? 'sidebar-visible' : ''}`}>
        {/* Tab bar */}
        {openTabs.length > 0 && (
          <div className="tab-bar">
            <div className="tab-list">
              {openTabs.map((tabId) => {
                const proj = projects.find((p) => p.id === tabId);
                if (!proj) return null;
                return (
                  <button
                    key={tabId}
                    className={`tab ${activeTab === tabId ? 'active' : ''}`}
                    onClick={() => setActiveTab(tabId)}
                  >
                    <FileIcon active={activeTab === tabId} />
                    <span className="tab-name">{proj.filename}</span>
                    <span
                      className="tab-close"
                      onClick={(e) => closeTab(tabId, e)}
                    >
                      <CloseIcon />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="editor-content">
          {activeProject ? (
            <ProjectView project={activeProject} />
          ) : (
            <WelcomeView onOpen={openFile} />
          )}
        </div>

        {/* Status bar */}
        <div className="status-bar">
          <div className="status-left">
            {activeProject && (
              <>
                <span className="status-path">
                  {activeProject.folder}/{activeProject.filename}
                </span>
                <span className="status-divider">·</span>
                <span
                  className="status-badge"
                  style={{ color: statusColors[activeProject.status]?.text }}
                >
                  {statusLabels[activeProject.status]}
                </span>
              </>
            )}
          </div>
          <div className="status-right">
            <span>Aaron Cougle</span>
            <span className="status-divider">·</span>
            <span>Markdown</span>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Project Content View ────────────────────────────
function ProjectView({ project }: { project: ProjectFile }) {
  const sc = statusColors[project.status];
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxSrc]);

  return (
    <article className="project-view">
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta-row">
          <span className="project-meta">{project.meta}</span>
          <span
            className="project-status-pill"
            style={{
              background: sc?.bg,
              color: sc?.text,
              borderColor: sc?.border,
            }}
          >
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      <p className="project-summary">{project.summary}</p>

      {project.stats && project.stats.length > 0 && (
        <div className="project-stats">
          {project.stats.map((stat, i) => (
            <div key={i} className="stat">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>
      )}

      {project.sections.map((section, i) => (
        <div key={i} className="project-section">
          {section.imageAbove && (
            <button
              className="project-img-btn img-above"
              onClick={() => setLightboxSrc(section.imageAbove!)}
            >
              <img src={section.imageAbove} alt="" className="project-img" loading="lazy" />
            </button>
          )}
          <h2 className="section-heading">{section.title}</h2>
          <ul className="section-items">
            {section.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
          {section.image && (
            <button
              className="project-img-btn"
              onClick={() => setLightboxSrc(section.image!)}
            >
              <img src={section.image} alt="" className="project-img" loading="lazy" />
            </button>
          )}
        </div>
      ))}

      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <img
            src={lightboxSrc}
            alt=""
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>
            <CloseIcon />
          </button>
        </div>
      )}
    </article>
  );
}

// ─── Welcome View ────────────────────────────────────
function WelcomeView({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="welcome-view">
      <div className="welcome-inner">
        <h1 className="welcome-name">Aaron Cougle</h1>
        <p className="welcome-role">Senior Product Designer</p>
        <div className="welcome-divider" />
        <p className="welcome-hint">Select a file from the sidebar to get started.</p>
        <div className="welcome-quick">
          <p className="welcome-quick-label">Quick open</p>
          <button onClick={() => onOpen('how-i-work')} className="welcome-link">
            <FileIcon /> how-i-work.md
          </button>
          <button onClick={() => onOpen('ai-workflow')} className="welcome-link">
            <FileIcon /> ai-workflow.md
          </button>
          <button onClick={() => onOpen('mweb-activation')} className="welcome-link">
            <FileIcon /> mweb-activation.md
          </button>
        </div>
      </div>
    </div>
  );
}
