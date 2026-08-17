

'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Eye, Compass, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const cards = [
  { id: 'mission', title: 'Mission', icon: Target, text: 'To empower every candidate with the clarity, tools, and connections needed to build a career that moves forward — regardless of their starting point.' },
  { id: 'vision', title: 'Vision', icon: Eye, text: 'A world where career growth is not left to chance, but guided by expertise, data, and genuine human mentorship at every step.' },
  { id: 'philosophy', title: 'Career Philosophy', icon: Compass, text: 'We believe careers are not ladders but paths — winding, personal, and full of opportunity. Our role is to help you navigate yours with intention.' },
  { id: 'approach', title: 'Our Approach', icon: Lightbulb, text: 'We combine AI-powered insights with human expertise. Data tells us where the opportunities are; people help you get there.' },
];

const ease = [0.22, 1, 0.36, 1] as const;
const duration = 0.5;

function cardTransform(hovered: string | null, id: string) {
  if (hovered === null) return { x: 0, y: 0, scale: 1, blur: 0, opacity: 1 };
  if (hovered === id) return { x: 0, y: -8, scale: 1.06, blur: 0, opacity: 1 };

  const isAdjacent = (hovered === 'mission' && id === 'vision') ||
    (hovered === 'vision' && id === 'mission') ||
    (hovered === 'philosophy' && id === 'approach') ||
    (hovered === 'approach' && id === 'philosophy');
  const isVertical = (hovered === 'mission' && id === 'philosophy') ||
    (hovered === 'vision' && id === 'approach') ||
    (hovered === 'philosophy' && id === 'mission') ||
    (hovered === 'approach' && id === 'vision');

  if (isAdjacent) return { x: 0, y: 6, scale: 0.97, blur: 0.4, opacity: 0.92 };
  if (isVertical) return { x: 0, y: 4, scale: 0.98, blur: 0.3, opacity: 0.95 };
  return { x: 0, y: 2, scale: 0.99, blur: 0.2, opacity: 0.97 };
}

function TiltCard({
  card,
  hovered,
  setHovered,
}: {
  card: typeof cards[number];
  hovered: string | null;
  setHovered: (id: string | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardHovered = hovered === card.id;

  // Raw tilt rotation values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse near edge dips that edge downwards (max 8 deg tilt to keep it subtle)
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  // Gentle spring dampening to eliminate jitter
  const smoothRotateX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(null);
  };

  const t = cardTransform(hovered, card.id);
  const Icon = card.icon;

  return (
    // Outer Container: Handles Scale & Position transforms
    <motion.div
      animate={{
        x: t.x,
        y: t.y,
        scale: t.scale,
        zIndex: isCardHovered ? 30 : 1,
        opacity: t.opacity,
        filter: `blur(${t.blur}px)`,
      }}
      transition={{ duration, ease }}
      className="h-full [perspective:1000px]"
    >
      {/* Inner Container: Handles ONLY 3D Tilt on Mouse Move */}
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setHovered(card.id)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          rotateX: isCardHovered ? smoothRotateX : 0,
          rotateY: isCardHovered ? smoothRotateY : 0,
        }}
        className={cn(
          'relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-7',
          'shadow-premium transition-shadow duration-300',
          isCardHovered && 'shadow-navy'
        )}
      >
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="relative pointer-events-none"
        >
          <div className='flex gap-3 items-center '>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </div>
          <h3 className=" text-lg font-bold text-primary">{card.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 blur-2xl" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ValueCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
      {cards.map((card) => (
        <TiltCard
          key={card.id}
          card={card}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}