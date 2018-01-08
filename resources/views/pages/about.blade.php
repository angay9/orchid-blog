@extends('layout', ['bodyClass' => 'about page page-template-default'])
@section('content')
    <div class="page-header-image relative">
        @if ($page->getContent('picture'))
            <img src="{{ $page->getContent('picture') }}" alt="">
        @endif
    </div>

    <article>
        <div class="content-1070 center-relative entry-content">
            <div class="content-900 center-relative">
                <div class="one_half ">
                    {!! $page->getContent('text_col_1') !!}
                </div>
                <div class="one_half last">
                    {!! $page->getContent('text_col_2') !!}
                </div>
                <div class="clear"></div>
                <br>
                <br>
                <div class="clear"></div>
            </div>
            <div class="page-full-width ">
                <div class="team-holder ">
                    <div class="member relative one ">
                        @if ($page->getContent('author_picture'))
                            <img src="{{ $page->getContent('author_picture') }}" alt="">
                        @endif
                        <div class="member-info">
                            <div class="member-name">{{ $page->getContent('author_name') }}</div>
                            <div class="member-position">{{ $page->getContent('author_title') }}</div>
                            <div class="member-content">
                                {!!  $page->getContent('author_description') !!}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </article>
@stop