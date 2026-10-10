import residences from '@/assets/residences-hero.jpg';
import plots from '@/assets/plots.jpg';
import apartments from '@/assets/apartments.jpg';
import planning from '@/assets/svc-planning.jpg';
import estimation from '@/assets/svc-estimation.jpg';
import construction from '@/assets/svc-construction.jpg';
import visual3d from '@/assets/svc-3d.jpg';
export { residences, plots, apartments, planning, estimation, construction, visual3d };
export const BRAND = 'BVS Futuretech Engineers';
export const WHATSAPP_DISPLAY = '+91 96038 13915';
export function waLink(message = `Hello ${BRAND}, I would like to know more about your real estate and construction services.`) { return `https://wa.me/919603813915?text=${encodeURIComponent(message)}`; }
export const serviceShowcase = [
 { title: 'Architectural Planning & Design', text: 'Architectural planning and design solutions tailored to your land, lifestyle and requirements.', image: planning, alt: 'Floor plan blueprints and drafting tools on a planning desk' },
 { title: '2D Architectural Drawings', text: 'Clear floor plans and working drawings that turn your requirements into a buildable layout.', image: planning, alt: 'Detailed 2D floor plan drawing', pos: '30% 70%' },
 { title: '3D Architectural Visualization', text: 'Realistic 3D views that help you see your home before construction begins.', image: visual3d, alt: '3D visualization of a modern two-storey villa at dusk' },
 { title: 'Construction Cost Estimation', text: 'Clear and practical construction cost estimates to help you plan your investment with confidence.', image: estimation, alt: 'Quantity sheets, calculator and construction material samples' },
 { title: 'Construction Services', text: 'From planning to construction, we coordinate execution with a focus on quality, timelines and workmanship.', image: construction, alt: 'Residential building under construction with a tower crane' },
 { title: 'Residential Plots for Sale', text: 'Well-planned residential plots in promising locations, selected with your requirements in mind.', image: plots, alt: 'Planned residential plot layout' },
 { title: 'Flats & Apartments for Sale', text: 'Thoughtfully planned residential spaces designed for comfortable modern living.', image: apartments, alt: 'Contemporary apartment building facade' },
];
export const projects = [
 { name: 'Green Valley Residences', type: 'Residential Projects', image: residences, description: 'A thoughtfully planned residential development designed for comfortable living, with planned infrastructure and convenient connectivity.' },
 { name: 'Residential plots', type: 'Plots', image: plots, description: 'Well-planned residential plots in promising locations, selected with your requirements in mind.' },
 { name: 'Modern apartment living', type: 'Flats', image: apartments, description: 'Thoughtfully planned residential spaces designed for comfortable modern living.' },
];
export type Project = typeof projects[number];
export const services = [
 ['Planning & design', 'Architectural planning and design solutions tailored to your land, lifestyle and requirements.'],
 ['Estimation', 'Clear and practical construction cost estimates to help you plan your investment with confidence.'],
 ['Construction & execution', 'From planning to construction, we coordinate the execution process with a focus on quality, timelines and workmanship.'],
 ['Property guidance', 'Professional assistance to help you understand available properties and make informed decisions.'],
];
export const pillars = [
 ['Transparent guidance', 'Clear communication throughout your property journey.'],
 ['End-to-end support', 'From property selection to planning and execution, we help simplify the process.'],
 ['Quality focus', 'Planned execution, quality materials and professional coordination.'],
 ['Customer first', 'Every project begins with understanding your requirements.'],
 ['Local understanding', 'Knowledge of local property markets, development requirements and construction processes.'],
];
export const steps = [
 ['Tell us your requirement', 'A plot, a flat, a residential project, or a home you want to build. Your journey begins with you.'],
 ['Get expert guidance', 'We understand your requirements and suggest suitable options.'],
 ['Explore & evaluate', 'Visit the property or project, explore the surroundings and understand the details.'],
 ['Plan with confidence', 'For construction requirements, we help with planning and practical estimation.'],
 ['Bring it to life', 'Move from approved plans to professionally coordinated project execution.'],
];
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} — BVS Futuretech Engineers` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — BVS Futuretech Engineers` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
