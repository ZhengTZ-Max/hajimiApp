$(document).ready(function() {
    // 初始化：默认选中中文
    $('.language-dropdown li[data-lang="zh"]').addClass('selected');
    
    // 语言下拉框功能
    $('.language-selector').on('click', function(e) {
        e.stopPropagation();
        $('.language-box').toggleClass('active');
    });

    // 点击下拉选项
    $('.language-dropdown li').on('click', function(e) {
        e.stopPropagation();
        const selectedText = $(this).text();
        const selectedLang = $(this).data('lang');
        
        // 更新当前显示的语言
        $('.language-current').text(selectedText);
        
        // 更新选中状态
        $('.language-dropdown li').removeClass('selected');
        $(this).addClass('selected');
        
        // 关闭下拉框
        $('.language-box').removeClass('active');
        
        // 这里可以添加实际的语言切换逻辑
        console.log('切换到:', selectedLang);
    });

    // 点击页面其他地方关闭下拉框
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.language-box').length) {
            $('.language-box').removeClass('active');
        }
    });

    // 导航菜单点击滚动功能
    // 点击"概览"滚动到顶部
    $('.banner-box-list li').first().on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // 点击"发展历程"滚动到对应位置
    $('.banner-box-list li').eq(1).on('click', function(e) {
        e.preventDefault();
        const target = $('#history-section');
        if (target.length) {
            const offset = target.offset().top;
            $('html, body').animate({
                scrollTop: offset
            }, 800);
        }
    });
});

