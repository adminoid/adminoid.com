<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePortfolioWorksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolio_works', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title_ru');
            $table->string('title_en')->nullable();
            $table->text('description_ru')->nullable();
            $table->text('description_en')->nullable();
            $table->integer('sort_order_id')->nullable();
            $table->enum('priority_level', ['high', 'middle', 'low'])->default('low');
            $table->string('external_url')->nullable();
            $table->string('link')->nullable();
            $table->string('custom_date')->nullable();
            $table->boolean('custom_face')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('portfolio_works');
    }
}
