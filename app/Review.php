<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function portfolio_work()
    {
        return $this->belongsTo('App\PortfolioWork', 'portfolio_work_id', 'id');
    }

    public function page()
    {
        return $this->morphOne('App\page', 'pageable');
    }
}
