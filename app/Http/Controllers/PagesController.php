<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Orchid\Platform\Core\Models\Post;

class PagesController extends Controller
{
    public function about(Request $request)
    {
        $page = Post::where('type', 'page')
                        ->where('slug', 'about')
                        ->published()
                        ->with('attachment')
                        ->first()
                    ;
        
        if (!$page) {
            return abort(404);
        }

        return view('pages.about', compact('page'));
    }
}
