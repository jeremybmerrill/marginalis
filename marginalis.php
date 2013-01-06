<?php
/*
Plugin Name: Marginalis-WP
Plugin URI: https://github.com/jeremybmerrill/marginalis/blob/master/README
Description: marginalis is a library implementing skeuomorphic marginalia
Version: 0.0.1
Author: Jeremy B. Merrill
Author URI: http://jeremybmerrill.com
License: MIT
*/
?>
<?php
/*
It'd be nice of you to give me credit if you use this library in anything 
substantial. But you don't HAVE to.

Copyright (c) 2012 Jeremy B. Merrill.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
?>
<?php
wp_enqueue_style("marginalis", plugins_url('marginalis/marginalis.css' , dirname(__FILE__) ));
wp_enqueue_script("raphael", plugins_url('marginalis/raphael-min.js' , dirname(__FILE__)), array("jquery"), false, true );
wp_enqueue_script("underscore", plugins_url('marginalis/underscore-min.js' , dirname(__FILE__)), array(), false, true );
wp_enqueue_script("marginalis", plugins_url('marginalis/marginalis.js' , dirname(__FILE__)), array("jquery", "raphael", "underscore"), false, true );

?>
