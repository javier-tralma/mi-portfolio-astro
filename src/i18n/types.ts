// Type utilities for dot notation access to nested translation objects

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...0[]];

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: K extends string | number
          ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
          : never;
      }[keyof T]
    : "";

export type UILanguage = "es" | "en";

// We export the raw dictionary shape type from ui.ts
// This is a simplified approach that works for our known structure
export type TranslationKey =
  | "meta.title"
  | "meta.description"
  | "nav.home"
  | "nav.about"
  | "nav.projects"
  | "nav.skills"
  | "nav.distros"
  | "hero.badge1"
  | "hero.badge2"
  | "hero.title1"
  | "hero.title2"
  | "hero.subtitle"
  | "hero.ctaProjects"
  | "hero.ctaAbout"
  | "hero.scroll"
  | "about.title"
  | "about.titleAccent"
  | "about.bio1"
  | "about.bio2"
  | "about.stats.projects"
  | "about.stats.years"
  | "about.stats.coffee"
  | "about.terminal.command"
  | "about.terminal.label.name"
  | "about.terminal.label.role"
  | "about.terminal.label.location"
  | "about.terminal.value.name"
  | "about.terminal.value.role"
  | "about.terminal.value.location"
  | "about.terminal.output.line1"
  | "about.terminal.output.line2"
  | "about.terminal.output.line3"
  | "about.terminal.output.line4"
  | "projects.title"
  | "projects.viewProject"
  | "projects.list.0.title"
  | "projects.list.0.description"
  | "projects.list.1.title"
  | "projects.list.1.description"
  | "projects.list.2.title"
  | "projects.list.2.description"
  | "projects.list.3.title"
  | "projects.list.3.description"
  | "skills.title"
  | "distros.title"
  | "distros.subtitle"
  | "distros.scrollHint"
  | "distros.experience.daily"
  | "distros.experience.medium"
  | "distros.experience.advanced"
  | "distros.experience.basic"
  | "distros.mainBadge"
  | "footer.madeWith"
  | "footer.using"
  | "footer.copyright";
