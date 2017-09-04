<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{

    protected $fillable = ['folder', 'name', 'ext', 'alt_ru', 'alt_en', 'sort_order_id'];

//    public function __construct($imageForUploading = null, array $attributes = array())
//    {
//        // Place for code
//        parent::__construct($attributes);
//    }

    public function imageable()
    {
        return $this->morphTo();
    }

//    public function delete(array $options = array())
//    {
//        $folder = $this->folder;
//        $path = $folder . '/' . $this->name . '.' . $this->ext();
//        echo $path;
//        parent::delete();
//    }

    // this is a recommended way to declare event handlers
//    protected static function boot()
//    {
//        parent::boot();
//
//        static::deleting(function ($image) { // before delete() method call this
//            $folder = $image->folder;
//            echo $folder;
//            // do the rest of the cleanup...
//        });
//    }
}
