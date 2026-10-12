import { createFileRoute } from '@tanstack/react-router';
import { Hero, Offerings, ProjectsSection, Solutions, Trust, Process, AboutBlock, Testimonials, ContactSection, FAQ } from '@/components/site';
import { pageHead } from '@/lib/site-data';
export const Route = createFileRoute('/')({ head: () => pageHead('Find the right property. Build the right future.', 'Residential plots, flats and thoughtfully planned projects, with complete planning, estimation and construction solutions designed around you.'), component: Home });
function Home() { return <><Hero/><Offerings/><ProjectsSection/><Solutions/><Trust/><Process/><AboutBlock/><Testimonials/><FAQ/><ContactSection/></>; }
