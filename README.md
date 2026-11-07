# Mahmudur Rashid Portfolio

## Publish on Vercel

1. Push this project to a GitHub repository. If you have not created a repository for it yet, create an empty one on GitHub, then run these commands from the project folder (replace the URL with your repository URL):

   ```sh
   git init
   git add .
   git commit -m "Prepare portfolio for deployment"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repository.git
   git push -u origin main
   ```

2. Sign in at [Vercel](https://vercel.com/), choose **Add New → Project**, and import the GitHub repository.
3. Deploy. Vercel uses `vercel.json` to build the site and publish the `dist` folder.
4. Copy the `https://` URL Vercel gives you and share it. Future pushes to `main` will update the live site.
