import './navigation-section.css';

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
      <div className="logo"></div>
      <div>
        {links.map((a) => (
          <a
            href="#"
            className="link">
            {a.charAt(0).toUpperCase() + a.slice(1)}
          </a>
        ))}
      </div>
      <div className='profile'></div>
    </div>
  );
};
