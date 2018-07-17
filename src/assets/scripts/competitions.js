$(function() {
    

    const competitionYears = [2017, 2015, 2016];
    const competitionDivs = Array.from(competitionYears, year => $('#competition-' + year));
    const competitionNavs = Array.from(competitionYears, year => $('#competition-' + year + '-nav'));

    // Nav click callbacks
    competitionNavs.forEach(nav => {
        nav.click(event => {
            competitionDivs.forEach(div => div.hide());
            const navId = event.currentTarget.id;
            const competitionId = navId.substring(0, navId.indexOf('-nav'));
            $('#' + competitionId).show();
            
            competitionNavs.forEach(nav => nav.removeClass('active'));
            $(event.currentTarget).addClass('active');
        });
    });

    // Show first div only
    competitionDivs.forEach(div => div.hide());
    competitionDivs[0].show();
  
});