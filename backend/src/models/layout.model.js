const mongoose = require("mongoose");

const layoutSchema = new mongoose.Schema(
  {
    
    scripts: {
      head: [String],
    },

    header: {
      logo: String,

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
      },

      navigation: [
        { label: String, path: String }
      ],

      social: [
        { icon: String, name:String, iconUrl: String }
      ],

      contact: [
        { name: String, value: String }
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
