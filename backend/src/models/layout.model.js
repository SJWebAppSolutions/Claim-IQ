const mongoose = require("mongoose");

const layoutSchema = new mongoose.Schema(
  {
    
    scripts: {
      head: [String],
    },

    header: {
      logo: String,
      title: String,
      subtitle:String,

      menu: [
        {
          label: String,
          path: String,
          exact: Boolean,
        },
      ]
    },

    footer: {
      brand: {
        logo: String,
        title: String,
        subtitle: String,
      },

      navigation: [
        { label: String, path: String }
      ],

      social: [
        { icon: String, url: String }
      ],

      contact: [
        { icon: String, value: String }
      ],
    },
      
    seo:{
      type: [String],
      default: []
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Layout", layoutSchema);
