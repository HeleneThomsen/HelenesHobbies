---
---
# Welcome to My Blog
{% capture text %}

  Hi!
  My name is Helene and this is my blog.
  I am a PhD student at Aarhus University, Denmark and in my spare-time I do a lot of different creative hobbies.
  This is a blog for these hobbies and my little labrador puppy Bonnie 🐾
  I mostly work with yarn 🧶 however I do also have the occasional sewing project 🧵🪡 or card making project 💌 that I would like to feature on this blog as well.
  This blog will mostly be documentation of my processes to help myself remember details in the future.
  However I do also hope that this might be of interest or usefull to others. 😊

{%
  include button.html
  link="overview"
  text="See Overview"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/me_v2.jpg"
  link="overview"
  title="About me"
  text=text
  image_class="tall-feature-image"
%}

## Recently Finished Projects

{% capture text %}

My yarn-loving collegues and friends from work are both having a birthday coming up this month and I have been planning to sew knitting bags to them for a long while now.

{%
  include button.html
  link="wip"
  text="See Knitting Bags"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
  
%}

{% endcapture %}

{%
  include feature.html
  image="images/dog_w_yarn_2.png"
  link="wip"
  title="Knitting bags"
  flip=true
  style="bare"
  text=text
  image_class="tall-feature-image"
%}

{% capture text %}

I was going crazy listening to the clanging of the dog collar clip and the metal ring banging each other when my puppy moved around. Furthermore, it should be more healthy or secure to have another configuration for the clasp so I re-sewed it now that I had set up my sewing machine to sew the knitting bags

{%
  include button.html
  link="wip"
  text="See dog collar"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/dog_w_yarn_1.png"
  link="wip"
  title="Dog Collar"
  text=text
  image_class="tall-feature-image"
%}
