# Gloss’d

Personal blog-style site for posting book reviews.

Based on [Immaculate template](https://cdn.ampproject.org/c/siawyoung.com/immaculate/) using [Tufte CSS](https://github.com/edwardtufte/tufte-css)

## To-do

- [X] ~~remove underline from sidenav list items~~ `15/03/2019`
- [X] ~~add home icon to top of sidenav~~ `15/03/2019`
- [X] ~~add paths to hrefs sidenav~~ `15/03/2019`
- [X] ~~set site title style to mirror page headings~~ `23/03/2019`
- [X] ~~remote double copyright element~~ `23/03/2019`
- [X] ~~add class `active` to sidenav 'tab' based on url~~ `24/03/2019` answer [here](https://stackoverflow.com/questions/55323978/how-to-add-class-active-to-nav-item-whose-href-is-in-the-location-pathname/55324518#55324518)
- [X] ~~move static pages into _pages folder~~ `24/03/2019` solution [here](https://github.com/jekyll/jekyll/issues/920#issuecomment-63093764)
- [X] ~~set homepage 'tab' to `active` class by default on pageload~~ `24/03/2019` resolved by active class above
- [X] ~~fix order of nav links~~ `25/03/2019` solved by navigation_weight. see [here](https://learn.cloudcannon.com/jekyll/simple-navigation/)
- [X] ~~fix blank nav links~~ `25/03/2019` solved by above
- [X] ~~add thumbnail images to post preview(?)~~ `24/03/2019`
- [X] ~~add tags to post preview~~ `24/03/2019`
- [X] ~~add labelling method to side navigation~~ `11/04/2019`
- [ ] find a better way to store book metadata i.e. not as YAML frontmatter
- [X] ~~add breadcrumbs beneath small header nav~~ `01/04/2019` added inline
- [X] ~~add reading time to post page and post index~~ `01/04/2019` see [solution](https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/)
- [X] ~~truncate post preview~~ `06/04/2019` see [liquid filter](https://shopify.github.io/liquid/filters/truncate/)
- [X] ~~collapse side-nav on smaller screen widths~~ `16/04/2019`
- [X] ~~remove breadcrumbs on smaller screens~~ `16/04/2019`
- [X] ~~make header and footer full-width i.e. outside of first-col~~ `16/04/2019`
- [X] ~~add teaser content to side-col~~ `03/05/2019`
- [ ] fix side col layout on smaller screen widths
- [ ] add all posts to `Reviews` page
- [ ] paginate posts on homepage to 3
- [ ] fix header rules so full-width on all screen sizes
- [ ] look into original sidenote feature for footnote referencing
- [X] make header sticky<sup>1</sup>
- [ ] change z-index of side-nav so overlays header

<sup>1</sup>
``````css
position: sticky;
top: 0;
background-color: #fff;
z-index: 1;
border-bottom: 1px solid whitesmoke;
`````````` 

## License

MIT

## Config (updated 04/05/2019)

````````
├── Gemfile 
├── Gemfile.lock
├── LICENSE
├── README.md
├── _config.yml /* main site information/values */
├── _data
│   └── book-data.yml /* book metadata displayed on site */
├── _includes
│   ├── book-meta.html /* book metadata (aside) */
│   ├── book-teaser.html /* extract from book (aside) */
│   ├── breadcrumbs.html /* current page displayed in header */
│   ├── col-two.html /* side column */
│   ├── coming-soon.html /* forthcoming review displayed on all pages execept posts (aside) */
│   ├── featured.html /* placeholder text displayed on all pages except posts (aside) */
│   ├── footer.html
│   ├── head.html
│   ├── header.html
│   ├── loop-thru-posts.html /* logic to reviews feed (not included anywhere) */
│   ├── metadata.json
│   ├── reading-time.html /* 'plugin' to calculate reading time of each post */
│   ├── scripts.html
│   ├── sidenav.html /* dynamic sidebar */
│   └── styles.scss /* custom styles imported into main stylesheet inc. overrides */
├── _layouts
│   ├── default-reverse.html /* default with column-reverse to display aside modules at top of page */
│   ├── default.html /* aside wraps to page bottom */
│   ├── page.html /* aside wraps to page bottom */
│   └── post.html /* aside wraps to page bottom */
├── _pages
│   ├── about.md
│   ├── contact.md
│   ├── more.md
│   ├── people.md
│   ├── reviews
│   │   └── index.html /* nested index page set as paginate_path */
│   └── tags.md
├── _plugins
│   └── shortcodes.rb
├── _posts
│   └── reviews
│       ├── 2019-03-04-cusk-outline.md
│       ├── 2019-03-05-black-prague-nights.md
│       ├── 2019-03-23-johnson-train-dreams.md
│       ├── 2019-03-24-johnson-everything-under.md
│       └── 2019-05-01-d'arcy-waiting-for-the-bullet.md
├── _sass
│   ├── _lean_tufte.scss /* trimmed down version of tufte.scss (not used) */
│   ├── _syntax-highlighting.scss
│   ├── _tufte.scss /* default styles */
│   └── responsive.scss /* media queries imported into main scss file */
├── _site /* where the site is compiled (contents hidden) */
├── all-posts.json /* in progress */
├── assets
│   ├── css
│   ├── et-book /* defaultfont files */
│   ├── icons /* from flaticon (see about page for more) */
│   ├── images /* naming convention is <author-surname>-<book-title>.jpg */
│   │   ├── black-prague-nights.jpg /* for example */
│   └── js
│       └── main.js /* contains the few scripts used on site */
├── feed.xml /* inherited from forked template (untested) */
├── index.html

41 directories, 137 files
````````````````