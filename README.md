# Octacore mini-CMS
- Renseigne `.env.local` (généré) avec `SUPABASE_SERVICE_ROLE_KEY` réel + vérifie les clés Supabase/ADMIN; ne pas committer ce fichier.
- Lance `npm run dev`, blog public sur `/blog`, interface admin sur `/admin` (mot de passe = ADMIN_SECRET).
- Les routes admin utilisent le service role côté serveur uniquement; le public lit uniquement les posts `published`.

```
NEXT_PUBLIC_SUPABASE_URL=https://pghxomonnfvqycmwstqz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHhvbW9ubmZ2cXljbXdzdHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NjQ4MzgsImV4cCI6MjA4NTA0MDgzOH0.Q9JR2H-0xOc-x0oG9NEX5hpEcN3B2UccQTaLpCdon_U
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHhvbW9ubmZ2cXljbXdzdHF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTQ2NDgzOCwiZXhwIjoyMDg1MDQwODM4fQ.NBRGBVZd6qwnUkzma59wwhBAa7JjcZbqdqulQ7hMjCo
ADMIN_SECRET=Octacore@2k24
```
