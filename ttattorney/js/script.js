//test
jQuery(window).load(function () {
    resizing();
});
jQuery(window).resize(function () {
    resizing();
});
jQuery(document).ready(function () {
    setBreakPoints();
});

//Check Mobile Devices
function mobileCheck(){
    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);
    //Check Device //All Touch Devices
    if ( isTouch ) {
        jQuery('html').addClass('touch');
    }
    else {
        jQuery('html').addClass('no-touch');
    };
};
//run function
mobileCheck();
function resizing() {
    /*
     *  Do action on resizing window or document
     *  This is normally is used on mobile devices when rotating 
     */
    stickyMenu();
}

function setBreakPoints() {
    /*
     * Check the current viewport and attach class name to the body
     * Used for responsive styling
     */
    var $break_point_xlarge = "1200px";
    var $break_point_large = "992px"; /*Desktop tablet landscape*/
    var $break_point_medium = "767px"; /*Tablet*/
    var $break_point_medium_ipad = "768px"; /*Tablet*/
    var $break_point_midsmall = "640px"; /*Mobile Landscape*/
    var $break_point_small = "480px"; /*Mobile*/

    enquire.register("screen and (max-width:" + $break_point_xlarge + ")", {
        match: function () {
            jQuery('body').addClass('bp-xlarge');
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-xlarge');
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
    enquire.register("screen and (min-width:" + $break_point_xlarge + ")", {
        match: function () {
            jQuery('body').addClass('bp-xxlarge');
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-xxlarge');
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
    enquire.register("screen and (max-width:" + $break_point_large + ")", {
        match: function () {
            jQuery('body').addClass('bp-large');
            slickSlides();
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-large');
            slickSlides();
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
    enquire.register("screen and (max-width:" + $break_point_medium + ")", {
        match: function () {
            jQuery('body').addClass('bp-medium');
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-medium');
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
    enquire.register("screen and (max-width:" + $break_point_medium_ipad + ")", {
        match: function () {
            jQuery('body').addClass('bp-medium_ipad');
            slickSlides();
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-medium_ipad');
            slickSlides();
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
    enquire.register("screen and (max-width:" + $break_point_midsmall + ")", {
        match: function () {
            jQuery('body').addClass('bp-midsmall');
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-midsmall');
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
    enquire.register("screen and (max-width:" + $break_point_small + ")", {
        match: function () {
            jQuery('body').addClass('bp-small');
        },
        unmatch: function () {
            jQuery('body').removeClass('bp-small');
        },
        setup: function () {},
        deferSetup: true,
        destroy: function () {}

    });
}
function removeJsAppliedStyles() {
    /*
     * Cleanup class. Remove styling applied for responsive
     */
    jQuery('#block-bean-tools-and-resources-generic-bloc .inside').removeAttr('style');
}

function showSearchIcon() {
    /*
     * On Reponsive device add element to show the search box
     */
    jQuery('.responsive-search-icon').remove();

    if (jQuery('.bp-medium').length > 0) {
        jQuery('header#navbar .header > .container').prepend('<div class="responsive-search-icon">search</div>');
        jQuery('.block-search-api-page').css('width', jQuery(document).width() - 30 + 'px');
    } else {
        jQuery('.responsive-search-icon').remove();
        jQuery('.block-search-api-page').removeAttr('style');
    }

    jQuery(document).on('click', '.responsive-search-icon', function () {
        console.log('Clicked');
        console.log(jQuery(this).attr('class'));
        if (jQuery(this).hasClass('opened')) {
            jQuery('.block-search-api-page').slideUp(function () {
                jQuery('.responsive-search-icon').removeClass('opened');
            });
        } else {
            jQuery('.block-search-api-page').slideDown(function () {
                jQuery('.responsive-search-icon').addClass('opened');
            });
        }
    });
}

/*function slickSlides() {
    if (jQuery('.bp-medium_ipad').length > 0) {
        slideHomeMain('attach');
    } else {
        slideHomeMain('detach');
    }

    if (jQuery('.bp-large').length > 0) {
        slideApplicationProcessBody('attach');
    } else {
        slideApplicationProcessBody('detach');
    }

}*/
/*function slideHomeMain($action) {
    var $element = '#quicktabs-container-homepage_main_tab';
    if ($action === 'attach') {
        try {
            jQuery($element).slick({
                adaptiveHeight: true,
                arrows: false,
                dots: true
            });
        } catch (exp) {
            //console.log('Attaching slick issue');
        }
    } else {
        try {
            if (jQuery($element).hasClass('slick-initialized')) {
                jQuery($element).slick('unslick');
            }
        } catch (exp) {
            //console.log('Attaching slick issue');
        }
    }

    jQuery($element).on('swipe', function (event, slick, direction) {

        var $active_li = "#" + jQuery(this).find('.slick-active').attr('id').replace("-tabpage-", "-tab-");
        jQuery($active_li).parent('li').siblings('li').removeClass('active'); //remove active class from all tabs
        jQuery($active_li).parent('li').addClass('active'); //add active class to the correct tab
        // left
    });

}*/

function stickyMenu() {
    // Set sticky only when on large screen
    if (jQuery('.bp-medium').length > 0) {
        jQuery(".navbar-default").trigger("sticky_kit:detach");
    } else {
        jQuery(".navbar-default").stick_in_parent();
    }
}

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
(function () {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function (d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = b(document);
        null == w && (w = !0);
        J = function (a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length)
                    throw"failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) && h.css("position", a.css("position"));
                x = function () {
                    var c, f, e;
                    if (!G && (I = A.height(), c = parseInt(g.css("border-top-width"), 10), f = parseInt(g.css("padding-top"), 10), d = parseInt(g.css("padding-bottom"), 10), n = g.offset().top + c + f, C = g.height(), m && (v = m = !1, null == p && (a.insertAfter(h), h.detach()), a.css({position: "", top: "", width: "", bottom: ""}).removeClass(t), e = !0), F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q,
                            u = a.outerHeight(!0), r = a.css("float"), h && h.css({width: a.outerWidth(!0), height: u, display: a.css("display"), "vertical-align": a.css("vertical-align"), "float": r}), e))
                        return l()
                };
                x();
                if (u !== C)
                    return D = void 0, c = q, z = E, l = function () {
                        var b, l, e, k;
                        if (!G && (e = !1, null != z && (--z, 0 >= z && (z = E, x(), e = !0)), e || A.height() === I || x(), e = f.scrollTop(), null != D && (l = e - D), D = e, m ? (w && (k = e + u + c > C + n, v && !k && (v = !1, a.css({position: "fixed", bottom: "", top: c}).trigger("sticky_kit:unbottom"))), e < F && (m = !1, c = q, null == p && ("left" !== r && "right" !== r || a.insertAfter(h),
                                h.detach()), b = {position: "", width: "", top: ""}, a.css(b).removeClass(t).trigger("sticky_kit:unstick")), B && (b = f.height(), u + q > b && !v && (c -= l, c = Math.max(b - u, c), c = Math.min(q, c), m && a.css({top: c + "px"})))) : e > F && (m = !0, b = {position: "fixed", top: c}, b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(b).addClass(t), null == p && (a.after(h), "left" !== r && "right" !== r || h.append(a)), a.trigger("sticky_kit:stick")), m && w && (null == k && (k = e + u + c > C + n), !v && k)))
                            return v = !0, "static" === g.css("position") && g.css({position: "relative"}),
                                    a.css({position: "absolute", bottom: d, top: "auto"}).trigger("sticky_kit:bottom")
                    }, y = function () {
                        x();
                        return l()
                    }, H = function () {
                        G = !0;
                        f.off("touchmove", l);
                        f.off("scroll", l);
                        f.off("resize", y);
                        b(document.body).off("sticky_kit:recalc", y);
                        a.off("sticky_kit:detach", H);
                        a.removeData("sticky_kit");
                        a.css({position: "", bottom: "", top: "", width: ""});
                        g.position("position", "");
                        if (m)
                            return null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.remove()), a.removeClass(t)
                    }, f.on("touchmove", l), f.on("scroll", l), f.on("resize",
                            y), b(document.body).on("sticky_kit:recalc", y), a.on("sticky_kit:detach", H), setTimeout(l, 0)
            }
        };
        n = 0;
        for (K = this.length; n < K; n++)
            d = this[n], J(b(d));
        return this
    }
}).call(this);



//makes the megamenu top navigation clickable when already toggled.
jQuery( document ).ready(function() {
    jQuery("a.dropdown-toggle").click(function(){
        var expandCheck = jQuery(this).attr("aria-expanded");
        var urlLocation = jQuery(this).attr("href");
        if (expandCheck == "true" || (jQuery('html').hasClass("no-touch"))) {
            window.location.href = urlLocation;
        }
    });
});