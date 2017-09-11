@extends('layouts.en.page')

@section('title', $page->title_en)

@section('content')
  <div class="ui page container" id="index">
    <h1 class="ui green header">{{ $page->title_en }}</h1>
    <h2 class="ui red header">Under construction...</h2>
  </div>
@endsection

@section('scripts')
  @parent
@endsection