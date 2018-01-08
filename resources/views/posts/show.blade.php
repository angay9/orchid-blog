@extends('layout', ['bodyClass' => 'single-post'])
@section('content')
    <div class="single-post-wrapper content-1070 center-relative">

        <article class="center-relative">
            <h1 class="entry-title">
                {{ $post->getContent('name') }}
            </h1>
            @if($post->getContent('picture'))
                <div>
                    <img src="{{ $post->getContent('picture') }}">
                </div>
            @endif
            <div class="post-info content-660 center-relative">
                <div class="entry-date published">{{ $post->publish_at->format('F d, Y') }}</div>
                <div class="clear"></div>
            </div>

            <div class="entry-content">
                {!! $post->getContent('body') !!}
            </div>
            <div class="clear"></div>
        </article>
    </div>
@stop