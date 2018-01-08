<?php

namespace App\Core\Behaviors\Single;

use Orchid\Platform\Behaviors\Single;
use Orchid\Platform\Http\Forms\Posts\UploadPostForm;

class About extends Single
{
    /**
     * @var string
     */
    public $name = 'About';

    /**
     * @var string
     */
    public $description = 'About page';

    /**
     * @var string
     */
    public $slug = 'about';

    /**
     * Slug url /news/{name}.
     *
     * @var string
     */
    public $slugFields = 'slug';

    /**
     * Rules Validation.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'content.*.picture' =>  'required',
            'content.*.slug'    =>  'required',
            'content.*.text_col_1'    =>  'required',
            'content.*.text_col_2'    =>  'required',
            'content.*.author_picture'    =>  'required',
            'content.*.author_name'    =>  'required',
            'content.*.author_title'    =>  'required',
            'content.*.author_description'    =>  'required',
        ];
    }

    /**
     * @return array
     */
    public function fields() : array
    {
        return [
            'picture'   =>   'tag:picture|name:picture|title:picture|width:1300|height:400',
            'slug'        => 'tag:input|type:text|name:slug|max:255|required|title:Page slug',
            'text_col_1'     => 'tag:wysiwyg|name:text_col_1|required|title:Text column 1',
            'text_col_2'     => 'tag:wysiwyg|name:text_col_2|required|title:Text column 2',
            'author_picture'    =>  'tag:picture|name:author_picture|title:Author picture|width:700|height:700',
            'author_name'       =>  'tag:input|type:text|name:author_name|max:255|required|title:Author name',
            'author_title'    =>  'tag:input|type:text|name:author_title|max:255|required|title:Author title',
            'author_description'    =>  'tag:wysiwyg|name:author_description|required|title:Author description',
        ];
    }

    /**
     * @return array
     */
    public function modules() : array
    {
        return [
            // UploadPostForm::class,
        ];
    }
}
