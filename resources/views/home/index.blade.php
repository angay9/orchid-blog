@extends('layout')
@section('content')
    <div id="blog-wrapper">
        <div class="blog-holder center-relative">
            @if ($posts->count() > 0)
                @include('home.posts', compact('posts', 'ajax'))
            @else
                <p>
                    No posts yet.
                </p>
            @endif
        </div>
        <div class="clear"></div>
        <div class="block load-more-holder">
            <a href="#" id="load-more-posts">
                LOAD MORE ENTRIES
            </a>
        </div>
    </div>

    <div class="featured-image-holder">
        <div class="featured-post-image" style="background-image: url(demo-images/featured-image.jpg)"></div>

    </div>
    <div class="clear"></div>
@stop

@push('scripts')
    <script type="text/javascript">
        var paginator = {!! $posts->toJson() !!};
        var $ = window.jQuery;

        $(function () {
            $('#load-more-posts').click(function (e) {
                e.preventDefault();
                if (paginator.next_page_url) {
                    $.get(paginator.next_page_url, function (response) {
                        paginator = response.paginator;
                        $("#blog-wrapper .blog-holder").append(response.posts);
                        if (!paginator.next_page_url) {
                            $(this).hide();
                        }
                    }.bind(this));
                }
            });
        });
    </script>
@endpush