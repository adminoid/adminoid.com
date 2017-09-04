<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Page;
use App\Image;
use App\PortfolioWork;
use App\Review;
use App\Tag;
use App\News;

class RelationshipsTest extends TestCase
{

    use DatabaseTransactions;

    public function testPagePagesRelation()
    {
        $root = Page::create(['slug' => 'root-10']);
        $root->children()->create(['slug' => 'child-1']);
        $child2 = Page::create(['slug' => 'child-2']);
        $root->appendNode($child2);
        $this->assertEquals($root->children()->count(), 2);
        $this->assertEquals($child2->parent()->first()->slug, 'root-10');
    }

    public function testPageImagesRelation()
    {
        $pages = factory(Page::class, 3)->create();
        $images = factory(Image::class, 2)->create();
        $pages->each(function ($page) use ($images) {
            $page->images()->saveMany($images);
            $this->assertEquals($page->images()->count(), 2);
        });
    }

    public function testImagesPageRelation()
    {
        $images = factory(Image::class, 2)->create();
        $page = factory(Page::class)->make();
        $page->save();
        $images->each(function ($image) use ($page) {
            $name = $page->slug;
            $page->images()->save($image);
            $this->assertEquals($name, $image->imageable->slug);
        });
    }

    public function testReviewsPortfolioWorksRelations()
    {
        $portfolioWork1 = factory(PortfolioWork::class)->make();
        $portfolioWork1->save();
        $review1 = factory(Review::class)->make();
        $review1->portfolio_work()->associate($portfolioWork1);
        $review1->save();
        $this->assertEquals($portfolioWork1->title_ru, $review1->portfolio_work->title_ru);

        $review2 = factory(Review::class)->make();
        $review2->save();
        $portfolioWork2 = factory(PortfolioWork::class)->make();
        $portfolioWork2->save();
        $portfolioWork2->review()->save($review2);
        $this->assertEquals($review2->content, $portfolioWork2->review->content);
    }

    public function testTagsPagesRelation()
    {
        $page = factory(Page::class)->make();
        $page->save();
        $tags = factory(Tag::class, 2)->create();
        $page->tags()->saveMany($tags);
        $this->assertEquals($page->tags()->count(), 2);

        $tag = factory(Tag::class)->make();
        $tag->save();
        $pages = factory(Page::class, 3)->create();
        $tag->pages()->saveMany($pages);
        $this->assertEquals($tag->pages()->count(), 3);
    }

    public function testNewsPageRelation()
    {
        $newsItem = factory(News::class)->make();
        $newsItem->save();
        $page = factory(Page::class)->make();
        $newsItem->page()->save($page);
        $this->assertEquals($newsItem->page->slug, $page->slug);
    }

    public function testPageNewsRelation()
    {
        $newsItem = factory(News::class)->make();
        $newsItem->save();
        $page = factory(Page::class)->make();
        $page->pageable()->associate($newsItem);
        $page->save();
        $this->assertEquals($page->pageable->title_ru, $newsItem->title_ru);
    }

    public function testPortfolioWorkPageRelation()
    {
        $portfolioWork = factory(PortfolioWork::class)->make();
        $portfolioWork->save();
        $page = factory(Page::class)->make();
        $portfolioWork->page()->save($page);
        $this->assertEquals($portfolioWork->page->slug, $page->slug);
    }

    public function testPagePortfolioWorkRelation()
    {
        $portfolioWork = factory(PortfolioWork::class)->make();
        $portfolioWork->save();
        $page = factory(Page::class)->make();
        $page->pageable()->associate($portfolioWork);
        $page->save();
        $this->assertEquals($page->pageable->title_ru, $portfolioWork->title_ru);
    }

    public function testReviewPageRelation()
    {
        $review = factory(Review::class)->make();
        $review->save();
        $page = factory(Page::class)->make();
        $review->page()->save($page);
        $this->assertEquals($review->page->slug, $page->slug);
    }

    public function testPageReviewRelation()
    {
        $review = factory(Review::class)->make();
        $review->save();
        $page = factory(Page::class)->make();
        $page->pageable()->associate($review);
        $page->save();
        $this->assertEquals($page->pageable->title_ru, $review->title_ru);
    }

}
