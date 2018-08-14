$(function() {
    const competitionYears = [2017, 2015, 2016];
    const competitionDivs = Array.from(competitionYears, year => $('#competition-' + year));
    const competitionNavs = Array.from(competitionYears, year => $('#competition-' + year + '-nav'));

    // Competitions nav callbacks
    competitionNavs.forEach(nav => {
        nav.click(event => navClickTansition(event, competitionNavs, competitionDivs));
    }); 
});

function navClickTansition(event, navs, contentDivs) {
    const navId = event.currentTarget.id;
    const year = navId.split('-')[1];
    navs.forEach(nav => nav.removeClass('active'));
    $(event.currentTarget).addClass('active');

    contentDivs.forEach(div => {
        const divYear = div.attr('id').split('-')[1];
        if (divYear > year) {
            div.animate({
                left: '-200%',
                opacity: '0'
            }, 500);
            div.hide();
        } else if (divYear < year) {
            div.animate({
                left: '200%',
                opacity: '0'
            }, 500);
            div.hide();
        } else if (divYear === year) {
            div.show();
            div.animate({
                left: '0',
                opacity: '1'
            }, 500);
        }
    });
}