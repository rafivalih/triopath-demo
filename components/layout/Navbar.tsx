

"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import ButtonHover from "../shared/ButtonHover";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  UserRound,
  X,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { navLinks } from "@/constants/site";
import { cn } from "@/lib/utils";
import logo from "../../app/images/favicon.png";
import Image from "next/image";

const dropdownEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setUserMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }

      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -110 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-3 max-w-[1400px] px-3 sm:mt-4 sm:px-6 lg:px-8">
        <nav
          ref={navRef}
          className="relative min-w-0 overflow-visible rounded-2xl border border-white/40 bg-white/10 px-3 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-colors duration-300 sm:px-4 sm:py-3"
        >
          <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-4">

            {/* Logo */}
            <Link
              href="/"
              className="group flex min-w-0 shrink items-center gap-2.5"
              aria-label="TRIOPATH Careers home"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                <Image
                  src={logo}
                  alt="TRIOPATH logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain bg-transparent"
                />
              </span>

              <span className="min-w-0 truncate text-base font-bold tracking-[0.12em] text-primary">
                TRIOPATH
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden min-w-0 items-center gap-5 xl:flex 2xl:gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative flex items-center"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() =>
                    link.dropdown && setOpenDropdown(null)
                  }
                >
                  {link.dropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label
                            ? null
                            : link.label
                        )
                      }
                      className={cn(
                        "inline-flex h-8 items-center text-[13px] font-medium leading-none transition-colors duration-200 hover:text-accent focus:outline-none focus-visible:text-accent",
                        pathname.startsWith(
                          link.dropdown[0].href
                            .split("/")
                            .slice(0, 2)
                            .join("/")
                        )
                          ? "text-accent"
                          : "text-primary/75"
                      )}
                      aria-expanded={openDropdown === link.label}
                    >
                      <span>{link.label}</span>

                      {/* Chevron Down */}
                      <ChevronDown className="ml-1 h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex h-8 items-center text-[13px] font-medium leading-none transition-colors  hover:text-accent",
                        pathname === link.href ||
                          (link.href !== "/" &&
                            pathname.startsWith(link.href))
                          ? "text-accent"
                          : "text-primary/75"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown &&
                      openDropdown === link.label && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.98,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.98,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: dropdownEase,
                          }}
                          className="absolute left-1/2 top-full z-50 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                        >
                          <div className="overflow-hidden rounded-2xl border border-border bg-transparent p-2 shadow-premium">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-blue-100"
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                  {link.label === "Services" ? (
                                    <Users className="h-4 w-4" />
                                  ) : (
                                    <BookOpen className="h-4 w-4" />
                                  )}
                                </span>

                                <span>
                                  <span className="block text-sm font-semibold text-primary">
                                    {item.label}
                                  </span>

                                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                                    {item.description}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden items-center gap-3 xl:flex">

              {/* User Menu */}
              <div
                className="relative"
                ref={userMenuRef}
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button
                  type="button"
                  aria-label="User menu"
                  aria-expanded={userMenuOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-3xl bg-secondary text-primary transition-all hover:bg-accent hover:text-white"
                >
                  <UserRound className="h-[18px] w-[18px]" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: dropdownEase,
                      }}
                      className="absolute right-0 top-full z-50 w-56 pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-transparent p-2 shadow-premium">

                        <Link
                          href="/pricing"
                          onClick={() => setUserMenuOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <GraduationCap className="h-4 w-4" />
                          </span>

                          <span>
                            <span className="block text-sm font-semibold text-primary">
                              Candidate Corner
                            </span>

                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              Plans, resume tools, and resources
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/login?role=recruiter"
                          onClick={() => setUserMenuOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <Briefcase className="h-4 w-4" />
                          </span>

                          <span>
                            <span className="block text-sm font-semibold text-primary">
                              Recruiters Corner
                            </span>

                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              Hiring and talent tools
                            </span>
                          </span>
                        </Link>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get Started */}
              <ButtonHover
                text="Get Started"
                href="/contact#contact-form"
                className="w-[11.2rem] text-sm"
              />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden">

              <div
                className="relative"
                ref={userMenuRef}
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button
                  type="button"
                  aria-label="User menu"
                  aria-expanded={userMenuOpen}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"
                >
                  <UserRound className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: dropdownEase,
                      }}
                      className="absolute right-0 top-full z-50 w-56 pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium">

                        <Link
                          href="/pricing"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <GraduationCap className="h-4 w-4" />
                          </span>

                          <span>
                            <span className="block text-sm font-semibold text-primary">
                              Candidate Corner
                            </span>

                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              Plans and resources
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/login?role=recruiter"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <Briefcase className="h-4 w-4" />
                          </span>

                          <span>
                            <span className="block text-sm font-semibold text-primary">
                              Recruiters Corner
                            </span>

                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              Hiring tools
                            </span>
                          </span>
                        </Link>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white"
              >
                {mobileOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: dropdownEase,
                }}
                className="overflow-hidden xl:hidden"
              >
                <div className="mt-4 max-h-[70vh] overflow-y-auto border-t border-border pt-3">

                  {navLinks.map((link) => (
                    <div
                      key={link.label}
                      className="border-b border-border/60 last:border-0"
                    >
                      {link.dropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === link.label
                                  ? null
                                  : link.label
                              )
                            }
                            className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-primary/80"
                          >
                            <span>{link.label}</span>
                            <ChevronDown className="h-4 w-4" />
                          </button>

                          <AnimatePresence>
                            {openDropdown === link.label && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                transition={{
                                  duration: 0.25,
                                  ease: dropdownEase,
                                }}
                                className="overflow-hidden pb-2 pl-3"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-2 text-sm text-muted-foreground hover:text-accent"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="block py-3 text-sm font-medium text-primary/80"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  <Link
                    href="/contact#contact-form"
                    className="slide-hover mt-4 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    <span className="slide-hover-label">
                      Get Started
                    </span>
                  </Link>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}