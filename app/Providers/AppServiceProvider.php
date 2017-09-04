<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Page;
use App\Observers\PageObserver;
use App\Image;
use App\Observers\ImageObserver;
//use Laravel\Dusk\DuskServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
  public function boot()
  {
    Page::observe(PageObserver::class);
    Image::observe(ImageObserver::class);
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
//    if ($this->app->environment('local', 'testing')) {
//      $this->app->register(DuskServiceProvider::class);
//    }
  }
}
