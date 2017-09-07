<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedbackMessagesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('feedback_messages', function (Blueprint $table) {
      $table->increments('id');
      $table->string('email');
      $table->text('message');
      $table->string('first_name');
      $table->string('last_name');
      $table->string('phone');
      $table->string('ip');
      $table->string('os');
      $table->string('browser');
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
    Schema::dropIfExists('feedback_messages');
  }
}
