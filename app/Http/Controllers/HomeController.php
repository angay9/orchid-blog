<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Orchid\Platform\Core\Models\Post;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        // Type 'articles' has to have the same
        // value as the slug property 
        // of the behavior 
        $posts = Post::type('articles')
                    ->published()
                    ->with('attachment')
                    ->orderBy('publish_at', 'DESC')
                    ->paginate(6)
                ;

        if ($request->ajax()) {
            return [
                'posts' =>  view('home.posts', [
                    'posts' => $posts,
                    'ajax'  =>  true
                ])->render(),
                'paginator' =>  $posts->toArray()
            ];
        }

        return view('home.index', [
            'posts' => $posts,
            'ajax' => false
        ]);
    }
}
