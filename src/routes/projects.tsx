import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ProjectsSection, ContactSection } from '@/components/site';
import { pageHead, construction } from '@/lib/site-data';
export const Route = createFileRoute('/projects')({ head: () => pageHead('Residential projects', 'Explore considered residential developments and request project details or arrange a site visit.'), component: Projects });
function Projects() { return <><PageIntro label="A VISION FOR BETTER LIVING" title={<>Considered spaces.<br/>Lasting <em>possibilities.</em></>} text="Residential developments centred around quality, planning and long-term value. Explore the vision, then talk to us about current project details." image={construction} alt='Residential building under construction with a crane' primary={label:'View projects',href:'#listings'} whatsapp={'Hello BVS Futuretech Engineers, I would like details about your residential projects.'}/><ProjectsSection full/><ContactSection/></>; }
