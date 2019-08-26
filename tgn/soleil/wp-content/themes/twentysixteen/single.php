<?php get_header(); ?>
<div class="breadCrumbs">
  <div class="inner"><a href="http://tgn-soleil.com/index.html">top</a> > それいゆ通信</div>
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
			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

				the_content();

			endwhile;
			?>
			<img src="<?php echo get_template_directory_uri() ?>/images/tgn_syomei.jpg" alt="syomei">
			<div class="pagenation clearfix">
				<p class="prev"><?php next_post_link('%link', '前の記事へ'); ?></p>
				<p class="next"><?php previous_post_link('%link', '次の記事へ'); ?></p>
			</div>

		</div>
		<div class="sub">
			<?php if(! is_home()): //home以外に適用する ?>
			<div class="article-list-line">
			<p class="article-list">記事一覧</p>
			<p class="article-list_sub">backnumber</p>
			</div>
			<?php $posts = get_posts('numberposts=24'); ?>
			<div class="post-area">
				<?php foreach($posts as $post): ?>

				<div class="list clearfix">
				  <img src="<?php echo get_template_directory_uri() ?>/images/arrow.png" alt="arrow">
				  <div class="sub-title">
					<p class="sub-date"><?php the_time('Y/m/d'); ?></p>
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				  </div>
				</div>

				<?php endforeach; ?>
			</div>
			<?php endif; ?>
		<div>
	<div>
</section><!-- .content-area -->
<div id="btnArea">
	<div id="btnInner">
    	<a href="http://tgn-soleil.com/form/index.html"><img src="<?php echo get_template_directory_uri() ?>/images/contact.jpg"></a>
        <a href="http://tgn-soleil.com/index.html"><img src="<?php echo get_template_directory_uri() ?>/images/top.jpg"></a>
    </div>
</div>

<?php get_footer(); ?>
