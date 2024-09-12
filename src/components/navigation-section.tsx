import './navigation-section.css';
import Avatar from '../assets/avatar-24.png';
import IconExpand from '../assets/icon.png';
import Logo from '../assets/logo.svg';

export const NavigationSection = () => {
  const links = [
    'home',
    'students',
    'staff',
    'schedule',
    'classes',
    'finance',
    'correspondence',
    'attendance',
    'packages',
  ];
  return (
    <div className="navigation-section">
      <div className="logo">
      <img src={Logo} />
      </div>
      <div>
        {links.map((a, idx) => (
          <a
            href="#"
            key={`${idx}${a}`}
            className="link">
            {a.charAt(0).toUpperCase() + a.slice(1)}
          </a>
        ))}
      </div>
      <div className="profile">
        <div className="avatar">
          <img src={Avatar} />
        </div>
        <div className="expand-icon">
          <img src={IconExpand} />
        </div>
      </div>
    </div>
  );
};
