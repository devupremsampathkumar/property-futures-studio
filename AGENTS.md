<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use shared website sections and a booking context for all content routes so navigation and enquiry interactions stay consistent.
- Keep enquiries in an insert-only public Cloud table, validated by a shared Zod schema and a server function; never expose enquiry reads to visitors.
- Keep illustrative property showcase data in a browser-safe module and mark unverified fields explicitly, so replacing it with verified inventory does not change presentation logic.
- Define page-specific metadata through the shared head helper and maintain distinct file-based routes for every navigation destination.
