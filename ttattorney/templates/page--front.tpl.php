<?php include DRUPAL_ROOT . "/" . drupal_get_path('theme', 'ttattorney') . "/templates/includes/header.inc"; ?>

<div class="main-container">

  <div class="overlay" />

  <?php if (!empty($messages)): ?>
    <div class="messages">
      <div class="container">
        <?php print $messages; ?>
      </div>
    </div>
  <?php endif; ?>

  <div>

    <section>
      <a id="main-content"></a>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content_top']); ?>
      <?php print render($page['content']); ?>
    </section>

  </div>
</div>

<?php include DRUPAL_ROOT . "/" . drupal_get_path('theme', 'ttattorney') . "/templates/includes/footer.inc"; ?>
