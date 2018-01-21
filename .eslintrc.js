module.exports = {
   "extends": ["airbnb", "prettier", "prettier/react"],
   "plugins": ["prettier"],
   "parserOptions": {
      "ecmaVersion": 2016,
      "sourceType": "module",
      "ecmaFeatures": {
         "jsx": true
      }
   },
   "env": {
      "es6": true,
      "browser": true,
      "node": true
   },
   "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "linebreak-style": ["error", "windows"],
      "jsx-a11y/label-has-for": [2, {
         "components": ["Label"],
         "required": {
            "every": ["id"]
         },
         "allowChildren": false
      }],
      "jsx-a11y/anchor-is-valid": ["error", {
         "components": ["Link"],
         "specialLink": ["hrefLeft", "hrefRight"],
         "aspects": ["preferButton"]
      }]
   }
};