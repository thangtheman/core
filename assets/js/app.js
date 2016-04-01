/**
 * Created by ThangTheMan on 3/29/16.
 */

var width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
if (width >= 769) {
    document.write("<p class='info'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>");
}
else {
    document.write("<p class='info'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo. </p>");

}
