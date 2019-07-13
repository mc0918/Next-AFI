FRAMEWORK FOR THE ARTISTS FIGHTING ISOLATION WEBSITE CURRENTLY IN DEVELOPMENT

built using React and Next.js

If you're looking for the best documentation/descriptions as to how the code of the components and pages work, your best bet is to start with the CardImgLeft Component and index.js page.

To deploy to heroku package.json needs the following:
1. build and start scripts, start specifically with "next start -p $PORT" so heroku can assign it a PORT
2. the heroku-postbuild script

You'll also need the next.config.js file