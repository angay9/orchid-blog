@foreach($posts as $post)
    <article id="post-{{ $post->id }}" class="blog-item-holder featured-post">
        <div class="entry-content relative">
            <div class="content-1170 center-relative">
                
                <h2 class="entry-title">
                    <a href="/posts/{{ $post->getContent('slug') }}">{{ $post->getContent('name') }}</a>
                </h2>
                <div class="entry-date published">{{ $post->publish_at->format('F d, Y') }}</div>
                @if ($loop->first && !$ajax)
                    <div class="excerpt">
                        {{ $post->getContent('excerpt') }}
                        <a class="read-more" href="/posts/{{ $post->getContent('slug') }}"></a>
                    </div>
                @endif
                <div class="clear"></div>
            </div>
        </div>
    </article>
@endforeach