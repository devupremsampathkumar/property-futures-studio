import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ProjectsSection, ContactSection } from '@/components/site';
import { pageHead } from '@/lib/site-data';
export const Route = createFileRoute('/projects')({ head: () => pageHead('Residential projects', 'Explore considered residential developments and request project details or arrange a site visit.'), component: Projects });
function Projects() { return <><PageIntro label="A VISION FOR BETTER LIVING" title={<>Considered spaces.<br/>Lasting <em>possibilities.</em></>} text="Residential developments centred around quality, planning and long-term value. Explore the vision, then talk to us about current project details."/><ProjectsSection full/><ContactSection/></>; }
