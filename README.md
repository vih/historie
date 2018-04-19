# History of [Vejle Idrætshøjskole](http://historie.vih.dk)

Site created in Jekyll based on [Minimal Made Mistakes theme](https://github.com/mmistakes/minimal-mistakes).

## Tools used

- **Timelines** are created using [TimelineJS3](https://timeline.knightlab.com/)
- **Google Photos**. Links directly to Google Photos are created using [CTRLQ.org](https://ctrlq.org/google/photos/). 
- **Google Drive**. Images are shared, and then urls are rewritten to `uc?id=`

## Develop using Vagrant

Follow [instructions here](http://kappataumu.com/articles/vagrant-jekyll-github-pages-streamlined-content-creation.html).

    $ git clone https://github.com/kappataumu/vagrant-up-github-pages.git
    $ cd vagrant-up-github-pages
    $ export REPO='https://github.com/vih/historie.git'
    $ vagrant up
    $ vagrant ssh
    $ gem install bundle

When starting up the server on later occassions, you need to do `vagrant provision` to get jekyll running. You can find the site at `http://localhost:4000`.
