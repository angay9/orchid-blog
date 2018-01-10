<?php

namespace App\Core\Behaviors\Single;

use Orchid\Platform\Behaviors\Single;
use Orchid\Platform\Http\Forms\Posts\UploadPostForm;

class Contact extends Single
{
    /**
     * @var string
     */
    public $name = 'Contact';

    /**
     * @var string
     */
    public $description = 'Contact page';

    /**
     * @var string
     */
    public $slug = 'contact';

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
            'content.*.slug'    =>  'required',
            'content.*.lat'    =>  'required',
            'content.*.lng'    =>  'required',
            'content.*.marker_lat'    =>  'required',
            'content.*.marker_lng'    =>  'required',
            'content.*.text'    =>  'required',
        ];
    }

    /**
     * @return array
     */
    public function fields() : array
    {
        return [
            'slug'        => 'tag:input|type:text|name:slug|max:255|required|title:Page slug',
            'lat'        => 'tag:input|type:text|name:lat|max:255|required|title:Latitude',
            'lng'        => 'tag:input|type:text|name:lng|max:255|required|title:Longitude',
            'marker_lat'        => 'tag:input|type:text|name:marker_lat|max:255|required|title:Marker Latitude',
            'marker_lng'        => 'tag:input|type:text|name:marker_lng|max:255|required|title:Marker Longitude',
            'text'        => 'tag:wysiwyg|type:text|name:text|required|title:Text',
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
