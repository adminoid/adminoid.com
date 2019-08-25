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
      $table->text('text');
      $table->string('ip')->nullable();
      $table->string('user_agent')->nullable();
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
