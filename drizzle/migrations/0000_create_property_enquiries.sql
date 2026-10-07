CREATE TABLE public.property_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
 interest text NOT NULL CHECK (interest IN ('Residential Plot','Flat / Apartment','Residential Project','House Planning','Construction','Estimation','Other')),
 preferred_location text NOT NULL DEFAULT '' CHECK (char_length(preferred_location) <= 150),
 budget_range text NOT NULL DEFAULT '' CHECK (char_length(budget_range) <= 100),
 message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 2000),
 project text NOT NULL DEFAULT '' CHECK (char_length(project) <= 150)
);
GRANT INSERT ON public.property_enquiries TO anon;
GRANT ALL ON public.property_enquiries TO service_role;
ALTER TABLE public.property_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may submit enquiries" ON public.property_enquiries FOR INSERT TO anon WITH CHECK (true);