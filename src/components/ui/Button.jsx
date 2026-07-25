import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  onNavy: 'bg-transparent text-white border-white/60 hover:bg-white hover:text-navy',
};

export default function Button({ to, href, variant = 'primary', children, className = '', ...props }) {
  const classes = `btn ${VARIANTS[variant] || VARIANTS.primary} ${className}`;
  if (to) return <Link className={classes} to={to} {...props}>{children}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
