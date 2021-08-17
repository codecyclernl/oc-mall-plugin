(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{417:function(s,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"addressform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addressform"}},[s._v("#")]),s._v(" AddressForm")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("AddressForm")]),s._v(" component displays a address edit form.")]),s._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[s._v("#")]),s._v(" Properties")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("All of these properties can be filled with URL parameters and should not be modified directly.")])]),s._v(" "),a("h3",{attrs:{id:"address-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-string"}},[s._v("#")]),s._v(" "),a("code",[s._v("address")]),s._v(" (string)")]),s._v(" "),a("p",[s._v("A "),a("code",[s._v("HashId")]),s._v(" of an Address model. If "),a("code",[s._v("new")]),s._v(" is passed, a new Address model will be created.")]),s._v(" "),a("h3",{attrs:{id:"redirect-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect-string"}},[s._v("#")]),s._v(" "),a("code",[s._v("redirect")]),s._v(" (string)")]),s._v(" "),a("p",[s._v("Whether to redirect the user to the "),a("code",[s._v("checkout")]),s._v(" or "),a("code",[s._v("account")]),s._v(" page.")]),s._v(" "),a("h3",{attrs:{id:"set-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-string"}},[s._v("#")]),s._v(" "),a("code",[s._v("set")]),s._v(" (string)")]),s._v(" "),a("p",[s._v("Whether to set the address as "),a("code",[s._v("billing")]),s._v(" or "),a("code",[s._v("shipping")]),s._v(" address for the user's cart after saving.")]),s._v(" "),a("h2",{attrs:{id:"example-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations"}},[s._v("#")]),s._v(" Example implementations")]),s._v(" "),a("h3",{attrs:{id:"display-the-address-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-the-address-form"}},[s._v("#")]),s._v(" Display the address form")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("title")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("Address")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("url")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("/address/:address?/:redirect?/:set?")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("session")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("security")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("user")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("redirect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("home")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("addressForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("address")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("{{ :address }}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("redirect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("{{ :redirect }}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("{{ :set }}")]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);