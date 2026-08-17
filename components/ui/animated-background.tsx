// "use client";

// import { AnimatePresence, Transition, motion } from "framer-motion";
// import React, { Children, useState } from "react";

// export type AnimatedBackgroundProps = {
//   children: React.ReactNode;
//   defaultValue?: string;
//   onValueChange?: (newActiveId: string | null) => void;
//   className?: string;
//   transition?: Transition;
//   enableHover?: boolean;
// };

// export function AnimatedBackground({
//   children,
//   defaultValue,
//   onValueChange,
//   className,
//   transition,
//   enableHover = false,
// }: AnimatedBackgroundProps) {
//   const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);

//   const handleSetActiveId = (id: string | null) => {
//     setActiveId(id);
//     if (onValueChange) {
//       onValueChange(id);
//     }
//   };

//   return (
//     <>
//       {Children.map(children, (child, index) => {
//         if (!React.isValidElement(child)) return child;

//         // Safely extract data-id from child props without TS errors
//         const childProps = child.props as Record<string, unknown>;
//         const id = (childProps["data-id"] as string) ?? `item-${index}`;
//         const isSelected = activeId === id;

//         return (
//           <div
//             key={id}
//             className="relative h-full"
//             onMouseEnter={() => enableHover && handleSetActiveId(id)}
//             onMouseLeave={() => enableHover && handleSetActiveId(null)}
//           >
//             <AnimatePresence>
//               {isSelected && (
//                 <motion.div
//                   layoutId="animated-bg"
//                   className={className}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={
//                     transition ?? {
//                       type: "spring",
//                       bounce: 0.2,
//                       duration: 0.6,
//                     }
//                   }
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     zIndex: 0,
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//             <div className="relative z-10 h-full">{child}</div>
//           </div>
//         );
//       })}
//     </>
//   );
// }































"use client";

import { AnimatePresence, Transition, motion } from "framer-motion";
import React, { Children, useState } from "react";

export type AnimatedBackgroundProps = {
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    if (onValueChange) {
      onValueChange(id);
    }
  };

  return (
    <>
      {Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const childProps = child.props as Record<string, unknown>;
        const id = (childProps["data-id"] as string) ?? `item-${index}`;
        const isSelected = activeId === id;

        return (
          <div
            key={id}
            className="relative h-full"
            onMouseEnter={() => enableHover && handleSetActiveId(id)}
            onMouseLeave={() => enableHover && handleSetActiveId(null)}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  layoutId="animated-bg"
                  className={className}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={
                    transition ?? {
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }
                  }
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10 h-full">{child}</div>
          </div>
        );
      })}
    </>
  );
}