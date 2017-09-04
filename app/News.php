<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    public function page()
    {
        return $this->morphOne('App\Page', 'pageable');
//        return $this->morphMany('App\Page', 'pageable');
    }

//    public function comments()
//    {
//        return $this->morphMany('App\Comment', 'commentable');
//    }

}
