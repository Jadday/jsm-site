Most readers can skip over this note. It details the technical implementation of the JSM, for anyone interested in deploying something similar of their own.

Firstly, the domain name for this website (jsm.jadday.com) is a subdomain of jadday.com, which I purchased a few years ago, and I pay about £15 yearly for it. Once you buy a domain, you can create any subdomains off it for free, so it's a great investment! The domain is currently managed in AWS Route 53, simply because I recently did an AWS certification and wanted some experience with the platform.

The web app running on this domain is hosted through AWS Amplify, which keeps it very easy and cheap to deploy, perfect for a simple site like this. Amplify is connected to my GitHub repository for the JSM, located [here](https://github.com/Jadday/jsm-site), so pushing any new content to the repo automatically re-deploys the site to include it.

As for the web app itself, this is created using [Quartz](https://quartz.jzhao.xyz/), an open source static site generator for "digital gardens" like the JSM. I write simple notes in markdown format, and Quartz turns them into a browsable website.

For writing the notes that go into the web app, I use [Obsidian](https://obsidian.md/), a markdown note-taking app with lots of nice features. Obsidian Sync allows me to synchronise my notes between phone and computer, so I can work on them anywhere. I work directly on the markdown files in the repository, but the changes I make stay local until I push them to GitHub.

**In the near future**, I plan to create a deployment pipeline to add some details to my notes before they go to the site, such as adding little "previous note" and "next note" navigations to the bottom of each page.