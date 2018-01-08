<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Orchid\Platform\Core\Models\Post;

class PostsController extends Controller
{
    public function show($slug)
    {
        $post = Post::type('articles')
                    ->published()
                    ->with('attachment')
                    ->where('slug', $slug)
                    ->first()
                ;

        return view('posts.show', compact('post'));
    }
}
