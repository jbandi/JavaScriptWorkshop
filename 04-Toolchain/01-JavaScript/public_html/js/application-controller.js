(function (global) {
    var ApplicationController = function (spec) {
        var that = this;
        this.service = spec.service;
        this.containerId = spec.containerId;
        this.model = spec.model;

        this.transitionListeners = {};
        if (spec.pageChanged) {
            $.each(spec.pageChanged, function (pageId, listener) {
                that.addTransitionListener(pageId, listener);
            });
        }
        this.beforeTransitionListeners = {};
        if (spec.beforePageChange) {
            $.each(spec.beforePageChange, function (pageId, listener) {
                that.addTransitionListener(pageId, listener, true);
            });
        }
    };
    ApplicationController.prototype.init = function () {
        var that = this;
        this.container = $("#" + this.containerId);
        // register transition listener to know when new page is shown
        that.pages = that.container.find("section").on("transitionend webkitTransitionEnd mozTransitionEnd", function () {
            if (that.isAnimating) {
                that.lastPage.removeClass("prev").addClass("off");
                that.isAnimating = false;
                that.afterPageTransition(that.currentPage, that.lastPage, that.data);
            }
        });
        that.currentPage = that.container.find(".show");
        that.isAnimating = false;
        
        $("[data-nav]").each(function () {
            var trigger = $(this);
            trigger.on("click", function () {
                var nextPage = $("#" + trigger.data("nav")),
                    data = trigger.data("value");
                
                
                if (!that.isAnimating) {
                    that.lastPage = that.currentPage;
                    that.currentPage = nextPage;
                    that.data = data;
                    
                    that.isAnimating = true;
                    that.lastPage.removeClass("show").addClass("prev");
                    nextPage.removeClass("off").addClass("show");
                    that.beforePageTransition(that.currentPage, that.lastPage, that.data);
                }
            });
        });
        
        this.initAnimations();
    };
    ApplicationController.prototype.afterPageTransition = function (currentPage, lastPage, data) {
        var that = this,
            pageId = currentPage.attr("id");
        if (this.transitionListeners[pageId]) {
            $.each(this.transitionListeners[pageId], function () {
                this.call(that, currentPage, lastPage, data);
            });
        }
    };
    ApplicationController.prototype.beforePageTransition = function (currentPage, lastPage, data) {
        var that = this,
            pageId = currentPage.attr("id");
        if (this.beforeTransitionListeners[pageId]) {
            $.each(this.beforeTransitionListeners[pageId], function () {
                this.call(that, currentPage, lastPage, data);
            });
        }
    };
    ApplicationController.prototype.addTransitionListener = function (pageId, listener, before) {
        if (before) {
            if (!this.beforeTransitionListeners[pageId]) {
                this.beforeTransitionListeners[pageId] = [];
            }
            this.beforeTransitionListeners[pageId].push(listener);
        } else {
            if (!this.transitionListeners[pageId]) {
                this.transitionListeners[pageId] = [];
            }
            this.transitionListeners[pageId].push(listener);
        }
    };
    ApplicationController.prototype.initAnimations = function () {
        var that = this;
        $("[data-anim]").each(function () {
            var animTarget = $(this),
                anim = animTarget.data("anim"),
                trigger = animTarget.data("trigger");
            
            // at the end we reset the animation class
            animTarget.on("animationend mozAnimationEnd webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                animTarget.removeClass(anim);
            });
            
            if (trigger) {
                // register by trigger (click, mouseover...)
                animTarget.on(trigger, function () {
                    animTarget.addClass(anim);
                });
            } else {
                // start on page show
                var pageId = animTarget.closest("section").attr("id");
                that.addTransitionListener(pageId, function () {
                    // small delay after page show before trigger the animation
                    setTimeout(function () {
                        animTarget.addClass(anim);
                    }, 300);
                });
            }
        });
    };
    global.ApplicationController = ApplicationController;
}(this));