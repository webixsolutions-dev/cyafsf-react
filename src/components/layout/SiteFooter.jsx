import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-[#C9D8DB] pt-16 pb-6">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="font-display font-extrabold text-white text-lg">CYAFSF</p>
          <p className="mt-2 max-w-[34ch] text-[#AFC3C7]">
            Stronger youth. Stronger families. Stronger communities.
          </p>
        </div>
        <nav aria-label="Explore">
          <h4 className="text-white text-sm uppercase tracking-wider mb-3">Explore</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/about" className="hover:text-white hover:underline">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-white hover:underline">Programs</Link></li>
            <li><Link to="/family-support" className="hover:text-white hover:underline">Family Support</Link></li>
            <li><Link to="/events" className="hover:text-white hover:underline">Events</Link></li>
          </ul>
        </nav>
        <nav aria-label="Take action">
          <h4 className="text-white text-sm uppercase tracking-wider mb-3">Take Action</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/get-involved" className="hover:text-white hover:underline">Volunteer</Link></li>
            <li><Link to="/donate" className="hover:text-white hover:underline">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <h4 className="text-white text-sm uppercase tracking-wider mb-3">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Phone: [to be confirmed]</li>
            <li>Email: [to be confirmed]</li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 pt-4 border-t border-white/15 flex flex-wrap justify-between gap-2 text-xs text-[#8FA6AB]">
        <span>&copy; {new Date().getFullYear()} Canadian Youth and Family Support Foundation.</span>
        <span>Privacy &middot; Accessibility &middot; Terms</span>
      </div>
    </footer>
  );
}
