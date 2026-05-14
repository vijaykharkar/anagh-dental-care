import { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";
import { footerColumns } from "../data/footerLinks";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="w-full pt-16 pb-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link
            to="/"
            className="text-lg font-bold text-primary-container font-heading"
          >
            {siteConfig.brandName}
          </Link>
          <p className="font-heading text-sm leading-relaxed text-slate-500">
            {siteConfig.tagline}. Providing high-precision medical expertise in
            a calming atmosphere.
          </p>
        </div>

        {footerColumns.map((column) =>
          column.isNewsletter ? (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-primary-container uppercase tracking-wider">
                {column.title}
              </h4>
              <p className="font-heading text-sm leading-relaxed text-slate-500">
                {column.description}
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none"
                  placeholder="Your email"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-container text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          ) : (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-primary-container uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-heading text-sm leading-relaxed text-slate-500 hover:text-primary-container transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200 text-center">
        <p className="font-heading text-sm leading-relaxed text-slate-400">
          {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}
