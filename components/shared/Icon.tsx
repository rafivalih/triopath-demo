import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Code2,
  Compass,
  Crown,
  Database,
  FileCheck2,
  FileText,
  Filter,
  Headphones,
  KeyRound,
  Lightbulb,
  Link2,
  MessageSquare,
  PieChart,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  ArrowUpRight, BarChart3, Bell, Brain, Briefcase, CheckCircle2, ChevronRight, ClipboardList, Code: Code2, Compass, Crown, Database, FileCheck2, FileText, Filter, Headphones, Key: KeyRound, Lightbulb, Link: Link2, MessageSquare, PieChart, Rocket, Search, Shield, Sparkles, Target, TrendingUp, UserCheck, Users, WalletCards,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] || Sparkles;
  return <Component className={className} aria-hidden="true" />;
}
