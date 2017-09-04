<?php

namespace App\Observers;

use App\Page;

class PageObserver
{

    public function saving(Page $page)
    {
        if ($page->isDirty('slug', 'parent_id')) {
            $original = $page->getOriginal();
            $page->generateUri($original);
        }
    }

    public function saved(Page $page)
    {
        // Данная переменная нужна для того, чтобы потомки не начали вызывать
        // метод, т.к. для них путь также изменится
        static $updating = false;
        if (!$updating && $page->isDirty('uri')) {
            $updating = true;
            $page->updateDescendantsUri();
            $updating = false;
        }
    }

    public function deleting(Page $page)
    {
        $id = $page->id;
        $descendants = Page::descendantsOf($id);
        foreach ($descendants as $page) {
            foreach ($page->images()->get() as $image) {
                $image->delete();
            }
        }

    }
}