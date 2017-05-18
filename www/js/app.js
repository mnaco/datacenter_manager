/**
 * Server Canvas interface
 * 
 * 
 * 
 */

jQuery(function ($) {
	
	var ServerCanvas = {
        serversList:  $('#serversList > ul'),
        // initialise app
		init: function () {
			this.bindEvents();
		},
        // bind bindEvent:
        // 'add new server'
        // 'destry server'
        // 'add an app'
		bindEvents: function () {
			$('#new-server').on('click', this.create.bind(this));
			$('#destroy-server').on('click', this.destroy.bind(this));
			$('#appsList').on('click', this.addApp.bind(this));
		},
        // render view
		render: function () {
		},
        // create a server
		create: function (e) {
            
            var newServer = '<li class="newServer"><div><article>setting up new server ...</article><div></li>';
            
            $(newServer).appendTo(this.serversList).each(function(){
                var self = $(this);
                setTimeout(function() {
                   self.find('article').html('new server is ready');
                   self.removeClass('newServer');
                }, 1500)
            });
		},
        // destroy server
		destroy: function (e) {
            this.serversList.find('li').last().remove();
			this.render();
		},
        // add an app to server
        // todo: recursive 
        addApp: function(e) {
            if (!$(e.target).data('server-app')) 
                return;
        }
	};

	ServerCanvas.init();
});