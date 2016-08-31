var postTypes = {
    "Wildcard" : {
        'name'  : "Wildcard",
        'desc'  : "A post of your choice",
    },
    "Business highlight" : {
        'name'  : "Business highlight",
        'desc'  : "Showcase a product, service, or unique element",
    },
    "Consumer prompt" : {
        'name'  : "Consumer prompt",
        'desc'  : "Question, fill-in-the-blank, or multiple choice",
    },
    "Testimonial" : {
        'name'  : "Testimonial",
        'desc'  : "Highlight existing or encourage new",
    },
    "Feel good" : {
        'name'  : "Feel good",
        'desc'  : "Comical, sentimental, or inspirational graphic",
    },
    "Informative of educational" : {
        'name'  : "Informative of educational",
        'desc'  : "A fact or tip about the business or the industry at large",
    },
    "Customer-specific photo" : {
        'name'  : "Customer-specific photo",
        'desc'  : "Something reminiscent of being at the business",
    },
    "Conversational" : {
        'name'  : "Conversational",
        'desc'  : "Conversational graphic (or text-only) to encourage comments",
    },
    "Consumer Prompt" : {
        'name'  : "Consumer Prompt",
        'desc'  : "Question, fill-in-the-blank, or multiple choice",
    },
    "Introduction" : {
        'name'  : "Introduction",
        'desc'  : "Business overview, year founded, etc",
    },
    "Local love" : {
        'name'  : "Local love",
        'desc'  : "Regional celebration or local event that’s relevant to the business",
    },

};

var customers = {
  "Liberty Inn" : {
    "name"  : "Liberty Inn",
    "logo"  : "",
    "posts" : [
      {
        "postType" : "Introduction",
        "caption"  : "Waynesboro’s been our home for 16 years. Even if you're just here to visit, we know you'll feel right at home too.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmbS1LRHdHMWFSeFk"
      },
      {
        "postType" : "Business highlight",
        "caption"  : "We renovated all our rooms to bring you the most comfortable lodging -- and they're waiting for you!",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmc182ZDBReFNfYjg"
      },
      {
        "postType" : "Local love",
        "caption"  : "True or true: When you’re on vacation, there’s nothing better than stretching your legs in a beautiful place.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmb0NsRDdCeWh4bzA"
      },
      {
        "postType" : "Business highlight",
        "caption"  : "Find a conference room for your next corporate meeting?",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmVkNjeDN6Ul82SWs"
      },
      {
        "postType" : "Testimonial",
        "caption"  : "When you’re on vacation, you should want for nothing.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmNUFQTk5Sd1hHVzg"
      },
      {
        "postType" : "Wildcard",
        "caption"  : "Start the day with a fresh cuppa in your room.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmZ19UWWtxOFRKR2s"
      },
      {
        "postType" : "Customer-specific photo",
        "caption"  : "Goodbye, shoes. Hello, pillow.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmTWh4VVk5d0Z5cHc"
      },
      {
        "postType" : "Feel good",
        "caption"  : "We'll be here next time you need us.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmdVJwNDlaSjAyZUk"
      },
      {
        "postType" : "Local love",
        "caption"  : "In town for a while? Check out the old mill.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmZ0JOTWkydThzM1E"
      },
      {
        "postType" : "Feel good",
        "caption"  : "Hot shower. Fresh towels. Yes.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmbVRyWEppQUhwZWs"
      },
      {
        "postType" : "Testimonial",
        "caption"  : "Happy to be your home away from home.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmdHE4S0xiOUVsd3c"
      },
      {
        "postType" : "Business highlight",
        "caption"  : "Proud to offer wifi in every room.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmOVE0eDI3VkU5eHc"
      },
    ]
  },
  "Julie Darling Donuts" : {
    "name"  : "Julie Darling Donuts",
    "logo"  : "",
    "posts" : [
      {
        "postType" : "Introduction",
        "caption"  : "We've loved making #Chattanooga a sweeter place -- thanks for being so sweet back to us!",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmdWF0Q3doZU1iZkk",
      },
      {
        "postType" : "Business highlight",
        "caption"  : "Baked fresh every day. And waiting patiently. For you.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmNE9NVFM4eUNOU3M"
      },
      {
        "postType" : "Feel good",
        "caption"  : "Our well runs deep.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmdzhFUUFIcWtSZnM"
      },
      {
        "postType" : "Feel good",
        "caption"  : "Truth.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmS29HTVdyTGtGV3M"
      },
      {
        "postType" : "Feel good",
        "caption"  : "School's back in session! And now for that most important of all lessons...",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCma2pYWGE5cFlCMGs"
      },
      {
        "postType" : "Feel good",
        "caption"  : "Don't ever forget it.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmYTl5akkzbnUxTXc"
      },
      {
        "postType" : "Feel good",
        "caption"  : "You must choose, but choose wisely...",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmancwbmc5eVRCQ1U"
      },
      {
        "postType" : "Testimonial",
        "caption"  : "We're all ears.",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmc0NRVnZiNWxwTjA"
      },
      {
        "postType" : "Testimonial",
        "caption"  : "Exactly we feel at the end of each day...",
        "image"    : "https://docs.google.com/uc?export=&id=0B_TWeTee0fCmZld5bV9MMjBuNzA"
      },
    ]
  },
};



$(window).load(function(){
  // $.each(postTypes, function(i) {
  //   $("#postTypes").append("<li>"+(postTypes[i].name)+"</li>");
  // });

  $.each(customers, function(n) {
    $("#sequences").append("<h1 class='customerName'>"+customers[n].name+"</h1>");
    $.each(customers[n].posts, function(i,post) {
      $("#sequences").append("<div class='postDisplay'>"+
                             "<p class='postTypeLabel'>"+
                             (post.postType != "" ? "<strong>"+postTypes[post.postType].name+"</strong>" : "")+
                             (post.postType != "" ? "<span>"+postTypes[post.postType].desc+"</span>" : "")+
                             "</p>"+
                             "<div class='tile'><div class='imageWrapper'>"+
                             "<img src='"+post.image+"' /></div>"+
                             (post.caption != undefined ? "<p class='caption'>"+post.caption+"</p>" : "") +
                             "</div>"+
                             "</div>");
    });

  });

  // $("#sequences").append("<img src='"+customers[Object.keys(customers)[0]].posts[0].image+"' />");


});
