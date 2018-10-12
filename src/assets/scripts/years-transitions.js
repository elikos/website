$(function() {
    initTransitions("competition", [2017, 2016, 2015, 2014]);
    initTransitions("team", [2018, 2017, 2016, 2015]);
});

function navClickTansition(event, navs, contentDivs) {
    const navId = event.currentTarget.id;
    const year = navId.split('-')[1];
    navs.forEach(nav => nav.removeClass('active'));
    $(event.currentTarget).addClass('active');

    // Animate content divs
    contentDivs.forEach(div => {
        const divYear = div.attr('id').split('-')[1];
        // Right of clicked year: move to the left
        if (divYear > year) {
            div.animate({
                left: '-200%',
                opacity: '0'
            }, 500);
            div.hide();
        // Left of clicked year: move to the right
        } else if (divYear < year) {
            div.animate({
                left: '200%',
                opacity: '0'
            }, 500);
            div.hide();
        // Clicked year: center
        } else if (divYear === year) {
            div.show();
            div.animate({
                left: '0',
                opacity: '1'
            }, 500);
        }
    });
}

function initTransitions(keyword, years) {
    const contentDivs = Array.from(years, year => $('#' + keyword + '-' + year));
    const navs = Array.from(years, year => $('#' + keyword + '-' + year + '-nav'));

    // Competitions nav callbacks
    navs.forEach(nav => {
        nav.click(event => navClickTansition(event, navs, contentDivs));
    });
}