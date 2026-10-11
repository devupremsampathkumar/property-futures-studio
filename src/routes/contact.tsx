import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ContactSection, FAQ } from '@/components/site';
import { pageHead, apartments } from '@/lib/site-data';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact & site visits', 'Tell us your property or construction requirements and request personal guidance or a site visit.'), component: Contact });
function Contact() { return <><PageIntro label="LET’S START WITH YOU" title={<>Your next move.<br/>Our full <em>attention.</em></>} text="Looking for the right property or planning to build? Share your requirements and request a consultation or a site visit." image={apartments} alt='Contemporary apartment building facade' primary={{label:'Send an enquiry',href:'#contact'}} whatsapp={undefined}/><ContactSection/><FAQ/></>; }
