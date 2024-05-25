document.addEventListener('DOMContentLoaded', function() 
{
	console.log ("Kiểm tra liên kết JavaScript");

    // Lấy phần tử icon apple để thêm sự kiện click
    const scrollToTopButton = document.getElementById("scrollToTop");
    // Khi icon apple được click
    scrollToTopButton.addEventListener("click", function() 
    {
        // Cuộn trang lên đầu với hiệu ứng mượt
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    // Thêm một sự kiện lắng nghe cho sự kiện cuộn trang.
    $(window).on('scroll', function() 
    {
        // Lấy vị trí scroll hiện tại của window
        var scrollPosition = $(window).scrollTop();

        // Kiểm tra nếu đã cuộn qua 1600px
        if (scrollPosition > 1600) 
        {
            // Lặp qua mỗi phần tử có class 'banner'
            $('.banner').each(function() 
            {
                // Đặt độ mờ của hình ảnh là 1 (không mờ) và di chuyển vào vị trí ban đầu
                $(this).css(
                {
                    'opacity': '1',
                    'transform': 'translateY(0%)'
                });
            });
        } 
        else 
        {
            // Lặp qua mỗi phần tử có class 'banner'
            $('.banner').each(function() 
            {
                // Đặt độ mờ của hình ảnh là 0 (mờ) và di chuyển ra khỏi khung
                $(this).css(
                {
                    'opacity': '0',
                    'transform': 'translateY(-10%)'
                });
            });
        }
        // In ra số pixel đã cuộn trên trang.
	    console.log('Đã scroll: ' + Math.floor(window.scrollY) + 'px');
    });
}, false);