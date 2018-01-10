@extends('layout', ['bodyClass' => 'contact page page-template-default'])
@section('content')
    <div class="page-header-map relative">
        <script>
            var lat = "{{ $page->getContent('lat') }}";
            var lng = "{{ $page->getContent('lng') }}";
            var marker_lat = "{{ $page->getContent('marker_lat') }}";
            var marker_lng = "{{ $page->getContent('marker_lng') }}";
            var zoom = 16;
        </script>
        <div class="map" id="map"></div>
    </div>

    <article>
        <div class="content-1070 center-relative entry-content">
            <div class="content-900 center-relative">
                <div class="one_half ">
                    {!! $page->getContent('text') !!}
                </div>
                <div class="one_half last ">
                    <div class="contact-form">
                        <p><input id="name" type="text" name="your-name" placeholder="Name"></p>
                        <p><input id="contact-email" type="email" name="your-email" placeholder="Email"></p>
                        <p><input id="subject" type="text" name="your-subject" placeholder="Subject"></p>
                        <p><textarea id="message" name="your-message" placeholder="Message"></textarea></p>
                        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
                        <p><input type="submit" onClick="SendMail()" value="SEND"></p>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </article>

@stop

@push('scripts')
    <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js'></script>
    <script type='text/javascript' src='js/custom_google_map_style.js'></script>
    <script>initializeGoogleMap();</script>
@endpush