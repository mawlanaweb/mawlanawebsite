<style>
  .features .nav-tabs {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 6px;
    overflow-x: auto;
    white-space: nowrap;
  }

  .features .nav-item {
    margin: 0;
    padding-right: 5px;
  }

  .features .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px 30px;
    font-weight: 500;
    color: var(--heading-color);
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  .features .nav-link i {
    padding-right: 15px;
    font-size: 36px;
  }

  .features .nav-link h4 {
    font-size: 14px;
    margin: 0;
  }

  .features .nav-link.active {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .features .tab-content {
    margin-top: 30px;
  }

  .features .tab-pane h3 {
    font-size: 1.75rem;
    font-weight: 700;
    position: relative;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .features .tab-pane h3::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background: var(--accent-color);
    left: 0;
    bottom: 0;
  }

  .features .tab-pane ul {
    padding: 0;
    list-style: none;
  }

  .features .tab-pane ul li {
    padding-top: 10px;
    font-size: 15px;
  }

  .features .tab-pane ul i {
    color: var(--accent-color);
    padding-right: 5px;
  }

  .features-cards {
    --default-color: #555;
    --heading-color: #333;
  }

  .features-cards .feature-box {
    padding: 2rem;
    border-radius: 10px;
    background-color: #fff;
  }

  .features-cards .feature-box h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .features-cards .feature-box p {
    font-size: 15px;
    margin-bottom: 0;
  }

  .features-2 .feature-item {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .features-2 .feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent-color), transparent 92%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .features-2 .feature-icon i {
    color: var(--accent-color);
    font-size: 24px;
  }

  .features-2 .feature-content h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .features-2 .feature-content p {
    font-size: 15px;
    color: color-mix(in srgb, var(--default-color), transparent 25%);
  }

  @media (max-width: 768px) {
    .features .nav-tabs {
      flex-wrap: nowrap;
    }

    .features .nav-item {
      flex: 0 0 auto;
    }

    .features-2 .feature-item {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
