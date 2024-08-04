import * as Ariakit from "@ariakit/react";
import clsx from "clsx";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import * as React from "react";

export function Menu({
  open,
  setOpen,
  label,
  children,
  animate,
  transition,
  variants,
  initial,
  exit,
  ...props
}, ref) {
  const menu = Ariakit.useMenuStore({ open, setOpen });
  const currentPlacement = menu.useState("currentPlacement");
  const mounted = menu.useState("mounted");
  return (
    <MotionConfig reducedMotion="user">
      <Ariakit.MenuButton
        store={menu}
        ref={ref}
        {...props}
        className={clsx("button", props.className)}
      >
        {label}
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <AnimatePresence>
        {mounted && (
          <Ariakit.Menu
            store={menu}
            alwaysVisible
            className="menu"
            data-placement={currentPlacement}
            render={
              <motion.div
                initial={initial}
                exit={exit}
                animate={animate}
                variants={variants}
                transition={transition}
              />
            }
          >
            <Ariakit.MenuArrow className="menu-arrow" />
            {children}
          </Ariakit.Menu>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export const MenuItem = React.forwardRef(function MenuItem(props, ref) {
  return (
    <motion.div
      ref={ref}
      {...props}
      className={clsx("menu-item", props.className)}
    />
  );
});
