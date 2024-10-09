(function () {
    function initWidget() {
        if (!window.lejenwaChatWidget || !window.lejenwaChatWidget.options) {
            console.error('WhatsApp widget options not found');
            return;
        }

        var options = window.lejenwaChatWidget.options;
        var whatsappNumber = options.waId;
        var businessName = options.siteName;
        var availabilityTag = options.siteTag;
        var profileImage = options.siteLogo;
        var welcomeMessage = options.welcomeMessage;
        var widgetPosition = options.widgetPosition;
        var widgetButtonText = options.messageText || 'Chat with us';
        var brandColor = options.brandColor || '#25D366';
        var triggerMessage = options.triggerMessage;

        var widgetHtml =  '<div id="whatsapp-widget" class="widget-wrapper" style="position:fixed;bottom:20px;' + (widgetPosition === 'right' ? 'right:20px;' : 'left:20px;') + 'z-index:10000;width:18rem;max-width:90%;">' +
        '<div id="chat-box" class="widget-preview-mobile shadow-medium" style="display:none;border: .25rem solid #eff1f5;border-radius: 1rem;width: 18rem;margin-bottom: 1rem;position: relative;overflow: hidden;box-shadow: 0 12px 16px -4px rgba(0, 0, 0, .08), 0 4px 6px -2px rgba(0, 0, 0, .03);">' +
          '<div class="widget-mobile-header" style="grid-column-gap: 1rem;grid-row-gap: 1rem;background-color: #12b76a;justify-content: flex-start;align-items: center;padding: 1rem;display: flex;position: relative;">' +
            '<div class="widget-profile-image" style="background-color: #fff;border-radius: 100px;flex: none;width: 3rem;height: 3rem;overflow: hidden;">' +
              '<img src="' + profileImage + '" alt="Profile" class="widget-image" style="width: 100%;">'+'</div>'+
            '<div class="profile-text-wrap" style="flex: 0 auto;overflow: hidden;">' +
              '<div id="brand-name-txt" class="brand-name-txt" style="color: #fff;white-space: nowrap;font-weight: 500;">' + businessName + '</div>'+
              '<div id="availability-tag-txt" class="text-size-small text-color-white" style="font-size: .875rem;color: #fff;">' + availabilityTag + '</div>'+
            '</div>'+
            '<div id="close-chat" class="widget-close-icon" style="color: #fff;cursor: pointer;flex-direction: column;justify-content: center;align-items: center;width: 1rem;height: 1rem;margin-top: .5rem;margin-right: .5rem;line-height: 0;display: flex;position: absolute;top: 0%;bottom: auto;left: auto;right: 0%;">'+
              '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3588 19.7797L11.9988 13.4097L5.63875 19.7797L4.21875 18.3597L10.5888 11.9997L4.21875 5.63973L5.63875 4.21973L11.9988 10.5897L18.3588 4.22973L19.7688 5.63973L13.4088 11.9997L19.7688 18.3597L18.3588 19.7797Z" fill="currentcolor"></path></svg>'+'</div>'+
          '</div>'+
          '<div class="widget-mobile-body" style="grid-column-gap: 1rem;grid-row-gap: 1rem;background-color: #f1eee8;flex-flow: column;max-height: 28rem;padding: 1rem 1rem 2rem;display: flex;overflow: auto;">'+
            '<div class="widget-msg-wrapper" style="grid-column-gap: .5rem;grid-row-gap: .5rem;background-color: #fff;border-radius: 0 16px 16px;flex-flow: column;width: 90%;padding: .8rem;display: flex;box-shadow: 0 3px 6px rgba(0, 0, 0, .05);">'+
              '<div id="welcome-message-txt" class="widget-body-txt" style="font-size: .875rem;">' + welcomeMessage + '</div>'+
            '</div>'+
            '<input id="user-message" type="text" placeholder="Send a message" style="width:100%;margin-top:10px;padding:10px;border:1px solid #ccc;border-radius:5px;" />' +
    
            '<button id="send-message" class="widget-send-button" style="grid-column-gap: .5rem;grid-row-gap: .5rem;color: #fff;text-align: center;cursor: pointer;background:' + brandColor + ';border-radius: 50rem;flex: none;justify-content: center;align-items: center;padding: .5rem;font-weight: 500;text-decoration: none;transition: all .2s;display: flex;box-shadow: 0 1px .8px rgba(45, 50, 130, .1), 0 3px 2.7px rgba(45, 50, 130, .114), 0 6px 9.9px rgba(45, 50, 130, .125);">'+
              '<div class="icon-embed-xsmall" style="flex-direction: column;justify-content: center;align-items: center;width: 1.5rem;height: 1.5rem;font-size: 1.5rem;display: flex;">'+
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentcolor"/></svg>'+'</div>'+
              '<div>Send on WhatsApp</div>'+
            '</button>'+
    
            '<a href="https://lejenwa.com/" target="_blank" class="widget-footer" style="color: #b9c0d4;text-align: center;background-color: #f1eee8;font-size: .75rem;font-weight: 500;text-decoration: none;position: absolute;top: auto;bottom: 0%;left: 0%;right: 0%;">Powered by Lejenwa</a>'+
          '</div>'+
        '</div>'+
    
        '<div id="widget-button" class="widget-button" style="' + (widgetPosition == 'right' ? 'float:right;' : 'float:left;') + 'position:relative;width: max-content;grid-column-gap: .5rem;grid-row-gap: .5rem;color: #fff;text-align: center;cursor: pointer;background:' + brandColor + ';border-radius: 50rem;flex: none;justify-content: center;align-items: center;padding: .5rem;font-weight: 500;text-decoration: none;transition: all .2s;display: flex;box-shadow: 0 1px .8px rgba(45, 50, 130, .1), 0 3px 2.7px rgba(45, 50, 130, .114), 0 6px 9.9px rgba(45, 50, 130, .125);">'+
          '<div class="icon-embed-xsmall" style="flex-direction: column;justify-content: center;align-items: center;width: 1.5rem;height: 1.5rem;font-size: 1.5rem;display: flex;">'+
            '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0508 4.91006C18.134 3.98399 17.042 3.24973 15.8384 2.75011C14.6349 2.25049 13.3439 1.99552 12.0408 2.00006C6.58078 2.00006 2.13078 6.45006 2.13078 11.9101C2.13078 13.6601 2.59078 15.3601 3.45078 16.8601L2.05078 22.0001L7.30078 20.6201C8.75078 21.4101 10.3808 21.8301 12.0408 21.8301C17.5008 21.8301 21.9508 17.3801 21.9508 11.9201C21.9508 9.27006 20.9208 6.78006 19.0508 4.91006ZM12.0408 20.1501C10.5608 20.1501 9.11078 19.7501 7.84078 19.0001L7.54078 18.8201L4.42078 19.6401L5.25078 16.6001L5.05078 16.2901C4.22853 14.977 3.79192 13.4593 3.79078 11.9101C3.79078 7.37006 7.49078 3.67006 12.0308 3.67006C14.2308 3.67006 16.3008 4.53006 17.8508 6.09006C18.6183 6.85402 19.2265 7.76272 19.6402 8.76348C20.0539 9.76425 20.2648 10.8372 20.2608 11.9201C20.2808 16.4601 16.5808 20.1501 12.0408 20.1501ZM16.5608 13.9901C16.3108 13.8701 15.0908 13.2701 14.8708 13.1801C14.6408 13.1001 14.4808 13.0601 14.3108 13.3001C14.1408 13.5501 13.6708 14.1101 13.5308 14.2701C13.3908 14.4401 13.2408 14.4601 12.9908 14.3301C12.7408 14.2101 11.9408 13.9401 11.0008 13.1001C10.2608 12.4401 9.77078 11.6301 9.62078 11.3801C9.48078 11.1301 9.60078 11.0001 9.73078 10.8701C9.84078 10.7601 9.98078 10.5801 10.1008 10.4401C10.2208 10.3001 10.2708 10.1901 10.3508 10.0301C10.4308 9.86006 10.3908 9.72006 10.3308 9.60006C10.2708 9.48006 9.77078 8.26006 9.57078 7.76006C9.37078 7.28006 9.16078 7.34006 9.01078 7.33006H8.53078C8.36078 7.33006 8.10078 7.39006 7.87078 7.64006C7.65078 7.89006 7.01078 8.49006 7.01078 9.71006C7.01078 10.9301 7.90078 12.1101 8.02078 12.2701C8.14078 12.4401 9.77078 14.9401 12.2508 16.0101C12.8408 16.2701 13.3008 16.4201 13.6608 16.5301C14.2508 16.7201 14.7908 16.6901 15.2208 16.6301C15.7008 16.5601 16.6908 16.0301 16.8908 15.4501C17.1008 14.8701 17.1008 14.3801 17.0308 14.2701C16.9608 14.1601 16.8108 14.1101 16.5608 13.9901Z" fill="CURRENTCOLOR"></path></svg>'+'</div>'+
          '<div id="trigger-message" class="widget-button-text" >' + triggerMessage + '</div>'+
          '<span id="notification" style="position:absolute;top:-10px;right:0;background:red;color:#fff;border-radius:50%;padding:0px 6px;font-size:12px;">1</span>' +
        '</div>'+
      '</div>';
    

        var div = document.createElement('div');
        div.innerHTML = widgetHtml;
        document.body.appendChild(div.firstChild);

        var chatBox = document.getElementById('chat-box');
        var widgetButton = document.getElementById('widget-button');
        var sendMessage = document.getElementById('send-message');
        var userMessage = document.getElementById('user-message');
        var notification = document.getElementById('notification');
        var closeChat = document.getElementById('close-chat');

        widgetButton.addEventListener('click', function () {
            var isOpen = chatBox.style.display === 'block';
            chatBox.style.display = isOpen ? 'none' : 'block';
            notification.style.display = isOpen ? 'block' : 'none';
        });

        closeChat.addEventListener('click', function () {
            chatBox.style.display = 'none';
            notification.style.display = 'block';
        });

        sendMessage.addEventListener('click', function () {
            var message = userMessage.value;
            if (message.trim() !== '') {
                var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                var waLink;

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
                    waLink = 'whatsapp://send?phone=' + whatsappNumber + '&text=' + encodeURIComponent(message);
                } else {
                    waLink = 'https://api.whatsapp.com/send/?phone=' + whatsappNumber + '&text=' + encodeURIComponent(message);
                }

                window.open(waLink, '_blank');
                userMessage.value = '';
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
