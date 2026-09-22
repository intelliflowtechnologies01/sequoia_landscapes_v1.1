export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact us", href: "/contact" },
];

export const services = [
  { title: "Landscape design & planning", short: "Site-led concepts, spatial planning and a clear design language.", description: "From site study and concept direction to planting intent and material palettes, we bring every layer into one coherent plan." },
  { title: "Landscape execution", short: "Disciplined delivery that protects the intent of every detail.", description: "Coordinated site preparation, grading, construction, planting and finishing delivered with careful supervision." },
  { title: "Hardscape & materiality", short: "Paths, terraces, walls and edges resolved as part of the whole.", description: "Stone, concrete, timber and metal are selected for context, touch, durability and their relationship with the architecture." },
  { title: "Planting & softscape", short: "Climate-aware planting compositions designed to mature gracefully.", description: "Layered canopies, seasonal rhythm and responsible species selection create gardens with structure, texture and life." },
  { title: "Water & irrigation", short: "Thoughtful water systems that balance experience and efficiency.", description: "Irrigation planning, drainage thinking and water features are integrated early for performance, ease of care and calm." },
  { title: "Garden stewardship", short: "Ongoing care guided by how living landscapes establish and evolve.", description: "Seasonal attention, pruning, nutrition and plant-health observation help each landscape grow into its intended character." },
];

export type Project = { title: string; type: string; location: string; image: string; alt: string };

export const projects: Project[] = [
  { title: "Dusk Garden", type: "Residential water garden", location: "Design direction", image: "/images/project-dusk-garden-v2.png", alt: "A contemporary residence set within a reflective water garden and layered planting at dusk" },
  { title: "Canopy Courtyard", type: "Tree-led courtyard", location: "Design direction", image: "/images/project-canopy-courtyard-v2.png", alt: "A mature tree rising through a limestone courtyard with dense planting and a narrow water rill" },
  { title: "Skyline Refuge", type: "Rooftop landscape", location: "Design direction", image: "/images/project-rooftop-refuge-v2.png", alt: "A layered rooftop garden with stone, meadow planting and a water channel overlooking the city at sunset" },
];
