$(document).ready(function(){
    // Snowflake generation
    const numberOfSnowflake = 250;
    const numberOfSnowflakeMd = 50;
    const numberOfSnowflakeLg = 50;
    
    const snowflakeArea = $('#snowflake-area');
    
    // Generate regular snowflakes
    for (let i = 1; i <= numberOfSnowflake; i++) {
        const left = Math.random() * 120 - 20;
        const blur = Math.floor(Math.random() * 2);
        const duration1 = (Math.random() * 20 + 20) / 10;
        const delay1 = Math.random() * 20 / -10;
        const duration2 = (Math.random() * 100 + 50) / 5;
        const delay2 = Math.random() * 100 / -5;
        
        const snowflake = $('<div>')
            .addClass(`snowflake _${i}`)
            .text('❄')
            .css({
                'left': left + 'vw',
                'filter': `blur(${blur}px)`,
                'animation': `flickr ${duration1}s ${delay1}s infinite, fall ${duration2}s ${delay2}s infinite`
            });
        
        snowflakeArea.append(snowflake);
    }
    
    // Generate medium snowflakes
    for (let i = 1; i <= numberOfSnowflakeMd; i++) {
        const left = Math.random() * 120 - 20;
        const blur = Math.floor(Math.random() * 2);
        const duration1 = (Math.random() * 20 + 20) / 10;
        const delay1 = Math.random() * 20 / -10;
        const duration2 = (Math.random() * 100 + 50) / 5;
        const delay2 = Math.random() * 100 / -5;
        
        const snowflake = $('<div>')
            .addClass(`snowflake _md _md-${i}`)
            .text('❄')
            .css({
                'left': left + 'vw',
                'filter': `blur(${blur}px)`,
                'animation': `flickr ${duration1}s ${delay1}s infinite, fall ${duration2}s ${delay2}s infinite`
            });
        
        snowflakeArea.append(snowflake);
    }
    
    // Generate large snowflakes
    for (let i = 1; i <= numberOfSnowflakeLg; i++) {
        const left = Math.random() * 120 - 20;
        const duration1 = (Math.random() * 20 + 20) / 10;
        const delay1 = Math.random() * 20 / -10;
        const duration2 = (Math.random() * 100 + 50) / 5;
        const delay2 = Math.random() * 100 / -5;
        
        const snowflake = $('<div>')
            .addClass(`snowflake _lg _lg-${i}`)
            .text('❄')
            .css({
                'left': left + 'vw',
                'animation': `flickr ${duration1}s ${delay1}s infinite, fall ${duration2}s ${delay2}s infinite`
            });
        
        snowflakeArea.append(snowflake);
    }
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
