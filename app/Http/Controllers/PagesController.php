<?php

namespace App\Http\Controllers;

use Mail;
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

    public function contact(Request $request)
    {
        $page = Post::where('type', 'page')
                        ->where('slug', 'contact')
                        ->published()
                        ->with('attachment')
                        ->first()
                    ;
                    
        if (!$page) {
            return abort(404);
        }

        return view('pages.contact', compact('page'));
    }

    public function sendContactEmail(Request $request)
    {
        $this->validate($request, [
            'name'  =>  'required|max:255',
            'email'  =>  'required|email',
            'subject'  =>  'required|max:255',
            'message'  =>  'required',
        ]);

        $data = $request->only(['name', 'email', 'subject', 'message']);
        $message = "You have a new contact email with the following data:
            Name: {$data['name']},
            Email: {$data['email']},
            Subject: {$data['subject']},
            Message: {$data['message']}
        ";

        Mail::raw($message, function ($message) {
           $message->to('contact@contact.com');
        });

        return [
            'success'   =>  true
        ];
    }
}
