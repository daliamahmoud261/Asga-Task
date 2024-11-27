import {
  animate,
  animation,
  query,
  sequence,
  stagger,
  style
} from "@angular/animations";

export const SidebarOpenAnimation = animation([
  style({ right: "-{{menuWidth}}" }),
  query(".menu-item", [style({ transform: "translateX(-{{menuWidth}})" })]),
  sequence([
    animate("200ms", style({ right: "0" })),
    query(".menu-item", [
      stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
    ])
  ])
]);

export const SidebarCloseAnimation = animation([
  style({ right: "0" }),
  query(".menu-item", [style({ transform: "none" })]),
  sequence([
    query(".menu-item", [
      stagger(-50, [
        animate(
          "{{animationStyle}}",
          style({ transform: "translateX(+{{menuWidth}})" })
        )
      ])
    ]),
    animate("200ms", style({ right: "-{{menuWidth}}" }))
  ])
]);
