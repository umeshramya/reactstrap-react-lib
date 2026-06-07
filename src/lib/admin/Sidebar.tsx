import React, { useState, useRef, useEffect, useCallback, ReactElement } from "react";
import SectionPanel, { panelProps } from "./SectionPanel";
import { Row, Col, Spinner } from "reactstrap";
import { useRouter } from "next/router";

interface sidebarLink {
  name: string;
  icon?: any;
  panel?: panelProps;
  link?: string;
}

interface Props {
  Main: ReactElement;
  pageName: string;
  barComponent?: any;
  orgName?: string;
  userName?: string;
  siderBarLinks: sidebarLink[];
  mainBG?: string;
}

const sidebarCSS = `
.sb-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
}
.sb-topbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.sb-topbar-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}
.sb-topbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sb-hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  color: #64748b;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0;
  transition: background 0.2s, border-color 0.2s;
}
.sb-hamburger:hover {
  background: rgba(13,148,136,0.08);
  border-color: #0d9488;
  color: #0d9488;
}
.sb-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 200;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.sb-backdrop-open {
  display: block;
  opacity: 1;
}
.sb-sidebar {
  width: 260px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: #ffffff;
  border-right: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  z-index: 101;
  flex-shrink: 0;
}
.sb-sidebar-header {
  padding: 20px 18px 14px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sb-org-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0d9488;
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
.sb-user-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sb-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0d9488;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}
.sb-user-name {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
  line-height: 1.2;
}
.sb-nav {
  padding: 10px 0;
  list-style: none;
  margin: 0;
  flex: 1;
}
.sb-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
  padding: 0 18px;
  margin: 2px 8px;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, padding-left 0.2s, border-color 0.15s;
  border-left: 3px solid transparent;
  user-select: none;
}
.sb-nav-item:hover {
  background: rgba(13,148,136,0.08);
  color: #0d9488;
  padding-left: 22px;
}
.sb-nav-item-active {
  background: rgba(13,148,136,0.08);
  color: #0d9488;
  border-left-color: #0d9488;
  font-weight: 600;
}
.sb-nav-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  opacity: 0.75;
}
.sb-nav-item:hover .sb-nav-icon,
.sb-nav-item-active .sb-nav-icon {
  opacity: 1;
}
.sb-nav-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sb-nav-spinner {
  margin-left: auto;
  flex-shrink: 0;
}
.sb-main {
  flex: 1;
  min-width: 0;
  background: #f8fafc;
  min-height: 100vh;
}
.sb-main-pad {
  padding: 24px;
}
/* Panel popup */
.sb-panel-overlay {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
  padding: 28px 28px 22px;
  margin-bottom: 20px;
  animation: sbPanelIn 0.22s ease-out;
}
.sb-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
}
.sb-panel-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d9488;
  margin: 0;
  letter-spacing: -0.01em;
}
.sb-panel-close {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.15s, color 0.15s;
  padding: 0;
}
.sb-panel-close:hover {
  background: #fef2f2;
  color: #ef4444;
  border-color: #fecaca;
}
.sb-panel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
.sb-panel-section-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #0d9488;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 10px;
}
.sb-panel-link {
  display: block;
  padding: 6px 0;
  color: #64748b;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.15s;
}
.sb-panel-link:hover {
  color: #0d9488;
  text-decoration: underline;
}
@keyframes sbPanelIn {
  from { opacity: 0; transform: translateY(-8px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@media (max-width: 767px) {
  .sb-hamburger { display: flex; }
  .sb-sidebar {
    position: fixed;
    left: -270px;
    top: 0;
    height: 100vh;
    transition: left 0.28s cubic-bezier(0.4,0,0.2,1);
    z-index: 300;
  }
  .sb-sidebar-open { left: 0; }
  .sb-main-pad { padding: 16px; }
  .sb-panel-grid { grid-template-columns: 1fr; }
}
`;

const Sidebar = (props: Props) => {
  const router = useRouter();
  const curSectionPanel: any = useRef();

  const [panelTitle, setpanelTitle] = useState("");
  const [section, setSection] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigatingIdx, setNavigatingIdx] = useState<number | null>(null);

  useEffect(() => { setSidebarOpen(false); }, [router.asPath]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (sidebarOpen && typeof window !== "undefined" && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const isActive = (link: string | undefined): boolean => {
    if (!link) return false;
    return router.asPath.startsWith(link);
  };

  const getInitials = (name: string): string => {
    return name
      .split(/[\s.]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n.charAt(0).toUpperCase())
      .join("");
  };

  const handleLinkClick = useCallback(
    (eachLink: sidebarLink, index: number) => {
      if (eachLink.panel) {
        setpanelTitle(eachLink.panel.panelTitle);
        setSection(eachLink.panel.section);
        curSectionPanel.current?.panelOpen();
        setSidebarOpen(false);
      } else if (eachLink.link !== undefined) {
        if (eachLink.link === router.asPath) return;
        setNavigatingIdx(index);
        setSidebarOpen(false);
        router.push(eachLink.link);
      }
    },
    [router]
  );

  return (
    <>
      <style>{sidebarCSS}</style>

      <div
        className={`sb-backdrop ${sidebarOpen ? "sb-backdrop-open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <Row className="g-0">
        <Col
          xs={12}
          lg="auto"
          className={`sb-sidebar ${sidebarOpen ? "sb-sidebar-open" : ""}`}
        >
          <div className="sb-sidebar-header">
            {props.orgName && <h5 className="sb-org-name">{props.orgName}</h5>}
            {props.userName && (
              <div className="sb-user-row">
                <div className="sb-avatar">{getInitials(props.userName)}</div>
                <h6 className="sb-user-name">{props.userName}</h6>
              </div>
            )}
          </div>

          <nav className="sb-nav">
            {props.siderBarLinks !== undefined
              ? props.siderBarLinks.map((eachLink, index) => {
                  const active = isActive(eachLink.link);
                  const Icon = eachLink.icon;
                  return (
                    <div
                      className={`sb-nav-item ${active ? "sb-nav-item-active" : ""}`}
                      onClick={() => handleLinkClick(eachLink, index)}
                      key={index}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleLinkClick(eachLink, index);
                      }}
                    >
                      {Icon && (
                        <span className="sb-nav-icon">
                          <Icon size={20} />
                        </span>
                      )}
                      <span className="sb-nav-label">{eachLink.name}</span>
                      {navigatingIdx === index && (
                        <Spinner className="sb-nav-spinner" color="success" size="sm" type="grow" />
                      )}
                    </div>
                  );
                })
              : null}
          </nav>
        </Col>

        <Col xs={12} lg={true} className="sb-main">
          <div className="sb-topbar">
            <div className="sb-topbar-left">
              <button
                className="sb-hamburger"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                &#9776;
              </button>
              <h5 className="sb-topbar-title">{props.pageName}</h5>
            </div>
            <div className="sb-topbar-right">{props.barComponent}</div>
          </div>

          <div className="sb-main-pad">
            <SectionPanel
              panelTitle={panelTitle}
              section={section}
              ref={curSectionPanel}
            />
            {props.Main}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Sidebar;
