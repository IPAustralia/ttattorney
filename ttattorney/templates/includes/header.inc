<?php $path_to_theme = "/" . drupal_get_path('theme', 'ttattorney'); ?>
<header id="navbar" role="banner">

    <div class="header">
        <div class="container">

            <?php if ($logo): ?>
                <a class="logo col-md-4" href="<?php print $front_page; ?>" title="<?php print t('Australian Government'); ?>">
                    <img src="<?php print $logo; ?>" alt="<?php print t('Australian Government'); ?>" />
                </a>
                <a class="logo col-md-4" href="<?php print $front_page; ?>" title="<?php print t('New Zealand Government'); ?>">
                    <img src="<?php print $path_to_theme . "/logo_nz.png" ?>" alt="<?php print t('New Zealand Government'); ?>" />
                </a>
            <?php endif; ?>
            <div class="col-md-4 header-right">
                <?php print render($page['header']); ?>
            </div>

        </div>
    </div>
    <section id="heading">
        <div class="container">
        <!-- TODO: Add If <front> then h1 else stylised text (p?) -->
            <span class="site-name">Trans Tasman IP Attorney Board</span>
        </div>
    </section>
    <nav class="navbar-default" role="navigation">
        
        <div class="navbar-header">
            <button 
                type="button" 
                class="navbar-toggle collapsed" 
                data-toggle="collapse" 
                data-target="#header-navigation-container">
            </button>
        </div>

        <div class="container navbar-collapse collapse" id="header-navigation-container">
            <?php if (!empty($primary_nav)): ?>
                <?php print render($primary_nav); ?>
            <?php endif; ?>
        </div>

    </nav>

    <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron">
            <div class="container">

                <?php print render($page['highlighted']); ?>

            </div>
        </div>
    <?php endif; ?>

</header>
<img id="print-logo" src="<?php print $logo; ?>" alt="<?php print t('Trans Tasman IP Attorney Board'); ?>" />