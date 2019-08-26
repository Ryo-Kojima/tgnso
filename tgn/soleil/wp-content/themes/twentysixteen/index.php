<?php get_header(); ?>
<div class="breadCrumbs">
  <div class="inner"><a href="http://tgn-soleil.com/index.html">top</a> > それいゆ通信記事一覧</div>
</div>
<section class="soleil">
	<div class="title">
	  <span></span>
	  <div>
		<p>それいゆ通信</p>
		<div class="line"></div>
	  </div>
	</div>
	<div class="wrap">
		<div class="main">
				<div class="article-list-title">
				  <span ></span>
				  <h1>記事一覧</h1>
				</div>
				<div class="article-list">
					<ul><?php query_posts('posts_per_page=24'); ?>
						<?php if (have_posts()):while(have_posts()):the_post(); ?>
						<li><span class="arrow">></span><a href="<?php the_permalink(); ?>">
						<?php the_title_attribute(); ?></a><span>(<?php the_time('Y/m/d'); ?>)</span></li>
						<?php endwhile; endif; ?>
					</ul>
				</div>
		</div>
    </div>
</section>
<div id="btnArea">
	<div id="btnInner">
    	<a href="http://tgn-soleil.com/form/index.html"><img src="http://tgn-soleil.com/wp/wp-content/themes/twentysixteen/images/contact.jpg"></a>
        <a href="http://tgn-soleil.com/index.html"><img src="http://tgn-soleil.com/wp/wp-content/themes/twentysixteen/images/top.jpg"></a>
    </div>
</div>
<?php get_footer(); ?>
