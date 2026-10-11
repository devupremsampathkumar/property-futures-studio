import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { PageIntro, ProjectsSection, ContactSection } from '@/components/site';
import { pageHead, residences } from '@/lib/site-data';
export const Route = createFileRoute('/properties')({ validateSearch: z.object({category:z.enum(['All','Plots','Flats']).catch('All')}), head: () => pageHead('Properties', 'Explore residential plots and flats, with personal guidance to find the right fit for your plans.'), component: Properties });
function Properties() { const {category} = Route.useSearch(); return <><PageIntro label="PROPERTY, WITH POSSIBILITY" title={<>Find your place.<br/>Shape your <em>future.</em></>} text="Well-planned plots and thoughtfully designed apartments. Explore possibilities that begin with your requirements." image={residences} alt='Contemporary residential development with landscaped gardens' primary={label:'Explore properties',href:'#listings'} whatsapp={'Hello BVS Futuretech Engineers, I would like to know about available plots and flats.'}/><ProjectsSection full initialCategory={category}/><ContactSection/></>; }
