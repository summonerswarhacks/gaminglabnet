$(document).ready(function(){
    /*
     * Generator
     * Created by Techman - Badmanz2k11
     */
    var windowsize = $(window).width();
    
    if (windowsize > 990) {
        $.lockfixed(".left-section",{offset: {top: 10, bottom: 100}});
    }
    
    $('nav ul .normal-menu a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 30
        }, 500);
        return false;
    });
    
    $('.mobile-menu').click(function(){
        $('.normal-menu').fadeToggle();
    });
    
    
    var $selected_device = '';
    var $selected_vip = '';
    var $selected_diamond = '';
    var $selected_starcoin = '';
    var lightbox = lity();
	
    $('#diamond-input').rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        fillClass: 'diamond_fill',
        handleClass: 'diamond_handle',

        // Callback function
        onInit: function() {},

        // Callback function
        onSlide: function(position, value) {
            $('.diamond-val').text(value);
            $selected_diamond = value;
        },

        // Callback function
        onSlideEnd: function(position, value) {}
    });
    
    $('#starcoin-input').rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        fillClass: 'starcoin_fill',
        handleClass: 'starcoin_handle',

        // Callback function
        onInit: function() {},

        // Callback function
        onSlide: function(position, value) {
            $('.starcoin-val').text(value);
            $selected_starcoin = value;
        },

        // Callback function
        onSlideEnd: function(position, value) {}
    });
    
    $('.device-select').click(function(){
        fixDeviceBox($(this));
    });
    
    function fixDeviceBox($parent_class) {
        resetAllDeviceBoxes();
        if($parent_class.hasClass('d-win')){
            $selected_device = 'DEVICE_IOS';
        }
        if($parent_class.hasClass('d-mac')){
            $selected_device = 'DEVICE_MAC';
        }
        if($parent_class.hasClass('d-ios')){
            $selected_device = 'DEVICE_IOS';
        }
        if($parent_class.hasClass('d-android')){
            $selected_device = 'DEVICE_ANDROID';
        }
        $parent_class.addClass('activated');
    }
    function resetAllDeviceBoxes() {
        var $device_win = $('.d-win');
        var $device_mac = $('.d-mac');
        var $device_ios = $('.d-ios');
        var $device_android = $('.d-android');
        
        if($device_win.hasClass('activated')){
            $device_win.removeClass('activated');
        }
        if($device_mac.hasClass('activated')){
            $device_mac.removeClass('activated');
        }
        if($device_ios.hasClass('activated')){
            $device_ios.removeClass('activated');
        }
        if($device_android.hasClass('activated')){
            $device_android.removeClass('activated');
        }
    }
    
    $('.vip-select').click(function(){
        fixVIPBox($(this));
    });
    
    function fixVIPBox($parent_class) {
        resetAllVIPBoxes();
        if($parent_class.hasClass('v-one')){
            $selected_vip = '1_FREE_RUNE';
        }
        if($parent_class.hasClass('v-two')){
            $selected_vip = '2_FREE_RUNES';
        }
        if($parent_class.hasClass('v-three')){
            $selected_vip = '3_FREE_RUNES';
        }
        if($parent_class.hasClass('v-four')){
            $selected_vip = '4_FREE_RUNES';
        }
        $parent_class.addClass('activated');
    }
    function resetAllVIPBoxes() {
        var $vip_one = $('.v-one');
        var $vip_two = $('.v-two');
        var $vip_three = $('.v-three');
        var $vip_four = $('.v-four');
        
        if($vip_one.hasClass('activated')){
            $vip_one.removeClass('activated');
        }
        if($vip_two.hasClass('activated')){
            $vip_two.removeClass('activated');
        }
        if($vip_three.hasClass('activated')){
            $vip_three.removeClass('activated');
        }
        if($vip_four.hasClass('activated')){
            $vip_four.removeClass('activated');
        }
    }
    
    $('.gen-button').click(function(){
        if($selected_device != '') {
            if($selected_diamond != 0) {
                if($selected_starcoin != 0) {
                    if($selected_vip != 0) {
                        if($('#msp_username').val() != '') {
                            $('.generator-section').fadeOut('slow', function(){
                                $('.gen-console-area').fadeIn('slow', function(){
                                    start_process($('#msp_username').val(), $selected_device, $selected_diamond, $selected_starcoin, $selected_vip, function(){
                                        console.log('locker');
                                        //content locker onclick code below this line
                                        javascript:gLoad_24729(); return false;
                                    });
                                    $('html, body').animate({
                                        scrollTop: $("#gen_section").offset().top - 10
                                    }, 100);
                                });
                            });
                        } else {
                            sweetAlert("Error", "Please enter your Summoners War ID.", "error");
                        }
                    } else {
                        sweetAlert("Error", "Please select the Runes you would like to generate.", "error");
                    }
                } else {
                    sweetAlert("Error", "Select the amound of Mana Stones to generate.", "error");
                }
            } else {
                sweetAlert("Error", "Select the amount of Crystals to generate.", "error");
            }
        } else {
            sweetAlert("Error", "Please select the device you use to play the game.", "error");
        }
    });
    
    
    var $console_text_area = $('.gen-dev-console');
    var $console_text_list = $('.dev-console-text');
    var $console_text_area_height = $console_text_area.height();

    function output_loading_message(text, delay){
        setTimeout(function(){
            var $loading_message_area = $('.gen-loading-msg');
            $loading_message_area.html(text);
        }, delay);
    }
    function output_to_console(text, delay){
        setTimeout(function(){
            var $output_text = $('<li><i class="fa fa-angle-right"></i> ' + text + '</li>');
            $output_text.hide().appendTo($console_text_list).fadeIn();
            $console_text_area.animate({scrollTop: $console_text_area_height}, 500);
            $console_text_area_height += $console_text_area.height();
        }, delay);
    }
    function output_to_console_green(text, delay){
        setTimeout(function(){
            var $output_text = $('<li class="console-green-text"><i class="fa fa-angle-right"></i> ' + text + '</li>');
            $output_text.hide().appendTo($console_text_list).fadeIn();
            $console_text_area.animate({scrollTop: $console_text_area_height}, 500);
            $console_text_area_height += $console_text_area.height();
        }, delay);
    }
    function output_to_console_red(text, delay){
        setTimeout(function(){
            var $output_text = $('<li class="console-red-text"><i class="fa fa-angle-right"></i> ' + text + '</li>');
            $output_text.hide().appendTo($console_text_list).fadeIn();
            $console_text_area.animate({scrollTop: $console_text_area_height}, 500);
            $console_text_area_height += $console_text_area.height();
        }, delay);
    }
    function output_to_console_yellow(text, delay){
        setTimeout(function(){
            var $output_text = $('<li class="console-yellow-text"><i class="fa fa-angle-right"></i> ' + text + '</li>');
            $output_text.hide().appendTo($console_text_list).fadeIn();
            $console_text_area.animate({scrollTop: $console_text_area_height}, 500);
            $console_text_area_height += $console_text_area.height();
        }, delay);
    }
    function start_process(username, device, diamonds, starcoins, vip, callback_function){
        //output_loading_message("Processing request", "Comunicating with our login servers");
        output_to_console("Performing server authentication: connect_to_server(332FS2);", 0);
        output_loading_message("Successully obtained server status verification", 300);
        output_to_console_green("Response: Successfully authenticated secure server connection.", 750);
        output_loading_message("Importing files for encryption of user request", 1200);
        output_to_console("Import: AES_256_Keys();", 1400);
        output_to_console("Import: Open_SSL_Encryption();", 1600);
        output_to_console("Import: Server_332FS2_Keychain();", 1880);
        output_loading_message("Importing of encryption files and methods completed", 2000);
        output_to_console_green("Response: All files were imported successfully.", 2400);
        output_to_console("Retrieving form input information: kernel.forms.obtain_user_information();", 2670);
        output_loading_message("User HTTP request information has been obtained", 2900);
        output_to_console_green("Response: Obtained user form input information.", 3100);
        output_to_console_yellow("Username: " + username, 3400);
        output_to_console_yellow("Device: " + device, 3500);
        output_to_console_yellow("Mana_Stones_Amount: " + diamonds, 3500);
        output_to_console_yellow("Crystals_Amount: " + starcoins, 3500);
        output_to_console_yellow("Freebies: " + vip, 3500);
        output_to_console("Injecting the information securely into encryption server: kernel.generator.start_process();", 4200);
        output_loading_message("User information is being encrypted", 4400);
        output_to_console("Encrypting request: kernel.open_ssl_enc(" + username + ");", 4700);
        output_loading_message("User information encryption completed", 5000);
        output_to_console_green("Response: Successfully encrypted user request.", 5300);
        output_to_console_green("Encrypted Information: 608c4a1b463ec35ad0354c1edd5ae961add292b6675cbca8ac41d70d37d4e2a7dba2b", 5600);
        output_to_console("Retrieving current SW server script: read_SW_server_source();", 6000);
        output_loading_message("Obtaining methods to create a backdoor into SW server", 6100);
        output_to_console_green("Response: Successfully obtained current server script.", 6400);
        output_to_console_yellow("MD5 hash: 2c58b6d627de1c58cc4fda16e1037a08", 6900);
        output_to_console_yellow("Local IP address: 192.168.5.6", 7100);
        output_to_console_yellow("Current version: 2.320.23.1", 7200);
        output_to_console_yellow("Login server version: 1.32.4.5", 7300);
        output_to_console_yellow("Number external methods: 43267", 7400);
        output_to_console_yellow("Initialization method: kernel.cc_server.application.main.init();", 7600);
        output_to_console("Injecting into main method: inject_ssl(kernel.cc_server.application.main.init);", 8000);
        output_loading_message("Processing original user request to confirm human source", 8250);
        output_to_console_green("Response: Successfully injected into SW servers.", 8430);
        setTimeout(function(){
            $('.loading-spinner').css('border-left', '1.1em solid #be2929');
        }, 8900);
        output_to_console_red("Automatic human verification failed.", 8900);
        output_to_console_red("Please complete manual human verification.", 8900);
        output_to_console_red("Initating redirect procedure.", 8900);
        output_loading_message("Redirecting to human verification screen", 9400);
        setTimeout(function(){
            $('#myModal').modal('show');
        }, 12500);
    }
	
	
	/*
	 * Live Chat
	 */

	var livechat_name = '';

	var livechat_text_area = $('.livechatListArea');
	var livechat_text_list = $('.chatList');
	var livechat_text_area_height = livechat_text_area.height();

	var name_colors = ['#d4a112', '#987c2f', '#b02643', '#d72248', '#9d22d7', '#a65fc7', '#2771bc', '#1a82ed', '#28ba4a', '#136b28', '#9bc716'];

	var chat_names = ['Richard23', 'Philip', 'Rob001', 'Hill213', 'Prim', 'Grequod', 'Moseeld30', 'Allichere', 'Munplad60', 'Therainged', 'Perseent', 'Wasice59', 'Arrent', 'Quot1991', 'Yourlenis'];

	var chat_messages = ["Awesome,its rare to find working generator like this one","Anyone tried this already?","Does it work in NA?","Why this is so easy lol?","This is incredible, never thought it would work.","I get Resource in a minute.","shy i see survey ?","its to protect from spamming, first try to use, i got no Survey request, but for second try i need to get Finish 1 Survey","OMG!","LOL!","ROFL!","Real","gayyyy","easy","bro","What can I do here?","Shut up man I love this website","hi guys","How much resource you've generated so far?","what about surveys on mobile phone?","Is this free?","How long do you have to wait?","Yea","No","I know","Exactly why this is so good","uhm","maybe","I can imagine this must be annoying for the one who play with skill","Is this ban secure?","Thanks man I appreciate this.","Cool =)","<message deleted>","oh god","damn","I love this","Never imagined this would work but damn its so simple","saw this on forums pretty impressive","yo guys dont spam okay?","anyone up for a game?","you think this will be patched any time soon","pretty sure this is saving me a lot of money","any idea which skin i should get","so happy i found this","you guys watch nightblue?","I have seen this generator on hotshot stream i think","just wow","When do I get my resource ??","a friend told me about this","thanks to whoever spams this website Finish my survey now","how can finish this survey quickly?","so far I am cool with this generaor","can I get off this survey easily?","bye guys, already finish my survey, and resources generated successfully","okay i am stacked now with survey","finished survey is easy, if you fill using valid data","incredible","three minutes ago cannot get fast resource, now i have and its works perfectly","need to go now","brb","You should give it a try","dont regret being here","fucking generator is real","first time ever this makes sense","Does everyone have a different survey ","got my resource in 5 minutes only :D","what happen after finish a survey","after finish a survey you'll get the resiurce ","today is lucky day","this is the best generator because we all have more than a chance","i think everyone can do a survey quickly","can we get more than one survey ?, first time success, and want to try for my sister account","yes","abselutely","I got all resource for my girlfriend too"];

	setInterval(function(){
		add_livechat_msg(chat_names[getRandomInt(1, chat_names.length - 1)], name_colors[getRandomInt(1, name_colors.length - 1)], chat_messages[getRandomInt(1, chat_messages.length - 1)]);
	}, getRandomInt(1500, 6000));


	$('.livechatSubmtBtn').click(function(){
		if(livechat_name == '') {
			$('.livechatNameBox').show();
		} else {
			if($('.livechatMsg').val() != '') {
				add_livechat_msg(livechat_name, '#136b28', $('.livechatMsg').val());
				$('.livechatMsg').text('');
			} else {
				sweetAlert("Error", "Please enter a message.", "error");
			}
		}
	});

	$('.livechatNicknameBtn').click(function(){
		var name_input = $('#livechat_name');
		if(name_input.val() != '') {
			livechat_name = name_input.val();
			$(this).parents('.livechatNameBox').hide();
		} else {
			sweetAlert("Error", "Please enter a nickname.", "error");
		}
	});

	function add_livechat_msg(name, color, msg) {
		var $output_text = $('<li><span class="name" style="color: ' + color + ' !important;">' + name + '</span><span class="message">: ' + msg + '</span></li>');
		$output_text.hide().appendTo(livechat_text_list).fadeIn();
		livechat_text_area.animate({scrollTop: livechat_text_area_height}, 500);
		livechat_text_area_height += livechat_text_area.height();
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
});