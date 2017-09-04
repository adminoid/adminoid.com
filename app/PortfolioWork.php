<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PortfolioWork extends Model
{
    protected $table = 'portfolio_works';

    public function page()
    {
        return $this->morphOne('App\page', 'pageable');
    }

    public function review()
    {
        return $this->hasOne('App\Review', 'portfolio_work_id', 'id');
    }

}
