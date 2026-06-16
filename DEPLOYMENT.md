# Deployment

1. Push the project to GitHub.
2. Import the GitHub repository into Vercel.
3. Confirm the framework preset is Next.js.
4. Use the build command: `npm run build`.
5. Leave the output directory at the default value; do not set it manually.
6. Deploy.
7. After Vercel provides the final production domain, replace the placeholder site URL in `siteConfig.url` and metadata references.

Vercel automatically creates preview deployments for GitHub branches and pull requests.

Before the final public deployment, confirm the CV file exists at `public/cv/Nizar_Madani_CV.pdf`.
