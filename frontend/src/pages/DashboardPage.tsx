import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type Section = 'profile' | 'appearance' | 'notifications' | 'privacy';

const light = {
  pageBg: '#FFF5EE',
  navBg: '#fff',
  navBorder: '1px solid #e5e5e5',
  brandColor: '#C4507A',
  textPrimary: '#374151',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  cardBg: '#fff',
  cardShadow: '0 2px 12px rgba(0,0,0,0.06)',
  inputBg: '#FAFAFA',
  inputBorder: '2px solid #E5E7EB',
  inputText: '#374151',
  divider: '#F3F4F6',
  sidebarActiveBg: '#FCE4EC',
  sidebarText: '#6B7280',
  toggleOff: '#E5E7EB',
  accent: '#E8A0BF',
};

const dark = {
  pageBg: '#C4507A',
  navBg: '#B0456D',
  navBorder: '1px solid #A03D62',
  brandColor: '#fff',
  textPrimary: '#fff',
  textSecondary: 'rgba(255,255,255,0.75)',
  textMuted: 'rgba(255,255,255,0.55)',
  cardBg: '#B0456D',
  cardShadow: '0 2px 12px rgba(0,0,0,0.2)',
  inputBg: '#A03D62',
  inputBorder: '2px solid rgba(255,255,255,0.2)',
  inputText: '#fff',
  divider: 'rgba(255,255,255,0.15)',
  sidebarActiveBg: 'rgba(255,255,255,0.15)',
  sidebarText: 'rgba(255,255,255,0.7)',
  toggleOff: 'rgba(255,255,255,0.25)',
  accent: '#F5D49E',
};

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<Section>('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [promoNotifs, setPromoNotifs] = useState(true);

  const t = darkMode ? dark : light;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sidebarItems: { key: Section; label: string }[] = [
    { key: 'profile', label: 'Profile' },
    { key: 'appearance', label: 'Appearance' },
    { key: 'notifications', label: 'Notifications' },
    { key: 'privacy', label: 'Privacy & Security' },
  ];

  return (
    <div style={{ ...s.page, background: t.pageBg }}>
      {/* Top Nav */}
      <nav style={{ ...s.nav, background: t.navBg, borderBottom: t.navBorder }}>
        <div style={s.navInner}>
          <span style={{ ...s.navBrand, color: t.brandColor }}>Settings</span>
          <div style={s.navRight}>
            <span style={{ ...s.navUser, color: t.brandColor }}>Hi, {user?.name}!</span>
            <button style={{ ...s.logoutBtn, color: t.brandColor, borderColor: t.accent }} onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div style={s.main}>
        {/* Sidebar */}
        <aside style={s.sidebar}>
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              style={{
                ...s.sidebarItem,
                color: t.sidebarText,
                ...(activeSection === item.key
                  ? { background: t.sidebarActiveBg, color: t.brandColor }
                  : {}),
              }}
              onClick={() => setActiveSection(item.key)}
            >
              {item.label}
            </button>
          ))}
        </aside>

        {/* Content */}
        <div style={s.content}>
          {activeSection === 'profile' && (
            <div>
              <h2 style={{ ...s.sectionTitle, color: t.brandColor }}>Profile</h2>
              <div style={{ ...s.card, background: t.cardBg, boxShadow: t.cardShadow }}>
                <div style={s.avatarRow}>
                  <div style={s.avatar}>
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 style={{ ...s.userName, color: t.brandColor }}>{user?.name}</h3>
                    <p style={{ ...s.userEmail, color: t.textSecondary }}>{user?.email}</p>
                  </div>
                </div>
                <div style={s.fieldGroup}>
                  <label style={{ ...s.fieldLabel, color: t.textMuted }}>Full Name</label>
                  <input
                    style={{ ...s.fieldInput, background: t.inputBg, border: t.inputBorder, color: t.inputText }}
                    type="text"
                    defaultValue={user?.name}
                    readOnly
                  />
                </div>
                <div style={s.fieldGroup}>
                  <label style={{ ...s.fieldLabel, color: t.textMuted }}>Email Address</label>
                  <input
                    style={{ ...s.fieldInput, background: t.inputBg, border: t.inputBorder, color: t.inputText }}
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div>
              <h2 style={{ ...s.sectionTitle, color: t.brandColor }}>Appearance</h2>
              <div style={{ ...s.card, background: t.cardBg, boxShadow: t.cardShadow }}>
                <div style={s.settingRow}>
                  <div>
                    <h3 style={{ ...s.settingLabel, color: t.textPrimary }}>Dark Mode</h3>
                    <p style={{ ...s.settingDesc, color: t.textMuted }}>Switch between light and dark themes</p>
                  </div>
                  <button
                    style={{ ...s.toggle, background: darkMode ? t.accent : t.toggleOff }}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <span style={{ ...s.toggleKnob, ...(darkMode ? s.toggleKnobOn : {}) }} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div>
              <h2 style={{ ...s.sectionTitle, color: t.brandColor }}>Notifications</h2>
              <div style={{ ...s.card, background: t.cardBg, boxShadow: t.cardShadow }}>
                <div style={s.settingRow}>
                  <div>
                    <h3 style={{ ...s.settingLabel, color: t.textPrimary }}>Email Notifications</h3>
                    <p style={{ ...s.settingDesc, color: t.textMuted }}>Receive updates via email</p>
                  </div>
                  <button
                    style={{ ...s.toggle, background: emailNotifs ? t.accent : t.toggleOff }}
                    onClick={() => setEmailNotifs(!emailNotifs)}
                  >
                    <span style={{ ...s.toggleKnob, ...(emailNotifs ? s.toggleKnobOn : {}) }} />
                  </button>
                </div>
                <div style={{ ...s.divider, background: t.divider }} />
                <div style={s.settingRow}>
                  <div>
                    <h3 style={{ ...s.settingLabel, color: t.textPrimary }}>Push Notifications</h3>
                    <p style={{ ...s.settingDesc, color: t.textMuted }}>Get notified in your browser</p>
                  </div>
                  <button
                    style={{ ...s.toggle, background: pushNotifs ? t.accent : t.toggleOff }}
                    onClick={() => setPushNotifs(!pushNotifs)}
                  >
                    <span style={{ ...s.toggleKnob, ...(pushNotifs ? s.toggleKnobOn : {}) }} />
                  </button>
                </div>
                <div style={{ ...s.divider, background: t.divider }} />
                <div style={s.settingRow}>
                  <div>
                    <h3 style={{ ...s.settingLabel, color: t.textPrimary }}>Promotional Emails</h3>
                    <p style={{ ...s.settingDesc, color: t.textMuted }}>Receive deals and offers</p>
                  </div>
                  <button
                    style={{ ...s.toggle, background: promoNotifs ? t.accent : t.toggleOff }}
                    onClick={() => setPromoNotifs(!promoNotifs)}
                  >
                    <span style={{ ...s.toggleKnob, ...(promoNotifs ? s.toggleKnobOn : {}) }} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div>
              <h2 style={{ ...s.sectionTitle, color: t.brandColor }}>Privacy & Security</h2>
              <div style={{ ...s.card, background: t.cardBg, boxShadow: t.cardShadow }}>
                <div style={s.fieldGroup}>
                  <label style={{ ...s.fieldLabel, color: t.textMuted }}>Change Password</label>
                  <input
                    style={{ ...s.fieldInput, background: t.inputBg, border: t.inputBorder, color: t.inputText }}
                    type="password"
                    placeholder="New password"
                  />
                </div>
                <button style={s.saveBtn}>Update Password</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navBrand: {
    fontSize: '20px',
    fontWeight: 800,
    letterSpacing: '1px',
    fontFamily: '"Borel", cursive',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  navUser: {
    fontSize: '14px',
    fontWeight: 600,
  },
  logoutBtn: {
    padding: '8px 20px',
    fontSize: '13px',
    fontWeight: 700,
    background: 'none',
    border: '2px solid',
    borderRadius: '50px',
    cursor: 'pointer',
  },
  main: {
    display: 'flex',
    flex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    padding: '32px 24px',
    gap: '32px',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '220px',
    flexShrink: 0,
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 600,
    background: 'none',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'left',
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: '"Borel", cursive',
  },
  card: {
    borderRadius: '16px',
    padding: '32px',
  },
  avatarRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '32px',
  },
  avatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#E8A0BF',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 800,
  },
  userName: {
    fontSize: '18px',
    fontWeight: 700,
    margin: '0',
  },
  userEmail: {
    fontSize: '14px',
    margin: 0,
    lineHeight: '1.2',
  },
  fieldGroup: {
    marginBottom: '20px',
  },
  fieldLabel: {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  fieldInput: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '15px',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  settingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
  },
  settingLabel: {
    fontSize: '15px',
    fontWeight: 600,
    margin: '0 0 2px 0',
  },
  settingDesc: {
    fontSize: '13px',
    margin: 0,
  },
  divider: {
    height: '1px',
    margin: '16px 0',
  },
  toggle: {
    width: '48px',
    height: '28px',
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background 0.2s',
    flexShrink: 0,
  },
  toggleKnob: {
    display: 'block',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#fff',
    position: 'absolute',
    top: '3px',
    left: '3px',
    transition: 'left 0.2s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
  },
  toggleKnobOn: {
    left: '23px',
  },
  saveBtn: {
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: 700,
    color: '#fff',
    background: '#E8A0BF',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  },
};
