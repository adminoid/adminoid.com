<?php

namespace App\Http\Controllers;

use App\FeedbackMessage;
use Illuminate\Http\Request;

class FeedbackMessagesController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $request->validate([
      'email' => 'required|max:255',
      'message' => 'required|max:5000',
      'first_name' => 'required|max:255',
      'last_name' => 'required|max:255',
      'phone' => 'required|max:255',
      'ip' => 'max:100',
      'os' => 'max:255',
      'browser' => 'max:255',
    ]);

    FeedbackMessage::forceCreate([
      'email' => request('email'),
      'message' => request('message'),
      'first_name' => request('first_name'),
      'last_name' => request('last_name'),
      'phone' => request('phone'),
      'email' => request('email'),
    ]);

    return ['message' => 'message send'];

  }

  /**
   * Display the specified resource.
   *
   * @param  \App\FeedbackMessage $feedbackMessage
   * @return \Illuminate\Http\Response
   */
  public function show(FeedbackMessage $feedbackMessage)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\FeedbackMessage $feedbackMessage
   * @return \Illuminate\Http\Response
   */
  public function edit(FeedbackMessage $feedbackMessage)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\FeedbackMessage $feedbackMessage
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, FeedbackMessage $feedbackMessage)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\FeedbackMessage $feedbackMessage
   * @return \Illuminate\Http\Response
   */
  public function destroy(FeedbackMessage $feedbackMessage)
  {
    //
  }
}
